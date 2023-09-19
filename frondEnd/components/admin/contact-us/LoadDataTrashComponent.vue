<template>
  <div>
    <!-- <div id="overlay">
                <div id="text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin">
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg>Loading...
                </div>
    </div> -->
    <div class="search">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu mail-menu d-lg-none">
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
      <input v-model="textSearchTrash" v-on:keyup.enter="LoadDataTrash(1,textSearchTrash)" type="text" class="form-control input-search" placeholder="Search Here..." />
      <button v-show="textSearchTrash.length > 0" v-on:click="textSearchTrash = ''" class="btn btn-primary search-button" style="position: absolute;
                                right: 8px;
                                top: 5px;
                                background-color: #f8f9fa00!important;
                                box-shadow: none;
                                border: none;
                                color: rgb(143, 138, 138) !important;display: none;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <div class="action-center">
      <div class>
        <div class="n-chk">
          <label style="padding: 9px;padding-right: 0px;margin-bottom: 2px;left: -9px;" class="new-control new-checkbox checkbox-primary">
            <input v-on:click="showAllMessage()" v-model="selectAll" type="checkbox" class="new-control-input" id="inboxAll" />
            <span class="new-control-indicator"></span>
            <span>
              Check
              All
            </span>
          </label>
        </div>
      </div>
      <div class="tool-bar" v-if="showToolBarTrash">
        <div data-tooltip="Mark as read" class="items-toolbar action-mark_as_read group-one" v-on:click="MarkRead()">
          <div class="item-toolbar">
            <svg style="margin-right: 0px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
        </div>
        <div data-tooltip="Mark as unread" class="items-toolbar action-mark_as_unRead group-one" onclick="MarkUnread()">
          <div class="item-toolbar">
            <svg style="margin-right: 0px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          </div>
        </div>
        <div data-tooltip="Revive Mail" class="items-toolbar feather feather-activity revive-mail group-two" v-on:click="ReviveTrash()">
          <div class="item-toolbar">
            <svg style="margin-right: 0px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
        </div>

        <div v-on:click="openModel()" data-toggle="modal" data-tooltip="Delete Permanently" class="items-toolbar group-two">
          <a class="item-toolbar">
            <div>
              <svg style="margin-right: 0px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div class="tool-bar-pagination" v-if="resultsListTrash.length">
        <div class="items-toolbar" style="width: 200px;">
          <span class="Dj">
            <span>
              <span class="ts-from">{{ts_from}}</span>
              -
              <span class="ts-to">{{ts_to}}</span>
            </span> of
            <span class="ts-total">{{ts_total}}</span>
          </span>
        </div>
        <div style="display: flex;justify-content: space-between;">
          <div class="items-toolbar" data-tooltip="Newer" v-on:click="CheckPagination('back')">
            <div class="item-toolbar">
              <svg id="back-page" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </div>
          </div>
          <div style="margin-left: 18px;margin-right: 0px;" class="items-toolbar" data-tooltip="Older" v-on:click="CheckPagination('forward')">
            <div class="item-toolbar">
              <svg id="next-page" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>

        <input id="page-number" type="hidden" value="1" />
      </div>
    </div>
    <div class="content-box" v-if="resultsDetail&&Object.keys(resultsDetail).length" style="width: 100%;left: 0px;right: 100%;">
      <div class="d-flex msg-close">
        <svg v-on:click ="resultsDetail = []" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left close-message">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <h2 id="title-detail" class="mail-title" data-selected-mail-title>{{resultsDetail.customerSub}}</h2>
      </div>

      <div id="mailCollapseEleven" class="collapse ok" aria-labelledby="mailHeadingEleven" data-parent="#mailbox-inbox" style="display: block">
        <div class="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="kirsten.beck@mail.com" data-mailcc>
          <div class="d-flex justify-content-between">
            <div class="d-flex user-info">
              <div class="f-head" style="padding-left: 10px;">
                <div class="avatar avatar-sm">
                  <span class="avatar-title rounded-circle">KB</span>
                </div>
              </div>
              <div class="f-body">
                <div class="meta-title-tag">
                  <h4 id="detail-name" class="mail-usr-name" data-mailtitle>{{resultsDetail.customerName}}</h4>
                </div>
                <div class="meta-mail-time">
                  <p id="detail-mail" class="user-email" data-mailto="kirsten.beck@mail.com">{{resultsDetail.customerEmail}}</p>
                  <p id="detail-date" class="mail-content-meta-date">{{CompareDate(resultsDetail.timeCreateContacts)}}</p>
                </div>
              </div>
            </div>
          </div>

          <p id="detail-msg" class="mail-content">{{resultsDetail.customerMsg}}</p>
        </div>
      </div>

      <div id="mailCollapseSeventeen" class="collapse" aria-labelledby="mailHeadingSeventeen" data-parent="#mailbox-inbox" style="display: block">
        <div class="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="infocompany@mail.com" data-mailcc>
          <div class="d-flex justify-content-between">
            <div class="d-flex user-info">
              <div class="f-head" style="    padding-left: 10px;">
                <img src="~/static/assetsAdmin/backend/assets/img/90x90.jpg" class="user-profile" alt="avatar" />
              </div>
              <div class="f-body">
                <div class="meta-title-tag">
                  <h4 id="name-cus-spam" class="mail-usr-name" data-mailtitle="eBill"></h4>
                </div>
                <div class="meta-mail-time">
                  <p id="mail-cus-spam" class="user-email" data-mailto="infocompany@mail.com"></p>
                  <p id="data-create-spam" class="mail-content-meta-date"></p>
                </div>
              </div>
            </div>
            <div class="action-btns">
              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left reply">
                  <polyline points="9 14 4 9 9 4" />
                  <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                </svg>
              </a>
              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-right forward">
                  <polyline points="15 14 20 9 15 4" />
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                </svg>
              </a>
            </div>
          </div>

          <p id="text-msg-spam" class="mail-content" data-mail-title="eBill"></p>

          <p>Best Regards,</p>
          <p id="name2-cus-spam"></p>
        </div>
      </div>

      <div id="mailCollapseTen" class="collapse" aria-labelledby="mailHeadingTen" data-parent="#mailbox-inbox" style="display: block">
        <div class="mail-content-container trashed" data-mailfrom="info@mail.com" data-mailto="ryanMCkillop@mail.com" data-mailcc>
          <div class="d-flex justify-content-between">
            <div class="d-flex user-info">
              <div class="f-head" style="    padding-left: 10px;">
                <div class="avatar avatar-sm">
                  <span class="avatar-title rounded-circle">KB</span>
                </div>
              </div>
              <div class="f-body">
                <div class="meta-title-tag">
                  <h4 id="name-cus-trash" class="mail-usr-name" data-mailtitle="Make it Simple"></h4>
                </div>
                <div class="meta-mail-time">
                  <p id="mail-cus-trash" class="user-email" data-mailto="ryanMCkillop@mail.com"></p>
                  <p id="data-create-trash" class="mail-content-meta-date current-recent-mail"></p>
                </div>
              </div>
            </div>
            <div class="action-btns">
              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-left reply">
                  <polyline points="9 14 4 9 9 4" />
                  <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                </svg>
              </a>
              <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-corner-up-right forward">
                  <polyline points="15 14 20 9 15 4" />
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                </svg>
              </a>
            </div>
          </div>
          <p id="text-msg-trash" class="mail-content"></p>
        </div>
      </div>
    </div>
    <div class="message-box" v-else>
      <!-- Modal -->
      <modal name="modal-fade-show" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" class="modal_fade_show">
        <div class="modal-dialog" role="document" style="margin-top: 15%;">
          <div class="modal-content" style="padding: 0px;">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Are You Sure ?</h5>
            </div>
            <div class="modal-body">
              <p class="modal-text">This message will be permanently deleted and you will not be able to recover it. Are you sure you want to do it?.</p>
            </div>
            <div class="modal-footer">
              <button v-on:click="closeModelRemove()" class="btn" data-dismiss="modal">
                <i class="flaticon-cancel-12"></i> No
              </button>
              <button type="button" data-dismiss="modal" v-on:click="DeleteTrash()" class="btn btn-primary feather feather-trash permanent-delete">Yes</button>
            </div>
          </div>
        </div>
      </modal>
      <div class="message-box-scroll" id="ct" v-if="resultsListTrash&&resultsListTrash.length">
        <div v-for="(result,i) in resultsListTrash" :key="i" id="unread-promotion-page" :class="'mail-item trashed num-'+i">
          <div class="animated animatedFadeInUp fadeInUp" id="mailHeadingEleven">
            <div class="mb-0">
              <div class="mail-item-heading social collapsed">
                <div class="mail-item-inner">
                  <div class="d-flex">
                    <div class="n-chk text-center" style="width: 30px;">
                      <label class="new-control new-checkbox checkbox-primary" style="top:-5px;padding: 14px;padding-right: 0px;margin-bottom: -11px;left: -14px;">
                        <input @change="CheckToShow(i)" type="checkbox" v-model="ArrayChecked[i]" :value="result._id" class="new-control-input inbox-chkbox" name="check" />
                        <span class="new-control-indicator" style="top: 0px"></span>
                      </label>
                    </div>
                    <div class="f-head">
                      <div class="avatar avatar-sm">
                        <span class="avatar-title rounded-circle">KB</span>
                      </div>
                    </div>
                    <div class="f-body" v-on:click="getInformationDetail(result._id)" data-toggle="collapse" role="navigation" :data-target="'#mailCollapseEleven'+result._id" aria-expanded="false">
                      <div class="meta-mail-time">
                        <div class="tooltips">
                          <span style="
                                                                                        width: 15px;
                                                                                        height: 15px;
                                                                                        border-radius: 50%;
                                                                                        padding: 1px;
                                                                                        font-size: 10px;
                                                                                        color: #fff !important;
                                                                                        " class="badge badge-success">{{result.scoreCaptcha}}</span>
                          <span class="tooltiptext tooltip-right">Look's good</span>
                        </div>
                        <p class="user-email" data-mail-to="kirsten.beck@mail.com">{{result.customerName}}</p>
                      </div>
                      <div class="meta-title-tag">
                        <p class="mail-content-excerpt" data-mail-description='{"ops":[{"insert":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n"}]}'>
                          <span class="mail-title" :data-mail-title="result.customerSub">{{result.customerSub}} -</span>
                          {{result.customerMsg}}
                        </p>
                        <div class="tags"></div>
                        <p class="meta-time align-self-center">{{CompareDate(result.timeCreateContacts)}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="mail-item trash" style="text-align: center;
                                    display: flex;
                                    height: 87%;
                                    justify-content: center;flex-flow: wrap-reverse;
                                    background: #fcc7b2b8;
                                    border-radius: 50%;
                                    width: 350px;
                                    height: 350px;
                                    margin: 80px auto;opacity: 60%;">
        <svg style="enable-background:new 0 0 512.021 512.021;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" xml:space="preserve">
          <path style="fill:#64B5F6;" d="M338.214,344.556l-64-64.107c-4.16-4.171-10.914-4.179-15.085-0.019  c-2.006,2.001-3.133,4.717-3.134,7.55v149.44c0.003,4.589,2.942,8.662,7.296,10.112c1.086,0.367,2.224,0.555,3.371,0.555  c3.357,0,6.519-1.581,8.533-4.267l64-85.333C342.376,354.244,341.958,348.31,338.214,344.556z" />
          <path style="fill:#1976D2;" d="M291.366,320.641l-64-21.333c-5.587-1.868-11.631,1.147-13.499,6.734  c-0.732,2.19-0.734,4.558-0.005,6.749l42.667,128c1.453,4.362,5.536,7.302,10.133,7.296h0.661c4.819-0.3,8.836-3.8,9.792-8.533  l21.333-106.667C299.523,327.601,296.483,322.345,291.366,320.641z" />
          <path style="fill:#2196F3;" d="M507.43,23.446c-3.399-2.377-7.867-2.568-11.456-0.491L90.641,257.622  c-5.096,2.955-6.832,9.482-3.877,14.578c1.306,2.253,3.391,3.95,5.861,4.771l191.573,63.872l148.907,63.829  c5.417,2.316,11.685-0.197,14.001-5.614c0.321-0.752,0.555-1.538,0.697-2.343l64-362.667  C512.531,29.965,510.825,25.829,507.43,23.446z" />
          <g>
            <path style="fill:#1976D2;" d="M510.011,38.38c3.441-4.781,2.355-11.447-2.426-14.889c-4.259-3.065-10.115-2.578-13.808,1.15   L215.611,318.017l80.277,27.733L510.011,38.38z" />
            <path style="fill:#1976D2;" d="M26.065,420.246c-2.679,0.003-5.26-1.003-7.232-2.816c-5.319-4.892-10.553-9.92-15.701-15.083   c-4.171-4.165-4.176-10.922-0.011-15.093c4.165-4.171,10.922-4.176,15.093-0.011c4.949,4.949,9.984,9.792,15.083,14.485   c4.336,3.988,4.618,10.736,0.63,15.072C31.904,418.999,29.052,420.249,26.065,420.246z" />
            <path style="fill:#1976D2;" d="M171.387,490.54c-10.278-0.033-20.527-1.098-30.592-3.179c-5.814-0.95-9.757-6.434-8.806-12.248   c0.95-5.814,6.434-9.757,12.248-8.806c0.277,0.045,0.553,0.102,0.825,0.169c8.683,1.792,17.524,2.707,26.389,2.731h0.064h4.8   c5.559-0.531,10.497,3.545,11.028,9.104c0.037,0.385,0.051,0.771,0.044,1.157c0.216,5.884-4.377,10.831-10.261,11.051h-5.568   L171.387,490.54z M94.95,470.124c-1.708,0-3.39-0.409-4.907-1.195c-10.486-5.487-20.611-11.636-30.315-18.411   c-4.727-3.515-5.709-10.197-2.194-14.925c3.355-4.511,9.634-5.644,14.354-2.59c8.937,6.286,18.272,11.987,27.947,17.067   c5.231,2.709,7.276,9.146,4.567,14.377c-1.833,3.54-5.487,5.762-9.474,5.762L94.95,470.124z" />
            <path style="fill:#1976D2;" d="M226.235,479.105c-5.891,0.048-10.705-4.688-10.753-10.579c-0.035-4.307,2.524-8.213,6.487-9.901   c6.141-2.627,12.105-5.648,17.856-9.045c5.146-2.867,11.642-1.019,14.509,4.127c2.767,4.967,1.152,11.231-3.672,14.241   c-6.542,3.867-13.325,7.309-20.309,10.304C229.05,478.806,227.651,479.097,226.235,479.105z" />
          </g>
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
          <g />
        </svg>
        <h1 style="position: absolute; font-size: 22px;font-weight: normal;margin-top: 24px;font-size: 23px;margin-bottom: -43px;color:black">No conversations in Trash.</h1>
      </div>
    </div>
  </div>
</template>
<script>
import { HTTP } from "../../../static/baseAPI.js";
import Snackbar from "awesome-snackbar";
export default {
  data() {
    return {
      idMessageRemoveTrash: [],
      showDetail: false,
      removeMessage: false,
      showToolBarTrash: false,
      resultsListTrash: [],
      ts_total: null,
      ts_from: null,
      ts_to: null,
      numberMessage: null,
      textSearchTrash: "",
      pageMessage: 1,      
      ArrayChecked: [],    
      selectAll: false,  
      resultsDetail: [],
      idUser: this.$route.query.id || "",
    };
  },
  methods: {
    CheckPagination(action) {
      if (action == "forward") {
        this.pageMessage += 1;
        this.LoadDataTrash(this.pageMessage, this.textSearchTrash);
      }
      if (action == "back") {
        this.pageMessage -= 1;
        this.LoadDataTrash(this.pageMessage, this.textSearchTrash);
      }
    },
    openModel() {
      this.$modal.show("modal-fade-show");
    },
    closeModelRemove() {
      this.$modal.hide("modal-fade-show");
    },
    showAllMessage() {      
      if(!this.selectAll){        
      for (var i = 0; i < this.resultsListTrash.length; i++) {
        this.ArrayChecked[i] = true
      }  
        this.showToolBarTrash = true
      }else{
        for (var i = 0; i < this.resultsListTrash.length; i++) {
        this.ArrayChecked[i] = false
        }  
        this.showToolBarTrash = false
      }      
    },
    CheckToShow() {      
      if (this.CheckCheckedAllTrue(this.ArrayChecked) && this.ArrayChecked.length == this.resultsListTrash.length) {
        this.selectAll = true;
      } else {
        this.selectAll = false;
      };
      if (!this.CheckCheckedAllFalse(this.ArrayChecked)) {
        this.showToolBarTrash = true;
      } else {
        this.showToolBarTrash = false;
      }
    },
    CheckCheckedAllFalse(arr) {
      return arr.every((element) => element === false);
    },
     CheckCheckedAllTrue(arr) {
      return arr.every((element) => element === true);
    },    
    getIdRemoveTrash() {
      this.idMessageRemoveTrash = new Set();
      for (var i = 0; i < this.ArrayChecked.length; i++) {
        if (this.ArrayChecked[i] == true) {
          this.idMessageRemoveTrash.add(this.resultsListTrash[i]._id);
        }
      }
    },
    ReviveTrash() {
      this.getIdRemoveTrash();    
      this.idMessageRemoveTrash = Array.from( this.idMessageRemoveTrash);
      HTTP.post(`revive-trash`, {
        data: this.idMessageRemoveTrash
      }).then(() => {        
        this.ArrayChecked = []
        this.LoadDataTrash(1, this.textSearchTrash);
        this.$root.$emit('LoadDataInbox')
        this.$root.$emit('LoadDataSpam')
        this.$root.$emit('LoadNotify')
        new Snackbar(`1 Mail restored`, {
          position: "bottom-right",
          theme: "light",
          style: {
            container: [
              ["background-color", "rgb(81, 83, 101)"],
              ["border-radius", "5px"],
            ],
            message: [["color", "#fff"]],
          },
        });
        this.idMessageRemoveTrash = []
        this.showToolBarTrash = false;
      });
      this.selectAll = false
    },
    MarkRead() {
      this.getIdRemoveTrash();    
      this.idMessageRemoveTrash = Array.from( this.idMessageRemoveTrash);
      HTTP.post(`mark-as-read`, {
        data: this.idMessageRemoveTrash,
      }).then(() => {
        this.ArrayChecked = []
        new Snackbar(`1 Mail marked as Read`, {
          position: "bottom-right",
          theme: "light",
          style: {
            container: [
              ["background-color", "rgb(81, 83, 101)"],
              ["border-radius", "5px"],
            ],
            message: [["color", "#fff"]],
          },
        });
        this.idMessageRemove = [];
        this.showToolBarTrash = false;
      });
      this.selectAll = false
    },
    MarkUnread() {
      this.getIdRemoveTrash();    
      this.idMessageRemoveTrash = Array.from( this.idMessageRemoveTrash);
      HTTP.post(`mark-as-unread`, {
        data: this.idMessageRemoveTrash,
      }).then(() => {
        this.ArrayChecked = []
        new Snackbar(`1 Mail marked as UnRead`, {
          position: "bottom-right",
          theme: "light",
          style: {
            container: [
              ["background-color", "rgb(81, 83, 101)"],
              ["border-radius", "5px"],
            ],
            message: [["color", "#fff"]],
          },
        });
        this.idMessageRemove = [];
        this.showToolBarTrash = false;
      });
      this.selectAll = false
    },
    DeleteTrash() {
      this.getIdRemoveTrash();    
      this.idMessageRemoveTrash = Array.from( this.idMessageRemoveTrash);
      HTTP.post(`delete-trash`, {
        data: this.idMessageRemoveTrash,
      }).then(() => {
        this.ArrayChecked = []
        this.LoadDataTrash(1, this.textSearchTrash);
        new Snackbar(`1 Mail Permanently Deleted`, {
          position: "bottom-right",
          theme: "light",
          style: {
            container: [
              ["background-color", "rgb(81, 83, 101)"],
              ["border-radius", "5px"],
            ],
            message: [["color", "#fff"]],
          },
        });
        this.idMessageRemoveTrash = [];
        this.showToolBarTrash = false;
        this.closeModelRemove();
      });
      this.selectAll = false
    },
    LoadDataTrash(page, key) {
      HTTP.get("contact-trash", { params: { page: page, key: key } })
        .then((response) => {
          this.resultsListTrash = response.data[0];
          this.numberMessage = this.resultsListTrash.length;
          this.$emit("LoadDataTrash", this.resultsListTrash);
          let total = response.data[1];
          let page = response.data[2];
          let limit = response.data[3];
          this.ts_total = total;
          this.ts_from = (page - 1) * limit + 1;
          this.ts_to = page * limit < total ? page * limit : total;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    getNameInitials(fullname) {
      try {
        const ArrayName = fullname.split(" ");
        const first = ArrayName.shift().charAt(0);
        const last = ArrayName.pop().charAt(0);
        const Initials = first + last;
        return Initials.toUpperCase();
      } catch (error) {
        return "WP";
      }
    },
    getInformationDetail(id) {
      let stateObj = { id: id };
       this.$router.push({
        query: {
          id: id,         
        },
      }); 
      var dataInputSearch = "";
      HTTP.get("mail-detail/" + id, {
        params: { dataInputSearch: dataInputSearch },
      })
        .then((response) => {
          this.resultsDetail = response.data;          
        })
        .catch((e) => {
          console.log(e)
        });
    },
    CompareDate(date) {
      var moment = require("moment");
      var today = moment().format("YYYY/MM/DD");
      if (moment(date, "YYYY/MM/DD").isBefore(today)) {
        return date;
      } else {
        return moment(date).format("h:mm A");
      }
    },
    
  },
  mounted() {
    //Get List ArrayChecked
    for (var i = 0; i < this.resultsListTrash; i++) {
      this.ArrayChecked[i] = false;
    }
    //Get router detail
     if(this.$route.query.id != null){
      this.getInformationDetail(this.idUser)
    }    

    //Set LoadDataTrash funtion
    this.$root.$on("LoadDataTrash", () => {
      this.LoadDataTrash(1, this.textSearchTrash);
    });
    this.LoadDataTrash(1, this.textSearchTrash);
  },
};
</script>
<style>
.modal_fade_show .vm--modal {
  top: 219px !important;
  height: 0px !important;
  overflow: initial;
}
</style>