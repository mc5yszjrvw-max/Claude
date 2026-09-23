# Projektkontext

## Nutzer
- Arbeitet auf einem **iPad** (Safari, Claude-App). Kein Computer, kein Terminal.
- Anleitungen immer für das iPad schreiben: GitHub-Weboberfläche in Safari, keine
  Kommandozeilen-Schritte, kein ZIP-Entpacken, keine lokalen Dateien öffnen.
- Ergebnisse so bereitstellen, dass sie im Browser per Link erreichbar sind
  (z. B. GitHub Pages), nicht als Download.
- Anfänger: Schritte erklären, Code verständlich halten, auf Deutsch antworten.

## Projekt: Gewohnheits-Tracker
- Statische Seite ohne Build-Schritt: `index.html`, `style.css`, `app.js`.
- Kein Framework, keine Abhängigkeiten. Kommentare im Code auf Deutsch.
- Daten liegen im `localStorage` des Browsers (Schlüssel `gewohnheiten`).
- Zielgerät ist das iPad, als Web-App auf dem Home-Bildschirm. Große Tippflächen,
  Dark Mode und Safe-Area-Ränder beachten.
