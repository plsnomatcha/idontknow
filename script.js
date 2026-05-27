// LOADING SCREEN
setTimeout(() => {
  
  document.getElementById("loadingScreen").style.display = "none";
  
  document.getElementById("mainScreen").style.display = "block";
  
  // LOAD FIRST CD
  loadCD(currentCD);
  
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