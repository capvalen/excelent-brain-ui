<template>
	<h5 class="fw-bold mb-2 d-flex align-items-center"><span class="me-2 text-primary"><i
				class="bi bi-clipboard-check"></i> </span>Recetas & Órdenes</h5>

	<ul class="nav nav-pills">
		<li class="nav-item">
			<a class="nav-link active" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" href="#"><i
					class="fa-solid fa-angle-right"></i> Recetas Médicas</a>
		</li>
		<li class="nav-item">
			<a class="nav-link" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" href="#"><i
					class="fa-solid fa-angle-right"></i> Órdenes Médicas</a>
		</li>
	</ul>
	<div class="tab-content" id="myTabContent">
		<div class="tab-pane fade p-3 show active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
			<div class="row row-cols-3">
				<div class="col" v-for="general in generales">
					<CardBarraPruebasGeneral :datos="general"></CardBarraPruebasGeneral>
				</div>
			</div>
		</div>
		<div class="tab-pane fade p-3" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...2
		</div>
	</div>
	<h6 class="fw-bold">Historial de Pruebas Aplicadas</h6>


</template>

<script setup>
import { ref } from 'vue'
import CardBarraPruebasGeneral from './plugins/CardBarraPruebasGeneral.vue'
const generales = ref([
	{
		"tipo": "ansiedad",
		"titulo": "ansiedad (BAI)",
		"avance": 64
	},
	{
		"tipo": "depresion",
		"titulo": "depresión (BDI-II)",
		"avance": 55
	},
	{
		"tipo": "riesgo",
		"titulo": "riesgo suicida",
		"avance": 32
	},
	{
		"tipo": "controlador",
		"titulo": "controlador",
		"avance": 62
	},
	{
		"tipo": "pasional",
		"titulo": "pasional",
		"avance": 22
	}
])

const historial = ref([

	{
		fecha: '28 ene 2026',
		siglas: 'BAI',
		doctor: 'Dra Ana Rojas',
		titulo: 'Inventario de Ansiedad de Bek (BAI)',
		enfermedad: 'Ansiedad Total',
		nota: 34,
		total: 63,
		comentario: 'alto',
		diagnostico: 'Ansiedad moderada a severa',
		interpretacion: 'El paciente presenta niveles de ansiedad moderados a severos, con predominio de síntomas somáticos como palpitaciones y tensión muscular. Se observa mejoría respecto a evaluación anterior',
		recomendaciones: 'Continuar con psicoterapia y tratamiento farmacológico. Reforzar técnicas de relajación.'
	},
	{
		fecha: '28 Ene 2026',
		siglas: 'BDI-II',
		doctor: 'Dra Ana Rojas',
		titulo: 'Inventario de Depresión de Beck (BDI-II)',
		enfermedad: 'Depresión Total',
		nota: 22,
		total: 63,
		comentario: 'Moderado',
		diagnostico: 'Depresión moderada',
		interpretacion: 'El paciente presenta síntomas depresivos moderados, principalmente relacionados con alteraciones del sueño, fatiga y dificultades de concentración.',
		recomendaciones: 'Monitorear evolución de síntomas depresivos. Considerar ajuste farmacológico si no hay mejoría.'
	},
	{
		fecha: '15 ene 2026',
		siglas: 'BSS',
		doctor: 'Dra Ana Rojas',
		titulo: 'Escala de Ideación Suicida de Beck',
		enfermedad: 'Riesgo Suicida',
		nota: 12,
		total: 38,
		comentario: 'alto',
		diagnostico: 'Riesgo moderado',
		interpretacion: 'Se detecta ideación suicida pasiva sin plan estructurado. El paciente refiere pensamientos de \'querer desaparecer\' pero niega intención activa o planes.',
		recomendaciones: 'Activar protocolo SOS. Seguimiento intensivo. Notificar a familiar de contacto.'
	},
	{
		fecha: "14 mar 2024",
		siglas: "BAI",
		doctor: "Dra Ana Rojas",
		titulo: "Inventario de Ansiedad de Beck (BAI)",
		enfermedad: "Ansiedad Total",
		nota: 42,
		total: 63,
		comentario: "Severo",
		diagnostico: "Ansiedad severa",
		interpretacion: "Evaluación inicial. El paciente presenta ansiedad severa con síntomas somáticos prominentes. Alta interferencia en funcionamiento diario.",
		recomendaciones: "Iniciar psicoterapia TCC. Considerar interconsulta psiquiátrica."
	},
	{
		fecha: "15 ene 2024",
		siglas: "BDI-II",
		doctor: "dra. ana rojas",
		titulo: "Inventario de Depresión de Beck (BDI-II)",
		enfermedad: "Depresión Total",
		total: "18/63",
		comentario: "moderado",
		diagnostico: "Depresión leve a moderada",
		interpretacion: "Evaluación inicial. Síntomas depresivos leves a moderados, posiblemente reactivos al cuadro ansioso.",
		recomendaciones: "Monitorear durante tratamiento. No amerita intervención específica por ahora."
	}
])
</script>