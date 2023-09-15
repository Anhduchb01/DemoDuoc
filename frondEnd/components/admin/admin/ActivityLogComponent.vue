<template>
  <div class="widget-content">
    <div class="w-shadow-top"></div>

    <vue-custom-scrollbar class="scroll-area">
      <!-- <div id="timeline-log" class="timeline-line">
                                
      </div>-->
      <div id="timeline-log" class="timeline-line">
        <div v-for="result of results" :key="result._id">
          <div v-if="result.status === 'Create'" class="item-timeline timeline-new">
            <div class="t-dot">
              <div class="t-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style=" -ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg); " preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path d="M21.29 16.71l1.42-1.42l-3.21-3.18l-3-.85l1.91-.26l4.19-3.2l-1.2-1.6l-3.81 2.85l-2.68.45l3.2-3.19L17 1.76l-2 .48l.86 3.45l-1.1 1.14a3 3 0 0 0-5.52 0L8.11 5.69L9 2.24l-2-.48l-1.11 4.55l3.2 3.19l-2.69-.45L2.6 6.2L1.4 7.8L5.6 11l1.86.31l-3 .85l-3.17 3.13l1.42 1.42l2.79-2.82l2.37-.67L4 16.54V22h2v-4.54l1.56-1.34a4.5 4.5 0 0 0 8.88 0L18 17.46V22h2v-5.46l-3.87-3.32l2.37.67z" fill="white" />
                </svg>
              </div>
            </div>
            <div class="t-content">
              <div class="t-uppercontent data-log">
                <h5>{{ result.message }}</h5>
                <h5>{{ result.page }}</h5>
              </div>
              <p>{{ result.timelog }}</p>
            </div>
          </div>
          <!-- Success  -->
          <div v-if="result.status === 'Success'" class="item-timeline timeline-new">
            <div class="t-dot">
              <div class="t-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
            <div class="t-content">
              <div class="t-uppercontent data-log">
                <h5>{{ result.message }}</h5>
                <h5>{{ result.page }}</h5>
              </div>
              <p>{{ result.timelog }}</p>
            </div>
          </div>
          <!-- Delete -->
          <div v-if="result.status === 'Delete'" class="item-timeline timeline-new">
            <div class="t-dot">
              <div class="t-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
                  <polyline points="3 6 5 6 21 6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </div>
            </div>
            <div class="t-content">
              <div class="t-uppercontent data-log">
                <h5>{{ result.message }}</h5>
              </div>
              <p>{{ result.timelog }}</p>
            </div>
          </div>
          <!-- Error -->
          <div v-if="result.status === 'Error'" class="item-timeline timeline-new">
            <div class="t-dot">
              <div class="t-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-octagon">
                  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
            </div>
            <div class="t-content">
              <div class="t-uppercontent data-log">
                <h5>Crawler Error :</h5>
                <h5>{{ result.page }}</h5>
              </div>
              <p>{{ result.timelog }}</p>
            </div>

            <div class="td-content" style="align-self: center">
              <a href="javascript:void(0);" @click="showError(result.message)" class="text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="ps__rail-x" style="left: 0px; bottom: 0px">
        <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px"></div>
      </div>
      <div class="ps__rail-y" style="top: 0px; height: 332px; right: 0px">
        <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 239px"></div>
      </div>
    </vue-custom-scrollbar>

    <div class="w-shadow-bottom"></div>
  </div>
</template>

<script>
import vueCustomScrollbar from "vue-custom-scrollbar";
import "vue-custom-scrollbar/dist/vueScrollbar.css";
import { HTTP } from "../../../static/baseAPI.js";;
export default {
  components: {
    vueCustomScrollbar,
  },
  data() {
    return {
      results: [],
      result1: [],
    };
  },
  mounted() {
    HTTP.get(`get-log`).then((response) => {
      this.results = response.data;
      // this.result1 = this.result.message.toString().replace(/[()`'"]+/g, '');
      // this.result1 = this.result1.replace(/\n/g, " ");
    });
  },
  methods: {
    showError(msg) {
      this.$swal({
        icon: "error",
        title: "Error",
        text: msg,
        padding: "2em",
      });
    },
  },
};
</script>
<style scoped>
.scroll-area {
  height: 332px;
  position: relative;
  padding: 15px 12px 0 12px;
}
</style>
