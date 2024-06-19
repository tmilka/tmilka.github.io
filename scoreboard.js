const firebaseConfig = {
    apiKey: "AIzaSyB8bzHGctc2pzPVdIuoQaWqS5qPDkf_tOs",
    authDomain: "website-portofolio-c9053.firebaseapp.com",
    projectId: "website-portofolio-c9053",
    storageBucket: "website-portofolio-c9053.appspot.com",
    messagingSenderId: "82609291871",
    appId: "1:82609291871:web:03c0071dace6b9794ed1ea",
    measurementId: "G-2XWBW2BV2S"
};

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM vollständig geladen und bereit.');
    // Hier kannst du deine Initialisierungs- und Funktionsaufrufe platzieren
    initializeFirebase();
});


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const players = ['Tim', 'Tobias', 'Sophie'];

players.forEach(player => {
    const scoreElement = document.getElementById(`${player.toLowerCase()}-score`);
    const playerRef = database.ref('scores/' + player);

    playerRef.on('value', (snapshot) => {
        const score = snapshot.val() || 0;
        scoreElement.innerText = score;
    });
});

function addWin(player) {
    const playerRef = database.ref('scores/' + player);
    playerRef.transaction(currentScore => (currentScore || 0) + 1);
}
