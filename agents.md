# AGENTS.md — Progetto Workout (istruzioni per agenti di coding)

> Questo file viene letto automaticamente dagli agenti (OpenCode, Claude Code, Gemini…).
> Tienilo breve e aggiornato: descrive lo stato **attuale** e le regole di lavoro.

## Regole di output (prevalgono su istruzioni globali)

- In questo progetto **NON** aggiungere intestazioni o piè di pagina del tipo
  "DOCUMENTO INTERNO IFEVS / Compilato il … · <modello>". È un progetto personale, non IFEVS.
- Rispondi in italiano, in modo sintetico. Ogni affermazione sul codice deve essere
  verificata con un comando o una lettura del file: niente supposizioni.

## Cos'è e Contesto d'Uso

Web app (PWA) ad **uso strettamente personale** (utente unico), usata direttamente su **iPhone**
(Safari o Chrome aggiunta a Schermata Home, viewport 390×844) **mentre l'utente si allena**.
Sito **statico** pubblicato con GitHub Pages (`dalmamrk/workout`), senza framework, senza build, senza dipendenze.

- **NON DEVE ESSERE INDICIZZATA**: l'app è privata e personale; **non deve apparire sui motori di ricerca**.
  Mantenere sempre:
  - `robots.txt` con blocco totale (`User-agent: *` e `Disallow: /`).
  - Tag meta robots in tutte le pagine HTML (`<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">` e analogo per `googlebot`).
- `index.html` (~118 KB): dashboard interattiva per l'allenamento — calendario compatto a 4 giorni su singola riga, gestione serie carichi/ripetizioni con cascata automatica, riposo dai pesi e riposo attivo, passi giornalieri retroattivi, timer di recupero, statistiche con badge muscolari ordinati e riepilogo periodo, export/import JSON e backup locali. Tutto il JS è inline.
- `ex.html` (~27 KB): catalogo dei 32 esercizi con illustrazioni dark/neon e filtri per gruppo muscolare.
- `immagini/`: illustrazioni **PNG/JPG raster** (non vettoriali), stile dark/neon.
- `sw.js`: Service Worker offline-first (attualmente versione `workout-v5`).
- Cartelle `scheda/`, `prompt_*`, `istruzioni_agente.md`, `node_modules/`, `_archivio/` sono materiale di lavoro locale ignorato da Git: non pubblicarle, non cancellarle. Le vecchie cartelle `aggiornamento_*` sono state rimosse perché obsolete.

## Fatti tecnici verificati (aggiornati al 2026-10-01, versione workout-v5)

- `EXERCISES` in `index.html` (~riga 677): **32 voci** (#1..#32), allineate a `ex.html` (incluso #32 `farmer_walk` nel gruppo "Riposo attivo"). Campo opzionale `image` (usato da `Dumbbell_Bench_Hip_Thrust.jpg`).
- Caricamento dinamico immagini: `immagini/${exercise.image || id + '.png'}`.
- Storage centralizzato (`loadLog()`, `loadSteps()`, `saveLog()`, `saveStepsData()`):
  - `wlog` = `{ "YYYY-MM-DD": { "<exerciseId>": { done: true, sets: [...], note: "" }, "is_rest": true } }`.
  - `steps_history` = `{ "YYYY-MM-DD": <numero passi> }`.
  - `wlog_backup` = array di max 3 snapshot `{at, log, steps}` (prima di ogni import e 1 volta/giorno all'avvio).
  - JSON corrotto → copia in `<chiave>_corrupt_<ts>`, notifica in UI `#data-status`, fallback `{}`.
- Calendario Programma: mostra solo 4 giorni fissi (-3..0, nessuna data futura) su una singola riga a 390 px senza scroll orizzontale, altezza pulsanti ≥ 44 px per touch iPhone. Unico segno di evidenza: accento ciano (`linear-gradient`) sul giorno selezionato (rimossi pallini e puntini sparsi).
- Rilevamento cambio giorno su resume (`checkDateChangeOnResume`): su `visibilitychange` e `focus`, se la data cambia (es. dopo mezzanotte), rigenera i 4 giorni, seleziona il nuovo oggi ed effettua il backup giornaliero.
- Serie e carichi: compilazione a cascata dalla prima riga a quelle successive se non modificate manualmente (`userModified`), ereditarietà per nuove serie aggiunte (`+ serie`) e precompilazione dall'ultima esecuzione registrata.
- Riposo dai pesi e riposo attivo: `is_rest` marca il riposo dai pesi senza bloccare o azzerare esercizi di riposo attivo (es. Farmer's Walk con minuti, carico, passi) né il tracking dei passi.
- Passi retroattivi: inseribili per tutti i 4 giorni visibili nel calendario (passati e oggi), bloccati per date future.
- Test locali (ignorati da Git): `node test_storage.js` (storage, cascata serie, passi retroattivi, statistiche, calendario, riposo attivo: tutti verdi), `node verifica.js` (32 esercizi e immagini sincronizzati). Entrambi devono restare verdi.

## Come lavorare

- Leggi prima `HANDOFF_GEMINI.md` (se presente), `piano_implemento_workout.md` e `avanzamento_piano.md`.
- A fine fase aggiorna `avanzamento_piano.md`.
- **Fondamentale per iPhone PWA**: ogni modifica a file serviti dal sito (html, immagini, manifest, icone, sw.js) richiede di incrementare `CACHE_VERSION` in `sw.js` (`workout-v1` → `v2` → … `v5`), altrimenti l'app installata su iPhone resta sulla versione in cache.
- Input touch mobile su iPhone: tastiere numeriche con `inputmode="decimal"` o `"numeric"`, font input ≥ 16 px (per prevenire lo zoom automatico di Safari/iOS), touch target ≥ 44 px.
- Piccoli commit logici con messaggi chiari in italiano. **Mai `git push`**, mai `git reset --hard`, mai riscrivere la storia: il push lo fa l'utente.
- **Modifiche piccole e mirate**: usa lo strumento di modifica su poche righe alla volta. Non riscrivere mai `index.html` per intero.
- **Ragiona in modo conciso**: pianifica in poche righe e passa subito all'azione; ogni risposta deve contenere un'azione o il report finale.
- Non cancellare file di documentazione o archivio: sposta ciò che non serve in `_archivio/` (ignorata da Git).
- Controlli prima del commit:
  - sintassi JS: `node --check sw.js` e script estratto da `index.html`.
  - suite test: `node test_storage.js` e `node verifica.js`.

## Storico sintetico

- **Giu–Set 2026**: Catalogo riorganizzato, rinumerazione #1–#31, immagini uniformate. Deploy su GitHub Pages con `robots.txt` e meta `noindex`.
- **Fase 0 e Fase 1 (Settembre 2026)**: Fix bug Hip Thrust (`.jpg`), centralizzazione storage `loadLog`/`loadSteps`, rimozione stub cloud e polling, export v2, import robusto con merge per data e backup preventivi automatici.
- **Serie a cascata & Passi retroattivi — Deploy v2 (2026-09-26) [Gemini 3.8 Flash]**:
  - Compilazione serie a cascata dalla prima riga a tutte le righe non toccate a mano (`userModified`).
  - Passi inseribili per date passate nel calendario con blocco date future e aggiornamento immediato delle statistiche.
  - Ottimizzazione mobile per iPhone (`inputmode`, font ≥ 16 px, touch target ≥ 44 px).
  - Incremento PWA a `workout-v2`.
- **Statistiche muscolari & Calendario 4 giorni — Deploy v3 (2026-09-27) [Gemini 3.8 Flash]**:
  - Nuova sezione cronologica "Allenamenti del periodo" con badge gruppi muscolari ordinati secondo `GROUPS`, conteggio esercizi e riepilogo compatto per gruppo.
  - Calendario Programma compatto a 4 giornate (-3..0) su singola riga a 390 px senza overflow.
  - Incremento PWA a `workout-v3`.
- **Rifinitura Calendario & Gestione Resume — Deploy v4 (2026-09-27) [Gemini 3.8 Flash]**:
  - Rimozione di pallini verdi (`.trained`) e puntini "oggi"; unico segno di evidenza ciano (`linear-gradient`) sul giorno selezionato.
  - Gestione cambio giorno automatica al ritorno dell'app in primo piano (`checkDateChangeOnResume` su `visibilitychange` e `focus`).
  - Incremento PWA a `workout-v4`.
- **Esercizio #32 Farmer's Walk & Riposo Attivo — Deploy v5 (2026-09-28) [Gemini 3.8 Flash]**:
  - Aggiunta nuovo esercizio Farmer's Walk (#32, gruppo "Riposo attivo", `farmer_walk.png`) con gestione campi durata minuti, carico e passi.
  - Gestione avanzata giorno di riposo: distinzione tra riposo dai pesi e riposo attivo, senza bloccare la registrazione delle attività.
  - Pulizia cartelle obsolete di lavorazione (`aggiornamento_chest`, `aggiornamento_shoulder`, `aggiornamento_legs`).
  - Incremento PWA a `workout-v5`.
