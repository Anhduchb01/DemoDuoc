from flask import Flask
from flask_cors import CORS
from crawler import crawler
from nlp import nlp
from celery import Celery
from rq import Connection, Worker
import redis
app = Flask(__name__)
CORS(app)

app.config['WTF_CSRF_ENABLED'] = True
app.config['REDIS_URL'] = "redis://redis:6379/0"
app.config['QUEUES'] = ["default"]
app.register_blueprint(crawler)
app.register_blueprint(nlp)
if __name__ == '__main__':    
	redis_url = app.config["REDIS_URL"]
	redis_connection = redis.Redis(host="localhost",port=6379)
	with Connection(redis_connection):
		worker = Worker(app.config["QUEUES"])
		worker.work()  
	app.run(debug=True)