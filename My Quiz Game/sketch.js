var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var question;
var database;

var form, player, game;

var answer;

function preload(){
  
}

function setup(){
  canvas = createCanvas(1000,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
}
