
from flask import Flask, request, jsonify ,Blueprint ,current_app
from apscheduler.schedulers.background import BackgroundScheduler
from scrapy.crawler import CrawlerProcess, CrawlerRunner
from scrapy.utils.project import get_project_settings

from crawler.vn_news.spiders.cafebiz_duoc import CafebizDuocSpider
from crawler.vn_news.spiders.cafef_duoc import CafefDuocSpider
from crawler.vn_news.spiders.nguoiduatin import NguoiDuaTinSpider
from crawler.vn_news.spiders.thanhnien import ThanhNienSpider
from crawler.vn_news.spiders.vnexpress import VnexpressSpider
from crawler.vn_news.spiders.vnpca import VnpcaSpider
from crawler.vn_news.spiders.custom import CustomSpider
import json
import threading
from pymongo import MongoClient
from scrapy import signals
from scrapy.signalmanager import dispatcher
import traceback
import os
from dotenv import load_dotenv
import redis 
from rq import Queue, Connection

load_dotenv()
DB_URL = os.environ.get('DB_URL')
DB_Name = os.environ.get('DB_Name')
client = MongoClient(DB_URL)
crawler = Blueprint('crawler', __name__)
import crochet
crochet.setup()
output_data = []

# client = MongoClient("mongodb://crawl02:crawl02123@localhost:27017/?authSource=FinSight")
db = client.Duoc
spider_counters = {}
@crawler.route("/crawl", methods=['GET', 'POST'])
def crawl():
	data = request.json
	namePage = data.get("namePage")
	type_crawler = data.get("type_crawler")
	last_date = data.get("last_date")
	number_page_query = data.get('number_page_query')
	title_query = data.get("title_query")
	timeCreatePostOrigin_query = data.get("timeCreatePostOrigin_query")
	author_query = data.get("author_query")
	content_query = data.get("content_query")
	summary_query = data.get("summary_query")
	content_html_query = data.get("content_html_query")
	summary_html_query = data.get("summary_html_query")
	type_crawler = data.get("type_crawler")
	timeOutCrawl = data.get("timeOutCrawl")
	timeDelayCrawl = data.get("timeDelayCrawl")
	numberRetryCrawl = data.get("numberRetryCrawl")
	userAgent = data.get("userAgent")
	modeRobotsParser = data.get("modeRobotsParser")

	# image_url_query = data.get("image_url_query")
	print('type_crawler',type_crawler)
	if type_crawler == 'origin':
		config_crawl = {
			"namePage":namePage,
			"last_date":last_date,
			"number_page_query":number_page_query,
			"article_url_query": data.get("article_url_query"),
			"title_query": title_query,
			"timeCreatePostOrigin_query": timeCreatePostOrigin_query,
			"author_query": author_query,
			"content_query": content_query,
			"summary_query": summary_query,
			"content_html_query":content_html_query,
			"summary_html_query":summary_html_query,
			"type_crawler":type_crawler,
			'timeOutCrawl': timeOutCrawl,
			'timeDelayCrawl': timeDelayCrawl,
			'numberRetryCrawl': numberRetryCrawl,
			'userAgent': userAgent,
			'modeRobotsParser': modeRobotsParser,
			# "image_url_query":image_url_query,
		}
	else:
		config_crawl = {
			"last_date":last_date,
			"number_page_query":number_page_query,
			"title_query": title_query,
			"timeCreatePostOrigin_query": timeCreatePostOrigin_query,
			"author_query": author_query,
			"content_query": content_query,
			"summary_query": summary_query,
			"content_html_query":content_html_query,
			"summary_html_query":summary_html_query,
			# "image_url_query":image_url_query,
			"start_urls":data.get("start_urls"),
			"correct_rules":data.get("correct_rules"),
			"incorrect_rules":data.get("incorrect_rules"),
			"namePage":namePage,
			"origin_domain":data.get("origin_domain"),
			"type_crawler":type_crawler,
			'timeOutCrawl': timeOutCrawl,
			'timeDelayCrawl': timeDelayCrawl,
			'numberRetryCrawl': numberRetryCrawl,
			'userAgent': userAgent,
			'modeRobotsParser': modeRobotsParser,

		}

	try:
	# Run the crawl
		if namePage == 'cafef':
			scrape_with_crochet(CafefDuocSpider,config_crawl,'cafef')
			return f'Scraping started for cafef'
		elif namePage == 'cafebiz':
			scrape_with_crochet(CafebizDuocSpider,config_crawl,'cafebiz')
			return f'Scraping started for cafebiz'
		elif namePage == 'nguoiduatin':
			scrape_with_crochet(NguoiDuaTinSpider,config_crawl,'nguoiduatin')
			return f'Scraping started for nguoiduatin'
		elif namePage == 'thanhnien':
			scrape_with_crochet(ThanhNienSpider,config_crawl,'thanhnien')
			return f'Scraping started for thanhnien'
		elif namePage == 'vnexpress':
			scrape_with_crochet(VnexpressSpider,config_crawl,'vnexpress')
			return f'Scraping started for vnexpress'
		elif namePage == 'vnpca':
			scrape_with_crochet(VnpcaSpider,config_crawl,'vnpca')
			return f'Scraping started for vnpca'
		else:

			with Connection(redis.Redis(host="localhost",port=6379)):
				q = Queue()
				task = q.enqueue(scrape_with_crochet,CustomSpider,config_crawl,'custom')
			response_object = {
				"status": "success",
				"data": {
					"task_id": task.get_id()
				}
			}
			print('config_crawl',config_crawl)
			
			return jsonify(response_object), 202
			
	except Exception as e:
		msg = f"Error occurred during crawl: {str(traceback.format_exc())}"
		msg = msg.replace("'","")
		msg = msg.replace('"','')
		print(msg)
		return str(msg)
@crawler.route("/tasks/<task_id>", methods=["GET"])
def get_status(task_id):
    with Connection(redis.from_url(current_app.config["REDIS_URL"])):
        q = Queue()
        task = q.fetch_job(task_id)
    if task:
        response_object = {
            "status": "success",
            "data": {
                "task_id": task.get_id(),
                "task_status": task.get_status(),
                "task_result": task.result,
            },
        }
    else:
        response_object = {"status": "error"}
    return jsonify(response_object)
@crochet.wait_for(timeout=600.0)
def scrape_with_crochet(spider,config_crawl,addressPage):
	global spider_counters
	global namePage
	global type_crawler
	print('config_crawl_crophet',config_crawl)
	namePage = config_crawl['namePage']
	type_crawler = config_crawl['type_crawler']
	if addressPage not in spider_counters:
		spider_counters[addressPage] = 0
	# Get the counter for the spider name
	# signal fires when single item is processed
	# and calls _crawler_result to append that item
	dispatcher.connect(_crawler_result, signal=signals.item_scraped)
	dispatcher.connect(_crawler_closed, signal=signals.spider_closed)
	setting = get_project_settings()
	if config_crawl['timeOutCrawl'] > 0:
		setting.update({
		"DOWNLOAD_TIMEOUT": config_crawl['timeOutCrawl']
		})
	if config_crawl['timeDelayCrawl'] > 0:
		setting.update({
		"DOWNLOAD_DELAY": config_crawl['timeDelayCrawl']
		})
	if config_crawl['numberRetryCrawl'] > 0:
		setting.update({
		"RETRY_TIMES": config_crawl['numberRetryCrawl']
		})
	if config_crawl['userAgent'] != '':
		setting.update({
		"USER_AGENT": config_crawl['userAgent']
		})
	setting.update({
	"DOWNLOAD_TIMEOUT": config_crawl['modeRobotsParser']
	})
	crawl_runner = CrawlerRunner(setting)
	eventual = crawl_runner.crawl(
		spider,config = config_crawl)
	
	return eventual  # returns a twisted.internet.defer.Deferred

def _crawler_result(item, response, spider):
	"""
	We're using dict() to decode the items.
	Ideally this should be done using a proper export pipeline.
	"""
	global spider_counters
	spider_name = spider.name
	# Increase the counter for the spider name
	
	title = dict(item).get('title')
	url = dict(item).get('url')
	check_exits = db.posts.find_one({'url': url})
	try:
		if len(title.split()) >= 3 :
			if not check_exits:
				db.posts.insert_one(dict(item))
				spider_counters[spider_name] += 1
				print('Item Count')
				print(spider_counters[spider_name])
				print(title)
		else :
			print('len of split title and connten < 3',title)
			print('URL',url)
	except:
		print('not have title and content')

		
		# print(list(db.posts.find({})))
	# output_data.append(dict(item))

def _crawler_closed(spider):
	"""
	Update the increasePost attribute of db.crawlers with the total number of items crawled.
	"""
	global spider_counters
	spider_name = spider.name
	print('finish crawl '+str(spider_name))
	print('number of posts crawled'+str(spider_counters[spider_name]))
	if type_crawler == 'origin':
		db.crawlers.update_one({"addressPage":spider_name}, {'$set': {'increasePost': str(spider_counters[spider_name]),"statusPageCrawl": "Success"}})
		post_count = db.posts.count_documents({"urlPageCrawl": spider_name})
		db.crawlers.update_one({"addressPage": spider_name},{"$set": {"sumPost": post_count}})
	else:
		db.crawlers.update_one({"addressPage":namePage}, {'$set': {'increasePost': str(spider_counters[spider_name])}})
		post_count = db.posts.count_documents({"urlPageCrawl": namePage})
		db.crawlers.update_one({"addressPage": namePage},{"$set": {"sumPost": post_count,"statusPageCrawl": "Success"}})
	spider_counters[spider_name] = 0

