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

## Fatti tecnici verificati (aggiornati al 2026-09-26, dopo Fase 0 e Fase 1)

- `EXERCISES` in `index.html` (~riga 677): 31 voci, allineate a `ex.html`. Campo opzionale
  `image` (usato da `Dumbbell_Bench_Hip_Thrust`, che esiste solo come `.jpg`).
- `index.html` carica le immagini in modo **dinamico**: `immagini/${exercise.image || id + '.png'}`.
  Una ricerca testuale di `immagini/...` NON basta: considera anche gli id di `EXERCISES`.
- Storage centralizzato (~righe 735–835): uniche letture `loadLog()` / `loadSteps()`,
  uniche scritture `saveLog()` / `saveStepsData()`. JSON corrotto → copia in
  `<chiave>_corrupt_<ts>`, messaggio in `#data-status`, lettura `{}`.
- `localStorage`:
  - `wlog` = `{ "YYYY-MM-DD": { "<exerciseId>": true, "is_rest": true } }`
    (`is_rest` è chiave riservata; marcare riposo sostituisce il giorno con `{is_rest:true}`).
  - `steps_history` = `{ "YYYY-MM-DD": <numero passi> }`.
  - `wlog_backup` = array di max 3 snapshot `{at, log, steps}` (prima di ogni import e
    1 volta/giorno all'avvio, marker `wlog_backup_last_day`). Non ancora ripristinabili da UI.
  - Il conteggio "fatti" oggi usa `!!dayLog[id]` e le chiavi presenti in `EXERCISES`.
- Export JSON: `{ version: 2, exported_at, workout_log, steps_history }`. Import accetta
  version 1, 2 o assente; merge per data con un unico `confirm()` se ci sono date in conflitto.
- Nessun polling né stub cloud: al loro posto il commento "[Punto d'aggancio Fase 4]".
- Test locali (ignorati da Git): `node test_storage.js` (storage/backup/import),
  `node verifica.js` (esercizi e immagini). Entrambi devono restare verdi.
- 23 immagini tracciate non usate (~7,3 MB); `.git` ~33 MB (storico con `node_modules`).

## Come lavorare

- Leggi prima `HANDOFF_GEMINI.md` (se presente), `piano_implemento_workout.md` e
  `avanzamento_piano.md`.
- A fine fase aggiorna `avanzamento_piano.md`.
- Ogni modifica a file serviti dal sito (html, immagini, manifest, icone, sw.js) richiede di incrementare CACHE_VERSION in sw.js (workout-v1 → v2 …), altrimenti l'app installata su iPhone resta sulla versione vecchia.
- Piccoli commit logici con messaggi chiari in italiano. **Mai `git push`**,
  mai `git reset --hard`, mai riscrivere la storia: il push lo fa l'utente.
- **Modifiche piccole e mirate**: usa lo strumento di modifica su poche righe alla volta.
  Non riscrivere mai `index.html` (o altri file grandi) per intero: supera il limite di output.
- **Ragiona in modo conciso**: pianifica in poche righe e passa subito all'azione;
  ogni risposta deve contenere un'azione (lettura, modifica, comando) o il report finale.
- Non cancellare file: sposta ciò che non serve in `_archivio/` (ignorata da Git).
- Controlli che puoi fare da terminale:
  - sintassi JS: estrai lo script inline e lancia `node --check`, ad es.
    `awk '/<script>/{f=1;next}/<\/script>/{f=0}f' index.html > /tmp/idx.js && node --check /tmp/idx.js`
  - immagini: confronta gli id di `EXERCISES` + riferimenti statici con `ls immagini/`.
- Prove nel browser: servi la cartella con `python3 -m http.server 8000` e apri
  `http://localhost:8000` (viewport mobile 390 px + desktop, console senza errori).
  I dati di `localhost` sono separati da quelli del sito pubblicato: si può testare liberamente.
  Se l'agente non ha un browser, prepara una checklist per l'utente.

## Storico sintetico

- Giu–Set 2026: catalogo riorganizzato (Petto, Spalle, Gambe e Glutei unificati…),
  rinumerazione #1–#31, immagini uniformate per sezione.
- Deploy su GitHub Pages con `robots.txt` e meta `noindex`.
- `index.html`: tracking giornaliero libero (rimosso `WEEK_PLAN`), giorno di riposo
  manuale, statistiche ricalibrate, export/import JSON, stub di cloud sync.
