<template>
  <div class="box-chart-analysis">
    <div style="width: 70%; display: flex; margin-right: 10px">
      <div style="width: 40%; margin-right: 10px;position:relative" class="chart-analysis statistical-chart-circle">
        <div>
          <p class="title-chart">{{ $t("body.keyword.totalKeyword") }}</p>
        </div>
        <!--  -->
        <div class="box-data-chart" id="category-keyword-chart" style="width: 348px; min-height: 60px;" v-if="checkLoadingTolalKey">
          <div class="loadding-chart" id="loading-chart-column">
            <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
              <circle class="loader-svg bg" cx="50" cy="50" r="45" />
              <circle class="loader-svg animate" cx="50" cy="50" r="45" />
            </svg>
            {{ $t("body.keyword.loading") }}
          </div>
        </div>
        <apexchart class="box-data-chart" id="overview-chart" height="321" width="288" style="width: 321px; min-height: 288px;" type="donut" :options="optionChartCircle" :series="seriesChartCircle" v-else-if="arrLib&&arrAI&&arrLib.length&&arrAI.length" />
        <div class="box-data-chart" id="overview-chart" style="width: 321px; min-height: 50px;" v-else>
          <div class="loadding-chart" id="loading-chart-overview">Cannot get data, please try again</div>
        </div>
      </div>
      <div style="width: 60%;position:relative" class="chart-analysis statistical-chart-line">
        <div>
          <p class="title-chart">{{ $t("body.keyword.keywordOverTime") }}</p>
        </div>
        <!-- height="288" width="441" -->
        <div class="box-data-chart" id="category-keyword-chart" style="width: 348px; min-height: 60px;" v-if="checkLoadingKeyByTime">
          <div class="loadding-chart" id="loading-chart-column">
            <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
              <circle class="loader-svg bg" cx="50" cy="50" r="45" />
              <circle class="loader-svg animate" cx="50" cy="50" r="45" />
            </svg>
            {{ $t("body.keyword.loading") }}
          </div>
        </div>
        <apexchart class="box-data-chart" id="chart-count-keyword" type="area" height="288" width="441" :options="optionChartLine" :series="seriesChartLine" v-else-if="arrLib&&arrAI&&arrLib.length&&arrAI.length" />
        <div class="box-data-chart" id="chart-count-keyword" style="width: 481px; min-height: 50px;" v-else>
          <div class="loadding-chart" id="loading-chart-line">Cannot get data, please try again</div>
        </div>
      </div>
    </div>
    <div style="width: 30%;position:relative" class="chart-analysis statistical-chart-column">
      <div>
        <p class="title-chart">{{ $t("body.keyword.KeywordByCategory") }}</p>
      </div>
      <div class="box-data-chart" id="category-keyword-chart" style="width: 348px; min-height: 60px;" v-if="checkLoadingKeyByCate">
        <div class="loadding-chart" id="loading-chart-column">
          <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
            <circle class="loader-svg bg" cx="50" cy="50" r="45" />
            <circle class="loader-svg animate" cx="50" cy="50" r="45" />
          </svg>
          {{ $t("body.keyword.loading") }}
        </div>
      </div>
      <apexchart class="box-data-chart" id="category-keyword-chart" height="288" width="308" type="bar" :options="optionChartColumn" :series="seriesChartColumn" v-else-if="arrChartColumnAI &&arrChartColumnAI.length" />
      <div class="box-data-chart" id="category-keyword-chart" style="width: 348px; min-height: 60px;" v-else>
        <div class="loadding-chart" id="loading-chart-column">Cannot get data, please try again</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      checkLoadingKeyByCate: true,
      checkLoadingKeyByTime: true,
      checkLoadingTolalKey: true,
      arrChartColumnLib: [1],
      optionChartColumn: {},
      arrChartColumnAI: [],
      year: this.$route.query.year || '2023/07',
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
      console.log('arrOverviewChart')
      console.log(this.arrOverviewChart)
      console.log(year)
      for (let index = 0; index < this.arrOverviewChart.length; index++) {
        if (year === this.arrOverviewChart[index].year) {
          console.log('true')
          ObjDataDraw = this.arrOverviewChart[index];
          console.log(ObjDataDraw)
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
            if (this.arrChartColumnLib[x].value[y].category === "POS") {
              valueNewsLib = this.arrChartColumnLib[x].value[y].count;
            }
            if (this.arrChartColumnLib[x].value[y].category === "NEU") {
              valueEventLib = this.arrChartColumnLib[x].value[y].count;
            }
            if (
              this.arrChartColumnLib[x].value[y].category === "NEG"
            ) {
              valuePublicationsLib = this.arrChartColumnLib[x].value[y].count;
            }
            // if (this.arrChartColumnLib[x].value[y].category === "other") {
            //   valueOtherLib = this.arrChartColumnLib[x].value[y].count;
            // }
          }
          break;
        }
      }
      for (let x = 0; x < this.arrChartColumnAI.length; x++) {
        if (this.arrChartColumnAI[x]._id === year) {
          for (let y = 0; y < this.arrChartColumnAI[x].value.length; y++) {
            if (this.arrChartColumnAI[x].value[y].category === "POS") {
              valueNewsAI = this.arrChartColumnAI[x].value[y].count;
            }
            if (this.arrChartColumnAI[x].value[y].category === "NEU") {
              valueEventAI = this.arrChartColumnAI[x].value[y].count;
            }
            if (this.arrChartColumnAI[x].value[y].category === "NEG") {
              valuePublicationsAI = this.arrChartColumnAI[x].value[y].count;
            }
            // if (this.arrChartColumnAI[x].value[y].category === "other") {
            //   valueOtherAI = this.arrChartColumnAI[x].value[y].count;
            // }
          }
          break;
        }
      }

      return [
        {
          name: "AI",
          data: [valueNewsAI, valueEventAI, valuePublicationsAI],
        },
        {
          name: "Library",
          data: [
            valueNewsLib,
            valueEventLib,
            valuePublicationsLib,
        
          ],
        },
      ];
    },
  },
  methods: {
    tagByCategory() {
      HTTP.get("count-tag-by-category-all-year")
        .then((response) => {
          this.checkLoadingKeyByCate = false;
          this.checkLoadingKeyByTime = false;
          this.checkLoadingTolalKey = false;
          this.arrChartColumnLib = [];
          this.arrChartColumnLib = response.data[0];
          this.arrChartColumnAI = response.data[1];
          let countNewsLib = 0;
          let countEventLib = 0;
          let countPublicationsLib = 0;
          let countOtherLib = 0;
          let countNewsAI = 0;
          let countEventAI = 0;
          let countPublicationsAI = 0;
          let countOtherAI = 0;
          let dataOfLib = [];
          let dataOfAI = [];
          for (let x = 0; x < this.arrChartColumnLib.length; x++) {
            for (let y = 0; y < this.arrChartColumnLib[x].value.length; y++) {
              try {
                if (this.arrChartColumnLib[x].value[y].category === "POS") {
                  countNewsLib += this.arrChartColumnLib[x].value[y].count;
                  this.arrChartColumnLib[x].value[y].count = countNewsLib;
                }
                if (this.arrChartColumnLib[x].value[y].category === "NEU") {
                  countEventLib += this.arrChartColumnLib[x].value[y].count;
                  this.arrChartColumnLib[x].value[y].count = countEventLib;
                }
                if (
                  this.arrChartColumnLib[x].value[y].category === "NEG"
                ) {
                  countPublicationsLib +=
                    this.arrChartColumnLib[x].value[y].count;
                  this.arrChartColumnLib[x].value[y].count =
                    countPublicationsLib;
                }
                // if (this.arrChartColumnLib[x].value[y].category === "other") {
                //   countOtherLib += this.arrChartColumnLib[x].value[y].count;
                //   this.arrChartColumnLib[x].value[y].count = countOtherLib;
                // }
              } catch (error) {}
            }
          }
          for (let x = 0; x < this.arrChartColumnAI.length; x++) {
            for (let y = 0; y < this.arrChartColumnAI[x].value.length; y++) {
              try {
                if (this.arrChartColumnAI[x].value[y].category === "POS") {
                  countNewsAI += this.arrChartColumnAI[x].value[y].count;
                  this.arrChartColumnAI[x].value[y].count = countNewsAI;
                }
                if (this.arrChartColumnAI[x].value[y].category === "NEU") {
                  countEventAI += this.arrChartColumnAI[x].value[y].count;
                  this.arrChartColumnAI[x].value[y].count = countEventAI;
                }
                if (
                  this.arrChartColumnAI[x].value[y].category === "NEG"
                ) {
                  countPublicationsAI +=
                    this.arrChartColumnAI[x].value[y].count;
                  this.arrChartColumnAI[x].value[y].count = countPublicationsAI;
                }
                // if (this.arrChartColumnAI[x].value[y].category === "other") {
                //   countOtherAI += this.arrChartColumnAI[x].value[y].count;
                //   this.arrChartColumnAI[x].value[y].count = countOtherAI;
                // }
              } catch (error) {}
            }
          }
          if (this.flagChartColumn) {
            this.optionChartColumn = {
              chart: {
                height: 288,

                stacked: true,
                toolbar: {
                  show: false,
                },
                zoom: {
                  enabled: true,
                },
              },
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
              plotOptions: {
                bar: {
                  horizontal: false,
                  // borderRadius: 10,
                },
              },
              xaxis: {
                categories: ["POS", "NEU", "NEG"],
              },
              yaxis: {
                labels: {
                  offsetX: -15,
                },
                // forceNiceScale: true,
                // min: 0,
              },
              legend: {
                position: "bottom",
                offsetY: 10,
              },
              fill: {
                opacity: 1,
              },
              grid: {
                padding: {
                  top: -20,
                  right: -10,
                  left: -20,
                },
              },
            };
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
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
              // if (seriesName === 'Library') {
              //     document.querySelectorAll('.apexcharts-legend-series.no-click')[0].style.padding = '0px 0px 10px 0px'
              // }
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
    HTTP.get("/year-array")
        .then((response) => {
          this.year =response.data[response.data.length -1]
        })
        .catch((e) => {
          this.errors.push(e);
        });
    this.tagByCategory();
    this.countTotalKeywordByYear();
    this.$watch(
      () => this.$route.query.year,
      (toQuerys, previousQuerys) => {
        this.year = this.$route.query.year || '';
      }
    );
  },
};
</script>
<style>
.apexcharts-legend-series.apexcharts-no-click {
  width: 100%;
}
</style>