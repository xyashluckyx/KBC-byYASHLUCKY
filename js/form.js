class Form{
    constructor(){
       this.input = createInput("");
       this.input2 = createElement('h2');
       this.next1 = createButton('NEXT');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.info1 = createElement('h2');
       this.next2 = createButton('NEXT');
       this.next3 = createButton('NEXT');
       this.button = createElement('h2');
    }
    hide() {
        this.greeting.hide();
        this.next1.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("WELCOME TO KBC");
        this.title.position(195, 0);
        this.title.style('font-size', '90px');
        this.title.style('color', 'yellow');
        this.next1.position(500,600);
        this.next1.style('width', '200px');
        this.next1.style('height', '40px');
        this.next1.style('background', 'white');
        this.next1.style('font-size', '30px');

        if(gameState===0){
            if(keyWentDown("RIGHT_ARROW")){
                line.x=-600;
                line.velocityX=5;
              gameState=1;
              this.next1.hide();
            this.title.hide();
            this.info1.html("ENTER YOUR NAME");
            this.info1.position(170, 0);
            this.info1.style('font-size', '90px');
            this.info1.style('color', 'yellow');
            this.input2.html("NAME(UPTO 17 CHARACTERS)");
            this.input2.position(448, 310);
            this.input2.style('font-size', '20px');
            this.input2.style('color', 'white');
            this.input2.style('background', 'darkblue');
            this.title.hide();
            this.next1.hide();
            this.input.position(445,350);
            this.input.style('width', '300px');
            this.input.style('height', '40px');
            this.input.style('background', 'lavender');
            this.input.style('font-size', '19.8px');
            this.next2.position(500,600);
            this.next2.style('width', '200px');
            this.next2.style('height', '40px');
            this.next2.style('background', 'white');
            this.next2.style('font-size', '30px');
            }
          }


        this.next1.mousePressed(() => {
          line.x=-600;
          line.velocityX=5;
            gameState+= 1;
            this.next1.hide();
            this.title.hide();
            this.info1.html("ENTER YOUR NAME");
            this.info1.position(170, 0);
            this.info1.style('font-size', '90px');
            this.info1.style('color', 'yellow');
            this.input2.html("NAME(UPTO 17 CHARACTERS)");
            this.input2.position(448, 310);
            this.input2.style('font-size', '20px');
            this.input2.style('color', 'white');
            this.input2.style('background', 'darkblue');
            this.title.hide();
            this.next1.hide();
            this.input.position(445,350);
            this.input.style('width', '300px');
            this.input.style('height', '40px');
            this.input.style('background', 'lavender');
            this.input.style('font-size', '19.8px');
            this.next2.position(500,600);
            this.next2.style('width', '200px');
            this.next2.style('height', '40px');
            this.next2.style('background', 'white');
            this.next2.style('font-size', '30px');
        });

          if(gameState===1){
              if(line.x>-500){
            if(keyWentDown("RIGHT_ARROW")){
              gameState=2;
              kbcSound.play();
              line.x=-600;
            line.velocityX=5;
            this.input.hide();
            this.next2.hide();
            this.info1.hide();
            this.input2.hide();
            player.name = this.input.value().toUpperCase();
            player.update();
            if(line.x===600){
                line.velocityX=0;
              }
            }
          }
        }

        this.input.mousePressed(() => {
            this.input2.hide();

        })
        
        this.next2.mousePressed(() => {
            kbcSound.play();
            gameState+=1;
            line.x=-600;
            line.velocityX=5;
            this.input.hide();
            this.next2.hide();
            this.info1.hide();
            this.input2.hide();
            player.name = this.input.value().toUpperCase();
            player.update();
            if(line.x===600){
                line.velocityX=0;
              }
        })

        if(gameState===2){
            if(line.x===600){
                if(keyWentDown("RIGHT_ARROW")){
                    kbcSound.stop();
                    gameState+=1;
                    this.greeting.hide();
                    this.next3.hide();
                }
            }
        }
        
if(line.x===600){
    this.next3.position(500,600);
    this.next3.style('width', '200px');
    this.next3.style('height', '40px');
    this.next3.style('background', 'white');
    this.next3.style('font-size', '30px');
        this.next3.mousePressed(() => {
            kbcSound.stop();
            gameState+=1;
            this.greeting.hide();
            this.next3.hide();
        })
    }
    }
}