<template>
  <div class="chart-analysis">
    <div>
      <p class="title-chart">{{ $t("body.keyword.keywordTreeMap") }}</p>
    </div>
    <div class="box-data-chart" style="padding: 20px 20px 20px 20px; position: relative; top: 0.390625px;" v-if="checkLoadingKeyTreeMap">
      <div class="loadding-chart" id="loading-chart-treemap" style="position: absolute;top: 50%; right: 50%;transform: translateY(-50%);">
        <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
          <circle class="loader-svg bg" cx="50" cy="50" r="45" />
          <circle class="loader-svg animate" cx="50" cy="50" r="45" />
        </svg>
        {{ $t("body.keyword.loading") }}
      </div>
    </div>
    <div class="box-data-chart" id="treechartdiv" style="padding: 0px 20px 20px 20px" v-show="showKeyWordByMap"></div>
    <div class="box-data-chart" style="padding: 20px 20px 20px 20px; position: relative; top: 0.390625px;" v-show="showCannotData">
      <div class="loadding-chart" id="loading-chart-treemap" style="position: absolute;top: 50%; right: 50%;transform: translateY(-50%);">Cannot get data, please try again</div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  data() {
    return {
      checkLoadingKeyTreeMap: true,
      year: this.$route.query.year|| '',
      flagTreeMap: false,
      result: [],
      showKeyWordByMap: false,
      showCannotData: false,
    };
  },
  methods: {
    getResultTreemap() {},
    generateTreemap() {
      let { am4core, am4charts, am4themes_animated, am4themes_dark } =
        this.$am4core();
      am4core.addLicense("ch-custom-attribution");
      am4core.useTheme(am4themes_animated);
      var treeChart = am4core.create("treechartdiv", am4charts.TreeMap);

      treeChart.colors.step = 2;
      // return Treechart
      /* Define data fields */
      treeChart.dataFields.value = "count";
      treeChart.dataFields.name = "name";
      treeChart.dataFields.children = "children";
      treeChart.dataFields.color = "color";
      treeChart.responsive.enabled = true;
      // enable navigation
      treeChart.navigationBar = new am4charts.NavigationBar();
      treeChart.zoomable = false;
      // level 0 series template
      var level0SeriesTemplate = treeChart.seriesTemplates.create("0");
      level0SeriesTemplate.strokeWidth = 2;
      // by default only current level series bullets are visible, but as we need brand bullets to be visible all the time, we modify it's hidden state
      level0SeriesTemplate.bulletsContainer.hiddenState.properties.opacity = 1;
      level0SeriesTemplate.bulletsContainer.hiddenState.properties.visible = true;
      // create hover state
      var columnTemplate = level0SeriesTemplate.columns.template;
      var hoverState = columnTemplate.states.create("hover");
      // darken
      hoverState.adapter.add("fill", function (fill, target) {
        if (fill instanceof am4core.Color) {
          return am4core.color(am4core.colors.brighten(fill.rgb, -0.2));
        }
        return fill;
      });
      var columnText = columnTemplate.createChild(am4core.Label);
      columnText.opacity = 0.3;
      columnText.align = "center";
      columnText.valign = "middle";

      // add adapter for href to load correct image
      columnText.adapter.add("text", function (href, target) {
        var dataItem = target.parent.dataItem;
        if (dataItem) {
          return dataItem.treeMapDataItem.name;
        }
      });

      // level1 series template
      var level1SeriesTemplate = treeChart.seriesTemplates.create("1");
      level1SeriesTemplate.columns.template.fillOpacity = 0;
      level1SeriesTemplate.columns.template.strokeOpacity = 0.4;
      level1SeriesTemplate.columns.template.tooltipText = "{name}: {value}";

      var bullet1 = level1SeriesTemplate.bullets.push(
        new am4charts.LabelBullet()
      );
      bullet1.locationX = 0.5;
      bullet1.locationY = 0.5;
      bullet1.label.text = "{name}";
      bullet1.label.fill = am4core.color("#ffffff");
      bullet1.label.fontSize = 12;
      bullet1.label.fillOpacity = 0.7;
      bullet1.label.hideOversized = true;

      treeChart.legend = new am4charts.Legend();
      treeChart.legend.itemContainers.template.tooltipText = "{name}";

      HTTP.get("generate-data-year", { params: { year: this.year } })
        .then((response) => {
          this.checkLoadingKeyTreeMap = false;
          this.result = response.data;
          if (this.result.length > 0) {
            this.showKeyWordByMap = true;
          } else {
            this.showCannotData = true;
          }
          if (this.flagTreeMap === false) {
            let arrcolor = ["#008FFB", "#00E396", "#0CDCE6"];
            for (let index = 0; index < this.result.length; index++) {
              if (this.result[index]._id === null) {
                this.result[index]._id = "Un-process";
                this.result[index].name = "Un-process";
                this.result[index].color = "#9f9ea0";
              }
              if (this.result[index]._id === "news") {
                this.result[index].color = "#79db72";
              }
              if (this.result[index]._id === "event") {
                this.result[index].color = "#4970f6";
              }
              if (this.result[index]._id === "publications") {
                this.result[index].color = "#00dae1";
              }
              if (this.result[index]._id === "other") {
                this.result[index].color = "#a45fce";
              }
            }
            treeChart.data = this.result;
            // this.flagTreeMap = true;
            treeChart.paddingBottom = 0;
            treeChart.paddingTop = 0;
            treeChart.paddingLeft = 0;
            treeChart.paddingRight = 0;
          } else {
            for (var i = 0; i < treeChart.dataItems.length; i++) {
              var nameArrayTreeChart = treeChart.dataItems.getIndex(i).name;
              var arrayResultsIndex = this.result.find(
                (x) => x.name === nameArrayTreeChart
              );
              var dataItem = treeChart.dataItems.getIndex(i);

              for (var c = 0; c < dataItem.children.length; c++) {
                var child = dataItem.children.getIndex(c);
                if (arrayResultsIndex === undefined) {
                  child.value = 0;
                } else {
                  var ItemArrayResults = arrayResultsIndex.children[0];
                  if (ItemArrayResults !== undefined) {
                    child.name = ItemArrayResults.name;
                    child.value = ItemArrayResults.count;
                  } else {
                    child.value = 0;
                  }
                  arrayResultsIndex.children.shift();
                }
              }
            }
          }
          this.treeChart = treeChart;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  mounted() {
    this.generateTreemap();
    this.$watch(
      () => this.$route.query.year,
      (toQuerys, previousQuerys) => {
        if (this.treeChart) {
          this.year = this.$route.query.year|| '';
          this.result = [];
          this.treeChart.dispose();
          this.generateTreemap();
        }
      }
    );
  },
  beforeDestroy() {
    if (this.treeChart) {
      this.treeChart.dispose();
    }
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