
var chartCircle
var chartLine
var chartColumn
var chartBar
function drawChartCircle(year, arrOverviewChart, flagDraw) {
    let ObjDataDraw = {}
    ObjDataDraw.sumKeywordAI = 0
    ObjDataDraw.sumKeywordLib = 0
    year = String(year)
    for (let index = 0; index < arrOverviewChart.length; index++) {
        if (year === arrOverviewChart[index].year) {
            ObjDataDraw = arrOverviewChart[index]
        }
    }
    if (flagDraw) {
        var options = {
            series: [ObjDataDraw.sumKeywordAI, ObjDataDraw.sumKeywordLib],
            chart: {
                width: 288,
                type: 'donut',
            },
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            plotOptions: {
                pie: {
                    donut: {
                        size: "80%",
                        background: "transparent",
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: "29px",
                                fontFamily: "Nunito, sans-serif",
                                color: undefined,
                                offsetY: -10,
                            },
                            total: {
                                show: true,
                                showAlways: true,
                                label: "Total",
                                color: "#414a53",
                                formatter: function (w) {
                                    return w.globals.seriesTotals.reduce(function (a, b) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                            value: {
                                show: true,
                                fontSize: "26px",
                                fontFamily: "Nunito, sans-serif",
                                color: "#414a53",
                                offsetY: 16,
                                formatter: function (val) {
                                    return val;
                                },
                            },

                        },
                    },
                },
            },
            labels: ['AI', 'Library'],
            legend: {
                show: true,
                position: "bottom",
                horizontalAlign: "center",
                fontSize: "14px",
                width: '50%',
                offsetY: 0,
                markers: {
                    width: 12,
                    height: 12,
                    radius: 2,
                },
                itemMargin: {
                    horizontal: 0,
                    vertical: 15,
                },
                onItemClick: {
                    toggleDataSeries: false
                },
                onItemHover: {
                    highlightDataSeries: false
                },
                formatter: function (seriesName, opts) {
                    if (seriesName === 'Library') {
                        document.querySelectorAll('.apexcharts-legend-series.no-click')[0].style.padding = '0px 0px 10px 0px'
                    }
                    return `<div style="float: left !important;">${seriesName}</div>    <div style="color:${opts.w.globals.colors[opts.seriesIndex]};float: right !important; font-weight: bold;">${opts.w.globals.series[opts.seriesIndex]}</div>`
                }
            },
            grid: {
                padding: {
                    right: 0,
                    left: 0,
                },
            },
        };

        chartCircle = new ApexCharts(document.querySelector("#overview-chart"), options);
        chartCircle.render();
    } else {

        let arrayUpdate = [ObjDataDraw.sumKeywordAI, ObjDataDraw.sumKeywordLib]
        chartCircle.updateSeries(arrayUpdate)
    }

}

function drawChartLine(arrayYear, arrayKeywordLib, arrayKeywordAI, flagDrawLine, year) {
    year = String(year)
    if (flagDrawLine) {
        var options = {
            annotations: {
                xaxis: [
                    {
                        x: new Date(year).getTime(),
                        borderColor: 'rgb(0, 143, 251)',
                        strokeDashArray: 3,
                    },
                ],
            },
            series: [{
                name: 'AI',
                data: arrayKeywordAI
            }, {
                name: 'Library',
                data: arrayKeywordLib
            }],
            chart: {
                // width: '100%'
                height: 288,
                type: 'area',
                toolbar: {
                    show: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
            },
            xaxis: {
                type: 'datetime',
                categories: arrayYear,
                labels: {
                    show: true,
                    rotate: -45,
                    rotateAlways: true,
                },
                tooltip: {
                    enabled: false,

                },
                axisTicks: {
                    show: false,
                },
                axisBorder: {

                    show: false,
                },

            },
            yaxis: {
                labels: {
                    offsetX: -25,
                },
                forceNiceScale: true,
                min: 0,
            },
            tooltip: {
                x: {
                    format: 'yyyy'
                },
            },
            legend: {
                position: 'bottom',
                offsetY: -10,
                markers: { radius: 2, }
            },
            grid: {
                padding: {
                    top: -27,
                    left: -20,
                    // right:-3,
                },
            },
        };

        chartLine = new ApexCharts(document.querySelector("#chart-count-keyword"), options);
        chartLine.render();
    } else {
        chartLine.clearAnnotations()
        chartLine.addXaxisAnnotation({
            x: new Date(year).getTime(),
            borderColor: 'rgb(0, 143, 251)',
            strokeDashArray: 3,
        });
    }
}


function drawChartColumn(year, arrChartColumnLib, arrChartColumnAI, flagChartColumn) {
    let valueNewsLib = 0
    let valueEventLib = 0
    let valuePublicationsLib = 0
    let valueOtherLib = 0
    let valueNewsAI = 0
    let valueEventAI = 0
    let valuePublicationsAI = 0
    let valueOtherAI = 0
    let arrDataLib = []
    let arrDataAI = []
    year = String(year)
    for (let x = 0; x < arrChartColumnLib.length; x++) {
        if (arrChartColumnLib[x]._id === year) {
            for (let y = 0; y < arrChartColumnLib[x].value.length; y++) {
                if (arrChartColumnLib[x].value[y].category === 'news') valueNewsLib = arrChartColumnLib[x].value[y].count
                if (arrChartColumnLib[x].value[y].category === 'event') valueEventLib = arrChartColumnLib[x].value[y].count
                if (arrChartColumnLib[x].value[y].category === 'publications') valuePublicationsLib = arrChartColumnLib[x].value[y].count
                if (arrChartColumnLib[x].value[y].category === 'other') valueOtherLib = arrChartColumnLib[x].value[y].count
            }
            break;
        }

    }
    for (let x = 0; x < arrChartColumnAI.length; x++) {
        if (arrChartColumnAI[x]._id === year) {
            for (let y = 0; y < arrChartColumnAI[x].value.length; y++) {
                if (arrChartColumnAI[x].value[y].category === 'news') valueNewsAI = arrChartColumnAI[x].value[y].count
                if (arrChartColumnAI[x].value[y].category === 'event') valueEventAI = arrChartColumnAI[x].value[y].count
                if (arrChartColumnAI[x].value[y].category === 'publications') valuePublicationsAI = arrChartColumnAI[x].value[y].count
                if (arrChartColumnAI[x].value[y].category === 'other') valueOtherAI = arrChartColumnAI[x].value[y].count
            }
            break;
        }

    }

    arrDataLib = [valueNewsLib, valueEventLib, valuePublicationsLib,valueOtherLib]
    arrDataAI = [valueNewsAI, valueEventAI, valuePublicationsAI,valueOtherAI]
    if (flagChartColumn) {
        var options = {
            series: [{
                name: 'AI',
                data: arrDataAI
            }, {
                name: 'Library',
                data: arrDataLib
            }],
            chart: {
                type: 'bar',
                height: 288,
                stacked: true,
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }],
            plotOptions: {
                bar: {
                    horizontal: false,
                    borderRadius: 10
                },
            },
            xaxis: {
                categories: ['News', 'Event', 'Publications','Other'],
            },
            yaxis: {
                labels: {
                    offsetX: -25,
                },
                // forceNiceScale: true,
                // min: 0,
            },
            legend: {
                position: 'bottom',
                offsetY: -10
            },
            fill: {
                opacity: 1
            },
            grid: {
                padding: {
                    top: -27,
                    right: -10,
                    left: -20
                },
            },
        };

        chartColumn = new ApexCharts(document.querySelector("#category-keyword-chart"), options);
        chartColumn.render();
    } else {
        chartColumn.updateSeries([{
            name: 'AI',
            data: arrDataAI
        }, {
            name: 'Library',
            data: arrDataLib
        }])
    }
}

function drawChartBar(arrValue, arrName, flagChartBar) {
    if (flagChartBar) {
        var options = {
            series: [{
                data: arrValue
            }],
            chart: {
                id: 'mychart',
                type: 'bar',
                height: 1003,
                toolbar: {
                    show: false
                },

                events: {
                    dataPointMouseEnter: function (event) {
                        event.path[0].style.cursor = "pointer";
                    },
                    dataPointSelection: (event, chartContext, config) => {
                        $('#popup-list-keyword').hide();
                        const dp = config.dataPointIndex
                        let keyword = chartContext.series.w.globals.labels[dp]
                        searchKeywordCloud(keyword)
                    }
                }
            },
            tooltip: {
                enabled: false,
                y: {
                    formatter: undefined,
                    title: {
                        formatter: (seriesName) => 'Keyword',
                    },
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                },
            },
            dataLabels: {
                enabled: true,
            },
            xaxis: {
                categories: arrName,
                labels: {
                    show: false,
                    rotate: -45,
                    rotateAlways: true,
                },
                tooltip: {
                    enabled: false,

                },
                axisTicks: {
                    show: false,

                },
                axisBorder: {

                    show: false,

                },
            },
            yaxis: {
                labels: {
                    show: true,
                    align: 'right',
                    style: {

                        colors: [],
                        fontSize: '12px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        cssClass: 'apexcharts-yaxis-label',
                    },
                },

            },
            grid: {
                yaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                    top: -35,
                    right: -10,
                    // left: -10,
                    bottom: -27,
                },
            }

        };

        chartBar = new ApexCharts(document.querySelector("#chart-bar-top-keyword"), options);
        chartBar.render();
    } else {
        ApexCharts.exec('mychart', 'updateOptions', {
            xaxis: { categories: arrName, },
        }, false, true);

        ApexCharts.exec('mychart', 'updateSeries', [{
            data: arrValue
        }], true);
    }
}