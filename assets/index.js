(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
alert("D2D App Iniciando...");
class DigiTalentApp {
  constructor() {
    this.currentScreen = "home";
    this.evaluations = [];
    this.currentEvaluation = null;
    this.questions = {
      rookie: [
        {
          id: 1,
          text: "¿Cuéntame sobre un momento donde tuviste que esforzarte mucho para conseguir algo?",
          competency: "Hustle",
          guide: {
            good: ["Menciona objetivos concretos", "Habla de persistencia ante rechazos", "Muestra automotivación"],
            bad: ["Culpa a factores externos", "Vago en los detalles", "Se rindió fácilmente"]
          }
        },
        {
          id: 2,
          text: "¿Cómo convencerías a un amigo de probar un restaurante nuevo?",
          competency: "Persuasión",
          guide: {
            good: ["Usa entusiasmo genuino", "Destaca beneficios específicos", "Maneja objeciones imaginarias"],
            bad: ["Presiona demasiado", "No da razones convincentes", "Se enfada si le dicen que no"]
          }
        },
        {
          id: 3,
          text: "¿Cómo reaccionas cuando alguien rechaza tu idea?",
          competency: "Resiliencia",
          guide: {
            good: ["Escucha el feedback", "Busca alternativas", "No lo toma personal"],
            bad: ["Se pone a la defensiva", "Insiste sin cambiar argumento", "Se desmotiva"]
          }
        }
      ],
      experienced: [
        {
          id: 1,
          text: "¿Cuál fue tu peor racha de ventas y cómo saliste de ella?",
          competency: "Resiliencia Avanzada",
          guide: {
            good: ["Asume responsabilidad", "Analizó sus métricas", "Cambió su estrategia activamente"],
            bad: ["Culpa al mercado/territorio", "Dice que 'nunca ha tenido malas rachas'", "Esperó a tener suerte"]
          }
        },
        {
          id: 2,
          text: "¿Qué técnica de cierre usas para 'me lo tengo que pensar'?",
          competency: "Cierre",
          guide: {
            good: ["Aísla la objeción real", "Usa urgencia/escasez", "Mantiene el control de la conversación"],
            bad: ["Acepta la excusa y se va", "Se pone agresivo", "No hace preguntas de seguimiento"]
          }
        },
        {
          id: 3,
          text: "¿Cómo organizas tu territorio para maximizar ventas?",
          competency: "Organización",
          guide: {
            good: ["Planifica rutas lógicas", "Prioriza mejores horarios", "Toma notas detalladas"],
            bad: ["Va al azar", "No lleva registro", "Depende solo de la memoria"]
          }
        }
      ],
      psychology: [
        {
          id: 1,
          text: "¿Háblame de un jefe con el que no te hayas llevado bien y por qué?",
          competency: "Integridad",
          guide: {
            good: ["Habla de diferencias profesionales", "Mantiene el respeto", "Asume su parte"],
            bad: ["Insulta o menosprecia", "Se hace la víctima", "Dice que 'todos sus jefes eran malos'"]
          }
        },
        {
          id: 2,
          text: "¿Cómo te organizas cuando nadie te vigila?",
          competency: "Disciplina",
          guide: {
            good: ["Tiene rutina fija", "Usa agenda/calendario", "Se pone objetivos diarios"],
            bad: ["Trabaja 'cuando se inspira'", "Necesita que le digan qué hacer", "No tiene sistema"]
          }
        },
        {
          id: 3,
          text: "¿Por qué NO deberíamos contratarte?",
          competency: "Autocrítica",
          guide: {
            good: ["Honestidad con áreas de mejora real", "Muestra autoconocimiento", "No usa clichés ('soy perfeccionista')"],
            bad: ["Arrogancia ('soy demasiado bueno')", "No sabe qué decir", "Miente descaradamente"]
          }
        }
      ],
      other_sector: [
        {
          id: 1,
          text: "¿Cómo adaptarías tu discurso de venta si el cliente es muy técnico?",
          competency: "Adaptabilidad",
          guide: {
            good: ["Habla de nivelar lenguaje", "Destaca datos precisos", "Muestra paciencia"],
            bad: ["Sigue usando el mismo guion", "Se siente intimidado", "Usa demasiados tecnicismos vacíos"]
          }
        },
        {
          id: 2,
          text: "Cuéntame de una venta compleja que hayas cerrado.",
          competency: "Estrategia",
          guide: {
            good: ["Explica el proceso paso a paso", "Identificó el problema real", "Menciona seguimiento constante"],
            bad: ["Dice que fue 'por suerte'", "No recuerda detalles clave", "Fue una venta impulsiva"]
          }
        },
        {
          id: 3,
          text: "¿Qué haces cuando pierdes una venta en la que has trabajado mucho?",
          competency: "Gestión de Frustración",
          guide: {
            good: ["Analiza qué falló", "Busca aprender", "Sigue adelante con el próximo cliente"],
            bad: ["Se desmotiva por días", "Culpa al cliente", "Abandona el sector"]
          }
        }
      ]
    };
    this.psychRatings = {
      1: "Muy Deficiente: Perfil con alto riesgo de conflicto o falta de aptitud crítica.",
      2: "Deficiente: Muestra limitaciones significativas en competencias clave.",
      3: "Regular: Desempeño medio, requiere supervisión constante y formación.",
      4: "Bueno: Perfil sólido con buena actitud y competencias desarrolladas.",
      5: "Excelente: Alto potencial, perfil estrella con gran capacidad de impacto."
    };
    this.icebreakers = [
      "¿Qué es lo más extraño que te ha pasado en un trabajo anterior?",
      "Si pudieras tener cualquier superpoder para vender, ¿cuál elegirías?",
      "¿Cuál es tu película o serie favorita y por qué?",
      "Si no estuvieras aquí ahora mismo, ¿qué estarías haciendo?",
      "Cuéntame sobre un hobby que te apasione."
    ];
    this.init();
  }
  init() {
    console.log("🚀 App Initialized");
    this.loadEvaluations();
    document.getElementById("evaluationForm").addEventListener("submit", (e) => {
      e.preventDefault();
      this.startQuestions();
    });
  }
  showScreen(screenId) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    document.getElementById(`screen-${screenId}`).classList.add("active");
    document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
    const navItem = document.querySelector(`.nav-item[data-screen="${screenId}"]`);
    if (navItem) navItem.classList.add("active");
    if (screenId === "evaluations") this.renderEvaluationsList();
  }
  toggleExperience() {
    const hasExp = document.getElementById("hasExperience").value;
    const details = document.getElementById("experienceDetails");
    if (hasExp === "yes" || hasExp === "other") {
      details.classList.remove("hidden");
    } else {
      details.classList.add("hidden");
    }
  }
  startNewEvaluation() {
    document.getElementById("evaluationForm").reset();
    document.getElementById("experienceDetails").classList.add("hidden");
    this.showScreen("evaluation-form");
  }
  startQuestions() {
    const formData = new FormData(document.getElementById("evaluationForm"));
    const hasExp = formData.get("hasExperience") === "yes";
    this.currentEvaluation = {
      id: Date.now(),
      date: (/* @__PURE__ */ new Date()).toISOString(),
      candidate: {
        name: formData.get("name"),
        hasExperience: hasExp,
        experienceLevel: formData.get("experienceLevel"),
        zone: formData.get("zone")
      },
      questions: [
        ...formData.get("hasExperience") === "yes" ? this.questions.experienced : formData.get("hasExperience") === "other" ? this.questions.other_sector : this.questions.rookie,
        ...this.questions.psychology
        // Add HR questions to all flows
      ],
      currentQuestionIndex: 0,
      answers: [],
      score: 0,
      observation: {},
      // For remote check
      coachability: null
      // For live test
    };
    this.showScreen("rating-legend");
  }
  startQuestionsSequence() {
    this.renderQuestion();
    this.showScreen("questions");
  }
  renderQuestion() {
    const q = this.currentEvaluation.questions[this.currentEvaluation.currentQuestionIndex];
    const total = this.currentEvaluation.questions.length;
    const current = this.currentEvaluation.currentQuestionIndex + 1;
    document.getElementById("questionHeader").textContent = `Pregunta ${current}/${total}`;
    const container = document.getElementById("questionContainer");
    container.innerHTML = `
            <div class="question-card">
                <span class="competency-badge">${q.competency}</span>
                <h3>${q.text}</h3>
                
                <div class="supervisor-guide-container">
                    <button class="btn-guide" onclick="app.toggleGuide()">💡 Ver Pistas para Supervisor</button>
                    <div id="guideContent" class="guide-content hidden">
                        <div class="guide-section good">
                            <strong>✅ Busca esto:</strong>
                            <ul>${q.guide.good.map((i) => `<li>${i}</li>`).join("")}</ul>
                        </div>
                        <div class="guide-section bad">
                            <strong>❌ Alerta si ves:</strong>
                            <ul>${q.guide.bad.map((i) => `<li>${i}</li>`).join("")}</ul>
                        </div>
                    </div>
                </div>

                <div class="rating-container">
                    <p>Calificación:</p>
                    <div class="rating-buttons">
                        ${[1, 2, 3, 4, 5].map((n) => `
                            <button class="rating-btn" onclick="app.rateQuestion(${n})">${n}</button>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;
  }
  toggleGuide() {
    const guide = document.getElementById("guideContent");
    guide.classList.toggle("hidden");
  }
  showIcebreaker() {
    const random = this.icebreakers[Math.floor(Math.random() * this.icebreakers.length)];
    alert(`🧊 ROMPEHIELOS:

${random}`);
  }
  rateQuestion(score) {
    this.currentEvaluation.answers[this.currentEvaluation.currentQuestionIndex] = score;
    document.querySelectorAll(".rating-btn").forEach((btn) => {
      btn.classList.remove("selected");
      if (parseInt(btn.textContent) === score) btn.classList.add("selected");
    });
  }
  nextQuestion() {
    const currentIdx = this.currentEvaluation.currentQuestionIndex;
    if (!this.currentEvaluation.answers[currentIdx]) {
      alert("Por favor califica la respuesta antes de continuar");
      return;
    }
    if (currentIdx < this.currentEvaluation.questions.length - 1) {
      this.currentEvaluation.currentQuestionIndex++;
      this.renderQuestion();
    } else {
      this.showScreen("observation");
    }
  }
  prevQuestion() {
    if (this.currentEvaluation.currentQuestionIndex > 0) {
      this.currentEvaluation.currentQuestionIndex--;
      this.renderQuestion();
    }
  }
  getObservationResults() {
    const results = {
      punctuality: document.getElementById("obs_punctuality").checked,
      environment: document.getElementById("obs_environment").checked,
      tech: document.getElementById("obs_tech").checked,
      image: document.getElementById("obs_image").checked,
      eyeContact: document.getElementById("obs_eyeContact").checked
    };
    return results;
  }
  finishObservation() {
    this.currentEvaluation.observation = this.getObservationResults();
    this.showScreen("coachability");
  }
  finishCoachability(result) {
    this.currentEvaluation.coachability = result;
    this.finishEvaluation();
  }
  finishEvaluation() {
    const totalPoints = this.currentEvaluation.answers.reduce((a, b) => a + b, 0);
    const maxPoints = this.currentEvaluation.questions.length * 5;
    let coachBonus = 0;
    if (this.currentEvaluation.coachability === "positive") coachBonus = 10;
    if (this.currentEvaluation.coachability === "negative") coachBonus = -10;
    const finalScore = Math.min(100, Math.max(0, Math.round(totalPoints / maxPoints * 100) + coachBonus));
    this.currentEvaluation.score = finalScore;
    this.evaluations.push(this.currentEvaluation);
    this.saveEvaluations();
    this.showResults(finalScore);
  }
  showResults(score) {
    document.getElementById("finalScore").textContent = score;
    const circle = document.getElementById("scoreCircle");
    const circumference = 339.292;
    const offset = circumference - score / 100 * circumference;
    circle.style.strokeDashoffset = offset;
    const title = document.getElementById("verdictTitle");
    const text = document.getElementById("verdictText");
    if (score >= 75) {
      title.textContent = "¡Contratación Recomendada!";
      title.style.color = "var(--success)";
      text.textContent = "El candidato muestra un excelente potencial.";
    } else if (score >= 60) {
      title.textContent = "Apto con Reservas";
      title.style.color = "var(--warning)";
      text.textContent = "Tiene potencial pero necesita formación.";
    } else {
      title.textContent = "No Recomendado";
      title.style.color = "var(--danger)";
      text.textContent = "No cumple con los requisitos mínimos.";
    }
    this.showScreen("results");
  }
  loadEvaluations() {
    const saved = localStorage.getItem("digiEvaluations");
    if (saved) {
      this.evaluations = JSON.parse(saved);
    }
  }
  saveEvaluations() {
    localStorage.setItem("digiEvaluations", JSON.stringify(this.evaluations));
  }
  renderEvaluationsList() {
    const container = document.getElementById("evaluationsList");
    if (this.evaluations.length === 0) {
      container.innerHTML = '<p style="text-align: center; padding: 20px; color: #666;">No hay evaluaciones aún</p>';
      return;
    }
    container.innerHTML = this.evaluations.map((ev) => `
            <div class="eval-card" onclick="app.showEvalDetail(${ev.id})">
                <div class="eval-header">
                    <strong>${ev.candidate.name}</strong>
                    <span class="score-badge ${ev.score >= 75 ? "good" : "bad"}">${ev.score}</span>
                </div>
                <div class="eval-date">${new Date(ev.date).toLocaleDateString()}</div>
                <div class="eval-detail-label">Informe Detallado</div>
            </div>
        `).sort((a, b) => b.id - a.id).join("");
  }
  showEvalDetail(id) {
    const ev = this.evaluations.find((e) => e.id === id);
    if (!ev) return;
    const container = document.getElementById("evalDetailContent");
    let verdict = "No Recomendado";
    let verdictClass = "bad";
    if (ev.score >= 75) {
      verdict = "Recomendado";
      verdictClass = "good";
    } else if (ev.score >= 60) {
      verdict = "Apto con Reservas";
      verdictClass = "warning";
    }
    container.innerHTML = `
            <div class="detail-card">
                <div class="detail-section">
                    <div class="detail-score-box ${verdictClass}">
                        <div class="score-val">${ev.score}</div>
                        <div class="score-label">${verdict}</div>
                    </div>
                    <div class="info-row"><strong>Candidato:</strong> ${ev.candidate.name}</div>
                    <div class="info-row"><strong>Fecha:</strong> ${new Date(ev.date).toLocaleString()}</div>
                    <div class="info-row"><strong>Zona:</strong> ${ev.candidate.zone}</div>
                    <div class="info-row"><strong>Exp:</strong> ${ev.candidate.hasExperience ? ev.candidate.experienceLevel : "Sin experiencia"}</div>
                </div>

                <div class="detail-section">
                    <h3>🔍 Observación Digital</h3>
                    <div class="obs-summary">
                        ${[
      { label: "Puntualidad", val: ev.observation.punctuality },
      { label: "Entorno", val: ev.observation.environment },
      { label: "Setup técnico", val: ev.observation.tech },
      { label: "Imagen", val: ev.observation.image },
      { label: "Contacto Visual", val: ev.observation.eyeContact }
    ].map((o) => `<span class="obs-tag ${o.val ? "ok" : "nok"}">${o.label}</span>`).join("")}
                    </div>
                </div>

                <div class="detail-section">
                    <h3>🧪 Coachability</h3>
                    <p class="coach-result ${ev.coachability}">
                        ${ev.coachability === "positive" ? "✅ Positivo: Acepta y corrige" : ev.coachability === "negative" ? "❌ Negativo: Se defiende" : "😐 Neutral"}
                    </p>
                </div>

                <div class="detail-section">
                    <h3>📋 Preguntas e Informe Psicológico</h3>
                    ${ev.questions.map((q, i) => `
                        <div class="q-detail-item">
                            <div class="q-text"><strong>${i + 1}. ${q.text}</strong></div>
                            <div class="q-score">Calificación: <strong>${ev.answers[i] || 0}/5</strong></div>
                            <div class="psych-insight">${this.psychRatings[ev.answers[i]] || "Sin calificar"}</div>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    this.showScreen("eval-detail");
  }
  shareResults() {
    if (navigator.share) {
      navigator.share({
        title: "Evaluación Digi Talent",
        text: `Candidato: ${this.currentEvaluation.candidate.name} - Puntuación: ${this.currentEvaluation.score}/100`
      });
    } else {
      alert("Compartir no soportado en este dispositivo");
    }
  }
}
window.app = new DigiTalentApp();
