<template>
  <div class="tag-component">
    <div class="row">
      <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing" style="padding-bottom: 30px;">
        <Model />
      </div>
      <div class="col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing" style="padding-bottom: 30px;">
        <TotalTag />
      </div>
    </div>
    <TagList />
    <div id="modal-list-article" data-target="#modal-list-article" class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">List Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div class="modal-body" style="height: calc(100vh - 380px) !important;overflow-y: auto;">
            <div style="display: none;text-align: center;" class="blockui-animation-container loading-listlarticle">
              <span class="text-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin no-edge-top">
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                </svg>
              </span>
            </div>
            <div id="ct" class="note-container note-grid article" style="max-height:530px;overflow:hidden scroll;">
              <span style="display:contents;" id="box-article"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade register-modal modal-add" id="modal-add-tag" tabindex="-1" aria-labelledby="registerModalLabel" aria-modal="true" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header" id="registerModalLabel">
            <h4 class="modal-title">
              Add Tag:
              <span class="tag-select text-primary"></span>
            </h4>
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <div class="modal-body">
            <h6 class="modal-heading mb-2 mt-2">Type:</h6>
            <span class="n-chk">
              <label class="new-control new-radio radio-classic-success">
                <input type="radio" class="new-control-input check-type-tag" value="PER" name="type-tag" checked />
                <span class="new-control-indicator"></span>Person
              </label>
            </span>
            <span class="n-chk">
              <label class="new-control new-radio radio-classic-primary">
                <input type="radio" class="new-control-input check-type-tag" value="ORG" name="type-tag" />
                <span class="new-control-indicator"></span>Organization
              </label>
            </span>
            <span class="n-chk">
              <label class="new-control new-radio radio-classic-info">
                <input type="radio" class="new-control-input check-type-tag" value="LOC" name="type-tag" />
                <span class="new-control-indicator"></span>Location
              </label>
            </span>
            <span class="n-chk">
              <label class="new-control new-radio radio-classic-secondary">
                <input type="radio" class="new-control-input check-type-tag" value="MISC" name="type-tag" />
                <span class="new-control-indicator"></span>Misc
              </label>
            </span>
          </div>
          <div class="modal-footer justify-content-center">
            <div class="forgot login-footer">
              <button class="btn btn-primary btn-block" onclick="addTagSelect()">
                <span id="loading-add-tag" style="width: 20px;height: 20px;display: none;" class="spinner-border text-white mr-2 align-self-center loader-sm"></span>Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>
<script>
import TotalTag from "~/components/admin/manage-tag/total-tagComponent.vue";
import Model from "~/components/admin/manage-tag/ModelComponent.vue";
import TagList from "~/components/admin/manage-tag/TagListComponent.vue";
import { HTTP } from "../../static/baseAPI.js";
export default {
  layout: "admin",
  components: {
    TotalTag,
    Model,
    TagList,
  },
  mounted(){
    HTTP.post(`models/bert/create-model-default?sourceModel=tag`)
      .then((response) => {
        console.log(response.data)
      })
      .catch((e) => {
        this.errors.push(e);
      });
  }
};
</script>
<style>
button.btn.btn-primary.button-apply-tag {
  font-size: 14px;
  padding: 0.4375rem 1.25rem;
}
h4 {
  font-size: 1.125rem!important;
}
div#apexchartsvx02iasf {
  bottom: -30px !important;
}
.vm--modal{
  height: auto!important;
}

</style>
