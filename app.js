// ===== VERSION + CHANGELOG =====
const APP_VERSION = "1.0.0";

const CHANGELOG = [
  {
    version: "1.0.0",
    date: "2026-01-11",
    changes: [
      "Settings-Seite: Aktivitäten hinzufügen/bearbeiten/löschen, Emoji wählen",
      "Gesamtzeit konfigurierbar",
      "Timer pausiert nachts (22:00–07:00)",
      "Flamme wird stufenweise grau statt kleiner",
      "Overscroll/weißer Rand entfernt",
      "Große Vers-Auswahl + weniger Wiederholungen (History-Algorithmus)",
      "Update Log Fixed",
      "Fixed Time UI 9h 60min -> 10h",
      "Dev Tools"
    ]
  }
];


// === DEFAULT AKTIVITÄTEN ===
const defaultActivities = [
    { id: 1, icon: '🙏', name: 'Gebet', hours: 2 },
    { id: 2, icon: '📖', name: 'Bibel lesen', hours: 4 },
    { id: 3, icon: '🎵', name: 'Lobpreis', hours: 3 },
    { id: 4, icon: '⛪', name: 'Gottesdienst', hours: 8 },
    { id: 5, icon: '🤝', name: 'Gemeinschaft', hours: 2 },
    { id: 6, icon: '💭', name: 'Stille Zeit', hours: 1 }
];

const DEV_MODE = true; // für Release auf false setzen

// === 100 BIBELVERSE ===
const verses = [
    { text: "Denn Gott hat uns nicht gegeben den Geist der Furcht, sondern der Kraft und der Liebe und der Besonnenheit.", ref: "2. Timotheus 1:7" },
    { text: "Der HERR ist mein Hirte, mir wird nichts mangeln.", ref: "Psalm 23:1" },
    { text: "Ich bin das Licht der Welt. Wer mir nachfolgt, wird nicht in der Finsternis wandeln.", ref: "Johannes 8:12" },
    { text: "Fürchte dich nicht, denn ich bin mit dir; hab keine Angst, denn ich bin dein Gott.", ref: "Jesaja 41:10" },
    { text: "Alle eure Sorge werft auf ihn; denn er sorgt für euch.", ref: "1. Petrus 5:7" },
    { text: "Jesus spricht: Ich bin der Weg und die Wahrheit und das Leben.", ref: "Johannes 14:6" },
    { text: "Denn wo zwei oder drei in meinem Namen versammelt sind, da bin ich mitten unter ihnen.", ref: "Matthäus 18:20" },
    { text: "Ich vermag alles durch den, der mich stark macht, Christus.", ref: "Philipper 4:13" },
    { text: "Denn aus Gnade seid ihr gerettet durch Glauben, und das nicht aus euch: Gottes Gabe ist es.", ref: "Epheser 2:8" },
    { text: "Und ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück; denn du bist bei mir.", ref: "Psalm 23:4" },
    { text: "Denn also hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab.", ref: "Johannes 3:16" },
    { text: "Der Herr ist mein Licht und mein Heil; vor wem sollte ich mich fürchten?", ref: "Psalm 27:1" },
    { text: "Seid fröhlich in Hoffnung, geduldig in Trübsal, beharrlich im Gebet.", ref: "Römer 12:12" },
    { text: "Denn ich weiß wohl, was ich für Gedanken über euch habe: Gedanken des Friedens.", ref: "Jeremia 29:11" },
    { text: "Gott ist unsre Zuversicht und Stärke, eine Hilfe in den großen Nöten.", ref: "Psalm 46:2" },
    { text: "Befiehl dem HERRN deine Wege und hoffe auf ihn, er wird's wohlmachen.", ref: "Psalm 37:5" },
    { text: "Die auf den HERRN harren, kriegen neue Kraft.", ref: "Jesaja 40:31" },
    { text: "Seid stark und mutig! Fürchtet euch nicht vor ihnen! Der HERR, dein Gott, geht mit dir.", ref: "5. Mose 31:6" },
    { text: "Kommt her zu mir, alle, die ihr mühselig und beladen seid; ich will euch erquicken.", ref: "Matthäus 11:28" },
    { text: "Ich lasse dich nicht fallen und verlasse dich nicht.", ref: "Josua 1:5" },
    { text: "Der HERR segne dich und behüte dich.", ref: "4. Mose 6:24" },
    { text: "Schmecket und sehet, wie freundlich der HERR ist. Wohl dem, der auf ihn trauet!", ref: "Psalm 34:9" },
    { text: "Lass dir an meiner Gnade genügen; denn meine Kraft ist in den Schwachen mächtig.", ref: "2. Korinther 12:9" },
    { text: "Freuet euch in dem Herrn allewege, und abermals sage ich: Freuet euch!", ref: "Philipper 4:4" },
    { text: "Denn wir wandeln im Glauben und nicht im Schauen.", ref: "2. Korinther 5:7" },
    { text: "Rufe mich an in der Not, so will ich dich erretten.", ref: "Psalm 50:15" },
    { text: "Gott ist Liebe; und wer in der Liebe bleibt, der bleibt in Gott und Gott in ihm.", ref: "1. Johannes 4:16" },
    { text: "Wenn ihr mich von ganzem Herzen suchen werdet, so will ich mich von euch finden lassen.", ref: "Jeremia 29:13" },
    { text: "Der HERR ist nahe denen, die zerbrochenen Herzens sind.", ref: "Psalm 34:19" },
    { text: "Trachtet zuerst nach dem Reich Gottes und nach seiner Gerechtigkeit.", ref: "Matthäus 6:33" },
    { text: "So sehr hat Gott die Welt geliebt, dass er seinen einzigen Sohn hingab.", ref: "Johannes 3:16" },
    { text: "Ich bin bei euch alle Tage bis an der Welt Ende.", ref: "Matthäus 28:20" },
    { text: "Der Glaube aber ist eine feste Zuversicht dessen, was man hofft.", ref: "Hebräer 11:1" },
    { text: "Die Frucht des Geistes ist Liebe, Freude, Friede, Geduld, Freundlichkeit.", ref: "Galater 5:22" },
    { text: "Sei getreu bis an den Tod, so will ich dir die Krone des Lebens geben.", ref: "Offenbarung 2:10" },
    { text: "Der HERR ist meine Stärke und mein Schild; auf ihn hofft mein Herz.", ref: "Psalm 28:7" },
    { text: "Und der Friede Gottes, der höher ist als alle Vernunft, bewahre eure Herzen.", ref: "Philipper 4:7" },
    { text: "Denn das Wort Gottes ist lebendig und kräftig.", ref: "Hebräer 4:12" },
    { text: "Bittet, so wird euch gegeben; suchet, so werdet ihr finden.", ref: "Matthäus 7:7" },
    { text: "Denn der Lohn der Sünde ist der Tod; die Gabe Gottes aber ist das ewige Leben.", ref: "Römer 6:23" },
    { text: "Ich bin die Auferstehung und das Leben. Wer an mich glaubt, wird leben.", ref: "Johannes 11:25" },
    { text: "Niemand hat größere Liebe als die, dass er sein Leben lässt für seine Freunde.", ref: "Johannes 15:13" },
    { text: "Dein Wort ist meines Fußes Leuchte und ein Licht auf meinem Wege.", ref: "Psalm 119:105" },
    { text: "Prüfet alles und das Gute behaltet.", ref: "1. Thessalonicher 5:21" },
    { text: "Einer trage des andern Last, so werdet ihr das Gesetz Christi erfüllen.", ref: "Galater 6:2" },
    { text: "Ich bin der Weinstock, ihr seid die Reben. Wer in mir bleibt, bringt viel Frucht.", ref: "Johannes 15:5" },
    { text: "Was ihr getan habt einem von diesen meinen geringsten Brüdern, das habt ihr mir getan.", ref: "Matthäus 25:40" },
    { text: "Sorget nicht um den morgigen Tag, denn der morgige Tag wird für das Seine sorgen.", ref: "Matthäus 6:34" },
    { text: "Ich will dich unterweisen und dir den Weg zeigen, den du gehen sollst.", ref: "Psalm 32:8" },
    { text: "Denn meine Gedanken sind nicht eure Gedanken, spricht der HERR.", ref: "Jesaja 55:8" },
    { text: "Er heilt, die zerbrochenen Herzens sind, und verbindet ihre Wunden.", ref: "Psalm 147:3" },
    { text: "Das Gras verdorrt, die Blume verwelkt, aber das Wort unseres Gottes bleibt ewiglich.", ref: "Jesaja 40:8" },
    { text: "Selig sind, die da Leid tragen; denn sie sollen getröstet werden.", ref: "Matthäus 5:4" },
    { text: "Selig sind die Barmherzigen; denn sie werden Barmherzigkeit erlangen.", ref: "Matthäus 5:7" },
    { text: "Selig sind, die reinen Herzens sind; denn sie werden Gott schauen.", ref: "Matthäus 5:8" },
    { text: "Selig sind die Friedfertigen; denn sie werden Gottes Kinder heißen.", ref: "Matthäus 5:9" },
    { text: "Du sollst den Herrn, deinen Gott, lieben von ganzem Herzen.", ref: "Matthäus 22:37" },
    { text: "Du sollst deinen Nächsten lieben wie dich selbst.", ref: "Matthäus 22:39" },
    { text: "Richtet nicht, damit ihr nicht gerichtet werdet.", ref: "Matthäus 7:1" },
    { text: "Alles, was ihr wollt, dass euch die Leute tun sollen, das tut ihnen auch.", ref: "Matthäus 7:12" },
    { text: "Das ist mein Gebot, dass ihr euch untereinander liebt, wie ich euch liebe.", ref: "Johannes 15:12" },
    { text: "Wer unter euch ohne Sünde ist, der werfe den ersten Stein.", ref: "Johannes 8:7" },
    { text: "Denn wo dein Schatz ist, da ist auch dein Herz.", ref: "Matthäus 6:21" },
    { text: "Ich bin gekommen, damit sie das Leben haben und volle Genüge.", ref: "Johannes 10:10" },
    { text: "Wer an mich glaubt, von dessen Leib werden Ströme lebendigen Wassers fließen.", ref: "Johannes 7:38" },
    { text: "Wer sein Leben findet, der wird's verlieren; wer sein Leben verliert um meinetwillen, wird's finden.", ref: "Matthäus 10:39" },
    { text: "Siehe, ich mache alles neu!", ref: "Offenbarung 21:5" },
    { text: "Ihr seid das Salz der Erde.", ref: "Matthäus 5:13" },
    { text: "Ihr seid das Licht der Welt.", ref: "Matthäus 5:14" },
    { text: "Wenn euch der Sohn frei macht, so seid ihr wirklich frei.", ref: "Johannes 8:36" },
    { text: "Der HERR ist gut, ein Schutz zur Zeit der Not.", ref: "Nahum 1:7" },
    { text: "Seid barmherzig, wie auch euer Vater barmherzig ist.", ref: "Lukas 6:36" },
    { text: "Vergeltet nicht Böses mit Bösem oder Scheltwort mit Scheltwort.", ref: "1. Petrus 3:9" },
    { text: "Die Liebe ist langmütig und freundlich, die Liebe eifert nicht.", ref: "1. Korinther 13:4" },
    { text: "Nun aber bleiben Glaube, Hoffnung, Liebe, diese drei; aber die Liebe ist die größte.", ref: "1. Korinther 13:13" },
    { text: "Fürchte dich nicht vor ihnen; denn ich bin bei dir und will dich erretten.", ref: "Jeremia 1:8" },
    { text: "Ich habe dich je und je geliebt, darum habe ich dich zu mir gezogen aus lauter Güte.", ref: "Jeremia 31:3" },
    { text: "Denn bei Gott ist kein Ding unmöglich.", ref: "Lukas 1:37" },
    { text: "Ehre deinen Vater und deine Mutter.", ref: "2. Mose 20:12" },
    { text: "Euer Herz erschrecke nicht! Glaubt an Gott und glaubt an mich!", ref: "Johannes 14:1" },
    { text: "In der Welt habt ihr Angst; aber seid getrost, ich habe die Welt überwunden.", ref: "Johannes 16:33" },
    { text: "Siehe, ich stehe vor der Tür und klopfe an.", ref: "Offenbarung 3:20" },
    { text: "Wer zu mir kommt, den werde ich nicht hinausstoßen.", ref: "Johannes 6:37" },
    { text: "Und siehe, ich bin bei euch alle Tage bis an der Welt Ende.", ref: "Matthäus 28:20" },
    { text: "Jesus Christus gestern und heute und derselbe auch in Ewigkeit.", ref: "Hebräer 13:8" },
    { text: "Ich bin das A und das O, der Anfang und das Ende.", ref: "Offenbarung 21:6" },
    { text: "Denn nichts kann uns scheiden von der Liebe Gottes.", ref: "Römer 8:39" },
    { text: "Wir wissen, dass denen, die Gott lieben, alle Dinge zum Besten dienen.", ref: "Römer 8:28" },
    { text: "Ist Gott für uns, wer kann wider uns sein?", ref: "Römer 8:31" },
    { text: "Danket dem HERRN; denn er ist freundlich, und seine Güte währet ewiglich.", ref: "Psalm 136:1" },
    { text: "Lobe den HERRN, meine Seele, und vergiss nicht, was er dir Gutes getan hat.", ref: "Psalm 103:2" },
    { text: "Ich liege und schlafe ganz mit Frieden; denn allein du, HERR, hilfst mir.", ref: "Psalm 4:9" },
    { text: "Der Engel des HERRN lagert sich um die her, die ihn fürchten, und hilft ihnen heraus.", ref: "Psalm 34:8" },
    { text: "Wirf dein Anliegen auf den HERRN; der wird dich versorgen.", ref: "Psalm 55:23" },
    { text: "Lehre mich tun nach deinem Wohlgefallen, denn du bist mein Gott.", ref: "Psalm 143:10" },
    { text: "In deiner Hand steht meine Zeit.", ref: "Psalm 31:16" },
    { text: "Ich aber will auf den HERRN schauen und harren auf den Gott meines Heils.", ref: "Micha 7:7" },
    { text: "Denn er hat seinen Engeln befohlen, dass sie dich behüten auf allen deinen Wegen.", ref: "Psalm 91:11" }
];

// === STATE ===
let state = {
    hoursRemaining: 24,
    maxHours: 24,
    lastUpdate: Date.now(),
    streak: 0,
    lastActiveDate: null,
    activities: [...defaultActivities],
    verseHistory: [],
    currentVerseIndex: 0,
    devMode: false
};

// === DOM ELEMENTE ===
const $ = id => document.getElementById(id);
const flameInner = $('flameInner');
const flameGlow = $('flameGlow');
const flameContainer = $('flameContainer');
const percentageEl = $('percentage');
const timeLeftEl = $('timeLeft');
const streakCountEl = $('streakCount');
const verseEl = $('verse');
const verseRefEl = $('verseRef');
const activityGrid = $('activityGrid');
const settingsPage = $('settingsPage');
const editModal = $('editModal');
const activitiesList = $('activitiesList');
const maxHoursSlider = $('maxHoursSlider');
const maxHoursValue = $('maxHoursValue');
const activityHours = $('activityHours');
const hoursDisplay = $('hoursDisplay');
const activityName = $('activityName');
const emojiPicker = $('emojiPicker');
const changelogEl = $('changelog');
const appVersionEl = $('appVersion');
const updateModal = $('updateModal');
const appVersionModalEl = $('appVersionModal');
const updateModalListEl = $('updateModalList');
const closeUpdateModalBtn = $('closeUpdateModal');
const devTools = document.getElementById('devTools');
const devModeToggle = document.getElementById('devModeToggle');
const flameGray = $('flameGray');

let editingActivityId = null;
let selectedEmoji = '🙏';

// === NACHTMODUS CHECK ===
function isNightTime() {
    const hour = new Date().getHours();
    return hour >= 22 || hour < 7;
}

// === BIBELVERS ALGORITHMUS (Wenig Wiederholungen) ===
function getNextVerse() {
    // Falls History voll ist, leeren
    if (state.verseHistory.length >= verses.length - 10) {
        state.verseHistory = [];
    }
    
    // Zufälligen Vers finden der nicht in History ist
    let availableIndices = [];
    for (let i = 0; i < verses.length; i++) {
        if (!state.verseHistory.includes(i)) {
            availableIndices.push(i);
        }
    }
    
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    state.verseHistory.push(randomIndex);
    state.currentVerseIndex = randomIndex;
    
    return verses[randomIndex];
}

function showVerse() {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('verseDate');
    
    let verse;
    if (savedDate === today && state.currentVerseIndex !== undefined) {
        verse = verses[state.currentVerseIndex];
    } else {
        verse = getNextVerse();
        localStorage.setItem('verseDate', today);
        save();
    }
    
    verseEl.textContent = `"${verse.text}"`;
    verseRefEl.textContent = verse.ref;
}

function renderChangelog() {
    if (!changelogEl || !appVersionEl) return;

    appVersionEl.textContent = APP_VERSION;

    changelogEl.innerHTML = CHANGELOG.map(entry => `
        <div class="changelog-item">
          <div class="changelog-title">
            <div>Version ${entry.version}</div>
            <div class="changelog-date">${entry.date}</div>
          </div>
          <ul class="changelog-list">
            ${entry.changes.map(c => `<li>${c}</li>`).join('')}
          </ul>
        </div>
    `).join('');
}

function showUpdateModalIfNeeded() {
    const lastSeen = localStorage.getItem('seelenflamme_lastSeenVersion') || "";
    if (lastSeen === APP_VERSION) return;

    // zeige Änderungen der aktuellen Version (erste im CHANGELOG)
    const current = CHANGELOG.find(x => x.version === APP_VERSION) || CHANGELOG[0];

    if (appVersionModalEl) appVersionModalEl.textContent = APP_VERSION;
    if (updateModalListEl && current) {
        updateModalListEl.innerHTML = current.changes.map(c => `<li>${c}</li>`).join('');
    }

    if (updateModal) updateModal.classList.add('open');
}

function closeUpdateModalAndMarkSeen() {
    localStorage.setItem('seelenflamme_lastSeenVersion', APP_VERSION);
    if (updateModal) updateModal.classList.remove('open');
}

// === SPEICHERN & LADEN ===
function save() {
    localStorage.setItem('seelenflamme', JSON.stringify(state));
}

function load() {
    const saved = localStorage.getItem('seelenflamme');
    if (saved) {
        const loaded = JSON.parse(saved);
        state = { ...state, ...loaded };state.devMode
        
        // Verstrichene Zeit berechnen (aber nicht nachts!)
        const elapsedMs = Date.now() - state.lastUpdate;
        const elapsedHours = calculateActiveHours(state.lastUpdate, Date.now());
        
        state.hoursRemaining = Math.max(0, state.hoursRemaining - elapsedHours);
        state.lastUpdate = Date.now();
    }
    checkStreak();
    if (typeof state.devMode !== 'boolean') state.devMode = false;
}

// === BERECHNE AKTIVE STUNDEN (Ohne Nachtzeit) ===
function calculateActiveHours(startTime, endTime) {
    let activeMs = 0;
    let current = startTime;
    
    while (current < endTime) {
        const date = new Date(current);
        const hour = date.getHours();
        
        // Nicht nachts zählen (22:00 - 07:00)
        if (hour >= 7 && hour < 22) {
            const nextCheck = Math.min(current + 60000, endTime); // 1 Minute
            activeMs += nextCheck - current;
        }
        
        current += 60000; // 1 Minute vorwärts
    }
    
    return activeMs / (1000 * 60 * 60); // In Stunden
}

function checkStreak() {
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    if (state.lastActiveDate === yesterday && state.hoursRemaining > 0) {
        state.streak++;
    } else if (state.lastActiveDate !== today && state.lastActiveDate !== yesterday) {
        state.streak = state.hoursRemaining > 0 ? 1 : 0;
    }
    state.lastActiveDate = today;
}

// === UI UPDATE ===
function updateUI() {
    const percent = Math.max(0, (state.hoursRemaining / state.maxHours) * 100);
    
    
const clamped = Math.max(0, Math.min(100, percent));

if (flameGray) {
  // je mehr Zeit übrig, desto mehr wird unten "weggeclippt"
  // 100% => inset bottom 100% (Overlay unsichtbar)
  // 0%   => inset bottom 0%   (Overlay voll sichtbar)
  const bottomInset = clamped;

  flameGray.style.clipPath = `inset(0 0 ${bottomInset}% 0)`;
  flameGray.style.webkitClipPath = `inset(0 0 ${bottomInset}% 0)`;

  // Optional: bei ~100% komplett ausblenden, um 1px Artefakte zu vermeiden
  flameGray.style.opacity = clamped >= 99.9 ? '0' : '0.9';
}
    
    // Glow anpassen
    flameGlow.style.opacity = percent / 100;
    
    // Text
    percentageEl.textContent = Math.round(percent) + '%';
    
    const totalMinutes = Math.max(0, Math.floor(state.hoursRemaining * 60));
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    
    if (isNightTime()) {
        timeLeftEl.textContent = `🌙 Nachtruhe – Timer pausiert`;
    } else if (state.hoursRemaining > 0) {
        timeLeftEl.textContent = `Noch ${h}h ${m}m`;
    } else {
        timeLeftEl.textContent = "Zeit zum Aufladen! 🙏";
    }
    
    // Streak
    streakCountEl.textContent = state.streak;
}

function renderActivities() {
    activityGrid.innerHTML = state.activities.map(act => `
        <button class="activity-btn" data-id="${act.id}">
            <span class="activity-icon">${act.icon}</span>
            <span class="activity-name">${act.name}</span>
            <span class="activity-time">+${act.hours}h</span>
        </button>
    `).join('');
    
    document.querySelectorAll('.activity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const activity = state.activities.find(a => a.id === id);
            if (activity) {
                addHours(activity.hours, btn);
                state.hoursRemaining = Math.min(state.maxHours, state.hoursRemaining + activity.hours);
            }
        });
    });
}

function renderSettingsActivities() {
    activitiesList.innerHTML = state.activities.map(act => `
        <div class="activity-item" data-id="${act.id}">
            <span class="activity-item-icon">${act.icon}</span>
            <div class="activity-item-info">
                <div class="activity-item-name">${act.name}</div>
                <div class="activity-item-hours">+${act.hours} Stunden</div>
            </div>
            <div class="activity-item-actions">
                <button class="btn-edit" data-id="${act.id}">✏️</button>
                <button class="btn-delete" data-id="${act.id}">🗑️</button>
            </div>
        </div>
    `).join('');
    
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.id)));
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => deleteActivity(parseInt(btn.dataset.id)));
    });
}

// === AKTIVITÄT ===
function addHours(hours, btn) {
    state.hoursRemaining = Math.max(0, Math.min(state.maxHours, state.hoursRemaining + hours));
    state.lastUpdate = Date.now();
    state.lastActiveDate = new Date().toDateString();
    
    btn.classList.add('pulse');
    setTimeout(() => btn.classList.remove('pulse'), 400);
    
    if (navigator.vibrate) navigator.vibrate(50);
    
    save();
    updateUI();
}

function deleteActivity(id) {
    if (state.activities.length <= 1) {
        alert('Du brauchst mindestens eine Aktivität!');
        return;
    }
    if (confirm('Aktivität wirklich löschen?')) {
        state.activities = state.activities.filter(a => a.id !== id);
        save();
        renderActivities();
        renderSettingsActivities();
    }
}

// === MODAL ===
function openEditModal(id = null) {
    editingActivityId = id;
    
    if (id) {
        const act = state.activities.find(a => a.id === id);
        $('modalTitle').textContent = 'Aktivität bearbeiten';
        activityName.value = act.name;
        activityHours.value = act.hours;
        hoursDisplay.textContent = act.hours;
        selectedEmoji = act.icon;
    } else {
        $('modalTitle').textContent = 'Neue Aktivität';
        activityName.value = '';
        activityHours.value = 2;
        hoursDisplay.textContent = '2';
        selectedEmoji = '🙏';
    }
    
    document.querySelectorAll('.emoji-option').forEach(el => {
        el.classList.toggle('selected', el.dataset.emoji === selectedEmoji);
    });
    
    editModal.classList.add('open');
}

function closeEditModal() {
    editModal.classList.remove('open');
    editingActivityId = null;
}

function saveActivity() {
    const name = activityName.value.trim();
    const hours = parseFloat(activityHours.value);
    
    if (!name) {
        alert('Bitte gib einen Namen ein!');
        return;
    }
    
    if (editingActivityId) {
        const act = state.activities.find(a => a.id === editingActivityId);
        act.name = name;
        act.hours = hours;
        act.icon = selectedEmoji;
    } else {
        const newId = Math.max(...state.activities.map(a => a.id), 0) + 1;
        state.activities.push({
            id: newId,
            icon: selectedEmoji,
            name: name,
            hours: hours
        });
    }
    
    save();
    renderActivities();
    renderSettingsActivities();
    closeEditModal();
}

// === SETTINGS ===
function openSettings() {
    maxHoursSlider.value = state.maxHours;
    maxHoursValue.textContent = state.maxHours + ' Stunden';
    renderSettingsActivities();
    settingsPage.classList.add('open');
    if (devModeToggle) devModeToggle.checked = !!state.devMode;
}

function closeSettings() {
    settingsPage.classList.remove('open');
}

function resetAllData() {
    if (confirm('Wirklich alle Daten löschen? Das kann nicht rückgängig gemacht werden!')) {
        localStorage.removeItem('seelenflamme');
        localStorage.removeItem('verseDate');
        state = {
            hoursRemaining: 24,
            maxHours: 24,
            lastUpdate: Date.now(),
            streak: 0,
            lastActiveDate: null,
            activities: [...defaultActivities],
            verseHistory: [],
            currentVerseIndex: 0
        };
        save();
        updateUI();
        renderActivities();
        renderSettingsActivities();
        showVerse();
        closeSettings();
    }
}

// === DRAIN ===
function drain() {
    // Nachts nicht drainieren
    if (isNightTime()) {
        state.lastUpdate = Date.now();
        save();
        updateUI();
        return;
    }
    
    const elapsed = (Date.now() - state.lastUpdate) / (1000 * 60 * 60);
    state.hoursRemaining = Math.max(0, state.hoursRemaining - elapsed);
    state.lastUpdate = Date.now();
    save();
    updateUI();
}

function applyDevModeUI() {
  if (!devTools) return;
  devTools.style.display = state.devMode ? 'flex' : 'none';
}

function setupDevTools() {
  if (!devTools) return;

  // Buttons nur 1x verdrahten:
  devTools.querySelectorAll('.dev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = parseFloat(btn.dataset.delta); // negativ

      // rein technisch Zeit ändern (ohne "Aktivität" zu loggen)
      state.hoursRemaining = Math.max(0, Math.min(state.maxHours, state.hoursRemaining + delta));
      state.lastUpdate = Date.now();

      save();
      updateUI();
      applyDevModeUI();
    });
  });

  applyDevModeUI();
}


// === EVENT LISTENER ===
$('settingsBtn').addEventListener('click', openSettings);
$('backBtn').addEventListener('click', closeSettings);
$('addActivityBtn').addEventListener('click', () => openEditModal());
$('cancelModal').addEventListener('click', closeEditModal);
$('saveModal').addEventListener('click', saveActivity);
$('resetBtn').addEventListener('click', resetAllData);
if (closeUpdateModalBtn) {
    closeUpdateModalBtn.addEventListener('click', closeUpdateModalAndMarkSeen);
}
if (updateModal) {
    updateModal.addEventListener('click', (e) => {
        if (e.target === updateModal) closeUpdateModalAndMarkSeen();
    });
}
if (devTools) {
  devTools.style.display = DEV_MODE ? 'flex' : 'none';

  devTools.querySelectorAll('.dev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const delta = parseFloat(btn.dataset.delta); // negativ
      // Nur "technisch" ändern – ohne Streak/lastActiveDate zu beeinflussen:
      state.hoursRemaining = Math.max(0, Math.min(state.maxHours, state.hoursRemaining + delta));
      state.lastUpdate = Date.now();
      save();
      updateUI();
    });
  });
}
if (devModeToggle) {
  devModeToggle.addEventListener('change', () => {
    state.devMode = !!devModeToggle.checked;
    save();
    applyDevModeUI();
  });
}



maxHoursSlider.addEventListener('input', () => {
    state.maxHours = parseInt(maxHoursSlider.value);
    maxHoursValue.textContent = state.maxHours + ' Stunden';
    if (state.hoursRemaining > state.maxHours) {
        state.hoursRemaining = state.maxHours;
    }
    save();
    updateUI();
});

activityHours.addEventListener('input', () => {
    hoursDisplay.textContent = activityHours.value;
});

document.querySelectorAll('.emoji-option').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.emoji-option').forEach(e => e.classList.remove('selected'));
        el.classList.add('selected');
        selectedEmoji = el.dataset.emoji;
    });
});

editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeEditModal();
});

// === START ===
load();
showVerse();
updateUI();
renderActivities();
setupDevTools();
applyDevModeUI();
save();
setInterval(drain, 1000);
renderChangelog();
showUpdateModalIfNeeded();

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}