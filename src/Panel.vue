<template>
	<div class="container-fluid">
		<div class="row">
			<div class="col-md-3 col-lg-3 p-0" id="menu" :class="{ 'oculto': oculto }">
				<div class="px-3">
					<img v-if="!oculto" src="@/assets/logo_largo_blanco.webp" class="img-fluid my-4" id="logo">
					<img v-else src="@/assets/logo_cuadrado_corto_blanco.png" class="img-fluid my-4 " style="width:100%" id="logo2">
				</div>

				<div class="text-center px-3">
					<p class="fw-bold" id="tituloWeb">PORTAL DE RECEPCIÓN</p>
				</div>

				<div class="d-flex justify-content-end mb-3" @click="ocultarMenu()">
					<img v-if="!oculto" src="@/assets/ocultar_izquierda.png">
					<img v-else src="@/assets/ocultar_derecha.png">
				</div>

				<div id="menuItems" class="px-2">

					<ul class="list-group">
						<router-link to="/dashboard">
							<li class="list-group-item d-flex align-items-center" title="Dashboard">
								<span class="icono"><i class="bi bi-cloud"></i></span> <span class="texto">Dashboard</span>
							</li>
						</router-link>
						<router-link to="/calendario">
							<li class="list-group-item d-flex align-items-center" title="Calendario de citas">
								<span class="icono"><i class="bi bi-calendar2-week"></i> </span> <span class="texto">Calendario de
									citas</span>
							</li>
						</router-link>
						<router-link to="/pacientes">
							<li class="list-group-item d-flex align-items-center" title="Pacientes">
								<span class="icono"><i class="bi bi-person"></i> </span> <span class="texto">Pacientes</span>
							</li>
						</router-link>
						<li class="list-group-item d-flex align-items-center" title="Cartera de clientes">
							<span class="icono"><i class="bi bi-duffle"></i> </span> <span class="texto">Cartera de clientes</span>
						</li>
						<li class="list-group-item d-flex align-items-center" title="Reportes">
							<span class="icono"><i class="bi bi-megaphone"></i> </span> <span class="texto">Reportes</span>
						</li>
						<li class="list-group-item d-flex align-items-center" title="S.O.S.">
							<span class="icono"><i class="bi bi-exclamation-lg"></i> </span> <span class="texto">S.O.S.</span>
						</li>

					</ul>

				</div>

			</div>
			<div class="col-md-9 col-lg-9 px-0" :class="{ 'extendido': oculto }" id="panelIzquierdo">
				<nav class="navbar bg-body-tertiary border-bottom mb-2 shadow-sm">
					<div class="container-fluid">
						<div class=" d-flex flex-column">
							<a class="navbar-brand" href="#">Dashboard de citas</a>
							<small>Hoy, {{ fecha }}</small>
						</div>
						<d-flex class="d-flex flex-column">
							<div class="d-flex align-items-center">
								<i class="bi bi-person-circle me-2"></i>
								<span>Usuario: <span class="fw-medium">Sandra</span></span>
							</div>
							<div class="d-flex align-items-center">
								<i class="bi bi-house me-2"></i>
								<span>Sede: <span class="fw-medium">San Carlos</span></span>
							</div>

						</d-flex>
					</div>

				</nav>
					<RouterView class="px-3 py-2" />

			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()

const oculto = ref(true)
const fecha = ref(null)

function ocultarMenu() {
	oculto.value = !oculto.value
}

onMounted(() => {
	fecha.value = proxy.$date().format('dddd, D [de] MMMM [de] YYYY')
})

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');

#menu {
	background: linear-gradient(#1cc89a, #0069ac);
	min-height: 100vh;
	color: white;
	transition: width 0.5s ease-in-out;

}

#tituloWeb {
	font-size: 1.1rem;
}

#menu ul {
	background-color: transparent;
}

#menu li, #menu a {
	background-color: transparent;
	color: white;
	border: none;
	/* padding: 1rem 1.6rem; */
	cursor: pointer;
	text-decoration: none;
}

#logo2 {
	max-width: 68px;
}

.icono i {
	font-size: 1.7rem;
	margin-right: 20px;
}

.activo, .router-link-active {
	border: 3px solid #ccc !important;
	border-radius: 10px;
	background-color: #12887c !important;
	font-weight: bold;
}

.oculto .texto {
	display: none;
}

.oculto {
	width: 80px;
}

.oculto #tituloWeb {
	display: none;
}
.extendido{
	width: calc(100vw - 80px);
}

#panelIzquierdo {
	background-color: #F5F7F9;
	font-family: 'Figtree', sans-serif;
}
</style>