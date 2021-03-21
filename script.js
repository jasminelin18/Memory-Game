// Global Constants
// const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

// Global Variables
// var pattern = [2, 5, 4, 3, 2, 1, 6, 4]; // keeps track of secret pattern of button presses
var progress = 0; // represents how far along player is in guessing patter
var gamePlaying = false; // assign Boolean value that will keep track of whether game is currently active
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0; // keeps track of where user is in clue sequence
var clueHoldTime = 1000;
var pattern = [];
var mistakes = 0;
var givenTime = 10;
var remainingTime = 0;
var timer;

function randomPattern(){
  for (let i = 0; i < 8; i++){
    pattern.push(Math.floor(Math.random() * (6 - 1 + 1) + 1));
  }
}

// starts game
function startGame(){
  
  randomPattern();
  
  // initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  mistakes = 0;
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  playClueSequence();
}

// stop game
function stopGame(){
  
  pattern = [];
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  remainingTime = 0;
}

// Sound Synthesis Functions
const freqMap = {
  1: 250.1,
  2: 303.6,
  3: 362.2,
  4: 386.8, 
  5: 391.1,
  6: 486.6
}
// takes button number and length of time
// plays tone for amount of time specified
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
// start tone will continue playing until you call stop tone
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)

// lighting or clearing button
function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

// play single clue
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}


function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  clearTimeout(timer);
  for(let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue, delay, pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 120;
  remainingTime = givenTime;
  document.getElementById("Time").innerHTML = "Time remaining: " + remainingTime;
  timer = setTimeout(function tick() {
    if (gamePlaying) {
      updateTimer();
      timer = setTimeout(tick, 1000);
    }
  }, delay);
}

function updateTimer(){
  if (remainingTime >= 0){
    document.getElementById("Time").innerHTML = "Time remaining: " + remainingTime;
    remainingTime--;
  }
  else{
    loseGame();
  }
}

// if user loses game
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}
// if user wins game
function winGame(){
  stopGame();
  alert("You won!");
}

// for checking each guess
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(btn == pattern[guessCounter]){
    if(guessCounter == progress){
      if(progress == pattern.length - 1){
        winGame();
      } 
      else{
        progress++;
        playClueSequence();
      }
    }
    else{
      guessCounter++;
    }
  }
  else{
    mistakes++;
    document.getElementById("Strikes").innerHTML = "Strike: " + mistakes;
    if (mistakes == 3){
      loseGame();      
    }
  }
}