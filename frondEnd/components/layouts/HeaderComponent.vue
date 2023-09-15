<template>
  <div class="header-container">
    <header class="header navbar navbar-expand-sm">
      <a @click="showSideBarr()" class="sidebarCollapse" data-placement="bottom" style="cursor: pointer;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </a>
      <div class="nav-logo align-self-center">
        <a class="navbar-brand" href="/">
          <img class="navbar-logo" alt="logo" src="~/static/assetsAdmin/img/logo.png" />
          <span class="navbar-brand-name">FIN
            <span style="color: #47b5ff">SIGHT</span>
          </span>
        </a>
      </div>
      <ul class="navbar-item topbar-navigation">
        <!--  BEGIN TOPBAR  -->
        <div class="topbar-nav header navbar" role="banner">
          <nav id="topbar">
            <div class="sideBar-Admin" v-show="showSideBar">
              <ul class="navbar-nav theme-brand flex-row text-center">
                <li class="nav-item theme-logo">
                  <a href="/">
                    <img src="~/static/assetsAdmin/img/logo.png" class="navbar-logo" alt="logo" />
                  </a>
                </li>
                <li class="nav-item theme-text">
                  <a href="/" class="nav-link sub-nav-link">FINSIGHT</a>
                </li>
              </ul>
            </div>
            <ul class="list-unstyled menu-categories" id="topAccordion">
              <li id="menu-admin" class="menu single-menu" :class="{ 'active' : namePage === 'admin___en' }">
                <a href="/admin" class="dropdown-toggle autodroprown">
                  <div class>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>Dashboard</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li>
              <li id="menu-crawler" class="menu single-menu" :class="{ 'active' : namePage === 'admin-crawler___en' }">
                <a href="/admin/crawler" class="dropdown-toggle">
                  <div style="display: flex" class="hover-content">
                    <svg class="svg-spider" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="26px" height="26px" style="
                        -ms-transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        transform: rotate(360deg);
                        width: 26px;
                        height: 26px;
                      " preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                      <path
                        d="M7 3v5.469l.375.312L11.406 12H8.344l-3.75-2.813l-1.188 1.626L7.656 14h3.563l-3.594 3H3v2h5.375l.25-.219l1.406-1.156c-.008.125-.031.246-.031.375c0 .176.016.352.031.531l-3.75 3.75l-.281.313V29h2v-5.563l2.563-2.562c.273.754.62 1.5 1.062 2.188C12.633 24.628 14.109 26 16 26c1.89 0 3.367-1.371 4.375-2.938a10.98 10.98 0 0 0 1.063-2.187L24 23.438V29h2v-6.406l-.281-.313l-3.75-3.75c.015-.18.031-.355.031-.531c0-.121-.023-.227-.031-.344l1.406 1.125l.281.219H29v-2h-4.656l-3.75-3h3.75l4.25-3.188l-1.188-1.624L23.656 12h-3.062l4.031-3.219L25 8.47V3h-2v4.531l-3.125 2.5c-.156-.62-.469-1.156-.875-1.625V5h-2v2.156C16.68 7.074 16.344 7 16 7s-.68.074-1 .156V5h-2v3.406c-.406.469-.719 1.004-.875 1.625L9 7.531V3zm9 6c1.117 0 2 .883 2 2s-.883 2-2 2s-2-.883-2-2s.883-2 2-2zm0 6c1.23 0 2.266.297 2.938.781C19.608 16.266 20 16.891 20 18c0 1.11-.512 2.754-1.313 4c-.8 1.246-1.82 2-2.687 2c-.867 0-1.887-.754-2.688-2c-.8-1.246-1.312-2.89-1.312-4c0-1.11.39-1.734 1.063-2.219C13.733 15.297 14.77 15 16 15z"
                        fill="#626262"
                      />
                    </svg>
                    <span class="abc" style="align-self: center">Crawler</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li>
              <li id="menu-tag" class="menu single-menu" :class="{ 'active' : namePage === 'admin-manage-tag___en' }">
                <a href="/admin/manage-tag" class="dropdown-toggle">
                  <div style="display: flex" class="hover-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-tag">
                      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                      <line x1="7" y1="7" x2="7.01" y2="7" />
                    </svg>
                    <span>Tags</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li>
              <li id="menu-classification" class="menu single-menu" :class="{ 'active' : namePage === 'admin-classification___en' }">
                <a href="/admin/classification" class="dropdown-toggle">
                  <div style="display: flex" class="hover-content">
                    <img style="width: 23px; height: 23px" class="image-logo-header logo-classification" src="~/static/assetsAdmin/img/classification.png" />
                    <span>Sentiment</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li>
              <!-- <li id="menu-sorting" class="menu single-menu" :class="{ 'active' : namePage === 'admin-sorting___en' }">
                <a href="/admin/sorting" class="dropdown-toggle">
                  <div class="hover-content">
                    <img class="image-logo-header logo-sorting" style="width: 23px; height: 23px" src="~/static/assetsAdmin/img/sorting.png" />
                    <span>Sorting</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li>
              <li id="menu-contact-us" class="menu single-menu" :class="{ 'active' : namePage === 'admin-contact-us___en' }">
                <a href="/admin/contact-us" class="dropdown-toggle">
                  <div class="hover-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard">
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    </svg>
                    <span>Contact Us</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li> -->
              <li id="menu-setting" class="menu single-menu" :class="{ 'active' : namePage === 'admin-setting___en' }">
                <a href="/admin/setting" class="dropdown-toggle">
                  <div class="hover-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu">
                      <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                      <rect x="9" y="9" width="6" height="6" />
                      <line x1="9" y1="1" x2="9" y2="4" />
                      <line x1="15" y1="1" x2="15" y2="4" />
                      <line x1="9" y1="20" x2="9" y2="23" />
                      <line x1="15" y1="20" x2="15" y2="23" />
                      <line x1="20" y1="9" x2="23" y2="9" />
                      <line x1="20" y1="14" x2="23" y2="14" />
                      <line x1="1" y1="9" x2="4" y2="9" />
                      <line x1="1" y1="14" x2="4" y2="14" />
                    </svg>
                    <span>Setting</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!--  END TOPBAR  -->
      </ul>
      <ul class="navbar-item flex-row ml-auto"></ul>
      <ul class="navbar-item flex-row nav-dropdowns">
        <li class="nav-item dropdown notification-dropdown">
          <a  href="javascript:void(0);" class="nav-link dropdown-toggle" id="notificationDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span id="num-notify" style="position: absolute;display: block;width: 19px;height: 19px;border-radius: 50%;padding: 1px;font-size: 12px;background: #bc1a1a;top: 1px;padding-top: 1px; letter-spacing: -0.5px; right: -8px;" class="badge badge-success">{{messages}}</span>
          </a>
          <div style="min-width: 20rem" class="dropdown-menu position-absolute" aria-labelledby="notificationDropdown">
            <div v-if="results.length === 0" class="notification-scroll" id="notification">
              <div style="text-align: center;">
                <span class="message">No notification here !</span>
                <svg style="enable-background:new 0 0 512.021 512.021;width: 300px;height: 150px;opacity: 50%;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" xml:space="preserve">
                  <path style="fill:#64B5F6;" d="M338.214,344.556l-64-64.107c-4.16-4.171-10.914-4.179-15.085-0.019  c-2.006,2.001-3.133,4.717-3.134,7.55v149.44c0.003,4.589,2.942,8.662,7.296,10.112c1.086,0.367,2.224,0.555,3.371,0.555  c3.357,0,6.519-1.581,8.533-4.267l64-85.333C342.376,354.244,341.958,348.31,338.214,344.556z" />
                  <path style="fill:#1976D2;" d="M291.366,320.641l-64-21.333c-5.587-1.868-11.631,1.147-13.499,6.734  c-0.732,2.19-0.734,4.558-0.005,6.749l42.667,128c1.453,4.362,5.536,7.302,10.133,7.296h0.661c4.819-0.3,8.836-3.8,9.792-8.533  l21.333-106.667C299.523,327.601,296.483,322.345,291.366,320.641z" />
                  <path style="fill:#2196F3;" d="M507.43,23.446c-3.399-2.377-7.867-2.568-11.456-0.491L90.641,257.622  c-5.096,2.955-6.832,9.482-3.877,14.578c1.306,2.253,3.391,3.95,5.861,4.771l191.573,63.872l148.907,63.829  c5.417,2.316,11.685-0.197,14.001-5.614c0.321-0.752,0.555-1.538,0.697-2.343l64-362.667  C512.531,29.965,510.825,25.829,507.43,23.446z" />
                  <g>
                    <path style="fill:#1976D2;" d="M510.011,38.38c3.441-4.781,2.355-11.447-2.426-14.889c-4.259-3.065-10.115-2.578-13.808,1.15   L215.611,318.017l80.277,27.733L510.011,38.38z" />
                    <path style="fill:#1976D2;" d="M26.065,420.246c-2.679,0.003-5.26-1.003-7.232-2.816c-5.319-4.892-10.553-9.92-15.701-15.083   c-4.171-4.165-4.176-10.922-0.011-15.093c4.165-4.171,10.922-4.176,15.093-0.011c4.949,4.949,9.984,9.792,15.083,14.485   c4.336,3.988,4.618,10.736,0.63,15.072C31.904,418.999,29.052,420.249,26.065,420.246z" />
                    <path style="fill:#1976D2;" d="M171.387,490.54c-10.278-0.033-20.527-1.098-30.592-3.179c-5.814-0.95-9.757-6.434-8.806-12.248   c0.95-5.814,6.434-9.757,12.248-8.806c0.277,0.045,0.553,0.102,0.825,0.169c8.683,1.792,17.524,2.707,26.389,2.731h0.064h4.8   c5.559-0.531,10.497,3.545,11.028,9.104c0.037,0.385,0.051,0.771,0.044,1.157c0.216,5.884-4.377,10.831-10.261,11.051h-5.568   L171.387,490.54z M94.95,470.124c-1.708,0-3.39-0.409-4.907-1.195c-10.486-5.487-20.611-11.636-30.315-18.411   c-4.727-3.515-5.709-10.197-2.194-14.925c3.355-4.511,9.634-5.644,14.354-2.59c8.937,6.286,18.272,11.987,27.947,17.067   c5.231,2.709,7.276,9.146,4.567,14.377c-1.833,3.54-5.487,5.762-9.474,5.762L94.95,470.124z" />
                    <path style="fill:#1976D2;" d="M226.235,479.105c-5.891,0.048-10.705-4.688-10.753-10.579c-0.035-4.307,2.524-8.213,6.487-9.901   c6.141-2.627,12.105-5.648,17.856-9.045c5.146-2.867,11.642-1.019,14.509,4.127c2.767,4.967,1.152,11.231-3.672,14.241   c-6.542,3.867-13.325,7.309-20.309,10.304C229.05,478.806,227.651,479.097,226.235,479.105z" />
                  </g>
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                  <g />
                </svg>
              </div>
            </div>
            <div v-else class="notification-scroll" id="notification">
              <div v-for="(results) in results" :key="results.id" class="dropdown-item" v-on:click="getNotifyDetail(results._id)">
                <div class="media server-log">
                  <svg style="width: 300px;height: 150px;opacity: 50%;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <div class="media-body">
                    <div class="data-info">
                      <h6 style="font-weight: 700;color: #0e1726;text-overflow: ellipsis;overflow: hidden;width: 230px;height: 1.2em;white-space: nowrap;" class>{{results.customerName}}</h6>
                      <h6 style="text-overflow: ellipsis;overflow: hidden; width: 230px;height: 1.2em;white-space: nowrap;" class>{{results.customerSub}}</h6>
                      <p class>{{CompareDateNotify(results.timeCreateContacts)}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a v-if="check" class="footer-notify" href="/">
              <div class="see-more-notify">
                <span>View all messages</span>
                <svg style="width: 17px;height: 17px;margin-right: 0px;color: #05988a;fill: none;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevrons-down">
                  <polyline points="7 13 12 18 17 13" />
                  <polyline points="7 6 12 11 17 6" />
                </svg>
              </div>
            </a>
          </div>
        </li>
        <li class="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
          <a href="javascript:void(0);" class="nav-link dropdown-toggle user" id="user-profile-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <div class="media">
              <img src="~/static/assetsAdmin/img/admin.jpg" class="img-fluid" alt="admin-profile" />
            </div>
          </a>
          <div class="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
            <div class="user-profile-section">
              <div class="media mx-auto">
                <div class="media-body">
                  <h5 id="check-login">Admin</h5>
                  <p>Administrator</p>
                </div>
              </div>
            </div>
            <div class="dropdown-item">
              <a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <span>Profile</span>
              </a>
            </div>
            <div class="dropdown-item" style="cursor: pointer">
              <a v-on:click="deleteCookie('token'),deleteCookie('username')">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span>Log out</span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
import moment from "moment";
import { HTTP } from "~/static/baseAPI.js";
export default {
  data() {
    return {
      results: [],
      namePage1: this.$route.name,
      messages: 0,
      check: false,
    };
  },
  props: {
    showSideBar: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    getNotifyDetail(id){
      window.location.href = "/admin/contact-us?id=" + id;
    },
    CompareDateNotify(date) {
      var today = moment().format("YYYY/MM/DD");
      if (moment(date, "YYYY/MM/DD").isBefore(today)) {
        return date;
      } else {
        return moment(date, "YYYY/MM/DD h:mm:ss").fromNow();
      }
    },
    showSideBarr() {
      this.$emit("showSideBar", true);
      document.body.classList.add(
        "alt-menu",
        "topbar-closed",
        "sbar-open",
        "sidebar-noneoverflow"
      );
    },
    deleteCookie(name) {
      document.cookie =
        name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
      window.location.href = "/admin/login";
    },
    LoadNotify() {
      HTTP.get("contact-notification")
        .then((response) => {
          this.results = response.data;
          if (this.results === 0) {
            this.check = false;
          } else {
            if (this.results.length < 5) {
              this.messages = this.results.length;              
              this.check = false;
            } else {
              this.messages = this.results.length;
              this.check = true;
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
       
    },
  },
  computed: {
    namePage: function () {
      return this.namePage1;
    },
  },
  created() {
    let getcorkThemeObject = localStorage.getItem("theme");
  }, 
  mounted() {   
    // this.$root.$on("LoadNotify", () => {      
    //   this.LoadNotify();
    // })  
    // this.LoadNotify()
    let checkLogin = this.$cookies.get("username");
    if (checkLogin == null) {
      window.location.href = "/admin/login";
    }
  },
};
</script>
<style scoped>
@media (max-width: 1199px) {
  .dark.topbar-closed .topbar-nav {
    left: 0 !important;
    width: 255px;
  }
  body.dark .topbar-nav.header nav#topbar ul.menu-categories {
    display: block !important;
  }
}
@media (max-width: 1519px) {
  /* body.dark .topbar-nav.header nav#topbar ul.menu-categories {
    display: none;
  } */
  .navbar {
    /* padding: 10px 0 10px 0; */
    margin: 0 16px;
  }
  header.header.navbar.navbar-expand-sm {
    padding: 4px 0 4px 16px;
    margin: 0 16px;
  }
  .sideBar-Admin .topbar-nav.header.navbar {
    width: 255px;
    left: 0;
  }
  .sideBar-Admin {
    display: block !important;
  }
  .image-logo-header.logo-sorting,
  .image-logo-header.logo-classification {
    margin-right: 18px;
  }
  .image-logo-header.logo-sorting {
    filter: opacity(0.5);
  }
}
@media (min-width: 1520px) {
  body.dark .topbar-nav.header {
    left: 0 !important;
  }
  header.header.navbar.navbar-expand-sm {
    padding: 4px 0px;
    background: transparent;
    margin: 0px 32px;
  }
  .topbar-nav.header nav#topbar ul.menu-categories li.menu a > div span {
    font-weight: 600 !important;
  }
  body.dark .navbar .nav-logo a.navbar-brand .navbar-brand-name {
    font-weight: 700 !important;
  }
}
body.dark span.message{
  color: white;
}
.dropdown-toggle::after {
  display: none !important;
}
.navbar-brand {
  margin-right: 0px !important;
}
.sideBar-Admin {
  display: none;
}
@media (min-width: 1200px) {
  body.dark .topbar-nav.header nav#topbar ul.menu-categories {
    padding: 0;
  }
  body.dark .topbar-nav.header {
    left: 311px;
    height: 67px!important;
  }
  body.dark .topbar-nav.header nav#topbar{
    height: 67px!important;
  }
  body.dark .nav-logo.align-self-center{
    display: block;
  }
  body.dark header.header.navbar.navbar-expand-sm {
    height: 67px;
  }
  body.dark .topbar-nav.header nav#topbar ul.menu-categories li.menu{
    margin-top: 6px;
  }
}
</style>