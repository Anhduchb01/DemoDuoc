<template>
  <div class="row layout-top-spacing dashboard-component">    
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing box-step-action">
      <div class="widget-heading" style="padding: 20px 10px;">
        <h5 class="m-0" style="font-size: 17px;display: block;font-weight: 600;">Processing Steps</h5>
      </div>      
      <ProcessingStep />
    </div>
    <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
      <div style="height: 100%;" class="widget widget-chart-three">
        <div class="widget-heading">
          <div class>
            <h5 class>Daily Post</h5>
          </div>
        </div>
        <PostByDay />       
      </div>
    </div>
    <div class="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
      <div class="widget widget-chart-two" style="height: 429px">
        <div class="widget-heading chart-circle">
          <h5 class>Total Post</h5>
        </div>
        <TotalPost />     
      </div>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
      <div class="row widget-statistic">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <div class="widget widget-activity-five">
            <div class="widget-heading">
              <h5 class>Activity Log</h5>
            </div>
            <ActivityLog />
          </div>
        </div>
        <!-- ---- -->
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <Cpuperformance />
        </div>
        <!-- --- -->

        <!-- ---- -->
        <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing">
          <Memoryperformance />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostByDay from "~/components/admin/admin/post-by-dayComponent.vue";
import TotalPost from "~/components/admin/admin/total-postComponent.vue";
import ActivityLog from "~/components/admin/admin/ActivityLogComponent.vue";
import ProcessingStep from "~/components/admin/admin/processing-stepComponent.vue";
import Cpuperformance from "~/components/admin/admin/Cpu-performanceComponent.vue";
import Memoryperformance from "~/components/admin/admin/Memory-performanceComponent.vue";

export default {
  // layout: 'admin',
  layout(context) {
    return 'admin'
  }, 
  components: {    
    PostByDay,
    TotalPost,
    ActivityLog,
    ProcessingStep,
    Cpuperformance,
    Memoryperformance, 
  },
  data(){
    return{
      
    }
  },   
 };
</script>

<style>
/* sdasda */
/* body.dark .apexcharts-tooltip{
  opacity: 1!important;
} */
.apexcharts-tooltip.apexcharts-active{
  opacity: 1!important;
}
.widget-content .Chart-Total-Post path{
  stroke: white;
}
.dark .Chart-Total-Post path{
  stroke: #0e1726!important;
}
.dark .Chart-Total-Post{
  stroke: #ebedf2 !important;
}

.apexcharts-legend-series {
  margin: 8px 10px !important;
}
.apexcharts-legend.apexcharts-align-center.apx-legend-position-bottom{
    inset: auto 0px -10px!important;
}
</style>

