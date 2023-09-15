<template>
  <div class="widget-content">
    <div id="uniqueVisits" v-if="posts.length ">
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      posts: [],
      arrDate: [],
      arrData: [],
      
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#2196f3"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
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
        xaxis: {
          categories: [],
          crosshairs: {
            show: false,
          },
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val;
            },
          },
        },
      },
      // series:{}
      series: [
        {
          name: "Post",
          data: []
        },
      ],
    };
  },

   mounted() {
    HTTP.get(`post-by-day`)
      .then((response) => {
        this.posts = response.data;
        for (let i = 1; i <= response.data.length; i++) {
          this.arrData.push(response.data[response.data.length - i].count);
          this.arrDate.push(response.data[response.data.length - i]._id);
        }
        for (let j = 0; j < 7; j++) {
          if (this.arrDate[j] === undefined) {
            this.arrDate[j] = "";
          }
          if (this.arrData[j] === undefined) {
            this.arrData[j] = "";
          }
        }

        this.chartOptions.xaxis.categories = this.arrDate;
        this.series[0].data = this.arrData;
             
      })          
  },
  

};
</script>
