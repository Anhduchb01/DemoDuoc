<template>
  <section style="padding-top: 60px" class="section blog" ref="container">
    <div class="container">
      <div class="row mb-4 d-flex">
        <div class="col-lg-5 col-xl-9">
          <div style="padding: 0px; align-self: center" class="col-12 col-sm-12">
            <div class="form search-form">
              <input v-on:keyup.enter="searchDataPost(1)" id="search-keyword-post" style="
                  padding-left: 40px;
                  font-weight: normal;
                  padding-right: 10px;
                " v-model="searchKeywordPost" class="form__field input-search" type="text" :placeholder="$t('body.keyword.Search')" />
            </div>
            <svg style="position: absolute; top: 13px; left: 8px" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search toggle-search">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
        </div>
        <div class="col-md-3">
          <div class="nice-select form__select" v-on:click="statusSelectType = !statusSelectType" :class="{open: statusSelectType}" tabindex="0">
            <span class="current">{{ typeViewSelected }}</span>
            <ul class="list">
              <li data-value="POS" v-on:click="selectTypeView('')" class="option" :class="{selected: statusSelectTypeOptionNone,'focus':statusSelectTypeOptionNone}">-----</li>
              <li data-value="POS" v-on:click="selectTypeView('POS')" class="option" :class="{selected: statusSelectTypeOptionPOS,'focus':statusSelectTypeOptionPOS}">{{ $t("body.news.Positive") }}</li>
              <li data-value="NEU" v-on:click="selectTypeView('NEU')" class="option" :class="{selected: statusSelectTypeOptionNEU,'focus':statusSelectTypeOptionNEU}">{{ $t("body.news.Neutral") }}</li>
              <li data-value="NEG" v-on:click="selectTypeView('NEG')" class="option" :class="{selected: statusSelectTypeOptionNEG,'focus':statusSelectTypeOptionNEG}">{{ $t("body.news.Negative") }}</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 col-xl-9" v-if="hasPost">
          <div id="box-all-news" class="row" v-if="!loading">
            <div v-for="post in arrPost" :key="post._id" class="col-lg-6 col-xl-4">
              <div  class="news-item news-item--style-1 news-item--small">
                <a :href="'/news/?id='+ post._id">
                  <span v-if="post.category=='POS'" style="z-index: 100;color:#e0e6ed;margin-left: 5px;margin-top: 5px;padding: 4px 12px;position: absolute;font-size: 12px;border-radius: 21px;background: #1b2e4b;font-size: 12px;letter-spacing: 1px;" class="w-currency align-self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#36cd18" d="M13.5 8.5a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-5 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-.026 4.553a.5.5 0 1 0-.448.894c.584.292 1.289.428 1.974.428s1.39-.136 1.974-.428a.5.5 0 1 0-.448-.894c-.416.208-.961.322-1.526.322c-.565 0-1.11-.114-1.526-.322ZM18 10a8 8 0 1 0-16 0a8 8 0 0 0 16 0ZM3 10a7 7 0 1 1 14 0a7 7 0 0 1-14 0Z"/></svg>
                  {{ $t("body.news.Positive") }}</span>
                  <span v-if="post.category=='NEU'" style="z-index: 100;color:#e0e6ed;margin-left: 5px;margin-top: 5px;padding: 4px 12px;position: absolute;font-size: 12px;border-radius: 21px;background: #1b2e4b;font-size: 12px;letter-spacing: 1px;" class="w-currency align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#808080" d="M6.25 7.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Zm-.114 1.917a.5.5 0 1 0-.745.667A3.493 3.493 0 0 0 8 11.5a3.493 3.493 0 0 0 2.609-1.166a.5.5 0 0 0-.745-.667A2.492 2.492 0 0 1 8 10.5c-.74 0-1.405-.321-1.864-.833ZM10.5 7A.75.75 0 1 1 9 7a.75.75 0 0 1 1.5 0ZM14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Z"/></svg>
                    {{ $t("body.news.Neutral") }}</span>
                  <span v-if="post.category=='NEG'" style="z-index: 100;color:#e0e6ed;margin-left: 5px;margin-top: 5px;padding: 4px 12px;position: absolute;font-size: 12px;border-radius: 21px;background: #1b2e4b;font-size: 12px;letter-spacing: 1px;" class="w-currency align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#d60510" d="M14 8A6 6 0 1 0 2 8a6 6 0 0 0 12 0ZM3 8a5 5 0 1 1 10 0A5 5 0 0 1 3 8Zm4-1.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm3.5 0a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0Zm-4.368 4.072c.925-1.096 2.81-1.096 3.736 0a.5.5 0 1 0 .764-.644c-1.325-1.57-3.94-1.57-5.264 0a.5.5 0 1 0 .764.644Z"/></svg>
                    {{ $t("body.news.Negative") }}</span>
                  <div class="news-item__img">
                    <img class="img--bg" :src="getAllImage(post.image_url)" alt="img" />
                  </div>
                </a>
                <div class="news-item__content">
                  <div class="box-title-des">
                    <h6 class="news-item__title">
                      <a :href="'/news/?id='+ post._id">{{post.title}}</a>
                    </h6>
                    <p>{{formatDescription(post.content)}}</p>
                  </div>
                  <div class="news-item__details">
                    <span class="news-item__date">{{post.timeCreatePostOrigin}}</span>
                    <a style="text-decoration: none;" :href="'https://www.'+getHostName(post.url)" target="_blank">
                      <span style="color:#767F7F;">{{post.urlPageCrawl}}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="box-all-news" class="row" style="padding: 20px 20px 20px 20px; position: relative; top: 0.390625px;" v-else>
            <div class="loadding-chart" id="loading-chart-treemap" style="position: absolute;top: 50%; right: 50%;transform: translateY(-50%);">
              <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
                <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                <circle class="loader-svg animate" cx="50" cy="50" r="45" />
              </svg>
              {{ $t("body.keyword.loading") }}
            </div>
          </div>
          <div class="row" v-if="page>=1&&totalNews >0">
            <!-- total news <=6 -->
            <div class="col-12" v-if="totalNews <= 6">
              <ul id="box-pagination" class="pagination list--reset">
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-for="index in totalNews" :key="index" v-on:click="changePagePost(index)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === index }">
                  <span>{{index}}</span>
                </li>
              </ul>
            </div>
            <!-- total news > 6 -->
            <div class="col-12" v-if="totalNews>6">
              <!-- 0< page <=2 -->
              <ul id="box-pagination" class="pagination list--reset" v-if="page<=2">
                <!-- -------------------------------- -->
                <li id v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li id="1" v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
                  <span>1</span>
                </li>
                <li v-on:click="changePagePost(2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 2 }">
                  <span>2</span>
                </li>
                <li v-on:click="changePagePost(3)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 3 }">
                  <span>3</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
              <!-- page =3 -->
              <ul id="box-pagination" class="pagination list--reset" v-else-if="page===3">
                <!-- -------------------------------- -->
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
                  <span>1</span>
                </li>
                <li v-on:click="changePagePost(2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 2 }">
                  <span>2</span>
                </li>
                <li v-on:click="changePagePost(3)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 3 }">
                  <span>3</span>
                </li>
                <li v-on:click="changePagePost(4)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 4 }">
                  <span>4</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === totalNews }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
              <!-- 3 < page < totalNews -2 -->
              <ul id="box-pagination" class="pagination list--reset" v-else-if="3< page && page <(totalNews-2)">
                <!-- -------------------------------- -->
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
                  <span>1</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(page-1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page-1)}">
                  <span>{{page-1}}</span>
                </li>
                <li v-on:click="changePagePost(page)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page)}">
                  <span>{{page}}</span>
                </li>
                <li v-on:click="changePagePost(page+1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page + 1) }">
                  <span>{{page+1}}</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews) }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
              <!-- page = totalNews -2  -->
              <ul id="box-pagination" class="pagination list--reset" v-else-if="page === totalNews -2">
                <!-- -------------------------------- -->
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === 1 }">
                  <span>1</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(page-1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page -1) }">
                  <span>{{page-1}}</span>
                </li>
                <li v-on:click="changePagePost(page)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page) }">
                  <span>{{page}}</span>
                </li>
                <li v-on:click="changePagePost(page+1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (page +1) }">
                  <span>{{page+1}}</span>
                </li>

                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews) }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
              <!-- totalNews-2<page < totalNews ="totalNews -2<page<=totalNews"-->
              <ul id="box-pagination" class="pagination list--reset" v-else>
                <!-- -------------------------------- -->
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (1) }">
                  <span>1</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>

                <li v-on:click="changePagePost(totalNews-2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews -2) }">
                  <span>{{totalNews-2}}</span>
                </li>
                <li v-on:click="changePagePost(totalNews-1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews - 1) }">
                  <span>{{totalNews-1}}</span>
                </li>

                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage === (totalNews) }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-xl-9" v-else>
          <div class="col-lg-8 col-xl-12 box-alert-empty top-20 left-15 right-15">
            <div class="col-12 col-md-4 col-xl-12 text-center">
              <div class="icon-item mb-0 top-20 bottom-20">
                <div class="icon-item__img icon-item__img--small justify-content-center">
                  <img src="~/static/img/pack_3/i9.svg" alt="icon" />
                </div>
                <h6 style="color: darkgray" class="icon-item__title bottom-0">Sorry, we couldn't find any articles that match your selection</h6>
              </div>
            </div>
          </div>

          <div id="overlay">
            <div id="text">
              <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
                <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                <circle class="loader-svg animate" cx="50" cy="50" r="45" />
              </svg>
              Loading
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-xl-3 top-70 top-lg-0">
          <div class="row">
            <div class="col-md-6 col-lg-12 bottom-50">
              <div style="display: flex; justify-content: space-between">
                <h5 class="blog__title">{{ $t("body.news.page") }}</h5>
                <div>
                  <button style=" height: 32px; min-width: auto;padding: 10px;" :style="{display: buttonClearFilter}" v-on:click="clearFilter()" class="button button--green clearfilter">
                    <span>Clear Filter</span>
                    <svg style="font-size: 10px" class="icon">
                      <use xlink:href="#remove" />
                    </svg>
                  </button>
                </div>
              </div>

              <ul class="category-list list--reset" v-if="resultsCategory&&resultsCategory.length">
                <li v-for="(category,index) in resultsCategory" :key="index" v-on:click="selectCategory(category.name)" :class="{'item-active':CheckItemActiveCategory(category.name)}" class="category-list__item category-list__link category">
                  <span v-if="String(category.name) === 'null'" style="text-transform: capitalize; ">Un-process</span>
                  <span v-else style="text-transform: capitalize;">{{category.name}}</span>

                  <span>{{category.count}}</span>
                </li>
              </ul>
              <div v-else class="overlay" id="loading-box-archive">
                <div id="text" style="margin-top: 38px">
                  <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
                    <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                    <circle class="loader-svg animate" cx="50" cy="50" r="45" />
                  </svg>
                  Loading
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-12">
              <h5 class="blog__title">{{ $t("body.news.Archive") }}</h5>
              <!-- <div class="overlay" id="loading-box-archive">
                <div id="text">
                  <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
                    <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                    <circle class="loader-svg animate" cx="50" cy="50" r="45" />
                  </svg>
                  Loading
                </div>
              </div>-->
              <ul v-if="resultsTopArchive&&resultsTopArchive.length" class="category-list-archive list--reset" :style="checkSeeMoreTopArchive()">
                <div class="category-list__item" v-if="flagSeeMore === false &&resultsTopArchive.length > 5">
                  <li :id="topArchive._id" v-for="(topArchive,index) in resultsTopArchive" :key="index" v-on:click="selectAchive(topArchive._id)" style="margin-bottom: 22px;">
                    <a class="category-list__link" style="font-weight: 500;" :class="{'item-active-achive':CheckItemActiveAchive(topArchive._id)}">
                      <span v-if="index<5">{{formatDateTime(topArchive._id)}}</span>
                      <span v-if="index<5">{{topArchive.count}}</span>
                    </a>
                  </li>
                </div>
                <div class="category-list__item" v-else>
                  <li :id="topArchive._id" v-for="(topArchive,index) in resultsTopArchive" :key="index" v-on:click="selectAchive(topArchive._id)" style="margin-bottom: 22px;">
                    <a class="category-list__link" :class="{'item-active-achive':CheckItemActiveAchive(topArchive._id)}" style="font-weight: 500;">
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
              <h5 class="blog__title">{{ $t("body.news.Tags") }}</h5>
              <div id="top-tags">
                <a v-for="(tag,index) in resultsTopTags" :key="index" class="tag" style="font-weight:normal" :href="'/keyword-analytics?key='+tag._id.name">#{{tag._id.name}} ({{tag.count}})</a>
              </div>
            </div>
            <div class="col-md-6 col-lg-12">
              <div class="contact-trigger contact-trigger--style-2">
                <img class="contact-trigger__img" src="~/static/img/contact_background.png" alt="img" />
                <h4 class="contact-trigger__title" style="color:white">{{ $t("body.news.desContact1") }}</h4>
                <p class="contact-trigger__text" style="color:white">{{ $t("body.news.desContact2") }}</p>
                <a class="button button--white" href="/contacts">
                  <span>{{ $t("body.news.Contactus") }}</span>
                  <svg class="icon" viewBox="0 0 24 24" id="Isolation_Mode" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.935,16.271l2.78-2.78L0,13.466l0-3,19.7.025L16.935,7.727l2.121-2.12,3.919,3.918a3.5,3.5,0,0,1,0,4.948l-3.919,3.918Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";
import { HTTP } from "../../../static/baseAPI.js";
import dayjs from "dayjs";
export default {
  data() {
    return {
      test: 0,
      pageActive: 0,
      flagSeeMore: false,
      resultsTopTags: [],
      resultsCategory: [],
      resultsTopArchive: [],
      key: this.$route.query.key || "",
      page: parseInt(this.$route.query.page) || 1,
      category: this.$route.query.type || "",
      archive: this.$route.query.archive || "",
      objData: {},
      hasPost: true,
      arrPost: null,
      totalPost: null,
      stringData: "",
      conditionArticle: null,
      typeViewArticle: this.$route.query.category || "",
      searchKeywordPost: "",
      typeView: "",
      typeViewSelected: "------",
      buttonClearFilter: "None",
      TextSeeMoreTopArchive: "See more",

      statusSelectType: false,
      statusSelectTypeOptionPOS: false,
      statusSelectTypeOptionNEG: false,
      statusSelectTypeOptionNEU: false,
      statusSelectTypeOptionNone:false,
      loading: false,
    };
  },
  mounted() {
    HTTP.get("top-tag")
      .then((response) => {
        this.resultsTopTags = response.data;
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
      this.selectAchive(this.archive);
    this.searchDataPost(this.page);    
  },
  computed: {
    totalNews: function () {
      return Math.ceil(this.totalPost / 12);
    },
    indexPage: function () {
      return this.test;
    },
  },
  methods: {
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
    // getDataURL(name) {
    //     if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
    //         return decodeURIComponent(name[1]);
    // },
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
    formatTimeAgo(date) {
      let timeHasPassed = dayjs().diff(date, "days");
      return timeHasPassed + " day ago";
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
    formatDescription(description) {
      if (description.length > 51) {
        description = description.substring(0, 70) + "...";
      }
      return description;
    },
    seeMoreTopArchive() {
      if (this.flagSeeMore) {
        document.getElementsByClassName(
          "category-list-archive"
        )[0].scrollTop = 0;
        this.flagSeeMore = false;
        this.selectAchive(this.archive);
      } else {
        document.getElementsByClassName(
          "category-list-archive"
        )[0].scrollTop = 0;
        this.flagSeeMore = true;

        this.selectAchive(this.archive);
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
    clearFilter() {
      this.archive = "";
      this.category = "";
      this.searchKeywordPost = "";
      this.typeViewArticle = ""
      this.selectTypeView('')
      this.searchDataPost(1);
    },
    CheckItemActiveCategory(categoryName) {
      if (categoryName === this.category) {
        return true;
      } else {
        return false;
      }
    },
    CheckItemActiveAchive(AchiveID) {
      if (AchiveID === this.archive) {
        return true;
      } else {
        return false;
      }
    },
    checkPageActivate(page) {},
    selectAchive(archiveID) {
      this.archive = archiveID;
      this.loading = true;
      this.$router.push({
        query: {
          archive: this.archive,
          category: this.category,
          key: this.key,
          page: this.page,
        },
      });
      HTTP.get("top-archive", { params: { type: this.category } })
        .then((response) => {
          this.resultsTopArchive = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        })
        this.searchDataPost(this.page);
    },
    selectCategory(categoryName) {
      this.category = categoryName;
      this.archive = ''
      this.loading = true;
      this.$router.push({
        query: {
          archive: this.archive,
          category: this.category,
          key: this.key,
          page: this.page,
        },
      });
      this.selectAchive(this.archive);
    },
    selectTypeView(type) {
      this.loading = true;
      this.typeViewArticle = type;
      if (type === "POS") {
        this.typeViewSelected = "Tích cực";
        this.statusSelectTypeOptionPOS = true;
        this.statusSelectTypeOptionNEU = false;
        this.statusSelectTypeOptionNEG = false;
        this.statusSelectTypeOptionNone = false;
      }
      if (type === "NEU") {
        this.typeViewSelected = "Trung tính";
        this.statusSelectTypeOptionNEU = true;
        this.statusSelectTypeOptionNEG = false;
        this.statusSelectTypeOptionPOS = false;
        this.statusSelectTypeOptionNone = false;
      }
      if (type === "NEG") {
        this.typeViewSelected = "Tiêu cực";
        this.statusSelectTypeOptionNEG = true;
        this.statusSelectTypeOptionNEU = false;
        this.statusSelectTypeOptionPOS = false;
        this.statusSelectTypeOptionNone = false;
      }
      if (type === "") {
        this.typeViewSelected = "------";
        this.statusSelectTypeOptionNEG = false;
        this.statusSelectTypeOptionNEU = false;
        this.statusSelectTypeOptionPOS = false;
        this.statusSelectTypeOptionNone = true;
      }
      this.searchDataPost(this.page);
    },
    changePagePost(newPage) {
      this.loading = true;      
      this.$refs["container"].scrollIntoView({ behavior: "smooth" });
      this.searchDataPost(newPage);
    },
    searchDataPost(newPage) {
      this.test = newPage;
      this.page = newPage;
      this.$router.push({
        query: {
          archive: this.archive,
          category: this.typeViewArticle,
          key: this.searchKeywordPost,
          page: this.page,  
          type: this.category
        },
      });
      this.typeView = this.typeViewArticle;
      HTTP.get("get-all-news", {
        params: {
          archive: this.archive,
          type: this.category,
          key: this.searchKeywordPost,
          page: this.page,
          category: this.typeView,
        },
      })  
        .then((response) => {
          this.arrPost = response.data[0];
          this.totalPost = response.data[1];
          // this.conditionArticle = response.data[2][0];
          if (this.arrPost.length > 0) {
            this.hasPost = true;
          } else {
            this.hasPost = false;
          }
          if (
            this.searchKeywordPost != "" ||
            this.category != "" ||
            this.archive != ""
          ) {
            this.buttonClearFilter = "inline-flex";
          } else {
            this.buttonClearFilter = "none";
          }
          this.loading = false;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
<style scoped>
.category-list__link.category-list__item {
  font-weight: 500;
}

.button-seemore svg {
  transform: rotate(90deg);
  width: 14px;
  height: 14px;
}

.category-list-archive.list--reset {
  padding-right: 5px;
  transition: 0.5s;
  height: 170px;
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

.category-list__link:hover {
  cursor: pointer;
}

.category-list__link.item-active {
  color: #00997d;
}

.category-list .item-active {
  border-left: 0px solid #00997d;
  padding-left: 0px;
  color: #00997d;
}
.item-active {
  border-left: 0px solid #00997d;
  padding-left: 0px;
  color: #00997d;
}

.nice-select.form__select {
  height: 100%;
  padding-top: 5px;
}
.item-active-achive span {
  color: #00997d;
}
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