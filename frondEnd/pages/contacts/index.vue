<template>
    <div>
      <Sidebar @closeSideBar="closeSideBarFrontEnd" :showSideBar="showSideBar" />
      <Header @showSideBar="showSideBarFrontEnd" />
      <section style="width: 100%;height: 650px;" >
        <!-- <div class="container"> -->
        <picture>
          <source srcset="~/static/img/fintech11.jpg" media="(min-width: 992px)" />
          <img class="img--bg img_header" src="~/static/img/fintech11.jpg" alt="img" />
        </picture>
  
      </section>
      <section class="section contacts pb-0">
        <img class="contacts__bg" src="~/static/img/contacts-map.png" alt="map" />
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h4 class="contacts__title">{{ $t("body.contact.contact") }}</h4>
              <div class="row">
                <div class="col-lg-4">
                  <div class="contacts-item">
                    <div class="contacts-item__img">
                      <svg style="color: #003d90" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div class="contacts-item__details">
                      <a class="contacts-item__link" href="tel:+0123456789">0123456789</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="contacts-item">
                    <div class="contacts-item__img">
                      <svg class="icon" viewBox="0 0 479.058 479.058" id="mail" xmlns="http://www.w3.org/2000/svg">
                        <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 015.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                      </svg>
                    </div>
                    <div class="contacts-item__details">
                      <a class="contacts-item__link" href="mailto:contact@finsight.vn">contact@finsight.vn</a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="contacts-item">
                    <div class="contacts-item__img">
                      <svg class="icon" viewBox="0 0 512 512" id="pin" xmlns="http://www.w3.org/2000/svg">
                        <path d="M256 0C153.755 0 70.573 83.182 70.573 185.426c0 126.888 165.939 313.167 173.004 321.035 6.636 7.391 18.222 7.378 24.846 0 7.065-7.868 173.004-194.147 173.004-321.035C441.425 83.182 358.244 0 256 0zm0 469.729c-55.847-66.338-152.035-197.217-152.035-284.301 0-83.834 68.202-152.036 152.035-152.036s152.035 68.202 152.035 152.035C408.034 272.515 311.861 403.37 256 469.729z" />
                        <path d="M256 92.134c-51.442 0-93.292 41.851-93.292 93.293S204.559 278.72 256 278.72s93.291-41.851 93.291-93.293S307.441 92.134 256 92.134zm0 153.194c-33.03 0-59.9-26.871-59.9-59.901s26.871-59.901 59.9-59.901 59.9 26.871 59.9 59.901-26.871 59.901-59.9 59.901z" />
                      </svg>
                    </div>
                    <div class="contacts-item__details">
                      <span>Số 1 Đại Cồ Việt, Hai Bà Trưng , Hà Nội</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- section start-->
      <section class="section">
        <div class="container">
          <div class="row flex-column-reverse flex-lg-row" style="position: relative">
            <div id="overlay">
              <div id="text">
                <svg class="svg-container" height="32" width="32" viewBox="0 0 100 100">
                  <circle class="loader-svg bg" cx="50" cy="50" r="45" />
                  <circle class="loader-svg animate" cx="50" cy="50" r="45" />
                </svg>
                Loading
              </div>
            </div>
            <div class="col-lg-6">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14898.629479299434!2d105.8282794214234!3d21.006367283827256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac71294bf0ab%3A0xc7e2d20e5e04a9da!2zxJDhuqFpIEjhu41jIELDoWNoIEtob2EgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1686217993958!5m2!1svi!2s" style="    position: absolute;    width: 100%;    height: 100%;    top: 0px;left: 0px;border: none;" allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="col-lg-6">
              <form class="form contact-form" id="ajax-form" action="javascript:void(0);" method="post" autocomplete="off">
                <div class="row">
                  <div class="col-12">
                    <h4 class="contact-form__subtitle">{{ $t("body.contact.sendMessage") }}</h4>
                  </div>
                  <div class="col-md-6">
                    <input class="form__field" v-model="name" type="text" name="name" :placeholder="$t('body.contact.yourName')" id="name" />
                  </div>
                  <div class="col-md-6">
                    <input class="form__field" v-model="email" type="email" name="email" :placeholder="$t('body.contact.yourEmail')" id="email" />
                  </div>
                  <div class="col-md-6">
                    <input class="form__field" v-model="phone" type="tel" name="phone" :placeholder="$t('body.contact.yourPhone')" id="phone" />
                  </div>
                  <div class="col-md-6">
                    <input class="form__field" v-model="subject" type="text" name="subject" :placeholder="$t('body.contact.subject')" id="subject" />
                  </div>
                  <div class="col-12">
                    <textarea class="form__field form__message message--large" v-model="message" name="message" :placeholder="$t('body.contact.text')" id="message"></textarea>
                  </div>
                  <div class="col-4 lg-a">
                    <button class="button button--green" v-on:click="onSubmit()" type="submit">
                      <span>{{ $t("body.contact.sendMessage") }}</span>
                      <svg viewBox="0 0 150 78.6" class="icon" id="arrow" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 31.5h150v12.7H0V31.5zM112.8-.1l30.9 31.5-8.8 9L104 8.9l8.8-9zm18.1 51l-18.4 18.8 8.9 9 18.4-18.8-8.9-9z" />
                      </svg>
                    </button>
                    <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" />
                  </div>
                  <div class="col-8 lg-a" style="height: 20px">
                    <div id="hide-alert" style="width: 360px" class="col-xl-10 offset-xl-1">
                      <div class="alert alert--success alert--filled" id="success-alert" style="    display: none;    margin-top: -12px;    margin-left: -40px;    width: 364px;  ">
                        <div class="alert__icon">
                          <svg class="icon" viewBox="0 0 488.878 488.878" id="check" xmlns="http://www.w3.org/2000/svg">
                            <path d="M143.294 340.058l-92.457-92.456L0 298.439l122.009 122.008.14-.141 22.274 22.274L488.878 98.123l-51.823-51.825z" />
                          </svg>
                        </div>
                        <p id="success-text" class="alert__text"></p>
                        <span class="alert__close">
                          <svg viewBox="0 0 47.971 47.971" id="close" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                          </svg>
                        </span>
                      </div>
                      <div class="alert alert--error alert--filled" id="fail-alert" style="display: none; margin-top: 0px">
                        <div class="alert__icon">
                          <svg viewBox="0 0 47.971 47.971" id="close" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                          </svg>
                        </div>
                        <p id="fail-text" class="alert__text"></p>
                        <span class="alert__close">
                          <svg viewBox="0 0 47.971 47.971" id="close" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  
     
      <Footer />
    </div>
  </template>
  <script>
  import Snackbar from "awesome-snackbar";
  import Header from "../../components/frontend/HeaderComponent.vue";
  import Footer from "../../components/frontend/FooterComponent.vue";
  import Sidebar from "../../components/frontend/SidebarComponent.vue";
  import { HTTP } from "../../static/baseAPI.js";
  export default {
    components: {
      Header,
      Footer,
      Sidebar,
    },
    data() {
      return {
        showSideBar: false,
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      };
    },
    methods: {
      async onSubmit() {
        try {
          const token = await this.$recaptcha.getResponse();
          var data = {};
          data.email = this.email.trim();
          data.name = this.name.trim();
          data.phone = this.phone.trim();
          data.msg = this.message.trim();
          data.subject = this.subject.trim();
          data.captcha = token;
  
          console.log(token);
          HTTP.post(`post-contacts`, {
            email: this.email.trim(),
            name: this.name.trim(),
            phone: this.phone.trim(),
            msg: this.message.trim(),
            subject: this.subject.trim(),
            captcha: token,
          }).then((response) => {
            this.email = '';
            this.name = '';
            this.phone = '';
            this.message = '';
            this.subject = '';          
            new Snackbar(`Thanks for contacting us`, {
              position: "bottom-right",
              theme: "light",
              style: {
                container: [
                  ["background-color", "#1abc9c"],
                  ["border-radius", "5px"],
                ],
                message: [["color", "#fff"]],
              },
            });
          });
        } catch (error) {
          console.log("Login error:", error);
          new Snackbar(`some error in fetching the notifications`, {
            position: "bottom-right",
            theme: "light",
            style: {
              container: [
                ["background-color", "#1abc9c"],
                ["border-radius", "5px"],
              ],
              message: [["color", "#fff"]],
            },
          });
        }
      },
      onSuccess(token) {
        console.log("Succeeded:", token);
      },
      onExpired() {
        console.log("Expired");
      },
      onError(error) {
        console.log("Error happened:", error);
      },
      showSideBarFrontEnd(value) {
        this.showSideBar = value;
      },
      closeSideBarFrontEnd(value) {
        this.showSideBar = value;
      },
    },
  };
  </script>
  <style scoped>
  @import "~static/css/styles.min.css";
  @import "~/static/css/homepage.css";
  @import "~/static/css/line.css";
  /* @import "~/static/css/tailwind.css";  */
  .img_header{
    
    width: 100%; /* Adjust this as per your needs */
   height: 650px; /* Adjust this as per your needs */
  
  }
  </style>