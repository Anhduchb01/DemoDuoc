<template>
  <div :key="modelDark" class="widget-content">
    <div v-if="series" id="chart-2">
      <apexchart type="donut" height="350" :options="chartOptions" :series="series" class="Chart-Total-Post" />
    </div>
  </div>
</template>

<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  computed: {},
  data() {
    return {
      arrData: [],
      chartOptions: {},
      series: [],
      modelDark: null,
    };
  },

  methods: {
    renderFlowChart() {
      this.modelDark = localStorage.getItem("dark");
      if (this.modelDark === "dark") {
        this.chartOptions = {
          chart: {
            type: "donut",
            width: 397,
          },
          colors: ["#79db72", "#6ab8f9", "#00ffe1", "#b58fe6"],
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
          labels: ["CafeF", "CafeBiz", "BaoDauTu", "VnEconomy"],
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
        this.chartOptions = {
          chart: {
            width: 397,
          },
          colors: ["#79db72", "#6ab8f9", "#00ffe1", "#b58fe6"],
          dataLabels: {
            enabled: false,
            // enabled: true,
            // formatter: function (val) {
            //   return val + "%";
            // },
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
          labels: ["CafeF", "CafeBiz", "BaoDauTu", "VnEconomy"],
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
    },
  },
  created() {
    this.renderFlowChart();
  },
  mounted() {
    HTTP.get(`total-post`).then((response) => {
      this.series = response.data;
      // this.series = this.arrData;
    });
    this.renderFlowChart();
  },
};
</script>
<style scoped>
.widget-content .Chart-Total-Post path {
  stroke: white;
}
.dark .Chart-Total-Post path {
  stroke: #0e1726 !important;
}
.dark .Chart-Total-Post {
  stroke: #ebedf2 !important;
}
</style>