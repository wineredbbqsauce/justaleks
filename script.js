/* ══════════════════════════════════════
   DATA — justaleks.no
══════════════════════════════════════ */
const IMAGES = {
  hero: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/adb4491ee434e1fc120ab8b677079d1a0c3f3184d28403485e08bfbd6ff96e5a.png",
  portrait:
    "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/8c10d4ed09e7e850e955f8a76fb0cdecc7a0a8894562d18cae42eb4eff6ea9d4.png",
  code1:
    "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/08fada2c575406c039363a473d8a3f1e53bdf2a2406b4bb3dadf244630fbb1cc.png",
  code2:
    "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/33fc7ab17df6871ffae5a1ccffefaa1e6dc2575fb4b973b8baaf158df02053d4.png",
  art1: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/9e764fd71f8062bf355eda1fd87b97af143f15be2b02dc250be0ab9f9f7e9986.png",
  art2: "https://static.prod-images.emergentagent.com/jobs/75d8837c-c363-4b19-9a5a-312b1b3be6ac/images/9e7d8ebe1494ff5e316127d7e75a0e4efd8b2417235a9f64391fd009a8335504.png",
};

const PROJECTS = [
  {
    id: "p01",
    index: "01",
    title: "Section — Nettbutikk",
    year: "2024",
    stack: ["Python", "Flask", "SQLite", "JavaScript"],
    summary:
      "En fullstack nettbutikk template/mock med brukerinnlogging, handlekurv og produktadmin. Startet som skoleoppgave, endte opp som noe jeg faktisk er stolt av.",
    link: "https://github.com/wineredbbqsauce/nettbutikk",
    demo: "https://demo-section.justaleks.no",
    image: IMAGES.code1,
    size: "large",
  },
  {
    id: "p02",
    index: "02",
    title: "justaleks.no",
    year: "2024",
    stack: ["HTML", "CSS", "JavaScript"],
    summary:
      "Denne siden. Bygget fra scratch — ingen rammeverk, ingen snarveier. Bare meg, en editor, og en idé om noe enkelt og ekte.",
    link: "https://github.com/wineredbbqsauce/portfolio",
    demo: null,
    image: IMAGES.code2,
    size: "small",
  },
  {
    id: "p03",
    index: "03",
    title: "Bildegalleri",
    year: "2024",
    stack: ["HTML", "CSS", "JavaScript", "Foto"],
    summary:
      "Et personlig fotogalleri med bilder jeg har tatt selv. Solnedganger, bymiljø, ting jeg ikke klarte å la passere uten å ta frem kameraet.",
    link: null,
    demo: "gallery/gallery.html",
    image: null,
    size: "small",
  },
  {
    id: "p04",
    index: "04",
    title: "Neste prosjekt...",
    year: "2025",
    stack: ["Snart"],
    summary:
      "Ideen er der et sted. Venter bare på at motivasjonen og energien treffer på samme dag. Blir nok noe med Python. Eller kanskje noe helt annet.",
    link: null,
    demo: null,
    image: null,
    size: "wide",
  },
];

const ART = [
  {
    id: "a01",
    title: "Kjærlighets tre",
    medium: "Sen kveld · 2024",
    image: "../assets/bilder/love_heart_tree.jpg",
    aspect: "tall",
  },
  {
    id: "a02",
    title: "Økern, Oslo",
    medium: "Skyete ettermiddag · 2024",
    image: "../assets/bilder/6_etg_heiskran(1).jpg",
    aspect: "square",
  },
  {
    id: "a03",
    title: "Jul i vinterland",
    medium: "Oslo · 2024",
    image: "../assets/bilder/karusell.jpg",
    aspect: "square",
  },
  {
    id: "a04",
    title: "Lys gjennom himmel",
    medium: "Oslo · 2024",
    image: "../assets/bilder/solskinn_gjennom_himmel.jpg",
    aspect: "tall",
  },
];

const INTERESTS = [
  {
    emoji: "💻",
    title: "Programmering",
    body: "Begynte med Python, dablet i JavaScript, og nå er det ikke til å stoppe. Liker backend mest, men frontend er gøy når det faktisk ser bra ut. Nysgjerrig av natur — prøver gjerne noe nytt bare for å skjønne hvordan det funker.",
    link: null,
  },
  {
    emoji: "🍳",
    title: "Matlaging & kosthold",
    body: "GitHub-brukernavnet sier litt. Lager mat hver dag — og er faktisk opptatt av hva som går inn i kroppen. Kosthold er ikke bare diett, det er nysgjerrighet. Prøver nye oppskrifter oftere enn jeg prøver nye rammeverk.",
    link: null,
  },
  {
    emoji: "🔥",
    title: "Pyromania (kontrollert)",
    body: "Ja, jeg liker å sette ting på fyr. Kontrollert, selvsagt. Det er noe med fysikken bak flammer — hvordan de beveger seg, hva som brenner og hvorfor. Ikke bekymre deg, ingen serverpark har gått opp i røyk. Ennå.",
    link: null,
  },
  {
    emoji: "🎮",
    title: "Gaming",
    body: "Spiller litt av alt — men mest det som tar for mye tid. Gaming er også grunnen til at jeg begynte å programmere. Ville alltid forstå hva som skjer under panseret. Det gjør jeg fortsatt, bare på en annen måte nå.",
    link: null,
  },
  {
    emoji: "🎵",
    title: "Musikk",
    body: "Alltid musikk på ørene. Kodet til 90% av alt jeg har laget. Liker bredt — rolig når det skal konsentreres, noe mer energisk når det trengs fart. Katy Perry slår aldri feil. Skulle likt å tro at jeg spiller litt selv, men det er ikke noe konsert av det akkurat.",
    link: null,
  },
  {
    emoji: "🚗",
    title: "Bil & mekanikk",
    body: "Biler er bare elektronikk og mekanikk pakket inn i plast og stål. Liker å skjønne hvordan ting henger sammen — enten det er en motor eller en server. Debugging er debugging, uansett om det er kode eller en motor som ikke starter.",
    link: null,
  },
  {
    emoji: "📸",
    title: "Fotografi",
    body: "Liker å fange øyeblikk — enten det er natur, mat eller bare noe som ser kult ut der og da. Fotografi og koding har mer til felles enn folk tror: begge handler om å se ting fra riktig vinkel, og begge krever at man faktisk trykker på knappen.",
    link: "sides/interests/fotografi.html",
  },
  {
    emoji: "🔧",
    title: "Elektronikk & DIY",
    body: "Ubuntu, bash-scripts, selfhosting, LAN-servere og litt lodding på toppen. Liker å bygge og fikse ting med hendene like mye som med tastaturet. Har brukt altfor mange timer på å debugge nettverksting som viste seg å være en skrivefeil i en config-fil.",
    link: "sides/interests/linux.html",
  },
  {
    emoji: "🌍",
    title: "Reising & friluftsliv",
    body: "Ny sted, nytt perspektiv. Liker å utforske — enten det er en ny by, en sti i skogen, eller bare et sted jeg aldri har vært. Nysgjerrighet er driveren, både på reise og foran PC-en. Har alltid med kamera. Og snacks.",
    link: null,
  },
];

const TIMELINE = [
  {
    year: "2026",
    title: "Fullstack nettbutikk — Section",
    place: "Oslo, NO",
  },
  {
    year: "2025",
    title: "Bygger portefølje + neste prosjekt",
    place: "Skoleprosjekt",
  },
  {
    year: "2024",
    title: "Begynte med Linux, selfhosting & DIY",
    place: "Kjelleren / hjemmekontor",
  },
  {
    year: "2022",
    title: "Første linje kode — Python",
    place: "Nysgjerrighetens vei",
  },
];

const SKILLS = [
  "Python",
  "Flask",
  "JavaScript",
  "HTML",
  "CSS",
  "SQLite",
  "Linux",
  "Git",
  "Bash",
  "Docker",
  "Selfhosting",
  "Fotografi",
  "Matlaging",
  "Debugging kl. 03:00",
  "For mange tabs åpne",
];

/* ══════════════════════════════════════
   RENDER
══════════════════════════════════════ */
// Projects
const projGrid = document.getElementById("projects-grid");
PROJECTS.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = `project-card ${p.size} reveal`;
  card.style.transitionDelay = `${i * 80}ms`;

  // Hvis prosjektet har en demo eller GitHub-link, gjør kortet klikkbart
  if (p.link || p.demo) {
    card.style.cursor = "pointer";
    card.onclick = () => {
      window.open(p.link || p.demo, "_blank", "noopener noreferrer");
    };
  }

  const demoBtn = p.demo
    ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link mono" onclick="event.stopPropagation()">
         <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7,7 17,7 17,17"/></svg>
         <span>Se demo</span>
       </a>`
    : "";

  const githubBtn = p.link
    ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer" class="project-link mono" onclick="event.stopPropagation()" style="margin-left: 16px;">
         <svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
         <span>GitHub</span>
       </a>`
    : "";

  card.innerHTML = `
    ${p.image ? `<div class="project-img"><img src="${p.image}" alt="${p.title}" loading="lazy" /></div>` : ""}
    <div class="project-body">
      <div class="project-meta">
        <span class="label project-index">/ ${p.index}</span>
        <span class="label project-year">${p.year}</span>
      </div>
      <h3 class="project-name serif">${p.title}</h3>
      <p class="project-desc mono">${p.summary}</p>
      <div class="project-stack">${p.stack.map((s) => `<span class="project-tag mono">${s}</span>`).join("")}</div>
      <div class="project-links" style="display:flex; align-items:center; gap:8px;">
        ${demoBtn}
        ${githubBtn}
      </div>
    </div>`;
  projGrid.appendChild(card);
});
document.getElementById("proj-count").textContent =
  `[ ${String(PROJECTS.length).padStart(2, "0")} prosjekter ]`;
document.getElementById("proj-count").style.display = "";

// Gallery
const galGrid = document.getElementById("gallery-grid");
ART.forEach((w, i) => {
  const fig = document.createElement("figure");
  fig.className = `art-piece reveal`;
  fig.style.transitionDelay = `${i * 90}ms`;
  fig.innerHTML = `
    <div class="art-frame ${w.aspect} img-wrap"><img src="${w.image}" alt="${w.title}" loading="lazy" /></div>
    <figcaption>
      <span class="art-title">${w.title}</span>
      <span class="art-medium mono">${w.medium}</span>
    </figcaption>`;
  galGrid.appendChild(fig);
});

// Timeline
const tlEl = document.getElementById("timeline");
TIMELINE.forEach((t) => {
  const row = document.createElement("div");
  row.className = "timeline-row";
  row.innerHTML = `<span class="tl-year label">${t.year}</span><span class="tl-title serif">${t.title}</span><span class="tl-place mono">${t.place}</span>`;
  tlEl.appendChild(row);
});

// Marquee
const doubled = [...SKILLS, ...SKILLS];
const m1 = document.getElementById("marquee1");
const m2 = document.getElementById("marquee2");
doubled.forEach((s) => {
  const sp1 = document.createElement("span");
  sp1.innerHTML = `${s}<b>·</b>`;
  m1.appendChild(sp1);
  const sp2 = document.createElement("span");
  sp2.innerHTML = `${s}<b>/</b>`;
  m2.appendChild(sp2);
});

// Footer year
document.getElementById("year-copy").textContent =
  `Ø ${new Date().getFullYear()} Aleks — Bygget med altfor mange tabs åpne.`;

/* ══════════════════════════════════════
   NAVBAR scroll
══════════════════════════════════════ */
const navbar = document.getElementById("navbar");
window.addEventListener(
  "scroll",
  () => {
    navbar.classList.toggle("scrolled", window.scrollY > 12);
  },
  { passive: true },
);

/* ══════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════ */
let menuOpen = false;
function toggleMenu() {
  menuOpen = !menuOpen;
  document.getElementById("nav-drawer").classList.toggle("open", menuOpen);
  document.getElementById("icon-menu").style.display = menuOpen ? "none" : "";
  document.getElementById("icon-close").style.display = menuOpen ? "" : "none";
}

/* ══════════════════════════════════════
   SMOOTH SCROLL
══════════════════════════════════════ */
function goTo(id) {
  if (menuOpen) toggleMenu();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ══════════════════════════════════════
   SCROLL REVEAL
══════════════════════════════════════ */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ══════════════════════════════════════
   CONTACT FORM
══════════════════════════════════════ */
function handleSubmit(e) {
  e.preventDefault();
  const f = e.target;
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const message = f.message.value.trim();
  if (!name || !email || !message) {
    showToast("Vennligst fyll ut alle feltene.");
    return;
  }
  const subject = encodeURIComponent(`Portefølje · melding fra ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:kontakt@justaleks.no?subject=${subject}&body=${body}`;
  setTimeout(() => {
    showToast("E-postprogram åpnet. Tusen takk!");
    f.reset();
  }, 400);
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 3200);
}
