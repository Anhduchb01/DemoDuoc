const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(`${process.env.DB_URL}`, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true, }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.'+`${process.env.DB_URL}`) }
    else { console.log('Error in DB connection : '+`${process.env.DB_URL}` + err) }
});


require('./post.model');
require('./logger.model');
require('./crawler.model');
require('./schedule.model');
require('./tag.model');
require('./tagmap.model');
require('./tagai.model');
require('./tagmapai.model');
require('./category.model');
require('./categorymap.model');
require('./contacts.model');
require('./rsscontrol.model');
require('./rsspost.model');
require('./keywordcrawler.model');
require('./newsletter.model');
require('./users.model');
require('./configcrawler.model');
require('./configquerydefault.model');
require('./osmetric.model')
require('./osday.model')
require('./osmonth.model')
require('./model.model')
require('./sorting.model')
require('./historygeneratetag.model')
require('./taghistory.model')
require('./historyclassification.model')
require('./configcrawlerpdf.model')
require('./reports.model')


