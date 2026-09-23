// Die Gewohnheiten, die angezeigt werden.
// "id" wird zum Speichern benutzt, "name" wird angezeigt.
const GEWOHNHEITEN = [
  { id: "sport", name: "🏃 Sport" },
  { id: "lesen", name: "📖 Lesen" },
  { id: "wasser", name: "💧 Wasser trinken" },
];

const SPEICHER_SCHLUESSEL = "gewohnheiten";

// Gespeicherte Daten sehen so aus:
// { "2026-09-23": ["sport", "lesen"], "2026-09-24": ["wasser"] }
function ladeDaten() {
  const text = localStorage.getItem(SPEICHER_SCHLUESSEL);
  return text ? JSON.parse(text) : {};
}

function speichereDaten(daten) {
  localStorage.setItem(SPEICHER_SCHLUESSEL, JSON.stringify(daten));
}

// Macht aus einem Datum einen Text wie "2026-09-23".
// Bewusst mit lokaler Zeit, nicht toISOString(): Das rechnet in UTC
// und würde kurz nach Mitternacht den falschen Tag liefern.
function datumsText(datum) {
  const jahr = datum.getFullYear();
  const monat = String(datum.getMonth() + 1).padStart(2, "0");
  const tag = String(datum.getDate()).padStart(2, "0");
  return `${jahr}-${monat}-${tag}`;
}

// Liefert das Datum, das "anzahl" Tage vor heute liegt.
function tageZurueck(anzahl) {
  const datum = new Date();
  datum.setDate(datum.getDate() - anzahl);
  return datum;
}

function istErledigt(daten, datum, id) {
  const liste = daten[datumsText(datum)] || [];
  return liste.includes(id);
}

// Zählt, wie viele Tage am Stück die Gewohnheit erledigt wurde.
// Ist heute noch nicht abgehakt, zählen wir ab gestern. Sonst stünde
// die Serie jeden Morgen auf 0, obwohl der Tag noch nicht vorbei ist.
function berechneSerie(daten, id) {
  const start = istErledigt(daten, tageZurueck(0), id) ? 0 : 1;
  let serie = 0;
  while (istErledigt(daten, tageZurueck(start + serie), id)) {
    serie++;
  }
  return serie;
}

function umschalten(id) {
  const daten = ladeDaten();
  const heute = datumsText(new Date());
  const liste = daten[heute] || [];

  if (liste.includes(id)) {
    daten[heute] = liste.filter((eintrag) => eintrag !== id);
  } else {
    daten[heute] = [...liste, id];
  }

  speichereDaten(daten);
  anzeigen();
}

// Baut die komplette Liste neu auf.
function anzeigen() {
  const daten = ladeDaten();
  const liste = document.getElementById("liste");
  liste.innerHTML = "";

  for (const gewohnheit of GEWOHNHEITEN) {
    const karte = document.createElement("li");
    karte.className = "karte";

    // Kopfzeile mit Checkbox für heute
    const kopf = document.createElement("label");
    kopf.className = "kopf";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = istErledigt(daten, new Date(), gewohnheit.id);
    checkbox.addEventListener("change", () => umschalten(gewohnheit.id));
    kopf.append(checkbox, gewohnheit.name);

    // Aktuelle Serie
    const serie = berechneSerie(daten, gewohnheit.id);
    const serieText = document.createElement("p");
    serieText.className = "serie";
    serieText.textContent = `Serie: ${serie} ${serie === 1 ? "Tag" : "Tage"}`;

    // Die letzten 7 Tage, der älteste links, heute rechts
    const woche = document.createElement("div");
    woche.className = "woche";
    for (let i = 6; i >= 0; i--) {
      const datum = tageZurueck(i);
      const punkt = document.createElement("span");
      punkt.className = "tag";
      if (istErledigt(daten, datum, gewohnheit.id)) {
        punkt.classList.add("erledigt");
      }
      punkt.textContent = datum.toLocaleDateString("de-DE", { weekday: "short" }).slice(0, 2);
      woche.append(punkt);
    }

    karte.append(kopf, serieText, woche);
    liste.append(karte);
  }
}

document.getElementById("datum").textContent = new Date().toLocaleDateString("de-DE", {
  weekday: "long",
  day: "numeric",
  month: "long",
});

anzeigen();
