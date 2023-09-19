<template>
  <div>
    <div class="body--static">
      <div class="page-wrapper">
        <Sidebar @closeSideBar="closeSideBarFrontEnd" :showSideBar="showSideBar" />
        <Header @showSideBar="showSideBarFrontEnd" v-bind:scroll="scroll" />
        <main class="main">
          <div class="front-promo">
            <div class="video-container">
              <LazyVideo :src="videoSrc" :attrs ="objectatr"  />
            </div>
            <div class="overlay">
              <p class="firstdesHeader" >{{ $t("body.home.firstdesHeader") }}</p>
              <h2 class="namedesHeader" >
                        FIN SIGHT
              </h2>
              <p class="lastdesHeader">{{ $t("body.home.desHeader") }}</p>
            </div>
          </div>

          

          <Info />
          <Viewall />
         
          <!-- <Map />
          <Service /> -->
          <Footer />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
// import Map from "../components/frontend/homepage/MapComponent.vue";
// import Service from "../components/frontend/homepage/ServiceComponent.vue";
import Info from "../components/frontend/homepage/InfoComponent.vue";
import Viewall from "../components/frontend/homepage/ViewallComponent.vue";
import Header from "../components/frontend/HeaderComponent.vue";
import Footer from "../components/frontend/FooterComponent.vue";
import Sidebar from "../components/frontend/SidebarComponent.vue";
export default {
  data() {
    return {
      showSideBar: false,
      scroll: false,
       videoSrc : require('~/static/blog.mp4'),

       objectatr : {"controls": false, "playsinline": true, "loop": true, "autoplay": true, "muted": true}
    };
  },
  components: {
    // Map,
    // Service,
    Info,
    Viewall,
    Header,
    Footer,
    Sidebar,

  },
  methods:{
    showSideBarFrontEnd(value){
      this.showSideBar = value
    },
    closeSideBarFrontEnd(value){
      this.showSideBar = value
    }
  }
};
</script>

<style >
@import "~/static/css/homepage.css";
@import "~static/css/styles.min.css";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}


.video-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding-bottom: 56.25%; /* 16:9 aspect ratio (change this value based on your video's aspect ratio) */
}

.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;

  /* background-color: rgba(255, 255, 255, 0); */
    width: auto;
    visibility: visible;
    background-image: none;
    text-align: center;
    line-height: 22px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 20px;
    margin: 0px;
    border-radius: 20px;
    padding: 20px 0px;
    color: rgb(255, 255, 255);
    text-decoration: none;
    /* white-space: nowrap; */
    height: auto;

    opacity: 1;
    /* transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: 50% 50% 0px; */
}

.text {
  color: black;
  font-weight: bold;
}
.firstdesHeader {
    /* display: inline-block; */
    visibility: visible;
    text-align: center;
    line-height: 15px;
    letter-spacing: 3px;
    font-weight: 600;
    font-size: 18px;
    border-color: rgb(255, 255, 255);
    color: rgb(67, 126, 235);
    opacity: 1;

}
.namedesHeader{

    cursor: pointer;
    /* display: inline-block; */
    visibility: visible;
    text-align: center;
    line-height: 55px;
    letter-spacing: 0px;
    font-weight: 700;
    font-size: 45px;
    border-color: rgb(67, 126, 235);
    border-style: none;
    border-radius: 0px;
    padding: 0px 5px 10px;
    color: rgb(71, 181, 255);
    text-decoration: none;
    white-space: normal;
    width: 660px;
    height: auto;
    opacity: 1;
}
.lastdesHeader{
    /* display: inline-block; */
    visibility: visible;
    text-align: center;
    line-height: 22px;
    letter-spacing: 0px;
    font-weight: 400;
    font-size: 16px;
    border-color: rgb(255, 255, 255);
    border-style: none;
    border-radius: 0px;
    padding: 5px;
    color: rgba(49, 62, 91, 0.75);
    text-decoration: none;
    white-space: normal;
    width: auto;
    height: auto;
    opacity: 1;
}

</style>
