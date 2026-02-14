<template>
	<div class="alert alert-danger" role="alert">
		<i class="bi bi-exclamation-triangle-fill"></i> Riesgo suicida moderado - Seguimiento activo
	</div>
	<div class="alert alert-info" role="alert">
		<i class="bi bi-file-medical"></i> Alta psiquiátrica: 15 Ene 2026
	</div>
	<div class="alert alert-warning" role="alert">
		<i class="bi bi-wallet2"></i> Deuda pendiente: S/ 150.00
	</div>

	<div class="row">
		<div class="col col-md-4">

			<div class="card shadow-sm rounded-3 mb-2 ">
				<div class="card-body">
					<h6 class="fw-semibold text-dark mb-1">
						<i class="bi bi-calendar-check me-2 text-primary"></i> Próxima Cita
					</h6>

					<div class="bg-primary bg-opacity-10 p-2 rounded-3 ">
						<div class="d-flex align-items-center">
							<i class="bi bi-clock-history fs-4 me-3 text-primary"></i>
							<div>
								<h5 class="fw-semibold text-primary-emphasis d-block">Hoy, 11:00 AM</h5>
								<p class="mb-0 text-secondary-emphasis">Psiquiátrica</p>
								<span class="text-primary">Dr. Luis Paredes</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card shadow-sm rounded-3 mb-2 ">
				<div class="card-body">
					<h6 class="fw-semibold text-dark mb-1">
						<i class="bi bi-file-text me-2 text-success"></i> Última Evolución
					</h6>

					<div class="bg-primary bg-opacity-10 p-2 rounded-3 ">
						<p class="mb-0 text-muted">28 Ene 2026 · Dra. Ana Rojas</p>
						<p class="mb-0 ">Paciente presenta mejoría en síntomas de ansiedad. Se mantiene tratamiento farmacológico
							actual. Próxima evaluación en 2 semanas.</p>
					</div>
				</div>
			</div>
			<div class="card shadow-sm rounded-3 mb-2 ">
				<div class="card-body">
					<div class="d-flex justify-content-between">
						<h6 class="fw-semibold text-dark mb-1">
							<i class="bi bi-activity me-2 text-info"></i> Indicadores
						</h6>
						<a href="#" class="text-decoration-none"><small>Ver pruebas <i class="bi bi-arrow-right"></i></small></a>
					</div>

					<div class="bg-primary bg-opacity-10 p-2 rounded-3 ">
						<Bar :data="chartDataLinear" :options="chartOptionsLinear" />
					</div>
				</div>
			</div>



		</div>
		<div class="col col-md-8">
			<div class="card">
				<div class="card-body">
					<div class="d-flex justify-content-between mb-3">
						<h6 class="fw-semibold text-dark mb-1">
							<i class="bi bi-clock"></i> Línea de Tiempo Clínica
						</h6>
						<a href="#" class="text-decoration-none"><small>Ver pruebas <i class="bi bi-arrow-right"></i></small></a>
					</div>
					<div class="row">
						<div class="col">
							<div class="card">
								<div class="card-body my-2">
									<div class="d-flex justify-content-between">
										<div>
											<label class="fw-medium"><span class="text-primary"><i class="bi bi-calendar"></i> Cita Psiquiátrica Programada</span></label>
											<p class="m-0 text-muted"><small>Control mensual - Dr. Luis Paredes</small></p>
											<p class="m-0 text-primary"><small>Dr. Luis Paredes</small></p>
										</div>
										<div class="text-end">
											<label class="fw-medium">02 Feb 2026</label>
											<p class="m-0 text-muted"><small>11:00 a.m.</small></p>
										</div>
									</div>
								</div>
							</div>
							<div class="card my-2">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<label class="fw-medium"><span class="text-success"><i class="bi bi-calendar"></i> Evolución Clínica</span></label>
											<p class="m-0 text-muted"><small>Rellenado</small></p>
											<p class="m-0 text-primary"><small>Dr. Luis Paredes</small></p>
										</div>
										<div class="text-end">
											<label class="fw-medium">28 Ene 2026</label>
											<p class="m-0 text-muted"><small>10:30 a.m.</small></p>
										</div>
									</div>
								</div>
							</div>
							<div class="card my-2">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<label class="fw-medium"><span class="text-warning"><i class="bi bi-calendar"></i> Receta médica</span></label>
											<p class="m-0 text-muted"><small>Sertralina 50mg, Alprazolam 0.25mg</small></p>
											<p class="m-0 text-primary"><small>Dr. Luis Paredes</small></p>
										</div>
										<div class="text-end">
											<label class="fw-medium">28 Ene 2026</label>
											<p class="m-0 text-muted"><small>03:45 p.m.</small></p>
										</div>
									</div>
								</div>
							</div>
							<div class="card my-2">
								<div class="card-body">
									<div class="d-flex justify-content-between">
										<div>
											<label class="fw-medium"><span class="text-danger"><i class="bi bi-calendar"></i> Alerta S.O.S. Activada</span></label>
											<p class="m-0 text-muted"><small>Paciente reporta ideación suicida - Contacto de emergencia notificado</small></p>
											<p class="m-0 text-primary"><small>Dra. Ana Rojas</small></p>
										</div>
										<div class="text-end">
											<label class="fw-medium">15 Ene 2026</label>
											<p class="m-0 text-muted"><small>11:30 a.m.</small></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>
<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartDataLinear = {
	labels: ['Ansiedad (BAI)', 'Depresión (BDI-II)', 'Riesgo Suicida (BSS)'],
	datasets: [
		{
			data: [95, 45, 15, 25], // Valores de ejemplo según tu imagen
			backgroundColor: [
				'#0057e7', // azul google
			],
			borderRadius: 5, // Bordes redondeados
			borderSkipped: false,
			barThickness: 10, // Grosor de las barras
		}
	]
}


const chartOptionsLinear = {
	indexAxis: 'y', // <--- Esto hace que las barras sean HORIZONTALES
	responsive: true,
	maintainAspectRatio: false,
	plugins: {
		legend: { display: false }, // Ocultamos la leyenda superior
	},
	scales: {
		x: {
			display: false, // Oculta el eje X (números abajo) para copiar la imagen
			grid: { display: false }
		},
		y: {
			grid: { display: false }, // Quita las líneas de fondo
			border: { display: false },
			ticks: {
				color: '#6c757d', // Color de texto grisáceo
				font: { size: 11 }
			},
		}
	}
}
</script>
<style scope>
.alert i {
	font-size: 1.3rem;
}
</style>