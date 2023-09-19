<template>
  <div class="widget-content searchable-container gird">
    <div class="row">
      <div class="col-xl-4 col-lg-5 col-md-5 col-sm-7 text-sm-right text-center layout-spacing align-self-center">
        <div class="d-flex justify-content-sm-start justify-content-center">
          <div class="widget-heading">
            <h5 class>Websites</h5>
          </div>
        </div>
      </div>
    </div>
    <b-row style="display: flex; justify-content: space-between; align-items: center;padding-right: 15px; padding-left: 15px;">
      <button v-on:click="showModalCreate()" style="height: 45px;width:135px;white-space: nowrap; margin-bottom: 20px;" class="btn btn-primary btn-block " >
                  <span class="text-button-apply-2">Create Crawler</span>
    </button>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="table-crawler"
      style="float: left;"
    ></b-pagination>

    </b-row>
    
    <b-table
      :items="listCrawler"
      responsive
      :fields="tableColumns"
      primary-key="id"
      sort-by.sync="id"
      show-empty
      empty-text="No matching records found"
      class="position-relative"
      id="table-crawler"
      :per-page="perPage"
      :current-page="currentPage"
    >
    <template #cell(id)="data">
        <div class="item-column">
              <p >{{ data.item.id }}</p>
            </div>
    </template>
    <template #cell(Name)="data">
        <div class="item-column">
              <p >{{ data.item.Name }}</p>
            </div>
      </template>
      <template #cell(URL)="data">
        <div class="item-column">
              <p >{{ data.item.URL }}</p>
            </div>
      </template>
      <template #cell(Date)="data">
        <b-row>
            <p class="date-time-crawler-rss" style="padding-left: 10px;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span id="time-update-cafef" class="bs-tooltip" data-placement="right" style="color: #888ea8;font-weight: 600;">{{ data.item.Date }}</span>
            </p>
        </b-row>
      </template>
      <template #cell(Post)="data">
        <b-row >
            <div class="box-status-post" style="margin:0;width: auto;">
              <div class="item-timeline timeline-success">
                <!-- <div class="t-dot" data-original-title title></div> -->
                <div class="t-text">
                  <p class="usr-location" id="count-post-cafef">{{data.item.Post}} Post (+{{data.item.increasePost}})</p>
                </div>
              </div>
            </div>
          </b-row>
      </template>

      <template #cell(Status)="data">
            <div class="item-column">
              <p class="usr-ph-no">
              <span :class="data.item.classStatus" >{{data.item.status}}</span>
            </p>
            </div>
      </template>
      <template #cell(Actions)="data">
        <div class="d-flex">
            <button :disabled="data.item.status=='Pending'" v-on:click="searchInformation(data.item.Name)" class="btn btn-info" style="width: 40%;">
              <svg v-if="data.item.status=='Pending'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg> Crawl
            </button>
            <button v-on:click="showModalEdit(data.item.Name,data.item.type)" class="btn btn-warning ">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg> Edit
            </button>
            <button v-if="data.item.type=='create'" v-on:click="deleteCrawl(data.item.Name)" class="btn btn-danger">Delete</button>
          </div>
      </template>

    </b-table>
    
    <!-- modal Website  -->
  
    <modal name="modal-edit-page-website" class="test" height="271px" width="500px" styles="overflow: initial">
      <div style="max-width: 700px !important;" class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <svg v-on:click="closeModalEdit()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div class="compose-box">
              <div class="compose-content">
                <div class="row mb-4">
                  <div class="col-md-12">
                    <h5 style="font-weight: bold;color: #4361ee !important;" class="modal-title text-center">
                      Edit Page
                      Crawl
                    </h5>
                  </div>
                </div>
                <ul class="nav nav-tabs mb-3 mt-3" id="simpletab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Simple</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Advanced</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="query-tab" data-toggle="tab" href="#query" role="tab" aria-controls="query" aria-selected="false">Query</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="modal-body" style="max-height: 500px;overflow-y: auto;overflow-x: hidden;">
            <!-- <svg v-on:click="closeModalEdit()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg> -->
            <div class="compose-box">
              <div class="compose-content">
                <!-- <div class="row mb-4">
                  <div class="col-md-12">
                    <h5 style="font-weight: bold;color: #4361ee !important;" class="modal-title text-center">
                      Edit Page
                      Crawl
                    </h5>
                  </div>
                </div>
                <ul class="nav nav-tabs mb-3 mt-3" id="simpletab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Simple</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Advanced</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="query-tab" data-toggle="tab" href="#query" role="tab" aria-controls="query" aria-selected="false">Query</a>
                  </li>
                </ul> -->
                <div class="tab-content" id="simpletabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <form>
                      <div class="row">
                        <div class="col-md-12">
                          <div class="d-flex mb-4 mail-to">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-type">
                              <polyline points="4 7 4 4 20 4 20 7" />
                              <line x1="9" y1="20" x2="15" y2="20" />
                              <line x1="12" y1="4" x2="12" y2="20" />
                            </svg>
                            <div style="display: none;" class="w-100">
                              <input disabled type="text" id="address-page-crawl" class="form-control" />
                              <span class="validation-text"></span>
                            </div>
                            <div class="w-100">
                              <input :disabled="checkModalEdit" type="text" id="edit-name-page" v-model="namePage" class="form-control" />
                              <span class="validation-text"></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mb-4 mail-subject">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        <div class="w-100">
                          <input :disabled="checkModalEdit" type="text" id="edit-url-page" placeholder="https://" v-model="urlPage" class="form-control" />
                          <span class="validation-text"></span>
                        </div>
                      </div>
                      <div style="text-align: left;" class="d-flex mail-subject">
                        <div class="box-switch">
                          <label class="switch s-icons s-outline s-outline-primary">
                            <input v-on:click="modeSchedule =! modeSchedule" :checked="modeSchedule" class="input-edit-address" id="edit-check-time" type="checkbox" />
                            <span class="slider round">
                              <p class="pl-3" style="margin-left: 40px;white-space: nowrap;font-weight: 600;">Schedule Crawl</p>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="d-flex mail-subject">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <div class="col-xl-4 col-lg-5 col-md-5 col-sm-7 filtered-list-search align-self-center pl-0">
                          <button :disabled="!modeSchedule" data-toggle="modal" id="btn-create-schedule" data-target="#scheduleModal" type="button" class="btn btn-primary">Schedule Crawl</button>
                        </div>
                      </div>
                      <small style="text-align: left;margin-left: 36px;" id="emailHelp1" class="form-text text-muted mb-4">
                        Select time
                        for schedule
                      </small>
                      <div>
                        <div style="text-align: left;" class="box-switch">
                          <label class="switch s-icons s-outline s-outline-primary">
                            <input class="input-edit-address" id="edit-check-display" type="checkbox" />
                            <span class="slider round">
                              <p class="pl-3" style="margin-left: 40px;white-space: nowrap;font-weight: 600;">Public Post</p>
                            </span>
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <form>
                      <div class="d-flex">
                        <div style="width: 50%;">
                          <div style="text-align: left;" class="box-switch">
                            <label class="switch s-icons s-outline s-outline-primary">
                              <input :checked="validatedCokkies" v-on:click="validatedCokkies =! validatedCokkies" class="input-edit-address" id="edit-cookies-page" type="checkbox" />
                              <span class="slider round">
                                <p class="pl-3" style="margin-left: 40px;white-space: nowrap;font-weight: 600;">Allow Cookies</p>
                              </span>
                            </label>
                          </div>
                        </div>
                        <div style="width: 50%;">
                          <div style="text-align: left;" class="box-switch">
                            <label class="switch s-icons s-outline s-outline-primary">
                              <input :checked="modeRobotsParser" class="input-edit-address" id="edit-robot-txt-page" type="checkbox" />
                              <span class="slider round">
                                <p class="pl-3" style="margin-left: 40px;white-space: nowrap;font-weight: 600;">Follow robots.txt file</p>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mail-subject mb-3">
                        <svg style="margin-bottom: 20px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clock">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <div class="d-flex">
                          <div>
                            <div>
                              <input v-model="timeOutCrawl" type="number" placeholder id="timeout-page" class="form-control" />
                              <span class="validation-text"></span>
                            </div>
                            <small class="form-text text-muted">Setting timeout</small>
                          </div>
                          <div style="padding: 0px 10px;">
                            <div>
                              <input v-model="numberRetryCrawl" type="number" placeholder id="time-retry-page" class="form-control" />
                              <span class="validation-text"></span>
                            </div>
                            <small class="form-text text-muted">Setting number of retry</small>
                          </div>
                          <div>
                            <div>
                              <input v-model="timeDelayCrawl" type="number" id="time-delay-page" placeholder class="form-control" />
                              <span class="validation-text"></span>
                            </div>
                            <small class="form-text text-muted">Setting time delay</small>
                          </div>
                        </div>
                      </div>
                      <div class="d-flex mail-subject mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <div style="width: 100%;">
                          <input v-model="userAgent" type="text" id="edit-user-agent-page" placeholder="User-Agent" class="form-control" />
                          <span class="validation-text"></span>
                        </div>
                      </div>
                      <div class="d-flex mail-subject mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-aperture">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                          <line x1="9.69" y1="8" x2="21.17" y2="8" />
                          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                          <line x1="14.31" y1="16" x2="2.83" y2="16" />
                          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                        </svg>
                        <div style="width: 100%;">
                          <input v-model="cookies" :disabled="!validatedCokkies" type="text" id="edit-input-cookie-page" placeholder="Cookies" class="form-control" />
                          <span class="validation-text"></span>
                        </div>
                      </div>
                      <div class="table-responsive table-list-key">
                        <table class="table table-bordered mb-4">
                          <thead>
                            <tr>
                              <th style="width: 40%;">Header</th>
                              <th style="width: 40%;">Value</th>
                              <th style="text-align: center;width: 20%;">
                                <button type="button" v-on:click="addRowTableHttpHeader()" style="height:25px;padding: 0px 10px;margin: 0px;" class="btn btn-outline-success">Add</button>
                              </th>
                            </tr>
                          </thead>
                          <tbody class="tbody-http-header">
                            <tr v-for="(results,index) of httpHeader" :key="results.id">
                              <td>
                                <input v-model="results.header" type="text" class="form-control row-key" />
                              </td>
                              <td>
                                <input v-model="results.value" type="text" class="form-control row-value" />
                              </td>
                              <td class="box-remove-row" style="text-align: center;">
                                <svg v-on:click="removeRowTableHttpHeader(index)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 delete-multiple remove-row-table-header">
                                  <polyline points="3 6 5 6 21 6" />
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                  <line x1="10" y1="11" x2="10" y2="17" />
                                  <line x1="14" y1="11" x2="14" y2="17" />
                                </svg>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </form>
                  </div>
                  <div class="tab-pane fade" id="query" role="tabpanel" aria-labelledby="query-tab">
                    <div class="d-flex" style="justify-content: space-between;">
                      <div >
                        <button type="button" onclick="useQueryDefault()" class="btn btn-info">Default</button>
                      </div>
                    </div>
                    
                    <div class="tab-content" id="v-pills-tabContent" >
                      <div class="tab-pane fade show active" id="query-en" role="tabpanel" aria-labelledby="query-en-tab">
                        <form>
                          <label  for="basic-url">Paging navigate & crawl data {{ type }}</label>
                          <div v-if="type=='origin'" class="row">
                            <div class="col-md-12">
                              <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Article URL</span>
                                </div>
                                <input v-model="article_url_query" type="text" class="form-control" id="article-url-en" aria-describedby="basic-addon3" />
                              </div>
                            </div>
                          </div>
                          <div v-else class="table-responsive table-list-key">
                          <table class="table table-bordered mb-4">
                            <thead>
                              <tr>
                                <th style="width: 80%;">Start URLs</th>
                                <th style="text-align: center;width: 20%;">
                                  <button type="button" v-on:click="addRowStartURL()" style="height:25px;padding: 0px 10px;margin: 0px;" class="btn btn-outline-success">Add</button>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="tbody-http-header">
                              <tr v-for="(start_url,index) of start_urls" :key="start_url.id">
                                <td>
                                  <input v-model="start_urls[index]" type="text" class="form-control row-key" />
                                </td>
        
                                <td class="box-remove-row" style="text-align: center;">
                                  <svg v-on:click="removeRowStartURL(index)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 delete-multiple remove-row-table-header">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                  </svg>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="table table-bordered mb-4">
                            <thead>
                              <tr>
                                <th style="width: 80%;">Correct URL Contain</th>
                                <th style="text-align: center;width: 20%;">
                                  <button type="button" v-on:click="addRowCorrectURL()" style="height:25px;padding: 0px 10px;margin: 0px;" class="btn btn-outline-success">Add</button>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="tbody-http-header">
                              <tr v-for="(start_url,index) of correct_urls" :key="start_url.id">
                                <td>
                                  <input v-model="correct_urls[index]" type="text" class="form-control row-key" />
                                </td>
        
                                <td class="box-remove-row" style="text-align: center;">
                                  <svg v-on:click="removeRowCorrectURL(index)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 delete-multiple remove-row-table-header">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                  </svg>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table class="table table-bordered mb-4">
                            <thead>
                              <tr>
                                <th style="width: 80%;">Incorrect URL Contain</th>
                                <th style="text-align: center;width: 20%;">
                                  <button type="button" v-on:click="addRowIncorrectURL()" style="height:25px;padding: 0px 10px;margin: 0px;" class="btn btn-outline-success">Add</button>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="tbody-http-header">
                              <tr v-for="(url,index) of incorrect_urls" :key="url.id">
                                <td>
                                  <input v-model="incorrect_urls[index]" type="text" class="form-control row-key" />
                                </td>
        
                                <td class="box-remove-row" style="text-align: center;">
                                  <svg v-on:click="removeRowIncorrectURL(index)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 delete-multiple remove-row-table-header">
                                    <polyline points="3 6 5 6 21 6" />
                                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    <line x1="10" y1="11" x2="10" y2="17" />
                                    <line x1="14" y1="11" x2="14" y2="17" />
                                  </svg>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                          <label for="basic-url">Get data</label>
                          <div class="row" >
                            <div class="col-md-12">
                              <!-- <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Number Page</span>
                                </div>
                                <input v-model="number_page_query" type="text" class="form-control" id="article-title-en" aria-describedby="basic-addon3" />
                              </div> -->
                              <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Title</span>
                                </div>
                                <input v-model="title_query" type="text" class="form-control" id="article-title-en" aria-describedby="basic-addon3" />
                              </div>
                              <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Post Date</span>
                                </div>
                                <input v-model="timeCreatePostOrigin_query" type="text" class="form-control" id="article-title-en" aria-describedby="basic-addon3" />
                              </div>
                    
                              <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Author</span>
                                </div>
                                <input v-model="author_query" type="text" class="form-control" id="des-article-en" aria-describedby="basic-addon3" />
                              </div>
                              <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Sum Description</span>
                                </div>
                                <input v-model="summary_query" type="text" class="form-control" id="image-article-en" aria-describedby="basic-addon3" />
                              </div>
                              <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                  <span class="input-group-text" id="basic-addon7">Detail Description</span>
                                </div>
                                <input v-model="content_query" type="text" class="form-control" id="date-article-en" aria-describedby="basic-addon3" />
                              </div>
                              
                            </div>
                          </div>
                          
                          
                        </form>
                      </div>
                    
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button  v-on:click="saveEditCrawl()" id="btn-save-edit" class="btn btn-success float-left">
              <svg style="display:none" id="edit-icon-loadding" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
              </svg>
              <svg id="edit-icon-crawl" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
              </svg> Save
            </button>
            <button class="btn" data-dismiss="modal">
              <i class="flaticon-delete-1"></i> Discard
            </button>
          </div>
        </div>
      </div>
    </modal>
    <ScheduleCrawl />
  </div>
</template>
<script>
import { BRow, BCol, BTable, BTooltip,BMedia,BDropdown,BDropdownItem ,BPagination } from 'bootstrap-vue'
import Snackbar from "awesome-snackbar";
import { HTTP } from "../../../static/baseAPI.js";
import ScheduleCrawl from "~/components/admin/crawler/ScheduleCrawlComponent.vue";
import moment from "moment";
export default {
  components: {
    ScheduleCrawl,
    BTable,
    BTooltip,
    BMedia,
    BDropdown,
    BDropdownItem,
    BRow,
    BCol,
    BPagination

  },
  computed: {
    rows() {
      return this.listCrawler.length
    }
  },
  data() {
    return {
      perPage: 8,
      currentPage: 1,
      listCrawler : [],
      tableColumns:[
    { key: 'id', label: 'ID', sortable: true },
    { key: 'Name', label: 'Name', sortable: true },
    { key: 'URL', sortable: true },
    { key: 'Date', sortable: true },
    { key: 'Post', sortable: true },
    { key: 'Status', sortable: true },
    { key: 'Actions' },
  ],
      //Iconloading
      loadingcafef: true,
      loadingcafebiz: true,
      loadingbaodautu: true,
      loadingvneconomy: true,
      loadingAddressnasa: true,
      //validate
      validated: true,
      validatedCokkies: false,
      modePublic: false,
      //
      nameEle: [],
     
      arrDataConfig: [],
      arrDataConfigPDF : [],

      //Edit model
      urlModel: null,
      namePage: null,
      titlePage: null,
      urlPage: null,
      modeSchedule: null,

      timeOutCrawl: null,
      numberRetryCrawl: null,
      timeDelayCrawl: null,
      userAgent: null,
      cookies: null,
      modeRobotsParser: null,

      start_urls:[],
      correct_urls :[],
      incorrect_urls: [],

      // number_page_query: null,
      article_url_query: null,
      article_url_query1: null,
      title_query: null,
      timeCreatePostOrigin_query: null,

      author_query: null,
      content_query: null,
      summary_query: null,
    
      type : 'origin',

      httpHeader: [],
      test: 1,
      checkModalEdit : true
    };
  },
  methods: {
    getTimeAgo(value) {
      if (value === "----/--/--" || value === "") {
        return "----/--/--";
      }
      else{
        let timeAgo = moment(value, 'YYYY/MM/DD/').fromNow();
        timeAgo = timeAgo.replace(/\b\w/g, function (l) {
          return l.toUpperCase();
        });
        return timeAgo;

      }
      
    },
    showModalCreate(){
      this.namePage = ""
      this.titlePage = "";
      this.urlPage = "";
      this.modePublic = false
      this.modeSchedule =false
      this.modeRobotsParser = false
      this.timeOutCrawl = 180
      this.numberRetryCrawl = 2
      this.timeDelayCrawl = 0
      this.userAgent = ""
      this.cookies = ""
      this.httpHeader = [{header: "", value: ""}]
      this.article_url_query = ""
      this.title_query = ""
      this.timeCreatePostOrigin_query = ""
      this.author_query = ""
      this.content_query = ""
      this.summary_query = ""
      this.checkModalEdit = false
      this.type = "create"
      this.start_urls = []
      this.correct_urls = []
      this.incorrect_urls = []
      this.$modal.show("modal-edit-page-website");
    },
    deleteCrawl(address){
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Remove this crawler",
        padding: "2em",
      }).then((result) => {
        if (result.value) {
          if (result.value === true) {
            console.log('remove crawler')
            HTTP.post(`remove-crawler`,{"namePage":address}).then(() => {
              this.getAllDataConfig();
              this.getCrawlerInfo();
            });
          }
        }
      });
      

    },
    showModalEdit(address,type) {
      // this.validated = true;
      this.namePage = address;
      console.log(address)
      
      for (let index = 0; index < this.arrDataConfig.length; index++) {
        if (this.arrDataConfig[index].namePage === address) {
          let results = this.arrDataConfig[index];
          this.namePage = results.namePage;
          this.showModalSchedule(this.arrDataConfig);
          this.titlePage = results.titlePage;
          this.urlPage = results.urlPage;
          this.modePublic = results.modePublic;
          this.modeSchedule = results.modeSchedule
          this.modeRobotsParser = results.modeRobotsParser;
          this.timeOutCrawl = results.timeOutCrawl;
          this.numberRetryCrawl = results.numberRetryCrawl;
          this.timeDelayCrawl = results.timeDelayCrawl;
          this.validatedCokkies = results.modeCookies;
          this.userAgent = results.userAgent;
          this.cookies = results.cookies;
          this.httpHeader = results.httpHeader;
          // this.number_page_query = results.number_page_query
          this.article_url_query = results.article_url_query;
          this.title_query = results.title_query;
          this.timeCreatePostOrigin_query = results.timeCreatePostOrigin_query;
          this.author_query = results.author_query;
          this.content_query = results.content_query;
          this.summary_query = results.summary_query;
          console.log('results.type',results.type)

          this.checkModalEdit = true
          console.log('this.checkModalEdit',this.checkModalEdit)
          if (results.type=='create'){
            console.log('create')
            this.start_urls = results.start_urls
            this.correct_urls = results.correct_url_contain
            this.incorrect_urls = results.incorrect_url_contain
            this.type = "create"
          }else{
            this.type = "origin"
            
          }
          
      }
      }
      this.$modal.show("modal-edit-page-website");
    },
    addRowIncorrectURL() {
      let newURL = ""
      this.incorrect_urls.push(newURL);
    },
    removeRowIncorrectURL(index) {
      this.incorrect_urls.splice(index, 1);
    },
    addRowCorrectURL() {
      let newURL = ""
      this.correct_urls.push(newURL);
    },
    removeRowCorrectURL(index) {
      this.correct_urls.splice(index, 1);
    },
    addRowStartURL() {
      let newURL = ""
      this.start_urls.push(newURL);
    },
    removeRowStartURL(index) {
      this.start_urls.splice(index, 1);
    },
    addRowTableHttpHeader() {
      let newHttpHeader = {
        header: "",
        value: "",
      };
      this.httpHeader.push(newHttpHeader);
    },
    removeRowTableHttpHeader(index) {
      this.httpHeader.splice(index, 1);
    },
    showModalSchedule(arrDataConfig) {
      console.log('show schedule')
      let arrayInput = document.querySelectorAll(".select-customers-info");
      for (let e = 0; e < arrayInput.length; e++) {
        arrayInput[e].checked = false;
      }
      for (let i = 0; i < arrDataConfig.length; i++) {
        if (arrDataConfig[i].namePage === this.namePage) {
          let addressPage = arrDataConfig[i];
          for (let j = 0; j < addressPage.timeSchedule.length; j++) {
            let day = "";
            let flagDay = addressPage.timeSchedule[j];
            if (flagDay.day === "0") day = "sunday";
            if (flagDay.day === "1") day = "monday";
            if (flagDay.day === "2") day = "tuesday";
            if (flagDay.day === "3") day = "wednesday";
            if (flagDay.day === "4") day = "thursday";
            if (flagDay.day === "5") day = "friday";
            if (flagDay.day === "6") day = "saturday";
            if (flagDay.hour.length) {
              for (let k = 0; k < flagDay.hour.length; k++) {
                if (
                  document.querySelector(".select-customers-info." + day) !==
                  null
                ) {
                  let arr = document.querySelectorAll(
                    ".select-customers-info." + day
                  );
                  for (let index = 0; index < arr.length; index++) {
                    if (arr[index].value * 1 === flagDay.hour[k] * 1) {
                      arr[index].checked = true;
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    searchInformation(address) {
      for (let i = 0; i < this.listCrawler.length; i++) {
        if(this.listCrawler[i].Name==address){
          this.listCrawler[i].status = "Pending";
          this.listCrawler[i].classStatus = "badge badge-warning";
        }
      }
      this.crawpage(address)
    },
    
    crawpage(address) {
      HTTP.post(`crawl`,{"namePage":address}).then(() => {
        $("#btn-crawl-" + address).prop("disabled", false);
      });
    },
    
    saveEditCrawl(){
      if (this.checkModalEdit && this.type =='origin'){
        this.saveEditCrawlPage()
      }else if (this.checkModalEdit && this.type =='create'){
        this.saveEditCrawlPageCreate()
      }else{
        this.createCrawlPage()
      }
    },
    createCrawlPage(){
      let objDataNew = {};
      objDataNew.titlePage = this.namePage;
      objDataNew.urlPage = this.urlPage;
      objDataNew.modeSchedule = this.modeSchedule;
      objDataNew.timeSchedule = this.tableScheduleHasTick();
      objDataNew.modePublic = this.modePublic;
      objDataNew.modeCookies = this.validatedCokkies;
      objDataNew.modeRobotsParser = this.modeRobotsParser;
      objDataNew.timeOutCrawl = this.timeOutCrawl;
      objDataNew.numberRetryCrawl = this.numberRetryCrawl;
      objDataNew.timeDelayCrawl = this.timeDelayCrawl;
      objDataNew.userAgent = this.userAgent;
      objDataNew.cookies = this.cookies;
      objDataNew.httpHeader = this.httpHeader;
      // objDataNew.number_page_query = this.number_page_query;
      objDataNew.article_url_query = this.article_url_query;
      objDataNew.title_query = this.title_query;
      objDataNew.timeCreatePostOrigin_query = this.timeCreatePostOrigin_query;
      objDataNew.author_query = this.author_query;
      objDataNew.content_query = this.content_query;
      objDataNew.summary_query = this.summary_query;
      objDataNew.start_urls = this.start_urls;
      objDataNew.correct_url_contain = this.correct_urls;
      objDataNew.incorrect_url_contain = this.incorrect_urls;
      HTTP.post(`create-crawler`, {objDataNew:objDataNew}).then((response) => {
        new Snackbar(`Created succesfully`, {
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
        this.$modal.hide("modal-edit-page-website");
        this.getAllDataConfig();
        this.getCrawlerInfo();
      });
    },
    saveEditCrawlPage() {
      let objDataEdit = {};
      objDataEdit.titlePage = this.namePage;
      objDataEdit.modeSchedule = this.modeSchedule;
      objDataEdit.timeSchedule = this.tableScheduleHasTick();
      objDataEdit.modePublic = this.modePublic;
      objDataEdit.modeCookies = this.validatedCokkies;
      objDataEdit.modeRobotsParser = this.modeRobotsParser;
      objDataEdit.timeOutCrawl = this.timeOutCrawl;
      objDataEdit.numberRetryCrawl = this.numberRetryCrawl;
      objDataEdit.timeDelayCrawl = this.timeDelayCrawl;
      objDataEdit.userAgent = this.userAgent;
      objDataEdit.cookies = this.cookies;
      objDataEdit.httpHeader = this.httpHeader;
      // objDataEdit.number_page_query = this.number_page_query;
      objDataEdit.article_url_query = this.article_url_query;
      objDataEdit.title_query = this.title_query;
      objDataEdit.timeCreatePostOrigin_query = this.timeCreatePostOrigin_query;
      objDataEdit.author_query = this.author_query;
      objDataEdit.content_query = this.content_query;
      objDataEdit.summary_query = this.summary_query;
      console.log('objDataEdit',objDataEdit)
      HTTP.post(`save-edit-crawl`, {objDataEdit}).then((response) => {
        new Snackbar(`Saved succesfully`, {
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
        this.getAllDataConfig();
      });
    },
    saveEditCrawlPageCreate() {
      let objDataEdit = {};
      objDataEdit.titlePage = this.namePage;
      objDataEdit.modeSchedule = this.modeSchedule;
      objDataEdit.timeSchedule = this.tableScheduleHasTick();
      objDataEdit.modePublic = this.modePublic;
      objDataEdit.modeCookies = this.validatedCokkies;
      objDataEdit.modeRobotsParser = this.modeRobotsParser;
      objDataEdit.timeOutCrawl = this.timeOutCrawl;
      objDataEdit.numberRetryCrawl = this.numberRetryCrawl;
      objDataEdit.timeDelayCrawl = this.timeDelayCrawl;
      objDataEdit.userAgent = this.userAgent;
      objDataEdit.cookies = this.cookies;
      objDataEdit.httpHeader = this.httpHeader;
      // objDataEdit.number_page_query = this.number_page_query;
      objDataEdit.article_url_query = this.article_url_query;
      objDataEdit.title_query = this.title_query;
      objDataEdit.timeCreatePostOrigin_query = this.timeCreatePostOrigin_query;
      objDataEdit.author_query = this.author_query;
      objDataEdit.content_query = this.content_query;
      objDataEdit.summary_query = this.summary_query;
      objDataEdit.start_urls = this.start_urls;
      objDataEdit.correct_url_contain = this.correct_urls;
      objDataEdit.incorrect_url_contain = this.incorrect_urls;
      console.log('this.modeRobotsParser',this.modeRobotsParser)
      console.log('objDataEdit Create',objDataEdit)
      HTTP.post(`save-edit-crawl-create`, {objDataEdit}).then((response) => {
        new Snackbar(`Saved succesfully`, {
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
        this.$modal.hide("modal-edit-page-website");
        this.getAllDataConfig();
      });
    },
    tableScheduleHasTick() {
      let arrData = [];
      let sunday = { day: "0", hour: [] };
      let monday = { day: "1", hour: [] };
      let tuesday = { day: "2", hour: [] };
      let wednesday = { day: "3", hour: [] };
      let thursday = { day: "4", hour: [] };
      let friday = { day: "5", hour: [] };
      let saturday = { day: "6", hour: [] };
      let arrayInput = document.querySelectorAll(".select-customers-info");
      for (let index = 0; index < arrayInput.length; index++) {
        let element = arrayInput[index];
        if (element.checked === true) {
          if (element.classList[3] === "sunday")
            sunday.hour.push(element.value * 1);
          if (element.classList[3] === "monday")
            monday.hour.push(element.value * 1);
          if (element.classList[3] === "tuesday")
            tuesday.hour.push(element.value * 1);
          if (element.classList[3] === "wednesday")
            wednesday.hour.push(element.value * 1);
          if (element.classList[3] === "thursday")
            thursday.hour.push(element.value * 1);
          if (element.classList[3] === "friday")
            friday.hour.push(element.value * 1);
          if (element.classList[3] === "saturday")
            saturday.hour.push(element.value * 1);
        }
      }
      arrData = [
        sunday,
        monday,
        tuesday,
        wednesday,
        thursday,
        friday,
        saturday,
      ];
      return arrData;
    },
    closeModalEdit() {
      this.$modal.hide("modal-edit-page-website");
    },
    getAllDataConfig() {
      this.arrDataConfig = []
      HTTP.get(`get-data-edit-crawl`).then((response) => {
        this.arrDataConfig = response.data;
      });
    },
    getCrawlerInfo(){
      this.listCrawler = []
      HTTP.get(`crawler-get-information`).then((response) => {
        const crawlers = response.data;
        for (let i = 0; i < crawlers.length; i++) {
          let crawler = crawlers[i]
          let crawlerObj = {}
          crawlerObj.id = i + 1
          crawlerObj.Name = crawler.addressPage
          crawlerObj.URL = crawler.URL
          crawlerObj.Date = this.getTimeAgo(
            crawler.dateLastCrawler
            );
          crawlerObj.type = crawler.type
          crawlerObj.Post = crawler.sumPost
          crawlerObj.increasePost = crawler.increasePost
          if (crawler.statusPageCrawl === "Pending") {
            crawlerObj.status = "Pending";
            crawlerObj.classStatus = "badge badge-warning";
            // $("#icon-loading-btn-"+String(this.posts[i].addressPage)).show();
            // $("#btn-crawl-" + String(this.posts[i].addressPage)).prop("disabled", true);
            
          }else if (crawler.statusPageCrawl === "Success") {
            crawlerObj.status = "Success";
            crawlerObj.classStatus = "badge color-badge-success";
          } else if (crawler.statusPageCrawl === "Off") {
            crawlerObj.status = "Off";
            crawlerObj.classStatus = "badge color-badge-dark";
          } else {
            crawlerObj.status = "Error";
            crawlerObj.classStatus = "badge color-badge-danger";
          }
          
          this.listCrawler.push(crawlerObj)
          
        }
        console.log(this.listCrawler)
      })

    },
  },
  mounted() {
    this.getAllDataConfig();
    this.getCrawlerInfo();
  },
};
</script>
<style>


p.usr-ph-no {
  margin-bottom: 11px;
  font-size: 13px;
}
p.date-time-crawler-rss {
  font-size: 13px;
  margin-bottom: 0px;
}
p.dark.date-time-crawler-rss {
  font-size: 13px;
  margin-bottom: 0px;
}
.btn-info,
.btn-warning {
  padding: 0.4375rem 1.25rem !important;
  font-size: 14px!important;
}
.dark p.user-name {
  color: #009688 !important;
}
.dark p.user-work {
  color: #bfc9d4;
}
.dark .item-content.rss-page {
  background-color: #0e1726;
  border: 1px solid #0e1726;
}
input#edit-name-page {
  color: #bfc9d4;
}
.vm--modal {
  top: 80px !important;
  left: 600px !important;
  width: 700px !important;
  height: 271px !important;
}
.crawler-component .user-email {
  width: 100% !important;
}
p.user-name {
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 0;
  color: #2196f3;
}
p.user-work {
  font-weight: 700;
  font-size: 13px;
  color: #888ea8;
}
.user-meta-info {
  margin-top: 10px;
}
.searchable-container .searchable-items.grid .items .user-email {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.user-email.address-page {
  display: block !important;
}
p.info-title {
  font-size: 14px;
  font-weight: 600;
  color: #3b3f5c;
  margin-bottom: 11px;
}
.action-btn.d-flex.justify-content-center {
  width: 100% !important;
  margin: 20px 0;
}
.user-email {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.items {
  margin-bottom: 30px;
  border-radius: 6px;
  width: 100%;
  color: #0e1726;
  transition: all 0.35s ease;
  width: 33%;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  /* background: white; */
  padding-right: 15px;
  padding-left: 15px;
}
.item-content.rss-page {
  background-color: #fff;
  padding: 13px 18px;
  border-radius: 6px;
  border: 1px solid #e0e6ed;
  box-shadow: 0 0 40px 0 rgb(94 92 154 / 6%);
}
.btn-info {
  background-color: #2196f3 !important;
  border-color: #2196f3 !important;
}
.rss.searchable-items.grid .action-btn.d-flex {
  width: 100% !important;
}
</style>
