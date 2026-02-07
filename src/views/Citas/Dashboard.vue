<template>
	<div class="container-fluid">
		<h1>Dashboard</h1>
		<div class="my-4">
			<div class="row g-3">
				<div class="col-md-3 d-flex">
					<div class="card stat-card borde-primary h-100 w-100">
						<div class="card-body d-flex justify-content-between align-items-center">
							<div>
								<small class="text-muted">Pacientes Activos</small>
								<h4 class="fw-bold mb-0">156
								</h4>
							</div>
							<div class="icon bg-primary-subtle text-primary">
								<i class="bi bi-people"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 d-flex">
					<div class="card stat-card borde-secondary h-100 w-100">
						<div class="card-body d-flex justify-content-between align-items-center">
							<div>
								<small class="text-muted">Citas de Hoy</small>
								<h4 class="fw-bold mb-0">24</h4>
								<small class="text-muted">8 completadas</small>
							</div>
							<div class="icon bg-secondary-subtle text-secondary">
								<i class="bi bi-calendar-check"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 d-flex">
					<div class="card stat-card borde-success h-100 w-100">
						<div class="card-body d-flex justify-content-between align-items-center">
							<div>
								<small class="text-muted">Ingresos del Día</small>
								<h4 class="fw-bold mb-0">S/ 2,450
								</h4>
							</div>
							<div class="icon bg-success-subtle text-success">
								<i class="bi bi-currency-dollar"></i>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-3 d-flex">
					<div class="card stat-card borde-danger h-100 w-100">
						<div class="card-body d-flex justify-content-between align-items-center">
							<div>
								<small class="text-muted">Alertas Activas</small>
								<h4 class="fw-bold mb-0">5</h4>
								<small class="text-muted">3 SOS, 2 deudas</small>
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
		</div>
		<div class="row">
			<div class="col">
				<div class="card dash-card shadow-sm">
					<div class="card-body">
						<h5><span class="text-primary"><i class="bi bi-clock"></i></span> Proximas citas</h5>

						<div class="appointment-list px-2">

							<div class="appointment-item p-2 my-2 d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-start gap-3">
									<div class="time text-primary fw-semibold">11:00 a.m.</div>
									<div>
										<router-link to="/paciente/2" class="text-decoration-none">
											<div class="fw-semibold">Carlos Mendoza</div>
										</router-link>
										<small class="text-muted">Psiquiátrica · Dr. Luis Paredes</small>
									</div>
								</div>
								<div class="d-flex gap-1">
									<span class="badge text-bg-secondary">Sin confirmar</span>
									<span class="badge text-bg-primary">Pagado</span>
								</div>
							</div>

							<div class="appointment-item p-2 my-2 d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-start gap-3">
									<div class="time text-primary fw-semibold">11:30 a.m.</div>
									<div>
										<router-link to="/paciente/2" class="text-decoration-none">
											<div class="fw-semibold">Ana García</div>
										</router-link>
										<small class="text-muted">Psicológica · Dra. Ana Rojas</small>
									</div>
								</div>
								<div class="d-flex gap-1">
									<span class="badge text-bg-primary">Confirmar</span>
									<span class="badge text-bg-secondary">Sin pago</span>
								</div>
							</div>

							<div class="appointment-item p-2 my-2 d-flex align-items-center justify-content-between">
								<div class="d-flex align-items-start gap-3">
									<div class="time text-primary fw-semibold">12:00 p.m.</div>
									<div>
										<router-link to="/paciente/2" class="text-decoration-none">
											<div class="fw-semibold">María Torres</div>
										</router-link>
										<small class="text-muted">Nutricional · Lic. Carmen Díaz</small>
									</div>
								</div>
								<div class="d-flex gap-1">
									<span class="badge text-bg-primary">Sin confirmar</span>
									<span class="badge text-bg-warning">Adelantado</span>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="col">
				<div class="card dash-card shadow-sm">
					<div class="card-body">
						<h5><span class="text-danger"><i class="bi bi-exclamation-triangle"></i></span> Alertas activas</h5>

						<div class="alert-list px-2">
							<div class="alert alert-danger">
								<div class="d-flex justify-content-between">
									<span class="fw-bold">S.O.S.</span>
									<span>Carlos Mendoza </span>
								</div>
								<p class="mb-0"><small>Riesgo suicida moderado - Seguimiento activo</small></p>
							</div>
							<div class="alert alert-danger">
								<div class="d-flex justify-content-between">
									<span class="fw-bold">S.O.S.</span>
									<span>Laura Díaz</span>
								</div>
								<p class="mb-0"><small>Crisis de ansiedad reciente</small></p>
							</div>
							<div class="alert alert-warning">
								<div class="d-flex justify-content-between">
									<span class="fw-bold">DEUDA</span>
									<span>María Torres </span>
								</div>
								<p class="mb-0"><small>Deuda pendiente: S/ 450</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<style scoped>
#segundoCombo .dash-icon {
	width: 46px;
	height: 46px;
	border-radius: 12px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.3rem;
}

.appointment-item {
	border-radius: 10px;
}

.appointment-item:hover {
	background-color: #e0dfdf;
	transition: all 0.5s ease-in-out;
}

.alert {
	font-size: 0.95rem;
}

.alert-warning {
	background-color: #FDF5E8;
	color: #f59f0a;
}
</style>