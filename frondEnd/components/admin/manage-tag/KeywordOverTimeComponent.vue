<template>
  <div class="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
    <div id="area-tag-chart" style="height: 265px;">
      <div style="height: 10px; text-align: center;">
         <apexchart class="box-data-chart" id="chart-count-keyword" type="area" height="230" width="450" :options="optionChartLine" :series="seriesChartLine" v-if="arrLib&&arrAI&&arrLib.length&&arrAI.length" style="bottom: -30px;margin-top:26px"/>
        <div id="loading-chart-overview" style=" margin-top: 95px;" class="spinner-border text-success align-self-center" v-else></div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      arrChartColumnLib: [],
      optionChartColumn: {},
      arrChartColumnAI: [],
      year: parseInt(this.$route.query.year) || 2022,
      flagChartColumn: true,
      arrLib: [],
      arrAI: [],
      arrOverviewChart: [],
      arrayKeywordLib: [],
      arrayKeywordAI: [],
      arrayYear: [],
      optionChartCircle: {},
      flagDrawCircle: true,
      flagDrawLine: true,
      flagDraw: true,
    };
  },
  computed: {
    seriesChartLine: function () {
      return [
        {
          name: "AI",
          data: this.arrayKeywordAI,
        },
        {
          name: "Library",
          data: this.arrayKeywordLib,
        },
      ];
    },
    optionChartLine: function () {
      if (this.flagDrawLine) {
        return {
          annotations: {
            xaxis: [
              {
                x: new Date(String(this.year)).getTime(),
                borderColor: "rgb(0, 143, 251)",
                strokeDashArray: 3,
              },
            ],
          },
          chart: {
            height: 288,
            width:200,
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "smooth",
          },
          xaxis: {
            type: "datetime",
            categories: this.arrayYear,
            offsetX: 20,
            labels: {
              show: true,
              rotate: -45,
              rotateAlways: true,
              offsetY: -5,
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
              offsetX: -15,
              offsetY: 0,
            },
            forceNiceScale: true,
            min: 0,
          },
          tooltip: {
            x: {
              format: "yyyy",
            },
          },
          legend: {
            position: "bottom",
            offsetY: 10,
            markers: { radius: 2 },
          },
          grid: {
            padding: {
              top: -20,
              right: -10,
              left: -10,

              // right:-3,
            },
          },
        };
      } else {
      }
    },
    seriesChartCircle: function () {
      let ObjDataDraw = {};
      ObjDataDraw.sumKeywordAI = 0;
      ObjDataDraw.sumKeywordLib = 0;
      let year = String(this.year);
      for (let index = 0; index < this.arrOverviewChart.length; index++) {
        if (year === this.arrOverviewChart[index].year) {
          ObjDataDraw = this.arrOverviewChart[index];
        }
      }
      return [ObjDataDraw.sumKeywordAI, ObjDataDraw.sumKeywordLib];
    },

    seriesChartColumn: function () {
      let valueNewsLib = 0;
      let valueEventLib = 0;
      let valuePublicationsLib = 0;
      let valueOtherLib = 0;

      let valueNewsAI = 0;
      let valueEventAI = 0;
      let valuePublicationsAI = 0;
      let valueOtherAI = 0;
      let year = String(this.year);
      for (let x = 0; x < this.arrChartColumnLib.length; x++) {
        if (this.arrChartColumnLib[x]._id === year) {
          for (let y = 0; y < this.arrChartColumnLib[x].value.length; y++) {
            if (this.arrChartColumnLib[x].value[y].category === "news") {
              valueNewsLib = this.arrChartColumnLib[x].value[y].count;
            }
            if (this.arrChartColumnLib[x].value[y].category === "event") {
              valueEventLib = this.arrChartColumnLib[x].value[y].count;
            }
            if (
              this.arrChartColumnLib[x].value[y].category === "publications"
            ) {
              valuePublicationsLib = this.arrChartColumnLib[x].value[y].count;
            }
            if (this.arrChartColumnLib[x].value[y].category === "other") {
              valueOtherLib = this.arrChartColumnLib[x].value[y].count;
            }
          }
          break;
        }
      }
      for (let x = 0; x < this.arrChartColumnAI.length; x++) {
        if (this.arrChartColumnAI[x]._id === year) {
          for (let y = 0; y < this.arrChartColumnAI[x].value.length; y++) {
            if (this.arrChartColumnAI[x].value[y].category === "news") {
              valueNewsAI = this.arrChartColumnAI[x].value[y].count;
            }
            if (this.arrChartColumnAI[x].value[y].category === "event") {
              valueEventAI = this.arrChartColumnAI[x].value[y].count;
            }
            if (this.arrChartColumnAI[x].value[y].category === "publications") {
              valuePublicationsAI = this.arrChartColumnAI[x].value[y].count;
            }
            if (this.arrChartColumnAI[x].value[y].category === "other") {
              valueOtherAI = this.arrChartColumnAI[x].value[y].count;
            }
          }
          break;
        }
      }

      return [
        {
          name: "AI",
          data: [valueNewsAI, valueEventAI, valuePublicationsAI, valueOtherAI],
        },
        {
          name: "Library",
          data: [
            valueNewsLib,
            valueEventLib,
            valuePublicationsLib,
            valueOtherLib,
          ],
        },
      ];
    },
  },
  methods: {    
    countTotalKeywordByYear() {
      HTTP.get("count-total-tag-all-year")
        .then((response) => {
          this.arrLib = response.data[0];
          this.arrAI = response.data[1];
          for (let i = 0; i < this.arrLib.length; i++) {
            let index = this.arrAI.find((x) => x._id === this.arrLib[i]._id);
            if (!index) this.arrAI.push({ _id: this.arrLib[i]._id, count: 0 });
          }
          for (let i = 0; i < this.arrAI.length; i++) {
            let index = this.arrLib.find((x) => x._id === this.arrAI[i]._id);
            if (!index) this.arrLib.push({ _id: this.arrAI[i]._id, count: 0 });
          }
          this.arrLib.sort((a, b) => (a._id > b._id ? 1 : -1));
          this.arrAI.sort((a, b) => (a._id > b._id ? 1 : -1));

          let countLib = 0;
          let countAI = 0;

          for (let index = 0; index < this.arrLib.length; index++) {
            let obj = {};
            countLib += this.arrLib[index].count;
            countAI += this.arrAI[index].count;
            this.arrayYear.push(this.arrLib[index]._id);
            this.arrayKeywordLib.push(countLib);
            this.arrayKeywordAI.push(countAI);
            obj.year = this.arrLib[index]._id;
            obj.sumKeywordLib = countLib;
            obj.sumKeywordAI = countAI;
            this.arrOverviewChart.push(obj);
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });

      if (this.flagDraw) {
        this.optionChartCircle = {
          chart: {
            width: 288,
          },
          dataLabels: {
            enabled: false,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
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
          labels: ["AI", "Library"],
          legend: {
            show: true,
            position: "bottom",

            horizontalAlign: "center",
            fontSize: "14px",
            width: "50%",
            offsetY: 15,
            markers: {
              width: 12,
              height: 12,
              radius: 2,
            },
            itemMargin: {
              horizontal: 20,
              vertical: 10,
            },
            onItemClick: {
              toggleDataSeries: false,
            },
            onItemHover: {
              highlightDataSeries: false,
            },

            formatter: function (seriesName, opts) {            
              return `<div style="float: left !important;">${seriesName}</div>    <div style="color:${
                opts.w.globals.colors[opts.seriesIndex]
              };float: right !important; font-weight: bold;">${
                opts.w.globals.series[opts.seriesIndex]
              }</div>`;
            },
          },
          grid: {
            padding: {
              right: 0,
              left: 0,
            },
          },
        };
      }
    },
  },
  mounted() {
  
    this.countTotalKeywordByYear();
   
  },
};
</script>
<style scoped>
div#apexchartsvx02iasf {
    bottom: -30px!important;
}
</style>
