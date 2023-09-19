<template>
  <div style="width: 30%">
    <div class="chart-analysis statistical-chart-bar">
      <div>
        <p class="title-chart">{{ $t("body.keyword.topKeyword") }}</p>
      </div>
      <div class="box-data-chart">
        <div id="chart-bar-top-keyword" v-if="checkLoadingTopKey">
          <div class="loadding-chart" id="loading-chart-bar">
            <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
              <circle class="loader-svg bg" cx="50" cy="50" r="45" />
              <circle class="loader-svg animate" cx="50" cy="50" r="45" />
            </svg>
            {{ $t("body.keyword.loading") }}
          </div>
        </div>
        <apexchart id="chart-bar-top-keyword" type="bar" height="1003" :options="options" :series="series" v-else-if="arrValue&&arrName&&arrValue.length&&arrName.length" />

        <div id="chart-bar-top-keyword" v-else>
          <div class="loadding-chart" id="loading-chart-bar">Cannot get data, please try again</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      checkLoadingTopKey: true,
      year: this.$route.query.year|| '',
      arrValue: [],
      arrName: [],
      flagChartBar: true,
    };
  },
  computed: {
    series: function () {
      return [
        {
          data: this.arrValue,
        },
      ];
    },
    options: function () {
      if (this.flagChartBar) {
        return {
          chart: {
            id: "mychart",

            toolbar: {
              show: false,
            },

            events: {
              dataPointMouseEnter: function (event) {
                event.target.style.cursor = "pointer";
              },
              dataPointSelection: (event, chartContext, config) => {
                // $('#popup-list-keyword').hide();
                const dp = config.dataPointIndex;
                let keyword = chartContext.series.w.globals.labels[dp];
                this.pushKey(keyword);
              },
            },
          },

          tooltip: {
            enabled: false,
            y: {
              formatter: undefined,
              title: {
                formatter: (seriesName) => "Keyword",
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
            categories: this.arrName,
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
              align: "right",
              style: {
                colors: [],
                fontSize: "12px",
                fontFamily: "Helvetica, Arial, sans-serif",
                fontWeight: 400,
                cssClass: "apexcharts-yaxis-label",
              },
            },
          },
          grid: {
            yaxis: {
              lines: {
                show: false,
              },
            },
            padding: {
              top: -35,
              right: -10,
              left: -10,
              bottom: -20,
            },
          },
        };
      }
    },
  },
  methods: {
    pushKey(keyword) {
      this.$router.push({
        path: '/keyword-analytics',
        query: {
          key: keyword,
        },
      });
    },
    countTopKeyword() {      
      HTTP.get("count-top-tag", { params: { year: this.year } })
        .then((response) => {
          this.checkLoadingTopKey = false
          let data = response.data;          
          this.arrValue = [];
          this.arrName = [];
          for (let index = 0; index < data.length; index++) {
            this.arrValue.push(data[index].count);
            this.arrName.push(data[index]._id.name);
          }          
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.countTopKeyword();
    this.$watch(
      () => this.$route.query.year,
      (toQuerys, previousQuerys) => {
        this.year = this.$route.query.year || 2023;
        this.countTopKeyword();
      }
    );
  },
};
</script>
<style scoped>
@import "vue-range-slider/dist/vue-range-slider.css";
.slider {
  width: 90%;
}

.pause-button {
  cursor: pointer;
  width: auto;
  height: auto;
  /* transform: scale(1.6); */
  border: 1px solid white;
  border-radius: 50%;
  background: #00e396;
  fill: white;
  padding: 10px;
}
</style>