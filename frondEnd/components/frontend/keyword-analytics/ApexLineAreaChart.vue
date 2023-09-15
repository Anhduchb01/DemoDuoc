<template>
  <div class="container" style="margin-top: 60px">
  <b-card no-body>
    <b-card-header>
      <!-- title and subtitle -->
      <div>
        <b-card-sub-title class="mb-25">
		{{ $t("body.keyword.lineChart") }}
	</b-card-sub-title>
        <!-- <b-card-sub-title>Commercial networks</b-card-sub-title> -->
      </div>
     
    </b-card-header>

    <b-card-body>
      <!-- <apexchart type="line" height="400" :options="chartOptions"  :series="series"/> -->
      <chartjs-component-line-chart
        :height="400"
        :data="lineChart.data"
        :options="lineChart.options"
        :plugins="plugins"
      />
    </b-card-body>
  </b-card>
</div>
</template>

<script>
import {
	BCard, BCardHeader, BCardBody, BCardTitle, BCardSubTitle,
} from 'bootstrap-vue';
import ChartjsComponentLineChart from './ChartjsComponentLineChart.vue'
export default {
	props: [
		"resultTimeline",
	],
	components: {
		BCard,
		BCardHeader,
		BCardBody,
		BCardTitle,
		BCardSubTitle,
		ChartjsComponentLineChart
		// flatPickr,
	},
	computed: {
		series() {
			return [
				{
					name: 'Tích cực',
					data: this.resultTimeline[1],
				},
				{
					name: 'Tiêu cực',
					data: this.resultTimeline[2],
				},
				{
					name: 'Trung tinh',
					data: this.resultTimeline[3],
				}
			]

		},
		chartOptions() {
			return {
				chart: {
					toolbar: {
						show: false,
					},
				},
				dataLabels: {
					enabled: false,
				},
				stroke: {
					show: false,
					curve: 'straight',
				},
				legend: {
					show: true,
					position: 'top',
					horizontalAlign: 'left',
					fontSize: '14px',
					fontFamily: 'Montserrat',
				},
				grid: {
					xaxis: {
						lines: {
							show: true,
						},
					},
				},
				xaxis: {
					categories: this.resultTimeline[0]
				},
				yaxis: {
					// opposite: isRtl
				},
				fill: {
					opacity: 1,
					type: 'solid',
				},
				tooltip: {
					shared: false,
				},
				colors: ['#38C477', '#F2543D', '#808080'],
			}
		},
		lineChart() {
			return {
				options: {
					responsive: true,
					maintainAspectRatio: false,
					backgroundColor: false,
					hover: {
						mode: 'label',
					},
					tooltips: {
						// Updated default tooltip UI
						shadowOffsetX: 1,
						shadowOffsetY: 1,
						shadowBlur: 8,
						shadowColor: 'rgba(0, 0, 0, 0.25)',
						backgroundColor: '#FFFFFF',
						titleFontColor: '#000000',
						bodyFontColor: '#000000',
					},
					layout: {
						padding: {
							top: -15,
							bottom: -25,
							left: -15,
						},
					},
					scales: {
						xAxes: [
							{
								display: true,
								scaleLabel: {
									display: true,
								},
								gridLines: {
									display: true,
									color: '#C5C5C5',
									zeroLineColor: '#C5C5C5',
									lineWidth : 0.8
								},
								ticks: {
									fontColor: '#6e6b7b',
								},
							},
						],
						yAxes: [
							{
								display: true,
								scaleLabel: {
									display: true,
								},
								ticks: {
									stepSize: Math.ceil(this.resultTimeline[4] / 5) ,
									min: 0,
									max: this.resultTimeline[4] +1,
									fontColor: '#6e6b7b',
								},
								gridLines: {
									display: true,
									color: '#C5C5C5',
									zeroLineColor: '#C5C5C5',
									lineWidth : 0.8
								},
							},
						],
					},
					legend: {
						position: 'top',
						align: 'start',
						labels: {
							usePointStyle: true,
							padding: 25,
							boxWidth: 9,
						},
					},
				},
				data: {
					labels: this.resultTimeline[0],
					datasets: [
						{
							data: this.resultTimeline[2],
							label: this.$i18n.t('body.news.Positive'),
							borderColor: '#ff4961',
							lineTension: 0.5,
							pointStyle: 'circle',
							backgroundColor: '#ff4961',
							fill: false,
							pointRadius: 1,
							pointHoverRadius: 5,
							pointHoverBorderWidth: 5,
							pointBorderColor: 'transparent',
							pointHoverBorderColor: '#FFFFFF',
							pointHoverBackgroundColor: '#ff4961',
							pointShadowOffsetX: 1,
							pointShadowOffsetY: 1,
							pointShadowBlur: 5,
							pointShadowColor: 'rgba(0, 0, 0, 0.25)',
						},
						{
							data: this.resultTimeline[3],
							label: this.$i18n.t('body.news.Neutral'),
							borderColor: '#666ee8',
							lineTension: 0.5,
							pointStyle: 'circle',
							backgroundColor: '#666ee8',
							fill: false,
							pointRadius: 1,
							pointHoverRadius: 5,
							pointHoverBorderWidth: 5,
							pointBorderColor: 'transparent',
							pointHoverBorderColor: '#FFFFFF',
							pointHoverBackgroundColor: '#666ee8',
							pointShadowOffsetX: 1,
							pointShadowOffsetY: 1,
							pointShadowBlur: 5,
							pointShadowColor: 'rgba(0, 0, 0, 0.25)',
						},
						{
							data: this.resultTimeline[1],
							label: this.$i18n.t('body.news.Negative'),
							borderColor: '#00997d',
							lineTension: 0.5,
							pointStyle: 'circle',
							backgroundColor: '#00997d',
							fill: false,
							pointRadius: 1,
							pointHoverRadius: 5,
							pointHoverBorderWidth: 5,
							pointBorderColor: 'transparent',
							pointHoverBorderColor: '#FFFFFF',
							pointHoverBackgroundColor: '#00997d',
							pointShadowOffsetX: 1,
							pointShadowOffsetY: 1,
							pointShadowBlur: 5,
							pointShadowColor: 'rgba(0, 0, 0, 0.25)',
							
						},
					],
				},
			}
		}
	},
	data() {
		return {

			plugins: [
				// to add spacing between legends and chart
				{
					beforeInit(chart) {
						/* eslint-disable func-names, no-param-reassign */
						chart.legend.afterFit = function () {
							this.height += 20
						}
						/* eslint-enable */
					},
				},
			],
			rangePicker: ['2019-05-01', '2019-05-10'],
		}
	},
}
</script>
