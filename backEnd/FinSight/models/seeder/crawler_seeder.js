const seeder = require("mongoose-seed");
const dotenv = require('dotenv');
dotenv.config();

let itemsCrawler = [];
let itemsEditCrawler = [];
let itemsEditCrawlerPDF = []
let arrAddress = [
  "cafef",
  "cafebiz",
  "nguoiduatin",
  "thanhnien",
  'vnexpress',
  'vnpca'

];
let arrTitlePage = ['cafef', 'cafebiz', 'nguoiduatin', "thanhnien",'vnexpress','vnpca']
let arrTitleURLPage = ['https://cafef.vn/duoc-pham/trang-1.html', 'https://cafebiz.vn/duoc-pham.html','https://www.nguoiduatin.vn/tag/duoc-pham','https://thanhnien.vn/duoc-pham.html' , 'https://vnexpress.net/tag/duoc-pham-756653','https://vnpca.org.vn/tin-tuc-su-kien']
let objQueryCafef = {
  number_page_query: 2,
  article_url_query: "div.knswli-right h3 a",
  title_query:"h1.title",
  timeCreatePostOrigin_query: "span.pdate",
  author_query: "p.author",
  summary_query: "h2.sapo",
  content_query: "div.detail-content.afcbc-body p",
  summary_html_query:"h2.sapo",
  content_html_query:"div.detail-content.afcbc-body"
}
let objQueryCafebiz = {
  number_page_query: 2,
  article_url_query: "div.thread-right.fl h3 a",
  title_query:"h1.title",
  timeCreatePostOrigin_query: "div.timeandcatdetail span.time",
  author_query: "p.p-author strong",
  summary_query: "h2.sapo",
  content_query: "div.detail-content p",
  summary_html_query:"h2.sapo",
  content_html_query:"div.detail-content"
}
let objQueryNguoiDuaTin ={
  number_page_query: 2,
  article_url_query: "a.image-news",
  title_query:"h1.tmp-title-big",
  timeCreatePostOrigin_query: "div.txt-datetime",
  author_query: "div.txt-name",
  summary_query: "div.tmp-title-large",
  content_query: "article.article-content p",
  summary_html_query:"div.tmp-title-large",
  content_html_query:"article.article-content"
}
let objQueryvnexpress = {
  number_page_query: 2,
  article_url_query: "h2.title-news a",
  title_query:"h1.title-detail",
  timeCreatePostOrigin_query: "span.date",
  author_query: 'p.Normal[align="right"] strong',
  summary_query: "div.sidebar-1 > p.description",
  content_query: "article.fck_detail p",
  summary_html_query:"div.sidebar-1",
  content_html_query:"article.fck_detail"
}
let objQuerythanhnien = {
  number_page_query: 2,
  article_url_query: "h3.box-title-text a",
  title_query:"h1.detail-title span",
  timeCreatePostOrigin_query: "div.detail-time div",
  author_query: "div.author-info-top a",
  summary_query: "h2.detail-sapo",
  content_query: "div.detail-cmain p",
  summary_html_query:"h2.detail-sapo",
  content_html_query:"div.detail-cmain"
}

let objQueryvnpca = {
  number_page_query: 2,
  article_url_query: "div.views-field-title > span >  a",
  title_query:"div.div-title",
  timeCreatePostOrigin_query: "div.div-ngay-tao > i",
  author_query: "",
  summary_query: "div.div-noi-dung.div-mo-ta-tin p",
  content_query: "div.noi-dung-tin > p",
  summary_html_query:"div.div-noi-dung.div-mo-ta-tin",
  content_html_query:"div.noi-dung-tin"
}
let dataHTTPHeader = [{ header: '', value: '' }]

let arrObjQuery = [objQueryCafef, objQueryCafebiz, objQueryNguoiDuaTin, objQueryvnexpress,objQuerythanhnien,objQueryvnpca]

let timeSchedule = [{day:"0",hour:[1]},{day:"1",hour:[1]},{day:"2",hour:[1]},{day:"3",hour:[1]},{day:"4",hour:[1]},{day:"5",hour:[1]},{day:"6",hour:[1]}]


for (i = 0; i < arrAddress.length; i++) {
  itemsCrawler.push({
    addressPage: arrAddress[i],
    URL :arrTitleURLPage[i],
    dateLastCrawler: "----/--/--",
    sumPost: "0",
    statusPageCrawl: "Off",
    modePage: "on",
    increasePost: 0,
    type:'origin'
  });
  itemsEditCrawler.push({
    titlePage: arrTitlePage[i],
    urlPage: arrTitleURLPage[i],
    namePage: arrAddress[i],
    modeSchedule: false,
    timeSchedule:timeSchedule,
    modePublic: false,
    modeCookies: false,
    modeRobotsParser: false,
    timeOutCrawl: 180,
    timeRetryCrawl: 0,
    timeDelayCrawl: 0,
    numberRetryCrawl:2,
    cookies: "",
    userAgent: "",
    httpHeader: dataHTTPHeader,
    number_page_query: arrObjQuery[i].number_page_query,
    article_url_query: arrObjQuery[i].article_url_query,
    title_query: arrObjQuery[i].title_query,
    timeCreatePostOrigin_query: arrObjQuery[i].timeCreatePostOrigin_query,
    author_query: arrObjQuery[i].author_query,
    summary_query: arrObjQuery[i].summary_query,
    content_query: arrObjQuery[i].content_query,
    summary_html_query: arrObjQuery[i].summary_html_query,
    content_html_query: arrObjQuery[i].content_html_query,
    type:'origin'
  });
}
let itemsQueryDefault = []
for (i = 0; i < arrAddress.length; i++) {
  itemsQueryDefault.push({
    titlePage: arrTitlePage[i],
    number_page_query: arrObjQuery[i].number_page_query,
    article_url_query: arrObjQuery[i].article_url_query,
    title_query: arrObjQuery[i].title_query,
    timeCreatePostOrigin_query: arrObjQuery[i].timeCreatePostOrigin_query,
    category_query: arrObjQuery[i].category_query,
    author_query: arrObjQuery[i].author_query,
    summary_query: arrObjQuery[i].summary_query,
    content_query: arrObjQuery[i].content_query,
    summary_html_query: arrObjQuery[i].summary_html_query,
    content_html_query: arrObjQuery[i].content_html_query,
    type:'origin'
  });
}
// let itemsCategory = [];
// let arrCategory = ["other", "circleofblue", "nasa"];
// for (i = 0; i < arrCategory.length; i++) {
//   itemsCategory.push({
//     name: arrCategory[i],
//   });
// }
console.log(itemsCrawler)
letItemsUser = [{
  username: 'admin',
  password: '$2b$08$wOsX3.caipOB66CGB7O0kuKQHIoqNHln3cFR5oCsJxSgLPzq5Vok.',
  email: 'admin@gmail.com',
  timeCreate: '2021/06/18 13:28:35',
  role: 'admin'
}];


let data = [
  {
    model: "Crawler",
    documents: itemsCrawler,
  },
  {
    model: "User",
    documents: letItemsUser,
  },
  {
    model: "ConfigCrawler",
    documents: itemsEditCrawler,
  },
  {
    model: "ConfigDefaultCrawler",
    documents: itemsQueryDefault,
  }
  
];
// connect mongodb
seeder.connect(`${process.env.DB_URL}`, function () {
  console.log('MongoDB Connection Succeeded Seed.'+`${process.env.DB_URL}`)
  seeder.loadModels([
    "models/crawler.model",
    // "models/category.model",
    "models/user.model",
    "models/configcrawler.model",
    "models/configquerydefault.model", // load mongoose model
  ]);
  seeder.clearModels(["Crawler","User","ConfigCrawler",'ConfigDefaultCrawler'], function () {
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});
