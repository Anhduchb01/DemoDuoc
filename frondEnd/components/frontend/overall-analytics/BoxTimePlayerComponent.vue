<template>
  <div class="box-timeplayer">
    <div style="display:flex">
      <div id="play-button" style="display:flex">
        <!--Play-button là Next-button , Pause-button là Prev-button-->
        <pauseButton v-on:click="getPreviousMonth()" />
        <playButton v-on:click="getNextMonth()" />
      </div>
      <VueSlider style="width:90%;padding-top:20px;height:12px" v-model="year" :adsorb="true" :marks="true" :data="yearArray" ref="slider" @change="changeSlider" />
    </div>
  </div>
</template>
<script>
import playButton from "../../../static/play-button.svg?inline";
import pauseButton from "../../../static/pause-button.svg?inline";
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      yearArray: [],
      year: this.$route.query.year || '', 
    };
  },
  components: {
    playButton,
    pauseButton,
  },

  methods: {
    changeSlider() {
      this.$router.push({
        query: {
          geo: this.$route.query.geo,          
          gprop: this.$route.query.gprop,
          key: this.$route.query.key,
          time: this.$route.query.time,
          year: this.year,
        },
      });      
    },
    getNextMonth() {
      const [year, month] = this.year.split('/');
      const date = new Date(Number(year), Number(month) - 1); // Note: month is zero-based
      date.setMonth(date.getMonth() + 1);
      this.year =  `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
      this.$refs.slider.setIndex(this.yearArray.indexOf(this.year));
      this.$router.push({
        query: {
          geo: this.$route.query.geo,
          gprop: this.$route.query.gprop,
          key: this.$route.query.key,
          time: this.$route.query.time,
          year: this.year,
        },
      });
    },

// Function to get the previous month
    getPreviousMonth() {
      const [year, month] = this.year.split('/');
      const date = new Date(Number(year), Number(month) - 1); // Note: month is zero-based
      date.setMonth(date.getMonth() - 1);
      this.year =  `${date.getFullYear()}/${(date.getMonth() + 1).toString().padStart(2, '0')}`;
      this.$refs.slider.setIndex(this.yearArray.indexOf(this.year));
      this.$router.push({
        query: {
          geo: this.$route.query.geo,
          gprop: this.$route.query.gprop,
          key: this.$route.query.key,
          time: this.$route.query.time,
          year: this.year,
        },
      });
    },
    beforeYear() {
      this.year = this.year - 1;
      this.$refs.slider.setIndex(this.yearArray.indexOf(this.year));
      this.$router.push({
        query: {
          geo: this.$route.query.geo,
          gprop: this.$route.query.gprop,
          key: this.$route.query.key,
          time: this.$route.query.time,
          year: this.year,
        },
      });
    },
    nextYear() {
      if (this.year < parseInt(this.yearArray[this.yearArray.length - 1])) {
        this.year = this.year + 1;
      } else {
        this.year = parseInt(this.yearArray[this.yearArray.length - 1]);
      }
      this.$router.push({
        query: {
          geo: this.$route.query.geo,
          gprop: this.$route.query.gprop,
          key: this.$route.query.key,
          time: this.$route.query.time,
          year: this.year,
        },
      });
    },
    getYearArray() {
      HTTP.get("/year-array")
        .then((response) => {
          this.yearArray = response.data
          this.year = this.yearArray[this.yearArray.length -1]
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.getYearArray();
  },
};
</script>
<style >
@import "vue-slider-component/theme/antd.css";
.vue-slider-ltr .vue-slider-mark-step {
  display: none;
}
.vue-slider-dot-handle {
  box-shadow: 1px 1px 2px rgb(0 0 0 / 4%), inset 0 0 1px 1px white !important;
  border: 1px solid rgba(0, 0, 0, 0.3) !important;
  border-radius: 30px !important;
  background-color: #cbcfd5;
}
.vue-slider-mark {
  background-color: #428bca;
  width: 1px !important;
  bottom: 50% !important;
  top: 189% !important;
  height: 73% !important;
}
.vue-slider-mark-label {
  color: #428bca;
  top: 2px !important;
  font-size: 10px !important;
}
.vue-slider-mark.vue-slider-mark-active {
  background-color: #428bca;
  width: 1px !important;
  bottom: 50% !important;
  top: 189% !important;
  height: 73% !important;
}
.vue-slider-mark-label.vue-slider-mark-label-active {
  color: #428bca;
  top: 3px !important;
  font-size: 10px !important;
}

.vue-slider-dot {
  width: 21px !important;
  height: 21px !important;
  z-index: 1 !important;
}
/* body{
  font-family: Inter,sans-serif!important;
} */
.vue-slider-process {
  background-color: rgb(0, 143, 251);
  border-radius: 15px;
  transition: background-color 0.3s;
}
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

.box-data-chart {
  padding: 20px;
}

.box-chart-analysis {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.title-chart {
  margin: 0px;
  padding: 20px 20px 0px 20px;
  font-size: 18px;
  font-weight: 500;
}

.chart-analysis {
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px,
    rgba(0, 0, 0, 0.24) 0px 2px 2px 0px;
}

.box-timeplayer {
  width: 100%;
  margin-bottom: 30px;
  /* border-radius: 2px; */
  /* box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) 0px 2px 2px 0px; */
}

.top-keyword {
  display: flex;
  /* margin: 0px 20px; */
  padding: 10px 0px;
  justify-content: space-between;
  border-bottom: 1px solid #a9aeb3;
  font-size: 13px;
}

.top-keyword p {
  margin: 0px;
}

.top-keyword:hover {
  cursor: pointer;
  text-decoration: underline;
  color: #00997d;
}

.keyword-by-point-clound:hover {
  text-decoration: underline;
}

#chartdiv {
  /* border-top: 0px; */
  width: 100%;
  height: 500px;
  /* border: 1px solid rgb(199, 199, 199); */
}

#treechartdiv {
  width: 100%;
  height: 500px;
  /* border: 1px solid rgb(199, 199, 199); */
}

#play-button {
  margin-top: 5px;
  align-self: center;
  padding-right: 10px;
  display: inline;
}

.play-button {
  cursor: pointer;
  width: auto;
  height: auto;
  /* transform: scale(1.6); */
  border: 1px solid white;
  border-radius: 50%;
  background: #00e396;
  fill: white;
  padding: 10px;
  margin-right: 5px;
}

.ticks {
  font-size: 15px;
  font-weight: bold;
}

.track,
.track-inset,
.track-overlay,
.track-has-run {
  stroke-linecap: round;
}

.track {
  stroke: #000;
  stroke-opacity: 0.3;
  stroke-width: 10px;
}

.track-inset {
  stroke: #d4d4d4;
  stroke-width: 10px;
}

.track-has-run {
  stroke: rgb(0, 143, 251);
  stroke-width: 10px;
  stroke-linecap: round;
}

.track-overlay {
  pointer-events: stroke;
  stroke-width: 50px;
  stroke: transparent;
  cursor: pointer;
}

.handle {
  fill: rgb(0, 143, 251);
  stroke: #000;
  stroke-opacity: 0.5;
  stroke-width: 1.25px;
}

.ampopup {
  overflow: visible;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2000;
}

.ampopup-curtain {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2001;
  background: #fff;
  opacity: 0.5;
}

.ampopup-title {
  font-weight: bold;
  font-size: 120%;
}

.ampopup-header {
  background-color: #ffcb99;
}

.ampopup-inside {
  height: calc(100% - 30px);
  overflow-y: auto;
}

.ampopup-content {
  background-color: #fff;
  display: inline-block;
  position: absolute;
  max-width: 300px;
  max-height: 90%;
  overflow: auto;
  z-index: 2002;
  border-radius: 5px;
  border: 2px solid rgb(204, 204, 204);
}

.ampopup-close {
  display: block;
  position: absolute;
  top: 0.3em;
  right: 0.3em;
  background-color: rgb(100, 100, 100);
  background: rgba(100, 100, 100, 0.1)
    url(data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmVyc2lvbj0iMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQ0NS4yIDEwOS4ybC00Mi40LTQyLjRMMjU2IDIxMy42IDEwOS4yIDY2LjhsLTQyLjQgNDIuNEwyMTMuNiAyNTYgNjYuOCA0MDIuOGw0Mi40IDQyLjRMMjU2IDI5OC40bDE0Ni44IDE0Ni44IDQyLjQtNDIuNEwyOTguNCAyNTYiLz48L3N2Zz4=)
    no-repeat center;
  background-size: 80%;
  width: 1.2em;
  height: 1.2em;
  cursor: pointer;
}

a.link-tag-cloud {
  color: #00997d;
  text-decoration: none;
}

a.link-tag-cloud:hover {
  text-decoration: underline;
}

.new-item__title a:visited {
  color: #660099;
  text-decoration: underline;
}

.loadding-chart {
  text-align: center;
}

.apexcharts-legend.center {
  inset: auto 0px 0px !important;
}

#overview-chart .apexcharts-legend-text {
  width: 100% !important;
}

#overview-chart .apexcharts-legend.center.position-bottom {
  flex-direction: column;
}

.popup-keyword {
  padding: 0px;
  background-color: white;
  max-height: 414px;
  width: 300px;
  position: absolute;
  border: 2px solid rgb(204, 204, 204);
  border-radius: 5px;
}

.popup-header {
  padding: 10px 0px;
  background-color: #ffcb99;
}

.popup-content {
  padding: 0px 16px 16px 16px;
  max-height: 365px;
  overflow: auto;
}

.popup-content::-webkit-scrollbar {
  width: 6px;
}

.popup-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px transparent;
  border-radius: 10px;
}

/* Handle */
.popup-content::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 10px;
}

/* Handle on hover */
.popup-content::-webkit-scrollbar-thumb:hover {
  background: #999;
}

#chart-bar-top-keyword .apexcharts-series path {
  clip-path: inset(5% 5% 5% 0% round 6px);
}

.box-timeplayer .irs {
  flex-grow: 1;
}

.box-timeplayer .irs-min,
.box-timeplayer .irs-max {
  display: none;
}

.box-timeplayer .irs--big .irs-bar,
.box-timeplayer .irs-single {
  background-color: rgb(0, 143, 251);
  border: rgb(0, 143, 251);
  background: rgb(0, 143, 251);
}

.box-timeplayer .irs-handle {
  top: 28px;
  width: 20px;
  height: 20px;
}

.news-item__img::before {
  padding-top: 0px !important;
  content: none !important;
  display: none;
}

.news-item__img .img--bg {
  position: initial !important;
  height: 160px !important;
}
</style>