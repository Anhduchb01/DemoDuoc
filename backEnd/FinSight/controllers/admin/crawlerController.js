const { request } = require("express");
const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Crawler = mongoose.model("Crawler");
const Logger = mongoose.model("Logger");
const ConfigCrawler = mongoose.model("ConfigCrawler");
const ConfigCrawlerPDFs = mongoose.model("ConfigCrawlerPDF");
const ConfigDefaultCrawler = mongoose.model("ConfigDefaultCrawler");
const Post = mongoose.model("Post");
const KeywordCrawler = mongoose.model("KeywordCrawler");
const Report = mongoose.model("Report")
const axios = require("axios");
var dayjs = require("dayjs");
const scheduleCrawler = require("../../service/admin/scheduleCrawler")
router.get("/admin/crawler", (req, res) => {
  res.render("admin/main/crawler", { title: 'Crawler' });
});
router.post("/remove-crawler", async (req, res) => {
  try {
    let namePage = req.body.namePage;

    ConfigDefaultCrawler.remove({ titlePage: namePage }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("remove configDefaultCrawler success");
      }
    });
    Crawler.remove({ addressPage: namePage }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("remove crawler success");
      }
    });
    ConfigCrawler.remove({ namePage: namePage }, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("remove configcrawler success")

      }
    });
    res.send("remove crawler success");

  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});
// Create crawler
router.post("/create-crawler", async (req, res) => {
  try {
    let objDataNew = req.body.objDataNew;
    console.log(objDataNew)
    let addressPage = String(objDataNew.titlePage).toLowerCase();
    let crawler = new Crawler({
      addressPage: addressPage,
      URL: objDataNew.urlPage,
      dateLastCrawler: '----/--/--',
      sumPost: "0",
      statusPageCrawl: "Off",
      modePage: "On",
      increasePost: '0',
      type: "create"
    })

    const crawlerObj = await crawler.save();
    console.log('Create crawler Ok : ', crawlerObj._id);  // this will be the new created ObjectId

    for (let i = 0; i < objDataNew.timeSchedule.length; i++) {
      objDataNew.timeSchedule[i].hour = objDataNew.timeSchedule[i].hour || []
      if (objDataNew.timeSchedule[i].hour.length !== 0) objDataNew.timeSchedule[i].hour.map(j => Number(j))
    }

    var summary_query_split = objDataNew.summary_query.split(' ');
    if (summary_query_split.length > 0 && summary_query_split[summary_query_split.length - 1] === "p") {
      summary_query_split.pop(); // Remove the last element "p"
    }
    objDataNew.summary_query_html = summary_query_split.join(' ');

    var content_query_split = objDataNew.content_query.split(' ');
    if (content_query_split.length > 0 && content_query_split[content_query_split.length - 1] === "p") {
      content_query_split.pop();
    }
    objDataNew.content_html_query = content_query_split.join(' ');

    const configCrawlerObj = await new ConfigCrawler(
      {
        titlePage: objDataNew.titlePage,
        modeSchedule: objDataNew.modeSchedule,
        namePage: addressPage,
        urlPage: objDataNew.urlPage,
        timeSchedule: objDataNew.timeSchedule,
        modeCookies: objDataNew.modeCookies,
        modeProxy: objDataNew.modeProxy,
        modeRobotsParser: objDataNew.modeRobotsParser,
        timeOutCrawl: objDataNew.timeOutCrawl,
        timeRetryCrawl: objDataNew.timeRetryCrawl,
        timeDelayCrawl: objDataNew.timeDelayCrawl,
        userAgent: objDataNew.userAgent,
        cookies: objDataNew.cookies,
        proxy: objDataNew.proxy,
        httpHeader: objDataNew.httpHeader,
        UrlQuery: objDataNew.UrlQuery,
        article_url_query: objDataNew.article_url_query,
        title_query: objDataNew.title_query,
        timeCreatePostOrigin_query: objDataNew.timeCreatePostOrigin_query,
        author_query: objDataNew.author_query,
        content_query: objDataNew.content_query,
        summary_query: objDataNew.summary_query,
        content_html_query: objDataNew.content_html_query,
        summary_html_query: objDataNew.summary_query_html,
        start_urls: objDataNew.start_urls,
        correct_url_contain: objDataNew.correct_url_contain,
        incorrect_url_contain: objDataNew.incorrect_url_contain,
        type: "create"
      },

    ).save();
    console.log('Create ConfigCrawler OK : ', configCrawlerObj.titlePage)
    const configDefaultCrawlerObj = await new ConfigDefaultCrawler({
      titlePage: objDataNew.titlePage,
      article_url_query: objDataNew.article_url_query,
      title_query: objDataNew.title_query,
      timeCreatePostOrigin_query: objDataNew.timeCreatePostOrigin_query,
      author_query: objDataNew.author_query,
      content_query: objDataNew.content_query,
      summary_query: objDataNew.summary_query,
      content_html_query: objDataNew.content_html_query,
      summary_html_query: objDataNew.summary_query_html,
      start_urls: objDataNew.start_urls,
      correct_url_contain: objDataNew.correct_url_contain,
      incorrect_url_contain: objDataNew.incorrect_url_contain,
      type: "create"
    }).save()
    console.log('Create configDefaultCrawlerObj OK : ', configDefaultCrawlerObj.titlePage)
    await scheduleCrawler(objDataNew);
    await res.send("create success");
  } catch (err) {
    console.log(err)
    res.status(502).send(err.message);
  }
});

router.post("/crawpage", async (req, res) => {
  let namePage = req.body.namePage;
  let config = await ConfigCrawler.find({ "namePage": namePage });
  await Crawler.updateOne(
    { addressPage: namePage },
    {
      $set: {
        statusPageCrawl: "Pending",
      },
    }
  );
  let crawler = await Crawler.find({ "addressPage": namePage });
  let data = {}
  if (crawler[0].type == 'create') {
    data = {
      "namePage": namePage,
      "type_crawler": 'create',
      "last_date": crawler[0].dateLastCrawler,
      // "number_page_query": config[0].number_page_query,
      // "article_url_query": config[0].article_url_query,
      'timeOutCrawl': config[0].timeOutCrawl,
      'timeDelayCrawl': config[0].timeDelayCrawl,
      'numberRetryCrawl': config[0].numberRetryCrawl,
      'userAgent': config[0].userAgent,
      'modeRobotsParser': config[0].modeRobotsParser,
      "title_query": config[0].title_query,
      "timeCreatePostOrigin_query": config[0].timeCreatePostOrigin_query,
      "author_query": config[0].author_query,
      "content_query": config[0].content_query,
      "summary_query": config[0].summary_query,
      "content_html_query": config[0].content_html_query,
      "summary_html_query": config[0].summary_html_query,
      "origin_domain": crawler[0].URL,
      "start_urls": config[0].start_urls,
      "correct_rules": config[0].correct_url_contain,
      "incorrect_rules": config[0].incorrect_url_contain,
    }
  } else {
    data = {
      "namePage": namePage,
      "type_crawler": 'origin',
      "last_date": crawler[0].dateLastCrawler,
      // "number_page_query": config[0].number_page_query,
      'timeOutCrawl': config[0].timeOutCrawl,
      'timeDelayCrawl': config[0].timeDelayCrawl,
      'numberRetryCrawl': config[0].numberRetryCrawl,
      'userAgent': config[0].userAgent,
      'modeRobotsParser': config[0].modeRobotsParser,
      "article_url_query": config[0].article_url_query,
      "title_query": config[0].title_query,
      "timeCreatePostOrigin_query": config[0].timeCreatePostOrigin_query,
      "author_query": config[0].author_query,
      "content_query": config[0].content_query,
      "summary_query": config[0].summary_query,
      "content_html_query": config[0].content_html_query,
      "summary_html_query": config[0].summary_html_query,

    }

  }


  const currentDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-CA').format(currentDate); // format date as "Y-M-D"
  const [year, month, day] = formattedDate.split('-'); // split date into year, month, and day
  const Date_now = `${year}/${month}/${day}`; // reformat date as "Y/M/D"

  try {
    axios.post("http://127.0.0.1:5000/crawl", data).then(async (response) => {
      console.log("Request crawl successful!");
      let msg = response.data
      console.log({ "msg": msg })
      // if (msg == 'Success') {
      //   saveLogAction(namePage, 'Success')
      //   await Crawler.updateOne(
      //     { addressPage: namePage },
      //     {
      //       $set: {
      //         statusPageCrawl: "Success",
      //         dateLastCrawler: Date_now,
      //       },
      //     }
      //   );
      // } else {
      //   saveLogAction(namePage, 'Error', msg)
      //   await Crawler.updateOne(
      //     { addressPage: namePage },
      //     {
      //       $set: {
      //         statusPageCrawl: "Error",
      //       },
      //     }
      //   );
      // }
    })
      // .catch(async (error) => {
      //   console.log(error.response.data)
      //   saveLogAction(namePage, 'Error', error.response.data.error)
      //   await Crawler.updateOne(
      //     { addressPage: namePage },
      //     {
      //       $set: {
      //         statusPageCrawl: "Error",
      //       },
      //     }
      //   );
      // });

  } catch (error) {
    if (error.response) {
      console.log(error.reponse.status);
    } else {
      console.log(error.message);
    }
    saveLogAction(namePage, 'Error', error.message)
    await Crawler.updateOne(
      { addressPage: namePage },
      {
        $set: {
          statusPageCrawl: "Error",
        },
      }
    );
  }

  let result = "Request Crawl successfull"
  res.send({ "msg": result })
});


//Crawl By Keyword Analysis
router.post("/crawdata-by-keyword", async (req, res) => {
  let objCrawl = req.body.objCrawl;
  let datas = await pageCrawler(objCrawl);
  res.send(datas);
});

//Crawl By Keyword
router.post("/crawl-page-by-keyword", async (req, res) => {
  let objDataConfig = req.body.objDataConfig;
  await pageCrawlerByKeyword(objDataConfig);
  res.send("addressgsi");
});
router.get("/crawler-get-information", async (req, res) => {
  await Crawler.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});

router.get("/crawler-information", async (req, res) => {
  let arrayeleAddress = req.query.arrayeleAddress;
  let arrDataAfterCrawler = [];
  let searchSumPost = await Crawler.find({});
  for (let index = 0; index < arrayeleAddress.length; index++) {
    let objDataCrawler = {};
    objDataCrawler.address = arrayeleAddress[index];
    objDataCrawler.sumPost = searchSumPost[index].sumPost;
    arrDataAfterCrawler.push(objDataCrawler);
  }

  for (let index = 0; index < arrayeleAddress.length; index++) {
    let urlPageCrawl = arrayeleAddress[index];
    if (urlPageCrawl == 'cafefpdf') {
      await Report.find(
        {},
        async (err, docs) => {
          if (!err) {
            await Crawler.updateOne(
              { addressPage: urlPageCrawl },
              {
                $set: {
                  sumPost: docs.length,
                },
              }
            );
          } else {
            console.log("Error in retrieving employee list :" + err);
          }
        }
      );

    }
    else {
      //post success
      await Post.find(
        {
          urlPageCrawl: urlPageCrawl,
          status: '0',
        },
        async (err, docs) => {
          if (!err) {
            await Crawler.updateOne(
              { addressPage: urlPageCrawl },
              {
                $set: {
                  sumPost: docs.length,
                },
              }
            );
          } else {
            console.log("Error in retrieving employee list :" + err);
          }
        }
      );
      //post block
      await Post.find(
        {
          urlPageCrawl: urlPageCrawl,
          status: '1',
        },
        async (err, docs) => {
          if (!err) {
            await Crawler.updateOne(
              { addressPage: urlPageCrawl },
              {
                $set: {
                  sumPostBlock: docs.length,
                },
              }
            );
          } else {
            console.log("Error in retrieving employee list :" + err);
          }
        }
      );
      //post skip
      await Post.find(
        {
          urlPageCrawl: urlPageCrawl,
          status: '2',
        },
        async (err, docs) => {
          if (!err) {
            await Crawler.updateOne(
              { addressPage: urlPageCrawl },
              {
                $set: {
                  sumPostSkip: docs.length,
                },
              }
            );
          } else {
            console.log("Error in retrieving employee list :" + err);
          }
        }
      );
    }

  }

  await Crawler.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});
router.get("/crawler-pdf-information", async (req, res) => {
  await Crawler.find({ type: "pdf" }, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});
router.get("/get-data-edit-crawl", (req, res) => {
  ConfigCrawler.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});
router.get("/get-data-edit-pdf", (req, res) => {
  ConfigCrawlerPDFs.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});
router.get("/get-data-default-edit-crawl", (req, res) => {
  ConfigDefaultCrawler.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});

router.post("/save-edit-crawl", async (req, res) => {
  let objDataEdit = req.body.objDataEdit;
  for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
    objDataEdit.timeSchedule[i].hour = objDataEdit.timeSchedule[i].hour || []
    if (objDataEdit.timeSchedule[i].hour.length !== 0) objDataEdit.timeSchedule[i].hour.map(j => Number(j))
  }
  var summary_query_split = objDataEdit.summary_query.split(' ');
  if (summary_query_split.length > 0 && summary_query_split[summary_query_split.length - 1] === "p") {
    summary_query_split.pop(); // Remove the last element "p"
  }
  objDataEdit.summary_query_html = summary_query_split.join(' ');

  var content_query_split = objDataEdit.content_query.split(' ');
  if (content_query_split.length > 0 && content_query_split[content_query_split.length - 1] === "p") {
    content_query_split.pop();
  }
  objDataEdit.content_html_query = content_query_split.join(' ')
  await ConfigCrawler.updateOne(
    { titlePage: objDataEdit.titlePage },
    {
      $set: {
        modeSchedule: objDataEdit.modeSchedule,
        timeSchedule: objDataEdit.timeSchedule,
        modePublic: objDataEdit.modePublic,
        modeCookies: objDataEdit.modeCookies,
        modeRobotsParser: objDataEdit.modeRobotsParser,
        timeOutCrawl: objDataEdit.timeOutCrawl,
        timeRetryCrawl: objDataEdit.timeRetryCrawl,
        timeDelayCrawl: objDataEdit.timeDelayCrawl,
        userAgent: objDataEdit.userAgent,
        cookies: objDataEdit.cookies,
        httpHeader: objDataEdit.httpHeader,
        // number_page_query: objDataEdit.number_page_query,
        article_url_query: objDataEdit.article_url_query,
        title_query: objDataEdit.title_query,
        timeCreatePostOrigin_query: objDataEdit.timeCreatePostOrigin_query,
        category_query: objDataEdit.category_query,
        author_query: objDataEdit.author_query,
        content_query: objDataEdit.content_query,
        summary_query: objDataEdit.summary_query,
        content_html_query: objDataEdit.content_html_query,
        summary_html_query: objDataEdit.summary_query_html,

      },
    }
  );
  scheduleCrawler(objDataEdit)
  res.send("success edit config");
});
router.post("/save-edit-crawl-create", async (req, res) => {
  let objDataEdit = req.body.objDataEdit;
  for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
    objDataEdit.timeSchedule[i].hour = objDataEdit.timeSchedule[i].hour || []
    if (objDataEdit.timeSchedule[i].hour.length !== 0) objDataEdit.timeSchedule[i].hour.map(j => Number(j))
  }
  var summary_query_split = objDataEdit.summary_query.split(' ');
  if (summary_query_split.length > 0 && summary_query_split[summary_query_split.length - 1] === "p") {
    summary_query_split.pop(); // Remove the last element "p"
  }
  objDataEdit.summary_query_html = summary_query_split.join(' ');

  var content_query_split = objDataEdit.content_query.split(' ');
  if (content_query_split.length > 0 && content_query_split[content_query_split.length - 1] === "p") {
    content_query_split.pop();
  }
  objDataEdit.content_html_query = content_query_split.join(' ')
  await ConfigCrawler.updateOne(
    { titlePage: objDataEdit.titlePage },
    {
      $set: {
        modeSchedule: objDataEdit.modeSchedule,
        timeSchedule: objDataEdit.timeSchedule,
        modePublic: objDataEdit.modePublic,
        modeCookies: objDataEdit.modeCookies,
        modeRobotsParser: objDataEdit.modeRobotsParser,
        timeOutCrawl: objDataEdit.timeOutCrawl,
        timeRetryCrawl: objDataEdit.timeRetryCrawl,
        timeDelayCrawl: objDataEdit.timeDelayCrawl,
        userAgent: objDataEdit.userAgent,
        cookies: objDataEdit.cookies,
        httpHeader: objDataEdit.httpHeader,
        // number_page_query: objDataEdit.number_page_query,
        article_url_query: objDataEdit.article_url_query,
        title_query: objDataEdit.title_query,
        timeCreatePostOrigin_query: objDataEdit.timeCreatePostOrigin_query,
        category_query: objDataEdit.category_query,
        author_query: objDataEdit.author_query,
        content_query: objDataEdit.content_query,
        summary_query: objDataEdit.summary_query,
        content_html_query: objDataEdit.content_html_query,
        summary_html_query: objDataEdit.summary_html_query,
        start_urls: objDataEdit.start_urls,
        correct_url_contain: objDataEdit.correct_url_contain,
        incorrect_url_contain: objDataEdit.incorrect_url_contain,
      },
    }
  );
  scheduleCrawler(objDataEdit)
  res.send("success edit create config");
});

router.post("/save-edit-crawl-pdf", async (req, res) => {
  let objDataEdit = req.body.objDataEdit;
  for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
    objDataEdit.timeSchedule[i].hour = objDataEdit.timeSchedule[i].hour || []
    if (objDataEdit.timeSchedule[i].hour.length !== 0) objDataEdit.timeSchedule[i].hour.map(j => Number(j))
  }
  await ConfigCrawlerPDFs.updateOne(
    { titlePage: objDataEdit.titlePage },
    {
      $set: {
        modeSchedule: objDataEdit.modeSchedule,
        timeSchedule: objDataEdit.timeSchedule,
        modePublic: objDataEdit.modePublic,
        modeCookies: objDataEdit.modeCookies,
        modeRobotsParser: objDataEdit.modeRobotsParser,
        timeOutCrawl: objDataEdit.timeOutCrawl,
        timeRetryCrawl: objDataEdit.timeRetryCrawl,
        timeDelayCrawl: objDataEdit.timeDelayCrawl,
        userAgent: objDataEdit.userAgent,
        cookies: objDataEdit.cookies,
        httpHeader: objDataEdit.httpHeader,
        // number_page_query: objDataEdit.number_page_query,
        article_url_query: objDataEdit.article_url_query,
        title_query: objDataEdit.title_query,
        timeCreatePostOrigin_query: objDataEdit.timeCreatePostOrigin_query,
        source: objDataEdit.source,
        number_CK: objDataEdit.number_CK,
        id_pdf: objDataEdit.id_pdf,
      },
    }
  );
  scheduleCrawler(objDataEdit)
  res.send("success edit pdf config");
});

// crawl keyword
router.get("/create-keyword-crawl", async (req, res) => {
  let ObjCreateCrawl = req.query.ObjCreateCrawl;
  let searchUrl = await KeywordCrawler.findOne({
    keyword: ObjCreateCrawl.keyword,
    site: ObjCreateCrawl.site,
  });
  if (searchUrl === null) {
    let keywordCrawler = new KeywordCrawler();
    keywordCrawler.keyword = ObjCreateCrawl.keyword;
    keywordCrawler.site = ObjCreateCrawl.site;
    keywordCrawler.modeTime = ObjCreateCrawl.modeTime;
    keywordCrawler.timeSchedule = ObjCreateCrawl.timeSchedule;
    keywordCrawler.dateLastCrawler = '';
    keywordCrawler.statusPageCrawl = "Off";
    keywordCrawler.sumPost = 0;
    keywordCrawler.increasePost = 0;
    keywordCrawler.save();
    // await scheduleRSSCrawler();
    res.send("create-success");
  } else {
    res.send("create-error");
  }
});

router.get("/get-all-keyword-crawl", (req, res) => {
  KeywordCrawler.find({}, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("Error in retrieving employee list :" + err);
    }
  });
});
router.get("/remove-keyword-crawl", (req, res) => {
  let valueID = req.query.valueID;
  KeywordCrawler.remove({ _id: valueID }, function (err) {
    if (err) {
      console.log(err);
    } else {
      res.send("success");
    }
  });
});
router.post("/edit-keyword-crawl", async (req, res) => {
  let ObjCreateCrawl = req.body.ObjCreateCrawl;
  await KeywordCrawler.updateOne(
    { _id: ObjCreateCrawl.valueID },
    {
      $set: {
        modeTime: ObjCreateCrawl.modeTime,
        timeSchedule: ObjCreateCrawl.timeSchedule,
      },
    }
  );
  // await scheduleRSSCrawler();
  await res.send("success");
});

function saveLogAction(page, action, message) {
  let timeCrawlPage = dayjs().format("YYYY/MM/DD h:mm:ss");
  let stringMessage = "";
  if (message === null || message == '') {
    if (action === "Create") stringMessage = "Start Crawler Page :";
    if (action === "Success") stringMessage = "Crawler Success :";
  } else {
    if (action === "Error") stringMessage = message.replace(/['"()]/g, '');
  }
  var logger = new Logger();
  logger.status = action;
  logger.page = page;
  logger.message = stringMessage;
  logger.timelog = timeCrawlPage;
  logger.save();
}

module.exports = router;
