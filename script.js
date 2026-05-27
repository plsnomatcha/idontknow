// LOADING SCREEN
setTimeout(() => {

  const loadingScreen = document.getElementById("loadingScreen");
  const mainScreen = document.getElementById("mainScreen");

  // FADE OUT
  loadingScreen.style.opacity = "0";

  setTimeout(() => {

    loadingScreen.style.display = "none";

    // SHOW MAIN
    mainScreen.style.display = "block";

    // FADE IN
    setTimeout(() => {
      mainScreen.style.opacity = "1";
    }, 10);

    // LOAD FIRST CD
    loadCD(currentCD);

  }, 500);

}, 1500);

// CAT REFERENCES
const cat1 = document.getElementById("cat1");

const cat2 = document.getElementById("cat2");



// CAT1 TOGGLE
let cat1State = false;

cat1.addEventListener("click", () => {
  
  if (!cat1State) {
    
    cat1.src = "catt1.png";
    
    cat1State = true;
    
  } else {
    
    cat1.src = "cat1.png";
    
    cat1State = false;
    
  }
  
});



// CAT2 TOGGLE
let cat2State = false;

cat2.addEventListener("click", () => {
  
  if (!cat2State) {
    
    cat2.src = "catt2.png";
    
    cat2State = true;
    
  } else {
    
    cat2.src = "cat2.png";
    
    cat2State = false;
    
  }
  
});



// MUSIC PLAYER
const discTape = document.getElementById("disctape");

const player = document.getElementById("player");



// CDS + SONGS
const cds = [
  
  { image: "cd1.png", song: "music1.mp3" },
  
  { image: "cd2.png", song: "music2.mp3" },
  
  { image: "cd3.png", song: "music3.mp3" },
  
  { image: "cd4.png", song: "music4.mp3" },
  
  { image: "cd5.png", song: "music5.mp3" },
  
  { image: "cd6.png", song: "music6.mp3" },
  
  { image: "cd7.png", song: "music7.mp3" },
  
  { image: "cd8.png", song: "music8.mp3" },
  
  { image: "cd9.png", song: "music9.mp3" },
  
  { image: "cd10.png", song: "music10.mp3" },
  
  { image: "cd11.png", song: "music11.mp3" },
  
];



// CURRENT CD
let currentCD = 0;



// LOAD CD FUNCTION
function loadCD(index) {
  
  discTape.src = cds[index].image;
  
  player.src = cds[index].song;
  
  player.load();
  
}



// FIRST TAP ANYWHERE = PLAY MUSIC
document.body.addEventListener("click", startMusic, { once: true });

function startMusic() {
  
  player.play();
  
}



// TAP CD = NEXT MUSIC
discTape.addEventListener("click", (e) => {
  
  e.stopPropagation();
  
  currentCD++;
  
  if (currentCD >= cds.length) {
    
    currentCD = 0;
    
  }
  
  loadCD(currentCD);
  
  player.play();
  
});

// FIREBASE IMPORTS
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI7gHJjT6AdES_H04jxk5U4McGnHyDH-k",
  authDomain: "my-baby-b65ef.firebaseapp.com",
  projectId: "my-baby-b65ef",
  storageBucket: "my-baby-b65ef.firebasestorage.app",
  messagingSenderId: "402919711371",
  appId: "1:402919711371:web:5e4739cf88431eaacdea8e"
};

const app = initializeApp(firebaseConfig);