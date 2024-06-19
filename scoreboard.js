// Firebase-Konfiguration (nochmal zur Sicherheit)
const firebaseConfig = {
    apiKey: "AIzaSyB8bzHGctc2pzPVdIuoQaWqS5qPDkf_tOs",
    authDomain: "website-portofolio-c9053.firebaseapp.com",
    projectId: "website-portofolio-c9053",
    storageBucket: "website-portofolio-c9053.appspot.com",
    messagingSenderId: "82609291871",
    appId: "1:82609291871:web:03c0071dace6b9794ed1ea",
    measurementId: "G-2XWBW2BV2S"
};

// Firebase initialisieren (nochmal zur Sicherheit)
firebase.initializeApp(firebaseConfig);

// Firebase Realtime Database Referenz
const database = firebase.database();

// Spielerliste
const players = ['Tim', 'Tobias', 'Sophie'];

// Funktion zum Laden der Punktzahlen für ein Spiel und einen Spieler
function loadScores(player, game) {
    const scoreElement = document.getElementById(`${player.toLowerCase()}-${game.toLowerCase()}-score`);
    const playerRef = database.ref(`${player}/${game}`);

    playerRef.on('value', (snapshot) => {
        const score = snapshot.val() || 0;
        scoreElement.innerText = score;
    });
}

// Funktion zum Laden der Punktzahlen für alle Spiele eines Spielers
function loadAllScores(player) {
    loadScores(player, 'Uno');
    loadScores(player, 'Wizard');
    // Hier weitere Spiele hinzufügen, falls benötigt
}

// DOM vollständig geladen und Firebase ist bereit
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM vollständig geladen und Firebase ist bereit.');

    // Lade die Punktzahlen für jedes Spiel für jeden Spieler
    players.forEach(player => {
        loadAllScores(player);
    });
});
