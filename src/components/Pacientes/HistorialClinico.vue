<template>
	<h5 class="fw-bold mb-2 d-flex align-items-center">Historial clínico</h5>
	<p class="text-muted">24 evoluciones registradas · Generadas automáticamente de citas confirmadas</p>

	<div class="d-flex fw-bold">
		<h6><span class="text-primary me-2"><i class="fa-solid fa-brain"></i></span> Evaluaciones Iniciales</h6>
	</div>success

	<div class="card my-3">
		<div class="card-body">
			<p class="mb-0" data-bs-toggle="collapse" href="#PsicologiaCollapse" role="button" aria-expanded="false"><span
					class="text-primary">Eval. Psicológica Inicial</span> <span class="text-muted">15 mar 2024 · Dra. Ana
					Rojas</span></p>
		</div>
	</div>
	<div class="collapse " id="PsicologiaCollapse">
		<div class="card my-3">
			<div class="card-header d-flex align-items-center bg-primary-subtle">
				<div class="bg-light bg-opacity-30 rounded-circle d-flex align-items-center justify-content-center text-primary"
					style="width:48px;height:48px;"> <i class="fa-solid fa-brain"></i> </div>

				<div class="ps-3">
					<h5 class="mb-0 fw-semibold">Evaluación Psicológica Inicial</h5>
					<small class="text-muted">
						15 Mar 2024 · Dra. Ana Rojas
					</small>
					<div class="text-muted small">
						Psicóloga Clínica · C.Ps.P. 12345
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Motivo de
						Consulta</p>
					<p>Paciente acude por recomendación de su esposa, refiere 'me siento muy ansioso y no puedo dormir'. Presenta
						síntomas de ansiedad y preocupación excesiva desde hace aproximadamente 6 meses.
					</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-file-medical"></i></span> Historia de la
						Enfermedad Actual</p>
					<p>El paciente refiere que los síntomas iniciaron gradualmente hace 6 meses, coincidiendo con aumento de
						responsabilidades laborales. Describe episodios de ansiedad intensa con síntomas somáticos (palpitaciones,
						sudoración, tensión muscular). </p>

					<p>Refiere dificultad para conciliar el sueño, despertando con frecuencia durante la noche pensando en
						problemas laborales. Ha notado irritabilidad aumentada que ha afectado su relación de pareja.</p>

					<p>El paciente niega ideación suicida o autolesiones. No refiere síntomas psicóticos.</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Antecedentes
						Personales</p>
					<p><span class="text-secondary">Médicos: </span> <span>Hipertensión arterial controlada con medicación. Niega
							diabetes u otras enfermedades crónicas.</span></p>
					<p><span class="text-secondary">Psiquiátricos: </span> <span>Sin antecedentes psiquiátricos previos. No
							tratamientos anteriores en salud mental.</span></p>
					<p><span class="text-secondary">Consumo de sustancias: </span> <span>Consumo social de alcohol (1-2 copas los
							fines de semana). Niega consumo de tabaco o sustancias ilícitas.</span></p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Antecedentes
						Familiares</p>
					<p>Madre con diagnóstico de depresión mayor, tratada con antidepresivos. Padre fallecido por infarto. Hermana
						con antecedente de trastorno de ansiedad.</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Diagnóstico
						Inicial</p>
					<div class="d-flex gap-3">
						<small>F41.1 - Trastorno de ansiedad generalizada</small>
						<small>F41.1 - Trastorno de ansiedad generalizada</small>
						<small>F41.1 - Trastorno de ansiedad generalizada</small>
					</div>
				</div>

				<p class="subTitulo text-secondary fw-bold"><span class="text-danger"><i
							class="bi bi-exclamation-triangle"></i></span> Riesgos Identificados</p>
				<ul id="ulRojo">
					<li>Antecedente familiar de trastornos afectivos</li>
					<li>Alto nivel de estrés laboral sostenido</li>
					<li>Posible deterioro de relación de pareja</li>
				</ul>

				<p class="subTitulo text-secondary fw-bold"><span class="text-danger"><i
							class="bi bi-exclamation-triangle"></i></span> Objetivos Terapéuticos</p>
				<ul id="ulVerde">
					<li>Reducir síntomas de ansiedad a niveles funcionales</li>
					<li>Mejorar calidad del sueño</li>
					<li>Desarrollar estrategias de afrontamiento al estrés</li>
					<li>Fortalecer habilidades de comunicación con pareja</li>
				</ul>
				<p class="subTitulo text-secondary fw-bold"><span class="text-secondary"><i
							class="bi bi-graph-up-arrow"></i></span> Plan
					de Tratamiento</p>
				<ol id="ulPlan">
					<li>Psicoterapia individual con enfoque cognitivo-conductual, sesiones semanales</li>
					<li>Entrenamiento en técnicas de relajación y respiración</li>
					<li>Higiene del sueño</li>
					<li>Evaluación de necesidad de interconsulta psiquiátrica según evolución</li>
					<li>Aplicación de pruebas psicológicas (BAI, BDI-II) para línea base</li>
				</ol>

			</div>
		</div>
	</div>

	<div class="card my-3">
		<div class="card-body">
			<p class="mb-0" data-bs-toggle="collapse" href="#PsiquiatricaCollapse" role="button" aria-expanded="false"><span
					class="text-info">Eval. Psiquiátrica Inicial</span> <span class="text-muted">20 dic 2025 · Dr. Luis
					Paredes</span></p>
		</div>
	</div>
	<div class="collapse" id="PsiquiatricaCollapse">
		<div class="card my-3">
			<div class="card-header d-flex align-items-center bg-info-subtle">
				<div class="bg-light bg-opacity-30 rounded-circle d-flex align-items-center justify-content-center text-info"
					style="width:48px;height:48px;"> <i class="bi bi-file-text"></i> </div>

				<div class="ps-3">
					<h5 class="mb-0 fw-semibold">Evaluación Psiquiátrica Inicial</h5>
					<small class="text-muted">
						20 Dic 2025 · Dr. Luis Paredes
					</small>
					<div class="text-muted small">
						Psicóloga Clínica · CMP 54321 / RNE 9876
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Motivo de
						Consulta</p>
					<p>Paciente referido por psicología para evaluación farmacológica. Persisten síntomas de ansiedad severa a
						pesar de psicoterapia.
					</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Historia de
						la Enfermedad Actual</p>
					<p>Paciente masculino de 45 años en tratamiento psicológico desde marzo 2024 por trastorno de ansiedad
						generalizada. A pesar de adherencia a psicoterapia, persisten síntomas de ansiedad que interfieren
						significativamente con funcionamiento laboral y personal.
					</p>
					<p>Refiere ansiedad flotante la mayor parte del día, preocupación excesiva e incontrolable, tensión muscular
						crónica, dificultad para concentrarse en el trabajo, e insomnio de conciliación y mantenimiento.
					</p>
					<p>En las últimas 2 semanas ha presentado 2 episodios de pánico con síntomas de despersonalización.
					</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Antecedentes
						Personales</p>
					<p><span class="text-secondary">Médicos: </span> <span>HTA en tratamiento con Losartán 50mg. Sin alergias
							medicamentosas conocidas.</span></p>
					<p><span class="text-secondary">Psiquiátricos: </span> <span> Primer episodio. En psicoterapia desde marzo
							2024.</span></p>
					<p><span class="text-secondary">Consumo de sustancias: </span> <span>Alcohol social ocasional. Café 3-4 tazas
							diarias.</span></p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Antecedentes
						Familiares</p>
					<p>Madre: Depresión Mayor en tratamiento. Tía materna: Trastorno de pánico.</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Examen del
						Estado Mental</p>
					<div class="row row-cols-2">
						<div class="col">
							<p><span class="text-secondary">Apariencia: </span> <span>Adecuada higiene y vestimenta. Edad aparente
									concordante con cronológica.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Apariencia: </span> <span>Adecuada higiene y vestimenta. Edad aparente
									concordante con cronológica.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Conducta: </span> <span>Colaborador, inquieto motor leve, contacto visual
									intermitente.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Lenguaje: </span> <span>Fluido, tono normal, velocidad levemente
									aumentada.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Ánimo: </span> <span>Ansioso</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Afecto: </span> <span>Congruente con estado de ánimo, rango completo pero
									predominio ansioso.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Proceso de pensamiento: </span> <span>Lógico, coherente, sin alteraciones
									formales.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Contenido del pensamiento: </span> <span>Preocupaciones excesivas
									centradas en trabajo y salud. Niega ideación suicida u homicida.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Percepción: </span> <span>Sin alteraciones sensoperceptivas.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Cognición: </span> <span>Orientado en las 3 esferas. Atención dispersa.
									Memoria conservada.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Introspección: </span> <span>Parcial, reconoce enfermedad pero subestima
									severidad.</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Juicio: </span> <span>Conservado</span></p>
						</div>
					</div>
					<div class="mb-3">
						<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span>
							Diagnóstico
							Inicial</p>
						<div class="d-flex gap-3">
							<small>F41.1 - Trastorno de ansiedad generalizada, moderado a severo</small>
							<small>F41.0 - Trastorno de pánico (episodios)</small>
							<small>F51.0 - Insomnio no orgánico</small>
						</div>
					</div>
					<p class="subTitulo text-secondary fw-bold"><span class="text-danger"><i
								class="bi bi-exclamation-triangle"></i></span> Riesgos Identificados</p>
					<ul id="ulRojo">
						<li>Riesgo de cronificación sin tratamiento farmacológico</li>
						<li>Posible evolución a trastorno de pánico establecido</li>
						<li>Riesgo de desarrollo de síntomas depresivos secundarios</li>
					</ul>

					<p class="subTitulo text-secondary fw-bold"><span class="text-danger"><i
								class="bi bi-exclamation-triangle"></i></span> Objetivos Terapéuticos</p>
					<ul id="ulVerde">
						<li>Control de síntomas de ansiedad con farmacoterapia</li>
						<li>Prevenir nuevos episodios de pánico</li>
						<li>Restaurar funcionalidad laboral y social</li>
						<li>Mejorar calidad del sueño</li>
					</ul>
					<p class="subTitulo text-secondary fw-bold"><span class="text-secondary"><i
								class="bi bi-graph-up-arrow"></i></span> Plan
						de Tratamiento</p>
					<p>FARMACOTERAPIA:</p>
					<p class="ms-3">
						1. Sertralina 50mg VO, 1 tableta por la mañana (iniciar con 25mg primera semana)<br>
						2. Alprazolam 0.5mg VO PRN para ansiedad severa (máximo 2 veces por día)<br>
						3. Zolpidem 10mg VO si insomnio (máximo 2 semanas)<br>
					</p>
					<p>INDICACIONES</p>
					<p class="ms-3">
						- Continuar psicoterapia semanal<br>
						- Reducir consumo de cafeína<br>
						- Evitar alcohol durante tratamiento<br>
						- Control en 2 semanas para evaluar tolerancia<br>
						- Acudir a emergencia si ideación suicida o efectos adversos severos
					</p>

				</div>
			</div>
		</div>
	</div>

	<div class="card my-3">
		<div class="card-body">
			<p class="mb-0" data-bs-toggle="collapse" href="#NutricionalCollapse" role="button" aria-expanded="false"><span
					class="text-success">Eval. Nutricional</span> <span class="text-muted">25 Mar 2024 · Lic. Carmen Díaz</span>
			</p>
		</div>
	</div>
	<div class="collapse" id="NutricionalCollapse">
		<div class="card">
			<div class="card-header d-flex align-items-center bg-success-subtle">
				<div class="bg-light bg-opacity-30 rounded-circle d-flex align-items-center justify-content-center text-success"
					style="width:48px;height:48px;"> <i class="bi bi-apple"></i> </div>
				<div class="ps-3">
					<h5 class="mb-0 fw-semibold">Evaluación Nutricional</h5>
					<small class="text-muted">
						20 Dic 2025 · Dr. Luis Paredes
					</small>
					<div class="text-muted small">
						Psicóloga Clínica · CMP 54321 / RNE 9876
					</div>
				</div>
			</div>
			<div class="card-body">
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Motivo de
						Consulta</p>
					<p>Paciente derivado por psicología para evaluación nutricional. Refiere aumento de peso de 8kg en los últimos
						6 meses asociado a ansiedad y alteración del patrón alimentario.
					</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-file-medical"></i></span> Historia de la
						Enfermedad Actual</p>
					<p>El paciente describe un patrón de alimentación emocional, con episodios de ingesta compulsiva
						principalmente nocturnos y asociados a momentos de ansiedad elevada. Refiere preferencia por alimentos
						ultraprocesados y dulces. </p>

					<p>Ha abandonado actividad física que realizaba previamente (natación 2 veces por semana). Consume 3-4 tazas
						de café diarias y refiere poca ingesta de agua.</p>

					<p>Sueño irregular afecta sus horarios de comida. Frecuentemente omite el desayuno y realiza una cena copiosa.
					</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Antecedentes
						Personales</p>
					<p><span class="text-secondary">Médicos: </span> <span>Hipertensión arterial en tratamiento. Dislipidemia
							leve. Sin diabetes.</span></p>
					<p><span class="text-secondary">Psiquiátricos: </span> <span>En tratamiento por trastorno de ansiedad
							generalizada.</span></p>
					<p><span class="text-secondary">Consumo de sustancias: </span> <span>Alcohol social ocasional. Café 3-4 tazas
							diarias. No tabaco.</span></p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Antecedentes
						Familiares</p>
					<p>Padre: diabetes tipo 2. Madre: obesidad. Hermana: síndrome metabólico.</p>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><i class="fa-solid fa-scale-unbalanced"></i> Evaluación
						Antropométrica</p>
					<div class="row row-cols-2">

						<div class="col">
							<p><span class="text-secondary">Peso actual: </span> <span>92 kg</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Talla: </span> <span>175 cm</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">IMC: </span> <span>30.1 (Obesidad grado I)</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Perímetro abdominal: </span> <span>102 cm (riesgo cardiovascular
									aumentado)</span></p>
						</div>
						<div class="col">
							<p><span class="text-secondary">Composición corporal: </span> <span>Grasa corporal estimada: 32%</span>
							</p>
						</div>
					</div>
				</div>
				<div class="mb-3">
					<p class="subTitulo text-secondary fw-bold"><span><i class="bi bi-person-exclamation"></i></span> Diagnóstico
						Inicial</p>
					<div class="d-flex gap-3">
						<small>E66.0 - Obesidad debida a exceso de calorías</small>
						<small>R63.2 - Polifagia (alimentación emocional)</small>
						<small>Riesgo cardiovascular moderado</small>
					</div>
				</div>
				<p class="subTitulo text-secondary fw-bold"><span class="text-danger"><i
							class="bi bi-exclamation-triangle"></i></span> Riesgos Identificados</p>
				<ul id="ulRojo">
					<li>Síndrome metabólico en desarrollo</li>
					<li>Patrón de alimentación emocional</li>
					<li>Sedentarismo</li>
					<li>Alto consumo de ultraprocesados</li>
				</ul>

				<p class="subTitulo text-secondary fw-bold"><span class="text-danger"><i
							class="bi bi-exclamation-triangle"></i></span> Objetivos Terapéuticos</p>
				<ul id="ulVerde">
					<li>Reducción de peso (5% en 3 meses)</li>
					<li>Establecer horarios regulares de alimentación</li>
					<li>Sustitución de ultraprocesados por alimentos naturales</li>
					<li>Reincorporación progresiva a la actividad física</li>
				</ul>
				<p class="subTitulo text-secondary fw-bold"><span class="text-secondary"><i
							class="bi bi-graph-up-arrow"></i></span> Plan
					de Tratamiento</p>
				<p>FARMACOTERAPIA:</p>
				<p class="ms-3">
					1. Dieta mediterránea hipocalórica (1800 kcal/día)<br>
					2. 5 comidas al día con horarios establecidos<br>
					3. Incremento de fibra y proteína para mayor saciedad<br>
					4. Reducción gradual de café a 2 tazas máximo<br>
					5. Hidratación mínima de 2 litros de agua diarios
				</p>
				<p>INDICACIONES</p>
				<p class="ms-3">
					- Diario de alimentación para identificar gatillos emocionales<br>
					- Coordinación con psicología para manejo de ansiedad<br>
					- Reiniciar actividad física progresivamente (caminar 30 min/día)<br>
					- Control nutricional quincenal inicialmente
				</p>
			</div>
		</div>
	</div>

	<div class="d-flex fw-bold">
		<h6><span class="text-primary me-2"><i class="bi bi-broadcast"></i></span> Evaluaciones Iniciales</h6>
	</div>

	<div class="card my-3">
		<div class="card-header d-flex align-items-center ">
				<div class="bg-light bg-opacity-30 rounded-circle d-flex align-items-center justify-content-center text-success"
					style="width:48px;height:48px;"> <i class="fa-solid fa-file-lines"></i> </div>
				<div class="ps-3">
					<h5 class="mb-0 fw-semibold">Evoluciones de Seguimiento</h5>
					<small class="text-muted">
						20 Dic 2025 · Dr. Luis Paredes
					</small>
				</div>
			</div>
		<div class="card-body">
			<p class="text-muted"><small>Diagnóstico</small></p>
			<p>Trastorno de ansiedad generalizada (F41.1)</p>
			<p class="text-muted"><small>Resumen de la Sesión</small></p>
			<p>Paciente presenta mejoría significativa en síntomas de ansiedad. Se reduce dosis de alprazolam de 0.5mg a 0.25mg. Mantiene sertralina 50mg. Próximo control en 1 mes.</p>
			<p class="text-naranja"><small><i class="fa-solid fa-stethoscope"></i> Tratamiento</small></p>
			<p><small><i class="fa-solid fa-angle-right"></i></small> Sertralina 50mg VO c/24h. Alprazolam 0.25mg VO PRN (reducido de 0.5mg). Se suspende Zolpidem.</p>
			<p class="text-naranja"><small><i class="fa-solid fa-capsules"></i> Prescripciones</small></p>
			<div class="d-flex gap-3">
				<p><small>Sertralina 50mg</small></p>
				<p><small>Alprazolam 0.25mg</small></p>
			</div>
			<p class="text-muted"><small><i class="fa-solid fa-capsules"></i> Próximos Pasos</small></p>
			<p>Control en 1 mes, continuar terapia psicológica</p>
		</div>
	</div>
	
	<div class="card my-3">
		<div class="card-header d-flex align-items-center ">
				<div class="bg-light bg-opacity-30 rounded-circle d-flex align-items-center justify-content-center text-success"
					style="width:48px;height:48px;"> <i class="fa-solid fa-file-lines"></i> </div>
				<div class="ps-3">
					<h5 class="mb-0 fw-semibold">Psicológica - Crisis</h5>
					<small class="text-muted">
						15 Ene 2026 · 3:45 PM · Dra. Ana Rojas
					</small>
				</div>
			</div>
		<div class="card-body">
			<p class="text-muted"><small>Diagnóstico</small></p>
			<p>Episodio de ideación suicida</p>
			<p class="text-muted"><small>Resumen de la Sesión</small></p>
			<p>Paciente reporta ideación suicida sin plan estructurado. Se activa protocolo SOS. Contacto de emergencia notificado. Se programa cita urgente con psiquiatra.</p>
			<p class="text-naranja"><small><i class="fa-solid fa-stethoscope"></i> Tratamiento</small></p>
			<p><small><i class="fa-solid fa-angle-right"></i></small> Intervención en crisis. Técnicas de contención emocional. Activación de protocolo SOS. Plan de seguridad actualizado.</p>
			<p class="text-muted"><small><i class="fa-solid fa-capsules"></i> Próximos Pasos</small></p>
			<p>Seguimiento diario, cita urgente psiquiátrica</p>
		</div>
	</div>
	
	<div class="card my-3">
		<div class="card-header d-flex align-items-center ">
				<div class="bg-light bg-opacity-30 rounded-circle d-flex align-items-center justify-content-center text-success"
					style="width:48px;height:48px;"> <i class="fa-solid fa-file-lines"></i> </div>
				<div class="ps-3">
					<h5 class="mb-0 fw-semibold">Psicológica</h5>
					<small class="text-muted">
						15 Ene 2026 · 3:45 PM · Dra. Ana Rojas
					</small>
				</div>
			</div>
		<div class="card-body">
			<p class="text-muted"><small>Diagnóstico</small></p>
			<p>Trastorno de ansiedad generalizada</p>
			<p class="text-muted"><small>Resumen de la Sesión</small></p>
			<p>Sesión 8 de TCC. Paciente muestra avances en técnicas de respiración y reestructuración cognitiva. Se trabajan pensamientos automáticos negativos.</p>
			<p class="text-naranja"><small><i class="fa-solid fa-stethoscope"></i> Tratamiento</small></p>
			<p><small><i class="fa-solid fa-angle-right"></i></small> TCC: Reestructuración cognitiva de pensamientos automáticos. Tarea: diario de pensamientos con registro ABC.</p>
			<p class="text-muted"><small><i class="fa-solid fa-capsules"></i> Próximos Pasos</small></p>
			<p>Seguimiento diario, cita urgente psiquiátrica</p>
		</div>
	</div>
</template>
<style scope>
.subTitulo i {
	font-size: 1.2rem;
}

.subTitulo p {
	color: black;
}

#ulRojo li::marker {
	color: red;
}

#ulVerde li::marker {
	color: rgb(6, 183, 6);
}

.bg-primary-subtle {
	background-color: #8ebbffa1 !important;
}

.bg-success-subtle {
	background-color: #3dfba470 !important;
}

.bg-info-subtle {
	background-color: #b6daff !important;
}

#PsiquiatricaCollapse h5 {
	color: #13a8a8;
	;
}

#PsicologiaCollapse h5 {
	color: #0459a4;
}
.text-naranja{
	color: rgb(229, 146, 2);
}
</style>