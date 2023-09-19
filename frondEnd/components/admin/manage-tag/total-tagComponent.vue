<template>
  <div class="widget widget-three widget-table-one">
    <div style="padding: 20px 20px">
      <h4>Total Tags</h4>
      <div class="total-tags" style="font-weight: bold; font-size: 2.5rem; margin-top: 5px;">{{this.Totaltag}}</div>
      <div class="progress progress-sm progress-bar-stack mb-4 br-30" id="human-active" style="height:5px !important;" :class="{'human-active-per' : hoverPertotal , 'human-active-org': hoverOrgtotal,'human-active-loc':hoverLoctotal,'human-active-misc':hoverMisctotal,'unprogress-active': isHoveringPending}">
        <div class="bg-success" id="perTotal" role="progressbar" style="transition: 1.5s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthPerTotal +'%'}"></div>
        <div class="bg-primary" id="orgTotal" role="progressbar" style="transition: 1.5s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthOrgTotal +'%'}"></div>
        <div class="bg-info" id="locTotal" role="progressbar" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthLocTotal +'%'}"></div>
        <div class="bg-secondary" id="miscTotal" role="progressbar" style="background-color: #805dca !important; transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthMiscTotal +'%'}"></div>
        <div class="bg-pending" id="pendingTotal" role="progressbar" style=" transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthPendingTotal +'%'}"></div>
      </div>
      <div class="tag-list-container" style="margin-top: -25px;">
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon success-gradient" id="pertotal" @mouseover="hoverPertotal = true" @mouseout="hoverPertotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/person.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-per">{{this.TotalPerson}}</h2>
              <div class="item-name">Person</div>
            </div>
          </div>
        </div>
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon info-gradient" id="orgtotal" @mouseover="hoverOrgtotal = true" @mouseout="hoverOrgtotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/organization.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-org">{{this.TotalOrg}}</h2>
              <div class="item-name">Organization</div>
            </div>
          </div>
        </div>
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon location-gradient" id="loctotal" @mouseover="hoverLoctotal = true" @mouseout="hoverLoctotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/location.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-loc">{{this.TotalLoc}}</h2>
              <div class="item-name">Location</div>
            </div>
          </div>
        </div>
        <div class="tag-item">
          <div class="item-container">
            <div class="item-icon primary-gradient" id="misctotal" @mouseover="hoverMisctotal = true" @mouseout="hoverMisctotal = false">
              <img class="image-logo1" src="~/static/assetsAdmin/backend/assets/img/misc.png" />
            </div>
            <div>
              <h2 class="item-number" id="sum-misc">{{this.TotalMisc}}</h2>
              <div class="item-name">Misc</div>
            </div>
          </div>
        </div>
      </div>
      <div class="tag-chart row">
        <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="box" style="margin-top: 31px;">
            <div class="col-xl-4 box-step" style="cursor: pointer;">
              <div class="F-S-feature position-relative success-gradient d-flex" id="processedLib" @mouseover="isHoveringLib = true" @mouseout="isHoveringLib = false">
                <div class="d-flex flex-column F-S-feature-content">
                  <div class="d-flex flex-column F-feature-icon">
                    <img class="image-logo" src="~/static/assetsAdmin/backend/assets/img/tag.png" />
                  </div>
                  <div class="d-flex flex-column mt-auto">
                    <h3 class="F-S-feature-heading text-white">Library</h3>
                    <h2 id="percent-tag-lib-complete" class="text-white F-S-feature-value">{{this.percentTotalPostLib}}%</h2>
                    <h4 style="font-size: 14px!important" class="text-white F-S-feature-legend">Articles</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 box-step" style="cursor: pointer;">
              <div class="F-S-feature position-relative info-gradient d-flex" id="processedAi" @mouseover="isHoveringAi = true" @mouseout="isHoveringAi = false">
                <div class="d-flex flex-column F-S-feature-content">
                  <div class="d-flex flex-column F-feature-icon">
                    <img class="image-logo" src="~/static/assetsAdmin/backend/assets/img/ai.png" />
                  </div>
                  <div class="d-flex flex-column mt-auto">
                    <h3 class="F-S-feature-heading text-white">AI</h3>
                    <h2 id="percent-tag-ai-complete" class="text-white F-S-feature-value">{{this.percentTotalPostAi}}%</h2>
                    <h4 style="font-size: 14px!important" class="text-white F-S-feature-legend">Articles</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 box-step" style="cursor: pointer;">
              <div class="F-S-feature position-relative warning-gradient d-flex" id="processedPending" @mouseover="isHoveringPending = true" @mouseout="isHoveringPending = false">
                <div class="d-flex flex-column F-S-feature-content">
                  <div class="d-flex flex-column F-feature-icon">
                    <img class="image-logo" src="~/static/assetsAdmin/backend/assets/img/pending-check-03.png" />
                  </div>
                  <div class="d-flex flex-column mt-auto">
                    <h3 class="F-S-feature-heading text-white">Pending</h3>
                    <h2 id="percent-tag-pending" class="text-white F-S-feature-value">{{this.percentTotalPostPending}}%</h2>
                    <h4 style="font-size: 14px!important" class="text-white F-S-feature-legend">Articles</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <KeywordOverTimeComponent />
      </div>
      <div class="tag-statistics" style="margin-bottom: 16px;">
        <div class="tag-stats-item">
          <div class="content-heading content-heading-lib" id="content-heading-lib">
            <div class="total-tags-lib" id="total-tags-lib">LIBRARY STATS : {{this.TotalLibTag}} Tags</div>
          </div>
          <div class="progress progress-sm progress-bar-stack mb-4 br-30" id="progress-active-lib" style="height:4px !important;" :class="{'progress-active': isHoveringLib ,'unprogress-active': isHoveringPending,'human-active-per' :hoverPertotal,'human-active-org':hoverOrgtotal,
            'human-active-loc' : hoverLoctotal , 'human-active-misc':hoverMisctotal,'human-active-per':hoverPerLib,'human-active-org':hoverOrgLib,
            'human-active-loc':hoverLocLib,'human-active-misc':hoverMiscLib , 'human-active-per' : hoverPertotal,'human-active-org': hoverOrgtotal,'human-active-loc':hoverLoctotal,'human-active-misc':hoverMisctotal}">
            <div class="bg-success" id="perLib" role="progressbar" style="transition: 1.5s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthPerLib +'%'}"></div>
            <div class="bg-primary" id="orgLib" role="progressbar" style="transition: 1.5s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthOrgLib +'%'}"></div>
            <div class="bg-info" id="locLib" role="progressbar" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthLocLib +'%'}"></div>
            <div class="bg-secondary" id="miscLib" role="progressbar" style="background-color: #805dca !important; transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthMiscLib +'%'}"></div>
            <div class="bg-pending" id="pendingLib" role="progressbar" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthPendingLib +'%'}"></div>
          </div>
          <div class="tag-list-container" style="margin-top: -25px;">
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon success-gradient" id="perlib" style=" width: 38px; height: 38px" @mouseover="hoverPerLib = true" @mouseout="hoverPerLib = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/person.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="lib-per">{{this.TotatLibPerson}}</h2>
                  <div class="F-stats-heading">Person</div>
                </div>
              </div>
            </div>
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon info-gradient" id="orglib" style=" width: 38px; height: 38px" @mouseover="hoverOrgLib = true" @mouseout="hoverOrgLib = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~static/assetsAdmin/backend/assets/img/organization.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="lib-org">{{this.TotalLibOrg}}</h2>
                  <div class="F-stats-heading">Organization</div>
                </div>
              </div>
            </div>
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon location-gradient" id="loclib" style=" width: 38px; height: 38px" @mouseover="hoverLocLib = true" @mouseout="hoverLocLib = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/location.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="lib-loc">{{this.TotalLibLoc}}</h2>
                  <div class="F-stats-heading">Location</div>
                </div>
              </div>
            </div>
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon primary-gradient" id="misclib" style=" width: 38px; height: 38px" @mouseover="hoverMiscLib = true" @mouseout="hoverMiscLib = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/misc.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="lib-misc">{{this.TotalLibMisc}}</h2>
                  <div class="F-stats-heading">Misc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tag-statistics">
        <div class="tag-stats-item">
          <div class="content-heading content-heading-ai" id="content-heading-ai">
            <div class="total-tags-ai" id="total-tags-ai">AI STATS : {{this.TotalAiTag}} Tags</div>
          </div>
          <div class="progress progress-bar-stack progress-sm mb-4 br-30" id="progress-active-ai" style="height:4px !important;" :class="{'progress-active': isHoveringAi ,'unprogress-active' : isHoveringPending,'human-active-per' :hoverPertotal ,'human-active-org':hoverOrgtotal,
            'human-active-loc':hoverLoctotal,'human-active-misc':hoverMisctotal,'human-active-per':hoverPerAi,'human-active-org':hoverOrgAi,
              'human-active-loc' : hoverlocAi,'human-active-misc':hoverMiscAi , 'human-active-per' : hoverPertotal,'human-active-org': hoverOrgtotal,'human-active-loc':hoverLoctotal,'human-active-misc':hoverMisctotal}">
            <div class="bg-success" id="perAi" role="progressbar" style="transition: 1.5s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthPerAI +'%'}"></div>
            <div class="bg-primary" id="orgAi" role="progressbar" style="transition: 1.5s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthOrgAI +'%'}"></div>
            <div class="bg-info" id="locAi" role="progressbar" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthLocAI +'%'}"></div>
            <div class="bg-secondary" id="miscAi" role="progressbar" style="background-color: #805dca !important; transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthMiscAI +'%'}"></div>
            <div class="bg-pending" id="pendingAi" role="progressbar" style="transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" :style="{width: this.WidthPendingAI +'%'}"></div>
          </div>
          <div class="tag-list-container" style="margin-top: -25px;">
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon success-gradient" id="perai" style=" width: 38px; height: 38px" @mouseover="hoverPerAi = true" @mouseout="hoverPerAi = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/person.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="ai-per">{{this.TotalAiPerson}}</h2>
                  <div class="F-stats-heading">Person</div>
                </div>
              </div>
            </div>
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon info-gradient" id="orgai" style=" width: 38px; height: 38px" @mouseover="hoverOrgAi = true" @mouseout="hoverOrgAi = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/organization.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="ai-org">{{this.TotalAiOrg}}</h2>
                  <div class="F-stats-heading">Organization</div>
                </div>
              </div>
            </div>
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon location-gradient" id="locai" style=" width: 38px; height: 38px" @mouseover="hoverlocAi = true" @mouseout="hoverlocAi = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/location.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="ai-loc">{{this.TotalAiLoc}}</h2>
                  <div class="F-stats-heading">Location</div>
                </div>
              </div>
            </div>
            <div class="tag-item">
              <div class="item-container">
                <div class="item-icon primary-gradient" id="miscai" style=" width: 38px; height: 38px" @mouseover="hoverMiscAi = true" @mouseout="hoverMiscAi = false">
                  <img class="image-logo1" style=" width: 22px; height: 22px; filter: brightness(0) invert(1);" src="~/static/assetsAdmin/backend/assets/img/misc.png" />
                </div>
                <div>
                  <h2 class="F-stats-value" id="ai-misc">{{this.TotalMisc}}</h2>
                  <div class="F-stats-heading">Misc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";

import KeywordOverTimeComponent from "~/components/admin/manage-tag/KeywordOverTimeComponent.vue";
export default {
  components: {
    KeywordOverTimeComponent,
  },
  data() {
    return {
      //Hover
      isHoveringLib: false,
      isHoveringAi: false,
      isHoveringPending: false,

      hoverPertotal: false,
      hoverOrgtotal: false,
      hoverLoctotal: false,
      hoverMisctotal: false,

      hoverPerLib: false,
      hoverOrgLib: false,
      hoverLocLib: false,
      hoverMiscLib: false,

      hoverPerAi: false,
      hoverOrgAi: false,
      hoverlocAi: false,
      hoverMiscAi: false,
      //Percen Total Complete
      percentTotalPostLib: 0,
      percentTotalPostAi: 0,
      percentTotalPostPending: 0,

      //Total Tag
      Totaltag: 0,
      TotalPerson: 0,
      TotalOrg: 0,
      TotalLoc: 0,
      TotalMisc: 0,

      //Total tag lib
      TotalLibTag: 0,
      TotatLibPerson: 0,
      TotalLibOrg: 0,
      TotalLibLoc: 0,
      TotalLibMisc: 0,

      //Total tag Ai
      TotalAiTag: 0,
      TotalAiPerson: 0,
      TotalAiOrg: 0,
      TotalAiLoc: 0,
      TotalAiMisc: 0,

      //Style width Ai and lib
      WidthPerTotal: 0,
      WidthOrgTotal: 0,
      WidthLocTotal: 0,
      WidthMiscTotal: 0,
      WidthPendingTotal: 0,

      WidthPerLib: 0,
      WidthOrgLib: 0,
      WidthLocLib: 0,
      WidthMiscLib: 0,
      WidthPendingLib: 0,

      WidthPerAI: 0,
      WidthOrgAI: 0,
      WidthLocAI: 0,
      WidthMiscAI: 0,
      WidthPendingAI: 0,
    };
  },
  mounted() {
    this.getPage()
    this.$root.$on("total-tagComponent", () => {      
      this.getPage()
    })     
  },
  methods: {
    getPage() {
       HTTP.get(`tags/stat`).then((response) => {
        this.percentTotalPostLib = Math.floor(
          (response.data.postLib.postTagComplete / response.data.postLib.totalPost) * 100);
        this.percentTotalPostAi = Math.floor((response.data.postAi.postTagComplete /  response.data.postAi.totalPost) * 100 );
        this.percentTotalPostPending = Math.floor(100 - this.percentTotalPostLib + (100 - this.percentTotalPostAi) / 2 );
        this.Totaltag = response.data.sum.total;
        this.TotalPerson = response.data.sum.person;
        this.TotalOrg = response.data.sum.org;
        this.TotalLoc = response.data.sum.loc;
        this.TotalMisc = response.data.sum.misc;

        this.TotalLibTag = response.data.lib.total;
        this.TotatLibPerson = response.data.lib.person;
        this.TotalLibOrg = response.data.lib.org;
        this.TotalLibLoc = response.data.lib.loc;
        this.TotalLibMisc = response.data.lib.misc;

        this.TotalAiTag = response.data.ai.total;
        this.TotalAiPerson = response.data.ai.person;
        this.TotalAiOrg = response.data.ai.org;
        this.TotalAiLoc = response.data.ai.loc;
        this.TotalAiMisc = response.data.ai.misc;

        this.WidthPerTotal =(this.TotalPerson / this.Totaltag) * 100;
        this.WidthOrgTotal = (this.TotalOrg / this.Totaltag) * 100;
        this.WidthLocTotal = (this.TotalLoc / this.Totaltag) * 100;
        this.WidthMiscTotal = (this.TotalMisc / this.Totaltag) * 100;
        this.WidthPendingTotal = 100 - (this.WidthPerTotal + this.WidthOrgTotal + this.WidthLocTotal +this.WidthMiscTotal);

        this.WidthPerLib = (this.TotatLibPerson / this.TotalLibTag) * this.percentTotalPostLib;
        this.WidthOrgLib = (this.TotalLibOrg / this.TotalLibTag) * this.percentTotalPostLib;
        this.WidthLocLib = (this.TotalLibLoc / this.TotalLibTag) * this.percentTotalPostLib;
        this.WidthMiscLib = (this.TotalLibMisc / this.TotalLibTag) * this.percentTotalPostLib;
        this.WidthPendingLib =  100 - (this.WidthPerLib +  this.WidthOrgLib + this.WidthLocLib + this.WidthMiscLib);
        this.WidthPerAI = (this.TotalAiPerson / this.TotalAiTag) * this.percentTotalPostAi;
        this.WidthOrgAI = (this.TotalAiOrg / this.TotalAiTag) * this.percentTotalPostAi;
        this.WidthLocAI = (this.TotalAiLoc / this.TotalAiTag) * this.percentTotalPostAi;
        this.WidthMiscAI = (this.TotalAiMisc / this.TotalAiTag) * this.percentTotalPostAi;
        this.WidthPendingAI = 100 - (this.WidthPerAI + this.WidthOrgAI + this.WidthLocAI + this.WidthMiscAI);
      });
    },
  },
};
</script>
<style >
div#apexchartsvx02iasf {
  bottom: -30px !important;
}
body {
  color: #888ea8 !important;
}
</style>
