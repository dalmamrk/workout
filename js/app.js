/* =========================================================
           DATABASE ESERCIZI (asset riusabile)
           ========================================================= */
        const EXERCISES = {
            // Petto
            "neutral_close_grip_dumbbell_press": { id: "neutral_close_grip_dumbbell_press", name: "Neutral Close-Grip Dumbbell Press", muscleGroup: "Petto", sets: "3-4", description: "Spingendo i manubri uniti con presa neutra verso l'alto, si stimola la parte interna del petto (inner chest)." },
            "incline_dumbbell_press": { id: "incline_dumbbell_press", name: "Incline Dumbbell Press", muscleGroup: "Petto", sets: "3-4", description: "Spingendo i manubri verso l'alto su una panca inclinata, si stimola la parte superiore del petto (upper chest)." },
            "standard_dumbbell_press": { id: "standard_dumbbell_press", name: "Standard Dumbbell Press", muscleGroup: "Petto", sets: "3-4", description: "Abbassando i manubri ai lati del petto su una panca piana e spingendoli verso l'alto, si stimola l'intero petto (chest overall)." },
            "dumbbell_fly": { id: "dumbbell_fly", name: "Dumbbell Fly", muscleGroup: "Petto", sets: "3-4", description: "Aprendo e chiudendo le braccia con un arco controllato su panca piana, si stimola il petto (inner chest)." },
            "dumbbell_pullover": { id: "dumbbell_pullover", name: "Dumbbell Pullover", muscleGroup: "Petto", sets: "3-4", description: "Portando il manubrio oltre la testa e risollevandolo con un arco teso, si stimolano il petto e il dorso (chest + lats)." },
            "reverse_grip_dumbbell_press": { id: "reverse_grip_dumbbell_press", name: "Reverse-Grip Dumbbell Press", muscleGroup: "Petto", sets: "3-4", description: "Afferrando i manubri con presa inversa e spingendoli verso l'alto, si stimola la parte superiore del petto (upper chest)." },
            "dumbbell_floor_press": { id: "dumbbell_floor_press", name: "Dumbbell Floor Press", muscleGroup: "Petto", sets: "3-4", description: "Disteso supino sul tappetino, spingendo i manubri verso l'alto fino a distendere le braccia. Il pavimento limita il range di movimento, proteggendo le spalle." },
            // Bicipiti
            "bicep_curl": { id: "bicep_curl", name: "Dumbbell Bicep Curl", muscleGroup: "Bicipiti", sets: "3-4", description: "Flessione delle braccia in piedi o seduti sulla sedia, eseguendo una supinazione (rotazione del polso verso l'esterno) durante la fase di salita." },
            "hammer_curl": { id: "hammer_curl", name: "Dumbbell Hammer Curl", muscleGroup: "Bicipiti", sets: "3-4", description: "Curl a martello. Flessione delle braccia mantenendo i palmi delle mani sempre rivolti l'uno verso l'altro (presa neutra) durante tutto il movimento." },
            "alternating_curl": { id: "alternating_curl", name: "Alternating Dumbbell Curl", muscleGroup: "Bicipiti", sets: "3-4", description: "Curl classico eseguito alternando in modo fluido il braccio destro e il braccio sinistro a ogni ciclo." },
            "cross_body_curl": { id: "cross_body_curl", name: "Cross Body Hammer Curl", muscleGroup: "Bicipiti", sets: "3-4", description: "In piedi, afferra i manubri con presa neutra. Fletti un braccio portando il manubrio verso la spalla opposta, incrociando il petto. Ritorna lentamente alla posizione di partenza e alterna le braccia." },
            "incline_bicep_curl": { id: "incline_bicep_curl", name: "Incline Dumbbell Bicep Curl", muscleGroup: "Bicipiti", sets: "3-4", description: "Panca a 45-60°. Seduto, esegui il classico curl con manubri. La posizione del braccio dietro la linea del busto garantisce il massimo allungamento del capo lungo del bicipite." },
            "spider_curl": { id: "spider_curl", name: "Spider Curl", muscleGroup: "Bicipiti", sets: "3-4", description: "Appoggiando il petto sullo schienale della panca inclinata a 45° e flettendo le braccia a penzoloni, si massimizza il picco del bicipite azzerando il cheating." },
            // Tricipiti
            "1_triceps_Overhead_DB_Tricep_Extension": { id: "1_triceps_Overhead_DB_Tricep_Extension", name: "Triceps Overhead DB Extension", muscleGroup: "Tricipiti", sets: "3-4", description: "Estensioni dietro la nuca su panca. Seduto sulla panca con schienale verticale a 90° per stabilizzare la schiena, afferra il manubrio con entrambe le mani sopra la testa. Fletti i gomiti portando il peso dietro la nuca per il massimo allungamento, poi distendi le braccia verso l'alto contraendo i tricipiti." },
            "tricep_kickback": { id: "tricep_kickback", name: "Dumbbell Tricep Kickback", muscleGroup: "Tricipiti", sets: "3-4", description: "Busto flesso in avanti quasi parallelo al pavimento. Mantieni il braccio adeso al fianco e il gomito alto e immobile; estendi completamente l'avambraccio all'indietro." },
            "lying_triceps_extension": { id: "lying_triceps_extension", name: "Lying Dumbbell Triceps Extension", muscleGroup: "Tricipiti", sets: "3-4", description: "Su panca piana. Sdraiato, tieni i manubri con le braccia tese verso l'alto. Piega solo i gomiti portando i pesi ai lati della testa, poi distendi verso il soffitto." },
            "tate_press": { id: "tate_press", name: "Tate Press", muscleGroup: "Tricipiti", sets: "3-4", description: "Su panca piana. Sdraiato, con i manubri sopra il petto e i palmi rivolti in avanti, fletti i gomiti verso l'esterno portando i pesi a toccare il petto, poi distendi verso l'alto." },
            // Spalle
            "seated_side_lateral_raise": { id: "seated_side_lateral_raise", name: "Seated Side Lateral Raise", muscleGroup: "Spalle", sets: "3-4", description: "Sedendosi su una panca per bloccare il busto e sollevando i manubri lateralmente, si stimola il lateral delts." },
            "seated_front_raise": { id: "seated_front_raise", name: "Seated Front Raise", muscleGroup: "Spalle", sets: "3-4", description: "Sedendosi su una panca per bloccare il busto e sollevando i manubri in avanti fino all'altezza delle spalle, si stimola il front delts." },
            "seated_shoulder_press": { id: "seated_shoulder_press", name: "Seated Shoulder Press", muscleGroup: "Spalle", sets: "3-4", description: "Fissando la schiena alla panca e spingendo i manubri dall'altezza delle spalle fin sopra la testa, si stimolano il front delts e il lateral delts." },
            "seated_front_press": { id: "seated_front_press", name: "Seated Front Press", muscleGroup: "Spalle", sets: "3-4", description: "Riunendo i manubri davanti al petto e spingendoli in avanti e verso l'alto, si stimola il front delts." },
            "seated_bent_over_lateral_raise": { id: "seated_bent_over_lateral_raise", name: "Seated Bent-Over Lateral Raise", muscleGroup: "Spalle", sets: "3-4", description: "Inclinando il busto in avanti e sollevando i manubri lateralmente, si stimola il rear delts." },
            "seated_arnold_press": { id: "seated_arnold_press", name: "Seated Arnold Press", muscleGroup: "Spalle", sets: "3-4", description: "Ruotando i manubri verso l'esterno partendo da davanti al viso e spingendoli sopra la testa, si stimolano il front delts e il lateral delts." },
            "dumbbell_shrugs": { id: "dumbbell_shrugs", name: "Dumbbell Shrugs (Scrollate)", muscleGroup: "Spalle", sets: "3-4", description: "In piedi con i manubri lungo i fianchi. Sollevando le spalle verso le orecchie in modo controllato e mantenendo le braccia tese, si stimolano i trapezi." },
            // Dorso
            "bent_over_row": { id: "bent_over_row", name: "Dumbbell Bent-Over Row", muscleGroup: "Dorso", sets: "3-4", description: "Rematore bilaterale. In piedi con il busto flesso in avanti a 45° e ginocchia leggermente piegate. Tira entrambi i manubri contemporaneamente verso la pancia mantenendo i gomiti stretti." },
            "one_arm_bench_row": { id: "one_arm_bench_row", name: "One-Arm Dumbbell Bench Row", muscleGroup: "Dorso", sets: "3-4", description: "Appoggia un ginocchio e la mano dello stesso lato sulla panca piana. Con la schiena parallela al pavimento, tira il manubrio verso l'anca opposta portando il gomito in alto." },
            "chest_supported_row": { id: "chest_supported_row", name: "Chest-Supported Dumbbell Row", muscleGroup: "Dorso", sets: "3-4", description: "Appoggiando il petto sulla panca inclinata a 45° e tirando i manubri verso l'addome, si isola la schiena scaricando completamente la zona lombare." },
            // Core
            "crunches": { id: "crunches", name: "Crunches", muscleGroup: "Core", sets: "3-4", description: "Disteso supino sul tappetino con le ginocchia piegate e i piedi a terra. Solleva solo la parte superiore della schiena e le scapole, concentrando la contrazione sull'addome." },
            "plank": { id: "plank", name: "Plank", muscleGroup: "Core", sets: "3-4", description: "Tenuta isometrica. Appoggia gli avambracci e le punte dei piedi sul tappetino. Mantieni il corpo perfettamente in linea come una tavola, attivando addome e glutei." },
            "russian_twists": { id: "russian_twists", name: "Russian Twists", muscleGroup: "Core", sets: "3-4", description: "Seduto sul tappetino, busto inclinato all'indietro a 45 gradi. Ruota il torace e le spalle da un lato all'altro in modo controllato (opzionale: impugna un manubrio per aumentare il carico)." },
            "lying_leg_raises": { id: "lying_leg_raises", name: "Lying Leg Raises", muscleGroup: "Core", sets: "3-4", description: "Disteso supino sul tappetino con le gambe tese. Sollevando le gambe unite fino a 90° e abbassandole lentamente senza toccare terra, si stimola la parte inferiore dell'addome." },
            // Gambe e Glutei
            "wide_stance_goblet_squat": { id: "wide_stance_goblet_squat", name: "Wide-Stance Goblet Squat", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Sedendosi e alzandosi con i piedi ampiamente distanziati, si stimolano gli adductors." },
            "narrow_stance_goblet_squat": { id: "narrow_stance_goblet_squat", name: "Narrow-Stance Goblet Squat", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Sedendosi e alzandosi con i piedi ravvicinati, si stimola il vastus lateralis." },
            "standard_stance_goblet_squat": { id: "standard_stance_goblet_squat", name: "Standard-Stance Goblet Squat", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Sedendosi e alzandosi con i piedi a larghezza standard, si stimolano le legs overall." },
            "dumbbell_stiff_leg_deadlift": { id: "dumbbell_stiff_leg_deadlift", name: "Dumbbell Stiff-Leg Deadlift", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Piegando leggermente le ginocchia, portando il bacino all'indietro, abbassando i manubri e poi ritornando su, si stimolano gli hamstrings e i glutes." },
            "Dumbbell_Bench_Hip_Thrust": { id: "Dumbbell_Bench_Hip_Thrust", name: "Dumbbell Bench Hip Thrust", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Siediti a terra appoggiando solo la parte alta della schiena sul lato lungo della panca piana. Posiziona un manubrio sul bacino e spingi i glutei verso l'alto fino ad allineare busto e cosce." },
            "dumbbell_lunges": { id: "dumbbell_lunges", name: "Dumbbell Lunges", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Eseguendo un passo in avanti e piegando entrambe le ginocchia a 90° con i manubri lungo i fianchi, si stimolano i quadricipiti e i glutei." },
            "bulgarian_split_squat": { id: "bulgarian_split_squat", name: "Bulgarian Split Squat", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "Appoggiando il collo del piede posteriore sulla panca e scendendo in affondo con la gamba anteriore, si massimizza il lavoro monolaterale su legs e glutei." },
            "standing_calf_raises": { id: "standing_calf_raises", name: "Standing Calf Raises", muscleGroup: "Gambe e Glutei", sets: "3-4", description: "In piedi con i manubri lungo i fianchi. Sollevandosi sulle punte dei piedi in modo esplosivo e scendendo lentamente, si stimolano i polpacci." },
            // Riposo attivo
            "farmer_walk": { id: "farmer_walk", name: "Farmer's Walk", muscleGroup: "Riposo attivo", sets: "2-4", restDayOnly: true, fields: [{ key: "minutes", label: "min" }, { key: "weight", label: "kg" }, { key: "steps", label: "passi" }], description: "Esercizio di riposo attivo, da fare nei giorni senza pesi. In piedi, un manubrio pesante per mano con presa neutra e braccia distese lungo i fianchi. Cammina a passi corti e controllati per il tempo scelto, busto eretto, spalle basse e indietro, addome contratto, senza far oscillare i manubri. Allena la presa e gli avambracci, i trapezi e la stabilità del core." }
        };

        /* =========================================================
           COSTANTI E UTILITY
           ========================================================= */
        const WEEKDAY_NAMES = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
        const MONTH_NAMES = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        const ISO_TO_WEEKDAY = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
        const GROUPS = ["Tutti", "Petto", "Bicipiti", "Tricipiti", "Spalle", "Dorso", "Core", "Gambe e Glutei", "Riposo attivo"];

        const ICON_PASSI_SVG = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 14.9 C2.9 13.7 3.4 12.8 4.4 12.4 C5.1 12.1 6 12.2 6.9 12.5 C7.8 11.6 8.6 9.6 9.6 7.9 C10.2 6.7 11.1 5.8 12.2 5.7 C13.4 5.6 14.4 6.5 15.1 7.8 C15.9 9.1 17.2 10.1 19 10.8 C20.4 11.3 21 12.2 21.3 13.6 L21.5 15.2 C21.7 16.2 21 16.8 20.2 17.1 C19.3 17.5 18.1 17.8 16.7 17.8 H5.2 C4 17.8 3.1 17.1 3 16.1 C2.9 15.7 2.9 15.3 3 14.9 Z"/><path d="M4.3 16.2 C8 16.9 15.5 17.1 19.8 16.1"/><path class="accent" d="M10.2 8.7 12.6 9.4 10.9 10.2 13.2 10.9" stroke="#FF7A1A" stroke-width="1.5"/></svg>`;
        const ICON_RIPOSO_SVG = `<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="7" width="15" height="10" rx="2"/><path d="M19 10h1.5v4H19"/><path class="accent" d="M13.4 8.4 9.6 12.8h2.6L10.8 16l4.5-5.2h-2.5z" fill="#FF7A1A" stroke="none"/></svg>`;

        let selectedDate = '';

        function toISO(d) {
            const y = d.getFullYear();
            const m = String(d.getMonth() + 1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${day}`;
        }

        /* =========================================================
           STORAGE (localStorage centralizzato)
           Unica lettura: loadLog()/loadSteps(); unica scrittura:
           saveLog()/saveStepsData(). Se il JSON è corrotto la pagina
           non si rompe: il valore originale viene copiato in
           <chiave>_corrupt_<timestamp>, compare un messaggio leggibile
           e la lettura torna {} (l'utente può recuperare dal backup).
           ========================================================= */
        const _storageWarned = { wlog: false, steps_history: false };

        function warnStorageError(key, err) {
            console.error('[Storage] JSON corrotto in ' + key + ':', err);
            if (!_storageWarned[key]) {
                _storageWarned[key] = true;
                const status = document.getElementById('data-status');
                if (status) {
                    status.textContent = '⚠️ Dati locali (' + key + ') non leggibili: l\'originale è salvato in ' + key + '_corrupt_<data>. Esporta i dati che recuperi e reimportali.';
                    status.style.color = '#e3b341';
                }
            }
        }

        function loadLog() {
            const data = localStorage.getItem('wlog');
            if (!data) return {};
            try { return JSON.parse(data); }
            catch (err) {
                const ts = new Date().toISOString().replace(/[:.]/g, '-');
                try { localStorage.setItem('wlog_corrupt_' + ts, data); } catch (_) {}
                warnStorageError('wlog', err);
                return {};
            }
        }

        function saveLog(log) {
            localStorage.setItem('wlog', JSON.stringify(log));
        }

        function loadSteps() {
            const data = localStorage.getItem('steps_history');
            if (!data) return {};
            try { return JSON.parse(data); }
            catch (err) {
                const ts = new Date().toISOString().replace(/[:.]/g, '-');
                try { localStorage.setItem('steps_history_corrupt_' + ts, data); } catch (_) {}
                warnStorageError('steps_history', err);
                return {};
            }
        }

        function saveStepsData(history) {
            localStorage.setItem('steps_history', JSON.stringify(history));
        }

        /* =========================================================
           PROGRESSIONE & STATO ESERCIZIO (Fase 2 - Modello Dati)
           Helper unico isDone() per compatibilità con true storico
           e con il nuovo oggetto { done, sets, note }.
           is_rest è chiave riservata e non viene mai trattata come esercizio.
           ========================================================= */
        function isDone(entry) {
            return entry === true || entry?.done === true;
        }

        function countDoneExercises(dayLog) {
            if (!dayLog || dayLog.is_rest) return 0;
            return Object.keys(dayLog).filter(k => {
                if (k === 'is_rest') return false;
                if (typeof EXERCISES !== 'undefined') {
                    if (!EXERCISES[k]) return false;
                    if (EXERCISES[k].restDayOnly) return false;
                }
                return isDone(dayLog[k]);
            }).length;
        }

        function getEntry(iso, id) {
            if (!iso || !id || id === 'is_rest') return null;
            const log = loadLog();
            const day = log[iso];
            if (!day) return null;
            if (day.is_rest) {
                const isRestOnly = (typeof EXERCISES !== 'undefined' && EXERCISES[id]?.restDayOnly);
                if (!isRestOnly) return null;
            }
            return day[id] !== undefined ? day[id] : null;
        }

        function setEntry(iso, id, entryData) {
            if (!iso || !id || id === 'is_rest') return;
            const log = loadLog();
            if (!log[iso]) log[iso] = {};

            const isRestOnly = (typeof EXERCISES !== 'undefined' && EXERCISES[id]?.restDayOnly);

            if (log[iso].is_rest) {
                if (!isRestOnly) {
                    if (typeof confirm === 'function') {
                        const ok = confirm("Rimuovere il giorno di riposo e registrare l'esercizio?");
                        if (!ok) return false;
                    }
                    delete log[iso].is_rest;
                }
            }

            if (entryData == null) {
                delete log[iso][id];
            } else {
                log[iso][id] = entryData;
            }

            if (Object.keys(log[iso]).length === 0) {
                delete log[iso];
            }

            saveLog(log);
            return true;
        }

        function getDefaultSetsCount(exercise) {
            if (!exercise || !exercise.sets) return 3;
            const m = String(exercise.sets).match(/\d+/);
            return m ? parseInt(m[0], 10) : 3;
        }

        function getLastExerciseExecution(exerciseId, beforeIso) {
            if (!exerciseId) return null;
            const log = loadLog();
            const isRestOnly = (typeof EXERCISES !== 'undefined' && EXERCISES[exerciseId]?.restDayOnly);
            const dates = Object.keys(log)
                .filter(d => (!beforeIso || d < beforeIso) && log[d] && (!log[d].is_rest || isRestOnly) && log[d][exerciseId])
                .sort()
                .reverse();
            for (const d of dates) {
                const entry = log[d][exerciseId];
                if (entry && typeof entry === 'object' && Array.isArray(entry.sets) && entry.sets.length > 0) {
                    const hasData = entry.sets.some(s => (s && Object.values(s).some(v => v != null && v !== '')));
                    if (hasData) {
                        return { date: d, entry, exerciseId };
                    }
                }
            }
            return null;
        }

        function formatSetSummary(s, exercise) {
            if (!s) return '';
            if (exercise && exercise.fields && Array.isArray(exercise.fields)) {
                const parts = [];
                exercise.fields.forEach(f => {
                    const val = s[f.key];
                    if (val != null && val !== '') {
                        if (f.key === 'steps') {
                            const num = parseInt(String(val).replace(/\D/g, ''), 10);
                            const formatted = !isNaN(num) ? String(num).replace(/\B(?=(\d{3})+(?!\d))/g, '.') : val;
                            parts.push(`${formatted} ${f.label}`);
                        } else {
                            parts.push(`${val} ${f.label}`);
                        }
                    }
                });
                return parts.join(' · ');
            }
            if (s.weight != null && s.weight !== '' && s.reps != null && s.reps !== '') {
                return `${s.weight} kg × ${s.reps}`;
            } else if (s.weight != null && s.weight !== '') {
                return `${s.weight} kg`;
            } else if (s.reps != null && s.reps !== '') {
                return `${s.reps} rip`;
            }
            return '';
        }

        function formatLastExecutionHint(lastExec, exercise) {
            if (!lastExec || !lastExec.entry || !Array.isArray(lastExec.entry.sets)) return '';
            const ex = exercise || (typeof EXERCISES !== 'undefined' ? (EXERCISES[lastExec.exerciseId] || (lastExec.entry.exerciseId ? EXERCISES[lastExec.entry.exerciseId] : null)) : null);
            const parts = lastExec.entry.sets
                .map(s => formatSetSummary(s, ex))
                .filter(Boolean);
            if (parts.length === 0) return '';
            return `Ultima volta (${lastExec.date}): ${parts.join(', ')}`;
        }

        /* =========================================================
           BACKUP LOCALE AUTOMATICO (wlog_backup)
           Snapshot {at, log, steps}: mantiene solo gli ultimi 3,
           con limite indicativo di ~500 KB totali (scarta dal più
           vecchio). Chiamato prima di ogni import e al massimo una
           volta al giorno all'avvio (marker wlog_backup_last_day).
           ========================================================= */
        const BACKUP_KEY = 'wlog_backup';
        const BACKUP_MAX = 3;
        const BACKUP_MAX_BYTES = 512 * 1024;

        function takeBackup() {
            try {
                const log = loadLog();
                const steps = loadSteps();
                if (Object.keys(log).length === 0 && Object.keys(steps).length === 0) return;
                let backups = [];
                const raw = localStorage.getItem(BACKUP_KEY);
                if (raw) { try { backups = JSON.parse(raw); } catch (_) { backups = []; } }
                if (!Array.isArray(backups)) backups = [];
                backups.push({ at: new Date().toISOString(), log: log, steps: steps });
                while (backups.length > BACKUP_MAX) backups.shift();
                while (backups.length > 1 && JSON.stringify(backups).length > BACKUP_MAX_BYTES) backups.shift();
                localStorage.setItem(BACKUP_KEY, JSON.stringify(backups));
            } catch (err) {
                console.error('[Backup] Errore durante lo snapshot:', err);
            }
        }

        function maybeDailyBackup() {
            const today = toISO(new Date());
            if (localStorage.getItem('wlog_backup_last_day') === today) return;
            try { takeBackup(); } catch (_) {}
            try { localStorage.setItem('wlog_backup_last_day', today); } catch (_) {}
        }

        function getBackupSnapshots() {
            try {
                const raw = localStorage.getItem(BACKUP_KEY);
                if (!raw) return [];
                const parsed = JSON.parse(raw);
                return Array.isArray(parsed) ? parsed : [];
            } catch (_) {
                return [];
            }
        }

        function restoreBackupSnapshot(index) {
            const snapshots = getBackupSnapshots();
            if (index < 0 || index >= snapshots.length) return false;
            const snap = snapshots[index];
            if (!snap) return false;

            // Salva backup dello stato corrente prima di sovrascrivere
            takeBackup();

            saveLog(snap.log || {});
            saveStepsData(snap.steps || {});
            return true;
        }

        function getExerciseHistory(exerciseId, beforeIso, limit = 5) {
            if (!exerciseId) return [];
            const log = loadLog();
            const ex = (typeof EXERCISES !== 'undefined' ? EXERCISES[exerciseId] : null);
            const isRestOnly = ex?.restDayOnly;
            const dates = Object.keys(log)
                .filter(d => (!beforeIso || d < beforeIso) && log[d] && (!log[d].is_rest || isRestOnly) && log[d][exerciseId] !== undefined)
                .sort()
                .reverse();

            const history = [];
            for (const d of dates) {
                if (history.length >= limit) break;
                const entry = log[d][exerciseId];
                let summary = '';
                if (entry && typeof entry === 'object' && Array.isArray(entry.sets) && entry.sets.length > 0) {
                    const parts = entry.sets
                        .map(s => formatSetSummary(s, ex))
                        .filter(Boolean);
                    if (parts.length > 0) {
                        summary = parts.join(', ');
                    } else if (entry.done) {
                        summary = 'Fatto';
                    }
                } else if (isDone(entry)) {
                    summary = 'Fatto';
                }

                if (summary) {
                    history.push({ date: d, summary });
                }
            }
            return history;
        }

        /* [Punto d'aggancio Fase 4 — sincronizzazione reale]
           Gli stub scheduleCloudPush()/cloudPull() sono stati rimossi
           (non simulavano nulla e il polling fisso di 20s è eliminato).
           Qui andranno le funzioni di sync del provider scelto
           dall'utente: lettura al caricamento e al ritorno in
           foreground, niente setInterval. Finché non c'è, i dati
           restano solo su questo dispositivo (export/import JSON =
           piano di recupero). */

        /* =========================================================
           EXPORT / IMPORT DATI
           ========================================================= */
        function exportData() {
            const data = {
                version: 2,
                exported_at: new Date().toISOString(),
                workout_log: loadLog(),
                steps_history: loadSteps()
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `workout_backup_${toISO(new Date())}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);

            const status = document.getElementById('data-status');
            status.textContent = '✅ Dati esportati con successo!';
            status.style.color = '#56d364';
            setTimeout(() => { status.textContent = ''; }, 3000);
        }

        function importData(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const data = JSON.parse(e.target.result);

                    if (!data.workout_log && !data.steps_history) {
                        throw new Error('Formato non valido');
                    }

                    // Versione accettata: 2 (attuale) e 1 (storico); è ammessa anche
                    // l'assenza del campo. Versioni non intere o inferiori a 1: rifiuto.
                    if (data.version !== undefined && (!Number.isInteger(data.version) || data.version < 1)) {
                        throw new Error('Versione non supportata');
                    }

                    // Backup locale prima di ogni import (max 3 snapshot, ~500 KB totali)
                    takeBackup();

                    // Merge per data: le date diverse si uniscono sempre. Se la data è
                    // presente in entrambi e il contenuto differisce, si chiede una sola
                    // conferma riepilogativa (numero di date in conflitto) prima di
                    // sovrascrivere con i dati importati.
                    const currentLog = loadLog();
                    const currentSteps = loadSteps();

                    const logConflicts = new Set();
                    for (const d of Object.keys(data.workout_log || {})) {
                        if (currentLog[d] !== undefined && JSON.stringify(currentLog[d]) !== JSON.stringify(data.workout_log[d])) {
                            logConflicts.add(d);
                        }
                    }

                    const stepsConflicts = new Set();
                    for (const d of Object.keys(data.steps_history || {})) {
                        if (currentSteps[d] !== undefined && currentSteps[d] !== data.steps_history[d]) {
                            stepsConflicts.add(d);
                        }
                    }

                    const uniqueConflicts = [...new Set([...logConflicts, ...stepsConflicts])];

                    let overwriteConflicts = true;
                    if (uniqueConflicts.length > 0) {
                        overwriteConflicts = confirm(`Attenzione: rilevati conflitti in ${uniqueConflicts.length} data/e.\n\nOK = sovrascrivi le date in conflitto · Annulla = importa solo le date nuove\n\n(${uniqueConflicts.join(', ')})`);
                    }

                    // Se confermato (o nessun conflitto): sovrascrive anche le parti in conflitto.
                    // Se annullato: lascia intatta solo la parte in conflitto (log o steps) di quella data e unisce il resto.
                    const mergedLog = { ...currentLog };
                    const mergedSteps = { ...currentSteps };
                    let newDatesCount = 0;

                    const importedDates = [...new Set([
                        ...Object.keys(data.workout_log || {}),
                        ...Object.keys(data.steps_history || {})
                    ])];

                    for (const d of importedDates) {
                        if (currentLog[d] === undefined && currentSteps[d] === undefined) {
                            newDatesCount++;
                        }
                        if (data.workout_log && data.workout_log[d] !== undefined) {
                            if (overwriteConflicts || !logConflicts.has(d)) {
                                mergedLog[d] = data.workout_log[d];
                            }
                        }
                        if (data.steps_history && data.steps_history[d] !== undefined) {
                            if (overwriteConflicts || !stepsConflicts.has(d)) {
                                mergedSteps[d] = data.steps_history[d];
                            }
                        }
                    }

                    saveLog(mergedLog);
                    saveStepsData(mergedSteps);

                    if (uniqueConflicts.length > 0 && !overwriteConflicts) {
                        showImportStatus(`Import parziale: ${newDatesCount} date nuove unite, ${uniqueConflicts.length} date in conflitto lasciate invariate.`, '#e3b341');
                    } else {
                        showImportStatus('✅ Dati importati e uniti con successo!', '#56d364');
                    }

                    // Refresh UI
                    generateDays();
                    if (selectedDate) selectDate(selectedDate);
                } catch (err) {
                    showImportStatus('❌ Errore: file non valido.', '#ff7b72');
                }
            };
            reader.readAsText(file);
            event.target.value = ''; // reset per consentire reimportazione dello stesso file
        }

        function showImportStatus(text, color) {
            const status = document.getElementById('data-status');
            status.textContent = text;
            status.style.color = color;
            setTimeout(() => { status.textContent = ''; }, 3000);
        }

        /* =========================================================
           GIORNO DI RIPOSO
           ========================================================= */
        function toggleRestDay(iso) {
            const log = loadLog();
            if (!log[iso]) log[iso] = {};

            if (log[iso].is_rest) {
                // Togliere il riposo
                const restEntries = Object.keys(log[iso]).filter(k => {
                    if (k === 'is_rest') return false;
                    const ex = (typeof EXERCISES !== 'undefined' ? EXERCISES[k] : null);
                    if (!ex || !ex.restDayOnly) return false;
                    const entry = log[iso][k];
                    return isDone(entry) || (entry && typeof entry === 'object' && Array.isArray(entry.sets) && entry.sets.length > 0);
                });

                if (restEntries.length > 0) {
                    const n = restEntries.length;
                    const msg = n === 1
                        ? `Rimuovere 1 esercizio di riposo attivo e togliere riposo?`
                        : `Rimuovere ${n} esercizi di riposo attivo e togliere riposo?`;
                    if (!confirm(msg)) return;
                    restEntries.forEach(k => {
                        delete log[iso][k];
                    });
                }
                delete log[iso].is_rest;
                if (Object.keys(log[iso]).length === 0) delete log[iso];
            } else {
                // Attivare il riposo
                const weightsEntries = Object.keys(log[iso]).filter(k => {
                    if (k === 'is_rest') return false;
                    const ex = (typeof EXERCISES !== 'undefined' ? EXERCISES[k] : null);
                    if (ex && ex.restDayOnly) return false;
                    const entry = log[iso][k];
                    return isDone(entry) || (entry && typeof entry === 'object' && Array.isArray(entry.sets) && entry.sets.length > 0);
                });

                if (weightsEntries.length > 0) {
                    const n = weightsEntries.length;
                    const msg = `Rimuovere ${n} esercizi con i pesi e segnare riposo?`;
                    if (!confirm(msg)) return;
                    weightsEntries.forEach(k => {
                        delete log[iso][k];
                    });
                }
                log[iso].is_rest = true;
            }

            saveLog(log);

            const btn = document.querySelector(`.day-btn[data-date="${iso}"]`);
            if (btn) {
                if (log[iso] && log[iso].is_rest) {
                    btn.classList.add('rest');
                } else {
                    btn.classList.remove('rest');
                }
            }

            selectDate(iso);
        }

        /* =========================================================
           CALENDARIO (generazione bottoni giorno)
           ========================================================= */
        function getCalendarDates(refDate) {
            const base = refDate ? new Date(refDate) : new Date();
            const dates = [];
            for (let i = -3; i <= 0; i++) {
                const d = new Date(base);
                d.setDate(base.getDate() + i);
                dates.push(toISO(d));
            }
            return dates;
        }

        function generateDays() {
            const container = document.getElementById('days-container');
            container.innerHTML = '';
            const abbr = ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'];
            const today = new Date();
            const log = loadLog();

            // Mostra solo oggi e i 3 giorni precedenti (-3..0, nessuna data futura)
            const dates = getCalendarDates(today);
            dates.forEach(iso => {
                const d = new Date(iso + 'T12:00:00');
                const btn = document.createElement('button');
                btn.className = 'day-btn';
                btn.dataset.date = iso;

                if (log[iso] && log[iso].is_rest) {
                    btn.classList.add('rest');
                }

                btn.innerHTML = `${abbr[d.getDay()]}<span class="day-num">${d.getDate()}</span>`;
                btn.onclick = () => selectDate(iso);
                container.appendChild(btn);
            });
        }

        /* =========================================================
           TAB NAVIGATION
           ========================================================= */
        function switchTab(tabName) {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            document.querySelector(`.nav-tab[data-tab="${tabName}"]`).classList.add('active');

            document.getElementById('programma-section').style.display = 'none';
            document.getElementById('esercizi-section').style.display = 'none';
            document.getElementById('statistiche-section').style.display = 'none';

            document.getElementById(`${tabName}-section`).style.display = 'block';

            if (tabName === 'esercizi') {
                renderExerciseDatabase('tutti');
            } else if (tabName === 'statistiche') {
                switchStatsPeriod('settimana');
            }
        }

        /* =========================================================
           TAB PROGRAMMA — selectDate + card esercizi
           ========================================================= */
        function selectDate(iso) {
            selectedDate = iso;
            refreshStepsSection(iso);
            document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
            const btn = document.querySelector(`.day-btn[data-date="${iso}"]`);
            if (btn) btn.classList.add('active');

            document.getElementById('workout-container').style.display = 'block';

            const d = new Date(iso + 'T12:00:00');
            document.getElementById('day-title').textContent =
                `${WEEKDAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;

            const list = document.getElementById('exercises-list');
            list.innerHTML = '';

            const log = loadLog();
            const dayLog = log[iso] || {};

            if (dayLog.is_rest) {
                const restDoneCount = Object.keys(dayLog).filter(k => k !== 'is_rest' && EXERCISES[k]?.restDayOnly && isDone(dayLog[k])).length;
                document.getElementById('day-subtitle').textContent = restDoneCount > 0 ? `${restDoneCount} esercizio di riposo attivo completato` : 'Riposo dai pesi';
                let uiHTML = `
                  <div class="rest-day" style="text-align: center; margin-bottom: 20px;">
                    <div class="rest-emoji">${ICON_RIPOSO_SVG}</div>
                    <p class="rest-title">Riposo dai pesi</p>
                    <p class="rest-subtitle">Recupera le energie o dedicati al riposo attivo.</p>
                    <button class="db-filter-btn" style="margin-top:12px; border-color:#8b949e; color:#c9d1d9;" onclick="toggleRestDay('${iso}')">Annulla Riposo</button>
                  </div>
                  <div id="day-exercises-container"></div>
                `;
                list.innerHTML = uiHTML;
                const container = document.getElementById('day-exercises-container');
                Object.values(EXERCISES).forEach(exercise => {
                    if (exercise.restDayOnly) {
                        const done = isDone(dayLog[exercise.id]);
                        const card = buildWorkoutCard(exercise.id, iso, done);
                        container.appendChild(card);
                    }
                });
                return;
            }

            const doneCount = countDoneExercises(dayLog);
            document.getElementById('day-subtitle').textContent = `${doneCount} esercizi completati in questa giornata`;

            let uiHTML = `
                <div style="text-align:center; margin-bottom:20px;">
                   <button class="db-filter-btn btn-mark-rest" onclick="toggleRestDay('${iso}')">${ICON_RIPOSO_SVG} Segna come Giorno di Riposo</button>
                </div>
                <div id="day-filter-container" style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid #30363d;">
            `;

            GROUPS.filter(g => g !== 'Riposo attivo').forEach(g => {
                const isActive = g === 'Tutti' ? 'active' : '';
                uiHTML += `<button class="db-filter-btn day-group-btn ${isActive}" data-group="${g}" onclick="renderDayExercises('${iso}', '${g}')">${g}</button>`;
            });
            uiHTML += `</div><div id="day-exercises-container"></div>`;

            list.innerHTML = uiHTML;
            renderDayExercises(iso, 'Tutti');
        }

        function renderDayExercises(iso, groupFilter) {
            document.querySelectorAll('.day-group-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.group === groupFilter);
            });

            const container = document.getElementById('day-exercises-container');
            container.innerHTML = '';

            const log = loadLog();
            const dayLog = log[iso] || {};

            Object.values(EXERCISES).forEach(exercise => {
                if (exercise.restDayOnly) return;
                if (groupFilter !== 'Tutti' && exercise.muscleGroup !== groupFilter) return;
                const done = isDone(dayLog[exercise.id]);
                const card = buildWorkoutCard(exercise.id, iso, done);
                container.appendChild(card);
            });
        }

        function applySeriesCascadeLogic(rows, changedIdx, field, val) {
            if (changedIdx !== 0) {
                if (rows[changedIdx]) {
                    rows[changedIdx].touched = true;
                    rows[changedIdx][field] = val;
                }
                return rows;
            }
            rows.forEach((r, idx) => {
                if (idx === 0) {
                    r[field] = val;
                } else if (!r.touched) {
                    r[field] = val;
                }
            });
            return rows;
        }

        function addSeriesRowData(rows, fields) {
            const last = rows[rows.length - 1] || {};
            const newRow = { touched: false };
            if (fields && Array.isArray(fields) && fields.length > 0) {
                fields.forEach(f => {
                    newRow[f.key] = last[f.key] !== undefined ? last[f.key] : '';
                });
            } else {
                newRow.weight = last.weight !== undefined ? last.weight : '';
                newRow.reps = last.reps !== undefined ? last.reps : '';
            }
            return [...rows, newRow];
        }

        function renderSeriesRowsHTML(exerciseId, iso, sets) {
            const exercise = (typeof EXERCISES !== 'undefined' ? EXERCISES[exerciseId] : null);
            const fields = exercise?.fields;

            return sets.map((s, idx) => {
                let inputsHTML = '';
                if (fields && Array.isArray(fields) && fields.length > 0) {
                    inputsHTML = fields.map(f => {
                        const inputmode = f.inputmode || (f.key === 'steps' ? 'numeric' : 'decimal');
                        const val = s && s[f.key] != null ? s[f.key] : '';
                        return `
                            <div class="set-input-group">
                                <input type="text" inputmode="${inputmode}" class="set-input set-${f.key}" placeholder="${f.label}" value="${val}" onfocus="markRowTouched(this)" oninput="handleSeriesInput('${exerciseId}', '${iso}', this, '${f.key}')">
                                <span class="set-unit">${f.label}</span>
                            </div>
                        `;
                    }).join('');
                } else {
                    inputsHTML = `
                        <div class="set-input-group">
                            <input type="text" inputmode="decimal" class="set-input set-weight" placeholder="kg" value="${s && s.weight != null ? s.weight : ''}" onfocus="markRowTouched(this)" oninput="handleSeriesInput('${exerciseId}', '${iso}', this, 'weight')">
                            <span class="set-unit">kg</span>
                        </div>
                        <div class="set-input-group">
                            <input type="text" inputmode="numeric" class="set-input set-reps" placeholder="rip" value="${s && s.reps != null ? s.reps : ''}" onfocus="markRowTouched(this)" oninput="handleSeriesInput('${exerciseId}', '${iso}', this, 'reps')">
                            <span class="set-unit">rip</span>
                        </div>
                    `;
                }

                return `
                    <div class="set-row" data-set-index="${idx}" data-user-modified="false">
                        <span class="set-label">#${idx + 1}</span>
                        ${inputsHTML}
                    </div>
                `;
            }).join('');
        }

        function markRowTouched(inputEl) {
            if (!inputEl) return;
            const row = inputEl.closest ? inputEl.closest('.set-row') : null;
            if (row && parseInt(row.dataset.setIndex, 10) > 0) {
                row.dataset.userModified = 'true';
            }
        }

        function toggleSeriesAccordion(exerciseId, btn) {
            const acc = document.getElementById(`series-accordion-${exerciseId}`);
            if (!acc) return;
            const isHidden = acc.style.display === 'none' || acc.style.display === '';
            if (isHidden) {
                acc.style.display = 'block';
                btn.textContent = 'Serie ▴';
            } else {
                acc.style.display = 'none';
                btn.textContent = 'Serie ▾';
            }
        }

        function addSetRow(exerciseId, iso) {
            const list = document.getElementById(`series-list-${exerciseId}`);
            if (!list) return;
            const rows = list.querySelectorAll('.set-row');
            const newIdx = rows.length;
            const lastRow = rows[newIdx - 1];

            const exercise = (typeof EXERCISES !== 'undefined' ? EXERCISES[exerciseId] : null);
            const fields = exercise?.fields;

            let inputsHTML = '';
            if (fields && Array.isArray(fields) && fields.length > 0) {
                inputsHTML = fields.map(f => {
                    const prevVal = lastRow ? (lastRow.querySelector(`.set-${f.key}`)?.value || '') : '';
                    const inputmode = f.inputmode || (f.key === 'steps' ? 'numeric' : 'decimal');
                    return `
                        <div class="set-input-group">
                            <input type="text" inputmode="${inputmode}" class="set-input set-${f.key}" placeholder="${f.label}" value="${prevVal}" onfocus="markRowTouched(this)" oninput="handleSeriesInput('${exerciseId}', '${iso}', this, '${f.key}')">
                            <span class="set-unit">${f.label}</span>
                        </div>
                    `;
                }).join('');
            } else {
                const prevWeight = lastRow ? (lastRow.querySelector('.set-weight')?.value || '') : '';
                const prevReps = lastRow ? (lastRow.querySelector('.set-reps')?.value || '') : '';
                inputsHTML = `
                    <div class="set-input-group">
                        <input type="text" inputmode="decimal" class="set-input set-weight" placeholder="kg" value="${prevWeight}" onfocus="markRowTouched(this)" oninput="handleSeriesInput('${exerciseId}', '${iso}', this, 'weight')">
                        <span class="set-unit">kg</span>
                    </div>
                    <div class="set-input-group">
                        <input type="text" inputmode="numeric" class="set-input set-reps" placeholder="rip" value="${prevReps}" onfocus="markRowTouched(this)" oninput="handleSeriesInput('${exerciseId}', '${iso}', this, 'reps')">
                        <span class="set-unit">rip</span>
                    </div>
                `;
            }

            const row = document.createElement('div');
            row.className = 'set-row';
            row.dataset.setIndex = newIdx;
            row.dataset.userModified = 'false';
            row.innerHTML = `
                <span class="set-label">#${newIdx + 1}</span>
                ${inputsHTML}
            `;
            list.appendChild(row);
            saveSeriesFromUI(exerciseId, iso);
        }

        function removeSetRow(exerciseId, iso) {
            const list = document.getElementById(`series-list-${exerciseId}`);
            if (!list) return;
            const rows = list.querySelectorAll('.set-row');
            if (rows.length <= 1) return;
            list.removeChild(rows[rows.length - 1]);
            saveSeriesFromUI(exerciseId, iso);
        }

        let _seriesDebounceTimer = null;
        function handleSeriesInput(exerciseId, iso, inputEl, field) {
            if (inputEl && field) {
                const row = inputEl.closest ? inputEl.closest('.set-row') : null;
                const idx = row ? parseInt(row.dataset.setIndex, 10) : -1;
                if (idx > 0) {
                    row.dataset.userModified = 'true';
                } else if (idx === 0) {
                    const list = document.getElementById(`series-list-${exerciseId}`);
                    if (list) {
                        const rows = list.querySelectorAll('.set-row');
                        const newVal = inputEl.value;
                        for (let i = 1; i < rows.length; i++) {
                            const r = rows[i];
                            if (r.dataset.userModified !== 'true') {
                                const targetInput = r.querySelector(`.set-${field}`);
                                if (targetInput) {
                                    targetInput.value = newVal;
                                }
                            }
                        }
                    }
                }
            }

            clearTimeout(_seriesDebounceTimer);
            _seriesDebounceTimer = setTimeout(() => {
                saveSeriesFromUI(exerciseId, iso);
            }, 500);
        }

        function saveSeriesFromUI(exerciseId, iso) {
            const acc = document.getElementById(`series-accordion-${exerciseId}`);
            if (!acc) return;

            const currentEntry = getEntry(iso, exerciseId);
            const done = isDone(currentEntry);

            const exercise = (typeof EXERCISES !== 'undefined' ? EXERCISES[exerciseId] : null);
            const fields = exercise?.fields;

            const rows = acc.querySelectorAll('.set-row');
            const sets = [];
            rows.forEach(r => {
                if (fields && Array.isArray(fields) && fields.length > 0) {
                    const setObj = {};
                    let hasAnyVal = false;
                    fields.forEach(f => {
                        const valStr = r.querySelector(`.set-${f.key}`)?.value.trim();
                        if (valStr != null && valStr !== '') {
                            hasAnyVal = true;
                            if (f.key === 'steps') {
                                const parsedSteps = parseInt(valStr.replace(/\D/g, ''), 10);
                                setObj[f.key] = !isNaN(parsedSteps) ? parsedSteps : valStr;
                            } else {
                                const parsedNum = parseFloat(valStr.replace(',', '.'));
                                setObj[f.key] = !isNaN(parsedNum) ? parsedNum : valStr;
                            }
                        } else {
                            setObj[f.key] = null;
                        }
                    });
                    if (hasAnyVal) {
                        sets.push(setObj);
                    }
                } else {
                    const wVal = r.querySelector('.set-weight')?.value.trim();
                    const rVal = r.querySelector('.set-reps')?.value.trim();
                    const hasW = (wVal != null && wVal !== '');
                    const hasR = (rVal != null && rVal !== '');
                    if (!hasW && !hasR) return; // Scarta righe con peso e reps entrambi vuoti

                    const weight = hasW ? (parseFloat(wVal.replace(',', '.')) || wVal) : null;
                    const reps = hasR ? (parseInt(rVal, 10) || rVal) : null;
                    sets.push({ weight, reps });
                }
            });

            const noteVal = acc.querySelector('.set-note-input')?.value.trim() || '';

            if (!done && sets.length === 0 && !noteVal) {
                setEntry(iso, exerciseId, null);
            } else {
                setEntry(iso, exerciseId, {
                    done: done,
                    sets: sets,
                    note: noteVal
                });
            }
        }

        function renderExerciseHistoryHTML(history) {
            if (!history || history.length === 0) {
                return '<div class="series-history-empty">Nessun allenamento precedente registrato.</div>';
            }
            return `
                <div class="series-history">
                    <div class="series-history-title">Ultime esecuzioni</div>
                    <div class="series-history-list">
                        ${history.map(item => `
                            <div class="series-history-item">
                                <span class="series-history-date">${item.date}</span>
                                <span class="series-history-data">${item.summary}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        function showBackupList() {
            const container = document.getElementById('backup-list-container');
            if (!container) return;
            const isHidden = container.style.display === 'none' || container.style.display === '';
            if (!isHidden) {
                container.style.display = 'none';
                return;
            }

            const snapshots = getBackupSnapshots();
            if (snapshots.length === 0) {
                container.innerHTML = '<div style="font-size:0.85rem; color:#8b949e; text-align:center; padding:10px;">Nessun backup automatico disponibile.</div>';
                container.style.display = 'block';
                return;
            }

            let html = '<div style="font-size:0.85rem; font-weight:700; color:#e6edf3; margin-bottom:8px;">Seleziona uno snapshot da ripristinare:</div>';
            html += '<div style="display:flex; flex-direction:column; gap:8px;">';

            snapshots.slice().reverse().forEach((snap, reverseIdx) => {
                const actualIdx = snapshots.length - 1 - reverseIdx;
                const dt = new Date(snap.at);
                const dtStr = isNaN(dt.getTime()) ? snap.at : dt.toLocaleString('it-IT');
                const countEx = Object.keys(snap.log || {}).length;
                const countSteps = Object.keys(snap.steps || {}).length;
                html += `
                    <div style="display:flex; align-items:center; justify-content:space-between; gap:8px; padding:10px; background:#0d1117; border:1px solid #30363d; border-radius:8px;">
                        <div>
                            <div style="font-size:0.85rem; font-weight:600; color:#e6edf3;">${dtStr}</div>
                            <div style="font-size:0.75rem; color:#8b949e;">${countEx} date allenamento · ${countSteps} date passi</div>
                        </div>
                        <button type="button" class="set-action-btn" style="flex:none; padding:8px 14px; min-height:44px; color:#58a6ff;" onclick="confirmRestoreBackup(${actualIdx})">Ripristina</button>
                    </div>
                `;
            });
            html += '</div>';

            container.innerHTML = html;
            container.style.display = 'block';
        }

        function confirmRestoreBackup(index) {
            const snapshots = getBackupSnapshots();
            const snap = snapshots[index];
            if (!snap) return;

            const dt = new Date(snap.at);
            const dtStr = isNaN(dt.getTime()) ? snap.at : dt.toLocaleString('it-IT');
            const ok = confirm(`Attenzione: ripristinare lo snapshot del ${dtStr}?\nI dati attuali verranno salvati in un nuovo backup prima del ripristino.`);
            if (!ok) return;

            const success = restoreBackupSnapshot(index);
            if (success) {
                showImportStatus('✅ Backup ripristinato con successo!', '#56d364');
                const container = document.getElementById('backup-list-container');
                if (container) container.style.display = 'none';

                generateDays();
                switchStatsPeriod('settimana');
                if (selectedDate) selectDate(selectedDate);
            } else {
                showImportStatus('❌ Errore durante il ripristino.', '#ff7b72');
            }
        }

        function buildWorkoutCard(id, iso, done) {
            const exercise = EXERCISES[id];
            if (!exercise) return document.createElement('div');

            const badgeClass = `badge-${exercise.muscleGroup.toLowerCase()}`;

            const currentEntry = getEntry(iso, id);
            const lastExec = getLastExerciseExecution(id, iso);
            const lastHint = formatLastExecutionHint(lastExec, exercise);
            const history = getExerciseHistory(id, iso, 5);

            let initialSets = [];
            if (currentEntry && typeof currentEntry === 'object' && Array.isArray(currentEntry.sets) && currentEntry.sets.length > 0) {
                initialSets = currentEntry.sets;
            } else if (lastExec && lastExec.entry && Array.isArray(lastExec.entry.sets) && lastExec.entry.sets.length > 0) {
                initialSets = lastExec.entry.sets.map(s => {
                    if (exercise.fields) {
                        const rowObj = {};
                        exercise.fields.forEach(f => {
                            rowObj[f.key] = s[f.key] != null ? s[f.key] : '';
                        });
                        return rowObj;
                    }
                    return {
                        weight: s.weight != null ? s.weight : '',
                        reps: s.reps != null ? s.reps : ''
                    };
                });
            } else {
                const count = exercise.fields ? 1 : getDefaultSetsCount(exercise);
                for (let i = 0; i < count; i++) {
                    if (exercise.fields) {
                        const rowObj = {};
                        exercise.fields.forEach(f => { rowObj[f.key] = ''; });
                        initialSets.push(rowObj);
                    } else {
                        initialSets.push({ weight: '', reps: '' });
                    }
                }
            }
            const noteValue = (currentEntry && typeof currentEntry === 'object' && currentEntry.note) ? currentEntry.note : '';

            const addBtnLabel = exercise.fields ? '+ riga' : '+ serie';
            const removeBtnLabel = exercise.fields ? '− riga' : '− serie';

            const card = document.createElement('div');
            card.className = 'exercise-card' + (done ? ' done' : '');
            card.dataset.exerciseId = id;
            card.innerHTML = `
                <div class="exercise-card-image"><img src="immagini/${exercise.image || id + '.png'}" alt="${exercise.name}"></div>
                <div class="exercise-header">
                    <span class="exercise-name">${exercise.name}</span>
                    <span class="muscle-badge ${badgeClass}">${exercise.muscleGroup}</span>
                </div>
                <button class="toggle-desc-btn" onclick="toggleDescription(this)">Mostra dettagli ▼</button>
                <div class="exercise-desc">${exercise.description}</div>
                <button class="done-btn${done ? ' done' : ''}" onclick="toggleDone('${id}')">
                    <span class="check">✓</span>
                    <span class="done-label">${done ? 'Fatto' : 'Segna come fatto'}</span>
                </button>
                <button type="button" class="toggle-series-btn" onclick="toggleSeriesAccordion('${id}', this)">Serie ▾</button>
                <div class="series-accordion" id="series-accordion-${id}" style="display: none;">
                    ${lastHint ? `<div class="series-last-hint">${lastHint}</div>` : ''}
                    <div class="series-list" id="series-list-${id}">
                        ${renderSeriesRowsHTML(id, iso, initialSets)}
                    </div>
                    <div class="series-actions">
                        <button type="button" class="set-action-btn" onclick="addSetRow('${id}', '${iso}')">${addBtnLabel}</button>
                        <button type="button" class="set-action-btn" onclick="removeSetRow('${id}', '${iso}')">${removeBtnLabel}</button>
                    </div>
                    <div class="set-note-row">
                        <input type="text" class="set-note-input" placeholder="Nota opzionale (es. carico, fatica...)" value="${noteValue.replace(/"/g, '&quot;')}" oninput="handleSeriesInput('${id}', '${iso}')">
                    </div>
                    ${renderExerciseHistoryHTML(history)}
                </div>`;
            return card;
        }

        function toggleDone(exerciseId) {
            if (!selectedDate || !exerciseId || exerciseId === 'is_rest') return;
            const currentEntry = getEntry(selectedDate, exerciseId);
            const currentlyDone = isDone(currentEntry);
            const nowDone = !currentlyDone;

            if (nowDone) {
                // Se oggi non ci sono serie salvate per quell'esercizio, salva come serie quelle precompilate dall'ultima esecuzione (se esistono)
                let existingSets = (currentEntry && typeof currentEntry === 'object' && Array.isArray(currentEntry.sets)) ? currentEntry.sets : [];
                let noteVal = (currentEntry && typeof currentEntry === 'object' && currentEntry.note) ? currentEntry.note : '';

                if (existingSets.length === 0) {
                    const lastExec = getLastExerciseExecution(exerciseId, selectedDate);
                    if (lastExec && lastExec.entry && Array.isArray(lastExec.entry.sets) && lastExec.entry.sets.length > 0) {
                        const ex = (typeof EXERCISES !== 'undefined' ? EXERCISES[exerciseId] : null);
                        existingSets = lastExec.entry.sets.map(s => {
                            if (ex && ex.fields) {
                                const copy = {};
                                ex.fields.forEach(f => { copy[f.key] = s[f.key] != null ? s[f.key] : null; });
                                return copy;
                            }
                            return {
                                weight: s.weight != null ? s.weight : null,
                                reps: s.reps != null ? s.reps : null
                            };
                        });
                    }
                }

                // Decisione 6: usa sempre il formato oggetto {done, sets, note} (mai più true)
                setEntry(selectedDate, exerciseId, {
                    done: true,
                    sets: existingSets,
                    note: noteVal
                });
            } else {
                // Deselezione: se ci sono serie o note, preservale con done: false, altrimenti rimuovi entry
                const hasSets = currentEntry && typeof currentEntry === 'object' && Array.isArray(currentEntry.sets) && currentEntry.sets.length > 0;
                const hasNote = currentEntry && typeof currentEntry === 'object' && typeof currentEntry.note === 'string' && currentEntry.note.trim().length > 0;
                if (hasSets || hasNote) {
                    setEntry(selectedDate, exerciseId, {
                        done: false,
                        sets: currentEntry.sets || [],
                        note: currentEntry.note || ''
                    });
                } else {
                    setEntry(selectedDate, exerciseId, null);
                }
            }

            const card = document.querySelector(`.exercise-card[data-exercise-id="${exerciseId}"]`);
            if (card) {
                card.classList.toggle('done', nowDone);
                const btn = card.querySelector('.done-btn');
                if (btn) {
                    btn.classList.toggle('done', nowDone);
                    const label = btn.querySelector('.done-label');
                    if (label) label.textContent = nowDone ? 'Fatto' : 'Segna come fatto';
                }
            }

            const log = loadLog();
            const dayLog = log[selectedDate] || {};
            const subtitleEl = document.getElementById('day-subtitle');
            if (subtitleEl) {
                if (dayLog.is_rest) {
                    const restDone = Object.keys(dayLog).filter(k => k !== 'is_rest' && EXERCISES[k]?.restDayOnly && isDone(dayLog[k])).length;
                    subtitleEl.textContent = restDone > 0 ? `${restDone} esercizio di riposo attivo completato` : 'Riposo dai pesi';
                } else {
                    const doneCount = countDoneExercises(dayLog);
                    subtitleEl.textContent = `${doneCount} esercizi completati in questa giornata`;
                }
            }
        }

        function toggleDescription(btn) {
            const desc = btn.nextElementSibling;
            if (desc.style.display === 'none' || desc.style.display === '') {
                desc.style.display = 'block';
                btn.textContent = 'Nascondi dettagli ▲';
            } else {
                desc.style.display = 'none';
                btn.textContent = 'Mostra dettagli ▼';
            }
        }

        /* =========================================================
           PASSI
           ========================================================= */
        function formatStepsDateLabel(iso, todayISO) {
            if (!todayISO) todayISO = toISO(new Date());
            const d = new Date(iso + 'T12:00:00');
            const abbr = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            const dayName = abbr[d.getDay()];
            const dayNum = String(d.getDate()).padStart(2, '0');
            const monthNum = String(d.getMonth() + 1).padStart(2, '0');
            const dateFormatted = `${dayName} ${dayNum}/${monthNum}`;
            if (iso === todayISO) {
                return `Passi di oggi (${dateFormatted})`;
            }
            return `Passi di ${dateFormatted}`;
        }

        function computeStepsStats(history, period, refDate) {
            if (!period) period = 'settimana';
            if (!refDate) refDate = new Date();
            const days = period === 'settimana' ? 7 : 30;
            const dates = [];
            for (let i = days - 1; i >= 0; i--) {
                const d = new Date(refDate);
                d.setDate(d.getDate() - i);
                dates.push(toISO(d));
            }
            const values = dates.map(d => (history && history[d]) || 0);
            const filledValues = values.filter(v => v > 0);
            const total = filledValues.reduce((a, b) => a + b, 0);
            const avg = filledValues.length > 0 ? Math.round(total / filledValues.length) : 0;
            return { dates, values, total, avg, daysCount: days };
        }

        function saveStepsForDate(iso, value, todayISO) {
            if (!todayISO) todayISO = toISO(new Date());
            if (iso > todayISO) return false;
            const val = parseInt(value, 10);
            if (isNaN(val) || val <= 0) return false;

            const history = loadSteps();
            history[iso] = val;
            saveStepsData(history);
            return true;
        }

        function saveSteps() {
            const todayISO = toISO(new Date());
            if (!selectedDate || selectedDate > todayISO) {
                alert('I giorni futuri non accettano passi.');
                return false;
            }
            const input = document.getElementById('steps-input');
            if (!input) return false;
            const value = parseInt(input.value, 10);
            if (isNaN(value) || value <= 0) return false;

            const ok = saveStepsForDate(selectedDate, value, todayISO);
            if (ok) {
                refreshStepsSection(selectedDate);
                const activeTab = document.querySelector('.stats-tab.active');
                const period = activeTab ? activeTab.dataset.period : 'settimana';
                switchStatsPeriod(period);
            }
            return ok;
        }

        function refreshStepsSection(iso) {
            const history = loadSteps();
            const input = document.getElementById('steps-input');
            const inputRow = document.querySelector('.steps-input-row');
            const display = document.getElementById('steps-display');
            const title = document.querySelector('#steps-section h3');
            const futureMsg = document.getElementById('steps-future-msg');
            const todayISO = toISO(new Date());

            const isFuture = iso > todayISO;

            if (title) {
                title.innerHTML = `${ICON_PASSI_SVG} ${formatStepsDateLabel(iso, todayISO)}`;
            }

            if (isFuture) {
                if (inputRow) inputRow.style.display = 'none';
                if (display) display.style.display = 'none';
                if (futureMsg) futureMsg.style.display = 'block';
                return;
            }

            if (futureMsg) futureMsg.style.display = 'none';

            if (history[iso] != null && history[iso] > 0) {
                if (input) input.value = history[iso];
                if (inputRow) inputRow.style.display = 'none';
                if (display) display.style.display = 'block';
                const valEl = document.getElementById('steps-value');
                if (valEl) valEl.textContent = Number(history[iso]).toLocaleString('it-IT');
            } else {
                if (input) input.value = '';
                if (inputRow) inputRow.style.display = 'flex';
                if (display) display.style.display = 'none';
            }
        }

        function editSteps() {
            const todayISO = toISO(new Date());
            if (!selectedDate || selectedDate > todayISO) return;
            const display = document.getElementById('steps-display');
            const inputRow = document.querySelector('.steps-input-row');
            const input = document.getElementById('steps-input');
            if (display) display.style.display = 'none';
            if (inputRow) inputRow.style.display = 'flex';
            if (input) {
                input.focus();
                input.select();
            }
        }

        document.getElementById('steps-input').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') saveSteps();
        });

        /* =========================================================
           DATABASE ESERCIZI (tab consultazione)
           ========================================================= */
        function filterExercises(gruppo) {
            document.querySelectorAll('#db-filter-container .db-filter-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector(`#db-filter-container .db-filter-btn[data-filter="${gruppo}"]`).classList.add('active');
            renderExerciseDatabase(gruppo);
        }

        function renderExerciseDatabase(filtro) {
            const container = document.getElementById('db-exercises-list');
            container.innerHTML = '';

            const exerciseKeys = Object.keys(EXERCISES);
            let count = 0;

            exerciseKeys.forEach(key => {
                const exercise = EXERCISES[key];
                if (filtro && filtro !== 'tutti' && exercise.muscleGroup !== filtro) return;

                count++;
                const badgeClass = `badge-${exercise.muscleGroup.toLowerCase()}`;

                const card = document.createElement('div');
                card.className = 'db-exercise-card';
                card.innerHTML = `
                    <div class="db-card-image">
                        <img src="immagini/${exercise.image || exercise.id + '.png'}" alt="${exercise.name}">
                    </div>
                    <div class="db-card-body">
                        <div class="db-card-header">
                            <h3 class="db-card-title">${exercise.name}</h3>
                            <span class="muscle-badge ${badgeClass}">${exercise.muscleGroup}</span>
                        </div>
                        <button class="db-toggle-desc-btn" onclick="toggleDescription(this)">Mostra dettagli ▼</button>
                        <div class="db-card-desc">${exercise.description}</div>
                    </div>
                `;
                container.appendChild(card);
            });

            document.getElementById('db-count').textContent = `${count} esercizi trovati`;
        }

        /* =========================================================
           ALLENAMENTI DEL PERIODO (Statistiche)
           ========================================================= */
        function formatBriefDate(iso) {
            const d = new Date(iso + 'T12:00:00');
            const abbr = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            const dayName = abbr[d.getDay()];
            const dayNum = String(d.getDate()).padStart(2, '0');
            const monthNum = String(d.getMonth() + 1).padStart(2, '0');
            return `${dayName} ${dayNum}/${monthNum}`;
        }

        function isDateSelectable(iso) {
            return !!document.querySelector(`.day-btn[data-date="${iso}"]`);
        }

        function openDayInProgram(iso) {
            if (!isDateSelectable(iso)) return;
            switchTab('programma');
            selectDate(iso);
        }

        function computePeriodWorkouts(dates, log, exercises) {
            if (!exercises) exercises = (typeof EXERCISES !== 'undefined' ? EXERCISES : {});
            if (!log) log = {};
            const muscleGroupsOrder = (typeof GROUPS !== 'undefined' ? GROUPS : ["Tutti", "Petto", "Bicipiti", "Tricipiti", "Spalle", "Dorso", "Core", "Gambe e Glutei", "Riposo attivo"]).filter(g => g !== 'Tutti');

            const groupDayCounts = {};
            muscleGroupsOrder.forEach(g => { groupDayCounts[g] = 0; });

            (dates || []).forEach(d => {
                const dayLog = log[d];
                if (!dayLog) return;
                if (dayLog.is_rest) {
                    const hasActiveRest = Object.keys(dayLog).some(id => id !== 'is_rest' && exercises[id]?.restDayOnly && isDone(dayLog[id]));
                    if (hasActiveRest && groupDayCounts['Riposo attivo'] !== undefined) {
                        groupDayCounts['Riposo attivo']++;
                    }
                    return;
                }
                const dayGroups = new Set();
                Object.keys(dayLog).forEach(id => {
                    if (id !== 'is_rest' && exercises[id] && !exercises[id].restDayOnly && isDone(dayLog[id])) {
                        dayGroups.add(exercises[id].muscleGroup);
                    }
                });
                dayGroups.forEach(g => {
                    if (groupDayCounts[g] !== undefined) {
                        groupDayCounts[g]++;
                    }
                });
            });

            const summaryParts = [];
            muscleGroupsOrder.forEach(g => {
                if (groupDayCounts[g] > 0) {
                    summaryParts.push(`${g} ${groupDayCounts[g]}`);
                }
            });
            const groupDaysSummary = summaryParts.join(' · ');

            const sortedDates = [...(dates || [])].sort().reverse();
            const daysList = [];

            sortedDates.forEach(d => {
                const dayLog = log[d];
                if (!dayLog) return;

                if (dayLog.is_rest) {
                    const hasActiveRest = Object.keys(dayLog).some(id => id !== 'is_rest' && exercises[id]?.restDayOnly && isDone(dayLog[id]));
                    daysList.push({
                        date: d,
                        isRest: true,
                        hasActiveRest: hasActiveRest,
                        groups: hasActiveRest ? ['Riposo attivo'] : [],
                        exercisesCount: 0
                    });
                    return;
                }

                let doneCount = 0;
                const dayGroupsSet = new Set();
                Object.keys(dayLog).forEach(id => {
                    if (id !== 'is_rest' && exercises[id] && !exercises[id].restDayOnly && isDone(dayLog[id])) {
                        doneCount++;
                        dayGroupsSet.add(exercises[id].muscleGroup);
                    }
                });

                if (doneCount > 0) {
                    const orderedGroups = muscleGroupsOrder.filter(g => dayGroupsSet.has(g));
                    daysList.push({
                        date: d,
                        isRest: false,
                        groups: orderedGroups,
                        exercisesCount: doneCount
                    });
                }
            });

            return {
                days: daysList,
                summary: groupDaysSummary
            };
        }

        function renderPeriodWorkouts(dates, log) {
            const container = document.getElementById('stats-period-workouts');
            if (!container) return;

            const data = computePeriodWorkouts(dates, log, EXERCISES);

            let html = `<div class="period-workouts-title">Allenamenti del periodo</div>`;

            if (data.summary) {
                html += `<div class="period-groups-summary">${data.summary}</div>`;
            }

            if (data.days.length === 0) {
                html += `
                    <div class="stats-empty" style="padding:16px 0;">
                        <p style="color:#8b949e; font-size:0.85rem; margin:0;">Nessun allenamento o riposo registrato in questo periodo.</p>
                    </div>`;
            } else {
                html += `<div class="period-workouts-list">`;
                data.days.forEach(item => {
                    const dateLabel = formatBriefDate(item.date);
                    const selectable = isDateSelectable(item.date);
                    const rowClass = 'period-workout-row ' + (selectable ? 'clickable' : 'non-clickable');
                    const clickAttr = selectable ? `onclick="openDayInProgram('${item.date}')"` : '';

                    let centerHTML = '';
                    let countHTML = '';
                    if (item.isRest) {
                        if (item.hasActiveRest) {
                            centerHTML = `<div style="display:flex; align-items:center; gap:6px;"><span class="stats-rest-label">${ICON_RIPOSO_SVG} Riposo</span><div class="period-workout-badges"><span class="muscle-badge badge-riposo-attivo">Riposo attivo</span></div></div>`;
                        } else {
                            centerHTML = `<span class="stats-rest-label">${ICON_RIPOSO_SVG} Riposo</span>`;
                        }
                        countHTML = `<span class="period-workout-count">—</span>`;
                    } else {
                        centerHTML = `
                            <div class="period-workout-badges">
                                ${item.groups.map(g => `<span class="muscle-badge badge-${g.toLowerCase().replace(/\s+/g, '-')}">${g}</span>`).join('')}
                            </div>`;
                        countHTML = `<span class="period-workout-count">${item.exercisesCount} ${item.exercisesCount === 1 ? 'es.' : 'es.'}</span>`;
                    }

                    const arrowHTML = selectable ? `<span class="period-workout-arrow">›</span>` : '';

                    html += `
                        <div class="${rowClass}" ${clickAttr} data-date="${item.date}">
                            <span class="period-workout-date">${dateLabel}</span>
                            ${centerHTML}
                            ${countHTML}
                            ${arrowHTML}
                        </div>`;
                });
                html += `</div>`;
            }

            container.innerHTML = html;
        }

        /* =========================================================
           STATISTICHE (aderenza + passi)
           ========================================================= */
        function switchStatsPeriod(period) {
            document.querySelectorAll('.stats-tab').forEach(t => t.classList.remove('active'));
            document.querySelector(`.stats-tab[data-period="${period}"]`).classList.add('active');

            const history = loadSteps();
            const log = loadLog();
            const today = new Date();
            const stepsStats = computeStepsStats(history, period, today);
            const dates = stepsStats.dates;
            const values = stepsStats.values;
            const total = stepsStats.total;
            const avg = stepsStats.avg;

            // Aderenza libera: conteggio basato sui dati reali
            let trainedDays = 0, restDays = 0, totalExercisesDone = 0;
            dates.forEach(d => {
                const dayLog = log[d] || {};
                if (dayLog.is_rest) {
                    restDays++;
                } else {
                    const doneInDay = countDoneExercises(dayLog);
                    if (doneInDay > 0) {
                        trainedDays++;
                        totalExercisesDone += doneInDay;
                    }
                }
            });

            const activeDays = trainedDays + restDays;
            const adherencePct = activeDays > 0 ? Math.round((trainedDays / activeDays) * 100) : 0;

            const adherenceHtml = activeDays > 0 ? `
                <div class="adherence-card">
                    <div class="adherence-header">
                        <span class="adherence-label">${period === 'settimana' ? 'Questa settimana' : 'Ultimi 30 giorni'}</span>
                        <span class="adherence-value">${trainedDays} allenamenti · ${restDays} riposi</span>
                    </div>
                    <div class="adherence-bar"><div class="adherence-fill" style="width:${adherencePct}%"></div></div>
                </div>
            ` : `
                <div class="stats-empty">
                    <div class="stats-empty-emoji">📊</div>
                    <p>Nessun dato registrato per questo periodo</p>
                </div>
            `;

            document.getElementById('stats-adherence').innerHTML = adherenceHtml;

            document.getElementById('stats-summary').innerHTML = `
                <div class="stats-card">
                    <div class="stats-card-value">${total.toLocaleString('it-IT')}</div>
                    <div class="stats-card-label">Totale passi</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-value">${avg.toLocaleString('it-IT')}</div>
                    <div class="stats-card-label">Media passi</div>
                </div>
                <div class="stats-card">
                    <div class="stats-card-value">${totalExercisesDone}</div>
                    <div class="stats-card-label">Esercizi fatti</div>
                </div>
            `;

            drawBarChart(dates, values, period);
            renderPeriodWorkouts(dates, log);
        }

        function drawBarChart(dates, values, period) {
            const canvas = document.getElementById('stats-chart');
            const ctx = canvas.getContext('2d');

            const rect = canvas.getBoundingClientRect();
            if (rect.width === 0) return;

            canvas.width = rect.width * window.devicePixelRatio;
            canvas.height = rect.height * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

            const W = rect.width;
            const H = rect.height;
            const padding = { top: 20, right: 12, bottom: 40, left: 12 };
            const chartW = W - padding.left - padding.right;
            const chartH = H - padding.top - padding.bottom;

            ctx.clearRect(0, 0, W, H);

            const maxVal = Math.max(...values, 1000);
            const barCount = values.length;
            const barWidth = chartW / barCount * 0.7;
            const barGap = chartW / barCount * 0.3;

            values.forEach((val, i) => {
                const barH = (val / maxVal) * chartH;
                const x = padding.left + i * (chartW / barCount) + barGap / 2;
                const y = padding.top + chartH - barH;

                ctx.fillStyle = val > 0 ? '#FF7A1A' : '#172740';
                ctx.beginPath();
                if (ctx.roundRect) {
                    ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
                } else {
                    ctx.rect(x, y, barWidth, barH);
                }
                ctx.fill();
            });

            ctx.fillStyle = '#B7C5D8';
            ctx.font = `${period === 'settimana' ? 11 : 8}px -apple-system, sans-serif`;
            ctx.textAlign = 'center';

            const dayAbbr = ['D', 'L', 'M', 'Me', 'G', 'V', 'S'];
            dates.forEach((date, i) => {
                const d = new Date(date + 'T12:00:00');
                const x = padding.left + i * (chartW / barCount) + (chartW / barCount) / 2;
                const label = period === 'settimana' ? dayAbbr[d.getDay()] : `${d.getDate()}`;
                ctx.fillText(label, x, H - padding.bottom + 16);
            });
        }

        /* =========================================================
           INIT & RESUME (gestione cambio giorno su visibilitychange)
           ========================================================= */
        let lastKnownToday = toISO(new Date());

        function checkDateChangeOnResume() {
            const currentToday = toISO(new Date());
            if (currentToday !== lastKnownToday) {
                lastKnownToday = currentToday;
                generateDays();
                selectDate(currentToday);
                maybeDailyBackup();
                return true;
            }
            return false;
        }

        document.addEventListener('DOMContentLoaded', () => {
            lastKnownToday = toISO(new Date());
            generateDays();
            selectDate(lastKnownToday);

            // Backup automatico: al massimo una volta al giorno all'avvio
            maybeDailyBackup();
        });

        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                checkDateChangeOnResume();
            }
        });

        window.addEventListener('focus', () => {
            checkDateChangeOnResume();
        });

        /* =========================================================
           SERVICE WORKER (PWA Offline & Aggiornamenti)
           ========================================================= */
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('sw.js').then(reg => {
                    function promptUpdate(waitingWorker) {
                        const banner = document.getElementById('pwa-update-banner');
                        if (!banner) return;
                        banner.style.display = 'flex';
                        banner.onclick = () => {
                            if (waitingWorker) {
                                waitingWorker.postMessage({ action: 'skipWaiting' });
                            }
                        };
                    }

                    if (reg.waiting) {
                        promptUpdate(reg.waiting);
                    }

                    reg.addEventListener('updatefound', () => {
                        const newWorker = reg.installing;
                        if (!newWorker) return;
                        newWorker.addEventListener('statechange', () => {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                                promptUpdate(newWorker);
                            }
                        });
                    });
                }).catch(err => {
                    console.log('SW registration error:', err);
                });

                let refreshing = false;
                navigator.serviceWorker.addEventListener('controllerchange', () => {
                    if (!refreshing) {
                        refreshing = true;
                        window.location.reload();
                    }
                });
            });
        }
