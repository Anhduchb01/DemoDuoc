<template>
  <div class="widget widget-three widget-table-one">
    <div style="padding: 20px 20px">
      <h4>Total Articles</h4>
      <div class="total-tags" id="total-tags" style="font-weight: bold; font-size: 2.5rem; margin-top: 5px;">{{totalArticleVerify}}/{{totalPost}}</div>
      <div class="progress progress-sm progress-bar-stack mb-4 br-30" id="human-active" style="height:5px"
      :class="{'human-active-per':hoverPertotal , 'human-active-org' : hoverOrgtotal,'human-active-loc':hoverLoctotal,'human-active-misc':hoverMisctotal,'human-active-empty':hoverEmptytotal}">
        <div class="bg-success bg-positive" id="perTotal" role="progressbar" :style="'width:'+(valuePOS / totalPost * 100 )+'%'" style="transition: 1.5s;background-color: #38C477 !important" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="bg-primary bg-negative" id="orgTotal" role="progressbar" :style="'width:'+(valueNEG / totalPost * 100 )+'%'" style="transition: 1.5s;background-color: #F2543D!important" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="bg-info bg-neutral" id="locTotal" role="progressbar" :style="'width:'+(valueNEU / totalPost * 100 )+'%'" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="bg-dark" id="emptyTotal" role="progressbar" :style="'width:'+(valueEmpty / totalPost * 100 )+'%'" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        <div class="bg-pending" id="pendingTotal" role="progressbar" style="width:0 ;transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div class="tag-list-container" style="margin-top: -25px;">
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon success-gradient" id="pertotal"  @mouseover="hoverPertotal = true" @mouseout="hoverPertotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/positive.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-per">{{valuePOS}}</h2>
              <div class="item-name">Positive</div>
            </div>
          </div>
        </div>
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon info-gradient" id="orgtotal" @mouseover="hoverOrgtotal = true" @mouseout="hoverOrgtotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/neutral.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-org">{{valueNEG}}</h2>
              <div class="item-name">Neutral</div>
            </div>
          </div>
        </div>
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon location-gradient" id="loctotal" @mouseover="hoverLoctotal = true" @mouseout="hoverLoctotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/negative.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-loc">{{valueNEU}}</h2>
              <div class="item-name">Negative</div>
            </div>
          </div>
        </div>
        <!-- <div class="tag-item">
          <div class="item-container">
            <div class="item-icon primary-gradient" id="misctotal" @mouseover="hoverMisctotal = true" @mouseout="hoverMisctotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/other-news.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-misc">{{valueOther}}</h2>
              <div class="item-name">Other</div>
            </div>
          </div>
        </div> -->

        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon dark-gradient" id="emptytotal" @mouseover="hoverEmptytotal = true" @mouseout="hoverEmptytotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/pending-check-03.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-empty">{{valueEmpty}}</h2>
              <div class="item-name">Un-process</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div id="flow-chart" style="height: 400px;" v-if="loading"> -->
       <div id="flow-chart" style="height: 400px;"> 
        <!-- <div style="height: 10px; text-align: center;">
          <div id="loading-chart-overview" style=" margin-top: 95px;" class="spinner-border text-success align-self-center"></div>
        </div> -->
      </div>
      <!-- <div id="flow-chart" style="height: 400px;" v-else></div> -->
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
  props: [
    "results",
    "valuePOS",
    "valueNEG",
    "valueNEU",
    "valueEmpty",
    "error",
    "totalPost",
    "totalArticleVerify",
  ],

  computed: {
    ...mapState(["modeAdmin"]),
  },
  data() {
    return {
      loading: true,
      //Hover
      hoverPertotal:false,
      hoverOrgtotal:false,
      hoverLoctotal:false,
      hoverMisctotal:false,
      hoverEmptytotal:false,
  
      //
    };
  },
  methods: {
    ...mapMutations(["setModeAdmin"]),
    renderFlowChart(results) {
      let { am4core, am4charts, am4themes_animated, am4themes_dark } =
        this.$am4core();
      am4core.addLicense("ch-custom-attribution");
      var getcorkThemeObject = localStorage.getItem("theme");
      var getParseObject = JSON.parse(getcorkThemeObject);

      if (!getParseObject.settings.layout.darkMode){
      
        am4core.useTheme(am4themes_animated);

        var chart = am4core.create("flow-chart", am4charts.SankeyDiagram);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.nodes.template.nameLabel.label.width = 250;
        chart.nodes.template.nameLabel.label.truncate = false;
        chart.nodes.template.nameLabel.label.wrap = true;
        chart.data = results;
        let hoverState = chart.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 0.6;
        let linkTemplate = chart.links.template;
        linkTemplate.propertyFields.fill = "linkColor";
        linkTemplate.propertyFields.fillOpacity = "linkOpacity";
        linkTemplate.colorMode = "solid";
        // linkTemplate.propertyFields.fillOpacity = "linkOpacity";
        linkTemplate.fillOpacity = 0.6;
        // linkTemplate.tension = 1;
        // linkTemplate.controlPointDistance = 0.1;
        // linkTemplate.fill = am4core.color("#A8C686");

        chart.dataFields.fromName = "from";
        chart.dataFields.toName = "to";
        chart.dataFields.value = "value";
        chart.dataFields.color = "nodeColor";

        // for right-most label to fit
        chart.paddingRight = 85;
        chart.paddingTop = 31;
        chart.paddingBottom = 10;

        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.inert = true;
        // nodeTemplate.readerTitle = "Drag me!";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.width = 20;

        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        // nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        nodeTemplate.nameLabel.label.fill = am4core.color("#000000");
        this.chart = chart;
      } else {
        am4core.useTheme(am4themes_animated);
        console.log(this.modeAdmin)
        var chart = am4core.create("flow-chart", am4charts.SankeyDiagram);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        chart.nodes.template.nameLabel.label.width = 250;
        chart.nodes.template.nameLabel.label.truncate = false;
        chart.nodes.template.nameLabel.label.wrap = true;
        chart.data = results;
        let hoverState = chart.links.template.states.create("hover");
        hoverState.properties.fillOpacity = 0.6;
        let linkTemplate = chart.links.template;
        linkTemplate.propertyFields.fill = "linkColor";
        linkTemplate.propertyFields.fillOpacity = "linkOpacity";
        linkTemplate.colorMode = "solid";


        chart.dataFields.fromName = "from";
        chart.dataFields.toName = "to";
        chart.dataFields.value = "value";
        chart.dataFields.color = "nodeColor";

        // for right-most label to fit
        chart.paddingRight = 85;
        chart.paddingTop = 31;
        chart.paddingBottom = 10;
        chart.links.template.tooltipText =
          "[bold]{textTip} → {toName}: {value}";
        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        nodeTemplate.inert = true;
        // nodeTemplate.readerTitle = "Drag me!";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.width = 20;

        // make nodes draggable
        var nodeTemplate = chart.nodes.template;
        // nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
        nodeTemplate.showSystemTooltip = true;
        nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
        nodeTemplate.nameLabel.label.fill = am4core.color("#ffffff");
        this.chart = chart;
      }
      //   if (document.querySelector('[aria-labelledby="id-58-title"]')){
      //     document.querySelector('[aria-labelledby="id-58-title"]').style.display = "none";
      //   }
    },
  },
  beforeUpdate() {

  },
  mounted() {
    this.loading = false;
    this.$watch("results", (newKey) => {
      this.renderFlowChart(this.results);
    });
    
  },
};
</script>
<style>
body.dark tspan{
  fill: white !important;
}
#flow-chart tspan{
  fill: black !important;
}
body.dark #flow-chart tspan{
 fill: white !important;
}
/* tspan{
  fill: white !important;
}
   */

</style>