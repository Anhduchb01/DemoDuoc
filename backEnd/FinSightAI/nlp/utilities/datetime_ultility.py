import datetime
def get_time_article(article):
	''' Get year of article '''
	try:
		year = article['timeCreatePostOrigin']
		if (year == ""):
			year = article['timeCrawlPage']
		return year
	except:
		timeExcute = datetime.datetime.now().strftime("%Y/%m/%d")
		year = str(timeExcute)
		return year
