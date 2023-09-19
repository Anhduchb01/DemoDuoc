const express = require("express");
var router = express.Router();
const { getCpuMetricDay, getCpuMetricHour, getMemoryMetricDay, getMemoryMetricHour, averageFiveMinutes, removeOsMetricData, getCpuMetricMonth, getMemoryMetricMonth } = require('../../service/admin/osUtil')


// api GET: get cpu metric in hour 
router.get('/get-cpu-metric-hour', async (req, res) => {
    let datas = await getCpuMetricHour()
    res.send({
        "data": datas
    })
})


// api GET: get cpu metric in day 
router.get('/get-cpu-metric-day', async (req, res) => {
    let datas = await getCpuMetricDay()
    res.send({
        "data": datas
    })
})

// api GET: get cpu metric in month
router.get('/get-cpu-metric-month', async (req, res) => {
    let datas = await getCpuMetricMonth()
    res.send({
        "data": datas
    })
})


// api GET: get memory metric in hour 
router.get('/get-memory-metric-hour', async (req, res) => {
    let datas = await getMemoryMetricHour()
    res.send({
        "data": datas
    })
})


// api GET: get cpu memory in day 
router.get('/get-memory-metric-day', async (req, res) => {
    let datas = await getMemoryMetricDay()
    res.send({
        "data": datas
    })
})

// api GET: get memory metric in month 
router.get('/get-memory-metric-month', async (req, res) => {
    let datas = await getMemoryMetricMonth()
    res.send({
        "data": datas
    })
})


// api GET: get os metric average five minute 
router.get('/average-five-minute', async (req, res) => {
    let datas = await averageFiveMinutes()
    res.send({
        "data": datas
    })
})

// api GET: remove os metric  
router.get('/remove-os-metric', async (req, res) => {
    let datas = await removeOsMetricData()
    res.send({
        "data": datas
    })
})

module.exports = router;