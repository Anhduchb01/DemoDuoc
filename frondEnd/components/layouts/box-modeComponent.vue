<template>
  <div class="page-header">
    <nav class="breadcrumb-one" aria-label="breadcrumb">
      <div class="title">
        <h3>
          {{tittle}}        
        </h3>
      </div>
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="../admin">Dashboard</a>
        </li>
        <li v-if="tittle != 'Dashboard'" class="breadcrumb-item active" aria-current="page">
          <a href="javascript:void(0);">{{tittle}}</a>
        </li>
      </ol>
    </nav>
    <div class="toggle-switch">
      <label class="switch s-icons s-outline s-outline-secondary">
        <input type="checkbox" v-model="modeLight" @change="onChange()" class="theme-shifter" />
        <span class="slider round">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </span>
      </label>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      namePage1: this.$route.name,
      modeLight: true,
      corkThemeObject: {},
      checkModel: null,
      
    };
  },
  created() {
    var layoutName = "Horizontal Light Menu";

    var settingsObject = {
      admin: "Cork Admin Template",
      settings: {
        layout: {
          name: layoutName,
          toggle: true,
          darkMode: false,
          boxed: true,
          logo: {
            darkLogo: require('../../static/assetsAdmin/backend/dark/assets/img/logo-w-black.svg'),
            lightLogo: require('../../static/assetsAdmin/img/logo-w-black.svg')
          },
        },
      },
      reset: false,
    };
    if (settingsObject.reset) {
      localStorage.clear();
    }

    if (localStorage.length === 0) {
      this.corkThemeObject = settingsObject;
    } else {
      let getcorkThemeObject = localStorage.getItem("theme");
      let getParseObject = JSON.parse(getcorkThemeObject);
      let ParsedObject = getParseObject;

      if (getcorkThemeObject !== null) {
        if (ParsedObject.admin === "Cork Admin Template") {
          if (ParsedObject.settings.layout.name === layoutName) {
            this.corkThemeObject = ParsedObject;
          } else {
            this.corkThemeObject = settingsObject;
          }
        } else {
          if (ParsedObject.admin === undefined) {
            this.corkThemeObject = settingsObject;
          }
        }
      } else {
        this.corkThemeObject = settingsObject;
      }
    }
    this.modeLight = !this.corkThemeObject.settings.layout.darkMode;
    this.showLayout();
  },
  methods: {
    
    showLayout() {
      if (this.corkThemeObject.settings.layout.darkMode) {
        localStorage.setItem("dark","dark")
        localStorage.setItem("theme", JSON.stringify(this.corkThemeObject));
        var getcorkThemeObject = localStorage.getItem("theme");        
        var getParseObject = JSON.parse(getcorkThemeObject);

        if (getParseObject.settings.layout.darkMode) {
          let ifStarterKit = document.body.getAttribute("page") === "starter-pack" ? true : false;
          document.body.classList.add("dark");
        }
      } else {
         localStorage.setItem("dark",'light')
        localStorage.setItem("theme", JSON.stringify(this.corkThemeObject));
        var getcorkThemeObject = localStorage.getItem("theme");
        var getParseObject = JSON.parse(getcorkThemeObject);
        if (!getParseObject.settings.layout.darkMode) {
          let ifStarterKit = document.body.getAttribute("page") === "starter-pack"  ? true  : false;
          document.body.classList.remove("dark");
        }
      }
    },
    onChange() {
      this.corkThemeObject.settings.layout.darkMode =
        !this.corkThemeObject.settings.layout.darkMode;
      this.showLayout();
      
    },
  },
  computed: {    
    tittle: function () {
      if (this.namePage1 === "admin___en") {
        return "Dashboard";
      }
      if (this.namePage1 === "admin-crawler___en") {
        return "Crawler";
      }
      if (this.namePage1 === "admin-rss-crawl___en") {
        return "RSS Fetcher";
      }
      if (this.namePage1 === "admin-manage-tag___en") {
        return "Tag";
      }
      if (this.namePage1 === "admin-classification___en") {
        return "Sentiment";
      }
      if (this.namePage1 === "admin-sorting___en") {
        return "Sorting";
      }
      if (this.namePage1 === "admin-contact-us___en") {
        return "Contact Us";
      }
      if (this.namePage1 === "admin-setting___en") {
        return "Setting";
      }
    },
  },
};
</script>
<style scoped>
.page-header-home {
  justify-content: space-between;
  display: flex;
  padding: 0;
  margin-bottom: 16px;
  margin-top: 16px;
}
</style>