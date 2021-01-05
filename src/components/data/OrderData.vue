<template>
	<div>
		<!-- 面包屑导航 -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/home' }">数据统计</el-breadcrumb-item>
			<el-breadcrumb-item>订单数据</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- 订单数据图表 -->
		<div class="orderCharts" ref="orderCharts">
		</div>
	</div>
</template>

<script>
	import echarts from 'echarts'
	export default {
		name: 'OrderData',
		mounted() {
			var myChart = echarts.init(this.$refs.orderCharts);
			var option = {
				title: {
					text: '订单数据统计'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['下单数', '访问数', '订单数']
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
						name: '下单数',
						type: 'line',
						stack: '总量',
						data: [120, 132, 101, 134, 90, 230, 210]
					},
					{
						name: '访问数',
						type: 'line',
						stack: '总量',
						data: [220, 182, 191, 234, 290, 330, 310]
					},
					{
						name: '订单数',
						type: 'line',
						stack: '总量',
						data: [150, 232, 201, 154, 190, 330, 410]
					}
				]
			}
			myChart.setOption(option);
		}
	}
</script>

<style scoped>
	.orderCharts {
		width: 540px;
		height: 420px;
		margin-top: 8px;
	}
</style>
