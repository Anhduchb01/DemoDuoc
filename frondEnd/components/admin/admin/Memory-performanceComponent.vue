<template>
  <div class="widget widget-activity-five">
    <div class="widget-heading">
      <h5 class>Memory performance</h5>
      <div class="task-action">
        <div class="dropdown">
          <a class="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="uniqueVisitors">
            <a class="dropdown-item" href="javascript:void(0);" v-on:click="getMemoryMetricNow()">View real time</a>
            <a class="dropdown-item" href="javascript:void(0);" v-on:click="getMemoryMetricDay()">View by 24h</a>
            <a class="dropdown-item" href="javascript:void(0);" v-on:click="getMemoryMetricMonth()">View by month</a>
          </div>
        </div>
      </div>
    </div>

    <div class="widget-content" style="padding: 0px">
      <div class="w-shadow-top"></div>
      <div class="mt-container mx-auto ps ps--active-y" style="padding: 0px">
        <div id="memory-chart" class>
          <apexchart type="area" height="350" :options="chartOptions" :series="series" />
        </div>
      </div>
      <div class="w-shadow-bottom" style="display: none"></div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      arrData: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          stacked: false,
          toolbar: {
            show: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#E91E63"],
        xaxis: {
          type: "datetime",
          labels: {
            // format: Date()
            format: "dd/MM H:mm:ss",
            // formatter: function (val) {
            //   return dayjs(val).format('DD/MM HH:mm:ss')
            // }
          },
        },
        yaxis: {
          min: 0,
          max: 100,
        },
        stroke: {
          width: 1,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm:ss",
          },
        },
      },
      // series: [
      //   {
      //     name: "cpu",
      //     data: [],
      //   },
      // ],
    };
  },

  mounted() {
    this.reNew();
  },
  computed: {
    series: function () {
      return [
        {
          name: "cpu",
          data: this.arrData,
        },
      ];
    },
  },
  methods: {
    reNew() {
      HTTP.get(`get-memory-metric-hour`).then((response) => {
        this.arrData = response.data.data;
      });
    },
    getMemoryMetricNow() {
      HTTP.get(`get-memory-metric-hour`).then((response) => {
        this.arrData = response.data.data;
        // this.series[0].data = this.posts;
      });
    },
    getMemoryMetricDay() {
      HTTP.get(`get-memory-metric-day`).then((response) => {
        this.arrData = response.data.data;
        // this.series[0].data = this.posts;
      });
    },
    getMemoryMetricMonth() {
      HTTP.get(`get-memory-metric-month`).then((response) => {
        this.arrData = response.data.data;
        // this.series[0].data = this.posts;
      });
    },
  },
  created() {
    this.interval = setInterval(() => {
      this.reNew();
    }, 30000);
  },
  destroyed() {
    clearInterval(this.interval);
  },
};
</script>
