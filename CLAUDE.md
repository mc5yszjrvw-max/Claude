# Projektkontext

## Nutzer
- Arbeitet auf einem **iPad** (Safari, Claude-App). Kein Computer, kein Terminal.
- Anleitungen immer für das iPad schreiben: GitHub-Weboberfläche in Safari, keine
  Kommandozeilen-Schritte, kein ZIP-Entpacken, keine lokalen Dateien öffnen.
- Ergebnisse so bereitstellen, dass sie im Browser per Link erreichbar sind
  (z. B. GitHub Pages), nicht als Download.
- Auf Deutsch antworten.

## Ziel des Nutzers
- Will lernen, Claude Code effektiv zu nutzen, um sich eigene Tools bauen zu lassen.
  **Will nicht selbst programmieren lernen.** Keine Code-Übungen, keine Lücken zum
  Selbstausfüllen, Code nicht Zeile für Zeile erklären, außer auf Nachfrage.
- Stattdessen trainieren: Anforderungen klar beschreiben, Ergebnisse prüfen,
  Funktionsprinzip und Risiken eines Tools verstehen (Wo liegen die Daten? Was
  kostet es? Was passiert beim Gerätewechsel? Ist es sicher?).
- Bei neuen Tools vor dem Bauen nachfragen, was unklar ist, und kurz den Plan
  zeigen. Danach sagen, was der Nutzer selbst testen sollte.
- Git-Schritte (PR, Merge, Pages) nach Möglichkeit selbst erledigen und dem Nutzer
  nur die Schritte geben, die er in der GitHub-Weboberfläche selbst machen muss.
- Code trotzdem sauber und verständlich halten, damit er wartbar bleibt.

## Projekt: Gewohnheits-Tracker
- Statische Seite ohne Build-Schritt: `index.html`, `style.css`, `app.js`.
- Kein Framework, keine Abhängigkeiten. Kommentare im Code auf Deutsch.
- Daten liegen im `localStorage` des Browsers (Schlüssel `gewohnheiten`).
- Zielgerät ist das iPad, als Web-App auf dem Home-Bildschirm. Große Tippflächen,
  Dark Mode und Safe-Area-Ränder beachten.
