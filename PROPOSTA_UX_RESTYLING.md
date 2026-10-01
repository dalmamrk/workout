# Proposta UX di restyling — Workout PWA

## 1. Executive Summary & Audit UX Attuale

### Sintesi

La PWA ha già una base mobile solida per l’uso durante l’allenamento: calendario a quattro giorni, dati locali robusti, serie a cascata, precompilazione e storico per esercizio, passi retroattivi, riposo attivo e backup sono presenti nel codice. Il restyling può quindi concentrarsi sulla gerarchia visiva e sull’ergonomia, senza riscrivere l’architettura vanilla né il modello dati.

**Risultato UX prioritario:** portare in primo piano la prossima azione utile (giorno selezionato, esercizio, serie, completamento e recupero), riducendo scorrimenti e decisioni visive mentre l’utente è affaticato. La nuova palette proposta usa blu navy come base e arancione come unico accento primario.

### Punti di forza verificati

- `index.html` e `ex.html` sono pagine statiche con CSS e JavaScript inline; non richiedono framework o build.
- La dashboard ha safe-area iOS, larghezza massima di 480 px, tab principali con altezza minima 48 px e pulsante “fatto” alto 56 px. Il calendario è limitato ai quattro giorni richiesti e usa un accento ciano per la selezione.
- Gli input delle serie hanno altezza minima 44 px, font 16 px e tastiere numeriche appropriate; la cascata non sovrascrive le righe toccate manualmente.
- Sono già presenti precompilazione e storico di esercizio, registrazione dei passi retroattivi, riposo dai pesi senza impedire attività di riposo attivo, backup e import/export.
- Le pagine mantengono i meta tag `noindex` e `googlebot` e `robots.txt` contiene il blocco totale. Questi vincoli vanno conservati.
- La suite locale ha dato esito positivo: sintassi dello script inline di `index.html` e di `sw.js`, `node test_storage.js` e `node verifica.js`. Quest’ultimo ha verificato 32 esercizi e tutte le immagini referenziate presenti.

### Frizioni e criticità osservate

| Area | Evidenza verificata | Impatto durante l’allenamento | Direzione proposta |
|---|---|---|---|
| Gerarchia cromatica | Sono mescolati ciano/blu per selezione e testo, verde per completamento/salvataggio e toni GitHub-dark. | L’azione principale non ha un linguaggio visivo unico; colore e semantica competono. | Arancione per azione/selezione/timer; blu elettrico per focus e informazione; verde solo per successo. |
| Stato completato | La card completata usa bordo verde, pulsante verde, spunta e nome barrato/grigiato. | Ridondanza utile, ma il testo barrato e attenuato può perdere leggibilità a colpo d’occhio. | Conservare icona e testo di stato, sostituire il barrato con un indicatore compatto e mantenere il nome ad alto contrasto. |
| Filtri dashboard | `.db-filter-btn` ha `min-height: 36px`; il contenitore è una riga scorrevole orizzontalmente. | Bersaglio sotto i 44 px richiesti e gruppi meno visibili se non si nota lo scorrimento. | Portare i pulsanti ad almeno 44 px, indicare lo scorrimento o usare un selettore compatto con gruppi facilmente raggiungibili. |
| Catalogo `ex.html` | Il catalogo usa una tabella a due colonne con larghezze 70/30; le schede filtro hanno padding verticale 8 px e nessun `min-height` o regola `@media` rilevata. | A larghezza iPhone il testo e l’immagine competono per spazio; filtri piccoli per il tocco. | Su mobile convertire ogni riga in card verticale (immagine e testo in colonna), mantenendo tabella solo a viewport ampi; target filtri ≥44 px. |
| Recupero | **Nel codice locale non è stata trovata un’implementazione del timer**: ricerca dei riferimenti timer/countdown/recupero e ispezione di `index.html` non hanno restituito controlli o logica timer. | Manca un elemento che può guidare il ritmo senza dover usare un’app esterna. Il contesto e le istruzioni menzionano il timer, ma lo stato sorgente va riallineato. | Introdurre un timer essenziale come nuova funzionalità; considerarlo non esistente fino all’implementazione e al test. |
| Catalogo live / layout mobile | Le due URL pubbliche sono state aperte e ispezionate; il rendering visivo osservato dal browser era 1099×981 px, con la dashboard contenuta in una colonna stretta. Il browser in questa sessione non espone un controllo per imporre 390×844. | L’audit live non certifica il layout esatto su iPhone; gli indizi strutturali nel CSS suggeriscono criticità soprattutto per la tabella esercizi. | Prima del rilascio eseguire il collaudo conclusivo su dispositivo/viewport reale 390×844, inclusi scroll e tastiera iOS. |
| Contrasto secondario | Nel tema attuale il testo `#8b949e` su `#161b22` misura 5,62:1 (contrasto calcolato), sotto AAA per testo normale. | Testi secondari e label possono essere meno leggibili sotto illuminazione forte. | Usare testo secondario più chiaro e verificare ogni coppia testo/sfondo; non attribuire AAA all’intera interfaccia senza test completo. |

### Ispezione live

Pagine visitate:

- Dashboard: <https://dalmamrk.github.io/workout/>
- Catalogo: <https://dalmamrk.github.io/workout/ex.html>

La dashboard live mostra correttamente navigazione, calendario, sezione passi, giorno selezionato, filtri e card esercizio; il catalogo mostra intestazione, gruppi filtro, tabella illustrata e istruzioni. È stato provato il filtro “Riposo attivo” senza modificare dati dell’utente. La console osservata per il catalogo non ha riportato messaggi. **Limite dell’ispezione:** non è stato possibile forzare la finestra del browser a 390×844; le valutazioni specifiche a quella larghezza sono quindi raccomandazioni da validare, non esiti di una prova emulata.

---

## 2. Design System & Nuova Palette “Blu & Arancio”

### Token CSS proposti

Valori HSL arrotondati all’intero più vicino. Le combinazioni testuali indicate sono state calcolate con la formula di contrasto WCAG; i colori di bordo sono destinati a elementi non testuali, non a testi piccoli.

| Token CSS | HEX | HSL circa | Ruolo d’uso |
|---|---:|---:|---|
| `--bg-primary` | `#0B1220` | `220° 49% 8%` | Sfondo principale navy, anche pagina e safe area |
| `--bg-secondary` | `#101A2B` | `218° 46% 12%` | Sfondo di sezioni e contenitori secondari |
| `--surface-blue` | `#111D31` | `218° 48% 13%` | Card e superfici principali |
| `--surface-raised` | `#172740` | `217° 47% 17%` | Accordion aperti, card in evidenza, controlli elevati |
| `--border` | `#536985` | `214° 23% 42%` | Bordo visibile e separatori; uso non testuale |
| `--text-primary` | `#F4F7FF` | `224° 100% 98%` | Titoli, dati, valori e testo essenziale |
| `--text-secondary` | `#B7C5D8` | `215° 30% 78%` | Descrizioni, label e hint; evitare grigi troppo attenuati |
| `--accent-orange` | `#FF7A1A` | `25° 100% 55%` | CTA, giorno selezionato, timer attivo e azione primaria |
| `--accent-orange-pressed` | `#E96508` | `25° 93% 47%` | Stato premuto/pressed; non usare per testo piccolo senza ricalcolo |
| `--accent-cyan` | `#47D7FF` | `193° 100% 64%` | Focus ring, link informativi, dettaglio tecnico |
| `--success` | `#7BE0A1` | `143° 62% 68%` | Stato salvato/completato, sempre insieme a icona o testo |
| `--warning` | `#FFD166` | `42° 100% 70%` | Avviso, timer quasi terminato, attenzione non bloccante |
| `--danger` | `#FF7373` | `0° 100% 73%` | Errore o azione distruttiva; mai usato come unico segnale |
| `--shadow-card` | `rgba(0, 0, 0, .28)` | — | Profondità discreta sotto card, senza glow persistente |
| `--glow-orange` | `rgba(255, 122, 26, .22)` | — | Alone sottile solo su stato attivo/timer, non su tutte le card |

Esempio d’introduzione, mantenendo CSS inline:

```css
:root {
  --bg-primary: #0B1220;
  --bg-secondary: #101A2B;
  --surface-blue: #111D31;
  --surface-raised: #172740;
  --border: #536985;
  --text-primary: #F4F7FF;
  --text-secondary: #B7C5D8;
  --accent-orange: #FF7A1A;
  --accent-cyan: #47D7FF;
  --success: #7BE0A1;
  --warning: #FFD166;
  --danger: #FF7373;
}
```

### Contrasto e gerarchia visiva

**Coppie di testo già calcolate**, da usare come vincolo per implementazione e QA:

| Primo piano / sfondo | Contrasto | Uso e criterio |
|---|---:|---|
| `#F4F7FF` su `#0B1220` | 17,47:1 | Testo principale, supera AAA (7:1) |
| `#B7C5D8` su `#111D31` | 9,64:1 | Testo secondario su card, supera AAA |
| `#B7C5D8` su `#172740` | 8,56:1 | Testo secondario su superficie elevata, supera AAA |
| `#0B1220` su `#FF7A1A` | 7,18:1 | Testo/icona scura sulla CTA arancione, supera AAA |
| `#47D7FF` su `#0B1220` | 11,08:1 | Focus ring e testo informativo, supera AAA |
| `#7BE0A1` su `#0B1220` | 11,61:1 | Stato di successo, supera AAA |
| `#FFD166` su `#0B1220` | 12,98:1 | Stato di avviso, supera AAA |

- Per testo normale puntare ad almeno **7:1** nelle coppie che si vogliono dichiarare AAA; per testo grande il livello AAA richiede almeno 4,5:1. Ricontrollare i colori esatti se si applica trasparenza, `opacity` o una tinta pressed.
- Per bordi, indicatori di focus e componenti non testuali verificare almeno **3:1** rispetto ai colori adiacenti; il token `--border` è stato scelto per arrivare a circa 3:1 su `--surface-blue`.
- L’arancione identifica l’azione attiva, non tutti gli elementi decorativi. Il ciano resta secondario e non compete con il timer o con la CTA.
- Stati mai codificati solo con il colore: affiancare “Fatto”, “Riposo”, “In recupero”, icona/check o testo equivalente. Per completato non barrarne il nome se peggiora la scansione rapida.
- Tipografia di sistema iOS (`-apple-system`) da mantenere; gerarchia consigliata: titolo pagina 24–28 px, titolo esercizio 18–20 px, valore timer 32–40 px, testo operativo almeno 16 px, note e badge almeno 14 px quando sono indispensabili alla decisione.
- Bordi solidi e chiari per campi e stato focus; ombre brevi e morbide, senza affidarsi a glow come unico indicatore. Conservare safe-area e rispettare `prefers-reduced-motion` per le transizioni.

---

## 3. Miglioramenti UX Specifici per l’Allenamento su iPhone

### Header, calendario a 4 giorni e selezione data

- Conservare l’intestazione compatta e le quattro date in una sola riga: ogni giorno deve restare un target ≥44×44 px anche sul viewport largo 390 px.
- Applicare l’arancione al giorno selezionato, mantenendo testo navy ad alto contrasto. Evidenziare “oggi” con etichetta o microtesto solo se non introduce un secondo indicatore confondibile; non ripristinare pallini o stati grafici sparsi.
- Tenere chiara la data corrente quando si riapre la PWA dopo mezzanotte; non alterare `checkDateChangeOnResume` né il backup giornaliero.
- Esaminare un’eventuale navigazione inferiore persistente solo se riduce davvero lo scroll; non duplicare le tre tab esistenti né occupare spazio verticale durante l’inserimento serie.

### Card esercizio, serie a cascata e storico precedente

- Rendere immediatamente leggibili: nome, gruppo muscolare, prescrizione, numero serie e azione “Segna come fatto”. Mantenere la foto come contesto, ma ridurne l’altezza se spinge i controlli primari fuori dalla prima porzione di schermo.
- Conservare accordion serie chiuso di default, cascata condizionata da `userModified`, precompilazione dall’ultima sessione e mini storico. La cascata deve restare un acceleratore: se una riga è stata personalizzata, non sovrascriverla mai.
- Separare visivamente numero serie, peso e ripetizioni; campi con `inputmode="decimal"` / `inputmode="numeric"`, font ≥16 px e altezza ≥44 px. Il tasto “+ serie” e i comandi di rimozione devono rimanere distinti e facili da premere con pollice.
- Mostrare l’ultima esecuzione come hint compatto e leggibile, lasciandola espandibile se contiene molte serie. Evitare che nota e storico sottraggano spazio ai campi attivi.
- Stato completato: icona/check, etichetta chiara e trattamento della card coerente. Preservare leggibilità del nome e dati anche dopo il completamento.

### Timer di recupero — funzionalità da implementare

Il timer non risulta presente nell’attuale `index.html`; la seguente è una proposta, non una descrizione dello stato corrente.

- Collocarlo dove resta visibile durante l’allenamento: barra/card compatta sticky sopra la safe area inferiore, attivabile dalla card dell’esercizio. Non coprire input, CTA o controlli Safari.
- Avvio a un tocco da preset configurabili (es. 45, 60, 90 s) e pulsante “+15 s”; mostrare un conto alla rovescia grande con testo “Recupero”, progresso semplice e azione pausa/continua/stop ≥44×44 px.
- Usare un timestamp di fine (`Date.now() + durata`) come fonte del tempo, aggiornando la visualizzazione quando la pagina torna visibile: un intervallo UI in background può essere sospeso da iOS e non deve far slittare il conteggio.
- Notifica di fine discreta e accessibile, senza dipendere da suono o vibrazione. Il colore passa da arancione a warning negli ultimi secondi, accompagnato da testo/indicatore; niente lampeggi rapidi.
- Un solo timer globale evita sovrapposizioni tra card. Il timer deve funzionare offline e non deve toccare log, passi o completamenti. Decidere e testare se sopravvive al cambio tab o alla chiusura della PWA prima di implementare persistenza.

### Riposo dai pesi, riposo attivo e passi

- Distinguere chiaramente **Riposo dai pesi** da **Riposo attivo**. L’etichetta di riposo non deve nascondere Farmer’s Walk, serie, durata, carico o passi.
- Usare il blu come superficie neutra del giorno di riposo e un’etichetta testuale/semantica; riservare l’arancione al giorno selezionato e il verde allo stato salvato. Non colorare Farmer’s Walk come riposo passivo.
- Mantenere la sezione passi legata alla data selezionata, con data esplicita per l’inserimento retroattivo e indicazione comprensibile quando è futura/non modificabile.
- Dopo salvataggio mostrare conferma non invasiva e mantenere visibili valore salvato e comando modifica con target di almeno 44 px.

### Tab Statistiche e catalogo `ex.html`

- In Statistiche dare priorità ai riepiloghi leggibili a colpo d’occhio (aderenza, allenamenti, passi); mantenere il grafico e la cronologia per gruppo come livello successivo. Testare palette del canvas, badge e legende anche senza distinguere il colore.
- Uniformare badge muscolari all’ordine già definito in `GROUPS`; usare tinta e contrasto coerenti con testo esplicito. Evitare 8 accenti saturi concorrenti: palette semantica limitata e differenze testuali/iconografiche.
- In `ex.html` sostituire, solo a breakpoint mobile, la tabella con card a colonna singola: foto fluida, nome, badge, descrizione e prescrizione. A viewport ampio si può conservare l’attuale tabella.
- Rendere i filtri raggiungibili con una mano: pulsanti ≥44 px, scroll orizzontale visibile/affordance oppure select/accordion con stato attivo evidente. Evitare che il filtro si sposti via durante un tocco.
- Conservare i filtri per gruppo, le 32 voci, le immagini e i metadati `noindex`; non modificare contenuti degli esercizi come parte di un semplice restyling.

---

## 4. Roadmap di Implementazione per Fasi

### Fase 0 — Baseline e decisioni visuali

1. Salvare screenshot e misure su iPhone o viewport 390×844 di dashboard, accordion serie, statistiche e catalogo.
2. Approvare i token e fissare in una tabella i componenti/stati da mappare. Riallineare il requisito del timer: è documentato nel contesto, ma assente dal sorgente ispezionato.
3. Non cambiare logica di storage, schema JSON, filtri o dati utente in questa fase.

### Fase 1 — Token, superfici e navigazione

1. Introdurre variabili CSS `:root` in `index.html` e `ex.html`; applicare colori a sfondi, card, bordi, testi e focus.
2. Aggiornare CTA, selezione calendario, stato completato, warning e link alla gerarchia blu/arancio/semantica; sincronizzare `theme-color` e colori del manifest se pertinenti.
3. Adeguare tutti i target sotto 44 px, in particolare filtri esercizi e catalogo.
4. Verificare contrasto delle coppie finali dopo ogni modifica; controllare `focus-visible`, riduzione movimento e safe-area.

### Fase 2 — Ottimizzazione della registrazione in allenamento

1. Riordinare visivamente card, riepilogo serie, pulsanti e storico senza cambiare il funzionamento a cascata, il debounce o i dati salvati.
2. Implementare timer globale per timestamp, preset, pausa/continua, aggiunta tempo e aggiornamento su `visibilitychange`/`focus`; aggiungere test su ripresa, scadenza, cambio data e assenza di effetti su storage workout.
3. Provare completamento, annullamento del completamento, modifica riga manuale, aggiunta serie e precompilazione.

### Fase 3 — Statistiche, riposo e catalogo responsive

1. Ridisegnare statistiche, badge e grafico con token; assicurare che gruppo, valore e stato restino distinguibili senza colore.
2. Separare visivamente riposo dai pesi, attività Farmer’s Walk e passi giornalieri.
3. Rendere `ex.html` mobile-first mantenendo la tabella solo a viewport più ampi; testare filtri e immagini per overflow orizzontale.

### Fase 4 — QA, PWA e rilascio

1. Dopo ogni fase eseguire `node --check sw.js`; estrarre gli script inline di entrambe le pagine e passarli a `node --check`; eseguire `node test_storage.js` e `node verifica.js`.
2. Ogni modifica a file pubblicati (HTML, CSS inline, icone, manifest o service worker) richiede incremento di `CACHE_VERSION` in `sw.js`; una serie coerente di modifiche di restyling può essere rilasciata come `workout-v6`.
3. Verificare a 390×844: nessun overflow laterale, tastiera numerica corretta, font input ≥16 px, target ≥44 px, uso con una mano, timer visibile senza coprire CTA e safe-area.
4. Provare installazione PWA, aggiornamento cache e modalità offline. Ricontrollare `robots.txt`, entrambi i meta tag `robots`/`googlebot`, e che nessuna pagina diventi indicizzabile.
5. Non eseguire push senza richiesta; documentare test, versione cache e punti aperti prima del rilascio.

### Criterio di completamento del restyling

La proposta si considera implementata solo quando test automatici verdi, contrasto verificato sui colori effettivamente renderizzati, controlli touch conformi e prova manuale su iPhone/390×844 completata. L’ispezione live di questa proposta non sostituisce quel collaudo: il browser disponibile non ha permesso di impostare esattamente quel viewport.
