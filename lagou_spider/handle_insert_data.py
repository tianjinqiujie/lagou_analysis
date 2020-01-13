#-*- coding:utf-8 -*-
from collections import Counter
from sqlalchemy import func
from lagou_spider.create_lagou_tables import Lagoutables
from lagou_spider.create_lagou_tables import Session
import time


class HandleLagouData(object):
    def __init__(self):
        # 实例化Session信息
        self.mysql_session = Session()
        self.date = time.strftime("%Y-%m-%d",time.localtime())

    # 数据的存储方法
    def insert_item(self,item):
        # 今天
        date = time.strftime("%Y-%m-%d",time.localtime())
        # 存储数据结构
        data = Lagoutables(
            positionId = item['positionId'],
            longitude = item['longitude'],
            latitude=item['latitude'],
            positionName=item['positionName'],
            workYear=item['workYear'],
            education=item['education'],
            jobNature=item['jobNature'],
            financeStage=item['financeStage'],
            companySize=item['companySize'],
            industryField=item['industryField'],
            city=item['city'],
            positionAdvantage=item['positionAdvantage'],
            companyShortName=item['companyShortName'],
            companyFullName=item['companyFullName'],
            district=item['district'],
            companyLabelList=','.join(item['companyLabelList']),
            salary=item['salary'],
            crawl_date=date
        )

        # 在存储数据之前。先来查询是否有这条岗位信息
        query_result = self.mysql_session.query(Lagoutables).filter(Lagoutables.crawl_date == date,
                                                                    Lagoutables.positionId == item['positionId']).first()
        if query_result:
            print('该岗位信息已存在%s:%s:%s'%(item['positionId'],item['city'],item['positionName']))
        else:
            # 插入数据
            self.mysql_session.add(data)
            # 提交数据到数据库
            self.mysql_session.commit()
            print('新增岗位信息%s'%item['positionId'])

    # 行业信息
    def query_industryfield_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.industryField).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items() if x[1]>100]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data_list'] = data_list
        return info

    # 查询薪资情况
    def query_salary_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.salary).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items() if x[1]>70]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data_list'] = data_list
        return info

    # 查询工作年限情况
    def query_workyear_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.workYear).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items()]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data_list'] = data_list
        return info

    # 查询学历信息
    def query_education_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.education).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items()]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data'] = data
        info['data_list'] = data_list
        return info

    # 岗位发布数量，折线图
    def query_job_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.crawl_date,func.count(Lagoutables.id)).group_by(Lagoutables.crawl_date).all()
        name_list = [name[0] for name in result]
        data_list = [name[1] for name in result]
        info['x_name'] = name_list
        info['data_list'] = data_list
        return info

    # 根据城市计数
    def query_city_result(self):
        info = {}
        result = self.mysql_session.query(Lagoutables.city, func.count(Lagoutables.id)).filter(Lagoutables.crawl_date == self.date).group_by(
            Lagoutables.city).all()
        name_list = [name[0] for name in result]
        data_list = [name[1] for name in result]
        data = [{"name": x[0], "value": x[1]} for x in result]
        info['data'] = data
        info['x_name'] = name_list
        info['data_list'] = data_list
        return info

    # 融资情况
    def query_financestage_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.financeStage).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items()]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data_list'] = data_list
        info['data'] = data
        return info

    # 公司规模
    def query_companysize_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.companySize).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items()]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data_list'] = data_list
        info['data'] = data
        return info

    # 任职情况
    def query_jobNature_result(self):
        info = {}
        # 查询今天抓取的数据
        result = self.mysql_session.query(Lagoutables.jobNature).filter(Lagoutables.crawl_date == self.date).all()
        result_list1 = [x[0].split(',')[0] for x in result]
        result_list2 = [x for x in Counter(result_list1).items()]
        # 填充的是series里面的data
        data = [{"name":x[0],"value":x[1]} for x in result_list2]
        name_list = [name['name'] for name in data]
        data_list = [name['value'] for name in data]
        info['x_name'] = name_list
        info['data_list'] = data_list
        info['data'] = data
        return info

    # 抓取数量
    def count_result(self):
        info = {}
        all_count = self.mysql_session.query(Lagoutables.id).count()
        today_count = self.mysql_session.query(Lagoutables.id).filter(Lagoutables.crawl_date == self.date).count()
        return all_count,today_count
lagou_mysql = HandleLagouData()
lagou_mysql.query_industryfield_result()