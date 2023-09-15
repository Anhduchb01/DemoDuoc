<template>
  <footer class="page-footer footer_2">
    <img class="section--bg b0 r0" src="~/static/img/footer-bg.png" alt="bg" />
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4" style="font-size:13px">
          <div class="page-footer__logo">
            <a href="index.html">
              
              <img width="70.08" height="31"  src="/img/logo.png" alt="logo" />
            </a>
          </div>
          <div class="page-footer__details" style="font-size:14px">
            <p style="color:white">
              <strong>{{ $t("footer.location") }}:</strong>
              <span>Số 1 Đại Cồ Việt</span>
            </p>
            <p style="color:white">
              <strong>{{ $t("footer.phone") }}:</strong>
              <a href="tel:096 505 92 90">0123456789</a>
            </p>
            <p style="color:white">
              <strong>{{ $t("footer.email") }}:</strong>
              <a href="mailto:contact@oyo.co,jp">contact@finsight.vn</a>
            </p>
            <p style="color:white">
              <strong>{{ $t("footer.openningHours") }}:</strong>
              <span>9:00 AM - 6:00 PM</span>
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 top-30 top-md-0">
          <h6 class="page-footer__title title--white">{{ $t("footer.mainMenu") }}</h6>
          <ul class="page-footer__menu list--reset">
            <li>
              <a href="#">{{ $t("footer.aboutUs") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.pricingplan") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Elements") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Team") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Warehouse") }}</a>
            </li>
            <li>
              <a href="/contacts">{{ $t("footer.Contact") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Careers") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Calculator") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Sitemap") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.Services") }}</a>
            </li>
            <li>
              <a href="/contacts">{{ $t("footer.Contact") }}</a>
            </li>
            <li>
              <a href="#">{{ $t("footer.FAQ") }}</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 top-30 top-lg-0">
          <h6 class="page-footer__title title--white">{{ $t("footer.Newslatter") }}</h6>
          <form id="newslatter-ajax" class="form newslatter-form">
            <div class="fieldset">
              <input class="form form__field" type="email" id="email-news" name="email" :placeholder="$t('footer.Emailaddress')" />
              <button onclick="submitNewslatter()" class="form__submit" type="submit">
                <EmailIcon />
              </button>
            </div>
            <p class="color--gray">{{ $t("footer.StayTunedForOurLatestNews") }}</p>
          </form>
        </div>
      </div>
      <div class="row top-50 flex-column-reverse flex-sm-row">
        <div class="col-sm-6 col-lg-4 top-20 top-sm-0 text-center text-sm-left">
          <div class="page-footer__copyright">{{ $t("footer.Allrightsreserved") }}</div>
        </div>
        <div class="col-sm-6 col-lg-8 d-flex justify-content-center justify-content-sm-end justify-content-lg-between">
          <div class="page-footer__privacy d-none d-lg-block">
            <a href="#">{{ $t("footer.Termsandconditions") }}</a>
            <a href="#">{{ $t("footer.privacyPolicy") }}</a>
            <a href="#">{{ $t("footer.cookies") }}</a>
          </div>
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
  </footer>
</template>
<script>
import YoutubeIcon from "../../static/youtubeIcon.svg?inline";
import FbIcon from "../../static/fbIcon.svg?inline";
import InstIcon from "../../static/instIcon.svg?inline";
import LinkedinIcon from "../../static/linkedinIcon.svg?inline";
import TwitterIcon from "../../static/twitterIcon.svg?inline";
import EmailIcon from "../../static/fi-bs-envelope.svg?inline";
export default {
  components: {
    YoutubeIcon,
    FbIcon,
    InstIcon,
    LinkedinIcon,
    TwitterIcon,
    EmailIcon,
  },
};
</script>
<style>
.page-footer__logo img {
    height: 100px;
    width: auto;
}
</style>