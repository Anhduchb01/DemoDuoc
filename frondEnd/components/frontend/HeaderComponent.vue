<template>
  <header class="page-header_2 header-resize" :class="{ 'page-header--fixed':!view.topOfPage}">
    <div class="page-header__top d-none d-xl-block" id="test" v-if="seen">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-xl-8">
            <span>
              <EmailIcon />
              <a href="#">contact@finsight.vn</a>
            </span>
          </div>
          <div class="col-xl-4" style="text-align: right">
            <ul class="socials list--reset">
              <li class="socials__item">
                <a class="socials__link" href="#">
                  <YoutubeIcon />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="#">
                  <FbIcon />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="#">
                  <TwitterIcon />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="#">
                  <LinkedinIcon />
                </a>
              </li>
              <li class="socials__item">
                <a class="socials__link" href="#">
                  <InstIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="page-header__lower">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-8 col-md-6 col-lg-3 d-flex align-items-center">
            <!-- menu-trigger start-->

            <div class="hamburger d-none d-md-inline-block" :class="{'hamburger--white' :view.topOfPage}" @click="showSideBar()">
              <div class="hamburger-inner"></div>
            </div>
           

            <!-- menu-trigger end-->
            <div class="page-header__logo logo--white">
              <a href="/">
                <img src="/img/logo.png" style="width:105px;height:105px" alt="logo" />
              </a>
            </div>
            <div class="page-header__logo logo--dark">
              <a href="/">
                <img src="/img/logo.png"  style="width:75px;height:75px" alt="logo" />
              </a>
            </div>
          </div>
          <div class="col-lg-6 d-none d-lg-block">
            <!-- main menu start-->
            <ul class="main-menu" style="white-space: nowrap;" :class="{'main-menu--white':view.topOfPage}">
              <li id="menu-homepage" class="main-menu__item">
                <nuxt-link :to="localePath('/')">
                  <span class="main-menu__link" href="/">
                    <span>{{ $t("header.home") }}</span>
                  </span>
                </nuxt-link>
              </li>

              <li id="menu-news" class="main-menu__item">
                <nuxt-link :to="localePath('/news')">
                  <span class="main-menu__link">
                    <span>{{ $t("header.news") }}</span>
                  </span>
                </nuxt-link>
              </li>

              <!-- <li id="menu-playground" class="main-menu__item">
                <nuxt-link :to="localePath('/playground')">
                  <span class="main-menu__link">
                    <span>{{ $t("header.playground") }}</span>
                  </span>
                </nuxt-link>
              </li> -->
              

              <li id="menu-overal-analytics" class="main-menu__item">
                <nuxt-link :to="localeLocation( {name:'overall-analytics',query:{year:''}} )">
                  <span class="main-menu__link">
                    <span>{{ $t("header.overallAnalytics") }}</span>
                  </span>
                </nuxt-link>
              </li>
              <li id="menu-keyword-analytics" class="main-menu__item">
                <nuxt-link :to="localeLocation( {name:'keyword-analytics',query:{ key:''} } )">
                  <span class="main-menu__link">
                    <span>{{ $t("header.KeywordAnalytics") }}</span>
                  </span>
                </nuxt-link>
              </li>

              <li id="menu-contacts" class="main-menu__item">
                <nuxt-link :to="localePath('/contacts')">
                  <span class="main-menu__link">
                    <span>{{ $t("header.contacts") }}</span>
                  </span>
                </nuxt-link>
              </li>
            </ul>
            <!-- main menu end -->
          </div>
          <div class="col-3 col-md-5 col-lg-3 d-flex justify-content-end align-items-center">
            <div class="lang-block">
              <div class="lang-icon" style="overflow: visible;">
                <img v-if="$t('language') === 'EN'" class="image-en" src="~/static/img/gbr.png" alt="img" />
                <img v-else class="image-vn" src="~/static/img/vn.png" alt="img" />
              </div>
              <ul class="lang-select" :class="{'lang-select--white':view.topOfPage}">
                <li class="lang-select__item lang-select__item--active">
                  <span class="name-lang">{{ $t("language") }}</span>
                  <ul class="lang-select__sub-list">
                    <li>
                      <nuxt-link :to="switchLocalePath('en')">
                        <label style="padding-left: 0px" class="form__radio-label" @click="changeLanguage('EN')">
                          <span class="form__label-text text-lable-english" :class="{lang1 : language==='EN'}" style="color:white">English</span>
                        </label>
                      </nuxt-link>
                    </li>

                    <li>
                      <nuxt-link :to="switchLocalePath('vn')">
                        <label style="padding-left: 0px " class="form__radio-label" @click="changeLanguage('VN')">
                          <span class="form__label-text text-lable-japan" :class="{lang1 : language==='VN'}" style="color:white">VietNamese</span>
                        </label>
                      </nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="hamburger d-inline-block d-md-none hamburger--white" @click="showSideBar()">
              <div class="hamburger-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import YoutubeIcon from "../../static/youtubeIcon.svg?inline";
import FbIcon from "../../static/fbIcon.svg?inline";
import InstIcon from "../../static/instIcon.svg?inline";
import LinkedinIcon from "../../static/linkedinIcon.svg?inline";
import TwitterIcon from "../../static/twitterIcon.svg?inline";
import EmailIcon from "../../static/fi-bs-envelope.svg?inline";
import { mapMutations, mapGetters } from "vuex";
export default {
  props: ["scroll"],
  data() {
    return {
      view: {
        topOfPage: true,
      },
      test: true,
      seen: true,
      lang: null,
      isDarkModel:false
    };
  },
  components: {
    YoutubeIcon,
    FbIcon,
    InstIcon,
    LinkedinIcon,
    TwitterIcon,
    EmailIcon,
  },
  computed: {
    ...mapGetters(["language"]),
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    ...mapMutations(["setLanguage"]),
    changeLanguage(language) {
      if (language === "EN") {
        this.setLanguage("EN");
      } else {
        this.setLanguage("VN");
      }
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) {
          this.view.topOfPage = false;
          this.seen = false;
        }
      } else {
        if (!this.view.topOfPage) {
          this.view.topOfPage = true;
          this.seen = true;
        }
      }
    },
    showSideBar() {
      this.$emit("showSideBar", true);
       document.body.classList.add("body--static");
    },
    test123() {
      this.test = !this.test;
      alert(this.test);
    },
  },
};
</script>
<style scoped>
@import "~/static/css/homepage.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css";
@media only screen and (min-width: 1366px) {
  .header-resize {
    max-width: 1170px;
  }
}
</style>


