<template>
	<div class="d-flex justify-content-between align-items-center mt-3">
		<small class="text-muted">Sesiones usadas</small>
		<div class="fw-semibold">{{ usadas }} / {{ total }}</div>
	</div>
	<div style="height: 60px;" class="mt-2">
		<Bar :data="chartData" :options="chartOptions" />
	</div>
	<small class="text-muted d-block mt-2">
		{{restantes}} sesiones restantes
	</small>

</template>
<script setup>

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, } from 'chart.js'

import { Bar } from 'vue-chartjs'
import { computed } from 'vue'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)
const props = defineProps(['usadas', 'total'])
const usadas = props.usadas
const total = props.total
const restantes = total - usadas

const chartData = computed(() => ({
	labels: [''],
	datasets: [
		{
			label: 'Usadas',
			data: [usadas],
			backgroundColor: '#2563eb', // azul
			borderRadius: 10,
			barThickness: 14,
			stack: 'stack1'
		},
		{
			label: 'Restantes',
			data: [restantes],
			backgroundColor: '#f97316', // naranja
			borderRadius: 10,
			barThickness: 14,
			stack: 'stack1'
		}
	]
}))

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	indexAxis: 'y',
	plugins: {
		legend: { display: false },
		tooltip: { enabled: false }
	},
	scales: {
		x: {
			stacked: true,
			display: false,
			max: total
		},
		y: {
			stacked: true,
			display: false
		}
	}
}
</script>