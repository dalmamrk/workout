# Progetto Workout - App Personale

Questo progetto è una web app personale a uso interno per la gestione e consultazione degli allenamenti. È progettata come un elenco rapido e interattivo di esercizi, diviso per gruppi muscolari. Non è pensata per il pubblico: viene pubblicata privatamente tramite GitHub Pages in modo da essere comodamente consultabile da smartphone (in stile app nativa) durante le sessioni di allenamento. 

Il design è basato su un tema dark (sfondo `#0d1117`), con illustrazioni vettoriali piatte e minimaliste per ogni esercizio, caratterizzate da colori accesi (neon cyan e neon green) su sfondo scuro, in pieno stile fitness app moderna.

## Ultime Azioni e Sviluppi (Agenti)

Di recente sono state eseguite le seguenti operazioni sul progetto:

1. **Integrazione Esercizi su Panca (Bench)**:
   - Aggiunti 15 nuovi esercizi da eseguire su panca (es. Dumbbell Bench Press, Incline Bicep Curl, Spider Curl, ecc.) mappati nei rispettivi gruppi muscolari nel file principale `ex.html`.
   - Creato un documento di riferimento (`prompt_immagini_panca.md`) per raggruppare i prompt per la generazione delle relative illustrazioni.

2. **Generazione e Ottimizzazione Immagini**:
   - Generate e convertite le illustrazioni vettoriali per i nuovi esercizi seguendo rigidamente lo stile visivo dell'app.
   - Collegati correttamente i file `.png` e `.jpg` all'interno della tabella HTML.
   - Corretto programmaticamente un difetto visivo sull'immagine del "Dumbbell Bench Press" (angoli bianchi) per renderla perfettamente integrata con il colore di sfondo `#0d1117`.

3. **Pulizia e Rinumerazione**:
   - Rimossi 10 esercizi (precedentemente richiesti) che non erano più necessari.
   - Eseguita una rinumerazione sequenziale di tutti gli esercizi rimasti nell'elenco, riordinandoli da `#1` a `#37` senza salti di numerazione.

4. **Aggiornamento Sezione Chest**:
   - Sostituiti tutti i precedenti esercizi della categoria "Petto" in `ex.html` con i 6 nuovi esercizi specificati in `aggiornamento_chest/testi_chest.rtf` (Neutral Close-Grip Dumbbell Press, Incline Dumbbell Press, Standard Dumbbell Press, Dumbbell Fly, Dumbbell Pullover, Reverse-Grip Dumbbell Press).
   - Analizzati e abbinati correttamente i file immagine da `aggiornamento_chest/`, risolvendo l'inversione di denominazione originaria tra `MOVE 3` (Standard Press) e `MOVE 4` (Dumbbell Fly).
   - Standardizzate tutte le 6 immagini alla dimensione uniforme di 444 × 540 pixel (eliminando bordi chiari/artefatti di crop) e salvate nella cartella di produzione `immagini/`.
   - Eseguita la rinumerazione progressiva continua di tutti gli esercizi della web app da `#1` a `#38`.

5. **Aggiornamento Sezione Spalle (Shoulder)**:
   - Sostituiti tutti i precedenti 7 esercizi della categoria "Spalle" in `ex.html` con i 6 nuovi esercizi specificati in `aggiornamento_shoulder/testi_shoulder.rtf` (Seated Side Lateral Raise, Seated Front Raise, Seated Shoulder Press, Seated Front Press, Seated Bent-Over Lateral Raise, Seated Arnold Press).
   - Analizzate e abbinate correttamente le 6 illustrazioni da `aggiornamento_shoulder/` verificando i movimenti (MOVE 1..6) e i rispettivi target deltoidi (lateral, front, rear).
   - Ritagliate le immagini preferibilmente dal fondo e rifilati i bordi laterali per rimuovere artefatti, uniformando tutte le 6 immagini alla dimensione identica di 440 × 492 pixel salvate in `immagini/`.
   - Eseguita la rinumerazione progressiva continua di tutti gli esercizi successivi (da Dorso a Glutei), portando il totale dell'elenco a 37 esercizi sequenziali da `#1` a `#37`.

6. **Rimozione Esercizi Richiesti e Rinumerazione**:
   - Rimossi da `ex.html` i 7 esercizi specificati (#13 Chair Dips, #17 Seated Dumbbell Overhead Extension, #24 One-Arm Dumbbell Row, #26 Dumbbell Pullover, #28 Chest-Supported Dumbbell Row, #32 Leg Raises, #35 Bench Step-Up).
   - Eseguita una rinumerazione sequenziale continua dell'elenco a 30 esercizi (#1..#30).

7. **Aggiornamento Sezione Gambe (Legs)**:
   - Sostituiti i precedenti esercizi della categoria "Gambe" in `ex.html` con i 5 nuovi esercizi specificati in `aggiornamento_legs/testi_legs.rtf` (Wide-Stance Goblet Squat, Narrow-Stance Goblet Squat, Standard-Stance Goblet Squat, Lying Leg Curl, Dumbbell Stiff-Leg Deadlift).
   - Analizzate e abbinate le illustrazioni da `aggiornamento_legs/`, ritagliando preferibilmente dal fondo per preservare i banner anatomici superiori e uniformando tutte e 5 le immagini alla dimensione identica di 618 × 718 pixel salvate in `immagini/`.
   - Rinumerati gli esercizi successivi (sezione Glutei), portando il totale dell'elenco a 33 esercizi sequenziali da `#1` a `#33` senza salti.

8. **Unificazione Categoria "Gambe e Glutei" e Rimozione Esercizio 32**:
   - Unificate le categorie e i pulsanti filtro "Gambe" e "Glutei" in un'unica sezione e tab denominata "Gambe e Glutei" sia nella barra dei filtri sia come badge degli esercizi.
   - Rimosso l'esercizio #32 (Dumbbell Sumo Squat) e mantenuto l'esercizio #33 (Dumbbell Bench Hip Thrust), ora rinumerato come `#32`.
   - Totale finale complessivo degli esercizi della web app: 32 esercizi sequenziali da `#1` a `#32`.

9. **Aggiornamento Esercizio #13 (Triceps Overhead DB Extension)**:
   - Rinomina dell'esercizio #13 in "Triceps Overhead DB Extension".
   - Collegata la nuova immagine `immagini/1_triceps_Overhead_DB_Tricep_Extension.png`.
   - Adattata la descrizione per specificare l'esecuzione da seduti su panca con schienale verticale a 90°.

10. **Rimozione Esercizio #12 (Dumbbell Spider Curl)**:
    - Rimosso l'esercizio #12 (Dumbbell Spider Curl) dalla sezione Bicipiti in `ex.html`.
    - Rinumerati tutti i successivi esercizi da `#13` a `#32`, scalati di -1 per una nuova numerazione sequenziale continua da `#1` a `#31`.

11. **Deploy GitHub Pages e Protezione De-indicizzazione**:
    - Rimosso `ex.html` dal `.gitignore` e pubblicato sul repository GitHub remoto con tutte le 31 immagini di produzione.
    - Mantenuto `index.html` come pagina iniziale e reso accessibile l'elenco completo aggiornato su `ex.html`.
    - Aggiunto `robots.txt` (`Disallow: /`) e inseriti meta tag `robots` e `googlebot` (`noindex, nofollow, noarchive, nosnippet, noimageindex`) sia in `ex.html` che in `index.html` per impedire totalmente l'indicizzazione nei motori di ricerca.
    - Pulito il repository da file/cartelle non necessari (`aggiornamento_*`, `prompt_*`, `scheda/`, `.zcode/`), mantenendo su GitHub solo i file statici essenziali per il sito.

12. **Aggiornamento Logica Tracking e Sincronizzazione DB in `index.html`**:
    - Sostituito il vecchio database degli esercizi a corpo libero in `index.html` con la lista aggiornata di 31 esercizi derivati da `ex.html`.
    - Eliminata la logica dei giorni di riposo programmati e bloccati (es. mercoledì/domenica).
    - Introdotta un'interfaccia giornaliera aperta ("Filtra & Spunta") che permette di scegliere e tracciare liberamente gli esercizi eseguiti ogni giorno.
    - Aggiunto il pulsante manuale per marcare esplicitamente una giornata come "Giorno di Riposo" con salvataggio dello stato nel localStorage.
    - Ricalibrata la dashboard delle statistiche e dell'Aderenza in base alla nuova impostazione dinamica e ai giorni liberi.

13. **Implementazione Persistenza Dati e Cloud Sync Stubs**:
    - Riscritta interamente la sezione script di `index.html` per risolvere bug critici legati al precedente refactoring (costanti mancanti e logica calendario rotta).
    - Riparate e predisposte come "stub" (no-op pronti per Firebase) le funzioni `cloudPull` e `scheduleCloudPush`.
    - Modificata la logica delle statistiche rimuovendo completamente i riferimenti residui a `WEEK_PLAN`.
    - Implementato un sistema di Export/Import in formato JSON per i dati archiviati (storico allenamenti e passi), permettendo backup manuali e trasferimento tra dispositivi.
    - Aggiornati i badge CSS e i filtri unificando la categoria "Gambe e Glutei".
