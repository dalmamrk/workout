# AGENTS.md — Progetto Workout (istruzioni per agenti di coding)

> Questo file viene letto automaticamente dagli agenti (OpenCode, Claude Code…).
> Tienilo breve e aggiornato: descrive lo stato **attuale** e le regole di lavoro.

## Regole di output (prevalgono su istruzioni globali)

- In questo progetto **NON** aggiungere intestazioni o piè di pagina del tipo
  "DOCUMENTO INTERNO IFEVS / Compilato il … · <modello>". È un progetto personale, non IFEVS.
- Rispondi in italiano, in modo sintetico. Ogni affermazione sul codice deve essere
  verificata con un comando o una lettura del file: niente supposizioni.

## Cos'è

Web app personale (utente unico) per registrare gli allenamenti, usata soprattutto da
smartphone. Sito **statico** pubblicato con GitHub Pages (`dalmamrk/workout`),
senza framework, senza build, senza dipendenze.

- `index.html` (~55 KB): dashboard — calendario, "Filtra & Spunta" esercizi del giorno,
  giorno di riposo, passi, statistiche, export/import JSON. Tutto il JS è inline.
- `ex.html` (~25 KB): catalogo dei 31 esercizi con immagini e filtri per gruppo.
- `immagini/`: illustrazioni **PNG/JPG raster** (non vettoriali), stile dark/neon.
- `robots.txt` + meta `noindex`: vanno conservati.
- Cartelle `aggiornamento_*`, `scheda/`, `prompt_*`, `istruzioni_agente.md`, `node_modules/`
  sono materiale di lavoro locale ignorato da Git: non pubblicarle, non cancellarle.

## Fatti tecnici verificati (2026-09-25)

- `EXERCISES` in `index.html` (~riga 677): 31 voci, allineate a `ex.html`.
- `index.html` carica le immagini in modo **dinamico**: `immagini/${id}.png`
  (righe ~995 e ~1125). Una ricerca testuale di `immagini/...` NON basta per sapere
  quali immagini sono usate: considera anche gli id di `EXERCISES`.
- Bug noto: `Dumbbell_Bench_Hip_Thrust` esiste solo come `.jpg` → in `index.html`
  l'immagine risulta rotta (in `ex.html` è corretta).
- `localStorage`:
  - `wlog` = `{ "YYYY-MM-DD": { "<exerciseId>": true, "is_rest": true } }`
    (`is_rest` è una chiave riservata nello stesso oggetto del giorno; marcare riposo
    sostituisce l'intero giorno con `{is_rest:true}`).
  - `steps_history` = `{ "YYYY-MM-DD": <numero passi> }`.
  - Le statistiche contano come "fatti" le chiavi del giorno presenti in `EXERCISES`.
- Export JSON: `{ version: 1, exported_at, workout_log, steps_history }`.
  Import = merge per data (le date importate sovrascrivono quelle locali).
- `cloudPull()` / `scheduleCloudPush()` sono stub; all'avvio c'è
  `setInterval(cloudPull, 20000)` inutile.
- 23 immagini tracciate non sono usate da nessuna pagina (~7,3 MB).
- `.git` pesa ~33 MB (in passato fu committato `node_modules`, poi rimosso).
- `agents.md` è tracciato anche se compare in `.gitignore` (commesso prima).

## Come lavorare

- Leggi prima `piano_implemento_workout.md` e `avanzamento_piano.md` (se esiste).
- Lavora **una fase per sessione**; a fine fase aggiorna `avanzamento_piano.md`.
- Piccoli commit logici con messaggi chiari in italiano. **Mai `git push`**,
  mai `git reset --hard`, mai riscrivere la storia: il push lo fa l'utente.
- Non cancellare file: sposta ciò che non serve in `_archivio/` (ignorata da Git).
- Controlli che puoi fare da terminale:
  - sintassi JS: estrai lo script inline e lancia `node --check`, ad es.
    `awk '/<script>/{f=1;next}/<\/script>/{f=0}f' index.html > /tmp/idx.js && node --check /tmp/idx.js`
  - immagini: confronta gli id di `EXERCISES` + riferimenti statici con `ls immagini/`.
- Non puoi aprire un browser: le prove visive (mobile 390 px, console, offline PWA)
  vanno elencate in una checklist per l'utente, che le esegue con
  `python3 -m http.server 8000` e apre `http://localhost:8000`.

## Storico sintetico

- Giu–Set 2026: catalogo riorganizzato (Petto, Spalle, Gambe e Glutei unificati…),
  rinumerazione #1–#31, immagini uniformate per sezione.
- Deploy su GitHub Pages con `robots.txt` e meta `noindex`.
- `index.html`: tracking giornaliero libero (rimosso `WEEK_PLAN`), giorno di riposo
  manuale, statistiche ricalibrate, export/import JSON, stub di cloud sync.
