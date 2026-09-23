
import { history, geography, physics, chemistry, mathematics, generalCulture, biology, french } from "./questions.js";



// Format : [question, "choix A|choix B|choix C|choix D", index de la bonne réponse (0-3)]
const DATA = {
"Histoire": history,
"Géographie": geography,
"Biologie": biology,
"Physique": physics,
"Chimie": chemistry,
"Mathématiques": mathematics,
"Français": french,
"Culture générale": generalCulture
};

if (typeof module !== "undefined") module.exports = DATA;

if (typeof document !== "undefined") {
const $ = s => document.querySelector(s), app = $("#app");
const sh = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pool = s => (s === "all" ? Object.keys(DATA) : [s]).flatMap(k => DATA[k].map(x => [k, ...x]));
const h = s => s.replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
const back = `<button class="link" data-home>← Accueil</button>`;

function home() {
  const subs = Object.keys(DATA);
  app.innerHTML = `<h1>Préparation à l'examen d'entrée</h1>
  <p class="lead">Révise une matière question par question, ou lance un test et vérifie tes réponses.</p>
  <div class="grid">${subs.map(s => `<article class="card"><h2>${s}</h2><p>${DATA[s].length} questions</p>
  <div><button data-study="${s}">Réviser</button><button class="alt" data-test="${s}">Test de 10</button></div></article>`).join("")}</div>
  <form id="custom" class="panel"><h2>Test aléatoire</h2>
  <label>Matière<select id="sel"><option value="all">Toutes les matières (${pool("all").length})</option>${subs.map(s => `<option>${s}</option>`).join("")}</select></label>
  <label>Nombre de questions<input id="num" type="number" min="1" value="20"></label>
  <button class="big">Commencer le test</button></form>`;
  $("#custom").onsubmit = e => { e.preventDefault(); quiz($("#sel").value, +$("#num").value || 10); };
  scrollTo(0, 0);
}

function study(s) {
  app.innerHTML = `<div class="bar">${back}<b>${s}</b></div>` + DATA[s].map((x, i) => {
    const o = x[1].split("|");
    return `<div class="q"><p class="qt">${i + 1}. ${h(x[0])}</p><ul>${o.map(t => `<li>${h(t)}</li>`).join("")}</ul>
    <details><summary>Voir la réponse</summary><p class="ans">${h(o[x[2]])}</p></details></div>`;
  }).join("") + `<button class="big" data-test="${s}">Passer le test de ${s}</button>`;
  scrollTo(0, 0);
}

function quiz(s, n) {
  const items = sh(pool(s)).slice(0, n).map(([sub, q, o, a]) => { const p = o.split("|"); return { sub, q, ok: p[a], p: sh(p) }; });
  const title = s === "all" ? "Toutes les matières" : s;
  app.innerHTML = `<div class="bar">${back}<b>${title} · ${items.length} questions</b></div><form id="qz">${items.map((it, i) =>
    `<fieldset class="q"><legend>${i + 1}. ${h(it.q)}${s === "all" ? `<small>${it.sub}</small>` : ""}</legend>${it.p.map((t, j) =>
      `<label class="opt"><input type="radio" name="q${i}" value="${j}"> ${h(t)}</label>`).join("")}<p class="fb"></p></fieldset>`).join("")}
    <button class="big">Soumettre le test</button></form>`;
  scrollTo(0, 0);
  const f = $("#qz");
  f.onsubmit = e => {
    e.preventDefault(); let sc = 0;
    const sets = f.querySelectorAll("fieldset");
    items.forEach((it, i) => {
      const v = f.elements["q" + i].value, fs = sets[i], fb = fs.querySelector(".fb");
      fs.querySelectorAll(".opt").forEach((l, j) => {
        l.querySelector("input").disabled = true;
        if (it.p[j] === it.ok) l.classList.add("good"); else if (v !== "" && +v === j) l.classList.add("bad");
      });
      if (v !== "" && it.p[+v] === it.ok) { sc++; fs.classList.add("right"); fb.textContent = "Correct"; }
      else { fs.classList.add("wrong"); fb.textContent = (v === "" ? "Sans réponse. " : "Incorrect. ") + "Bonne réponse : " + it.ok; }
    });
    f.querySelector(".big").remove();
    const pct = Math.round(100 * sc / items.length);
    f.insertAdjacentHTML("beforebegin", `<div class="score"><strong>${sc} / ${items.length}</strong><span>${pct} % de bonnes réponses · ${items.length - sc} à revoir</span>
      <div><button id="again">Nouveau test</button><button class="alt" data-home>Accueil</button></div></div>`);
    $("#again").onclick = () => quiz(s, n);
    scrollTo(0, 0);
  };
}

app.onclick = e => {
  const t = e.target;
  if (t.dataset.study) study(t.dataset.study);
  else if (t.dataset.test) quiz(t.dataset.test, 10);
  else if ("home" in t.dataset) home();
};
home();
}
