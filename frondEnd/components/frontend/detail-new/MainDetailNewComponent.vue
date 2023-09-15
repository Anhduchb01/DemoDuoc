<template>
  <section style="padding: 80px 0px;" class="section blog-post" v-if="id">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-xl-9">
          <div class="row" v-if="Object.keys(results).length">
            <div class="col-12 d-flex">
              <div class="d-flex">
                <span v-if="results.category=='POS'" style="width: 20px;height: 20px;" class="w-currency align-self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#36cd18" d="M13.5 8.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-.026 4.553a.5.5 0 1 0-.448.894c.584.292 1.289.428 1.974.428s1.39-.136 1.974-.428a.5.5 0 1 0-.448-.894c-.416.208-.961.322-1.526.322c-.565 0-1.11-.114-1.526-.322ZM18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"/></svg>
                  </span>
                  <span v-if="results.category=='NEU'" style="width: 20px;height: 20px;" class="w-currency align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#808080" d="M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-.114 1.917a.5.5 0 1 0-.745.667A3.493 3.493 0 0 0 8 11.5a3.493 3.493 0 0 0 2.609-1.166a.5.5 0 0 0-.745-.667A2.492 2.492 0 0 1 8 10.5c-.74 0-1.405-.321-1.864-.833ZM10.5 7A.75.75 0 1 1 9 7a.75.75 0 0 1 1.5 0ZM14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z"/></svg>
                   </span>
                  <span v-if="results.category=='NEG'" style="width: 20px;height: 20px;" class="w-currency align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#d60510" d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Zm4-1.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-4.368 4.072c.925-1.096 2.81-1.096 3.736 0a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644Z"/></svg>
                    </span>
                <div>
                  <span v-if="results.category=='POS'" id="classification-article" style="text-transform: capitalize;padding: 0px 20px 0px 5px;font-size: 14px;font-weight: 600;">
                  {{ $t("body.news.Positive") }}</span>
                  <span v-if="results.category=='NEU'" id="classification-article" style="text-transform: capitalize;padding: 0px 20px 0px 5px;font-size: 14px;font-weight: 600;">
                    {{ $t("body.news.Neutral") }}</span>
                  <span v-if="results.category=='NEG'" id="classification-article" style="text-transform: capitalize;padding: 0px 20px 0px 5px;font-size: 14px;font-weight: 600;">
                    {{ $t("body.news.Negative") }}</span>
                  <!-- <span id="classification-article" style="text-transform: capitalize;padding: 0px 20px 0px 5px;font-size: 14px;font-weight: 600;">{{results.category}}</span> -->
                </div>
              </div>
              <div class="d-flex">
                <img style="width: 20px;height: 20px;" src="~/static/img/detail_news/calendar.png" alt="img" />
                <div>
                  <span style="padding: 0px 20px 0px 5px;font-size: 14px;font-weight: 600;" id="time-ago-article">{{formatTimeAgo(results.timeCreatePostOrigin)}}</span>
                </div>
              </div>
              <div class="d-flex">
                <img style="width: 20px;height: 20px;" src="~/static/img/detail_news/link.png" />
                <div>
                  <span style="padding: 0px 20px 0px 5px;font-size: 14px;font-weight: 600;" id="name-source-article">{{results.urlPageCrawl}}</span>
                </div>
              </div>
            </div>        
            <div id="content-post" class="col-12">
              <div class="content-post" v-html="results.content_html">
              </div>
            </div>
          </div>
          <div class="row top-50">
            <div class="col-12">
              <div style="border: 0px;" class="blog-post__author pt-0">
                <div class="row align-items-center content-tags">
                  <div class="col-md-3 text-center text-md-left">
                    <strong>
                      {{$t('body.news.Tags')}}
                      <span id="number_of_tag" v-if="resultsTag.tag&&resultsTag.tag.length">({{resultsTag.tag.length}})</span> :
                    </strong>
                  </div>
                  <div id="element-tagais" class="col-md-12">              
                    <a class="tag" v-for="(tag,index) in resultsTag.tag" :key="'resultsTag'+index" href>
                      <a class="tag" style="color: #00997d" v-if="resultsTag.same.includes(tag.name)" :href="'/keyword-analytics?key='+tag.name">#{{tag.name}} <span style="   font-size: 11px; font-weight: 400;">({{tag.type}})</span></a>
                      <a class="tag" v-else :href="'/keyword-analytics?key='+tag.name">#{{tag.name}} <span style="   font-size: 11px; font-weight: 400;">({{tag.type}})</span></a>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div style="border: 0px;" class="blog-post__author pt-0">
                <div class="row align-items-center content-tags">
                  <div class="col-md-3 text-center text-md-left">
                    <strong>
                      {{$t('body.news.Tagais')}}
                      <span id="number_of_tagai" v-if="resultsTag.tagai&&resultsTag.tagai.length">({{resultsTag.tagai.length}})</span> :
                    </strong>
                  </div>
                  <div id="element-tagais" class="col-md-12">
                    <a class="tag" v-for="(tagai,index) in resultsTag.tagai" :key="'resultsTagAi'+index">
                      <a class="tag" style="color: #00997d" v-if="resultsTag.same.includes(tagai.name)" :href="'/keyword-analytics?key='+tagai.name">#{{tagai.name}} <span style="    font-size: 11px; font-weight: 400;">({{tagai.type}})</span></a>
                      <a class="tag" v-else :href="'/keyword-analytics?key='+tagai.name">#{{tagai.name}} <span style="    font-size: 11px; font-weight: 400;">({{tagai.type}})</span></a>
                    </a>
                  </div>
                </div>
              </div>
            </div>         
            <div class="col-12">
              <div style="border: 0px;" class="blog-post__author pt-0">
                <div class="align-items-center content-tags d-flex">
                  <div style="color: darkgrey;white-space: nowrap;">{{$t('body.news.SourceLink')}}:</div>

                  <div style="color: darkgrey;" id="box-source-page" class="col-md-9">
                    <span id="source-page" style="white-space: nowrap;">
                      <a href>
                        <a target="_blank" :href="results.url">
                          {{results.url}}
                          <i>
                            <svg style="margin-bottom: 4px;fill:#000000;" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 172 172">
                              <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="#ffffff" />
                                <g fill="#cccccc">
                                  <path
                                    d="M112.875,14.78125c-2.28437,0 -4.03125,1.74687 -4.03125,4.03125c0,2.28438 1.74688,4.03125 4.03125,4.03125h30.63855l-62.35052,62.35053c-1.6125,1.6125 -1.6125,4.16457 0,5.6427c0.80625,0.80625 1.88072,1.2099 2.82135,1.2099c0.94062,0 2.0151,-0.40365 2.82135,-1.2099l62.35053,-62.35052v30.63855c0,2.28438 1.74687,4.03125 4.03125,4.03125c2.28438,0 4.03125,-1.74687 4.03125,-4.03125v-40.3125c0,-2.28438 -1.74687,-4.03125 -4.03125,-4.03125zM32.25,41.65625c-9.675,0 -17.46875,7.79375 -17.46875,17.46875v80.625c0,9.675 7.79375,17.46875 17.46875,17.46875h80.625c9.675,0 17.46875,-7.79375 17.46875,-17.46875v-60.46875c0,-2.28437 -1.74687,-4.03125 -4.03125,-4.03125c-2.28437,0 -4.03125,1.74688 -4.03125,4.03125v60.46875c0,5.24062 -4.16562,9.40625 -9.40625,9.40625h-80.625c-5.24062,0 -9.40625,-4.16563 -9.40625,-9.40625v-80.625c0,-5.24063 4.16563,-9.40625 9.40625,-9.40625h60.46875c2.28437,0 4.03125,-1.74687 4.03125,-4.03125c0,-2.28438 -1.74688,-4.03125 -4.03125,-4.03125z"
                                  />
                                </g>
                              </g>
                            </svg>
                          </i>
                        </a>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-xl-3 top-70 top-lg-0">
          <div class="row">
            <div class="col-md-6 col-lg-12 bottom-50">
              <h5 class="blog-post__subtitle">{{$t('body.news.page')}}</h5>
              <ul class="category-list list--reset" v-if="resultsCategory&&resultsCategory.length">
                <li v-for="(category,index) in resultsCategory" :key="'resultsCategory'+index" class="category-list__item">
                  <a class="category-list__link" :href="'/news/?archive=&category=&type='+category.name+'&key=&page=1'">
                    <span v-if="String(category.name) === 'null'" style="text-transform: capitalize">Un-process</span>
                    <span v-else style="text-transform: capitalize">{{category.name}}</span>

                    <span>{{category.count}}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 col-lg-12">
              <h5 class="blog-post__subtitle">{{$t('body.news.Archive')}}</h5>

              <ul v-if="resultsTopArchive&&resultsTopArchive.length" class="category-list-archive list--reset" :style="checkSeeMoreTopArchive()">
                <div class="category-list__item" v-if="flagSeeMore === false &&resultsTopArchive.length > 5">
                  <li v-for="(topArchive,index) in resultsTopArchive" :key="'resultsTopArchive'+index" style="margin-bottom: 22px;">
                    <a class="category-list__link" :href="'/news/?archive='+topArchive._id+'&category=&key=&page=1'">
                      <span v-if="index<5">{{formatDateTime(topArchive._id)}}</span>
                      <span v-if="index<5">{{topArchive.count}}</span>
                    </a>
                  </li>
                </div>

                <div class="category-list__item" v-else>
                  <li v-for="(topArchive,index) in resultsTopArchive" :key="'resultsTopArchive'+index" style="margin-bottom: 22px;">
                    <a class="category-list__link" :class="{'item-active-achive':CheckItemActiveAchive(topArchive._id)}" :href="'/news/?archive='+topArchive._id+'&category=&key=&page=1'">
                      <span>{{formatDateTime(topArchive._id)}}</span>
                      <span>{{topArchive.count}}</span>
                    </a>
                  </li>
                </div>
              </ul>

              <ul v-else class="category-list-archive list--reset">
                <div style="text-align: center;padding-top: 50px;">
                  <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
                    <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                    <circle class="loader-svg animate" cx="50" cy="50" r="45" />
                  </svg>
                  {{$t('body.keyword.loading')}}
                </div>
              </ul>
            </div>
            <div v-if="resultsTopArchive.length > 5" class="col-md-6 col-lg-12 bottom-25 box-btn-seemore">
              <button v-on:click="seeMoreTopArchive()" class="button-seemore">
                <span class="text-btn" v-if="flagSeeMore">See less</span>
                <span class="text-btn" v-else>See more</span>
                <svg :style="checkSeeMoreTopArchiveExpand()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-right">
                  <polyline points="13 17 18 12 13 7" />
                  <polyline points="6 17 11 12 6 7" />
                </svg>
              </button>
            </div>

            <div class="col-md-6 col-lg-12 bottom-50">
              <h5 class="blog-post__subtitle">{{$t('body.news.Relatednews')}}</h5>
              <div id="relative-item">
                <div class="latest-item" v-for="post in resultsRecommend" :key="post._id">
                  <div class="latest-item__img">
                    <img class="img--bg" :src="getAllImage(post.urlimage)" alt="img" />
                  </div>
                  <div class="latest-item__details">
                    <h6 :title="post.title" class="latest-item__title">
                      <a :href="'/news/?id='+post._id">{{formatTitle(post.title)}}</a>
                    </h6>
                    <span class="latest-item__date">{{post.timeCreatePostOrigin}}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6 col-lg-12 bottom-50">
              <h5 class="blog-post__subtitle">{{$t('body.news.Tags')}}</h5>
              <div id="top-tags">
                <a v-for="(tag,index) in resultsTopTags" :key="'resultsTopTags'+index" class="tag" style="font-weight:normal" :href="'/keyword-analytics?key='+tag._id.name">#{{tag._id.name}} ({{tag.count}})</a>
              </div>
            </div>
            <div class="col-md-6 col-lg-12">
              <div class="contact-trigger contact-trigger--style-2">
                <img class="contact-trigger__img" src="~/static/img/contact_background.png" alt="img" />
                <h4 class="contact-trigger__title" style="color:#fff">{{$t('body.news.desContact1')}}</h4>
                <p class="contact-trigger__text" style="color:#fff">{{$t('body.news.desContact2')}}</p>
                <a class="button button--white" href="/contacts">
                  <span>{{$t('body.news.Contactus')}}</span>
                  <svg class="icon" viewBox="0 0 24 24" id="Isolation_Mode" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.935,16.271l2.78-2.78L0,13.466l0-3,19.7.025L16.935,7.727l2.121-2.12,3.919,3.918a3.5,3.5,0,0,1,0,4.948l-3.919,3.918Z" />
                  </svg>
                </a>
              </div>
            </div>
            <!-- <CoolLightBox :items="imgs" :index="index" :effect="'fade'" @close="index = null"></CoolLightBox> -->
            <vue-easy-lightbox escDisabled moveDisabled :visible="visible" :imgs="imgs" :index="index" @hide="handleHide"></vue-easy-lightbox>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
</style>

<script>
import { HTTP } from "../../../static/baseAPI.js";
import dayjs from "dayjs";

export default {
  data() {
    return {
      results: [],
      resultsTag: [],
      sameTagArr: [],
      resultsCategory: [],
      resultsRecommend: [],
      resultsTopArchive: [],
      resultsTopTags: [],
      flagSeeMore: false,
      dataInputSearch: "",
      pointRequiredForTag: null,
      viewRequiredForTag: null,
      id: this.$route.query.id,
      arrayImage: [],
      arrImage: null,
      category: "",
      TextSeeMoreTopArchive: "See more",
      imgs: [], // Img Url , string or Array of string
      visible: false,
      index: 0, // default: 0
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    showMultiple(index) {
      this.index = index;
      // console.log(index)
      this.show();
    },

    alignImage() {
      const divElement = document.querySelector('.content-post');

      var h2Elements = divElement.getElementsByTagName("h2");
      console.log(h2Elements)
      h2Elements[0].style.fontSize='2rem'
      var div = document.getElementById("content-post");
      var arrImage = div.getElementsByTagName("img");
      for (let i = 0; i < arrImage.length; i++) {
        this.imgs.push(arrImage[i].src);
        let element = arrImage[i];
        arrImage[i].outerHTML = arrImage[i].outerHTML.replace(
          arrImage[i].outerHTML,
          ` <div class='img' ref="img" > <img   style="display: flex;margin:auto;" src=` +
            element.src +
            `>
          </div>`
        );
      }
    },

    formatTimeAgo(date) {
      let timeHasPassed = dayjs().diff(date, "days");
      return date
    },
    removeStyleElement() {
      var allElement = document.querySelectorAll("div");
      for (let i = 0; i < allElement.length; i++) {
        allElement[i].removeAttribute("style");
      }
    },
    CheckItemActiveAchive(AchiveID) {
      if (AchiveID === this.archive) {
        return true;
      } else {
        return false;
      }
    },
    seeMoreTopArchive() {
      if (this.flagSeeMore) {
        HTTP.get("top-archive", { params: { category: this.category } })
          .then((response) => {
            this.resultsTopArchive = response.data;
          })
          .catch((e) => {
            this.errors.push(e);
          });
        document.getElementsByClassName(
          "category-list-archive"
        )[0].scrollTop = 0;
        this.flagSeeMore = false;
      } else {
        HTTP.get("top-archive", { params: { category: this.category } })
          .then((response) => {
            this.resultsTopArchive = response.data;
          })
          .catch((e) => {
            this.errors.push(e);
          });
        document.getElementsByClassName(
          "category-list-archive"
        )[0].scrollTop = 0;
        this.flagSeeMore = true;
      }
    },
    checkSeeMoreTopArchive() {
      if (this.flagSeeMore) {
        return "height: 330px; overflow-y :auto";
      } else {
        return "height: 170px; overflow-y :hidden";
      }
    },
    checkSeeMoreTopArchiveExpand() {
      if (this.flagSeeMore === false) {
        return "transform : rotate(" + 90 + "deg)";
      } else {
        return "transform : rotate(" + 270 + "deg)";
      }
    },
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
    formatTitle(value) {
      if (value === undefined) {
        value = "";
      }
      if (value.length > 20) {
        value = value.substring(0, 20);
      }
      return value;
    },
    getDataURL(name) {
      if (
        (name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
          location.search
        ))
      )
        return decodeURIComponent(name[1]);
    },
    formatDateTime(date) {
      let newString = date;
      newString = newString.split("/");
      let month = newString[1];
      let year = newString[0];
      if (month === "01") month = "January";
      if (month === "02") month = "February";
      if (month === "03") month = "March";
      if (month === "04") month = "April";
      if (month === "05") month = "May";
      if (month === "06") month = "June";
      if (month === "07") month = "July";
      if (month === "08") month = "August";
      if (month === "09") month = "September";
      if (month === "10") month = "October";
      if (month === "11") month = "November";
      if (month === "12") month = "December";
      return month + " " + year;
    },
    addClickImg() {
      var arrImage = document.getElementsByClassName("img");
      for (let i = 0; i < arrImage.length; i++) {
        arrImage[i].addEventListener("click", (e) => {
          e.preventDefault();
          
          this.showMultiple(i);
        });
      }
    },
  },

  mounted() {
    HTTP.get(`detail-new/` + this.id)
      .then((response) => {      
        this.results = response.data[0];    
        setTimeout(() => this.alignImage(), 2);
        setTimeout(() => this.addClickImg(), 2);
      })
      .catch((e) => {
        this.errors.push(e);
      }),
      HTTP.get("get-tags", { params: { id: this.id } })
        .then((response) => {
          this.resultsTag = response.data;        
          if (this.resultsTag.tagai) {
              for (let i=0;i < this.resultsTag.tagai.length;i++) {
                if (this.resultsTag.tagai[i].name === '人名'){
                  this.resultsTag.tagai[i].name = 'PER';
                }else if (this.resultsTag.tagai[i].name === '法人名'){
                  this.resultsTag.tagai[i].name = 'ORG';
                }else if (this.resultsTag.tagai[i].name === '政治的組織名'){
                  this.resultsTag.tagai[i].name = 'ORG';
                }else if (this.resultsTag.tagai[i].name === 'その他の組織名'){
                  this.resultsTag.tagai[i].name = 'ORG';
                }
                else if (this.resultsTag.tagai[i].name === '地名'){
                  this.resultsTag.tagai[i].name = 'LOC';
                }
                else if (this.resultsTag.tagai[i].name === '製品名'){
                  this.resultsTag.tagai[i].name = 'MISC';
                }
                else if (this.resultsTag.tagai[i].name === 'イベント名'){
                  this.resultsTag.tagai[i].name = 'MISC';
                }else if (this.resultsTag.tagai[i].name === '施設名'){
                  this.resultsTag.tagai[i].name = 'MISC';
                }
              }
            
          }
        })
        .catch((e) => {
          this.errors.push(e);
        }),
      HTTP.get("list-source-page")
        .then((response) => {
          this.resultsCategory = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        }),
      HTTP.get("recommend-article", { params: { id: this.id } })
        .then((response) => {
          this.resultsRecommend = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        }),
      HTTP.get("top-archive", { params: { type: "" } })
        .then((response) => {
          this.resultsTopArchive = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        }),
      HTTP.get("top-tag")
        .then((response) => {
          this.resultsTopTags = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        }),
      this.removeStyleElement();
  },
};
</script>
<style scoped>
@import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css';
h2.sapo{
  font-size: 30px !important;
}
.content-post h2 {
  font-size: 30px !important;
}
.content-post h1, h2, h3, h4, h5 , .h1, .h2, .h3, .h4, .h5 {
    line-height: 1.5 !important;
    font-size: 30px !important;
}
.section.section{
  position: static;
  z-index: 0;
}
h4 a {
  color: inherit;
  text-decoration: none;
}

.category-list__link {
  font-weight: 500;
}

.button-seemore svg {
  width: 14px;
  height: 14px;
  transform: rotate(90deg);
}

.category-list-archive.list--reset {
  padding-right: 5px;
  transition: 0.5s;
  height: 170px;
  overflow-y: clip;
}

.category-list-archive.list--reset::-webkit-scrollbar {
  width: 6px;
  padding-left: 10px !important;
}

.category-list-archive.list--reset::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(220, 219, 219);
  border-radius: 10px;
}

.category-list-archive.list--reset::-webkit-scrollbar-thumb {
  background: #00997d;
  border-radius: 10px;
}

.category-list-archive.list--reset::-webkit-scrollbar-thumb:hover {
  background: #00997d;
}

.box-btn-seemore {
  text-align: right;
  margin-top: 12px;
  font-size: 14px;
}

.button-seemore {
  padding: 0px;
  border: 0px;
  color: #00997d;
}

.button-seemore:focus {
  padding: 0px;
  border: 0px;
  color: #00997d;
  outline: 0px;
}

.lightbox .lb-image {
  border: 1px solid white !important;
}


</style>