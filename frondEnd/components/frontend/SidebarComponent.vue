<template>
  <div class="menu-dropdown" :class="{'menu-dropdown--active' :showSideBar}">
    <div class="menu-dropdown__inner" data-value="start">
      <div class="screen screen--start">
        <div class="menu-dropdown__close button-close-sidebar" @click="closeSideBar">
          <CloseIcon />
        </div>
        <div class="d-block bottom-20">
          <div class="screen__item screen--trigger menu-homepage" data-category="screen-one">
            <a style="text-transform: uppercase" class="screen__link" href="/">{{ $t("sidebar.home") }}</a>
          </div>
          <div class="screen__item screen--trigger menu-news" data-category="screen-one">
            <a style="text-transform: uppercase" class="screen__link" href="/news/">{{ $t("sidebar.news") }}</a>
          </div>
          <div class="screen__item screen--trigger menu-overall-analytics" data-category="screen-one">
            <a style="text-transform: uppercase" class="screen__link" href="/overall-analytics/?key=&page=1">{{ $t("sidebar.overallAnalytics") }}</a>
          </div>
          <div class="screen__item screen--trigger menu-keyword-analytics" data-category="screen-one">
            <a style="text-transform: uppercase" class="screen__link" href="/keyword-analytics/?key=">{{ $t("sidebar.KeywordAnalytics") }}</a>
          </div>
          <div class="screen__item screen--trigger menu-contacts" data-category="screen-one">
            <a style="text-transform: uppercase" class="screen__link" href="/contacts">{{ $t("sidebar.contacts") }}</a>
          </div>
        </div>
        <div class="menu-dropdown__block top-50">
          <span class="block__title">{{ $t("footer.email") }}</span>
          <a class="screen__link" href="contact@oyo.co,jp">contact@oyo.co.jp</a>
        </div>
        <div class="menu-dropdown__block top-20">
          <span class="block__title">{{ $t("footer.phone") }}</span>
          <a class="screen__link" href="tel:0123456789">0123456789</a>
        </div>
        <div class="menu-dropdown__block">
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

        <div class="creen__item screen__item__language screen--trigger d-flex top-50" data-category="screen-six">
          <div class="lang-icon">
            <img v-if="$t('language') === 'EN'" class="img--contain image-en-sidebar" src="~/static/img/gbr.png" alt="img" />
            <img v-else class="img--contain image-jp-sidebar" src="~/static/img/vn.png" alt="img" />
          </div>
          <ul class="lang-select lang-select--white">
            <li class="lang-select__item lang-select__item--active">
              <span class="name-lang">{{ $t("language") }}</span>
              <ul class="lang-select__sub-list">
                <li>
                  <nuxt-link :to="switchLocalePath('en')">
                    <label style="padding-left: 0px" class="form__radio-label">
                      <span class="form__label-text text-lable-english">English</span>
                    </label>
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link :to="switchLocalePath('vn')">
                    <label style="padding-left: 0px" class="form__radio-label">
                      <span class="form__label-text text-lable-vn">VietNamese</span>
                      <input class="form__input-radio radio-btn-language" type="radio" value="languagevn" name="language" id="languagevn" />
                    </label>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <nav class="box-click-close-sidebar" @click="closeSideBar()"></nav>
  </div>
</template>
<style>
@import "~/static/css/homepage.css";
</style>
<script>
import CloseIcon from "../../static/closeIcon.svg?inline";
import YoutubeIcon from "../../static/youtubeIcon.svg?inline";
import FbIcon from "../../static/fbIcon.svg?inline";
import InstIcon from "../../static/instIcon.svg?inline";
import LinkedinIcon from "../../static/linkedinIcon.svg?inline";
import TwitterIcon from "../../static/twitterIcon.svg?inline";
import ChevronrightIcon from "../../static/chevronrightIcon.svg?inline";
import { CollapseTransition } from "@ivanv/vue-collapse-transition";

export default {
  props: {
    showSideBar: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  components: {
    CloseIcon,
    YoutubeIcon,
    FbIcon,
    InstIcon,
    LinkedinIcon,
    TwitterIcon,
    ChevronrightIcon,
    CollapseTransition,
  },
  methods: {
    closeSideBar() {
      this.$emit("closeSideBar", false);
    },
    checkShowSideBar() {
      this.show = this.showSideBar;
    },
  },  
};
</script>
<style scoped>
</style>


  