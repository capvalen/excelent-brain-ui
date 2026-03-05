<template>
	<h6 class="fw-bold mb-4 d-flex align-items-center">
		<i class="bi bi-box text-primary me-2"></i>
		Paquetes Contratados
	</h6>
	<div class="row row-cols-2">
		<div class="col">
			<div class="card shadow-sm border-primary-subtle rounded-4">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-start mb-2">
						<div>
							<h5 class="fw-medium mb-1">Paquete Psicológico Premium</h5>
							<small class="text-muted">Vence: 15 Mar 2026</small>
						</div>
						<span class="badge rounded-pill bg-success-subtle text-success fw-normal px-3">
							Activo
						</span>
					</div>
					<CardBarraPaquetes :usadas="2" :total="10" :vencidas="1"></CardBarraPaquetes>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card shadow-sm border-primary-subtle rounded-4">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-start mb-2">
						<div>
							<h5 class="fw-medium mb-1">Paquete Psicológico Básico</h5>
							<small class="text-muted">Vence: 10 Dic 2025</small>
						</div>
						<span class="badge rounded-pill bg-secondary-subtle text-dark fw-normal px-3">
							Vencido
						</span>
					</div>
					<CardBarraPaquetes :usadas="10" :total="10"></CardBarraPaquetes>
				</div>
			</div>
		</div>
	</div>
	<h6 class="fw-bold mb-4 d-flex align-items-center my-4">
		<i class="bi bi-box text-primary me-2"></i>
		Historial de citas
	</h6>
	<div class="card">
		<div class="card-body">
			<div class="table-responsive">
				<table class="table table-hover table-citas align-middle mb-0 ">
					<thead class="table-secondary">
						<tr>
							<th scope="col">Fecha</th>
							<th scope="col">Tipo</th>
							<th scope="col">Profesional</th>
							<th scope="col">Estado</th>
							<th scope="col">Notas</th>
						</tr>
					</thead>
					<tbody>
						<!-- 02 Feb 2026 - Confirmada -->
						<tr>
							<td>
								<span class="fw-medium">02 Feb 2026</span><br>
								<span class="text-secondary small">11:00 AM</span>
							</td>
							<td>
								<span class="badge bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-pill">
									Psiquiátrica
								</span>
							</td>
							<td>
								<i class="bi bi-person-badge me-1 text-secondary"></i>Dr. Luis Paredes
							</td>
							<td>
								<span class="text-primary px-3 py-2 rounded-pill fw-normal">
									<i class="bi bi-check-circle-fill me-1"></i> Confirmada
								</span>
							</td>
							<td>Control mensual</td>
						</tr>
						<!-- 28 Ene 2026 - Completada -->
						<tr>
							<td>
								<span class="fw-medium">28 Ene 2026</span><br>
								<span class="text-secondary small">10:00 AM</span>
							</td>
							<td>
								<span class="badge bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-pill">
									Psiquiátrica
								</span>
							</td>
							<td>
								<i class="bi bi-person-badge me-1 text-secondary"></i>Dr. Luis Paredes
							</td>
							<td>
								<span class="text-success px-3 py-2 rounded-pill fw-normal">
									<i class="bi bi-check2-all me-1"></i> Completada
								</span>
							</td>
							<td>Ajuste de medicación</td>
						</tr>
						<!-- 15 Ene 2026 - Completada -->
						<tr>
							<td>
								<span class="fw-medium">15 Ene 2026</span><br>
								<span class="text-secondary small">3:00 PM</span>
							</td>
							<td>
								<span class="badge bg-success bg-opacity-10 text-success px-2 py-1 rounded-pill">
									Psicológica
								</span>
							</td>
							<td>
								<i class="bi bi-person-badge me-1 text-secondary"></i>Dra. Ana Rojas
							</td>
							<td>
								<span class="text-success px-3 py-2 rounded-pill fw-normal">
									<i class="bi bi-check2-all me-1"></i> Completada
								</span>
							</td>
							<td>Sesión de crisis</td>
						</tr>
						<!-- 10 Ene 2026 - Completada -->
						<tr>
							<td>
								<span class="fw-medium">10 Ene 2026</span><br>
								<span class="text-secondary small">11:00 AM</span>
							</td>
							<td>
								<span class="badge bg-success bg-opacity-10 text-success px-2 py-1 rounded-pill">
									Psicológica
								</span>
							</td>
							<td>
								<i class="bi bi-person-badge me-1 text-secondary"></i>Dra. Ana Rojas
							</td>
							<td>
								<span class="text-success px-3 py-2 rounded-pill fw-normal">
									<i class="bi bi-check2-all me-1"></i> Completada
								</span>
							</td>
							<td>Terapia cognitivo-conductual - Sesión 8</td>
						</tr>
						<!-- 05 Ene 2026 - Cancelada -->
						<tr>
							<td>
								<span class="fw-medium">05 Ene 2026</span><br>
								<span class="text-secondary small">10:00 AM</span>
							</td>
							<td>
								<span class="badge bg-success bg-opacity-10 text-success px-2 py-1 rounded-pill">
									Psicológica
								</span>
							</td>
							<td>
								<i class="bi bi-person-badge me-1 text-secondary"></i>Dra. Ana Rojas
							</td>
							<td>
								<span class="text-danger px-3 py-2 rounded-pill fw-normal">
									<i class="bi bi-x-circle-fill me-1"></i> Cancelada
								</span>
							</td>
							<td>Paciente no asistido</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>
<script setup>
import CardBarraPaquetes from './plugins/CardBarraPaquetes.vue';
</script>
