const schedule = require("node-schedule");
const mongoose = require("mongoose");
const ConfigCrawler = mongoose.model("ConfigCrawler");
const logToFile = require("../logger");
const axios =require("axios")

// lúc start
// schedule.scheduleJob([ cái có sẵn trong db ])

// vào trang
// lấy từ DB ra để điền vào checkbox

// bấm Save
// lưu lại vào DB
// job.reschedule()

//second (0-59)
// minute (0-59)
// hour (0-23)
// date (1-31)
// month (0-11)
// year
// dayOfWeek (0-6) Starting with Sunday

const HTTP = axios.create({
  baseURL :`http://localhost:4000/`,
  headers: {
  },
  responseType: "json",
})
function scheduleCrawler(objDataEdit) {
  if (objDataEdit.titlePage === 'CafeF') {
    let address = objDataEdit.titlePage.toLowerCase()
    if (objDataEdit.modeSchedule == true) {
      console.log('schedule true cafe')
      for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
        if (objDataEdit.timeSchedule[i].hour.length === 0) continue;
        const configCafef = new schedule.RecurrenceRule();
        configCafef.dayOfWeek = objDataEdit.timeSchedule[i].day * 1;
        configCafef.hour = objDataEdit.timeSchedule[i].hour;
        configCafef.minute = 15;
        console.log(configCafef)
        const CrawlCafef = schedule.scheduleJob(configCafef, function () {
          console.log('start crawl cafef schedule')
          HTTP.post(`crawpage-cafef`).then(() => {
            console.log('crawl schedule cafef cussses')
          });
        });
      }
    }
  }
  if (objDataEdit.titlePage === 'CafeBiz') {
    let address = objDataEdit.titlePage.toLowerCase()
    if (objDataEdit.modeSchedule == true) {
      console.log('schedule true cafebiz')
      for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
        if (objDataEdit.timeSchedule[i].hour.length === 0) continue;
        const configCafebiz = new schedule.RecurrenceRule();
        configCafebiz.dayOfWeek = objDataEdit.timeSchedule[i].day * 1;
        configCafebiz.hour = objDataEdit.timeSchedule[i].hour;
        configCafebiz.minute = 0;
        const CrawlCafebiz = schedule.scheduleJob(configCafebiz, function () {
          console.log('start crawl cafebiz schedule')
          HTTP.post(`crawpage-cafebiz`).then(() => {
            console.log('crawl schedule cafebiz cussses')
          });
        });
      }
    }

  }
  if (objDataEdit.titlePage === 'BaoDauTu') {
    let address = objDataEdit.titlePage.toLowerCase()
    if (objDataEdit.modeSchedule == true ) {
      console.log('schedule true baodautu')
      for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
        if (objDataEdit.timeSchedule[i].hour.length === 0) continue;
        const configBaodautu = new schedule.RecurrenceRule();
        configBaodautu.dayOfWeek = objDataEdit.timeSchedule[i].day * 1;
        configBaodautu.hour = objDataEdit.timeSchedule[i].hour;
        configBaodautu.minute = 0;
        const CrawlBaodautu = schedule.scheduleJob(configBaodautu, function () {
          console.log('start crawl baodautu schedule')
          HTTP.post(`crawpage-baodautu`).then(() => {
            console.log('crawl schedule baodautu cussses')
          });
        });
      }
    }

  }
  if (objDataEdit.titlePage === 'VnEconomy') {
    let address = objDataEdit.titlePage.toLowerCase()
    if (objDataEdit.modeSchedule == true ) {
      console.log('schedule true vneconomy')
      for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
        if (objDataEdit.timeSchedule[i].hour.length === 0) continue;
        const configVneconomy = new schedule.RecurrenceRule();
        configVneconomy.dayOfWeek = objDataEdit.timeSchedule[i].day * 1;
        configVneconomy.hour = objDataEdit.timeSchedule[i].hour;
        configVneconomy.minute = 0;
        const CrawlVneconomy = schedule.scheduleJob(configVneconomy, function () {
          console.log('start crawl vneconomy schedule')
          HTTP.post(`crawpage-vneconomy`).then(() => {
            console.log('crawl schedule vneconomy cussses')
          });
        });
      }
    }

  }
  if (objDataEdit.titlePage === 'cafefpdf') {
    let address = objDataEdit.titlePage.toLowerCase()
    if (objDataEdit.modeSchedule == true ) {
      console.log('schedule true cafefpdf')
      for (let i = 0; i < objDataEdit.timeSchedule.length; i++) {
        if (objDataEdit.timeSchedule[i].hour.length === 0) continue;
        const configcafefpdf = new schedule.RecurrenceRule();
        configcafefpdf.dayOfWeek = objDataEdit.timeSchedule[i].day * 1;
        configcafefpdf.hour = objDataEdit.timeSchedule[i].hour;
        configcafefpdf.minute = 0;
        const Crawlcafefpdf = schedule.scheduleJob(configcafefpdf, function () {
          console.log('start crawl cafefpdf schedule')
          HTTP.post(`crawpage-cafefpdf`).then(() => {
            console.log('crawl schedule cafefpdf cussses')
          });
        });
      }
    }

  }

}

module.exports = scheduleCrawler;
