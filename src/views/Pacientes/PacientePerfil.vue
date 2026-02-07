<template>
	<div class="container-fluid">
		<nav style="--bs-breadcrumb-divider: '\F234';" aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item"><router-link class="text-decoration-none" to="/dashboard"><i class="bi bi-cloud"></i>
						Dashboard</router-link></li>
				<li class="breadcrumb-item"><router-link class="text-decoration-none" to="/pacientes"><i class="bi bi-person"></i>
						Pacientes</router-link></li>
				<li class="breadcrumb-item active" aria-current="page"><i class="bi bi-file-person"></i> Perfil del paciente</li>
			</ol>
		</nav>
	</div>
	<div class="container-fluid">

		<div class="card dash-card shadow-sm border-0 rounded-4 p-3">
			<div class="d-flex flex-wrap align-items-center justify-content-between">

				<div class="d-flex align-items-center flex-grow-1 mb-3 mb-lg-0">
					<div
						class="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center text-primary fw-bold"
						style="width: 70px; height: 70px; font-size: 1.5rem; border: 4px solid #f8f9fa;">
						CM
					</div>

					<div class="ms-3">
						<div class="d-flex align-items-center mb-1">
							<h4 class="mb-2 fw-bold me-2 text-dark" >Carlos Mendoza Ruiz</h4>
							<span class="badge rounded-pill border border-danger text-danger bg-danger bg-opacity-10 px-3 me-2 fw-normal">
								<i class="bi bi-exclamation-triangle me-1"></i> SOS
							</span>
							<span class="badge rounded-pill border border-info text-info bg-info bg-opacity-10 px-3 fw-normal">
								<i class="bi bi-building me-1"></i> Convenio
							</span>
						</div>

						<div class="mb-2 d-flex gap-2">
							<span
								class="badge rounded-pill bg-info bg-opacity-10 text-info border border-info-subtle fw-normal">Ansioso</span>
							<span
								class="badge rounded-pill bg-success bg-opacity-10 text-success border border-success-subtle fw-normal">Cooperador</span>
							<span
								class="badge rounded-pill bg-morado bg-opacity-10 text-primary border border-primary-subtle fw-normal"
								>Depresivo</span>
						</div>

						<div class="text-secondary small">
							45 años · Masculino · DNI: 45678912
							<br>
							<span class="text-muted">24 evoluciones en historial</span>
						</div>
					</div>
				</div>

				<div class="d-flex flex-column gap-2 me-lg-4 mb-3 mb-lg-0">
					<div class="px-3 py-2 bg-primary bg-opacity-10 rounded-3 text-primary-emphasis d-flex align-items-center" title="Próxima cita">
						<i class="bi bi-calendar-event me-2"></i> Miércoles, 3 de Julio 11:00 a.m.
					</div>
					<div class="px-3 py-2 bg-warning bg-opacity-10 rounded-3 text-warning-emphasis d-flex align-items-center" title="Saldo a favor">
						<span class="me-2"><i class="bi bi-cash-coin"></i></span> S/ 150.00
					</div>
				</div>

				<div class="d-flex flex-column gap-2">
					<div class="d-flex gap-2">
						<button class="btn btn-primary rounded-3 px-3 d-flex align-items-center">
							<i class="bi bi-calendar me-2"></i> Agendar Cita
						</button>
						<button class="btn btn-light border rounded-3 px-3">
							<i class="bi bi-telephone"></i> Llamar
						</button>
						<button class="btn btn-light border rounded-3 px-3">
							<i class="bi bi-chat-dots"></i> WhatsApp
						</button>
					</div>
					<div>
						<button class="btn btn-light border rounded-3 text-start px-3">
							<i class="bi bi-currency-dollar me-2"></i> Ver Deuda
						</button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>
<style>
.bg-morado{
	--bs-bg-opacity: .1; color: #6f42c1 !important; border-color: #6f42c1 !important;
}
</style>