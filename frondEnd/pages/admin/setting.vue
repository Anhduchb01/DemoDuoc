<template>
  <div class="row layout-top-spacing">
    <div id="content" class="main-content">
      <div style="padding: 0px 16px !important;" class="layout-px-spacing">
        <div class="action-btn layout-top-spacing mb-3">
          <button v-on:click="clearAllData()" class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg> Clear All Data Post
          </button>
        </div>
        <!-- Modal -->
        <div class="row scrumboard">
          <div class="col-lg-12 layout-spacing pb-0">
            <div class="widget widget-content-area br-4">
              <div style="padding: 20px !important;" class="widget-one">
                <h6>Clear All Data Post</h6>

                <p class="mb-0 mt-3" style="color: #888ea8;">
                  Remove All Data Post On
                  Database
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="action-btn layout-top-spacing mb-3">
          <button v-on:click="clearAllLog()" class="btn btn-danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2">
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg> Clear All Data Log
          </button>
        </div>

        <!-- Modal -->

        <div class="row scrumboard">
          <div class="col-lg-12 layout-spacing">
            <div class="widget widget-content-area br-4">
              <div style="padding: 20px !important;" class="widget-one">
                <h6>Clear All Data Log</h6>

                <p class="mb-0 mt-3" style="color: #888ea8;">Remove All Data Log On Database</p>
              </div>
            </div>
          </div>
        </div>
        <input v-model="dataInput" id="number-article-query" type="number" name="txt" style="width: 200px;" placeholder="Max 8 Article" class="form-control" />
        <div class="action-btn layout-top-spacing mb-3">
          <button style="margin-top: 10px;" v-on:click="queryData()" class="btn btn-danger">Clear Tag</button>
        </div>
        <div class="action-btn layout-top-spacing mb-3">
          <button style="margin-top: 10px;" onclick="queryDataClassification()" class="btn btn-danger">Clear ArticleClassification</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../static/baseAPI.js";
import Snackbar from "awesome-snackbar";
export default {
  layout: "admin",
  data() {
    return {
      dataInput: null,
    };
  },
  methods: {
    queryData() {
      // HTTP.get("query-fix-data", { params: { number: this.dataInput } })
      //   .then((response) => {})
      //   .catch((e) => {
      //     this.errors.push(e);
      //   });
      console.log('Data')
    },
    queryDataClassification() {
      // HTTP.get("query-fix-data-classification", {
      //   params: { number: this.dataInput },
      // })
      //   .then((response) => {})
      //   .catch((e) => {
      //     this.errors.push(e);
      //   });
      console.log('Data Classification')
    },
    clearAllData() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Clear Data Post",
        padding: "2em",
      }).then((result) => {
        if (result.value) {
          if (result.value === true) {
            console.log('remove all post')
            this.removeAllPost();
          }
        }
      });
    },
    clearAllLog() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Clear Data Log",
        padding: "2em",
      }).then((result) => {
        if (result.value) {
          if (result.value === true) {
            this.removeAllLog();
          }
        }
      });
    },
    removeAllPost() {
      console.log('remove function')
      var arrayAddress = [];
      var checkboxes = document.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      for (var i = 0; i < checkboxes.length; i++) {
        arrayAddress.push(checkboxes[i].value);
      }
      HTTP.delete("deleteall", { params: { arrayAddress: arrayAddress } })
        .then((response) => {
          new Snackbar(`Your file has been deleted`, {
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
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    removeAllLog() {
      HTTP.get("delete-all-log", { params: { arrayAddress: arrayAddress } })
        .then((response) => {
          new Snackbar(`Your file has been deleted`, {
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
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>