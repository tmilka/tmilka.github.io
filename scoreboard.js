// Firebase-Konfiguration (wird hier erneut zur Sicherheit initialisiert)
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

// Funktion zum Laden der Punktzahlen
function loadScores() {
    players.forEach(player => {
        const scoreElement = document.getElementById(`${player.toLowerCase()}-score`);
        const playerRef = database.ref('scores/' + player);

        playerRef.on('value', (snapshot) => {
            const score = snapshot.val() || 0;
            scoreElement.innerText = score;
        });
    });
}

// Funktion zum Hinzufügen eines Sieges für einen Spieler
function addWin(player) {
    const playerRef = database.ref('scores/' + player);
    playerRef.transaction(currentScore => (currentScore || 0) + 1);
}

// DOM vollständig geladen und Firebase ist bereit
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM vollständig geladen und Firebase ist bereit.');
    loadScores(); // Lade die Punktzahlen beim Laden der Seite
});
