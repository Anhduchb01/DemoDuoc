try {
  /*
      ==============================
      |    @Options Charts Script   |
      ==============================
  */

  /*
      =============================
          Daily Sales | Options
      =============================
  */
  var d_2options1 = {
    chart: {
      height: 160,
      type: "bar",
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
    },
    colors: ["#70B2D9", "#e7f7ff"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    series: [
      {
        name: "Sales",
        data: [44, 55, 41, 67, 22, 43, 21],
      },
      {
        name: "Last Week",
        data: [13, 23, 20, 8, 13, 27, 33],
      },
    ],
    xaxis: {
      labels: {
        show: false,
      },
      categories: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        startingShape: "rounded",
        endingShape: "rounded",
        columnWidth: "25%",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 10,
        right: 0,
        bottom: -40,
        left: 0,
      },
    },
  };

  /*
      =============================
          Total Orders | Options
      =============================
  */

  if (Cookies.getCookie("dark_mode") != "") {
    var d_2options2 = {
      chart: {
        id: "sparkline1",
        group: "sparklines",
        type: "area",
        height: 315,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.3,
          opacityTo: 0.05,
          stops: [100, 100],
        },
      },
      series: [
        {
          name: "Sales",
          data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
        },
      ],
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      yaxis: {
        min: 0,
      },
      grid: {
        padding: {
          top: 125,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        theme: "dark",
      },
      colors: ["#805dca"],
    };
  } else {
    var d_2options2 = {
      chart: {
        id: "sparkline1",
        group: "sparklines",
        type: "area",
        height: 315,
        sparkline: {
          enabled: true,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      fill: {
        opacity: 1,
      },
      series: [
        {
          name: "Sales",
          data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
        },
      ],
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      yaxis: {
        min: 0,
      },
      grid: {
        padding: {
          top: 125,
          right: 0,
          bottom: 0,
          left: 0,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        theme: "dark",
      },
      colors: ["#e7515a"],
    };
  }

  /*
      =================================
          Revenue Monthly | Options
      =================================
  */

  if (Cookies.getCookie("dark_mode") != "") {
    var options1 = {
      chart: {
        fontFamily: "Nunito, sans-serif",
        height: 365,
        type: "area",
        zoom: {
          enabled: false,
        },
        dropShadow: {
          enabled: true,
          opacity: 0.2,
          blur: 10,
          left: -7,
          top: 22,
        },
        toolbar: {
          show: false,
        },
        events: {
          mounted: function (ctx, config) {
            const highest1 = ctx.getHighestValueInSeries(0);
            const highest2 = ctx.getHighestValueInSeries(1);

            ctx.addPointAnnotation({
              x: new Date(
                ctx.w.globals.seriesX[0][
                ctx.w.globals.series[0].indexOf(highest1)
                ]
              ).getTime(),
              y: highest1,
              label: {
                style: {
                  cssClass: "d-none",
                },
              },
              customSVG: {
                SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#2196f3" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                cssClass: undefined,
                offsetX: -8,
                offsetY: 5,
              },
            });

            ctx.addPointAnnotation({
              x: new Date(
                ctx.w.globals.seriesX[1][
                ctx.w.globals.series[1].indexOf(highest2)
                ]
              ).getTime(),
              y: highest2,
              label: {
                style: {
                  cssClass: "d-none",
                },
              },
              customSVG: {
                SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#e7515a" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                cssClass: undefined,
                offsetX: -8,
                offsetY: 5,
              },
            });
          },
        },
      },
      colors: ["#2196f3", "#e7515a"],
      dataLabels: {
        enabled: false,
      },
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: "#000",
            strokeColor: "#000",
            size: 5,
          },
          {
            seriesIndex: 2,
            dataPointIndex: 11,
            fillColor: "#000",
            strokeColor: "#000",
            size: 4,
          },
        ],
      },
      subtitle: {
        text: "$10,840",
        align: "left",
        margin: 0,
        offsetX: 95,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "18px",
          color: "#4361ee",
        },
      },
      title: {
        text: "Total Profit",
        align: "left",
        margin: 0,
        offsetX: -10,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "18px",
          color: "#bfc9d4",
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 2,
        lineCap: "square",
      },
      series: [
        {
          name: "Income",
          data: [
            16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000,
            17000, 14000, 17000,
          ],
        },
        {
          name: "Expenses",
          data: [
            16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000,
            19000, 18000, 19000,
          ],
        },
      ],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "12px",
            fontFamily: "Nunito, sans-serif",
            cssClass: "apexcharts-xaxis-title",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (value, index) {
            return value / 1000 + "K";
          },
          offsetX: -22,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: "Nunito, sans-serif",
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      grid: {
        borderColor: "#191e3a",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: -10,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -50,
        fontSize: "16px",
        fontFamily: "Quicksand, sans-serif",
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20,
        },
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.19,
          opacityTo: 0.05,
          stops: [100, 100],
        },
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30,
            },
          },
        },
      ],
    };
  } else {
    var options1 = {
      chart: {
        fontFamily: "Quicksand, sans-serif",
        height: 365,
        type: "area",
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
        events: {
          mounted: function (ctx, config) {
            const highest1 = ctx.getHighestValueInSeries(0);
            const highest2 = ctx.getHighestValueInSeries(1);

            ctx.addPointAnnotation({
              x: new Date(
                ctx.w.globals.seriesX[0][
                ctx.w.globals.series[0].indexOf(highest1)
                ]
              ).getTime(),
              y: highest1,
              label: {
                style: {
                  cssClass: "d-none",
                },
              },
              customSVG: {
                SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#2196f3" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                cssClass: undefined,
                offsetX: -8,
                offsetY: 5,
              },
            });

            ctx.addPointAnnotation({
              x: new Date(
                ctx.w.globals.seriesX[1][
                ctx.w.globals.series[1].indexOf(highest2)
                ]
              ).getTime(),
              y: highest2,
              label: {
                style: {
                  cssClass: "d-none",
                },
              },
              customSVG: {
                SVG: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#6d17cb" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-circle"><circle cx="12" cy="12" r="10"></circle></svg>',
                cssClass: undefined,
                offsetX: -8,
                offsetY: 5,
              },
            });
          },
        },
      },
      colors: ["#2196f3", "#6d17cb"],
      dataLabels: {
        enabled: false,
      },
      markers: {
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 7,
            fillColor: "#000",
            strokeColor: "#000",
            size: 5,
          },
          {
            seriesIndex: 2,
            dataPointIndex: 11,
            fillColor: "#000",
            strokeColor: "#000",
            size: 4,
          },
        ],
      },
      subtitle: {
        text: "$10,840",
        align: "left",
        margin: 0,
        offsetX: 95,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "18px",
          color: "#4361ee",
        },
      },
      title: {
        text: "Total Profit",
        align: "left",
        margin: 0,
        offsetX: -10,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "18px",
          color: "#0e1726",
        },
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 2,
        lineCap: "square",
      },
      series: [
        {
          name: "Income",
          data: [
            16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000,
            17000, 14000, 17000,
          ],
        },
        {
          name: "Expenses",
          data: [
            16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000,
            19000, 18000, 19000,
          ],
        },
      ],
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          show: true,
        },
        labels: {
          offsetX: 0,
          offsetY: 5,
          style: {
            fontSize: "12px",
            fontFamily: "Quicksand, sans-serif",
            cssClass: "apexcharts-xaxis-title",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: function (value, index) {
            return value / 1000 + "K";
          },
          offsetX: -22,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: "Quicksand, sans-serif",
            cssClass: "apexcharts-yaxis-title",
          },
        },
      },
      grid: {
        borderColor: "#e0e6ed",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: false,
          },
        },
        padding: {
          top: 0,
          right: 0,
          bottom: 0,
          left: -10,
        },
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -50,
        fontSize: "16px",
        fontFamily: "Quicksand, sans-serif",
        markers: {
          width: 10,
          height: 10,
          strokeWidth: 0,
          strokeColor: "#fff",
          fillColors: undefined,
          radius: 12,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0,
        },
        itemMargin: {
          horizontal: 0,
          vertical: 20,
        },
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          shadeIntensity: 1,
          inverseColors: !1,
          opacityFrom: 0.28,
          opacityTo: 0.05,
          stops: [45, 100],
        },
      },
      responsive: [
        {
          breakpoint: 575,
          options: {
            legend: {
              offsetY: -30,
            },
          },
        },
      ],
    };
  }

  /*
      ==================================
          Sales By Category | Options
      ==================================
  */



  function areaTagChart(arrayYear, arrayKeywordLib, arrayKeywordAI) {
    if (Cookies.getCookie("dark_mode") != "") {
      var options = {
        series: [{
          name: 'AI',
          data: arrayKeywordAI
        }, {
          name: 'Library',
          data: arrayKeywordLib
        }],
        chart: {
          // width: '100%'
          height: 250,
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
      };
    } else {
      var options = {
        series: [{
          name: 'AI',
          data: arrayKeywordAI
        }, {
          name: 'Library',
          data: arrayKeywordLib
        }],
        chart: {
          // width: '100%'
          height: 250,
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

      };
    }
    return options;
  }

  function osMetricDay(value, color) {
    var options = {
      series: [{
        name: 'Usage Percent',
        data: value
      }],
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 20,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: color,
      xaxis: {
        type: 'category',
        position: 'bottom',
        title: {
          text: "Os Metric in day"
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        tooltip: {
          enabled: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + "h"
          }
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },

      },
    };
    return options
  }

  function osMetric(value, color, name) {

    var sLineArea = {
      chart: {
        height: 350,
        type: 'area',
        stacked: false,
        toolbar: {
          show: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      series: [{
        name: name,
        data: value
      }],
      stroke: {
        width: 1
      },
      colors: color,
      xaxis: {
        type: 'datetime',
        labels: {
          formatter: function (val) {
            return dayjs(val).format('DD/MM HH:mm:ss')
          }
        }
      },
      yaxis: {
        min: 0,
        max: 100
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss'
        },
      }
    }
    return sLineArea
  }


  function optioncChart(sumNews, sumEvent,sumPublications, sumOther) {
    if (Cookies.getCookie("dark_mode") != "") {
      var options = {
        chart: {
          type: "donut",
          width: 397,
        },
        colors: ["#79db72", "#6ab8f9", "#00ffe1" , '#b58fe6'],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          markers: {
            width: 10,
            height: 10,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
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
                value: {
                  show: true,
                  fontSize: "26px",
                  fontFamily: "Nunito, sans-serif",
                  color: "#bfc9d4",
                  offsetY: 16,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  color: "#888ea8",
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        stroke: {
          show: true,
          width: 20,
          colors: "#0e1726",
        },
        series: [sumNews, sumEvent,sumPublications, sumOther],
        labels: ["News", "Event", "Publications", "Other"],
        responsive: [
          {
            breakpoint: 1599,
            options: {
              chart: {
                width: "350px",
                height: "400px",
              },
              legend: {
                position: "bottom",
              },
            },

            breakpoint: 1439,
            options: {
              chart: {
                width: "250px",
                height: "390px",
              },
              legend: {
                position: "bottom",
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "65%",
                  },
                },
              },
            },
          },
        ],
      };
    } else {
      var options = {
        chart: {
          type: "donut",
          width: 397,
        },
        colors: ["#79db72", "#6ab8f9", "#00ffe1" , '#b58fe6'],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom",
          horizontalAlign: "center",
          fontSize: "14px",
          markers: {
            width: 10,
            height: 10,
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8,
          },
        },
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
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
                value: {
                  show: true,
                  fontSize: "26px",
                  fontFamily: "Nunito, sans-serif",
                  color: "20",
                  offsetY: 16,
                  formatter: function (val) {
                    return val;
                  },
                },
                total: {
                  show: true,
                  showAlways: true,
                  label: "Total",
                  color: "#888ea8",
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  },
                },
              },
            },
          },
        },
        stroke: {
          show: true,
          width: 20,
        },
        series: [sumNews, sumEvent,sumPublications, sumOther],
        labels: ["News", "Event", "Publications", "Other"],
        responsive: [
          {
            breakpoint: 1599,
            options: {
              chart: {
                width: "350px",
                height: "400px",
              },
              legend: {
                position: "bottom",
              },
            },

            breakpoint: 1439,
            options: {
              chart: {
                width: "250px",
                height: "390px",
              },
              legend: {
                position: "bottom",
              },
              plotOptions: {
                pie: {
                  donut: {
                    size: "65%",
                  },
                },
              },
            },
          },
        ],
      };
    }
    return options;
  }
  function drawChartFlow(results) {
    if (Cookies.getCookie("dark_mode") != "") {
      am4core.useTheme(am4themes_animated);

      var chart = am4core.create("flow-chart", am4charts.SankeyDiagram);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.nodes.template.nameLabel.label.width = 250;
      chart.nodes.template.nameLabel.label.truncate = false;
      chart.nodes.template.nameLabel.label.wrap = true;
      chart.data = results
      let hoverState = chart.links.template.states.create("hover");
      hoverState.properties.fillOpacity = 0.6;
      let linkTemplate = chart.links.template;
      linkTemplate.propertyFields.fill = "linkColor";
      linkTemplate.propertyFields.fillOpacity = "linkOpacity";
      linkTemplate.colorMode = "solid";
      // linkTemplate.propertyFields.fillOpacity = "linkOpacity";
      linkTemplate.fillOpacity = 0.6;
      // linkTemplate.tension = 1;
      // linkTemplate.controlPointDistance = 0.1;
      // linkTemplate.fill = am4core.color("#A8C686");


      chart.dataFields.fromName = "from";
      chart.dataFields.toName = "to";
      chart.dataFields.value = "value";
      chart.dataFields.color = "nodeColor";

      // for right-most label to fit
      chart.paddingRight = 85;
      chart.paddingTop = 31;
      chart.paddingBottom = 10;

      // make nodes draggable
      var nodeTemplate = chart.nodes.template;
      nodeTemplate.inert = true;
      // nodeTemplate.readerTitle = "Drag me!";
      nodeTemplate.showSystemTooltip = true;
      nodeTemplate.width = 20;

      // make nodes draggable
      var nodeTemplate = chart.nodes.template;
      // nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
      nodeTemplate.showSystemTooltip = true;
      nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer
      nodeTemplate.nameLabel.label.fill = am4core.color("#fff");

    } else {
      am4core.useTheme(am4themes_animated);

      var chart = am4core.create("flow-chart", am4charts.SankeyDiagram);
      chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
      chart.nodes.template.nameLabel.label.width = 250;
      chart.nodes.template.nameLabel.label.truncate = false;
      chart.nodes.template.nameLabel.label.wrap = true;
      chart.data = results
      let hoverState = chart.links.template.states.create("hover");
      hoverState.properties.fillOpacity = 0.6;
      let linkTemplate = chart.links.template;
      linkTemplate.propertyFields.fill = "linkColor";
      linkTemplate.propertyFields.fillOpacity = "linkOpacity";
      linkTemplate.colorMode = "solid";


      chart.dataFields.fromName = "from";
      chart.dataFields.toName = "to";
      chart.dataFields.value = "value";
      chart.dataFields.color = "nodeColor";

      // for right-most label to fit
      chart.paddingRight = 85;
      chart.paddingTop = 31;
      chart.paddingBottom = 10;
      chart.links.template.tooltipText = "[bold]{textTip} → {toName}: {value}";
      // make nodes draggable
      var nodeTemplate = chart.nodes.template;
      nodeTemplate.inert = true;
      // nodeTemplate.readerTitle = "Drag me!";
      nodeTemplate.showSystemTooltip = true;
      nodeTemplate.width = 20;
      

      // make nodes draggable
      var nodeTemplate = chart.nodes.template;
      // nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
      nodeTemplate.showSystemTooltip = true;
      nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer
    };
    if (document.querySelector('[aria-labelledby="id-58-title"]')) document.querySelector('[aria-labelledby="id-58-title"]').style.display = 'none'
  }
  /*
      ==============================
      |    @Render Charts Script    |
      ==============================
  */

  /*
      ============================
          Daily Sales | Render
      ============================
  */
  var d_2C_1 = new ApexCharts(
    document.querySelector("#daily-sales"),
    d_2options1
  );
  d_2C_1.render();

  /*
      ============================
          Total Orders | Render
      ============================
  */
  var d_2C_2 = new ApexCharts(
    document.querySelector("#total-orders"),
    d_2options2
  );
  d_2C_2.render();

  /*
      ================================
          Revenue Monthly | Render
      ================================
  */
  var chart1 = new ApexCharts(
    document.querySelector("#revenueMonthly"),
    options1
  );

  chart1.render();

  /*
      =================================
          Sales By Category | Render
      =================================
  */

  // render chart for tag percent
  function renderFlowChart(results) {
    drawChartFlow(results)
  }
  function renderAreaChartTag(arrayYear, arrayKeywordLib, arrayKeywordAI) {
    var donut = new ApexCharts(
      document.querySelector("#area-tag-chart"),
      areaTagChart(arrayYear, arrayKeywordLib, arrayKeywordAI)
    );
    donut.render();
  }

  function renderChartCircle(sumNews, sumEvent,sumPublications, sumOther) {
    var chart = new ApexCharts(
      document.querySelector("#chart-2"),
      optioncChart(sumNews, sumEvent,sumPublications, sumOther)
    );
    chart.render();
  }

  /*
      =============================================
          Perfect Scrollbar | Recent Activities
      =============================================
  */
  const ps = new PerfectScrollbar(document.querySelector(".mt-container"));

  const topSellingProduct = new PerfectScrollbar(
    ".widget-table-three .table-scroll table",
    {
      wheelSpeed: 0.5,
      swipeEasing: !0,
      minScrollbarLength: 40,
      maxScrollbarLength: 100,
      suppressScrollY: true,
    }
  );
} catch (e) { }
