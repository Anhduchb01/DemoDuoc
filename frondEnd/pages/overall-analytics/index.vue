<template>
  <div>
    <client-only>
      <Sidebar @closeSideBar="closeSideBarFrontEnd" :showSideBar="showSideBar" />
      <Header @showSideBar="showSideBarFrontEnd" />
      <div style="height: 130px" class="front-promo">
        <picture>
          <source srcset="~/static/img/fintech11.jpg" media="(min-width: 992px)" />
          <img class="img--bg" src="~/static/img/fintech11.jpg" alt="img" />
        </picture>
      </div>
      <section style="padding: 60px 0px" class="section catalog" id="section-box-news">
        <div class="container">
          <h4>{{ $t("body.keyword.OverallAnalytics") }}</h4>
          <BoxTimePlayer />
          <OverallAnalytics />
          <div class="box-chart-analysis">
            <div style="width: 70%; margin-right: 10px">
              <WordCloud />
              <TreeMap />
            </div>
            <TopKey />
          </div>
          <div id="box-scroll"></div>
        </div>
      </section>
      <Footer />
    </client-only>
  </div>
</template>
<script>
import Header from "../../components/frontend/HeaderComponent.vue";
import Footer from "../../components/frontend/FooterComponent.vue";
import Sidebar from "../../components/frontend/SidebarComponent.vue";
import BoxTimePlayer from "../../components/frontend/overall-analytics/BoxTimePlayerComponent.vue";
import OverallAnalytics from "../../components/frontend/overall-analytics/OverallAnalyticsComponent.vue";
import TopKey from "../../components/frontend/overall-analytics/TopKeyComponent.vue";
import TreeMap from "../../components/frontend/overall-analytics/TreeMapComponent.vue";
import WordCloud from "../../components/frontend/overall-analytics/WordCloudComponent.vue";
export default {
  components: {
    Header,
    Footer,
    Sidebar,
    BoxTimePlayer,
    OverallAnalytics,
    TopKey,
    TreeMap,
    WordCloud,

  },
  data() {
    return {
      showSideBar: false,
    };
  },
  methods: {
    showSideBarFrontEnd(value) {
      this.showSideBar = value;
    },
    closeSideBarFrontEnd(value) {
      this.showSideBar = value;
    },
  },
};
</script>
<style scoped >
@import "~/static/css/homepage.css";
@import "~static/css/styles.min.css";
@import "~static/css/search-by-keyword.css";
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

.pause-button {
  align-self: center;
  width: 45px;
  cursor: pointer;
  height: 45px;
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
