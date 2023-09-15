<template>
  <div class="classification-component">
    <div class="row">
      <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing" style="padding-bottom: 30px;">
        <Models />
      </div>
      <div class="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing" style="padding-bottom: 30px;">
        <TotalArticles :results="results" :valuePOS="valuePOS" :valueNEG="valueNEG" :valueNEU="valueNEU" :valueEmpty="valueEmpty" :error="error" :totalPost="totalPost" :totalArticleVerify="totalArticleVerify" />
      </div>
    </div>
    <ListArticle :listModelBaseOrigin="listModelBaseOrigin" :listModelCreateOrigin="listModelCreateOrigin" :results="results" :valuePOS="valuePOS" :valueNEG="valueNEG" :valueNEU="valueNEU"  :valueEmpty="valueEmpty" :error="error" :totalPost="totalPost" :totalArticleVerify="totalArticleVerify" />

    <div class="modal fade" id="modal-create-model" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div class="compose-box">
              <div class="compose-content">
                <div class="row mb-4">
                  <div class="col-md-12">
                    <h5 style="font-weight: bold;color: #4361ee !important;" class="modal-title text-center">Create model</h5>
                  </div>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="d-flex mb-4 mail-to">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type">
                          <polyline points="4 7 4 4 20 4 20 7" />
                          <line x1="9" y1="20" x2="15" y2="20" />
                          <line x1="12" y1="4" x2="12" y2="20" />
                        </svg>
                        <div class="w-100">
                          <input id="model-name-create" placeholder="Model name" class="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="d-flex mb-4 mail-to">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <div>
                          <select id="model-parent" class="placeholder js-states form-control">
                            <option>Choose...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button onclick="createModel($('#model-name-create').val())" id="btn-save-modal-create" class="btn btn-primary float-left">
              <svg style="display:none" id="icon-loadding-create-model" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg> Create
            </button>
            <button class="btn" data-dismiss="modal">
              <i class="flaticon-delete-1"></i> Discard
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="modal-delete-model" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div class="compose-box">
              <div class="compose-content">
                <div class="row mb-4">
                  <div class="col-md-12">
                    <h5 style="font-weight: bold;color: #4361ee !important;" class="modal-title text-center">Delete model</h5>
                  </div>
                </div>
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <div style="font-size: 1.2rem; font-weight: 500;">Are you sure you want to delete this model?</div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button id="btn-delete-modal" class="btn btn-danger float-left">
              <svg style="display:none" id="icon-loadding" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
              <svg id="icon-crawl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg> Delete
            </button>
            <button class="btn" data-dismiss="modal">
              <i class="flaticon-delete-1"></i> Discard
            </button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="modal fade bd-example-modal-xl" data-target="#modal-article-model" id="modal-article-model" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div class="modal-list" style="height: calc(100vh - 115px) !important;overflow-y: auto;">
              <div id="article-contenthtml"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TotalArticles from "~/components/admin/classification/TotalArticlesComponent.vue";
import Models from "~/components/admin/classification/ModelsComponent.vue";
import ListArticle from "~/components/admin/classification/ListArticleComponent.vue";
import { HTTP } from "../../static/baseAPI.js";
// import OverallAnalytics from "../../components/frontend/keyword-analytics/OverallAnalyticsComponent.vue";
export default {
  layout: "admin",
  components: {
    TotalArticles,
    Models,
    ListArticle,
    // OverallAnalytics,
  },
  data() {
    return {
      listModelBaseOrigin: [],
      listModelCreateOrigin: [],
      results: [],
      valuePOS: 0,
      valueNEG: 0,
      valueNEU: 0,
      valueEmpty: 0,
      error: 0,
      totalPost: 0,
      totalArticleVerify: 0,
    };
  },
  methods: {
    drawChartFlow() {
      HTTP.get("classification/data-flow-chart")
        .then((response) => {
          this.results = response.data;
          for (let i = 0; i < this.results.length; i++) {
            if (this.results[i].value) {
              if (this.results[i].to == "Positive") {
                this.valuePOS += this.results[i].value;
              }
              if (this.results[i].to == "Negative") {
                this.valueNEG += this.results[i].value;
              }
              if (this.results[i].to == "Neutral") {
                this.valueNEU += this.results[i].value;
              }
 
              if (this.results[i].to == "Un-process") {
                this.valueEmpty += this.results[i].value;
              }
              if (this.results[i].to == "Error" && this.results[i].value) {
                this.error += this.results[i].value;
              }
            }
          }
          this.totalPost = this.valuePOS + this.valueNEG + this.valueNEU + this.valueEmpty;
          console.log('Total Post',this.totalPost)
          this.totalArticleVerify =this.valuePOS +this.valueNEG + this.valueNEU
          if (this.valueEmpty === 0) {
            for (let i = 0; i < this.results.length; i++) {
              if (this.results[i].to === "Un-process")
                this.results.splice(i, 1);
            }
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    listModel(){
      console.log('start list model')
      HTTP.post(`models/classification/create-model-default?sourceModel=classification`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((e) => {
        this.errors.push(e);
      });
    HTTP.get(`models/classification/get-list-model?sourceModel=classification`)
      .then((response) => {
        this.listModelBaseOrigin = response.data[0];  
        this.listModelCreateOrigin = response.data[1];    
      })
      .catch((e) => {
        this.errors.push(e);
      });
    }
  },
  mounted() {
    this.listModel()
    this.drawChartFlow();
  },
};
</script>
<style>
body{
  font-size: 0.875rem!important;
}
button.btn.btn-primary.btn-block{
    font-size: 14px;
  padding: 0.4375rem 1.25rem;
}
h4 {
  font-size: 1.125rem!important;
}
body {
  color: #888ea8 !important;
}
.vm--modal{
  height: auto!important;
}
</style>