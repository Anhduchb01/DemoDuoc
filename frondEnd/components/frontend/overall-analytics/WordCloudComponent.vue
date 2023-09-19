<template>
  <div style="margin-bottom: 10px" class="chart-analysis">
    <div>
      <p class="title-chart">{{ $t("body.keyword.wordCloud") }}</p>
    </div>
    <div class="box-data-chart" style="padding: 20px 20px 20px 20px;width: auto; height: auto; position: relative; top: 0.390625px;" v-if="checkLoadingWorldClound">
      <div class="loadding-chart" id="loading-chart-treemap" style="position: absolute;top: 50%; right: 50%;transform: translateY(-50%);">
        <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
          <circle class="loader-svg bg" cx="50" cy="50" r="45" />
          <circle class="loader-svg animate" cx="50" cy="50" r="45" />
        </svg>
        {{ $t("body.keyword.loading") }}
      </div>
    </div>
    <div v-show="showWordClound" class="box-data-chart" id="chartdiv"></div>
    <div class="box-data-chart" style="padding: 20px 20px 20px 20px;width: auto; height: auto; position: relative; top: 0.390625px;" v-show="showCannotData">
      <div class="loadding-chart" id="loading-chart-treemap" style="position: absolute;top: 50%; right: 50%;transform: translateY(-50%);">Cannot get data, please try again</div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      checkLoadingWorldClound: true,
      year: this.$route.query.year || '',
      result: [],
      showWordClound: false,
      showCannotData: false,
      keyword: "",
    };
  },
  methods: {
    draw() {
      let {
        am4core,
        am4charts,
        am4themes_animated,
        am4themes_dark,
        am4plugins_wordCloud,
      } = this.$am4core();
      am4core.addLicense("ch-custom-attribution");
      am4core.useTheme(am4themes_animated);
      var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
      var series = chart.series.push(
        new am4plugins_wordCloud.WordCloudSeries()
      );
      series.labels.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      // series.colors = new am4core.ColorSet();
      series.labels.template.propertyFields.fill = "color";
      series.labels.template.tooltipText = "{word}: {value}";
      series.fontWeight = "600";
      series.data = this.result;
      series.dataFields.word = "name";
      series.dataFields.value = "count";
      series.labels.template.propertyFields.fill = "color";
      series.labels.template.events.on("hit", this.pushKey,this) ; 
      this.loading = false;
      this.chart = chart;
    },
    generateWordCloudData() {      
      // sử dụng khi vào trang
      // am4core.useTheme(am4themes_animated);
      HTTP.get("word-cloud", { params: { year: this.year } })
        .then((response) => {
          this.checkLoadingWorldClound = false;
          this.show = true;
          this.result = response.data;
          if (this.result.length > 0) {
            this.showWordClound = true;
          } else {
            this.showCannotData = true;
          }
          this.draw();
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    pushKey(ev) {      
      
      this.$router.push({
        path: '/keyword-analytics',
        query: {
          key: ev.target.currentText,
        },
      });
    },
  },
  mounted() {
    // console.log(this.$route.query);
    this.generateWordCloudData();
    this.$watch(
      () => this.$route.query.year,
      (toQuerys, previousQuerys) => {
        this.year = this.$route.query.year || '';
        this.chart.dispose();
        this.generateWordCloudData();
      }
    );
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>
