<template>
	<div>
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
				<h4>{{ $t("body.keyword.keywordAnalytics") }}</h4>
			</div>
			<div class="container" style="margin-top: 60px">
    <h6>{{ $t("body.keyword.KeywordSearch") }}</h6>
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
        <div  class="col-lg-8 col-xl-12 box-alert-empty top-20 left-15 right-15" v-if="boxAlertEmpty">
          <div class="col-12 col-md-4 col-xl-12 text-center">
            <div class="icon-item mb-0 top-20 bottom-20">
              <div class="icon-item__img icon-item__img--small justify-content-center">
                <img src="~/static/img/pack_3/i9.svg" alt="icon" />
              </div>
              <h6 style="color: darkgray" class="icon-item__title bottom-0">{{ $t("body.keyword.messeageSearch") }}</h6>
            </div>
          </div>
        </div>
      </div>
	  </div>
	  </div>

		<div class="container" style="padding-top: 60px;">
			<b-row class="match-height ">
			<b-col md="6" class="analysis-chart" >
				<BarChart v-if="arrSource.length > 0" :arrSource="arrSource"/>
			</b-col>
			<b-col md="6" class="analysis-chart" >
				<DonutChart v-if="totalPost > 0" :totalPost="totalPost" :numberPOS="numberPOS" :numberNEG="numberNEG" :numberNEU="numberNEU" /></b-col>
		</b-row >
		</div>
			<LineChart v-if="arrArticle.length > 0" :resultTimeline="resultTimeline"/>
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
        <!-- <h4>{{ $t("body.keyword.KeywordSearch") }}</h4> -->
		
    		<div v-if="totalPost > 0" class="container" style="padding-top: 100px;">
          <h6>Tic tức liên quan</h6>
          <div id="box-featured-news" v-if="arrArticle && arrArticle.length " class="row offset-30">
					<div class="col-lg-6 col-xl-3" v-for="result of arrArticle" :key="result._id">
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
							<div class="news-item__img">
							<img class="img--bg" :src="getAllImage(result.image_url)" alt="img" />
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
			  </div>

      </div>
	  
	  <div class="row" v-if="page>=1&&totalNews >0">
            <!-- total news <=6 -->
            <div class="col-12" v-if="totalNews <= 6">
              <ul id="box-pagination" class="pagination list--reset">
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-for="index in totalNews" :key="index" v-on:click="changePagePost(index)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == index }">
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
                <li id="1" v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 1 }">
                  <span>1</span>
                </li>
                <li v-on:click="changePagePost(2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 2 }">
                  <span>2</span>
                </li>
                <li v-on:click="changePagePost(3)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 3 }">
                  <span>3</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == totalNews }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
              <!-- page =3 -->
              <ul id="box-pagination" class="pagination list--reset" v-else-if="page==3">
                <!-- -------------------------------- -->
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 1 }">
                  <span>1</span>
                </li>
                <li v-on:click="changePagePost(2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 2 }">
                  <span>2</span>
                </li>
                <li v-on:click="changePagePost(3)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 3 }">
                  <span>3</span>
                </li>
                <li v-on:click="changePagePost(4)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 4 }">
                  <span>4</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == totalNews }">
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
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 1 }">
                  <span>1</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(page-1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (page-1)}">
                  <span>{{page-1}}</span>
                </li>
                <li v-on:click="changePagePost(page)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (page)}">
                  <span>{{page}}</span>
                </li>
                <li v-on:click="changePagePost(page+1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (page + 1) }">
                  <span>{{page+1}}</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (totalNews) }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
              <!-- page = totalNews -2  -->
              <ul id="box-pagination" class="pagination list--reset" v-else-if="page == totalNews -2">
                <!-- -------------------------------- -->
                <li v-if="page >1" v-on:click="changePagePost(page-1)" class="pagination__item pagination__item--prev">
                  <span>{{$t('body.news.Back')}}</span>
                </li>
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == 1 }">
                  <span>1</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>
                <li v-on:click="changePagePost(page-1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (page -1) }">
                  <span>{{page-1}}</span>
                </li>
                <li v-on:click="changePagePost(page)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (page) }">
                  <span>{{page}}</span>
                </li>
                <li v-on:click="changePagePost(page+1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (page +1) }">
                  <span>{{page+1}}</span>
                </li>

                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (totalNews) }">
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
                <li v-on:click="changePagePost(1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (1) }">
                  <span>1</span>
                </li>
                <li class="pagination__item item-number-page">
                  <span>...</span>
                </li>

                <li v-on:click="changePagePost(totalNews-2)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (totalNews -2) }">
                  <span>{{totalNews-2}}</span>
                </li>
                <li v-on:click="changePagePost(totalNews-1)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (totalNews - 1) }">
                  <span>{{totalNews-1}}</span>
                </li>

                <li v-on:click="changePagePost(totalNews)" class="pagination__item item-number-page" :class="{ 'pagination__item--active' : indexPage == (totalNews) }">
                  <span>{{totalNews}}</span>
                </li>
                <li v-if="page <totalNews" v-on:click="changePagePost(page+1)" class="pagination__item pagination__item--next">
                  <span>{{$t('body.news.Next')}}</span>
                </li>
              </ul>
            </div>
          </div>
		
		</section>
		<Footer />
	</div>
</template>

<script>
import { BRow, BCol, BContainer } from 'bootstrap-vue'
import Header from "../../components/frontend/HeaderComponent.vue";
import Footer from "../../components/frontend/FooterComponent.vue";
import Sidebar from "../../components/frontend/SidebarComponent.vue";
import KeySearch from "../../components/frontend/keyword-analytics/KeySearchComponent.vue";
import LineChart from "../../components/frontend/keyword-analytics/ApexLineAreaChart.vue";
import BarChart from "../../components/frontend/keyword-analytics/ApexBarChart.vue";
import DonutChart from "../../components/frontend/keyword-analytics/ApexDonutChart.vue";

import { HTTP } from "../../static/baseAPI.js";
export default {
	components: {
		BContainer,
		BRow,
		BCol,
		Header,
		Footer,
		Sidebar,
		KeySearch,
		LineChart,
		DonutChart,
		BarChart
	},
	data() {
		return {
			showSideBar: false,
			show: false,
			showTimeline: false,

			resultTimeline: [],
			key: this.$route.query.key || "",
			page: this.$route.query.page ||1,
			errors: [],
			totalPost: 0,
			numberPOS: 0,
			numberNEU: 0,
			numberNEG: 0,
			arrSource: [],
			arrArticle: [],
			boxAlertEmpty: true,
			loading :false,
		};
	},
	mounted() {
		this.getStatisticTag()
		this.getTimelineOfTag()
		this.getArticleHasTag(this.page)

	},
	computed:{
		indexPage: function () {
			return this.page;
		},
		totalNews: function () {
			return Math.ceil(this.totalPost / 8);
		},
	},
	methods: {
		getHostName(value) {
      var parser = document.createElement("a");
      parser.href = value;
      let namePage = parser.hostname;
      let removeChart = namePage.substr(0, 4);
      if (removeChart == "www.")
        namePage = namePage.substr(4, namePage.length);
      if (namePage == "waterdata.usgs.gov") namePage = "usgs.gov";
      return namePage;
    },
    formatDateTime(date) {
      let newString = date;
      newString = newString.split("/");
      let month = newString[1];
      let year = newString[0];
      if (month == "01") month = "January";
      if (month == "02") month = "February";
      if (month == "03") month = "March";
      if (month == "04") month = "April";
      if (month == "05") month = "May";
      if (month == "06") month = "June";
      if (month == "07") month = "July";
      if (month == "08") month = "August";
      if (month == "09") month = "September";
      if (month == "10") month = "October";
      if (month == "11") month = "November";
      if (month == "12") month = "December";
      return month + " " + year;
    },
    // getDataURL(name) {
    //     if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search))
    //         return decodeURIComponent(name[1]);
    // },
    getAllImage(value) {
      if (value == undefined) {
        return require("~/static/img/news1.jpg");
      }
      if (value == '') {
        return require("~/static/img/news1.jpg");
      }
      if (value == null) {
        return require("~/static/img/news1.jpg");
      }
      // let newString = "";
      // let stringImage = value.split("\n");
      // for (let index = 0; index < value.length; index++) {
      //   newString = stringImage[0];
      // }
      // if (newString == "")
      //   newString = require("~/static/img/news.jpg");
      return value;
    },
    formatTimeAgo(date) {
      let timeHasPassed = dayjs().diff(date, "days");
      return timeHasPassed + " day ago";
    },
    formatTitle(value) {
      if (value == undefined) {
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
		checkKeywordInput() {
			this.$router.push({
				query: {
					key: this.key,
					page: this.page
				},
			});
			this.getStatisticTag()
			this.getTimelineOfTag()
			this.getArticleHasTag(this.page);
		},
		searchDataPost() {
			this.$router.push({
				query: {
					key: this.key,
					page: this.page
				},
			});
			this.getArticleHasTag(this.page);
		},
		changePagePost(page){
			this.$router.push({
				query: {
					key: this.key,
					page: page
				},
			});
			this.getArticleHasTag(page);
		},

		showSideBarFrontEnd(value) {
			this.showSideBar = value;
		},
		closeSideBarFrontEnd(value) {
			this.showSideBar = value;
		},
		getArticleHasTag(page) {
			
			this.page = page
			this.test = this.page;
			HTTP.get("get-article-has-tag", { params: { key: this.key, page: this.page } })
				.then((response) => {
					this.arrArticle = response.data;

					if ((this.arrArticle.length != 0) & (this.key != "")) {
						this.boxAlertEmpty = false;
					}
          else{
            this.boxAlertEmpty = true;
          }
				})
				.catch((e) => {
					console.log(e)
					this.errors.push(e);
				});
		},
		getStatisticTag() {
			if (this.key != null || this.key != "" || this.key != undefined) {
				HTTP.get("get-statistic-tag", { params: { text: this.key } })
					.then((response) => {

						this.show = true;
						this.totalPost = response.data.totalPost
						this.numberPOS = response.data.percentPOS
						this.numberNEU = response.data.percentNEU
						this.numberNEG = response.data.percentNEG
						this.arrSource = response.data.arrSource 
					})
					.catch((e) => {
						this.errors.push(e);
					});
			}

		},
		getTimelineOfTag() {
			console.log('this key :', this.key)
			if (this.key != null || this.key != "" || this.key != undefined) {
				HTTP.get("get-timeline-of-tag", { params: { text: this.key } })
					.then((response) => {
						this.showTimeline = true;
						this.resultTimeline = response.data;
            var max = -Infinity;

            // Iterate over each array starting from index 1
            for (var i = 1; i < 4; i++) {
              var currentArray = this.resultTimeline[i];

              // Find the maximum value in the current array
              var arrayMax = Math.max(...currentArray);

              // Update the max value if the current array's maximum is greater
              if (arrayMax > max) {
                max = arrayMax;
              }
            }
            this.resultTimeline.push(max)
            console.log(max)
            console.log(Math.ceil(57 / 5))
            
					})
					.catch((e) => {
						this.errors.push(e);
					});
			}

		},
	},
}
</script>
<style scoped >
@import "~/static/css/homepage.css";
@import "~static/css/styles.min.css";
@import "~static/css/search-by-keyword.css";
</style>