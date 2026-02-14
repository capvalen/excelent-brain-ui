<template>

	<div class="my-4">
		<div class="row g-3">
			<div class="col-md-3 d-flex">
				<div class="card stat-card borde-primary h-100 w-100">
					<div class="card-body d-flex justify-content-between align-items-center">
						<div>
							<small class="text-muted">Pacientes con cita hoy</small>
							<h4 class="fw-bold mb-0">24
							</h4>
							<small class="text-muted">8 en curso</small>
						</div>
						<div class="icon bg-primary-subtle text-primary">
							<i class="bi bi-people"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 d-flex">
				<div class="card stat-card borde-success h-100 w-100">
					<div class="card-body d-flex justify-content-between align-items-center">
						<div>
							<small class="text-muted">Nuevos del mes</small>
							<h4 class="fw-bold mb-0">24</h4>
						</div>
						<div class="icon bg-success-subtle text-success">
							<i class="bi bi-calendar-check"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 d-flex">
				<div class="card stat-card borde-warning h-100 w-100">
					<div class="card-body d-flex justify-content-between align-items-center">
						<div>
							<small class="text-muted">Pacientes con deuda</small>
							<h4 class="fw-bold mb-0">7</h4>
							<small class="text-muted">S/ 2450.00 total</small>
						</div>
						<div class="icon bg-warning-subtle text-warning">
							<i class="bi bi-currency-dollar"></i>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-3 d-flex">
				<div class="card stat-card borde-danger h-100 w-100">
					<div class="card-body d-flex justify-content-between align-items-center">
						<div>
							<small class="text-muted">Casos S.O.S.</small>
							<h4 class="fw-bold mb-0">3</h4>
							<small class="text-muted">Requieren atención</small>
						</div>
						<div class="icon bg-danger-subtle text-danger">
							<i class="bi bi-exclamation-triangle"></i>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row  my-3 g-3" id="segundoCombo">
			<div class="col-md-4 d-flex">
				<div class="card dash-card h-100 w-100">
					<div class="card-body">
						<div class="d-flex align-items-center mb-3">
							<div class="dash-icon bg-primary-subtle text-primary me-3">
								<i class="bi bi-person"></i>
							</div>
							<div>
								<h6 class="mb-0 fw-semibold">Pacientes</h6>
								<small class="text-muted">Gestión de pacientes</small>
							</div>
						</div>

						<div class="row text-start">
							<div class="col">
								<small class="text-muted">Activos</small>
								<div class="fw-bold fs-5">156</div>
							</div>
							<div class="col">
								<small class="text-muted">Nuevos hoy</small>
								<div class="fw-bold fs-5 text-success">+3</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-4 d-flex">
				<div class="card dash-card h-100 w-100">
					<div class="card-body">
						<div class="d-flex align-items-center mb-3">
							<div class="dash-icon bg-info-subtle text-info me-3">
								<i class="bi bi-calendar"></i>
							</div>
							<div>
								<h6 class="mb-0 fw-semibold">Citas</h6>
								<small class="text-muted">Agendamiento</small>
							</div>
						</div>

						<div class="row">
							<div class="col">
								<small class="text-muted">Hoy</small>
								<div class="fw-bold fs-5">24</div>
							</div>
							<div class="col">
								<small class="text-muted">Pendientes</small>
								<div class="fw-bold fs-5 text-warning">12</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="col-md-4 d-flex">
				<div class="card dash-card h-100 w-100">
					<div class="card-body">
						<div class="d-flex align-items-center mb-3">
							<div class="dash-icon bg-success-subtle text-success me-3">
								<i class="bi bi-credit-card"></i>
							</div>
							<div>
								<h6 class="mb-0 fw-semibold">Caja</h6>
								<small class="text-muted">Pagos y cobros</small>
							</div>
						</div>

						<div class="row">
							<div class="col">
								<small class="text-muted">Ingresos hoy</small>
								<div class="fw-bold fs-5 text-success">S/ 2,450</div>
							</div>
							<div class="col">
								<small class="text-muted">Por cobrar</small>
								<div class="fw-bold fs-5 text-warning">S/ 850</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="row my-4">
			<div class="col-8">
				<input type="text" class="form-control" placeholder="Buscar por DNI, nombre o celular">
			</div>
			<div class="col d-flex gap-2">
				<button class="btn btn-outline-primary"><i class="bi bi-person-plus"></i> Nuevo paciente</button>
				<button class="btn btn-outline-success"><i class="bi bi-person-plus"></i> Nueva cita</button>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<div class="card shadow-sm border-0 rounded-4 p-4">
					<h5 class="fw-bold mb-4">Tipos de Atención</h5>
					<div style="height: 250px;">
						<Doughnut :data="chartData" :options="chartOptions" />
					</div>
				</div>
			</div>
			<div class="col">
				<div class="card shadow-sm border-0 rounded-4 p-4">
					<h5 class="fw-bold mb-4">Tipos de Atención</h5>
					<div style="height: 250px;">
						<Bar :data="chartDataLinear" :options="chartOptionsLinear" />
					</div>
				</div>
			</div>
		</div>

		<div class="d-flex justify-content-between px-5">
			<h5>Listado de pacientes</h5>
			<a class="text-decoration-none" href="#">Ver todos <i class="bi bi-arrow-right"></i></a>
		</div>

		<div class="card">
			<div class="card-body">
				<div class="table-responsive">
					<table class="table align-middle mb-0 table-hover">
						<thead class="text-muted small text-uppercase">
							<tr>
								<th>Paciente</th>
								<th>Estado</th>
								<th>Próxima cita</th>
								<th>Deuda</th>
								<th>Última visita</th>
								<th class="text-center">Acciones</th>
							</tr>
						</thead>
						<tbody>

							<!-- Paciente 1 -->
							<tr>
								<td>
									<div class="d-flex align-items-center gap-3">
										<div class="avatar bg-primary-subtle text-primary">
											AG
										</div>
										<router-link class="text-decoration-none" cla to="paciente/1">
											<div class="fw-semibold">Ana García López</div>
											<small class="text-muted">34 años · Femenino</small>
										</router-link>
									</div>
								</td>

								<td>
									<span class="badge rounded-pill bg-success-subtle text-success border border-success fw-normal">
										<i class="bi bi-heart me-1"></i> Activo
									</span>
								</td>

								<td title="Hoy">
									<i class="bi bi-calendar text-primary me-2"></i>
									10:30 a.m.
								</td>

								<td class="text-muted">
									S/ 0.00
								</td>

								<td class="text-muted">
									15 Ene 2026
								</td>

								<td class="d-flex justify-content-end gap-2">
									<router-link to="/paciente/1" class="btn btn-outline-secondary border-0"><i
											class="bi bi-eye"></i></router-link>
									<router-link to="/paciente/1" class="btn btn-outline-secondary border-0"><i
											class="bi bi-chat-left-text"></i></router-link>
									<div class="dropdown">
										<button class="btn btn-outline-secondary border-0 dropdown-toggle" data-bs-toggle="dropdown" ><i
												class="bi bi-three-dots-vertical"></i></button>
										<ul class="dropdown-menu">
											<li><router-link to="paciente/1" class="dropdown-item"><i class="bi bi-eye"></i> Ver perfil</router-link></li>
											<li><a class="dropdown-item" href="#"><i class="bi bi-calendar"></i> Agendar cita</a></li>
											<li><a class="dropdown-item" href="#"><i class="bi bi-telephone"></i> Llamar</a></li>
											<li><a class="dropdown-item" href="#"><i class="bi bi-whatsapp"></i> Whatsapp</a></li>
										</ul>
									</div>
								</td>
							</tr>

							<!-- Paciente 2 -->
							<tr>
								<td>
									<div class="d-flex align-items-center gap-3">
										<div class="avatar bg-primary-subtle text-primary">
											CM
										</div>
										<router-link class="text-decoration-none" to="paciente/1">
											<div class="fw-semibold">Carlos Mendoza Ruiz</div>
											<small class="text-muted">45 años · Masculino</small>
										</router-link>
									</div>
								</td>

								<td>
									<span class="badge rounded-pill bg-danger-subtle text-danger border border-danger fw-normal">
										<i class="bi bi-exclamation-triangle me-1"></i> SOS
									</span>
								</td>

								<td title="Hoy">
									<i class="bi bi-calendar text-primary me-2"></i>
									11:00 a.m.
								</td>

								<td class="text-warning fw-semibold">
									S/ 150.00
								</td>

								<td class="text-muted">
									28 Ene 2026
								</td>

								<td class="d-flex justify-content-end gap-2">
									<router-link to="/paciente/1" class="btn btn-outline-secondary border-0"><i
											class="bi bi-eye"></i></router-link>
									<router-link to="/paciente/1" class="btn btn-outline-secondary border-0"><i
											class="bi bi-chat-left-text"></i></router-link>
									<div class="dropdown">
										<button class="btn btn-outline-secondary border-0 dropdown-toggle" data-bs-toggle="dropdown" ><i
												class="bi bi-three-dots-vertical"></i></button>
										<ul class="dropdown-menu">
											<li><router-link to="paciente/1" class="dropdown-item"><i class="bi bi-eye"></i> Ver perfil</router-link></li>
											<li><a class="dropdown-item" href="#"><i class="bi bi-calendar"></i> Agendar cita</a></li>
											<li><a class="dropdown-item" href="#"><i class="bi bi-telephone"></i> Llamar</a></li>
											<li><a class="dropdown-item" href="#"><i class="bi bi-whatsapp"></i> Whatsapp</a></li>
										</ul>
									</div>
								</td>
							</tr>

						</tbody>
					</table>
				</div>
			</div>
		</div>

	</div>
</template>

<script setup>
import { Doughnut, Bar } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(ArcElement, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
const chartData = {
	labels: ['Psicológica', 'Psiquiátrica', 'Talleres', 'Paquetes'],
	datasets: [{
		backgroundColor: ['#0d6efd', '#fd7e14', '#198754', '#8e44ad'],
		data: [40, 20, 15, 10],
		borderWidth: 2,
		borderRadius: 5, // Esto le da el toque redondeado a los segmentos
		spacing: 5      // Esto crea la separación entre los trozos
	}]
}
const chartDataLinear = {
	labels: ['Confirmadas', 'Pendientes', 'Canceladas', 'Reprogramadas'],
	datasets: [
		{
			data: [95, 45, 15, 25], // Valores de ejemplo según tu imagen
			backgroundColor: [
				'#2ecc71', // Verde
				'#f39c12', // Naranja/Amarillo
				'#e74c3c', // Rojo
				'#3498db'  // Azul
			],
			borderRadius: 5, // Bordes redondeados
			borderSkipped: false,
			barThickness: 25, // Grosor de las barras
		}
	]
}

const chartOptions = {
	responsive: true,
	maintainAspectRatio: false,
	cutout: '70%', // Esto controla el grosor de la dona
	plugins: {
		legend: {
			position: 'bottom',
			labels: {
				usePointStyle: true, // Bolitas en lugar de cuadrados
				padding: 20
			}
		}
	}
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
				font: { size: 14 }
			},

			afterFit: function (scale) {
				scale.paddingTop = 10;    // Reduce espacio arriba de cada barra
				scale.paddingBottom = 50; // Reduce espacio abajo de cada barra
			}
		}
	}
}
</script>

<style scoped>
.badge {
	font-size: 0.9em;
}
/* Elimina la flecha del dropdown-toggle */
.dropdown-toggle::after {
    display: none !important;
}

/* O si prefieres ser más específico */
.btn.dropdown-toggle::after {
    display: none !important;
}
</style>