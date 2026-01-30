<template>
	<div class="container">
		<div class="row w-100 justify-content-center">
			<div class="col-12 col-lg-10 col-xl-8">
				<div class="card welcome-card">
					<div class="row g-0">
						<!-- Columna de Bienvenida -->
						<div class="col-md-6 welcome-section">
							<div class="text-center text-md-start">
								<img src="@/assets/logo_cuadrado_corto.png" alt="" class="img-responsive" id="logo">
								
								<h1 class="welcome-title">Bienvenido</h1>
								<p class="welcome-text">
									Nos alegra verte de nuevo. Inicia sesión para acceder a tu cuenta.<br>
									Recuerda que ésta sección es solo para personal de atención al público
								</p>
								<p class="welcome-text mt-4">
									<i class="bi bi-exclamation-circle"></i>
									¿Deseas iniciar como profesional de la salud? <a href="#" class="text-secondary text-decoration-none fw-bold">Puedes hacerlo desde aquí</a>
								</p>
							</div>
						</div>

						<!-- Columna de Login -->
						<div class="col-md-6 login-section">
							<div class="h-100 d-flex flex-column justify-content-center">
								<h2 class="login-title text-center">Iniciar Sesión</h2>

								<form id="loginForm">
									<div class="mb-3">
										<label for="email" class="form-label">Usuario</label>
										<div class="input-group">
											<span class="input-group-text"><i class="bi bi-person"></i></span>
											<input type="email" class="form-control" id="email" placeholder="" autocomplete="off" required>
										</div>
									</div>

									<div class="mb-4">
										<label for="password" class="form-label">Contraseña</label>
										<div class="input-group">
											<span class="input-group-text"><i class="bi bi-lock"></i></span>
											<input type="password" class="form-control" id="password" placeholder="" autocomplete="off"
												required>
											<button class="btn btn-outline-secondary" type="button" id="togglePassword">
												<i class="bi bi-eye"></i>
											</button>
										</div>
									</div>

									<div class="mb-3 form-check d-flex justify-content-between align-items-center">
										<a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
									</div>

									<div class="d-grid mb-4">
										<RouterLink to="/panel" type="submit" class="btn btn-login text-white">Iniciar sesión</RouterLink>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	

</template>
<style scope>
body {
	background: linear-gradient(135deg, #5750EA 0%, #AF57EB 100%);
	min-height: 100vh;
	display: flex;
	align-items: center;
	padding: 20px;
}

.welcome-card {
	border-radius: 15px;
	box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
	overflow: hidden;
	border: none;
	transition: transform 0.3s ease;
}


.welcome-section {
	/* background: #3EE7F9; linear-gradient(to right, #4b6cb7, #182848); */
	color: #8d54ea;
	padding: 40px 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a2d9ff" fill-opacity="1" d="M0,64L20,58.7C40,53,80,43,120,42.7C160,43,200,53,240,69.3C280,85,320,107,360,101.3C400,96,440,64,480,74.7C520,85,560,139,600,160C640,181,680,171,720,149.3C760,128,800,96,840,85.3C880,75,920,85,960,101.3C1000,117,1040,139,1080,160C1120,181,1160,203,1200,197.3C1240,192,1280,160,1320,144C1360,128,1400,128,1420,128L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg>');
	background-size: cover;
  background-repeat: no-repeat;
}

.login-section {
	padding: 40px 30px;
	background-color: #fff;
}

.welcome-icon {
	font-size: 3rem;
	margin-bottom: 20px;
	color: rgba(255, 255, 255, 0.9);
}

.welcome-title {
	font-size: 2.2rem;
	font-weight: 700;
	margin-bottom: 15px;
}

.welcome-text {
	opacity: 0.9;
	line-height: 1.6;
}

.form-control:focus {
	border-color: #8d54ea;
	box-shadow: none;
}

.btn-login {
	background: linear-gradient(to left, #8d54ea, #AF57EB);
	border: none;
	padding: 10px 0;
	font-weight: 600;
	transition: all 0.3s ease;
}

.btn-login:hover {
	/* background: linear-gradient(to right, #3a5ca9, #0e1f3a); */
	transform: translateY(-2px);
}

.login-title {
	color: #572c74;
	font-weight: 700;
	margin-bottom: 30px;
}

.form-label {
	font-weight: 600;
	color: #555;
}

.forgot-password {
	color: #8d54ea;
	text-decoration: none;
	font-size: 0.9rem;
}

.forgot-password:hover {
	text-decoration: none;
}
#logo{
	width: 100px;
}


@media (max-width: 992px) {
	.welcome-card {
		max-width: 90%;
		margin: 0 auto;
	}

	.welcome-section,
	.login-section {
		padding: 30px 25px;
	}
}

@media (max-width: 768px) {
	.welcome-card {
		max-width: 100%;
	}

	body {
		padding: 15px;
	}
}
</style>