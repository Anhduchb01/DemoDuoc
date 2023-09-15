<template>
  <div>
    <div class="crawler-component">
      <!-- Websites -->
      <div class="row layout-spacing layout-top-spacing" id="cancel-row">
        <div class="col-lg-12">
          <Websites />
        </div>
      </div>
      <!-- modal Website  -->
          
      <!-- table schedule -->
    </div>
  </div>
</template>
<script>
import Websites from "~/components/admin/crawler/WebsitesComponent.vue";
export default {
  layout: "admin",
  components: {
    Websites,
  },
};
</script>
<style scoped>
.btn-info {
  background-color: #2196f3 !important;
  border-color: #2196f3 !important;
}
.vm--modal {
  height: 475px !important;
}

.item-content {
  border: none !important;
}
</style>