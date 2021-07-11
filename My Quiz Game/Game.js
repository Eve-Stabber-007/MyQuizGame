class Game{
    constructor(){

    }

    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value", function(data){
            gameState = data.val()
        })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }
    
      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
          form = new Form()
          form.display();
        }
    } 
    
    play(){
        form.hide();
        background("white");
        fill("Purple");
        textSize(30);
        text("Results are",300,60);
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
          var y1 = 260;
          textSize(20);
          fill("Blue");
          text("Contestants who answered correctly are highlited with green", 50, 240);
          for(var plr in allPlayers){
            var answer = "4";
            if(answer === allPlayers[plr].answer){
              fill("green");
            }
            else{
              fill("red");
            }
            y1 = y1 + 30;
            textSize(20);
            text(allPlayers[plr].name + ":" + allPlayers[plr].answer,150,y1);
          }
        }
    }
}