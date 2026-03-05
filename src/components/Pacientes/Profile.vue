<template>
	<div class="d-flex justify-content-between fw-medium">
		<h6>Datos personales</h6>
		<button class="btn btn-outline-dark border-0"><i class="bi bi-pencil"></i> Editar datos</button>
	</div>
	<div class="row row-cols-2">
		<div class="col">
			<div class="card mb-3">
				<div class="card-body">
					<h6 class="fw-bold mb-4 d-flex align-items-center">
						<i class="bi bi-person text-primary me-2"></i>
						Información Básica
					</h6>

					<div class="mb-3">
						<small class="text-muted d-block">Nombre Completo</small>
						<div class="fw-medium">Carlos Mendoza Ruiz</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">DNI</small>
						<div class="fw-medium">45678912</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Edad</small>
						<div class="fw-medium">45 años</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Género</small>
						<div class="fw-medium">Masculino</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Estado Civil</small>
						<div class="fw-medium">Casado</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Ocupación</small>
						<div class="fw-medium">Ingeniero de Sistemas</div>
					</div>

					<div>
						<small class="text-muted d-block">Grado de Instrucción</small>
						<div class="fw-medium">Superior Universitaria</div>
					</div>

				</div>
			</div>
			<div class="card mb-3">
				<div class="card-body">
					<h6 class="fw-bold mb-4 d-flex align-items-center">
						<i class="bi bi-exclamation-diamond text-warning me-2"></i>
						Contacto de Emergencia
					</h6>

					<div class="mb-3">
						<small class="text-muted d-block">Nombre</small>
						<div class="fw-medium">María Mendoza</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Teléfono</small>
						<div class="fw-medium">999 888 777</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Relación</small>
						<div class="fw-medium">Esposa</div>
					</div>

				</div>
			</div>
			<div class="card mb-3">
				<div class="card-body">
					<h6 class="fw-bold mb-4 d-flex align-items-center">
						<i class="bi bi-buildings text-primary me-2"></i>
						Convenios (EPS / Aseguradoras)
					</h6>

					<div class="mb-3">
						<small class="text-muted d-block">Empresa</small>
						<div class="fw-medium">Tech Solutions S.A.C.</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Aseguradora</small>
						<div class="fw-medium">Rimac Seguros</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Tipo</small>
						<div class="fw-medium">EPS Corporativo</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Descuento</small>
						<div class="fw-medium">20%</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Vigencia</small>
						<div class="fw-medium">01 Ene 2025 - 31 Dic 2025</div>
					</div>

				</div>
			</div>
		</div>

		<div class="col">
			<div class="card my-3">
				<div class="card-body">
					<!-- Título -->
					<h6 class="fw-bold mb-4 d-flex align-items-center">
						<i class="bi bi-telephone text-primary me-2"></i>
						Información de Contacto
					</h6>

					<!-- Teléfono -->
					<div class="d-flex align-items-start mb-3">
						<i class="bi bi-telephone text-secondary me-3 mt-1"></i>
						<div>
							<small class="text-muted d-block">Teléfono</small>
							<div class="fw-medium">+51 987 654 321</div>
						</div>
					</div>

					<!-- Email -->
					<div class="d-flex align-items-start mb-3">
						<i class="bi bi-envelope text-secondary me-3 mt-1"></i>
						<div>
							<small class="text-muted d-block">Email</small>
							<div class="fw-medium">carlos.mendoza@email.com</div>
						</div>
					</div>

					<!-- Dirección -->
					<div class="d-flex align-items-start">
						<i class="bi bi-geo-alt text-secondary me-3 mt-1"></i>
						<div>
							<small class="text-muted d-block">Dirección</small>
							<div class="fw-medium">Av. Arequipa 1234, Miraflores, Lima</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card mb-3">
				<div class="card-body">
					<h6 class="fw-bold mb-4 d-flex align-items-center">
						<i class="bi bi-calendar text-info me-2"></i>
						Información de Registro
					</h6>

					<div class="mb-3">
						<small class="text-muted d-block">Fecha de Registro</small>
						<div class="fw-medium">15 Mar 2024</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Última Visita</small>
						<div class="fw-medium">28 Ene 2026</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Total de Evoluciones</small>
						<div class="fw-medium">24 registros</div>
					</div>
				</div>
			</div>
			<div class="card mb-3">
				<div class="card-body">
					<h6 class="fw-bold mb-4 d-flex align-items-center">
						<i class="bi bi-buildings text-primary me-2"></i>
						Alianzas
					</h6>

					<div class="mb-3">
						<small class="text-muted d-block">Empresa</small>
						<div class="fw-medium">Colegio de Ingenieros del Perú</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Aseguradora</small>
						<div class="fw-medium">N/A</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Tipo</small>
						<div class="fw-medium">EPS Corporativo</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Descuento</small>
						<div class="fw-medium">15%</div>
					</div>

					<div class="mb-3">
						<small class="text-muted d-block">Vigencia</small>
						<div class="fw-medium">01 Mar 2025 - 28 Feb 2026</div>
					</div>

				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col">
			<h6 class="fw-bold mb-4 d-flex align-items-center">
				<i class="bi bi-person text-primary me-2"></i>
				Etiquetas de Comportamiento
			</h6>

			<div class="d-flex flex-wrap gap-2">
				<span class="badge rounded-pill badge-soft badge-ansioso">Ansioso</span>
				<span class="badge rounded-pill badge-soft badge-cooperador">Cooperador</span>
				<span class="badge rounded-pill badge-soft badge-depresivo">Depresivo</span>
				<span class="badge rounded-pill badge-soft badge-impulsivo">Impulsivo</span>
				<span class="badge rounded-pill badge-soft badge-pasivo">Pasivo</span>
				<span class="badge rounded-pill badge-soft badge-resistente">Resistente</span>
				<span class="badge rounded-pill badge-soft badge-agresivo">Agresivo</span>
				<span class="badge rounded-pill badge-soft badge-manipulador">Manipulador</span>
				<span class="badge rounded-pill badge-soft badge-retraido">Retraído</span>
				<span class="badge rounded-pill badge-soft badge-motivado">Motivado</span>
				<button class="btn btn-outline-dark"><i class="bi bi-tag"></i> Editar etiquetas de comportamiento</button>
			</div>
		</div>
	</div>
</template>

<style scope>
.badge-soft {
	font-weight: 500;
	padding: 6px 12px;
	font-size: 0.9rem;
	border: 1px solid transparent;
}

.badge-ansioso {
	color: #0d6efd;
	background-color: #cfe2ff;
	border-color: #9ec5fe;
}

.badge-cooperador {
	color: #198754;
	background-color: #d1e7dd;
	border-color: #a3cfbb;
}

.badge-depresivo {
	color: #6f42c1;
	background-color: #e2d9f3;
	border-color: #cbbbe9;
}

.badge-impulsivo {
	color: #fd7e14;
	background-color: #ffe5d0;
	border-color: #ffcfad;
}

.badge-pasivo {
	color: #6c757d;
	background-color: #e2e3e5;
	border-color: #d3d6d8;
}

.badge-resistente {
	color: #ff8800;
	background-color: #fff3cd;
	border-color: #ffe69c;
}

.badge-agresivo {
	color: #dc3545;
	background-color: #f8d7da;
	border-color: #f1aeb5;
}

.badge-manipulador {
	color: #ff9900;
	background-color: #ffe8cc;
	border-color: #ffd8a8;
}

.badge-retraido {
	color: #6c757d;
	background-color: #e9ecef;
	border-color: #ced4da;
}

.badge-motivado {
	color: #198754;
	background-color: #d1e7dd;
	border-color: #a3cfbb;
}
</style>