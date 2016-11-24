//this sketch includes a sound file. 
//ensure the mp3 file is in the same folder as the p5 sketch.

var length;
var playButton;
var jazzy; 
var sliderVolume;
var sliderPan;
var sliderRate;

function preload() {
jazzy = loadSound("jazzy.mp3");

jazzy.duration();
}

function setup() {
  createCanvas(800,500);
  
  length = jazzy.duration();
  println(length);
  
  
  playButton = createButton("play");
  playButton.position(100,100);
  playButton.mousePressed(startStop); //mini version of mouse pressed
  
  
  function startStop() { //new function startstop gets the buttons to change from play to stop
    
    if(!jazzy.isPlaying()) { //! is a not expression
      jazzy.play();
      playButton.html("stop");
    } else {
      jazzy.stop();
      playButton.html("play");
    }
   
   jazzy.addCue(5, event);
  }
  
  //jazzy.loop(); //loop plays continually. play plays it once
  sliderVolume = createSlider(0, 1, 0.5, 0.01); //volume 0-1, starting volume, increment 0.01 (means that there's 100 steps from 0 volume to 1)
  sliderVolume.position(100,150);
  
  sliderPan = createSlider(-1, 1, 0, 0.01); //pan size, starting pan, increment
  sliderPan.position(100,175);
  
  sliderRate = createSlider(0, 7, 1, 0.01); //values for rate: min and max
  sliderRate.position(100,125);
}

function draw() {
  
  jazzy.setVolume(sliderVolume.value());
  jazzy.pan(sliderPan.value());
  jazzy.rate(sliderRate.value());
  
  println(jazzy.currentTime());

}

function event() {
  fill(255,0,0);
  ellipse(300,200,50,50);
}

//speed is coupled with pitch. there is a process called granulation that can alter just the pitch.
//cue point - asking the patch to cue music from a selected point *****************
// jazzy.addCue(time, event); in draw
// function event() {
// background (255);
// } ********************

  