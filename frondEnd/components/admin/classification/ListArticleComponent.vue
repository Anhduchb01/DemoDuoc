<template>
  <div class="row">
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
      <div class="widget" style="padding: 20px 0px;">
        <div style="width: 50%;box-shadow: 7px 0px 10px 0px;top: 0px;position: absolute;height: 647px;opacity: 0.4;"></div>
        <div class="d-flex box-header w-100" style="padding-right: 6px;position: relative;z-index: 2;">
          <div class="box-inline" style="width: 50%;">
            <div style="width: 100%;align-items: center;display: flex;justify-content: space-between;height: 46px;">
              <h5 class="m-0">List Article</h5>
              <!-- <select v-model="language" @change="changeLanguage" style="width: 200px;;margin-left: 10px;height: calc(1.4em + 1.4rem + 2px);padding: 0.375rem 0.75rem" id="select-language" class="placeholder js-states form-control">
                <option selected value="en">English</option>
                <option value="jp">Japanese</option>
              </select> -->
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
              <div style="cursor: pointer;">
                <svg v-on:click="openSettingModel" class="icon-model m-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
            </div>
            <div>
              <div class="mt-2 mb-2">
                <p style="margin: 0px;font-size: 12px;">Total Articles</p>
                <div class="progress progress-sm progress-bar-stack m-0" style="border-radius: 30px;" id="human-active">
                  <div class="bg-success" id="perTotal1" role="progressbar" :title="valuePOS" :style="'width:'+ (valuePOS / totalPost * 100) +'%; transition: 1.5s;'" style="width: 0; transition: 1.5s;background-color: #38C477 !important" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-primary" id="orgTotal1" role="progressbar" :title="valueNEG" :style="'width:'+ (valueNEG / totalPost * 100) +'%; transition: 1.5s;'" style="width: 0; transition: 1.5s;background-color: #F2543D!important" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-info" id="locTotal1" role="progressbar" :title="valueNEU" :style="'width:'+ (valueNEU / totalPost * 100) +'%; transition: 1.5s;'" style="width: 0; transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-dark" id="emptyTotal1" role="progressbar" :title="valueEmpty" :style="'width:'+ (valueEmpty / totalPost * 100) +'%; transition: 1.5s;'" style="width: 0; transition: 1.5s;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-pending" id="pendingTotal" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div class="w-100 d-flex menu-table" style="height: 41px;">
              <div class="box-element-tag" style="width: 50%;">Title</div>
              <div class="box-element-tag" style="width: 15%;">Category</div>
              <div class="box-element-tag" style="width: 10%;">Score</div>
              <div class="box-element-tag" style="width: 15%;">Status</div>
              <div class="box-element-tag" style="width: 10%;">Action</div>
            </div>
          </div>
          <div class="box-inline" style="width: 25%;">
            <div style="width: 100%;align-items: center;display: flex;justify-content: space-between;height: 46px;">
              <div class="content-heading">
                <select v-model="modelSelect1" @change="getArticleSelect1()" style="margin-right:10px;height:45px;padding: 0.75rem 1.25rem" id="select-result-1" class="placeholder js-states form-control">
                  <option disabled :value="null">-- select an option --</option>
                  <option v-for="(model,index) in listModelClassificationHistory1" :key="index" :value="model.model_id+'+'+model.time">{{model.name}} {{model.time}}</option>
                </select>
              </div>
              <div class="content-heading">
                <button style="height: 45px;white-space: nowrap;width:135px;" class="btn btn-primary btn-block" v-on:click="applyResultsTagOne()">
                  <svg style="display: none;" id="icon-loading-btn-apply-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg>
                  <span class="text-button-apply-1">Apply Results</span>
                </button>
              </div>
            </div>
            <div>
              <div class="mt-2 mb-2">
                <p style="margin: 0px;font-size: 12px;">Number Of Article</p>
                <div class="progress progress-sm progress-bar-stack m-0" style="border-radius: 30px;" id="human-active">
                  <div class="bg-success bg-positive" id="newsTotalOne" role="progressbar" :title="valuePOS1" :style="'width:'+ valuePOS1Progressbar +'%;'" style="transition: 1.5s;background-color: #38C477 !important" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-primary bg-negative" id="eventTotalOne" role="progressbar" :title="valueNEG1" :style="'width:'+ valueNEG1Progressbar +'%; transition: 1.5s;background-color: #F2543D!important'" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-info bg-neutral" id="publicationsTotalOne" role="progressbar" :title="valueNEU1" :style="'width:'+ valueNEU1Progressbar +'%; transition: 1.5s;'" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div style="height: 41px;"></div>
          </div>
          <div class="box-inline" style="width: 25%;">
            <div style="width: 100%;align-items: center;display: flex;justify-content: space-between;height: 46px;">
              <div class="content-heading">
                <select v-model="modelSelect2" style="margin-right: 10px;height:45px;padding: 0.75rem 1.25rem" @change="getArticleSelect2()" id="select-result-2" class="placeholder js-states form-control">
                  <option disabled :value="null">-- select an option --</option>
                  <option v-for="(model,index) in listModelClassificationHistory2" :key="index" :value="model.model_id+'+'+model.time">{{model.name}} {{model.time}}</option>
                </select>
              </div>
              <div class="content-heading">
                <button style="height: 45px;white-space: nowrap;width:135px;" class="btn btn-primary btn-block" v-on:click="applyResultsTagTwo()">
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
                  <span class="text-button-apply-2">Apply Results</span>
                </button>
              </div>
            </div>
            <div>
              <div class="mt-2 mb-2">
                <p style="margin: 0px;font-size: 12px;">Number Of Article</p>
                <div class="progress progress-sm progress-bar-stack m-0" style="border-radius: 30px;" id="human-active">
                  <div class="bg-success bg-positive" id="newsTotalOne" role="progressbar" :title="valuePOS2" :style="'width:'+ valuePOS2Progressbar +'%;'" style="transition: 1.5s;background-color: #38C477 !important" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-primary bg-negative" id="eventTotalOne" role="progressbar" :title="valueNEG2" :style="'width:'+ valueNEG2Progressbar +'%; transition: 1.5s;background-color: #F2543D!important'" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                  <div class="bg-info bg-neutral" id="publicationsTotalOne" role="progressbar" :title="valueNEU2" :style="'width:'+ valueNEU2Progressbar +'%; transition: 1.5s;'" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
            <div style="height: 41px;"></div>
          </div>
        </div>
        <div v-if="conditionLoading" class="d-flex box-list w-100" style="background-color: rgb(255 255 255 / 50%);z-index: 100">
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
        <div v-else class="d-flex box-list w-100" id="box-list" v-on:scroll.passive="handleScrollBoxList">
          <div class="table-tag box-inline" style="width: 50%">
            <div v-for="(result,index) of result" :key="'a'+result._id" class="d-flex" style="height: 100px">
              <div class="border-item-tag"></div>
              <div class="box-element-tag align-self-center" style="width: 48%;">
                <div class="product-name" v-on:click="getArticleSelectPopup(result.content_html)">
                  <div style="align-self: center;">
                    <img style="width:30px;height:30px;box-shadow: none;margin-right: 10px;margin-right: 10px;" class="img--contain image-en" src="~/static/assetsAdmin/img/new.png" alt="img" />
                  </div>
                  <div class="align-self-center title-article">
                    <p class="prd-name" :id="'name-'+ result._id" :title="result.title">{{result.title}}</p>
                    <p class="prd-description">{{result.description}}</p>
                  </div>
                </div>
              </div>
              <div class="box-element-tag align-self-center" style="width: 17%;">
                <select v-if="result.category =='POS'"  v-model="result.category" style="color:#38C477!important" class="placeholder js-states form-control m-0 select-category-article text-select-category" :id="'type-tag-selected-'+ (index+1)">
                  <option selected style="color: #38C477" value="POS">Positive</option>
                  <option style="color: #F2543D" value="NEG">Negative</option>
                  <option style="color: #696969" value="NEU">Neutral</option>
                </select>
                <select v-else-if="result.category =='NEG'"  v-model="result.category" style="color:#F2543D !important" class="placeholder js-states form-control m-0 select-category-article text-select-category" :id="'type-tag-selected-'+ (index+1)">
                  <option  style="color: #38C477" value="POS">Positive</option>
                  <option selected style="color: #F2543D" value="NEG">Negative</option>
                  <option style="color: #696969" value="NEU">Neutral</option>
                </select>
                <select v-else-if="result.category =='NEU'"  v-model="result.category" style="color:#696969!important" class="placeholder js-states form-control m-0 select-category-article text-select-category" :id="'type-tag-selected-'+ (index+1)">
                  <option  style="color: #38C477" value="POS">Positive</option>
                  <option  style="color: #F2543D" value="NEG">Negative</option>
                  <option selected style="color: #696969" value="NEU">Neutral</option>
                </select>
                <!-- <select v-else :style="myStyle" v-model="result.category" style="color: #805dca!important" class="placeholder js-states form-control m-0 select-category-article text-select-category text-secondary" :id="'type-tag-selected-'+ (index+1)">
                  <option style="color: #1abc9c !important" value="news">News</option>
                  <option style="color: #4361ee !important" value="event">Event</option>
                  <option style="color: #2196f3 !important" value="publications">Publications</option>
                  <option selected style="color: #805dca !important" value="other">Other</option>
                </select> -->
              </div>
              <div class="box-element-tag align-self-center" style="width: 10%;">
                
                <span v-if="result.category =='POS'" style="color: #38C477" :id="'value-score-article-'+result._id" class="discount-pricing pl-0">{{(result.classificationScore[result.category]*100).toFixed(2)}}</span>
                <span v-else-if="result.category =='NEG'" style="color: #F2543D" :id="'value-score-article-'+result._id" :class="'discount-pricing pl-0 ' ">{{(result.classificationScore[result.category]*100).toFixed(2)}}</span>
                <span v-else-if="result.category =='NEU'" style="color: #696969" :id="'value-score-article-'+result._id" :class="'discount-pricing pl-0 ' ">{{(result.classificationScore[result.category]*100).toFixed(2)}}</span>

              </div>
              <div class="box-element-tag align-self-center" style="width: 17%;">
                <select v-if="result.classificationStatus == 0" v-model="result.classificationStatus" style="color: #1abc9c !important" class="placeholder js-states form-control m-0 select-category-article text-select-category" :id="'status-tag-selected-' +(index +1)">
                  <option selected style=" color: #1abc9c !important" value="0">Verify</option>
                  <option style="color: #e2a03f !important" value="1">Pending</option>
                  <option style="color: #e7515a !important" value="2">Ignore</option>
                </select>
                <select v-else-if="result.classificationStatus == 1" v-model="result.classificationStatus" style="color: #e2a03f !important" class="placeholder js-states form-control m-0 select-category-article text-select-category" :id="'status-tag-selected-' +(index +1)">
                  <option style="color: #1abc9c !important" value="0">Verify</option>
                  <option selected style="color: #e2a03f !important" value="1">Pending</option>
                  <option style="color: #e7515a !important" value="2">Ignore</option>
                </select>
                <select v-else v-model="result.classificationStatus" style="color: #e7515a !important" class="placeholder js-states form-control m-0 select-category-article text-select-category" :id="'status-tag-selected-' +(index +1)">
                  <option style="color: #1abc9c !important" value="0">Verify</option>
                  <option style="color: #e2a03f !important" value="1">Pending</option>
                  <option selected style="color: #e7515a !important" value="2">Ignore</option>
                </select>
              </div>
              <div class="box-element-tag m-0 w-100 align-self-center" style="width: 8%;text-align: center;padding-left: 30px;">
                <svg style="stroke: rgb(33, 150, 243);cursor: pointer;" v-on:click="saveEditArticle(result._id,result.category,result.classificationStatus)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save icon-save-edit-tag">
                  <title>Save</title>
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
              </div>
            </div>
          </div>
          <div class="fistRunArticle box-inline" style="width: 25%;">
            <div v-for="data in datas1" :key="'data1'+data._id" style="height: 100px;padding: 15px 0px">
              <div id="box-score-news" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;margin-bottom: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-news" class="progress-bar bg-primary" role="progressbar" :style="'width: '+(data.classificationScore.POS * 100).toFixed(0)+'%;transition: 1s;background-color: #38C477 !important;border-color: #38C477;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.POS * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div>
              <div id="box-score-event" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;margin-bottom: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-event" class="progress-bar bg-primary" role="progressbar" :style="'width:'+(data.classificationScore.NEG * 100).toFixed(0)+'%;transition: 1s;background-color: #F2543D !important;border-color: #F2543D;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.NEG * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div>
              <div id="box-score-publications" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;margin-bottom: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-publications" class="progress-bar bg-primary" role="progressbar" :style="'width:'+(data.classificationScore.NEU * 100).toFixed(0)+'%;transition: 1s;background-color: #696969 !important;border-color: #696969;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.NEU * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div>
              <!-- <div id="box-score-other" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-other" class="progress-bar bg-primary" role="progressbar" :style="'width: '+(data.classificationScore.other * 100).toFixed(0)+'%;transition: 1s;background-color: #a259cb !important;border-color: #a259cb;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.other * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="secondRunArticle box-inline" style="width: 25%;">
            <div v-for="data in datas2" :key="'data2'+data._id" style="height: 100px;padding: 15px 0px">
              <div id="box-score-news" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;margin-bottom: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-news" class="progress-bar bg-primary" role="progressbar" :style="'width: '+(data.classificationScore.POS * 100).toFixed(0)+'%;transition: 1s;background-color: #38C477 !important;border-color: #38C477;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.POS * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div>
              <div id="box-score-event" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;margin-bottom: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-event" class="progress-bar bg-primary" role="progressbar" :style="'width:'+(data.classificationScore.NEG * 100).toFixed(0)+'%;transition: 1s;background-color: #F2543D !important;border-color: #F2543D;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.NEG * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div>
              <div id="box-score-publications" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 10px;margin-bottom: 10px;cursor: pointer;border-radius: 10px;justify-content: end;">
                <div id="process-score-publications" class="progress-bar bg-primary" role="progressbar" :style="'width:'+(data.classificationScore.NEU * 100).toFixed(0)+'%;transition: 1s;background-color: #696969 !important;border-color: #696969;'" aria-valuemin="0" aria-valuemax="100">
                  <div class="progress-title">
                    <span class="value-show">{{(data.classificationScore.NEU * 100).toFixed(0)}}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                        <input @change="getTagVerify()" v-model="modelPointEdit" id="model-point-edit" type="number" min="0" max="100" placeholder="Point Apply" class="form-control" />
                      </div>
                    </div>
                    <div class="mail-to">
                      <div>
                        <div id="box-score-news" class="progress progress-box-score" style="width: 100%;margin: 0px;height: 21px;cursor: pointer;border-radius: 10px;">
                          <div id="process-score-article-news" :style="'width:'+percentArticleVerify+'%'" class="progress-bar bg-primary" role="progressbar" style=" transition: all 1s ease 0s; border-color: rgb(121, 219, 114); background-color: rgb(121, 219, 114) !important;" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-title">
                              <span></span>
                              <span class="value-show-article-verify">{{percentArticleVerify}} %</span>
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
          <button v-on:click="settingPointModel()" id="btn-save-point-edit" class="btn btn-primary float-left">
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

    <modal name="modal-article" width="90%" height="90%" styles="position: relative;top:100px !important; left: 30px !important;overflow: initial">
      <div class="modal-content">
        <div class="modal-body">
          <svg v-on:click="closeModalArticle()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          <div class="modal-list" style="height: calc(100vh - 115px) !important;overflow-y: auto;">
            <div v-html="contentHTML" id="article-contenthtml"></div>
          </div>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
import { saveAs } from 'file-saver';
export default {
  props: [
    "listModelBaseOrigin",
    "listModelCreateOrigin",
    "results",
    "valuePOS",
    "valueNEG",
    "valueNEU",
    "valueOther",
    "valueEmpty",
    "error",
    "totalPost",
    "totalArticleVerify",
  ],

  computed: {
    listModelBase() {
      return this.listModelBaseOrigin;
    },
    listModelCreate() {
      return this.listModelCreateOrigin;
    },
    valuePOS1Progressbar() {
      if (this.valuePOS1 != 0) {
        return (this.valuePOS1 / this.totalCategory1) * 100;
      } else {
        return 0;
      }
    },
    valueNEG1Progressbar() {
      if (this.valueNEG1 != 0) {
        return (this.valueNEG1 / this.totalCategory1) * 100;
      } else {
        return 0;
      }
    },
    valueNEU1Progressbar() {
      if (this.valueNEU1 != 0) {
        return (this.valueNEU1 / this.totalCategory1) * 100;
      } else {
        return 0;
      }
    },
    valuePOS2Progressbar() {
      if (this.valuePOS2 != 0) {
        return (this.valuePOS2 / this.totalCategory2) * 100;
      } else {
        return 0;
      }
    },
    valueNEG2Progressbar() {
      if (this.valueNEG2 != 0) {
        return (this.valueNEG2 / this.totalCategory2) * 100;
      } else {
        return 0;
      }
    },
    valueNEU2Progressbar() {
      if (this.valueNEU2 != 0) {
        return (this.valueNEU2 / this.totalCategory2) * 100;
      } else {
        return 0;
      }
    },
  },
  beforeUpdate() {},
  data() {
    return {
      totalPostLanguage: 0,
      articleVerify: 0,
      percentArticleVerify: 0,
      modelPointEdit: null,
      modelSelect1: null,
      modelSelect2: null,
      myStyle: {
        color: "",
      },
      classificationStatus: [],
      result: [],
      colorStatus: [],
      colorCategory: [],
      articleScore: [],
      description: [],
      page: 1,
      countPageScrollTable: 1,

      datas1: [],
      processValue1: [],
      totalCategory1: 0,
      valuePOS1: 0,
      valueNEG1: 0,
      valueNEU1: 0,


      datas2: [],
      processValue2: [],
      totalCategory2: 0,
      valuePOS2: 0,
      valueNEG2: 0,
      valueNEU2: 0,
   
      listModelClassificationHistory: [],
      listModelClassificationHistory1: [],
      listModelClassificationHistory2: [],
      showModalSettingModel: false,
      conditionLoading: true,
      contentHTML: "",
    };
  },
  methods: {
    async extractData() {
      this.conditionLoading = true;
      try {
        const response = await HTTP.get('getdata/sentiment').then((response) => {
          console.log('ok')
          this.conditionLoading = false;
          const data = response.data.data;
          const jsonBlob = new Blob([JSON.stringify(data)], { type: 'application/json' });
          saveAs(jsonBlob, 'data.json');
      });
        
      } catch (error) {
        console.error(error);
      }
    },
    applyResultsTagOne() {
      if (this.modelSelect1 === null) {
      } else {
        this.conditionLoading = true;
        this.result = [];
        let array = this.modelSelect1.split("+");
        let idModel = array[0];
        let time = array[1];
        HTTP.get("classification/apply-article-has-processed", {
          params: {
            idModel: idModel,
            time: time,
          },
        }).then((response) => {
          this.countPageScrollTable = 1;
          this.getArticle();
          this.getlistModelGenerateHistory();
        });
      }
    },
    applyResultsTagTwo() {
      if (this.modelSelect2 === null) {
      } else {
        this.conditionLoading = true;
        this.result = [];
        let array = this.modelSelect2.split("+");
        let idModel = array[0];
        let time = array[1];
        console.log();
        HTTP.get("classification/apply-article-has-processed", {
          params: {
            idModel: idModel,
            time: time,
          },
        }).then((response) => {
          this.countPageScrollTable = 1;
          this.getArticle();
          this.getlistModelGenerateHistory();
        });
      }
    },
    getArticleSelectPopup(contentHTML) {
      this.contentHTML = contentHTML;
      this.$modal.show("modal-article");
    },
    closeModalArticle() {
      this.$modal.hide("modal-article");
    },
    settingPointModel() {
      this.result = [];

      let pointVerify = this.modelPointEdit;
      if (pointVerify > 100) {
        pointVerify = 100;
      }
      if (pointVerify < 0) {
        pointVerify = 0;
      }
      HTTP.get("classification/save-percent-article-verify", {
        params: {
          pointVerify: pointVerify
        },
      }).then((response) => {
        this.closeSettingModel();
        this.getArticle();
        this.getlistModelGenerateHistory();
      });
    },
    getTagVerify() {

      let pointVerify = this.modelPointEdit;
      if (pointVerify > 100) {
        pointVerify = 100;
      }
      if (pointVerify < 0) {
        pointVerify = 0;
      }
      HTTP.get("classification/get-percent-article-verify", {
        params: {
          pointVerify: pointVerify,
        },
      }).then((response) => {
        this.articleVerify = response.data.length;
        this.percentArticleVerify = (
          (Number(this.articleVerify) / Number(this.totalPostLanguage)) *
          100
        ).toFixed(0);
      });
    },
    closeSettingModel() {
      this.$modal.hide("modal-setting-model");
    },

    openSettingModel() {
      this.$modal.show("modal-setting-model");
    },
    saveEditArticle(id, category, status) {
      category = String(category);
      status = Number(status);
      HTTP.get("classification/save-edit-article", {
        params: { id: String(id), category: category, status: status },
      })
        .then((response) => {})
        .catch((e) => {
          this.errors.push(e);
        });
    },
    handleScrollBoxList: function (e) {
      var boxList = document.getElementById("box-list");
      if (boxList.scrollTop >= boxList.scrollHeight - boxList.clientHeight) {
        this.countPageScrollTable += 1;
        this.getArticle();
        if (this.modelSelect1 != null) {
          this.getArticleSelect1();
        }

        if (this.modelSelect2 != null) {
          this.getArticleSelect2();
        }
      }
    },
    getlistModelGenerateHistory() {
      // HTTP.get("models/classification/get-list-model", {
      //   params: { sourceModel: "classification" },
      // })
      //   .then((response) => {
      //     this.listModelClassificationHistory = response.data[0];
      //     console.log(this.listModelClassificationHistory);
      //   })
      //   .catch((e) => {
      //     this.errors.push(e);
      //   });
      HTTP.get("classification/get-list-model-classification-history", {
        params: { language: this.language },
      })
        .then((response) => {
          this.listModelClassificationHistory = response.data;
          this.listModelClassificationHistory1 = response.data;
          this.listModelClassificationHistory2 = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getListModeluniqueSelect(index, idModel) {
      if (index == 1) {
        this.listModelClassificationHistory2 = [];
        for (let i = 0; i < this.listModelClassificationHistory.length; i++) {
          if (this.listModelClassificationHistory[i].model_id != idModel) {
            this.listModelClassificationHistory2.push(
              this.listModelClassificationHistory[i]
            );
          }
        }
      } else if (index == 2) {
        this.listModelClassificationHistory1 = [];
        for (let i = 0; i < this.listModelClassificationHistory.length; i++) {
          if (this.listModelClassificationHistory[i].model_id !== idModel) {
            this.listModelClassificationHistory1.push(
              this.listModelClassificationHistory[i]
            );
          }
        }
      }
    },
    getArticleSelect1() {
      if (this.modelSelect1 === null) {
      } else {
        let array = this.modelSelect1.split("+");
        let idModel = array[0];
        let time = array[1];
        this.getListModeluniqueSelect(1, idModel);
        HTTP.get("classification/get-article-select", {
          params: {
            page: this.countPageScrollTable,
            idModel: idModel,
            time: time,
          },
        })
          .then((response) => {
            // var data = ;
            this.datas1 = this.datas1.concat(response.data[0]);
            this.processValue1 = response.data[1];
            this.valuePOS1 = 0;
            this.valueNEG1 = 0;
            this.valueNEU1 = 0;
  
            this.totalCategory1 = 0;
            for (let index = 0; index < this.processValue1.length; index++) {
              this.totalCategory1 += this.processValue1[index].count;
              if (this.processValue1[index]._id === "POS") {
                this.valuePOS1 = this.processValue1[index].count;
              }
              if (this.processValue1[index]._id === "NEG") {
                this.valueNEG1 = this.processValue1[index].count;
              }
              if (this.processValue1[index]._id === "NEU") {
                this.valueNEU1 = this.processValue1[index].count;
              }
              
            }
          })
          .catch((e) => {
            this.errors.push(e);
          });
      }
    },
    getArticleSelect2() {
      if (this.modelSelect2 === null) {
      } else {
        let array = this.modelSelect2.split("+");
        let idModel = array[0];
        let time = array[1];
        this.getListModeluniqueSelect(2, idModel);
        HTTP.get("classification/get-article-select", {
          params: {
            page: this.countPageScrollTable,
            idModel: idModel,
            time: time,
          },
        })
          .then((response) => {
            this.datas2 = this.datas2.concat(response.data[0]);
            this.processValue2 = response.data[1];
    
            this.valuePOS2 = 0;
            this.valueNEG2 = 0;
            this.valueNEU2 = 0;
  
            this.totalCategory2 = 0;
            for (let index = 0; index < this.processValue2.length; index++) {
              this.totalCategory2 += this.processValue2[index].count;
              if (this.processValue2[index]._id === "POS") {
                this.valuePOS2 = this.processValue1[index].count;
              }
              if (this.processValue2[index]._id === "NEG") {
                this.valueNEG2 = this.processValue2[index].count;
              }
              if (this.processValue1[index]._id === "NEU") {
                this.valueNEU2 = this.processValue2[index].count;
              }
              
            }
          })
          .catch((e) => {
            this.errors.push(e);
          });
      }
    },
    changeLanguage() {
      this.datas1 = [];
      this.processValue1 = [];
      this.totalCategory1 = 0;
      this.valuePOS1 = 0;
      this.valueNEG1 = 0;
      this.valueNEU1 = 0;

      this.modelSelect1 = null
      this.modelSelect2 = null
      this.countPageScrollTable = 1

      this.datas2 = [];
      this.processValue2 = [];
      this.totalCategory2 = 0;
      this.valueNews2 = 0;
      this.valueEvent2 = 0;
      this.valuePublications2 = 0;
      this.valueOther2 = 0;
      this.result = [];
      this.getArticle();
      this.getlistModelGenerateHistory();
    },

    getArticle() {
      // this.conditionLoading = true;
      HTTP.get(`classification/get-article`, {
        params: { page: this.countPageScrollTable },
      }).then((response) => {
        var data = response.data[1];
        this.result = this.result.concat(data);
        this.totalPostLanguage = response.data[2];
        this.conditionLoading = false;
      });
    },
  },
  mounted() {
    this.getArticle();
    this.getlistModelGenerateHistory();
  },
};
</script>
<style scoped>
.select-category-article {
  text-align: center;
  box-shadow: none;
  outline: 0px;
  border: 0px;
  width: auto;
  text-align: center;
  padding: 0px !important;
  font-size: inherit !important;
  cursor: pointer;
}
.progress {
  height: 4px;
}
.btn {
  font-size: 14px;
}
</style>
<style>
.bg-positive{
  background-color: #38C477 !important
}
.bg-negative{
  background-color: #F2543D!important
}
.bg-neutral{
  background-color: #696969 !important
}
</style>