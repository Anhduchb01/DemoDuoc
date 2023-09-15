<template>
  <div>
    <div v-if="conditionLoading" id="loading-form-tag" style="position: absolute;width: calc(100% - 64px);height: 766px;background-color: rgb(255 255 255 / 50%);z-index: 100;">
      <div id="text" style="position: absolute;top: 50%;left: 50%;font-size: 18px;color: rgb(31, 31, 31);transform: translate(-50%,-50%);">
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
        Loading...
      </div>
    </div>
    <div class="row" >
      <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" style="padding-bottom: 20px;">
        <div class="widget" style="padding: 20px 0px;">
          <div style="width: 35%;box-shadow: 7px 0px 10px 0px;top: 0px;position: absolute;height: 696px;opacity: 0.4;"></div>
          <div class="d-flex box-header w-100" style="padding-right: 6px;position: relative;z-index: 2;">
            <div class="box-inline" style="width: 35%;">
              <div style="width: 100%;align-items: center;display: flex;justify-content: space-between;height: 46px;">
                <h5 class="mr-2" style="align-self: center;">Tag List</h5>
                <button v-on:click="extractData()" style="height: 45px;white-space: nowrap;width:135px;" class="btn btn-primary btn-block">
                  <svg style="display: none;" id="icon-loading-btn-apply-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg>
                  <span class="text-button-apply-2">Export Data</span>
                </button>
                <div class="blockui-animation-container" style="display: none;" id="loading-list-tag">
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
                <div style="cursor: pointer;">
                  <svg v-on:click="openSettingModel()" class="icon-model" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
              </div>
              <div class="d-flex" style="justify-content: space-between;">
                <div style="width: 48.5%;" class="mt-2">
                  <p id="countStatusKeyword" style="margin: 0px;font-size: 12px;">
                    {{charSelectFilter}}
                    <span class="text-warning">({{valueStatusPending}}</span>
                    /{{totalStatusKeyword}})
                  </p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueStatusSuccess" :style="'width:' + ((valueStatusSuccess / totalStatusKeyword) * 100) + '%'" class="bg-success" id="statusSuccessKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueStatusPending" :style="'width:' + ((valueStatusPending / totalStatusKeyword) * 100) + '%'" class="bg-warning" id="statusPendingKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueStatusIgnore" :style="'width:' + ((valueStatusIgnore / totalStatusKeyword) * 100) + '%'" class="bg-danger" id="statusIgnoreKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div style="width: 48.5%;" class="mt-2">
                  <p id="countTotalTagKeyword" style="margin: 0px;font-size: 12px;">
                    {{charSelectFilter}}
                    <span class="text-success">({{valueTagPer}}</span>/
                    <span class="text-primary">{{valueTagOrg}}</span>/
                    <span class="text-info">{{valueTagLoc}}</span>/
                    <span class="text-secondary">{{valueTagMisc}})</span>
                  </p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueTagPer" :style="'width:' + ((valueTagPer / totalTypeTag) * 100) + '%'" class="bg-success" id="perTagKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagOrg" :style="'width:' + ((valueTagOrg / totalTypeTag) * 100) + '%'" class="bg-primary" id="orgTagKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagLoc" :style="'width:' + ((valueTagLoc / totalTypeTag) * 100) + '%'" class="bg-info" id="locTagKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagMisc" :style="'width:' + ((valueTagMisc / totalTypeTag) * 100) + '%'" class="bg-secondary" id="miscTagKeyword" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="d-flex" style="justify-content: space-between;">
                <div style="width: 48.5%;" class="mt-2 mb-2">
                  <p id="countStatusTotalTag" style="margin: 0px;font-size: 12px;">
                    Total
                    <span class="text-warning">({{valuePending}}</span>
                    /{{totalStatus}})
                  </p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueSuccess" :style="'width:' + ((valueSuccess / totalStatus) * 100) + '%'" class="bg-success" id="statusSuccess" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valuePending" :style="'width:' + ((valuePending / totalStatus) * 100) + '%'" class="bg-warning" id="statusPending" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueIgnore" :style="'width:' + ((valueIgnore / totalStatus) * 100) + '%'" class="bg-danger" id="statusIgnore" role="progressbar" style="width:  0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div style="width: 48.5%;" class="mt-2 mb-2">
                  <p id="countTotalTag" style="margin: 0px;font-size: 12px;">
                    Total
                    <span class="text-success">({{valueTagPer1}}</span>/
                    <span class="text-primary">{{valueTagOrg1}}</span>/
                    <span class="text-info">{{valueTagLoc1}}</span>/
                    <span class="text-secondary">{{valueTagMisc1}})</span>
                  </p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueTagPer1" :style="'width:' + ((valueTagPer1 / totalTypeTag1) * 100) + '%'" class="bg-success" id="perTag" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagOrg1" :style="'width:' + ((valueTagOrg1 / totalTypeTag1) * 100) + '%'" class="bg-primary" id="orgTag" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagLoc1" :style="'width:' + ((valueTagLoc1 / totalTypeTag1) * 100) + '%'" class="bg-info" id="locTag" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagMisc1" :style="'width:' + ((valueTagMisc1 / totalTypeTag1) * 100) + '%'" class="bg-secondary" id="miscTag" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="w-100 d-flex menu-table" style="height: 41px;">
                <div class="box-element-tag" style="width: 40%;">Tag</div>
                <div class="box-element-tag text-center" style="width: 22%;">Type</div>
                <div class="box-element-tag text-center" style="width: 20%;">Status</div>
                <div class="box-element-tag" style="width: 18%;">Source</div>
              </div>
            </div>
            <div class="box-inline" style="width: 32.5%;">
              <div class="d-flex" style="height: 46px;">
                <select v-model="modelSelect1" @change="getModelToSelect1()" style="margin-right: 10px;height: 45px;border-radius: 8px" id="select-result-1" class="placeholder js-states form-control">
                  <option disabled :value="null">-- select an option --</option>
                  <option v-for="model in listModelTagHistory1" :key="model.model_id" :value="model.model_id+'+'+model.time">{{model.name}} {{model.time}}</option>
                </select>
                <button style="white-space: nowrap;" v-on:click="applyResultsTagOne()" class="btn btn-primary button-apply-tag">
                  <svg style="display: none;" id="icon-loading-btn-apply-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg> Apply Results
                </button>
              </div>
              <div>
                <div class="mt-2 mb-2">
                  <p id="totalTagByKeywordOne" style="margin: 0px;font-size: 12px;">{{charSelectFilter}} ({{totalTypeTagOne}}/{{Number(dataTable1.length)}})</p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueTagPerOne" :style="'width:' + ((valueTagPerOne / totalTypeTagOne) * 100) + '%'" class="bg-success" id="perTagKeywordOne" role="progressbar" style="transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagOrgOne" :style="'width:' + ((valueTagOrgOne / totalTypeTagOne) * 100) + '%'" class="bg-primary" id="orgTagKeywordOne" role="progressbar" style="transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagLocOne" :style="'width:' + ((valueTagLocOne / totalTypeTagOne) * 100) + '%'" class="bg-info" id="locTagKeywordOne" role="progressbar" style="transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagMiscOne" :style="'width:' + ((valueTagMiscOne / totalTypeTagOne) * 100) + '%'" class="bg-secondary" id="miscTagKeywordOne" role="progressbar" style="transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="mt-2 mb-2">
                  <p id="totalTagOne" style="margin: 0px;font-size: 12px;">Total ({{totalTypeTagOne1}}/{{totalTypeTag1}})</p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueTagPerOne1" :style="'width:' + ((valueTagPerOne1 / totalTypeTagOne1) * 100) + '%'" class="bg-success" id="perTagOne" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagOrgOne1" :style="'width:' + ((valueTagOrgOne1 / totalTypeTagOne1) * 100) + '%'" class="bg-primary" id="orgTagOne" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagLocOne1" :style="'width:' + ((valueTagLocOne1 / totalTypeTagOne1) * 100) + '%'" class="bg-info" id="locTagOne" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagMiscOne1" :style="'width:' + ((valueTagMiscOne1 / totalTypeTagOne1) * 100) + '%'" class="bg-secondary" id="miscTagOne" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="w-100 d-flex menu-table" style="height: 41px;text-align: right;">
                <div class="box-element-tag" style="width: 20%;">Count</div>
                <div class="box-element-tag" style="width: 20%;">Score</div>
                <div class="box-element-tag" style="width: 20%;padding: 10px 0px;">Type</div>
                <div class="box-element-tag" style="width: 40%;">Tag</div>
              </div>
            </div>
            <div class="box-inline" style="width: 32.5%;">
              <div class="d-flex" style="height: 46px;">
                <select v-model="modelSelect2" @change="getModelToSelect2()" style="margin-right: 10px;height: 45px;border-radius: 8px" id="select-result-2" class="placeholder js-states form-control">
                  <option disabled :value="null">-- select an option --</option>
                  <option v-for="model in listModelTagHistory2" :key="model.model_id" :value="model.model_id+'+'+model.time">{{model.name}} {{model.time}}</option>
                </select>
                <button style="white-space: nowrap;" v-on:click="applyResultsTagTwo()" class="btn btn-primary button-apply-tag">
                  <svg style="display: none;" id="icon-loading-btn-apply-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg> Apply Results
                </button>
              </div>
              <div>
                <div class="mt-2 mb-2">
                  <p id="totalTagByKeywordTwo" style="margin: 0px;font-size: 12px;">{{charSelectFilter}} ({{totalTypeTagTwo}}/{{Number(dataTable2.length)}})</p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueTagPerTwo" :style="'width:' + ((valueTagPerTwo / totalTypeTagTwo) * 100) + '%'" class="bg-success" id="perTagKeywordTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagOrgTwo" :style="'width:' + ((valueTagOrgTwo / totalTypeTagTwo) * 100) + '%'" class="bg-primary" id="orgTagKeywordTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagLocTwo" :style="'width:' + ((valueTagLocTwo / totalTypeTagTwo) * 100) + '%'" class="bg-info" id="locTagKeywordTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagMiscTwo" :style="'width:' + ((valueTagMiscTwo / totalTypeTagTwo) * 100) + '%'" class="bg-secondary" id="miscTagKeywordTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div>
                <div class="mt-2 mb-2">
                  <p id="totalTagTwo" style="margin: 0px;font-size: 12px;">Total ({{totalTypeTagTwo2}}/{{ totalTypeTag1}})</p>
                  <div class="progress progress-sm progress-bar-stack" style="margin: 0px;border-radius: 30px;height: 4px" id="human-active">
                    <div :title="valueTagPerTwo2" :style="'width:' + ((valueTagPerTwo2 / totalTypeTagTwo2) * 100) + '%'" class="bg-success" id="perTagTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagOrgTwo2" :style="'width:' + ((valueTagOrgTwo2 / totalTypeTagTwo2) * 100) + '%'" class="bg-primary" id="orgTagTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagLocTwo2" :style="'width:' + ((valueTagLocTwo2 / totalTypeTagTwo2) * 100) + '%'" class="bg-info" id="locTagTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                    <div :title="valueTagMiscTwo" :style="'width:' + ((valueTagMiscTwo / totalTypeTagTwo2) * 100) + '%'" class="bg-secondary" id="miscTagTwo" role="progressbar" style="width: 0%; transition: all 1.5s ease 0s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
              </div>
              <div class="w-100 d-flex menu-table" style="height: 41px;">
                <div class="box-element-tag" style="width: 40%;">Tag</div>
                <div class="box-element-tag" style="width: 20%;">Type</div>
                <div class="box-element-tag" style="width: 20%;">Score</div>
                <div class="box-element-tag" style="width: 20%;">Count</div>
              </div>
            </div>
          </div>
          <div class="d-flex box-list w-100">
            <div class="table-tag box-inline" style="width: 35%;">
              <div v-for="(result,index) of result" :key="result.id">
                <div v-if="itemSame[index]" class="d-flex">
                  <div style class="border-item-tag"></div>
                  <div class="box-element-tag" style="width: 40%;">
                    <p style="cursor: pointer;" v-on:click="getArticleHasTag(result.name)" :title="result.name" :id="'name-'+index+1" class="tag-name">{{result.name}}</p>
                  </div>
                  <div class="box-element-tag" style="width: 22%;">
                    <select v-if="result.type =='PER'" v-model="result.type" :style="myStyle" @change="setColorSelectCategory(result.name,result.type,colorStatus[index])" style="color: #1abc9c!important" :class="'select-type-tag text-success'" :id="'type-tag-selected-'+ (index+1)">
                      <option style="color: #1abc9c" value="PER">Person</option>
                      <option style="color: #4361ee" value="ORG">Organization</option>
                      <option style="color: #2196f3" value="LOC">Location</option>
                      <option style="color: #805dca" value="MISC">Misc</option>
                    </select>
                    <select v-else-if="result.type =='ORG'" v-model="result.type" :style="myStyle" @change="setColorSelectCategory(result.name,result.type,colorStatus[index])" style="color: #4361ee!important" :class="'select-type-tag text-primary'" :id="'type-tag-selected-'+ (index+1)">
                      <option style="color: #1abc9c" value="PER">Person</option>
                      <option selected style="color: #4361ee" value="ORG">Organization</option>
                      <option style="color: #2196f3" value="LOC">Location</option>
                      <option style="color: #805dca" value="MISC">Misc</option>
                    </select>
                    <select v-else-if="result.type =='LOC'" v-model="result.type" :style="myStyle" @change="setColorSelectCategory(result.name,result.type,colorStatus[index])" style="color: #color!important" :class="'select-type-tag text-info'" :id="'type-tag-selected-'+ (index+1)">
                      <option style="color: #1abc9c" value="PER">Person</option>
                      <option style="color: #4361ee" value="ORG">Organization</option>
                      <option selected style="color: #2196f3" value="LOC">Location</option>
                      <option style="color: #805dca" value="MISC">Misc</option>
                    </select>
                    <select v-else v-model="result.type" :style="myStyle" @change="setColorSelectCategory(result.name,result.type,colorStatus[index])" style="color: #805dca!important" :class="'select-type-tag text-secondary'" :id="'type-tag-selected-'+ (index+1)">
                      <option style="color: #1abc9c !important" value="PER">Person</option>
                      <option style="color: #4361ee !important" value="ORG">Organization</option>
                      <option style="color: #2196f3 !important" value="LOC">Location</option>
                      <option selected style="color: #805dca !important" value="MISC">Misc</option>
                    </select>
                  </div>
                  <div class="box-element-tag" style="width: 20%;">
                    <select v-model="result.status[0]" v-if="result.status[0] == 0" style="color: #1abc9c!important" @change="setColorSelectStatus(result.name,result.type,$event)" :class="'select-type-tag text-' + colorStatus[index]" :id="'status-tag-selected-' +(index +1)">
                      <option selected style="color: #1abc9c!important" value="0">Verify</option>
                      <option style="color: #e2a03f" value="1">Pending</option>
                      <option style="color: #e7515a" value="2">Ignore</option>
                    </select>
                    <select v-model="result.status[0]" v-else-if="result.status[0] == 1" style="color: #e2a03f!important" @change="setColorSelectStatus(result.name,result.type,$event)" :class="'select-type-tag text-' + colorStatus[index]" :id="'status-tag-selected-' +(index +1)">
                      <option style="color: #1abc9c" value="0">Verify</option>
                      <option selected style="color: #e2a03f!important" value="1">Pending</option>
                      <option style="color: #e7515a" value="2">Ignore</option>
                    </select>
                    <select v-model="result.status[0]" v-else @change="setColorSelectStatus(result.name,result.type,$event)" style="color: #e7515a!important" :class="'select-type-tag text-' + colorStatus[index]" :id="'status-tag-selected-' +(index +1)">
                      <option style="color: #1abc9c" value="0">Verify</option>
                      <option style="color: #e2a03f" value="1">Pending</option>
                      <option selected style="color: #e7515a!important" value="2">Ignore</option>
                    </select>
                  </div>
                  <div v-html="stringSource[index]" style="white-space: nowrap;width: 18%;align-self: center;position: relative;z-index: 2;text-align: left" class="td-content"></div>
                  <!-- <div style="white-space: nowrap;width: 18%;align-self: center;position: relative;z-index: 2;text-align: left" class="td-content">
                    <span class="badge outline-badge-dark">
                      <img class="image-logo-step image-source type-unexist" src="~/static/assetsAdmin/backend/assets/img/tag.png" />
                    </span>
                    <span class="badge outline-badge-success">
                      <img class="image-logo-step image-source type-exist" src="~/static/assetsAdmin/backend/assets/img/ai.png" />
                      {{score[index]}}
                    </span>
                  </div>-->
                </div>
                <div v-else class="d-flex">
                  <div class="box-element-tag" style="width: 40%;" :class="'td-content product-name'">
                    <p class="tag-name text-unlist">{{data1[index].name}}</p>
                  </div>
                  <div class="box-element-tag" style="width: 22%;" :class="'td-content text-unlist'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content text-unlist'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 18%;white-space: nowrap;" :class="'td-content text-unlist'">
                    <span class="text-unlist">-</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-result-one box-inline" style="width: 32.5%;text-align: right;">
              <div v-for="(result,index) of data1" :key="result.id">
                <div v-if="itemSame1[index]" class="d-flex">
                  <div class="border-item-tag"></div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span>{{lengTagMapHistory[index]}}</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="pricing">{{scoreOne[index]}}</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;padding: 10px 0px;" :class="'td-content'">
                    <span :class="classTag1[index]">{{stringTypeTag1[index]}}</span>
                  </div>
                  <div class="box-element-tag" style="width: 40%;" :class="'td-content product-name'">
                    <p :title="itemSame1[index].name" :id="'name-'+itemSame1[index].name" class="tag-name">{{itemSame1[index].name}}</p>
                  </div>
                </div>
                <div class="d-flex" v-else>
                  <div class="border-item-tag"></div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;padding: 10px 0px;" :class="'td-content'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 40%;" :class="'td-content product-name'">
                    <p :title="data1[index].name" class="tag-name text-unlist">{{data1[index].name}}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="table-result-two box-inline" style="width: 32.5%;">
              <div v-for="(result,index) of data2" :key="result.id">
                <div v-if="itemSame2[index]" class="d-flex">
                  <div class="border-item-tag"></div>
                  <div class="box-element-tag" style="width: 40%;" :class="'td-content product-name'">
                    <p :title="itemSame2[index].name" :id="'name-'+itemSame2[index].name" class="tag-name">{{itemSame2[index].name}}</p>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span :class="classTag2[index]">{{stringTypeTag2[index]}}</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="pricing">{{scoreTwo[index]}}</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span>{{lengTagMapHistory2[index]}}</span>
                  </div>
                </div>
                <div class="d-flex" v-else>
                  <div class="border-item-tag"></div>
                  <div class="box-element-tag" style="width: 40%;" :class="'td-content product-name'">
                    <p :title="data2[index].name" class="tag-name text-unlist">{{data2[index].name}}</p>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="text-unlist">-</span>
                  </div>
                  <div class="box-element-tag" style="width: 20%;" :class="'td-content'">
                    <span class="text-unlist">-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="paginating-container pagination-solid">
      <ul class="pagination">
        <li :class="{active: charSelectFilter === 'A'}" v-on:click="getDataSelectBycharSelectFilter('A')">
          <a>A</a>
        </li>
        <li :class="{active: charSelectFilter === 'B'}" v-on:click="getDataSelectBycharSelectFilter('B')">
          <a>B</a>
        </li>
        <li :class="{active: charSelectFilter === 'C'}" v-on:click="getDataSelectBycharSelectFilter('C')">
          <a>C</a>
        </li>
        <li :class="{active: charSelectFilter === 'D'}" v-on:click="getDataSelectBycharSelectFilter('D')">
          <a>D</a>
        </li>
        <li :class="{active: charSelectFilter === 'E'}" v-on:click="getDataSelectBycharSelectFilter('E')">
          <a>E</a>
        </li>
        <li :class="{active: charSelectFilter === 'F'}" v-on:click="getDataSelectBycharSelectFilter('F')">
          <a>F</a>
        </li>
        <li :class="{active: charSelectFilter === 'G'}" v-on:click="getDataSelectBycharSelectFilter('G')">
          <a>G</a>
        </li>
        <li :class="{active: charSelectFilter === 'H'}" v-on:click="getDataSelectBycharSelectFilter('H')">
          <a>H</a>
        </li>
        <li :class="{active: charSelectFilter === 'I'}" v-on:click="getDataSelectBycharSelectFilter('I')">
          <a>I</a>
        </li>
        <li :class="{active: charSelectFilter === 'K'}" v-on:click="getDataSelectBycharSelectFilter('K')">
          <a>K</a>
        </li>
        <li :class="{active: charSelectFilter === 'L'}" v-on:click="getDataSelectBycharSelectFilter('L')">
          <a>L</a>
        </li>
        <li :class="{active: charSelectFilter === 'M'}" v-on:click="getDataSelectBycharSelectFilter('M')">
          <a>M</a>
        </li>
        <li :class="{active: charSelectFilter === 'N'}" v-on:click="getDataSelectBycharSelectFilter('N')">
          <a>N</a>
        </li>
        <li :class="{active: charSelectFilter === 'O'}" v-on:click="getDataSelectBycharSelectFilter('O')">
          <a>O</a>
        </li>
        <li :class="{active: charSelectFilter === 'P'}" v-on:click="getDataSelectBycharSelectFilter('P')">
          <a>P</a>
        </li>
        <li :class="{active: charSelectFilter === 'Q'}" v-on:click="getDataSelectBycharSelectFilter('Q')">
          <a>Q</a>
        </li>
        <li :class="{active: charSelectFilter === 'R'}" v-on:click="getDataSelectBycharSelectFilter('R')">
          <a>R</a>
        </li>
        <li :class="{active: charSelectFilter === 'S'}" v-on:click="getDataSelectBycharSelectFilter('S')">
          <a>S</a>
        </li>
        <li :class="{active: charSelectFilter === 'T'}" v-on:click="getDataSelectBycharSelectFilter('T')">
          <a>T</a>
        </li>
        <li :class="{active: charSelectFilter === 'U'}" v-on:click="getDataSelectBycharSelectFilter('U')">
          <a>U</a>
        </li>
        <li :class="{active: charSelectFilter === 'V'}" v-on:click="getDataSelectBycharSelectFilter('V')">
          <a>V</a>
        </li>
        <li :class="{active: charSelectFilter === 'W'}" v-on:click="getDataSelectBycharSelectFilter('W')">
          <a>W</a>
        </li>
        <li :class="{active: charSelectFilter === 'X'}" v-on:click="getDataSelectBycharSelectFilter('X')">
          <a>X</a>
        </li>
        <li :class="{active: charSelectFilter === 'Y'}" v-on:click="getDataSelectBycharSelectFilter('Y')">
          <a>Y</a>
        </li>
        <li :class="{active: charSelectFilter === 'Z'}" v-on:click="getDataSelectBycharSelectFilter('Z')">
          <a>Z</a>
        </li>
        
      </ul>
    </div>
    <modal name="modal-setting-model" height="271px" width="500px" styles="overflow: initial">
      <div class="modal-content">
        <div class="modal-body">
          <svg v-on:click="closeSettingModel()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <div class="compose-box">
            <div class="compose-content">
              <div class="row mb-4">
                <div class="col-md-12">
                  <h5 style="font-weight: bold;color: #4361ee !important;" class="modal-title text-center">Verify Articles</h5>
                </div>
              </div>
              <form id="formverify">
                <div class="row">
                  <div class="col-md-12">
                    <div class="d-flex mb-4 mail-to">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type">
                        <polyline points="4 7 4 4 20 4 20 7" />
                        <line x1="9" y1="20" x2="15" y2="20" />
                        <line x1="12" y1="4" x2="12" y2="20" />
                      </svg>
                      <div class="w-100">
                        <input @change="getTagVerify()" v-model.lazy="modelPointEdit" id="model-point-edit" type="number" min="0" max="100" placeholder="Point Apply" class="form-control" />
                      </div>
                    </div>
                    <div style="text-align: left;" class="box-switch">
                            <label class="switch s-icons s-outline s-outline-primary">
                              <input :checked="verifyAiLib" v-on:click="actionverifyAiLib()" class="input-edit-address" id="edit-cookies-page" type="checkbox" />
                              <span class="slider round">
                                <p class="pl-3" style="margin-left: 40px;white-space: nowrap;font-weight: 600;">Verify Tags by AI & Lib</p>
                              </span>
                            </label>
                          </div>
                    <div class="mail-to">
                      <div>
                        <div id="box-score-news" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 21px;cursor: pointer;border-radius: 10px;">
                          <div id="process-score-article-news" :style="'width:'+percentTagVerify+'%'" class="progress-bar bg-primary" role="progressbar" style=" transition: all 1s ease 0s; border-color: rgb(121, 219, 114); background-color: rgb(121, 219, 114) !important;" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-title">
                              <span>Tag Verify</span>
                              <span class="value-show-article-verify">{{percentTagVerify}} %</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button v-on:click="saveTagVerify()" id="btn-save-point-edit" class="btn btn-primary float-left">
            <svg style="display:none" id="icon-loadding" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
              <line x1="12" y1="2" x2="12" y2="6" />
              <line x1="12" y1="18" x2="12" y2="22" />
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
              <line x1="2" y1="12" x2="6" y2="12" />
              <line x1="18" y1="12" x2="22" y2="12" />
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
            </svg> Apply
          </button>
        </div>
      </div>
    </modal>
    <modal name="modal-list-article" styles="overflow: initial;" class="listArticle">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">List Article</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <svg v-on:click="closeArticleHasTag()" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
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
              <span style="display:contents;" id="box-article">
                <div v-for="(result,index) in TagArticle" :key="result.id" :class="'note-item all-notes '+ colorStatusBackgr[index]">
                  <div class="note-inner-content">
                    <div class="note-content">
                      <p class="note-title" :data-note-title="result.article[0].title">{{result.article[0].title}}</p>
                      <p class="meta-time">{{result.article[0].timeCreatePostOrigin}}</p>
                      <div class="note-description-content">
                        <p class="note-description">{{result.article[0].content}}</p>
                      </div>
                    </div>
                    <div class="note-action" style="justify-content: space-between;display: flex;">
                      <span style="align-self: center;" :class="'badge badge-'+ colorStatusTagPost[index]">{{index+1}}/2</span>
                      <svg v-on:click="generateEngTag(result._id)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 fav-note">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </modal>
    <modal name="modal-show-article" height="271px" width="500px" styles="overflow: initial" class="Show-Article">
      <!-- <modal name="modal-show-article" data-target="#modal-show-article" class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-hidden="true"> -->
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Article</h5>
            <div class="d-flex">
              <button class="btn btn-primary btn-block" onclick="saveTagSelect()">
                <span id="loading-add-tag" style="width: 20px;height: 20px;display: none;" class="spinner-border text-white mr-2 align-self-center loader-sm"></span>Save
              </button>
              <button v-on:click="closeModelgenerateEngTag()" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
          <div class="modal-body" style="height: calc(100vh - 115px) !important;overflow-y: auto;">
            <div class="d-flex">
              <div class="mb-2 mr-2">
                <strong>Type :</strong>
              </div>
              <div>
                <span style="margin-bottom: 5px;" class="badge outline-badge-success badge-pills">
                  <div style="padding-right: 12px;float: right;" class="t-dot t-dot-success rounded bs-tooltip" title="Type : Person"></div>
                  <span style="padding-right: 5px;">Person</span>
                </span>
                <span style="margin-bottom: 5px;" class="badge outline-badge-success badge-pills">
                  <div style="padding-right: 12px;float: right;" class="t-dot t-dot-primary rounded bs-tooltip" title="Type : Organization"></div>
                  <span style="padding-right: 5px;">Organization</span>
                </span>
                <span style="margin-bottom: 5px;" class="badge outline-badge-success badge-pills">
                  <div style="padding-right: 12px;float: right;" class="t-dot t-dot-info rounded bs-tooltip" title="Type : Location"></div>
                  <span style="padding-right: 5px;">Location</span>
                </span>
                <span style="margin-bottom: 5px;" class="badge outline-badge-success badge-pills">
                  <div style="padding-right: 12px;float: right;" class="t-dot t-dot-secondary rounded bs-tooltip" title="Type : Misc"></div>
                  <span style="padding-right: 5px;">Misc</span>
                </span>
              </div>
            </div>
            <div class="mb-4">
              <div class="mb-3">
                <div class="mb-2">
                  <strong>Tags:</strong>
                </div>
                <div id="element-tags">
                  <span v-for="(result,index) in getTags" :key="result.id">
                    <span v-if="result.score === 0" style="margin-bottom: 5px;" class="badge outline-badge-success success badge-pills">
                      <div style="padding-right: 12px;float: right;" :class="'t-dot t-dot-' +typeTag[index]+ ' rounded bs-tooltip'" :title="'Type : ' +nameTooltip[index]"></div>
                      <span style="padding-right: 5px;">{{result.name}}</span>
                    </span>
                    <span v-else-if="result.score === 1" style="margin-bottom: 5px;" class="badge outline-badge-warning badge-pills">
                      <div style="padding-right: 12px;float: right;" :class="'t-dot t-dot-' +typeTag[index]+ ' rounded bs-tooltip'" :title="'Type : ' +nameTooltip[index]"></div>
                      <span style="padding-right: 5px;">{{result.name}}</span>
                    </span>
                    <span v-else style="margin-bottom: 5px;" class="badge outline-badge-danger badge-pills">
                      <div style="padding-right: 12px;float: right;" :class="'t-dot t-dot-' +typeTag[index]+ ' rounded bs-tooltip'" :title="'Type : ' +nameTooltip[index]"></div>
                      <span style="padding-right: 5px;">{{result.name}}</span>
                    </span>
                  </span>
                </div>
              </div>
              <div class="mb-3">
                <div class="mb-2">
                  <strong>AI Tags:</strong>
                </div>
                <div id="element-tagais">
                  <span v-for="(result,index) in getTagsAI" :key="result.id">
                    <span v-if="result.score === 0" style="margin-bottom: 5px;" class="badge outline-badge-success success badge-pills">
                      <div style="padding-right: 12px;float: right;" :class="'t-dot t-dot-' +typeTag[index]+ ' rounded bs-tooltip'" :title="'Type : ' +nameTooltip[index]"></div>
                      <span style="padding-right: 5px;">{{result.name}}</span>
                    </span>
                    <span v-else-if="result.score === 1" style="margin-bottom: 5px;" class="badge outline-badge-warning badge-pills">
                      <div style="padding-right: 12px;float: right;" :class="'t-dot t-dot-' +typeTag[index]+ ' rounded bs-tooltip'" :title="'Type : ' +nameTooltip[index]"></div>
                      <span style="padding-right: 5px;">{{result.name}}</span>
                    </span>
                    <span v-else style="margin-bottom: 5px;" class="badge outline-badge-danger badge-pills">
                      <div style="padding-right: 12px;float: right;" :class="'t-dot t-dot-' +typeTag[index]+ ' rounded bs-tooltip'" :title="'Type : ' +nameTooltip[index]"></div>
                      <span style="padding-right: 5px;">{{result.name}}</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div class="content-article">
              <span v-html="contentHTML"></span>
            </div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import Snackbar from "awesome-snackbar";
import { HTTP } from "../../../static/baseAPI.js";
import { saveAs } from 'file-saver';
export default {
  computed: {
    conditionLoading() {
      if (!this.showLoading && !this.dataTableLoading) {
        return false;
      } else {
        return true;
      }
    },
    // listModelTagHistory1()  {
    //   if(this.language='en'){
    //     return listModelTagHistoryEN1;
    //   }else{
    //     return listModelTagHistoryJP1;
    //   }
    // },
    // listModelTagHistory2(){
    //   if(this.language='en'){
    //     return listModelTagHistoryEN2;
    //   }else{
    //     return listModelTagHistoryJP2
    //   }
    // },

  },
  data() {
    return {
      verifyAiLib:false,
      language :'en',
      showLoading: true,
      dataTableLoading: true,
      listModel: [],
      listModelTagHistory1: [],
      listModelTagHistory2: [],
      listModelTagHistoryEN: [],
      listModelTagHistoryEN1: [],
      listModelTagHistoryEN2: [],
      listModelTagHistoryJP: [],
      listModelTagHistoryJP1: [],
      listModelTagHistoryJP2: [],
      modelSelect1: null,
      modelSelect2: null,
      charSelectFilter: "A",
      //Model Point Edit
      modelPointEdit: null,
      percentTagVerify: 0,

      //Phần 1
      stringSource: [],
      myStyle: {
        color: "",
      },
      valueTagPer: 0,
      valueTagOrg: 0,
      valueTagLoc: 0,
      valueTagMisc: 0,
      totalTypeTag: 0,

      valueStatusSuccess: 0,
      valueStatusPending: 0,
      valueStatusIgnore: 0,
      totalStatusKeyword: 0,

      dataTable: [],
      result: [],
      countTag: 0,
      itemSame: [],
      score: [],
      stringTypeTag: null,
      colorStatus: [],
      colorStatus1: [],

      //Phần 2
      arrayStatus: [],
      arrayTypeTag: [],
      totalStatus: 0,
      valueSuccess: 0,
      valuePending: 0,
      valueIgnore: 0,
      result1: [],

      totalTypeTag1: 0,
      valueTagPer1: 0,
      valueTagOrg1: 0,
      valueTagLoc1: 0,
      valueTagMisc1: 0,

      //Model1
      data1: [],
      dataTable1: [],
      dataOne: [],
      totalTypeTagOne: 0,
      valueTagPerOne: 0,
      valueTagOrgOne: 0,
      valueTagLocOne: 0,
      valueTagMiscOne: 0,
      classTag1: [],
      stringTypeTag1: [],
      resultOne: [],
      lengTagMapHistory: [],
      scoreOne: [],
      itemSame1: [],
      arrayTypeTagOne1: [],
      totalTypeTagOne1: 0,
      valueTagPerOne1: 0,
      valueTagOrgOne1: 0,
      valueTagLocOne1: 0,
      valueTagMiscOne1: 0,
      //Model2
      data2: [],
      dataTable2: [],
      dataTwo: [],
      totalTypeTagTwo: 0,
      valueTagPerTwo: 0,
      valueTagOrgTwo: 0,
      valueTagLocTwo: 0,
      valueTagMiscTwo: 0,
      classTag2: [],
      stringTypeTag2: [],
      resultTwo: [],
      lengTagMapHistory2: [],
      scoreTwo: [],
      itemSame2: [],

      arrayTypeTagTwo2: [],
      totalTypeTagTwo2: 0,
      valueTagPerTwo2: 0,
      valueTagOrgTwo2: 0,
      valueTagLocTwo2: 0,
      valueTagMiscTwo2: 0,

      //TagArticle
      TagArticle: [],
      statusTagPost: [],
      colorStatusTagPost: [],
      colorStatusBackgr: [],

      //generateTag
      contentHTML: [],

      getTags: [],
      tagHighlight: [],
      nameTooltip: [],
      typeTag: [],

      getTagsAI: [],
      tagAiHightlight: [],
      nameTooltipAi: [],
      typeTagAi: [],
      arrayAddTag: [],
    };
  },
  methods: {
    async extractData() {
      this.showLoading = true;
      try {
        const response = await HTTP.get('getdata/tag').then((response) => {
          console.log('ok')
          this.showLoading = false;
          const data = response.data.data;
          const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });
          saveAs(jsonBlob, 'data.json');
      });
        
      } catch (error) {
        console.error(error);
      }
    },
    saveTagVerify() {
      this.showLoading = true;
      this.dataTableLoading = true;
      let pointVerify1 = this.modelPointEdit;
      if (pointVerify1 > 100) pointVerify1 = 100;
      if (pointVerify1 < 0) pointVerify1 = 0;
      HTTP.get("tags/save-percent-tag-verify", {
        params: {
          pointVerify: pointVerify1,
          verifyAiLib : this.verifyAiLib
        },
      }).then((response) => {
        this.closeSettingModel();
        this.getDataProcessTag();
      });
    },
    actionverifyAiLib(){
      this.verifyAiLib =! this.verifyAiLib
      this.getTagVerify()

    },
    getTagVerify() {
      let pointVerify1 = this.modelPointEdit;
      if (pointVerify1 > 100) pointVerify1 = 100;
      if (pointVerify1 < 0) pointVerify1 = 0;
      HTTP.get("tags/get-percent-tag-verify", {
        params: {
          pointVerify: pointVerify1,
          verifyAiLib : this.verifyAiLib
        },
      }).then((response) => {
        // let results = response.data;
        // let totaltags = results[0].length;
        // let tagVerify = results[1].length;
        this.percentTagVerify = Number( response.data) ;
        this.percentTagVerify = this.percentTagVerify.toFixed(0);
      });
    },
    generateEngTag(id) {
      let arrayTagScorehigh = [];
      let arrayTagScoreLow = [];
      this.$modal.show("modal-show-article");
      HTTP.get("get-tags", {
        params: {
          id: id,
        },
      }).then((response) => {
        this.getTags = response.data.tag;
        this.getTagsAI = response.data.tagai;
        //get Tag
        for (let i = 0; i < this.getTags.length; i++) {
          if (this.getTags[i].type === "PER") {
            this.nameTooltip[i] = "Person";
            this.typeTagAi[i] = "success";
          }
          if (this.getTags[i].type === "ORG") {
            this.typeTagAi[i] = "primary";
            this.nameTooltip[i] = "Organization";
          }
          if (this.getTags[i].type === "LOC") {
            this.typeTagAi[i] = "info";
            this.nameTooltip[i] = "Location";
          }
          if (this.getTags[i].type === "MISC") {
            this.typeTagAi[i] = "secondary";
            this.nameTooltip[i] = "Misc";
          }
          let objtag = {};
          objtag.name = this.getTags[i].name;
          objtag.type = this.getTags[i].type;
          if (this.getTags[i].score === 0) {
            arrayTagScorehigh.push(objtag);
          } else if (this.getTags[i].score === 1) {
            arrayTagScoreLow.push(objtag);
          }
        }
        //Get TagAi
        for (let i = 0; i < this.getTagsAI.length; i++) {
          if (this.getTagsAI[i].type === "PER") {
            this.nameTooltipAi[i] = "Person";
            this.typeTag[i] = "success";
          }
          if (this.getTagsAI[i].type === "ORG") {
            this.typeTag[i] = "primary";
            this.nameTooltipAi[i] = "Organization";
          }
          if (this.getTagsAI[i].type === "LOC") {
            this.typeTag[i] = "info";
            this.nameTooltipAi[i] = "Location";
          }
          if (this.getTagsAI[i].type === "MISC") {
            this.typeTag[i] = "secondary";
            this.nameTooltipAi[i] = "Misc";
          }
          let objtag = {};
          objtag.name = this.getTagsAI[i].name;
          objtag.type = this.getTagsAI[i].type;
          if (this.getTagsAI[i].score === 0) {
            arrayTagScorehigh.push(objtag);
          } else if (this.getTagsAI[i].score === 1) {
            arrayTagScoreLow.push(objtag);
          }
        }
        this.showModalDetailArticle(id, arrayTagScorehigh, arrayTagScoreLow);
      });
    },
    showModalDetailArticle(_id, arrayTagScorehigh, arrayTagScoreLow) {
      let idArticleShow = _id;
      let idArticleSelect = idArticleShow;
      let id = _id;
      let title;
      let description;
      for (let i = 0; i < this.TagArticle.length; i++) {
        if (this.TagArticle[i]._id === id) {
          title = this.TagArticle[i].article[0].title;
          description = this.TagArticle[i].article[0].content;
          this.contentHTML = this.TagArticle[i].article[0].content_html;
          break;
        }
      }
      arrayTagScorehigh = [
        ...new Map(
          arrayTagScorehigh.map((item) => [item["name"], item])
        ).values(),
      ];
      arrayTagScoreLow = [
        ...new Map(
          arrayTagScoreLow.map((item) => [item["name"], item])
        ).values(),
      ];

      for (let j = 0; j < arrayTagScorehigh.length; j++) {
        let typeTag;
        let textFormatType1 = new RegExp(arrayTagScorehigh[j].name, "gi");
        this.contentHTML = this.contentHTML.replaceAll(
          textFormatType1,
          `<span style="margin-bottom: 5px;" class="badge outline-badge-success badge-pills">${arrayTagScorehigh[j].name}</span>`
        );
      }
      for (let j = 0; j < arrayTagScoreLow.length; j++) {
        let typeTag;
        let textFormatType1 = new RegExp(arrayTagScoreLow[j].name, "gi");
        this.contentHTML = this.contentHTML.replaceAll(
          textFormatType1,
          `<span class="badge outline-badge-warning badge-pills">${arrayTagScoreLow[j].name}</span>`
        );
      }
      if (this.arrayAddTag.length !== 0) {
        this.arrayAddTag = [
          ...new Map(
            this.arrayAddTag.map((item) => [item["name"], item])
          ).values(),
        ];
        for (let k = 0; k < this.arrayAddTag.length; k++) {
          let typeTag = this.arrayAddTag[k].type;
          let textFormatType1 = new RegExp(this.arrayAddTag[k].name, "gi");
          this.contentHTML = this.contentHTML.replaceAll(
            textFormatType1,
            `<span class="tag-has-select-${typeTag}">${this.arrayAddTag[k].name}</span>`
          );
        }
      }
    },
    closeModelgenerateEngTag() {
      this.$modal.hide("modal-show-article");
    },
    openSettingModel() {
      this.$modal.show("modal-setting-model");
    },
    closeSettingModel() {
      this.$modal.hide("modal-setting-model");
    },
    getDataSelectBycharSelectFilter(name) {
      this.showLoading = true;
      this.dataTableLoading = true;
      this.valueStatusPending = 0;
      this.valueTagPer = 0;
      this.valueTagOrg = 0;
      this.valueTagLoc = 0;
      this.valueTagMisc = 0;
      this.charSelectFilter = name;
      
        
      this.listModelTagHistory1 = this.listModelTagHistoryEN
      this.listModelTagHistory2 = this.listModelTagHistoryEN
      
      this.getDataProcessTag();
    },
    getArticleHasTag(text) {
      this.$modal.show("modal-list-article");
      HTTP.get("/tags/article", {
        params: {
          page: 1,
          text: text,
        },
      }).then((response) => {
        this.TagArticle = response.data;
        for (let i = 0; i < this.TagArticle.length; i++) {
          if (
            this.TagArticle[i].article[0].isTag &&
            this.TagArticle[i].article[0].isTagAi
          ) {
            this.statusTagPost[i] = "2";
            this.colorStatusTagPost[i] = "success";
            this.colorStatusBackgr[i] = "note-success";
          }
          if (
            this.TagArticle[i].article[0].isTag === undefined &&
            this.TagArticle[i].article[0].isTagAi === undefined
          ) {
            this.statusTagPost[i] = "0";
            this.colorStatusTagPost[i] = "warning";
            this.colorStatusBackgr[i] = "note-work";
          }
          if (
            (this.TagArticle[i].article[0].isTag &&
              !this.TagArticle[i].article[0].isTagAi) ||
            (!this.TagArticle[i].article[0].isTag &&
              this.TagArticle[i].article[0].isTagAi)
          ) {
            this.statusTagPost[i] = "1";
            this.colorStatusTagPost[i] = "warning";
            this.colorStatusBackgr[i] = "note-work";
          }
        }
      });
    },
    closeArticleHasTag() {
      this.$modal.hide("modal-list-article");
    },
    getPage(dataPage) {
      this.dataTable = dataPage.table;
      this.result = dataPage.dataSame;
      this.totalTypeTag = this.dataTable.length;
      //width taglist
      for (let i = 0; i < this.dataTable.length; i++) {
        let status;
        if (this.dataTable[i].source.length === 2) {
          if (this.dataTable[i].source[0] === "0")
            status = this.dataTable[i].status[1];
          if (this.dataTable[i].source[0] === "1")
            status = this.dataTable[i].status[0];
        }
        if (this.dataTable[i].scoreOrigin.length !== 2) {
          status = this.dataTable[i].status[0];
        }
        if (this.dataTable[i].type === "PER") this.valueTagPer += 1;
        if (this.dataTable[i].type === "ORG") this.valueTagOrg += 1;
        if (this.dataTable[i].type === "LOC") this.valueTagLoc += 1;
        if (this.dataTable[i].type === "MISC") this.valueTagMisc += 1;
        if (status === 2) this.valueStatusIgnore += 1;
        if (status === 1) this.valueStatusPending += 1;
        if (status === 0) this.valueStatusSuccess += 1;
      }
      this.totalStatusKeyword = Number(
        this.valueStatusIgnore +
          this.valueStatusPending +
          this.valueStatusSuccess
      );
      ///////////////////////////////////
      for (let i = 0; i < this.result.length; i++) {
        this.countTag++;
        this.itemSame[i] = this.dataTable.find(
          (x) => x.name === this.result[i].name
        );
        if (this.itemSame[i]) {
          // console.log(this.result[i].status[0])
          let result1 = this.result[i];
          let statusTag = "";
          let arraySource = this.itemSame[i].source;
          let dataStatus;
          let resultScore;
          if (arraySource.length === 2) {
            resultScore = this.itemSame[i].scoreOrigin[0];
            if (resultScore === null)
              resultScore = this.itemSame[i].scoreOrigin[1];
            resultScore = "(" + Math.floor(resultScore * 100) + "%)";
            this.score[i] = resultScore;
            this.stringSource[
              i
            ] = `<span class="badge outline-badge-success"><img class="image-logo-step image-source type-exist" src="/assetsAdmin/backend/assets/img/tag.png"></span> <span class="badge outline-badge-success"> <img class="image-logo-step image-source type-exist" src="/assetsAdmin/backend/assets/img/ai.png"> ${this.score[i]} </span>`;
            if (arraySource[0] === "0") dataStatus = result1.status[1];
            if (arraySource[0] === "1") dataStatus = result1.status[0];
          } else {
            dataStatus = result1.status[0];
            if (arraySource[0] === "1") {
              resultScore = this.itemSame[i].scoreOrigin[0];
              resultScore = "(" + Math.floor(resultScore * 100) + "%)";
              this.score[i] = resultScore;
              this.stringSource[
                i
              ] = `<span class="badge outline-badge-dark"><img class="image-logo-step image-source type-unexist" src="/assetsAdmin/backend/assets/img/tag.png"></span> <span class="badge outline-badge-success"> <img class="image-logo-step image-source type-exist" src="/assetsAdmin/backend/assets/img/ai.png"> ${this.score[i]} </span>`;
            }
            if (arraySource[0] === "0") {
              this.score[i] = null;
              this.stringSource[
                i
              ] = `<span class="badge outline-badge-success"> <img class="image-logo-step image-source type-exist" src="/assetsAdmin/backend/assets/img/tag.png"> </span> <span class="badge outline-badge-dark"> <img class="image-logo-step image-source type-unexist" src="/assetsAdmin/backend/assets/img/ai.png"></span>`;
            }
          }
          if (dataStatus === 2) {
            statusTag = "Ignore";
          }
          if (dataStatus === 1) {
            statusTag = "Pending";
          }
          if (dataStatus === 0) {
            statusTag = "Verified";
          }
          if (statusTag === "Ignore") {
            this.colorStatus[i] = "danger";
          }
          if (statusTag === "Pending") {
            this.colorStatus[i] = "warning";
          }
          if (statusTag === "Verified") {
            this.colorStatus[i] = "success";
          }
        }
      }
      this.dataTableLoading = false;
    },
    getDataProcessTag() {
      let idModelOne = "";
      let timeOne = "";
      let idModelTwo = "";
      let timeTwo = "";
      if (this.modelSelect1 !== null) {
        let array = this.modelSelect1.split("+");
        idModelOne = array[0];
        timeOne = array[1];
      }
      if (this.modelSelect2 !== null) {
        let array1 = this.modelSelect2.split("+");
        idModelTwo = array1[0];
        timeTwo = array1[1];
      }
      HTTP.get("tags/get-tag-same", {
        params: {
          charSelectFilter: this.charSelectFilter,
          idModelOne: idModelOne,
          timeOne: timeOne,
          idModelTwo: idModelTwo,
          timeTwo: timeTwo,
        },
      }).then((response) => {
        let result = response.data;
        this.getPage(result);
        if (this.modelSelect1 !== null) {
          this.getTagSelect1(result);
        }
        if (this.modelSelect2 !== null) {
          this.getTagSelect2(result);
        }
        this.showLoading = false;
      });
    },
    getModelToSelect1() {
      this.showLoading = true;
      this.dataTableLoading = true;
      this.getDataProcessTag();
      if (this.modelSelect1 == 0) {
      } else {
        let array = this.modelSelect1.split("+");
        let idModel = array[0];
        let time = array[1];
        this.getListModeluniqueSelect(1, idModel);
        HTTP.get("/tags/get-data-process-tag", {
          params: {
            idModelOne: idModel,
            timeOne: time,
          },
        }).then((response) => {
          let result = response.data;
          this.arrayTypeTagOne1 = result[2];
          for (let i = 0; i < this.arrayTypeTagOne1.length; i++) {
            this.totalTypeTagOne1 += this.arrayTypeTagOne1[i].count;
            if (this.arrayTypeTagOne1[i]._id === "PER")
              this.valueTagPerOne1 = this.arrayTypeTagOne1[i].count;
            if (this.arrayTypeTagOne1[i]._id === "ORG")
              this.valueTagOrgOne1 = this.arrayTypeTagOne1[i].count;
            if (this.arrayTypeTagOne1[i]._id === "LOC")
              this.valueTagLocOne1 = this.arrayTypeTagOne1[i].count;
            if (this.arrayTypeTagOne1[i]._id === "MISC")
              this.valueTagMiscOne1 = this.arrayTypeTagOne1[i].count;
          }
        });
      }
    },
    getModelToSelect2() {
      this.showLoading = true;
      this.dataTableLoading = true;
      this.getDataProcessTag();
      if (this.modelSelect2 == 0) {
      } else {
        let array = this.modelSelect2.split("+");
        let idModel = array[0];
        let time = array[1];
        this.getListModeluniqueSelect(2, idModel);
        HTTP.get("/tags/get-data-process-tag", {
          params: {
            idModelTwo: idModel,
            timeTwo: time,
          },
        }).then((response) => {
          let result = response.data;
          this.arrayTypeTagTwo2 = result[3];
          for (let i = 0; i < this.arrayTypeTagTwo2.length; i++) {
            this.totalTypeTagTwo2 += this.arrayTypeTagTwo2[i].count;
            if (this.arrayTypeTagTwo2[i]._id === "PER")
              this.valueTagPerTwo2 = this.arrayTypeTagTwo2[i].count;
            if (this.arrayTypeTagTwo2[i]._id === "ORG")
              this.valueTagOrgTwo2 = this.arrayTypeTagTwo2[i].count;
            if (this.arrayTypeTagTwo2[i]._id === "LOC")
              this.valueTagLocTwo2 = this.arrayTypeTagTwo2[i].count;
            if (this.arrayTypeTagTwo2[i]._id === "MISC")
              this.valueTagMiscTwo2 = this.arrayTypeTagTwo2[i].count;
          }
        });
      }
    },
    applyResultsTagOne() {
      if (this.modelSelect1 == null) {
      } else {
        this.showLoading = true;
        this.dataTableLoading = true;
        let array = this.modelSelect1.split("+");
        let idModel = array[0];
        let time = array[1];
        HTTP.get("tags/apply-result-tag-history", {
          params: {
            idModel: idModel,
            time: time,
          },
        }).then((response) => {    
          this.$root.$emit('total-tagComponent')    
          this.getDataProcessTag();
        });
      }    
    },
    applyResultsTagTwo() {
      if (this.modelSelect2 == null) {
      } else {
        this.showLoading = true;
        this.dataTableLoading = true;
        let array = this.modelSelect2.split("+");
        let idModel = array[0];
        let time = array[1];
        HTTP.get("tags/apply-result-tag-history", {
          params: {
            idModel: idModel,
            time: time,
          },
        }).then((response) => {          
          this.getDataProcessTag();
        });
      }
    },
    getTagSelect1(dataSelect1) {
      this.totalTypeTagOne1 = 0;
      this.data1 = dataSelect1.dataSame;
      this.dataTable1 = dataSelect1.table;
      this.dataOne = dataSelect1.dataOne;
      this.totalTypeTagOne = this.dataOne.length;
      for (let i = 0; i < this.dataOne.length; i++) {
        if (this.dataOne[i].type === "PER") this.valueTagPerOne += 1;
        if (this.dataOne[i].type === "ORG") this.valueTagOrgOne += 1;
        if (this.dataOne[i].type === "LOC") this.valueTagLocOne += 1;
        if (this.dataOne[i].type === "MISC") this.valueTagMiscOne += 1;
      }
      for (let i = 0; i < this.data1.length; i++) {
        this.itemSame1[i] = this.dataOne.find(
          (x) => x.name === this.data1[i].name
        );
        if (this.itemSame1[i] != undefined) {
          if (this.itemSame1[i]) {
            this.resultOne.push(this.itemSame1[i]);
            this.lengTagMapHistory.push(this.itemSame1[i].listTagMap.length);
          }
          if (this.itemSame1[i].type === "PER") {
            this.classTag1[i] = "pricing text-success";
            this.stringTypeTag1[i] = "Person";
          } else if (this.itemSame1[i].type === "ORG") {
            this.classTag1[i] = "pricing text-primary";
            this.stringTypeTag1[i] = "Organization";
          } else if (this.itemSame1[i].type === "LOC") {
            this.classTag1[i] = "pricing text-info";
            this.stringTypeTag1[i] = "Location";
          } else {
            this.classTag1[i] = "pricing text-secondary";
            this.stringTypeTag1[i] = "Misc";
          }
          if (this.itemSame1[i].score === null) this.scoreOne[i] = "-";
          else {
            this.scoreOne[i] = this.itemSame1[i].score * 100;
            this.scoreOne[i] = Math.floor(this.scoreOne[i]) + "%";
          }
        }
      }
    },
    getTagSelect2(dataSelect2) {
      this.totalTypeTagTwo2 = 0;
      this.data2 = dataSelect2.dataSame;
      this.dataTable2 = dataSelect2.table;
      this.dataTwo = dataSelect2.dataTwo;
      this.totalTypeTagTwo = this.dataTwo.length;
      for (let i = 0; i < this.dataTwo.length; i++) {
        if (this.dataTwo[i].type === "PER") this.valueTagPerTwo += 1;
        if (this.dataTwo[i].type === "ORG") this.valueTagOrgTwo += 1;
        if (this.dataTwo[i].type === "LOC") this.valueTagLocTwo += 1;
        if (this.dataTwo[i].type === "MISC") this.valueTagMiscTwo += 1;
      }
      for (let i = 0; i < this.data2.length; i++) {
        this.itemSame2[i] = this.dataTwo.find(
          (x) => x.name === this.data2[i].name
        );
        if (this.itemSame2[i] != undefined) {
          if (this.itemSame2[i]) {
            this.resultOne.push(this.itemSame2[i]);
            this.lengTagMapHistory2.push(this.itemSame2[i].listTagMap.length);
          }
          if (this.itemSame2[i].type === "PER") {
            this.classTag2[i] = "pricing text-success";
            this.stringTypeTag2[i] = "Person";
          } else if (this.itemSame2[i].type === "ORG") {
            this.classTag2[i] = "pricing text-primary";
            this.stringTypeTag2[i] = "Organization";
          } else if (this.itemSame2[i].type === "LOC") {
            this.classTag2[i] = "pricing text-info";
            this.stringTypeTag2[i] = "Location";
          } else {
            this.classTag2[i] = "pricing text-secondary";
            this.stringTypeTag2[i] = "Misc";
          }
          if (this.itemSame2[i].score === null) this.scoreTwo[i] = "-";
          else {
            this.scoreTwo[i] = this.itemSame2[i].score * 100;
            this.scoreTwo[i] = Math.floor(this.scoreTwo[i]) + "%";
          }
        }
      }
    },
    setColorSelectCategory(tagName, Type, Status) {
      if (Status == "success") {
        this.saveEditTag(tagName, Type, 0);
      } else if (Status == "warning") {
        this.saveEditTag(tagName, Type, 1);
      } else {
        this.saveEditTag(tagName, Type, 2);
      }
    },
    setColorSelectStatus(tagName, Type, event) {
      this.saveEditTag(tagName, Type, event.target.value);
    },
    saveEditTag(tagName, Type, Status) {
      if (tagName === "") {
        new Snackbar(`Tag empty`, {
          position: "bottom-right",
          theme: "light",
          style: {
            container: [
              ["background-color", "#e7515a"],
              ["border-radius", "5px"],
            ],
            message: [["color", "#fff"]],
          },
        });
      } else {
        HTTP.get("/tags/save-edit-tag", {
          params: {
            tag: tagName,
            type: Type,
            statusTag: Status,
          },
        }).then(() => {
          new Snackbar(`Edit Tag Success`, {
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
      }
    },
    getListModelDefault() {
      HTTP.get("tags/get-list-model-generate-history", {
        params: { language: this.language },
      }).then((response) => {
        this.listModel = response.data;
        for (let i = 0; i < this.listModel.length; i++) {
          
          this.listModelTagHistoryEN.push(this.listModel[i]);
          
        }
        
        this.listModelTagHistory1 = this.listModelTagHistoryEN;
        this.listModelTagHistory2 = this.listModelTagHistoryEN;
        
      


      });
    },
    getListModeluniqueSelect(index, idModel) {
      
      if (index == 1) {
        this.listModelTagHistory2 = [];
        for (let i = 0; i < this.listModelTagHistoryEN.length; i++) {
          if (this.listModelTagHistoryEN[i].model_id != idModel) {
            this.listModelTagHistory2.push(this.listModelTagHistoryEN[i]);
          }
        }
      } else if (index == 2) {
        this.listModelTagHistory1 = [];
        for (let i = 0; i < this.listModelTagHistoryEN.length; i++) {
          if (this.listModelTagHistoryEN[i].model_id !== idModel) {
            this.listModelTagHistory1.push(this.listModelTagHistoryEN[i]);
          }
        }
      }
      
    },
    // getListModeluniqueSelect(index, idModel) {
    //   if (this.language = 'en'){
    //     if (index == 1) {
    //       this.listModelTagHistory2 = [];
    //       for (let i = 0; i < this.listModelTagHistoryEN.length; i++) {
    //         for (let j = 0; j < this.listModelTagHistory1.length; i++){
    //           if (this.listModelTagHistory1[j].model_id != idModel) {
    //             this.listModelTagHistory2.push(this.listModelTagHistoryEN[i]);
    //           }
    //         }
    //       }
    //     } else if (index == 2) {
    //       this.listModelTagHistory1 = [];
    //       for (let i = 0; i < this.listModelTagHistoryEN.length; i++) {
    //         for (let j = 0; j < this.listModelTagHistory2.length; i++){
    //           if (this.listModelTagHistory2[j].model_id != idModel) {
    //             this.listModelTagHistory1.push(this.listModelTagHistoryEN[i]);
    //           }
    //         }
    //       }
    //     }
    //   }else{
    //     if (index == 1) {
    //       this.listModelTagHistory2 = [];
    //       for (let i = 0; i < this.listModelTagHistory1.length; i++) {
    //         if (this.listModelTagHistory1[i].model_id != idModel) {
    //           this.listModelTagHistory2.push(this.listModelTagHistory1[i]);
    //         }
    //       }
    //     } else if (index == 2) {
    //       this.listModelTagHistory1 = [];
    //       for (let i = 0; i < this.listModelTagHistory2.length; i++) {
    //         if (this.listModelTagHistory2[i].model_id !== idModel) {
    //           this.listModelTagHistory1.push(this.listModelTagHistory2[i]);
    //         }
    //       }
    //     }
    //   }
    // },
  },
  mounted() {
    this.getDataProcessTag();
    this.getListModelDefault();
    HTTP.get(
      `tags/get-data-process-tag?idModelOne&timeOne&idModelTwo&timeTwo`
    ).then((response) => {
      this.result1 = response.data;
      this.arrayStatus = this.result1[0];
      this.arrayTypeTag = this.result1[1];

      for (let i = 0; i < this.arrayStatus.length; i++) {
        this.totalStatus += this.arrayStatus[i].count;
        if (this.arrayStatus[i]._id.type === 1)
          this.valuePending = this.arrayStatus[i].count;
        if (this.arrayStatus[i]._id.type === 0)
          this.valueSuccess = this.arrayStatus[i].count;
        if (this.arrayStatus[i]._id.type === 2)
          this.valueIgnore = this.arrayStatus[i].count;
      }

      for (let i = 0; i < this.arrayTypeTag.length; i++) {
        this.totalTypeTag1 += this.arrayTypeTag[i].count;
        if (this.arrayTypeTag[i]._id.type === "PER")
          this.valueTagPer1 = this.arrayTypeTag[i].count;
        if (this.arrayTypeTag[i]._id.type === "ORG")
          this.valueTagOrg1 = this.arrayTypeTag[i].count;
        if (this.arrayTypeTag[i]._id.type === "LOC")
          this.valueTagLoc1 = this.arrayTypeTag[i].count;
        if (this.arrayTypeTag[i]._id.type === "MISC")
          this.valueTagMisc1 = this.arrayTypeTag[i].count;
      }
    });
  },
};
</script>
<style scoped>
span.badge.outline-badge-success.badge-pills,
a.badge.outline-badge-success.badge-pills,
span.badge.outline-badge-success.badge-pills {
  border-radius: 30px !important;
}
.badge-pills {
  border-radius: 30px;
  margin-right: 2px;
}
span.badge.outline-badge-warning.badge-pills {
  border-radius: 30px;
}
.box-element-tag {
  font-size: 14px;
}
li {
  background: linear-gradient(
    to left,
    rgb(226, 160, 63) 0%,
    rgb(226, 160, 63) 76.4593%,
    rgb(26, 188, 156) 76.4593%,
    rgb(26, 188, 156) 100%
  );
}
</style>