
require('./models/database');
const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 4000
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
var cookieParser = require('cookie-parser')
var expressLayouts = require('express-ejs-layouts');
const socket = require('socket.io');
const cron = require('node-cron');
var cors = require('cors')
var app = express();
var favicon = require('serve-favicon');


const server = require('http').createServer(app)
// const wss = new WebSocket.Server({ server: server, path: "/get-os" })


// admin Controller
const dashboardController = require('./controllers/admin/dashboardController');
const crawlerController = require('./controllers/admin/crawlerController');

const settingController = require('./controllers/admin/settingController');
const loginController = require('./controllers/admin/loginController');
const manageTagController = require('./controllers/admin/manageTagController');
const osUtilsController = require('./controllers/admin/osUtilsController')
const classificationController = require('./controllers/admin/classificationController')
const pagesErrorController = require('./controllers/admin/pagesErrorController')
// front-end Controller
// front-end Controller
const homePageController = require('./controllers/front-end/homePageController');
const newsController = require('./controllers/front-end/newsController');
const newsDetailController = require('./controllers/front-end/newsDetailController');

const overallAnalytics = require('./controllers/front-end/overallAnalytics');
const middleware = require('./middleware');


// admin service

const { collectOsMetric, averageFiveMinutes, removeOsMetricData } = require('./service/admin/osUtil')


app.use(cookieParser())
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extend: true }));
app.use(express.static(__dirname + '/public'));

app.use(favicon(__dirname + '/public/img/favicon.ico'));

// socker io init
const io = socket(server);
var getOs = io.of('/get-os');
getOs.on('connection', function (socket) {
    socket.on("disconnect", () => {
    });
});

// every 10s will run
cron.schedule('*/10 * * * * *', async function () {
    let new_value = await collectOsMetric()
    let update_value = { 'cpu': [{"x": new_value.time, "y": new_value.cpu.usagePer}], 'memory': [{"x": new_value.time, "y": new_value.memory.usagePer}] }
    getOs.emit('message', JSON.stringify(update_value));
});

// every 5 min will run
cron.schedule('0 */5 * * * *', async function () {
    await averageFiveMinutes()
});

// every 1 hour will run
cron.schedule('0 0 */1 * * *', async function () {
    await removeOsMetricData()
});


server.listen(port, () => {
    console.log('Express server started http://localhost:' + port);
});
app.use(cors())
app.use('/', loginController);
app.use('/', middleware);
app.use('/', dashboardController);
app.use('/', crawlerController);
// app.use('/', rssFetcherController);

app.use('/', classificationController);

app.use('/', settingController);
app.use('/', osUtilsController);
app.use('/', manageTagController);
// app.use('/',keywordAnalytics)
app.use('/',overallAnalytics)
app.use('/', homePageController);
app.use('/', newsController);
app.use('/', newsDetailController);

// app.use('/', playground);

// app.use('/', pagesErrorController);

