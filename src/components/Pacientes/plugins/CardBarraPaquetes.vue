<template>
	<div class="d-flex justify-content-between align-items-center mt-3">
		<small class="text-muted">Sesiones usadas</small>
		<div class="fw-semibold">{{ usadas }} / {{ total }}</div>
	</div>
	<div style="height: 40px;" class="mt-2 w-75" >
		<Bar :data="chartData" :options="chartOptions" />
	</div>
	<div class="d-flex justify-content-between">
		<small class="text-muted d-block mt-2">
			{{restantes}} sesiones restantes
		</small>
		<small class="text-danger d-block mt-2 fw-medium" v-if="vencidas>0">
			<i class="bi bi-exclamation-triangle"></i> {{vencidas}} vencida(s)
		</small>
	</div>

</template>
<script setup>

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, } from 'chart.js'

import { Bar } from 'vue-chartjs'
import { computed } from 'vue'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)
const props = defineProps(['usadas', 'total', 'vencidas'])
const usadas = props.usadas
const total = props.total
const vencidas = props.vencidas
const restantes = total - usadas

const chartData = computed(() => ({
	labels: [''],
	datasets: [
		{
			label: 'Usadas',
			data: [usadas],
			backgroundColor: '#2563eb', // azul
			borderRadius: { topLeft: 10, bottomLeft: 10 },
			barThickness: 10, //grosor
			stack: 'stack1',
			borderSkipped: false

		},
		{
			label: 'Restantes',
			data: [restantes],
			backgroundColor: '#f97316', // naranja
			borderRadius: { topRight: 10, bottomRight: 10 },
			barThickness: 10, //grosor
			stack: 'stack1',
			borderSkipped: false

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