var osu = require('node-os-utils');
const mongoose = require("mongoose");
const OsMetric = mongoose.model('OsMetric')
const OsDay = mongoose.model('OsDay')
const OsMonth = mongoose.model('OsMonth')


// service get os metric 
async function collectOsMetric() {
    var d = new Date,
        dformat = d.toISOString();

    var timesplit = {
        'year': d.getUTCFullYear(),
        'month': d.getUTCMonth() + 1,
        'date': d.getUTCDate(),
        'hour': d.getUTCHours(),
        'minute': d.getUTCMinutes()
    }


    var cpu = osu.cpu
    var mem = osu.mem

    var cpu_usage = await cpu.usage()
    var cpu_free = 100 - cpu_usage
    var memory = await mem.info()
    let os_metric = {
        'time': dformat,
        'timesplit': timesplit,
        'cpu': {
            "usagePer": cpu_usage,
            "freePer": cpu_free
        }, "memory": {
            "total": memory.totalMemMb,
            "usage": memory.usedMemMb,
            "free": memory.freeMemMb,
            "usagePer": memory.usedMemPercentage,
            "freePer": memory.freeMemPercentage
        }
    }

    await OsMetric.create({ 'time': os_metric.time, 'timesplit': os_metric.timesplit, 'cpu': os_metric.cpu, 'memory': os_metric.memory })

    return os_metric
}

// service get average os mestric in 5 minutes
async function averageFiveMinutes() {

    // get current time 
    var d = new Date(), dformat = d.toISOString();
    var timesplit = {
        "year": d.getUTCFullYear(),
        "month": d.getUTCMonth(),
        "date": d.getUTCDate(),
        "hour": d.getUTCHours(),
        "minute": d.getUTCMinutes()
    }

    var sumCpuPer = 0
    var sumMemoryPer = 0

    // calculate data every 5 minutes
    var osMetricData = await OsMetric.find({ "isAvg": false })
    for (let i of osMetricData) {
        sumCpuPer += i.cpu.usagePer
        sumMemoryPer += i.memory.usagePer
        await OsMetric.updateOne({ _id: i._id }, { "$set": { "isAvg": true } })
    }

    // save data to database
    let avgCpuPer = parseFloat((sumCpuPer / osMetricData.length).toFixed(1))
    let avgMemoryPer = parseFloat((sumMemoryPer / osMetricData.length).toFixed(1))
    await OsDay.create({ 'time': dformat, 'timesplit': timesplit, 'cpu': { "usagePer": avgCpuPer }, 'memory': { "usagePer": avgMemoryPer } })
    return osMetricData
}

// remove data after calculate average in 5 mintues
async function removeOsMetricData() {

    // get current time
    var d = new Date()
    var year = d.getUTCFullYear()
    var month = d.getUTCMonth()
    var hour = d.getUTCHours() - 1
    var date = d.getUTCDate()

    // remove data
    await OsMetric.deleteMany({ "$or": [{ "timesplit.year": { "$lt": year } }, { "timesplit.month": { "$lt": month } }, { "timesplit.date": { "$lt": date } }, { "timesplit.date": date, "timesplit.hour": { "$lt": hour } }] })
}

// get cpu metric in 1 month
async function getCpuMetricMonth() {
    let datas = await OsDay.find({
        time: {
            "$gt": new Date(new Date().getTime() - 60 * 60 * 1000 * 24 * 30).toISOString()
        }
    })
    var values = []

    for (let data of datas) {
        values.push({ "x": data.time, "y": data.cpu.usagePer })
    }

    return values

}

// get cpu metric in 24h
async function getCpuMetricDay() {
    let datas = await OsDay.find({
        time: {
            "$gt": new Date(new Date().getTime() - 60 * 60 * 1000 * 24).toISOString()
        }
    })
    var values = []

    for (let data of datas) {
        values.push({ "x": data.time, "y": data.cpu.usagePer })
    }

    return values
}

// get cpu metric in on 1 hour
async function getCpuMetricHour() {
    let datas = await OsMetric.find({
        time: {
            "$gt": new Date(new Date().getTime() - 60 * 60 * 1000).toISOString()
        }
    })

    let values = []

    for (let data of datas) {
        values.push({ "x": data.time, "y": data.cpu.usagePer })
    }

    return values
}

// get cpu metric in 1 month
async function getMemoryMetricMonth() {
    let datas = await OsDay.find({
        time: {
            "$gt": new Date(new Date().getTime() - 60 * 60 * 1000 * 24 * 30).toISOString()
        }
    })
    var values = []

    for (let data of datas) {
        values.push({ "x": data.time, "y": data.memory.usagePer })
    }

    return values

}

// get cpu metric in 24h
async function getMemoryMetricDay() {
    let datas = await OsDay.find({
        time: {
            "$gt": new Date(new Date().getTime() - 60 * 60 * 1000 * 24).toISOString()
        }
    })

    let values = []

    for (let data of datas) {
        values.push({ "x": data.time, "y": data.memory.usagePer })
    }

    return values
}

// get cpu metric in on 1 hour
async function getMemoryMetricHour() {
    let datas = await OsMetric.find({
        time: {
            "$gt": new Date(new Date().getTime() - 60 * 60 * 1000).toISOString()
        }
    })

    let values = []

    for (let data of datas) {
        values.push({ "x": data.time, "y": data.memory.usagePer })
    }

    return values
}

module.exports = { collectOsMetric, getCpuMetricDay, averageFiveMinutes, getCpuMetricHour, getMemoryMetricDay, getMemoryMetricHour, removeOsMetricData, getCpuMetricMonth, getMemoryMetricMonth }