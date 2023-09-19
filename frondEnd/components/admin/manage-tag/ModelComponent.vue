<template>
  <div class="widget widget-three widget-table-one">
    <div style="padding: 20px 20px">
      <div class="widget-heading">
        <h4>Models</h4>
        <div style="cursor: pointer;"></div>
        <div style="cursor: pointer;">
          <!-- <svg v-on:click="openSettingPlayGroundModel()" class="icon-model" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg> -->
          <svg v-on:click="openModalModel()" class="icon-model" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      <div v-if="defaultLib !== null" class="widget-content">
        <div class="order-summary">
          <!-- List model Defaul -->
          <div class="summary-list summary-income">
            <div class="summery-info">
              <div class="w-icon">
                <img class="img--contain image-en image-model" src="~/static/assetsAdmin/img/modelner1.png" alt="img" />
              </div>
              <div class="w-summary-details">
                <div class="w-summary-info" >
                  <h6>
                    {{ defaultLib.time }}
                    <span class="summary-count">{{ defaultLib.name }}</span>
                  </h6>
                  <div class="summary-average">
                    <div class="w-summary-info" style="width:180px">
                      <div class="w-summary-mark" style="display: grid">
                        <span style="width:75px" id="status-en" :class="'badge current color-badge-' + defaultLib.statusColor + ' inv-status'">{{ defaultLib.statusText }}</span>
                        <span class="badge" id="total-en" style="color:#2196f3;text-align: left;">Tags: {{ defaultLib.totalTag }}</span>
                      </div>
                      <div class="w-summary-button">
                        <div style="display: block;">
                          <svg  :class="{ 'locked': defaultLib.statusText == 'In Process' }" v-on:click="executeModel(defaultLib.name)" class="icon-model play" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1abc9c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Execute</title>
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                          <svg :class="{ 'locked': defaultLib.statusText == 'In Process' }" style="stroke: rgb(198, 198, 198);cursor: not-allowed;pointer-events: none;" class="icon-model edit" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Edit</title>
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>
                          <svg :class="{ 'locked': defaultLib.statusText == 'In Process' }" class="icon-model delete" style="pointer-events: none;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6C6C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Delete</title>
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- <span class="badge" id="total-en" style="margin-right: 30px; color:#2196f3;">Tags: {{result.lib.totalTag}}</span> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="summary-list summary-profit">
            <div class="summery-info">
              <div class="w-icon">
                <img class="img--contain image-en image-model" src="~/static/assetsAdmin/img/modelner1.png" alt="img" />
              </div>
              <div class="w-summary-details">
                <div class="w-summary-info">
                  <h6>
                    {{ defaultBert.time }}
                    <span class="summary-count">{{ defaultBert.name }}</span>
                  </h6>
                  <div class="summary-average">
                    <div class="w-summary-info" style="width:180px">
                      <div class="w-summary-mark" style="display: grid">
                        <span style="width:75px" id="status-bert-defaultEN" :class="'badge current color-badge-' + defaultBert.statusColor + ' inv-status'">{{ defaultBert.statusText }}</span>
                        <span class="badge" title="Total Tag" id="total-bert-defaultEN" style="color:#2196f3;text-align: left">Tags: {{ defaultBert.totalTag }}</span>
                      </div>
                      <div class="w-summary-button">
                        <div style="display: block;">
                          <svg :class="{ 'locked': defaultBert.statusText == 'In Process' }" class="icon-model play" v-on:click="executeModelBert('default', defaultBert.time)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1abc9c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Execute</title>
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>

                          <svg :class="{ 'locked': defaultBert.statusText == 'In Process' }" style="stroke: rgb(198, 198, 198);cursor: not-allowed;pointer-events: none;" class="icon-model edit" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Edit</title>
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                          </svg>

                          <svg :class="{ 'locked': defaultBert.statusText == 'In Process' }" class="icon-model delete" style="pointer-events: none;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6C6C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <title>Delete</title>
                            <circle cx="12" cy="12" r="10" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- List Model Bert -->
          <div v-for="(result, index) of resultBertCreate" :key="index" class="summary-list summary-profit">

            <div  :id="'model-' + result._id">
              <div class="summery-info">
                <div class="w-icon">
                  <img class="img--contain image-en image-model"  src="~/static/assetsAdmin/img/modelner1.png" alt="img" />
                </div>
                <div class="w-summary-details">
                  <div class="w-summary-info">
                    <h6>
                      {{ result.time }}
                      <span class="summary-count" :id="'model-name-' + result._id">{{ result.name }}</span>
                    </h6>
                    <div class="summary-average">
                      <div class="w-summary-info">
                        <div class="w-summary-mark">
                          <div>
                            <span class="badge color-badge-warning inv-status" id="status-before-bert-${result._id}" title="Last Score">{{ result.lastScore.toFixed(1) }}%</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                            <span :class="'badge current color-badge-' + result.statusColor + ' inv-status'" title="Current Score" :id="'status-bert-' + result._id" style="margin-right: 30px;">{{ result.statusText }}</span>
                          </div>
                          <div>
                            <span class="badge" title="Last Total Tag">{{ result.lastTotalTag }}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                            <span class="badge" title="Current Total Tag" :id="'status-bert-' + result._id" style="margin-right: 25px;">{{ result.totalTag }}</span>
                          </div>
                        </div>
                        <div  class="w-summary-button">
                          <div style="display: block;">
                            <svg :class="{ 'locked': result.statusText == 'In Process' }"  class="icon-model play feather feather-play" v-on:click="executeModelBert(result._id, result.time)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1abc9c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <title>Execute</title>
                              <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                            <!-- <svg class="icon-model evaluate" onclick="evaluateModelBert('en','${result._id}')" xmlns="http://www.w3.org/2000/svg" style="border:1px solid #2196F3; padding: 1px;border-radius: 4px; color:#CC6600" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="'feather feather-trending-up'">
                              <title>Evaluate</title>
                              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                              <polyline points="17 6 23 6 23 12" />
                            </svg> -->
                            <svg :class="{ 'locked': result.statusText == 'In Process' }" class="icon-model training feather feather-airplay" v-on:click="trainModel(result._id)" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                              <title>Training</title>
                              <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
                              <polygon points="12 15 17 21 7 21 12 15" />
                            </svg>
                            <svg :class="{ 'locked': result.statusText == 'In Process' }" v-on:click="openEditModel(result._id)" class="icon-model edit edit-model-ai feather feather-edit-3" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2196f3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                              <title>Edit</title>
                              <path d="M12 20h9" />
                              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                            </svg>
                            <svg :class="{ 'locked': result.statusText == 'In Process' }" v-on:click="openDeleteModel(result._id)" class="icon-model remove-model-ai feather feather-x-circle" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e7515a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
                              <title>Delete</title>
                              <circle cx="12" cy="12" r="10" />
                              <line x1="15" y1="9" x2="9" y2="15" />
                              <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div id="flow-chart" style="height: 400px;" v-else>
        <div style="height: 10px; text-align: center;">
          <div id="loading-chart-overview" style=" margin-top: 95px;" class="spinner-border text-success align-self-center"></div>
        </div>
      </div>
    </div>
    <!-- Model -->
  
    <!-- Create new model -->
    <modal name="modal-create-model" height="271px" width="500px" styles="overflow: initial">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <svg v-on:click="closeModalModel()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
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
                          <input v-model="createModelName" id="model-name-create" placeholder="Model name" class="form-control" />
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
                          <select v-model="modelParent" id="model-parent" class="placeholder js-states form-control">
                            <option v-for="model in listModelTagEN" :key="model._id" class style="display: ${data.language === 'en' ? 'block' : 'none'}" :value="'default' + '+' + model.time + '+' + model.name">{{ model.name }} ({{ model.time }})</option>
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
            <button v-on:click="createModel()" id="btn-save-modal-create" class="btn btn-primary float-left">
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
            <button v-on:click="closeModalDeleteModel()" class="btn" data-dismiss="modal">
              <i class="flaticon-delete-1"></i> Discard
            </button>
          </div>
        </div>
      </div>
    </modal>
    <modal name="modal-edit-model"  width="500px" styles="overflow: initial;" >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <svg v-on:click="closeModaleditModel()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x close" data-dismiss="modal">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <div class="compose-box">
              <div class="compose-content">
                <div class="row mb-4">
                  <div class="col-md-12">
                    <h5 style="font-weight: bold;color: #4361ee !important;" class="modal-title text-center">Edit model</h5>
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
                          <input id="model-name-edit" placeholder="Model name" class="form-control" v-model="editNameModel"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button v-on:click="editModel()" id="btn-edit-modal" class="btn btn-primary float-left">
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
              </svg> Edit
            </button>
            <button v-on:click="closeModaleditModel()" class="btn" data-dismiss="modal">
              <i class="flaticon-delete-1"></i> Discard
            </button>
          </div>
        </div>
      </div>
    </modal>
    <modal name="modal-delete-model" width="500px" styles="overflow: initial;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <svg v-on:click="closeModalDeleteModel()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-x close" data-dismiss="modal">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    <div class="compose-box">
                        <div class="compose-content">
                            <div class="row mb-4">
                                <div class="col-md-12">
                                    <h5 style="font-weight: bold;color: #4361ee !important;"
                                        class="modal-title text-center">Delete model</h5>
                                </div>
                            </div>
                            <form>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div style="font-size: 1.2rem; font-weight: 500;">
                                            Are you sure you want to delete this model?
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button v-on:click="deleteModel()" id="btn-delete-modal" class="btn btn-danger float-left"><svg style="display:none"
                            id="icon-loadding" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin mr-2">
                            <line x1="12" y1="2" x2="12" y2="6"></line>
                            <line x1="12" y1="18" x2="12" y2="22"></line>
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07">
                            </line>
                            <line x1="2" y1="12" x2="6" y2="12"></line>
                            <line x1="18" y1="12" x2="22" y2="12"></line>
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                        </svg><svg id="icon-crawl" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                            <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z">
                            </path>
                        </svg> Delete</button>
                    <button v-on:click="closeModalDeleteModel()" class="btn" data-dismiss="modal"> <i class="flaticon-delete-1"></i> Discard</button>
                </div>
            </div>
        </div>
    </modal>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
import Snackbar from "awesome-snackbar";
export default {
	data() {
		return {
			createModelName: '',
			modelParent: '',

			modelPlaygroundEn: 0,
			result : [],
			defaultLib : null,
			defaultBert : null,
			resultBertCreate: [],
			arrayIdModel: [],
			objStatusLib: [],
			objStatusLibstatusColor : '',
			objStatusLibstatus : "",
			objStatusBERT: [],
			objStatusBERTstatusColor : '',
			objStatusBERTstatus : "",

			objStatusBertCreate: [],
			objStatusColorBertCreate: [],

			test: null,
			listModelTag1: [],
			listModelTagEN: [],

			lock: false,
			lockLib: false,
			editNameModel: '',

		};
	},
	methods: {
    trainModel(id) {  
      HTTP.get(`/models/tag/training-model?id=${id}`).then((response) => {
        this.getListModel()
      })   
      .catch(Error);

		
		
	},
		deleteModel() {

			HTTP.delete(
				`/models/bert/${this.curentIdModel}`
			)
				.then((response) => {

					this.$modal.hide("modal-delete-model");
					new Snackbar(`Model name has delete successfully`, {
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
					this.getListModel()

				})
				.catch(Error);
		},

		editModel() {
			HTTP.put(
				`/models/bert/${this.curentIdModel}`, {
				name: this.editNameModel
			}
			)
				.then((response) => {
					console.log('then ok')

					this.$modal.hide("modal-edit-model");
					new Snackbar(`Model name has update successfully`, {
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
					this.getListModel()

				})
				.catch(Error);
		},
		openDeleteModel(id) {
			this.curentIdModel = id
			this.$modal.show("modal-delete-model");
		},
		openEditModel(id) {
			this.curentIdModel = id
			this.$modal.show("modal-edit-model");
		},
		closeModalDeleteModel() {
			this.$modal.hide("modal-delete-model");

		},
		closeModaleditModel() {
			this.$modal.hide("modal-edit-model");

		},
		
		executeModel(name) {
			if (name === "Library (Underthesea)") {
				HTTP.get(
					"/models/lib/execute"
				)
					.then((response) => {
						this.getListModel()

					})
					.catch(Error);
			}

		},
		executeModelBert(id, time) {
			HTTP.get(
				`models/ai/execute?id=${id}&time=${time}&page=finsight`
			)
				.then((response) => {
					this.getListModel()
				})
				.catch(Error);


		},
		openModalModel() {
			this.$modal.show("modal-create-model");
		},
		closeModalModel() {
			this.$modal.hide("modal-create-model");
		},
		createModel() {
			let valueOption = this.modelParent;
			let array = valueOption.split("+");
			let idModel = array[0];
			let time = array[1];
			let nameParent = array[2];
			let timeNow = this.$dayjs().format('YYYY/MM/DD HH:mm:ss')

			if (nameParent == 'AI NER Base') {
				idModel = 'default'
			}
			HTTP.post(`models/bert`, {
				time: timeNow, name: this.createModelName, idModelParent: idModel, sourceModel: 'tag'
			}).then((response) => {
				this.closeModalModel()
				new Snackbar(`Create Model Successd`, {
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
        this.getListModel()

			});

		},
		openSettingPlayGroundModel() {
			this.$modal.show("modal-setting-playground-model");
		},
		closeSettingPlayGroundModel() {
			this.$modal.hide("modal-setting-playground-model");
		},
		listModel() {
			HTTP.get("tags/get-list-model-generate-history").then((response) => {
				this.listModelTag1 = response.data;
				for (let i = 0; i < this.listModelTag1.length; i++) {
					if (this.listModelTag1[i].model_id != "Library (Underthesea)"
					) {
						this.listModelTagEN.push(this.listModelTag1[i]);
					}
				}
			});
		},
		getListModel() {
			HTTP.get(`models/lib?sourceModel=tag`).then((response) => {

				this.result = response.data.data;
				console.log('this.result',this.result)
				this.defaultLib = this.result.lib
				this.defaultBert = this.result.bert
				if (this.defaultLib.status == 1) {
					this.defaultLib.statusText = "In Process";
					this.defaultLib.statusColor = "warning";
				}

				if (this.defaultBert.status == 1) {
					this.defaultBert.statusText = "In Process";
					this.defaultBert.statusColor = "warning";
					// this.objStatusBERTstatus = "In Process";
					// this.objStatusBERTstatusColor = "warning";
				}

				if (this.defaultLib.status == 0) {
					this.defaultLib.statusText = "Success";
					this.defaultLib.statusColor = "success";
					// this.objStatusLibstatus = "Success";
					// this.objStatusLibstatusColor = "success";
				}

				if (this.defaultBert.status == 0) {
					this.defaultBert.statusText = "Success";
					this.defaultBert.statusColor = "success";
					// this.objStatusBERTstatus = "Success";
					// this.objStatusBERTstatusColor = "success";
				}

				if (this.defaultLib.status == 2) {
					this.defaultLib.statusText = "Failed";
					this.defaultLib.statusColor = "danger";
					
					// this.objStatusLibstatus = "Failed";
					// this.objStatusLibstatusColor = "danger";
				}

				if (this.defaultBert.status == 2) {
					this.defaultBert.statusText = "Failed";
					this.defaultBert.statusColor = "danger";
					// this.objStatusBERTstatus = "Failed";
					// this.objStatusBERTstatusColor = "danger";
				}
				console.log('this.defaultLib',this.defaultLib)

			}),
			
			HTTP.get(`models/bert?sourceModel=tag`).then((response) => {
				let i = 0;
				this.resultBertCreate = response.data;
				for (let i = 0; i < this.resultBertCreate.length; i++) {
					let score = String(this.resultBertCreate[i].score.toFixed(1)) + ' %'
					this.arrayIdModel.push({ _id: this.resultBertCreate[i]._id, name: this.resultBertCreate[i].name });
					if (this.resultBertCreate[i].status == 1) {
						this.resultBertCreate[i].statusText = "In Process";
						this.resultBertCreate[i].statusColor = "warning";
						// this.objStatusBertCreate[i] = "In Process";
						// this.objStatusColorBertCreate[i] = "warning";

					}
					else if (this.resultBertCreate[i].status == 0) {
						this.resultBertCreate[i].statusText = score;
						this.resultBertCreate[i].statusColor = "success";
						// this.objStatusBertCreate[i] = score;
						// this.objStatusColorBertCreate[i] = "success";


					}
					else if (this.resultBertCreate[i].status == 2) {
						this.resultBertCreate[i].statusText = "Failed";
						this.resultBertCreate[i].statusColor = "danger";
						// this.objStatusBertCreate[i] = "Failed";
						// this.objStatusColorBertCreate[i] = "danger";

					}


				};
				console.log('this.resultBertCreate',this.resultBertCreate)

			});
		}
	},
	created() {
		this.listModel();
		this.getListModel()

	},
};
</script>
<style>
.image-model {
	width: 100%;
	height: 100%;
}

.locked {
	stroke: rgb(198, 198, 198);
	cursor: not-allowed;
	pointer-events: none;
}
</style>