<template>
	<h5 class="fw-bold mb-2 d-flex align-items-center"><span class="me-2 text-primary"><i
				class="bi bi-clipboard-check"></i> </span>Triajes (Pre-citas)</h5>

	<div class="card my-3 border-primary">
		<div class="card-header border-0 d-flex align-items-center ">
			<div class="bg-light rounded-circle d-flex align-items-center justify-content-center text-info"
				style="width:48px;height:48px;"> <i class="bi bi-thermometer"></i> </div>
			<div class="ps-3 pt-3">
				<h5 class="mb-0 fw-medium">Triaje Psiquiátrico</h5>
				<small class="text-muted">
					02 Feb 2026 · 10:45 AM · Lic. Rosa Campos
				</small>
			</div>
		</div>
		<div class="card-body">
			<div class="row row-cols-3">
				<div class="col">
					<p class="text-uppercase text-muted fw-bold">Signos Vitales</p>
					<p><span class="text-muted">PA: </span> <span class="badge rounded-pill bg-primary-subtle text-primary fw-semibold">130/85</span></p>
					<p><span class="text-muted">FC: </span> <span class="badge rounded-pill bg-primary-subtle text-primary fw-semibold">78 bpm</span></p>
					<p><span class="text-muted">Peso: </span> <span class="badge rounded-pill bg-primary-subtle text-primary fw-semibold">89 kg</span></p>
				</div>
				<div class="col">
					<p class="text-uppercase text-muted fw-bold">Estado Emocional</p>
					<p><span class="text-muted">Ánimo: </span> Estable</p>
					<p><span class="text-muted">Ansiedad: </span> Leve</p>
					<p><span class="text-muted">Sueño: </span> 6 horas</p>
				</div>
				<div class="col">
					<p class="text-uppercase text-muted fw-bold">Funciones</p>
					<p><span class="text-muted">Sueño: </span> Mala - despierta varias veces</p>
					<p><span class="text-muted">Apetito: </span> Disminuido</p>
				</div>
			</div>
			<p><span class="text-muted">Motivo: </span> Control mensual psiquiátrico</p>
			<p><span class="text-primary fw-medium">Observaciones:</span>  <span class="text-muted"> Paciente refiere preocupaciones laborales crecientes. Se nota inquieto en sala de espera.</span></p>
		</div>
	</div>

	<div class="card my-3 border-danger" id="triajePsiquiatrico">
		<div class="card-header border-0 d-flex align-items-center ">
			<div class="bg-light rounded-circle d-flex align-items-center justify-content-center text-danger"
				style="width:48px;height:48px;"> <i class="fa-solid fa-brain"></i> </div>
			<div class="ps-3 pt-3">
				<h5 class="mb-0 fw-medium">Triaje Psiquiátrico</h5>
				<small class="text-muted">
					02 Feb 2026 · 10:45 AM · Lic. Rosa Campos
				</small>
			</div>
		</div>
		<div class="card-body">
			<div class="row row-cols-3">
				<div class="col">
					<p class="text-uppercase text-muted fw-bold">Estado Emocional</p>
					<p><span class="text-muted">Ánimo: </span> Desesperado, triste</p>
					<p><span class="text-muted">Ansiedad: </span> <span class="badge rounded-pill bg-danger-subtle text-danger fw-semibold">8/10</span></p>
					<p><span class="text-muted">Sueño: </span> <span class="badge rounded-pill bg-danger-subtle text-danger fw-semibold">6/10</span></p>
				</div>
				<div class="col">
					<p class="text-uppercase text-muted fw-bold">Funciones</p>
					<p><span class="text-muted">Sueño: </span> Mala - despierta varias veces</p>
					<p><span class="text-muted">Apetito: </span> Disminuido</p>
				</div>
			</div>
			<p><span class="text-muted">Motivo: </span> Control mensual psiquiátrico</p>
			<p><span class="text-danger fw-medium">Observaciones:</span> <span class="text-muted">Paciente refiere preocupaciones laborales crecientes. Se nota inquieto en sala de espera.</span></p>
		</div>
	</div>

	<div class="card my-3 border-success" id="triajePsiquiatrico">
		<div class="card-header border-0 d-flex align-items-center ">
			<div class="bg-light rounded-circle d-flex align-items-center justify-content-center text-success"
				style="width:48px;height:48px;"> <i class="fa-solid fa-shield-heart"></i> </div>
			<div class="ps-3 pt-3">
				<h5 class="mb-0 fw-medium">Plan de Seguridad - Carlos Mendoza Ruiz</h5>
				<small class="text-muted">
					Creado: 15 Ene 2026 · Actualizado: 20 Ene 2026 · Dra. Ana Rojas
				</small>
			</div>
		</div>
		<div class="card-body">
			<div class="row row-cols-3">
				<div class="col">
					<p class="text-uppercase text-muted fw-bold"><small><span class="text-warning"><i class="bi bi-exclamation-diamond"></i></span> Señales de Advertencia</small></p>
					<ul>
						<li><small>Aislamiento social</small></li>
						<li><small>Pensamientos recurrentes de fracaso</small></li>
						<li><small>Insomnio persistente por más de 2 noches</small></li>
					</ul>
				</div>
				<div class="col">
					<p class="text-uppercase text-muted fw-bold"><small><span class="text-primary"><i class="bi bi-sticky"></i></span> Estrategias de Afrontamiento</small></p>
					<ul>
						<li>Técnica de respiración 4-7-8</li>
						<li>Salir a caminar 30 minutos</li>
						<li>Escuchar playlist de relajación</li>
					</ul>
				</div>
				<div class="col">
					<p class="text-uppercase text-muted fw-bold"><small><span class="text-success"><i class="bi bi-emoji-smile"></i></span> Razones para Vivir</small></p>
					<ul>
						<li>Mis hijos: Sofía (12) y Diego (8)</li>
						<li>Mi esposa María</li>
						<li>Mi proyecto de vivienda propia</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style scope>

</style>