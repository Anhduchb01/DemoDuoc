<template>
  <!-- <div class="card" > -->
  <b-card no-body>
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-sub-title class="mb-25">
		{{ $t("body.keyword.barChart") }}
        </b-card-sub-title>
        <!-- <b-card-title class="font-weight-bolder">
          $74,382.72
        </b-card-title> -->
      </div>
      <!--/ title and subtitle -->

      <!-- datepicker -->
      <!-- <div class="d-flex align-items-center">
        <feather-icon
          icon="CalendarIcon"
          size="16"
        />
        <flat-pickr
          v-model="rangePicker"
          :config="{ mode: 'range'}"
          class="form-control flat-picker bg-transparent border-0 shadow-none"
          placeholder="YYYY-MM-DD"
        />
      </div> -->
      <!-- datepicker -->
    </b-card-header>

    <b-card-body>
      <apexchart type="bar" height="350" :options="barChart.chartOptions" :series="barChart.series"/>
    </b-card-body>
  </b-card>
<!-- </div> -->
</template>

<script>
import {
	BCard, BCardHeader, BCardBody, BCardSubTitle, BCardTitle,
} from 'bootstrap-vue'
export default {
	props: [
		"arrSource",
	],
	components: {
		BCard,
		BCardHeader,
		// flatPickr,
		BCardBody,
		BCardSubTitle,
		BCardTitle,
	},
	computed:{
		barChart() {
			return{
				series: [
					{
						data: this.arrSource,
					},
				],
				chartOptions: {
					chart: {
						toolbar: {
							show: false,
						},
					},
					colors: '#008FFB',
					plotOptions: {
						bar: {
							horizontal: true,
							barHeight: '30%',
							endingShape: 'rounded',

						},
					},
					grid: {
						xaxis: {
							lines: {
								show: true,
							},
						},
					},
					dataLabels: {
						enabled: true,
					},
					xaxis: {
						categories: ['CafeF', 'CafeBiz', 'Báo Đầu Tư', 'VnEconomy'],
					},
					yaxis: {
						// opposite: isRtl,
					},
					
				},
			}
		}

	},
	data() {
		return {

			rangePicker: ['2019-05-01', '2019-05-10'],
		}
	},
}
</script>
<style>
/* .card-body{
  border-radius: 2px;
    box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
} */
.card {
	border-radius: 2px;
	box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) 0px 2px 2px 0px;
	height: 100%;
	padding: 1.5rem;
}
</style>