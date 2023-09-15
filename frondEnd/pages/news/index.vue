<template>
  <div class="page-wrapper">
    <Sidebar @closeSideBar="closeSideBarFrontEnd" :showSideBar="showSideBar" />
    <Header @showSideBar="showSideBarFrontEnd" />
    <main class="main" v-if="id===''||id===null">
      <client-only>
        <TopAllNews />
        <MainAllNews />
      </client-only>
    </main>
    <main class="main" v-else>
      <client-only>
        <TopDetailNew />
        <MainDetailNew />
      </client-only>
    </main>
    <Footer />
  </div>
</template>
<script>
import MainDetailNew from "../../components/frontend/detail-new/MainDetailNewComponent.vue";
import TopDetailNew from "../../components/frontend/detail-new/TopDetailNewComponent.vue";
import MainAllNews from "../../components/frontend/allnews/MainAllNewsComponent.vue";
import TopAllNews from "../../components/frontend/allnews/TopAllNewsComponent.vue";
import Header from "../../components/frontend/HeaderComponent.vue";
import Sidebar from "../../components/frontend/SidebarComponent.vue";
import Footer from "../../components/frontend/FooterComponent.vue";
export default {
  components: {
    MainAllNews,
    TopAllNews,
    Header,
    Footer,
    Sidebar,
    MainDetailNew,
    TopDetailNew,
  },
  data() {
    return {
      id: this.$route.query.id || "",
      showSideBar: false,
    };
  },
  methods: {
    showSideBarFrontEnd(value) {
      this.showSideBar = value;
    },
    closeSideBarFrontEnd(value) {
      this.showSideBar = value;
    },
  },
  mounted() {
    this.$watch(
      () => this.$route.query,
      (toQuerys, previousQuerys) => {
        this.id = this.$route.query.id || "";
      }
    );
  },
};
</script>
<style >
@import "~static/css/styles.min.css";
@import "~/static/css/homepage.css";
</style>