#-*- coding:utf-8 -*-
import re
import time
import json
import requests
from lagou_spider.handle_insert_data import lagou_mysql,KD


class HandleLaGou(object):
    def __init__(self):
        # 使用session保存cookies信息
        self.lagou_session = requests.session()
        self.header = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.80 Safari/537.36'
        }
        self.city_list = ""


    # 获取全国所有城市列表的方法
    def handle_city(self):
        city_search = re.compile(r'www\.lagou\.com\/.*\/">(.*?)</a>')
        city_url = "https://www.lagou.com/jobs/allCity.html"
        city_result = self.handle_request(method="GET",url=city_url)
        # 使用正则表达式获取拉钩列表
        self.city_list = city_search.findall(city_result)
        self.lagou_session.cookies.clear()

    def handle_city_job(self,city):
        first_request_url = "https://www.lagou.com/jobs/list_python?&px=default&city=%s#filterBox"%city
        first_response = self.handle_request(method="GET",url=first_request_url)
        total_page_search = re.compile(r'class="span\stotalNum">(\d+)</span>')
        try:
            total_page = total_page_search.search(first_response).group(1)
        # 由于没有岗位信息造成exception
        except:
            return
        else:
            for i in range(1,int(total_page)+1):
                data = {
                    "pn":i,
                    "kd":KD
                }
                page_url = "https://www.lagou.com/jobs/positionAjax.json?px=default&city=%s&needAddtionalResult=false"%city
                referer_url = "https://www.lagou.com/jobs/list_python?&px=default&city=%s"%city
                # referer的URL需要encode
                self.header['Referer'] = referer_url.encode()
                response = self.handle_request(method="POST",url=page_url,data=data,info=city)
                lagou_data = json.loads(response)
                job_list = lagou_data['content']['positionResult']['result']
                for job in job_list:
                    lagou_mysql.insert_item(job)

    def handle_request(self,method,url,data=None,info=None):
        while True:
            # 加入代理
            # proxyinfo = "http://180.122.146.73:26811"
            proxyinfo_list = ["http://123.169.103.118:9999","http://114.104.128.64:9999","http://183.146.157.235:9999",
                              "http://171.12.112.56:9999","http://110.243.12.146:9999","http://60.167.102.102:9999"]
            for proxyinfo in proxyinfo_list:
                proxy = {
                    "http":proxyinfo,
                }
                if method == "GET":
                    response = self.lagou_session.get(url=url,headers=self.header,proxies=proxy)
                elif method == "POST":
                    response = self.lagou_session.post(url=url,headers=self.header,data=data,proxies=proxy)
                response.encoding = 'utf-8'
                if '频繁' in response.text:
                    # 需要先清除cookies信息
                    self.lagou_session.cookies.clear()
                    # 重新获取cookies信息
                    first_request_url = "https://www.lagou.com/jobs/list_python?&px=default&city=%s"%info
                    self.handle_request(method="GET",url=first_request_url)
                    time.sleep(10)
                    continue
                return response.text

if __name__ == '__main__':
    lagou = HandleLaGou()
    # 所有城市的方法
    lagou.handle_city()
    for city in lagou.city_list:
        lagou.handle_city_job(city)
    # 引入多进程加速抓取
    # pool = multiprocessing.Pool(2)
    # for city in lagou.city_list:
    #     pool.apply_async(lagou.handle_city_job,args=(city,))
    # pool.close()
    # pool.join()