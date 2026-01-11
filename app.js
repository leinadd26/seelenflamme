// === DEFAULT AKTIVITÄTEN ===
const defaultActivities = [
    { id: 1, icon: '🙏', name: 'Gebet', hours: 2 },
    { id: 2, icon: '📖', name: 'Bibel lesen', hours: 4 },
    { id: 3, icon: '🎵', name: 'Lobpreis', hours: 3 },
    { id: 4, icon: '⛪', name: 'Gottesdienst', hours: 8 },
    { id: 5, icon: '🤝', name: 'Gemeinschaft', hours: 2 },
    { id: 6, icon: '💭', name: 'Stille Zeit', hours: 1 }
];

// === BIBELVERSE ===
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
    { text: "Und ob ich schon wanderte im finstern Tal, fürchte ich kein Unglück; denn du bist bei mir.", ref: "Psalm 23:4" }
];

// === STATE ===
let state = {
    hoursRemaining: 24,
    maxHours: 24,
    lastUpdate: Date.now(),
    streak: 0,
    lastActiveDate: null,
    activities: [...defaultActivities]
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

let editingActivityId = null;
let selectedEmoji = '🙏';

// === SPEICHERN & LADEN ===
function save() {
    localStorage.setItem('seelenflamme', JSON.stringify(state));
}

function load() {
    const saved = localStorage.getItem('seelenflamme');
    if (saved) {
        const loaded = JSON.parse(saved);
        state = { ...state, ...loaded };
        
        // Verstrichene Zeit berechnen
        const elapsedHours = (Date.now() - state.lastUpdate) / (1000 * 60 * 60);
        state.hoursRemaining = Math.max(0, state.hoursRemaining - elapsedHours);
        state.lastUpdate = Date.now();
    }
    checkStreak();
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
    
    flameInner.style.height = Math.max(10, percent) + '%';
    flameGlow.style.opacity = percent / 100;
    
    percentageEl.textContent = Math.round(percent) + '%';
    
    const h = Math.floor(state.hoursRemaining);
    const m = Math.round((state.hoursRemaining - h) * 60);
    timeLeftEl.textContent = state.hoursRemaining > 0 
        ? `Noch ${h}h ${m}m` 
        : "Zeit zum Aufladen! 🙏";
    
    flameContainer.classList.toggle('low', percent < 25);
    
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
    
    // Event Listener
    document.querySelectorAll('.activity-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const activity = state.activities.find(a => a.id === id);
            if (activity) {
                addHours(activity.hours, btn);
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
    
    // Edit buttons
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => openEditModal(parseInt(btn.dataset.id)));
    });
    
    // Delete buttons
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => deleteActivity(parseInt(btn.dataset.id)));
    });
}

function showVerse() {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const verse = verses[dayOfYear % verses.length];
    verseEl.textContent = `"${verse.text}"`;
    verseRefEl.textContent = verse.ref;
}

// === AKTIVITÄT ===
function addHours(hours, btn) {
    state.hoursRemaining = Math.min(state.maxHours, state.hoursRemaining + hours);
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
    
    // Emoji Selection
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
}

function closeSettings() {
    settingsPage.classList.remove('open');
}

function resetAllData() {
    if (confirm('Wirklich alle Daten löschen? Das kann nicht rückgängig gemacht werden!')) {
        localStorage.removeItem('seelenflamme');
        state = {
            hoursRemaining: 24,
            maxHours: 24,
            lastUpdate: Date.now(),
            streak: 0,
            lastActiveDate: null,
            activities: [...defaultActivities]
        };
        save();
        updateUI();
        renderActivities();
        renderSettingsActivities();
        closeSettings();
    }
}

// === DRAIN ===
function drain() {
    const elapsed = (Date.now() - state.lastUpdate) / (1000 * 60 * 60);
    state.hoursRemaining = Math.max(0, state.hoursRemaining - elapsed);
    state.lastUpdate = Date.now();
    save();
    updateUI();
}

// === EVENT LISTENER ===
$('settingsBtn').addEventListener('click', openSettings);
$('backBtn').addEventListener('click', closeSettings);
$('addActivityBtn').addEventListener('click', () => openEditModal());
$('cancelModal').addEventListener('click', closeEditModal);
$('saveModal').addEventListener('click', saveActivity);
$('resetBtn').addEventListener('click', resetAllData);

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

// Close modal on overlay click
editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeEditModal();
});

// === START ===
load();
showVerse();
updateUI();
renderActivities();
save();
setInterval(drain, 1000);

// Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}