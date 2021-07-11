class Form{
    constructor(){
        this.title = createElement('h1');
        this.input1 = createInput('Enter Your Name');
        this.input2 = createInput('Enter Your Option Number');
        this.submit = createButton('Submit');
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.reset = createButton('Reset');
    }

    hide(){
        this.submit.hide();
        this.input1.hide();
        this.title.hide();
        this.input2.hide();
      }

      display(){
        this.title.html("My Quiz Game");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 40);
        this.submit.position(displayWidth/2 + 30, displayHeight/2);
        this.reset.position(displayWidth - 100, 20);
        this.question.html("Which was the higest grossing album in 2013?");
        this.question.position(100, 80);
        this.option1.html("1.Repuatation");
        this.option1.position(100,100);
        this.option2.html("2.Mind of Mine");
        this.option2.position(100,120);
        this.option3.html("3.Heartbreak Weather");
        this.option3.position(100,140);
        this.option4.html("4.Midnight Memories");
        this.option4.position(100,160);
  
        this.submit.mousePressed(()=>{
          this.input1.hide();
          this.input2.hide();
          this.title.hide();
          this.submit.hide();
          player.name = this.input1.value();
          player.answer = this.input2.value();
          playerCount+=1;
          player.index = playerCount;
          player.update();
          player.updateCount(playerCount);
        });
        
        this.reset.mousePressed(() =>{
          var playerReference = database.ref('players');
          playerReference.remove();
          player.updateCount(0);
          game.update(0);
        })
    
      }
}