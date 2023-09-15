<template>
  <div id="scheduleModal" class="modal animated fadeInUp custo-fadeInUp show" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 style="margin:0" class="modal-title">
            Schedule
            Crawl
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <div class="col-lg-12">
            <div class="checkbox-column sorting_1 text-right">
              <label style="width: auto;" class="new-control new-checkbox checkbox-outline-primary m-auto">
                <input v-on:click="checkAllCheckbox()" type="checkbox" class="new-control-input child-chk" id="check-box-check-all" />
                <span class="new-control-indicator"></span>
                <span style="visibility:hidden"></span>Check All /
                Uncheck All
              </label>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="statbox widget box box-shadow">
              <div class="widget-content widget-content-area">
                <div id="style-2_wrapper" class="dataTables_wrapper container-fluid dt-bootstrap4 no-footer">
                  <div class="table-responsive">
                    <table id="style-2" class="table style-2 table-hover dataTable no-footer" role="grid" aria-describedby="style-2_info" style="width: 1522px;">
                      <thead>
                        <tr role="row">
                          <th>Time</th>
                          <th class="cursorPointer" onclick="checkBoxDay('monday')">Monday</th>
                          <th class="cursorPointer" onclick="checkBoxDay('tuesday')">Tuesday</th>
                          <th class="cursorPointer" onclick="checkBoxDay('wednesday')">Wednesday</th>
                          <th class="cursorPointer" onclick="checkBoxDay('thursday')">Thursday</th>
                          <th class="cursorPointer" onclick="checkBoxDay('friday')">Friday</th>
                          <th class="cursorPointer" onclick="checkBoxDay('saturday')">Saturday</th>
                          <th class="cursorPointer" onclick="checkBoxDay('sunday')">Sunday</th>
                        </tr>
                      </thead>
                      <tbody class="table-schedule">
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('0')">00:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="0" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('1')">1:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="1" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('2')">2:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="2" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('3')">3:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="3" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('4')">4:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="4" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('5')">5:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="5" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('6')">6:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="6" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('7')">7:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="7" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('8')">8:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="8" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('9')">9:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="9" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('10')">10:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="10" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('11')">11:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="11" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('12')">12:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="12" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('13')">13:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="13" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('14')">14:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="14" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('15')">15:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="15" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('16')">16:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="16" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('17')">17:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="17" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('18')">18:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="18" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('19')">19:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="19" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('20')">20:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="20" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('21')">21:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="21" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('22')">22:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="22" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="cursorPointer" onclick="checkBoxHour('23')">23:00</td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info monday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info tuesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info wednesday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info thursday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info friday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info saturday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                          <td class="checkbox-column sorting_1">
                            <label class="new-control new-checkbox checkbox-outline-primary m-auto">
                              <input type="checkbox" value="23" class="new-control-input child-chk select-customers-info sunday" id="customer-all-info" />
                              <span class="new-control-indicator"></span>
                              <span style="visibility:hidden">c</span>
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button data-dismiss="modal" type="button" class="btn btn-primary mt-2 mr-2">Ok</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    checkAllCheckbox() {
      let elementChechBoxAll = document.querySelector("#check-box-check-all").checked;
      let arrayInput = document.querySelectorAll(".select-customers-info");
      if (elementChechBoxAll === true) {
        for (let index = 0; index < arrayInput.length; index++) {
          arrayInput[index].checked = true;
        }
      }
      if (elementChechBoxAll === false) {
        for (let index = 0; index < arrayInput.length; index++) {
          arrayInput[index].checked = false;
        }
      }
    },
  },
};
</script>
