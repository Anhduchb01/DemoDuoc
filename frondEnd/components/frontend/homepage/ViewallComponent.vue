<template >
  <section class="section">
    <div class="container">
      <div class="row bottom-50">
        <div class="col-12">
          <div class="heading heading--center">
            <span class="heading__pre-title">{{$t('body.home.News')}}</span>
            <h3 class="heading__title">
              {{$t('body.home.featured')}}
              <span class="color--green">{{$t('body.home.News')}}</span>
            </h3>
            <span class="heading__layout layout--lgray">{{$t('body.home.new')}}</span>
          </div>
        </div>
      </div>
      <div id="box-featured-news" v-if="results && results.length " class="row offset-30">
        <div class="col-lg-6 col-xl-3" v-for="result of results" :key="result._id">
          <div class="news-item news-item--style-1 news-item--small" >
            <div class="news-item news-item--style-1 news-item--small">
              <a :href="'/news/?id='+ result._id">
                <span v-if="result.category=='POS'" style="z-index: 100;color:#e0e6ed;margin-left: 5px;margin-top: 5px;padding: 4px 12px;position: absolute;font-size: 12px;border-radius: 21px;background: #1b2e4b;font-size: 12px;letter-spacing: 1px;" class="w-currency align-self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#36cd18" d="M13.5 8.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-.026 4.553a.5.5 0 1 0-.448.894c.584.292 1.289.428 1.974.428s1.39-.136 1.974-.428a.5.5 0 1 0-.448-.894c-.416.208-.961.322-1.526.322c-.565 0-1.11-.114-1.526-.322ZM18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"/></svg>
                  {{ $t("body.news.Positive") }}</span>
                  <span v-if="result.category=='NEU'" style="z-index: 100;color:#e0e6ed;margin-left: 5px;margin-top: 5px;padding: 4px 12px;position: absolute;font-size: 12px;border-radius: 21px;background: #1b2e4b;font-size: 12px;letter-spacing: 1px;" class="w-currency align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#808080" d="M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-.114 1.917a.5.5 0 1 0-.745.667A3.493 3.493 0 0 0 8 11.5a3.493 3.493 0 0 0 2.609-1.166a.5.5 0 0 0-.745-.667A2.492 2.492 0 0 1 8 10.5c-.74 0-1.405-.321-1.864-.833ZM10.5 7A.75.75 0 1 1 9 7a.75.75 0 0 1 1.5 0ZM14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z"/></svg>
                    {{ $t("body.news.Neutral") }}</span>
                  <span v-if="result.category=='NEG'" style="z-index: 100;color:#e0e6ed;margin-left: 5px;margin-top: 5px;padding: 4px 12px;position: absolute;font-size: 12px;border-radius: 21px;background: #1b2e4b;font-size: 12px;letter-spacing: 1px;" class="w-currency align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#d60510" d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Zm4-1.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-4.368 4.072c.925-1.096 2.81-1.096 3.736 0a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644Z"/></svg>
                    {{ $t("body.news.Negative") }}</span>
                <div class="news-item__img" style="z-index: 90;">
                  <img  class="img--bg" :src="getAllImage(result.image_url)" alt="img" />
                </div>
              </a>
              <div class="news-item__content">
                <div class="box-title-des">
                  <h6 class="news-item__title">
                    <a :href="'/news/?id='+ result._id">{{result.title}}</a>
                  </h6>
                  <p>{{formatDescription(result.content)}}</p>
                </div>
                <div class="news-item__details">
                  <span class="news-item__date">{{result.timeCreatePostOrigin}}</span>
                  <a style="text-decoration: none;" :href="'https://www.'+result.urlPageCrawl" target="_blank">
                    <span style="color:#767F7F;">{{result.urlPageCrawl}}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row offset-30" v-else>
        <div class="overlay" id="loading-box-archive">
          <div id="text">
            <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
              <circle class="loader-svg bg" cx="50" cy="50" r="45" />
              <circle class="loader-svg animate" cx="50" cy="50" r="45" />
            </svg>
            Loading
          </div>
        </div>
      </div>
      <div class="col-12 heading heading--center top-50">
        <a class="btn-view-all" href="/news/">
          <button class="button button--green">
            <span>{{$t('body.home.viewAll')}}</span>
            <svg class="icon" viewBox="0 0 24 24" id="Isolation_Mode" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.935,16.271l2.78-2.78L0,13.466l0-3,19.7.025L16.935,7.727l2.121-2.12,3.919,3.918a3.5,3.5,0,0,1,0,4.948l-3.919,3.918Z" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";

export default {

  data() {
    return {
      results: [],
      errors: [],
      dataInputSearch: "",
      pointRequiredForTag: 10,
      viewRequiredForTag: 10,
    };
  },
  methods: {      
    getAllImage(value) {
      if (value === undefined) {
        return require("~/static/img/news1.jpg");
      }
      if (value === '') {
        return require("~/static/img/news1.jpg");
      }
      if (value === null) {
        return require("~/static/img/news1.jpg");
      }
      return value;
    },
    formatDescription(description) {
      if (description.length > 51) {
        description = description.substring(0, 70) + "...";
      }
      return description;
    },
     
  },
  mounted() {
    HTTP.get(`home/getnews`)
      .then((response) => {
        this.results = response.data
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style scoped>
.news-item__img::before {
  padding-top: 0px !important;
  content: none !important;
  display: none;
}
.news-item__img .img--bg {
  position: initial !important ;
  height: 160px !important;
}
</style>
