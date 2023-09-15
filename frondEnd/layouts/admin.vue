<template>
  <div style="overflow-x: hidden" class="alt-menu sidebar-noneoverflow">
    <!-- <div id="load_screen">
      <div class="loader">
        <div class="loader-content">
          <div class="spinner-grow align-self-center"></div>
        </div>
      </div>
    </div>-->   
    <client-only> 
      
      <Header :showSideBar="showSideBar" @showSideBar ="showSideBarAdmin" />     
      <div class="main-container" id="container">
        <div v-on:click="closeSideBar()" class="overlay" :class="{'show' : showSideBar}"></div>       
        <div class="search-overlay"></div>
        <div id="content" class="main-content">
          <div class="layout-px-spacing">
            <BoxMode />
            <main>
              <nuxt />
            </main>
          </div>
        </div>
        <Footer />
      </div>   
    </client-only>
  </div>
</template>
<script>
import Header from "~/components/layouts/HeaderComponent.vue";
import Footer from "~/components/layouts/FooterComponent.vue";
import BoxMode from "~/components/layouts/box-modeComponent.vue";
export default {
  data() {
    return {
      showSideBar: false
    };
  },
  components: {
    Header,
    Footer,
    BoxMode,
  },
  methods:{
    showSideBarAdmin(value){
      this.showSideBar = value
    },
    closeSideBar(){
      document.body.classList.remove('alt-menu', 'topbar-closed','sbar-open', 'sidebar-noneoverflow')
      this.showSideBar = false
    }
  }
};
</script>

<style  scoped>
/* .overlay.show{
  width: calc(100% - 250px);
  min-height: 100%;
  margin-left: 250px;
} */
@import "~/static/assetsAdmin/css/vm--modal.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css";
@import "~/static/assetsAdmin/css/main.css";
@import "~/static/css/login.css";
@import "~/static/assetsAdmin/css/structure.css";
@import "~/static/assetsAdmin/css/monokai-sublime.css";
@import "~/static/assetsAdmin/css/perfect-scrollbar.css";
@import "~/static/assetsAdmin/css/theme-checkbox-radio.css";
@import "~/static/assetsAdmin/css/admin.css";
@import "~/static/assetsAdmin/backend/assets/css/loader.css";
@import "https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700&display=swap";
@import "~/static/assetsAdmin/backend/plugins/jquery-ui/jquery-ui.min.css";
@import "~/static/assetsAdmin/backend/assets/css/common.css";
@import "~/static/assetsAdmin/backend/assets/css/apps/mailbox.css";
@import "~/static/assetsAdmin/backend/plugins/apex/apexcharts.css";
@import "~/static/assetsAdmin/backend/assets/css/dashboard/dash_1.css";
@import "~/static/assetsAdmin/backend/assets/css/dashboard/dash_2.css";
@import "~/static/assetsAdmin/backend/assets/css/forms/switches.css";
@import "~/static/assetsAdmin/backend/assets/css/scrollspyNav.css";
@import "~/static/assetsAdmin/backend/assets/css/components/custom-modal.css";
@import "~/static/assetsAdmin//backend/plugins/table/datatable/datatables.css";
@import "~/static/assetsAdmin/backend/assets/css/forms/theme-checkbox-radio.css";
@import "~/static/assetsAdmin/backend/plugins/table/datatable/dt-global_style.css";
@import "~/static/assetsAdmin/backend/plugins/table/datatable/custom_dt_custom.css";
@import "~/static/assetsAdmin/backend/plugins/sweetalerts/sweetalert2.min.css";
@import "~/static/assetsAdmin/backend/plugins/sweetalerts/sweetalert.css";
@import "~/static/assetsAdmin/backend/assets/css/components/custom-sweetalert.css";
@import "~/static/assetsAdmin/backend/plugins/jquery-step/jquery.steps.css";
@import "~/static/assetsAdmin/backend/assets/css/apps/contacts.css";
@import "~/static/assetsAdmin/backend/assets/css/elements/tooltip.css";
@import "~/static/assetsAdmin/backend/assets/css/apps/invoice-list.css";
@import "~/static/assetsAdmin/backend/plugins/notification/snackbar/snackbar.min.css";
@import "~/static/assetsAdmin/backend/plugins/autocomplete/autocomplete.css";
@import "~/static/assetsAdmin/backend/assets/css/apps/notes.css";
@import "~/static/assetsAdmin/backend/plugins/editors/quill/quill.snow.css";
@import "~/static/assetsAdmin/backend/assets/css/apps/scrumboard.css";
@import "~/static/assetsAdmin/backend/assets/css/forms/theme-checkbox-radio.css";
@import "~/static/assetsAdmin/backend/plugins/animate/animate.css";
@import "~/static/assetsAdmin/backend/assets/css/elements/custom-pagination.css";
@import "~/static/assetsAdmin/backend/assets/css/components/tabs-accordian/custom-tabs.css";
@import "~/static/assetsAdmin/backend/plugins/tooltip-selection-text/TextTip.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/ion-rangeslider/2.3.1/css/ion.rangeSlider.min.css";
@import "~/static/assetsAdmin/backend/assets/css/classification.css";
@import "~/static/assetsAdmin/backend/assets/css/dashboard.css";
@import "~/static/assetsAdmin/backend/assets/css/crawler.css";
@import "~/static/assetsAdmin/backend/assets/css/tag.css";
@import "~/static/assetsAdmin/backend/assets/css/pages/error/style-400.css";
@import "~/static/assetsAdmin/backend/assets/css/rss-fetcher.css";
@import "~/static/assetsAdmin/backend/assets/css/sorting.css";

/* Dark  */

@import "~/static/assetsAdmin/backend/dark/assets/css/plugins.css";
@import "~/static/assetsAdmin/backend/dark/plugins/jquery-ui/jquery-ui.min.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/admin.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/common.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/apps/mailbox.css";
@import "~/static/assetsAdmin/backend/dark/plugins/apex/apexcharts.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/dashboard/dash_1.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/dashboard/dash_2.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/forms/switches.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/scrollspyNav.css";

@import "~/static/assetsAdmin/backend/dark/assets/css/components/custom-modal.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/forms/theme-checkbox-radio.css";
@import "~/static/assetsAdmin/backend/dark/plugins/sweetalerts/sweetalert2.min.css";
@import "~/static/assetsAdmin/backend/dark/plugins/sweetalerts/sweetalert.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/components/custom-sweetalert.css";
@import "~/static/assetsAdmin/backend/dark/plugins/jquery-step/jquery.steps.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/apps/contacts.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/elements/tooltip.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/apps/invoice-list.css";

@import "~/static/assetsAdmin/backend/dark/plugins/notification/snackbar/snackbar.min.css";
@import "~/static/assetsAdmin/backend/dark/plugins/autocomplete/autocomplete.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/apps/notes.css";
@import "~/static/assetsAdmin/backend/dark/plugins/editors/quill/quill.snow.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/apps/scrumboard.css";
@import "~/static/assetsAdmin/backend/dark/plugins/animate/animate.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/elements/custom-pagination.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/components/tabs-accordian/custom-tabs.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/classification.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/dashboard.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/crawler.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/rss-fetcher.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/sorting.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/tag.css";
@import "~/static/assetsAdmin/backend/dark/assets/css/pages/error/style-400.css";

@import "~/static/assetsAdmin/backend/dark/bootstrap/css/bootstrap.min.css";

@import "~/static/assetsAdmin/css/bootstrap.min.css";
</style>

