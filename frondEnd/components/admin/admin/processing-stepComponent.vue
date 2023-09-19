<template>
  <div class="row">
    <div class="col-6 col-sm-4 col-lg-2 box-step">
      <a href="../../admin/crawler">
        <div id="background-crawler-complete-admin" :class="classArticle">
          <div class="d-flex flex-column F-S-feature-content">
            <div class="d-flex flex-column">
              <img class="image-logo-step" src="~/static/assetsAdmin/backend/assets/img/crawler.png" />
              <h3 class="feature-name mt-sm-4 mt-2">Step 1</h3>
            </div>
            <div class="d-flex flex-column mt-auto">
              <h3 class="F-S-feature-heading text-white">Crawl Data</h3>
              <h2 id="percent-crawler-complete-admin" class="text-white F-S-feature-value">{{percentArticleSuccess}}%</h2>
              <h4 class="text-white F-S-feature-legend">WEBSITES</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-4 col-lg-2 box-step">
      <a href="../../admin/manage-tag">
        <div id="background-lib-complete-admin" :class="classLib">
          <div class="d-flex flex-column F-S-feature-content">
            <div class="d-flex flex-column">
              <img class="image-logo-step" src="~/static/assetsAdmin/backend/assets/img/tag.png" />
              <h3 class="feature-name mt-sm-4 mt-2">Step 2</h3>
            </div>
            <div class="d-flex flex-column mt-auto">
              <h3 class="F-S-feature-heading text-white">Library NER</h3>
              <h2 id="percent-tag-lib-complete-admin" class="text-white F-S-feature-value">{{percentTotalPostLib}}%</h2>
              <h4 class="text-white F-S-feature-legend">ARTICLES</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-4 col-lg-2 box-step">
      <a href="../../admin/manage-tag">
        <div id="background-ai-complete-admin" :class="classAI">
          <div class="d-flex flex-column F-S-feature-content">
            <div class="d-flex flex-column">
              <img class="image-logo-step" src="~/static/assetsAdmin/backend/assets/img/ai.png" />
              <h3 class="feature-name mt-sm-4 mt-2">Step 3</h3>
            </div>
            <div class="d-flex flex-column mt-auto">
              <h3 class="F-S-feature-heading text-white">AI NER</h3>
              <h2 id="percent-tag-ai-complete-admin" class="text-white F-S-feature-value">{{percentTotalPostAi}}%</h2>
              <h4 class="text-white F-S-feature-legend">ARTICLES</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-4 col-lg-2 box-step">
      <a href="#">
        <div id="background-classification-complete-admin" class="F-S-feature position-relative d-flex" :class="classSentiment">
          <div class="d-flex flex-column F-S-feature-content">
            <div class="d-flex flex-column">
              <img class="image-logo-step" src="~/static/assetsAdmin/backend/assets/img/classification.png" />
              <h3 class="feature-name mt-sm-4 mt-2">Step 4</h3>
            </div>
            <div class="d-flex flex-column mt-auto">
              <h3 class="F-S-feature-heading text-white">Sentiment</h3>
              <h2 id="percent-classification-complete-admin" class="text-white F-S-feature-value">{{number}}%</h2>
              <h4 class="text-white F-S-feature-legend">ARTICLES</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-4 col-lg-2 box-step">
      <a href="#">
        <div id="background-crawler-complete-admin" class="F-S-feature position-relative pending-feature d-flex">
          <div class="d-flex flex-column F-S-feature-content">
            <div class="d-flex flex-column">
              <img class="image-logo-step" src="~/static/assetsAdmin/backend/assets/img/sorting.png" />
              <h3 class="feature-name mt-sm-4 mt-2">Step 5</h3>
            </div>
            <div class="d-flex flex-column mt-auto">
              <h3 class="F-S-feature-heading text-white">Sorting</h3>
              <h2 class="text-white F-S-feature-value">0%</h2>
              <h4 class="text-white F-S-feature-legend">ARTICLES</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
    <div class="col-6 col-sm-4 col-lg-2 box-step">
      <a href="#">
        <div id="background-crawler-complete-admin" class="F-S-feature position-relative pending-feature d-flex">
          <div class="d-flex flex-column F-S-feature-content">
            <div class="d-flex flex-column">
              <img class="image-logo-step" src="~/static/assetsAdmin/backend/assets/img/database.png" />
              <h3 class="feature-name mt-sm-4 mt-2">Step 6</h3>
            </div>
            <div class="d-flex flex-column mt-auto">
              <h3 class="F-S-feature-heading text-white">Store</h3>
              <h2 class="text-white F-S-feature-value">0%</h2>
              <h4 class="text-white F-S-feature-legend">ARTICLES</h4>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";

export default {
  data() {
    return {
      results: [],
      totalArticle: 0,
      articleSuccess: 0,
      percentArticleSuccess: 0,
      //Step1
      classArticle: 0,
      //step 2-3
      percentTotalPostLib: 0,
      percentTotalPostAi: 0,
      classAI: "F-S-feature position-relative d-flex pending-feature",
      classLib: "F-S-feature position-relative d-flex pending-feature",
      //step4
      number: 50,
      classSentiment: "F-S-feature position-relative d-flex pending-feature",
    };
  },
  mounted() {
    // HTTP.get(`tags/stat`).then((response) => {
    //   this.results = response.data;
    //   this.percentTotalPostLib = (this.results.postLib.postTagComplete / this.results.postLib.totalPost) * 100;
    //   this.percentTotalPostAi = (this.results.postAi.postTagComplete / this.results.postAi.totalPost) * 100;
    //   this.percentTotalPostLib = Math.ceil(this.percentTotalPostLib);
    //   this.percentTotalPostAi = Math.ceil(this.percentTotalPostAi);
    //   if (this.percentTotalPostLib < 100) {
    //     this.classLib = "F-S-feature position-relative d-flex pending-feature";
    //   } else {
    //     this.classLib = "F-S-feature position-relative success-feature d-flex";
    //   }
    //   if (this.percentTotalPostAi < 100) {
    //     this.classAI = "F-S-feature position-relative d-flex pending-feature";
    //   } else {
    //     this.classAI = "F-S-feature position-relative success-feature d-flex";
    //   }
    // });
    HTTP.get(`get-percent-article-success`).then((response) => {
      this.results = response.data;
      for (let index = 0; index < this.results.length; index++) {
        this.totalArticle += this.results[index].count;
        if (this.results[index]._id === "0")
          this.articleSuccess = this.results[index].count;
      }
      this.percentArticleSuccess = (this.articleSuccess / this.totalArticle) * 100;
      this.percentArticleSuccess = Math.ceil(this.percentArticleSuccess);
      if (this.percentArticleSuccess < 100) {
        this.classArticle =
          "F-S-feature position-relative d-flex pending-feature";
      } else {
        this.classArticle =
          "F-S-feature position-relative success-feature d-flex";
      }
    });
    // HTTP.get(`classification/article-classification-success`).then(
    //   (response) => {
    //     this.results = response.data;
    //     this.number = this.results.split("-")[0];
    //     if (Number(this.number) < 100) {
    //       this.class4 = "pending-feature";
    //     } else {
    //       this.class4 = "success-feature";
    //     }
    //     this.number = Math.ceil(Number(this.number));
    //   }
    // );
  },
};
</script>
<style >
@media only screen and (max-width: 990px){
  .dashboard-component .box-step{
    padding-bottom: 30px;
  }
}
</style>
