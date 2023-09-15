<template>
  <div class="container" style="margin-top: 60px">
    <h4>{{ $t("body.keyword.KeywordSearch") }}</h4>
    <div style="border-radius: 2px" class="box-keyword-search">
      <div class="row">
        <div class="col-lg-8 col-xl-12">
          <div style="padding: 0px; align-self: center" class="col-9 col-sm-12">
            <div class="form search-form">
              <input v-on:keyup.enter="checkKeywordInput()" id="search-keyword" v-model="key" style="
                  padding-left: 40px;
                  font-weight: normal;
                  padding-right: 10px;
                " value class="form__field input-search" type="search" :placeholder="$t('body.keyword.Search')" />
            </div>
            <svg style="position: absolute; top: 13px; left: 8px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search toggle-search">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <div style="display: none" class="col-lg-8 col-xl-12 box-alert-empty top-20 left-15 right-15" v-if="boxAlertEmpty">
          <div class="col-12 col-md-4 col-xl-12 text-center">
            <div class="icon-item mb-0 top-20 bottom-20">
              <div class="icon-item__img icon-item__img--small justify-content-center">
                <img src="~/static/img/pack_3/i9.svg" alt="icon" />
              </div>
              <h6 style="color: darkgray" class="icon-item__title bottom-0">{{ $t("body.keyword.messeage") }}</h6>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 p-0">
        <div id="overlay">
          <div id="text">
            <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
              <circle class="loader-svg bg" cx="50" cy="50" r="45" />
              <circle class="loader-svg animate" cx="50" cy="50" r="45" />
            </svg>
            {{ $t("body.keyword.loading") }}
          </div>
        </div>
        <div id="box-all-news" style="margin-top: 20px; margin-bottom: 20px" class="row">
          <!-- dataPost -->
          <div class="col-lg-6 col-xl-3" v-for="(post, index) in arrPost" :key="index">
            <div class="news-item news-item--style-1 news-item--small" v-if="
                post.hotPoint >= pointRequiredForTag &&
                post.view >= viewRequiredForTag
              ">
              <a :href="'/news/?id='+ post._id">
                <div class="news-item__img">
                  <span style="  color: #e0e6ed;  margin-left: 5px;  margin-top: 5px;  padding: 4px 12px;  position: absolute;  font-size: 12px;  border-radius: 21px;  background: #1b2e4b;  font-size: 12px;  letter-spacing: 1px;" class="w-currency align-self-center">🔥 Hot</span>
                  <span style="  color: #e0e6ed;  margin-left: 75px;  margin-top: 5px;  padding: 4px 12px;  position: absolute;  font-size: 12px;  border-radius: 21px;  background: #1b2e4b;  font-size: 12px;  letter-spacing: 1px;" class="w-currency align-self-center">👀 Interested</span>
                  <img class="img--bg" :src="getAllImage(post.urlimage)" alt="img" />
                </div>
              </a>
              <div class="news-item__content">
                <div class="box-title-des">
                  <h6 class="news-item__title">
                    <a :href="'/news/?id='+ post._id">{{ post.title }}</a>
                  </h6>
                  <p>{{ formatDescription(post.description) }}</p>
                </div>
                <div class="news-item__details">
                  <span class="news-item__date">{{ post.timeCreatePostOrigin }}</span>
                  <a style="text-decoration: none" :href="'https://www.'+getHostName(post.url)" target="_blank">
                    <span style="color: #767f7f">{{ post.urlPageCrawl }}</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="news-item news-item--style-1 news-item--small" v-else-if="post.hotPoint >= pointRequiredForTag">
              <a :href="'/news/?id='+ post._id">
                <div class="news-item__img">
                  <span style="  color: #e0e6ed;  margin-left: 5px;  margin-top: 5px;  padding: 4px 12px;  position: absolute;  font-size: 12px;  border-radius: 21px;  background: #1b2e4b;  font-size: 12px;  letter-spacing: 1px;" class="w-currency align-self-center">🔥 Hot</span>
                  <img class="img--bg" :src="getAllImage(post.urlimage)" alt="img" />
                </div>
              </a>
              <div class="news-item__content">
                <div class="box-title-des">
                  <h6 class="news-item__title">
                    <a :href="'/news/?id='+ post._id">{{ post.title }}</a>
                  </h6>
                  <p>{{ formatDescription(post.description) }}</p>
                </div>
                <div class="news-item__details">
                  <span class="news-item__date">{{ post.timeCreatePostOrigin }}</span>
                  <a style="text-decoration: none" :href="'https://www.'+getHostName(post.url)" target="_blank">
                    <span style="color: #767f7f">{{ post.urlPageCrawl }}</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="news-item news-item--style-1 news-item--small" v-else-if="post.view >= viewRequiredForTag">
              <a :href="'/news/?id='+ post._id">
                <div class="news-item__img">
                  <span style="color: #e0e6ed;  margin-left: 5px;  margin-top: 5px;  padding: 4px 12px;  position: absolute;  font-size: 12px;  border-radius: 21px;  background: #1b2e4b;  font-size: 12px;  letter-spacing: 1px;" class="w-currency align-self-center">👀 Interested</span>
                  <img class="img--bg" :src="getAllImage(post.urlimage)" alt="img" />
                </div>
              </a>
              <div class="news-item__content">
                <div class="box-title-des">
                  <h6 class="news-item__title">
                    <a :href="'/news/?id='+ post._id">{{ post.title }}</a>
                  </h6>
                  <p>{{ formatDescription(post.description) }}</p>
                </div>
                <div class="news-item__details">
                  <span class="news-item__date">{{ post.timeCreatePostOrigin }}</span>
                  <a style="text-decoration: none" :href="'https://www.'+getHostName(post.url)" target="_blank">
                    <span style="color: #767f7f">{{ post.urlPageCrawl }}</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="news-item news-item--style-1 news-item--small" v-else>
              <a :href="'/news/?id='+ post._id">
                <div class="news-item__img">
                  <img class="img--bg" :src="getAllImage(post.urlimage)" alt="img" />
                </div>
              </a>
              <div class="news-item__content">
                <div class="box-title-des">
                  <h6 class="news-item__title">
                    <a :href="'/news/?id='+ post._id">{{ post.title }}</a>
                  </h6>
                  <p>{{ formatDescription(post.description) }}</p>
                </div>
                <div class="news-item__details">
                  <span class="news-item__date">{{ post.timeCreatePostOrigin }}</span>
                  <a style="text-decoration: none" :href="'https://www.'+getHostName(post.url)" target="_blank">
                    <span style="color: #767f7f">{{ post.urlPageCrawl }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" style="    margin-bottom: 20px;" v-if="page >= 1 && totalNews > 0">
        <!-- total news <=6 -->
        <div class="col-12" v-if="totalNews <= 6">
          <ul id="box-pagination" class="pagination list--reset mt-0">
            <li v-if="page > 1" v-on:click="searchDataPost(page - 1)" class="pagination__item pagination__item--prev">
              <span>{{ $t("body.news.Back") }}</span>
            </li>
            <li v-for="index in totalNews" :key="index" v-on:click="searchDataPost(index)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === index }">
              <span>{{ index }}</span>
            </li>
          </ul>
        </div>
        <!-- total news > 6 -->
        <div class="col-12" v-if="totalNews > 6">
          <!-- 0< page <=2 -->
          <ul id="box-pagination" class="pagination list--reset mt-0" v-if="page <= 2">
            <!-- -------------------------------- -->
            <li v-if="page > 1" v-on:click="searchDataPost(page - 1)" class="pagination__item pagination__item--prev">
              <span>{{ $t("body.news.Back") }}</span>
            </li>
            <li v-on:click="searchDataPost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
              <span>1</span>
            </li>
            <li v-on:click="searchDataPost(2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 2 }">
              <span>2</span>
            </li>
            <li v-on:click="searchDataPost(3)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 3 }">
              <span>3</span>
            </li>
            <li class="pagination__item item-number-page">
              <span>...</span>
            </li>
            <li v-on:click="searchDataPost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
              <span>{{ totalNews }}</span>
            </li>
            <li v-if="page < totalNews" v-on:click="searchDataPost(page + 1)" class="pagination__item pagination__item--next">
              <span>{{ $t("body.news.Next") }}</span>
            </li>
          </ul>
          <!-- page =3 -->
          <ul id="box-pagination" class="pagination list--reset mt-0" v-else-if="page === 3">
            <!-- -------------------------------- -->
            <li v-if="page > 1" v-on:click="searchDataPost(page - 1)" class="pagination__item pagination__item--prev">
              <span>{{ $t("body.news.Back") }}</span>
            </li>
            <li v-on:click="searchDataPost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
              <span>1</span>
            </li>
            <li v-on:click="searchDataPost(2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 2 }">
              <span>2</span>
            </li>
            <li v-on:click="searchDataPost(3)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 3 }">
              <span>3</span>
            </li>
            <li v-on:click="searchDataPost(4)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 4 }">
              <span>4</span>
            </li>
            <li class="pagination__item item-number-page">
              <span>...</span>
            </li>
            <li v-on:click="searchDataPost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
              <span>{{ totalNews }}</span>
            </li>
            <li v-if="page < totalNews" v-on:click="searchDataPost(page + 1)" class="pagination__item pagination__item--next">
              <span>{{ $t("body.news.Next") }}</span>
            </li>
          </ul>
          <!-- 3 < page < totalNews -2 -->
          <ul id="box-pagination" class="pagination list--reset mt-0" v-else-if="3 < page && page < totalNews - 2">
            <!-- -------------------------------- -->
            <li v-if="page > 1" v-on:click="searchDataPost(page - 1)" class="pagination__item pagination__item--prev">
              <span>{{ $t("body.news.Back") }}</span>
            </li>
            <li v-on:click="searchDataPost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
              <span>1</span>
            </li>
            <li class="pagination__item item-number-page">
              <span>...</span>
            </li>
            <li v-on:click="searchDataPost(page - 1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page -1) }">
              <span>{{ page - 1 }}</span>
            </li>
            <li v-on:click="searchDataPost(page)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === page }">
              <span>{{ page }}</span>
            </li>
            <li v-on:click="searchDataPost(page + 1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page + 1) }">
              <span>{{ page + 1 }}</span>
            </li>
            <li class="pagination__item item-number-page">
              <span>...</span>
            </li>
            <li v-on:click="searchDataPost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
              <span>{{ totalNews }}</span>
            </li>
            <li v-if="page < totalNews" v-on:click="searchDataPost(page + 1)" class="pagination__item pagination__item--next">
              <span>{{ $t("body.news.Next") }}</span>
            </li>
          </ul>
          <!-- page = totalNews -2  -->
          <ul id="box-pagination" class="pagination list--reset mt-0" v-else-if="page === totalNews - 2">
            <!-- -------------------------------- -->
            <li v-if="page > 1" v-on:click="searchDataPost(page - 1)" class="pagination__item pagination__item--prev">
              <span>{{ $t("body.news.Back") }}</span>
            </li>
            <li v-on:click="searchDataPost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
              <span>1</span>
            </li>
            <li class="pagination__item item-number-page">
              <span>...</span>
            </li>
            <li v-on:click="searchDataPost(page - 1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page -1) }">
              <span>{{ page - 1 }}</span>
            </li>
            <li v-on:click="searchDataPost(page)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === page }">
              <span>{{ page }}</span>
            </li>
            <li v-on:click="searchDataPost(page + 1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page + 1) }">
              <span>{{ page + 1 }}</span>
            </li>

            <li v-on:click="searchDataPost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
              <span>{{ totalNews }}</span>
            </li>
            <li v-if="page < totalNews" v-on:click="searchDataPost(page + 1)" class="pagination__item pagination__item--next">
              <span>{{ $t("body.news.Next") }}</span>
            </li>
          </ul>

          <!-- totalNews-2<page < totalNews ="totalNews -2<page<=totalNews"-->
          <ul id="box-pagination" class="pagination list--reset mt-0" v-else>
            <!-- -------------------------------- -->

            <li v-if="page > 1" v-on:click="searchDataPost(page - 1)" class="pagination__item pagination__item--prev">
              <span>{{ $t("body.news.Back") }}</span>
            </li>
            <li v-on:click="searchDataPost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
              <span>1</span>
            </li>
            <li class="pagination__item item-number-page">
              <span>...</span>
            </li>

            <li v-on:click="searchDataPost(totalNews - 2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews -2) }">
              <span>{{ totalNews - 2 }}</span>
            </li>
            <li v-on:click="searchDataPost(totalNews - 1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews -1) }">
              <span>{{ totalNews - 1 }}</span>
            </li>

            <li v-on:click="searchDataPost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
              <span>{{ totalNews }}</span>
            </li>
            <li v-if="page < totalNews" v-on:click="searchDataPost(page + 1)" class="pagination__item pagination__item--next">
              <span>{{ $t("body.news.Next") }}</span>
            </li>
          </ul>
        </div>
      </div>

      
        
      </div>
    </div>
  
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
export default {
  // components: {
  //   "vue-select": require("vue-select")
  // },
  computed: {
    indexPage: function () {
      return this.test;
    },
    arrPost: function () {
      return this.array[0];
    },
    totalPost: function () {
      return this.array[1];
    },
    totalNews: function () {
      return Math.ceil(this.array[1] / 12);
    },
  },
  data() {
    return {
      test: 0,
      pageActive: 0,
      key: this.$route.query.key || "",
      page: 1,
      geo: this.$route.query.geo || "Worldwide",
      gprop: this.$route.query.gprop || "Web Search",
      time: this.$route.query.time || "Past 12 months",
      dataInputSearch: "",
      geoOption: { value: "", label: "Worldwide" },
      timeOption: { value: "today 12-m", label: "Past 12 months" },
      gpropOption: { value: "", label: "Web Search" },
      showContentGoogleTrend: false,
      svgLoader: "block",
      overlay: true,
      boxAlertEmpty: false,
      resultCrawdataByKeyword: [],
      array: [],
      pointRequiredForTag: null,
      viewRequiredForTag: null,
      optionGprop: [
        { value: "", label: "Web Search" },
        { value: "images", label: "Image Search" },
        { value: "news", label: "News Search" },
        { value: "youtube", label: "Youtube Search" },
      ],
      
    };
  },
  methods: {
    checkKeywordInput() {
      this.$router.push({
        query: {
          geo: this.$route.query.geo,
          key: this.key,
          gprop: this.$route.query.gprop,
          time: this.$route.query.time,
          year: this.$route.query.year,
        },
      });      
      this.getInformation();
    },
    getInformation() {
      this.SearchInformation();
      this.searchDataPost(this.page);
      // this.searchPost()
    },
    SearchInformation() {
      this.searchDataGoogleTrend();
    },
    searchDataGoogleTrend() {
      this.dataInputSearch = this.key;
      if (this.dataInputSearch !== "") {
        this.showContentGoogleTrend = true;
        console.log("không có dữ liệu");
      }
    },
    searchPost() {
      let language = "en";
      let address = "crawlByKeyword";
      this.dataInputSearch = this.key;
      if (this.dataInputSearch === "") {
        this.svgLoader = "none";
        console.log("khong co data");
      } else {
        let objCrawl = {};
        objCrawl.dataInputSearch = this.dataInputSearch;
        objCrawl.address = address;
        objCrawl.language = language;
        HTTP.get("crawdata-by-keyword", { params: { objCrawl: objCrawl } })
          .then((response) => {
            this.resultCrawdataByKeyword = response.data;
          })
          .catch((e) => {
            this.errors.push(e);
          });
      }
    },
    searchDataPost(page) {
      this.test = page;
      this.page = page;
      HTTP.get("keyword-search", { params: { key: this.key, page: this.page } })
        .then((response) => {
          this.array = response.data[0];
          this.pointRequiredForTag = response.data[1];
          this.viewRequiredForTag = response.data[2];
          if ((this.arrPost.length === 0) & (this.key !== "")) {
            this.boxAlertEmpty = true;
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    formatDescriptionForListGoogle(value) {
      if (value !== undefined) {
        if (value.length > 100) {
          value = value.substring(0, 97) + "...";
        }
        return value;
      }
    },
    formatUrl(value) {
      if (value.length > 30) {
        value = value.substring(0, 29) + "...";
      }
      return value;
    },

    getHostName(value) {
      var parser = document.createElement("a");
      parser.href = value;
      let namePage = parser.hostname;
      let removeChart = namePage.substr(0, 4);
      if (removeChart === "www.")
        namePage = namePage.substr(4, namePage.length);
      if (namePage === "waterdata.usgs.gov") namePage = "usgs.gov";
      return namePage;
    },
    getAllImage(value) {
      if (value === undefined) {
        return require("~/static/img/logo-waterportal.png");
      }
      let newString = "";
      let stringImage = value.split("\n");
      for (let index = 0; index < stringImage.length; index++) {
        newString = stringImage[0];
      }
      if (newString === "")
        newString = require("~/static/img/logo-waterportal.png");
      return newString;
    },
    formatDescription(description) {
      if (description.length > 51) {
        description = description.substring(0, 70) + "...";
      }
      return description;
    },
    formatTitle(value) {
      if (value === undefined) {
        value = "";
      }
      if (value.length > 23) {
        value = value.substring(0, 24);
      }
      return value;
    },
  },
  // key :this.$route.query.key || '',
  //     page: 1,
  //     geo :  this.$route.query.geo || "" ,
  //     gprop : this.$route.query.gprop || "",
  //     time: this.$route.query.time || "today 12-m" ,
  // mounted() {
  //   this.checkKeywordInput();
  //   this.$watch(
  //     () => this.$route.query.key,
  //     (toQuerys, previousQuerys) => {
  //       this.key = this.$route.query.key;
  //       this.checkKeywordInput();
  //     }
  //   );
  //   this.$watch("key", (newKey) => {});
  //   this.$watch("geoOption", (newGeo) => {
  //     this.$router.push({
  //       query: {
  //         geo: this.geoOption.value,
  //         gprop: this.$route.query.gprop,
  //         key: this.$route.query.key,
  //         time: this.$route.query.time,
  //         year: this.$route.query.year,
  //       },
  //     });
  //   });
  //   this.$watch("gpropOption", (newGprop) => {
  //     this.$router.push({
  //       query: {
  //         geo: this.$route.query.geo,
  //         gprop: this.gpropOption.value,
  //         key: this.$route.query.key,
  //         time: this.$route.query.time,
  //         year: this.$route.query.year,
  //       },
  //     });
  //   });
  //   this.$watch("timeOption", (newTime) => {
  //     this.$router.push({
  //       query: {
  //         geo: this.$route.query.geo,
  //         gprop: this.$route.query.gprop,
  //         key: this.$route.query.key,
  //         time: this.timeOption.value,
  //         year: this.$route.query.year,
  //       },
  //     });
  //   });
  // },
};
</script>
<style >
@import "~/static/css/search-by-keyword.css";
@import "vue-range-slider/dist/vue-range-slider.css";
@import "vue-select/dist/vue-select.css";

/* .circle {
        fill: white;
        border: 1px solid white;
        padding: 10px 2.5px 13px 10px;
        background: #00e396;
        border-radius: 50%;
        margin: 4px;
    } */
/* 
    .circle :hover {
        background: #00e396;
        fill: #999;
    } */
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