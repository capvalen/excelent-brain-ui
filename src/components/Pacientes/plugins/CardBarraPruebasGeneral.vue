<template>
	<p class="text-muted text-capitalize">
		<span v-if="datos.tipo =='ansiedad'"><i class="bi bi-activity"></i></span> 
		<span v-if="datos.tipo =='depresion'"><i class="bi bi-graph-down-arrow"></i></span> 
		<span v-if="datos.tipo =='riesgo'"><i class="bi bi-exclamation-triangle"></i></span> 
		{{datos.titulo}}</p>
	<h3 class="mb-0" :class="{'text-success': datos.avance >= 60, 'text-warning': datos.avance >= 40 && datos.avance < 60, 'text-danger': datos.avance <= 50}">{{ datos.avance }}%</h3>
	<div style="height: 40px;" class="w-75">
		<Bar :data="chartData" :options="chartOptions" />
	</div>
</template>
<script setup>
import { Bar } from 'vue-chartjs'
import { computed } from 'vue'

const props = defineProps(['datos'])
const datos = props.datos


const chartData = computed(() => ({
	labels: [''],
	datasets: [
		{
			label: 'Usadas',
			data: [datos.avance],
			backgroundColor: '#2563eb', // azul
			borderRadius: { topLeft: 10, bottomLeft: 10 },
			barThickness: 10, //grosor
			borderSkipped: false
			
		},
		{
			label: 'Restantes',
			data: [100-datos.avance],
			backgroundColor: '#f97316', // naranja
			borderRadius: 10,
			barThickness: 10, //grosor
			
		}
	]
}))

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	indexAxis: 'y',
	animation: false,
	plugins: {
		legend: { display: false },
		tooltip: { enabled: false }
	},
	scales: {
		x: {
			stacked: true,
			display: false,
		},
		y: {
			stacked: true,
			display: false
		}
	}
}
</script>