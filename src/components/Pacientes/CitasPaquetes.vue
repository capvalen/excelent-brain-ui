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
							<h5 class="fw-semibold mb-1">Paquete Psicológico Premium</h5>
							<small class="text-muted">Vence: 15 Mar 2026</small>
						</div>
						<span class="badge rounded-pill bg-success-subtle text-success fw-normal px-3">
							Activo
						</span>
					</div>
					<CardBarraPaquetes :usadas="2" :total="10"></CardBarraPaquetes>
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card shadow-sm border-primary-subtle rounded-4">
				<div class="card-body">
					<div class="d-flex justify-content-between align-items-start mb-2">
						<div>
							<h5 class="fw-semibold mb-1">Paquete Psicológico Básico</h5>
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
</template>
<script setup>
import CardBarraPaquetes from './CardBarraPaquetes.vue';
</script>
