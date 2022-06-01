var gameState =0;
var playerCount = 0;
var player, form;
var character1, character2, character3;
var select_question,optionImg;
var background1,background2,background3;
var gameState1=NORMAL1;
var NORMAL1=0;
var QUESTION=1;
var WRONG1_2=2;
var WRONG1_3=3;
var WRONG1_4=4;
var WRONG2_1=5;
var WRONG2_3=6;
var WRONG2_4=7;
var WRONG3_1=8;
var WRONG3_2=9;
var WRONG3_4=10;
var WRONG4_1=11;
var WRONG4_2=12;
var WRONG4_3=13;
var CORRECT1=14;
var CORRECT2=15;
var CORRECT3=16;
var CORRECT4=17;
var RESTART=18;
var LIFELINE=19;
var LIFELINE2=20;
var LIFELINE2ACTIVE=21;
var LIFELINE3=22;
var LIFELINE3ACTIVE=23;
var LIFELINE4=24;
var ERR1LIFELINE4=25;
var ERR2LIFELINE4=26;

var lifeline1;
var time=1;
var time2=30;
var l1count=0;
var l2count=0;
var l3count=0;
var l4count=0;
var l5count=0;
var timecount=0;

var score=2.5;
var score2=0;
var scorecount=0;
var bgImg;
var questionnum=1;

function preload(){
  moneyImg=loadAnimation("images/money.png");

  bgImg=loadAnimation("images/kbclogo1.png", "images/kbclogo1.png", "images/kbclogo1.png", "images/kbclogo1.png", "images/kbclogo1.png", "images/kbclogo2.png", "images/kbclogo2.png", "images/kbclogo2.png", "images/kbclogo2.png", "images/kbclogo2.png");

  bg1Img=loadAnimation("images/kbc.jpg");

  abhishekImg=loadImage("images/abhishek bachchan.jpg");
  
  yuvrajImg=loadImage("images/yuvraj singh.jpg");

  amitabhImg=loadImage("images/biggboss.png");

  background1Img=loadImage("images/abhishek bachchan 1.jpg");

  background2Img=loadImage("images/yuvraj singh 1.jpg");

  background3Img=loadImage("images/BIG BOSS.jpg");

  optionImg=loadImage("images/option.jpg");

  wrongOptionImg=loadImage("images/wrongOption.jpg");

  correctOptionImg=loadImage("images/correctOption.jpg");

  questionImg=loadImage("images/question.jpg");

  nextImg=loadImage("images/next.png");
  
  restartImg=loadImage("images/restart.png");

  ready1Img=loadImage("images/ready1.png");

  timerImg=loadImage("images/timer.png");

  lifeline1Img=loadAnimation("images/5050.png");

  lifeline1Img2=loadAnimation("images/no 5050.png");

  lifeline2Img=loadAnimation("images/ask the expert.png");

  lifeline2Img2=loadAnimation("images/no ask the expert.png");

  manImg=loadAnimation("images/ask the expert man.png");

  tvscreenImg=loadAnimation("images/tv screen.png");

  ansOptAImg=loadImage("images/ansopta.png");
 
  ansOptBImg=loadImage("images/ansoptb.png");
 
  ansOptCImg=loadImage("images/ansoptc.png");
 
  ansOptDImg=loadImage("images/ansoptd.png");
 
  cutImg=loadImage("images/cut.png");
  
  lifeline3Img=loadAnimation("images/audience poll.png");
  
  lifeline3Img2=loadAnimation("images/no audience poll.png");
 
  APoptAImg=loadAnimation("images/APoptD.png","images/APoptB.png","images/APoptC.png","images/APoptA.png");
 
  APoptAImg2=loadAnimation("images/APoptA.png");

  APoptBImg=loadAnimation("images/APoptA.png","images/APoptD.png","images/APoptC.png","images/APoptB.png");

  APoptBImg2=loadAnimation("images/APoptB.png");
 
  APoptCImg=loadAnimation("images/APoptA.png","images/APoptB.png","images/APoptD.png","images/APoptC.png");

  APoptCImg2=loadAnimation("images/APoptC.png");
 
  APoptDImg=loadAnimation("images/APoptA.png","images/APoptB.png","images/APoptC.png","images/APoptD.png");

  APoptDImg2=loadAnimation("images/APoptD.png");
 
  lifeline4Img=loadAnimation("images/power paplu.png");

  lifeline4Img2=loadAnimation("images/no power paplu.png");

  AyrImg=loadAnimation("images/AYR.png");

  loadingImg=loadAnimation("images/loading.png","images/loading.png","images/loading.png","images/loading2.png","images/loading2.png","images/loading2.png","images/loading3.png","images/loading3.png","images/loading3.png","images/loading4.png","images/loading4.png");

  yesImg=loadImage("images/yes.png");
  
  noImg=loadImage("images/no.png");

  okImg=loadImage("images/ok.png");

  clock=loadSound("sound/beep_once.mp3");

  kbcSound=loadSound("sound/kbc_5_newest.mp3");
  
  kbcSound2=loadSound("sound/kbc.mp3");

  wrong=loadSound("sound/wrong.mp3");

  correct=loadSound("sound/correct.mp3");

}

function setup() {
  createCanvas(1200, 700);


  character1=createSprite(200,400,10,10);
  character1.addImage(abhishekImg);
  character1.scale=0.6
  character1.visible=false;

  bg=createSprite(600,380,10,10);
  bg.addAnimation("running",bgImg);
  bg.scale=0.6;
  bg.visible=true;

  bg1=createSprite(600,350,10,10);
  bg1.addAnimation("running",bg1Img);
  bg1.scale=1;
  bg1.visible=false;

  background1=createSprite(600,350,10,10);
  background1.addImage(background1Img);
  background1.scale=1.2;
  background1.visible=false;
  
  background2=createSprite(600,350,10,10);
  background2.addImage(background2Img);
  background2.scale=1;
  background2.visible=false;

  background3=createSprite(600,350,10,10);
  background3.addImage(background3Img);
  background3.scale=1.44;
  background3.visible=false;

  character2=createSprite(600,400,10,10);
  character2.addImage(yuvrajImg)
  character2.scale=0.3;
  character2.visible=false;

  character3=createSprite(1000,400,10,10);
  character3.addImage(amitabhImg)
  character3.scale=0.1
  character3.visible=false;

  select_question=Math.round(random(1,126));

  timer=createSprite(620,400,10,10);
  timer.addImage(timerImg);
  timer.scale=1;
  timer.visible=false;
  
  next=createSprite(625,310,10,10);
  next.addImage(nextImg);
  next.scale=1;
  next.visible=false;

  restart=createSprite(625,310,10,10);
  restart.addImage(restartImg);
  restart.scale=1;
  restart.visible=false;

  ready=createSprite(625,310,10,10);
  ready.addImage(ready1Img);
  ready.scale=0.9;
  ready.visible=false;

  question1bg=createSprite(650,480,10,10);
  question1bg.addImage(questionImg);
  question1bg.scale=1.1;
  question1bg.visible=false;

   option1bg=createSprite(430,570,10,10);
  option1bg.addImage(optionImg);
  option1bg.scale=1.2;
  option1bg.visible=false;      

   option2bg=createSprite(870,570,10,10);
  option2bg.addImage(optionImg);
  option2bg.scale=1.2;
  option2bg.visible=false;     

   option3bg=createSprite(430,640,10,10);
  option3bg.addImage(optionImg);
  option3bg.scale=1.2;
  option3bg.visible=false;     

   option4bg=createSprite(870,640,10,10);
  option4bg.addImage(optionImg);
  option4bg.scale=1.2;
  option4bg.visible=false; 

  wrongOption=createSprite(870,570,10,10);
  wrongOption.addImage(wrongOptionImg);
  wrongOption.scale=1.2;
  wrongOption.visible=false;
  wrongOption.depth+=1000;

  correctOption=createSprite(430,570,10,10);
  correctOption.addImage(correctOptionImg);
  correctOption.scale=1.2;
  correctOption.visible=false;
  correctOption.depth+=2000;  

  lifeline1=createSprite(100,50,100,50);
  lifeline1.addAnimation("running",lifeline1Img);
  lifeline1.scale=0.6;
  lifeline1.visible=false;

  lifeline2=createSprite(260,50,100,50);
  lifeline2.addAnimation("running",lifeline2Img);
  lifeline2.scale=0.6;
  lifeline2.visible=false;

  lifeline3=createSprite(420,50,100,50);
  lifeline3.addAnimation("running",lifeline3Img);
  lifeline3.scale=0.6;
  lifeline3.visible=false;

  lifeline4=createSprite(580,50,100,50);
  lifeline4.addAnimation("running",lifeline4Img);
  lifeline4.scale=0.6;
  lifeline4.visible=false;

  yes=createSprite(270,300,50,25);
  yes.addImage(yesImg);
  yes.scale=0.45;
  yes.visible=false;

  no=createSprite(400,300,50,25);
  no.addImage(noImg);
  no.scale=0.45;
  no.visible=false;

  ok=createSprite(400,300,50,25);
  ok.addImage(okImg);
  ok.scale=0.45;
  ok.visible=false;
  
  money=createSprite(860,50,10,10);
  money.addAnimation("running",moneyImg);
  money.scale=0.3;
  money.visible=false;

  tvscreen=createSprite(600,350,50,25);
  tvscreen.addAnimation("running",tvscreenImg);
  tvscreen.scale=1.18;
  tvscreen.visible=false;

  man=createSprite(600,280,50,25);
  man.addAnimation("running",manImg);
  man.velocityX=0;
  man.scale=0.6;
  man.visible=false;

  cut=createSprite(1100,90,50,25);
  cut.addImage(cutImg);
  cut.scale=0.6;
  cut.visible=false;

  ansOptA=createSprite(600,485,50,25);
  ansOptA.addImage(ansOptAImg);
  ansOptA.scale=0.6;
  ansOptA.visible=false;
 
  ansOptB=createSprite(600,485,50,25);
  ansOptB.addImage(ansOptBImg);
  ansOptB.scale=0.6;
  ansOptB.visible=false;
 
  ansOptC=createSprite(600,485,50,25);
  ansOptC.addImage(ansOptCImg);
  ansOptC.scale=0.6;
  ansOptC.visible=false;
 
  ansOptD=createSprite(600,485,50,25);
  ansOptD.addImage(ansOptDImg);
  ansOptD.scale=0.6;
  ansOptD.visible=false;
 
  APoptA=createSprite(600,300,50,25);
  APoptA.addAnimation("running",APoptAImg);
  APoptA.scale=0.8;
  APoptA.visible=false;

  APoptB=createSprite(600,300,50,25);
  APoptB.addAnimation("running",APoptBImg);
  APoptB.scale=0.8;
  APoptB.visible=false;

  APoptC=createSprite(600,300,50,25);
  APoptC.addAnimation("running",APoptCImg);
  APoptC.scale=0.8;
  APoptC.visible=false;

  APoptD=createSprite(600,300,50,25);
  APoptD.addAnimation("running",APoptDImg);
  APoptD.scale=0.8;
  APoptD.visible=false;

  stopAP=createSprite(100,100,10,10);
  APoptD.addAnimation("running",APoptDImg);
  stopAP.visible=false;
  stopAP.velocityY=0;
  
  Ayr=createSprite(600,100,10,10);
  Ayr.addAnimation("running",AyrImg);
  Ayr.scale=0.6;
  Ayr.visible=false;

  line=createSprite(-600,695,1200,10);
  line.shapeColor="red";
  line.visible=false;

  loading=createSprite(690,635,10,10);
  loading.addAnimation("running",loadingImg);
  loading.scale=0.6;
  loading.visible=false;

  player=new Player();
  form=new Form();

  questionnum=1;


  
}

function draw() {
  background(10,0,86);

  if(line.x===600){
    line.velocityX=0;
  }

  console.log(line.x,gameState);



  if(gameState===2){
    bg1.visible=true;
  }

   if(gameState===3){
    lifeline1.visible=false;
    lifeline2.visible=false;
    lifeline3.visible=false;
    lifeline4.visible=false;
    bg.visible=false;

    question1bg.visible=false;
    option1bg.visible=false;      
    option2bg.visible=false;     
    option3bg.visible=false;     
    option4bg.visible=false;    
    bg1.visible=false;
     restart.visible=false;

     character1.visible=true;
     character2.visible=true;
     character3.visible=true;

     tvscreen.visible=false;
     background1.visible=false;
     background2.visible=false;
     background3.visible=false;

     if(mousePressedOver(character1) || keyWentDown("a")){
       l1count=0;
       l2count=0;
       l3count=0;
       l5count=0;
       score2=0;
       score=2.5;
       scorecount=0;
       stopAP.y=100;
       l4count=0;

       gameState=4;
     }

     if(mousePressedOver(character2) || keyWentDown("b")){
       l1count=0;
       l2count=0;
       l3count=0;
       l5count=0;
       score2=0;
       score=2.5;
       scorecount=0;
       stopAP.y=100;
       l4count=0;

       gameState=6;
    }

     if(mousePressedOver(character3) || keyWentDown("c")){
       l1count=0;
       l2count=0;
       l3count=0;
       l5count=0;
       score2=0;
       score=2.5;
       scorecount=0;
       stopAP.y=100;
       l4count=0;

       gameState=8;
    }

   }
  
   if(gameState===4 || gameState===6 || gameState===8){ 
     character1.visible=false;
     character2.visible=false;
     character3.visible=false;

     if(gameState===4 || gameState===5){
      background1.visible=true;
     }
     
     else if(gameState===6 || gameState===7){
      background2.visible=true;
     }

     else if(gameState===8 || gameState===9){
      background3.visible=true;
     }

      ready.visible=true;

      if(mousePressedOver(ready) || keyWentDown("RIGHT_ARROW")){
        if(gameState===4){
          gameState=5;
         }
         
        else if(gameState===6){
        gameState=7;
        }
  
        else if(gameState===8){
        gameState=9;
        }
        kbcSound2.play();
        Ayr.visible=false;
        time=1;       
        time2=30; 
        ready.visible=false;
        questionnum=1;
        gameState1=QUESTION;
      }
   }


   if(gameState===5 || gameState===7 || gameState===9){
    question1bg.visible=true;
    option1bg.visible=true;      
    option2bg.visible=true;     
    option3bg.visible=true;     
    option4bg.visible=true;     

    if(gameState1===QUESTION){
      timer.visible=true;

      if(gameState===5){
        background1.visible=true;
      }
      else if(gameState===7){
        background2.visible=true;
      }
      else if(gameState===9){
        background3.visible=true;
      }

    if(select_question==1){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==2){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
         score2=score2+5;
         }
        score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==6){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27 ){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
         score2=score2+5;
         }
        score=score*2;
      }
   }
   
   
   
   if(select_question==7){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
    }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==8){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==9){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
   
   if(select_question==10){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==11){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==12){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==13){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==14){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2||+5;
      }
     score=score*2;

    }
   }

   if(select_question==15){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==16){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==17){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play(); 

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==18){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }         
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==19){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==20){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==21){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==22){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==23){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==24){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==25){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==26){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==27){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
   
   if(select_question==28){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==29){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==30){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==31){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==32){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==33){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==34){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==35){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==36){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==37){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==38){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==39){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==40){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==41){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==42){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==43){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==44){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==45){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==46){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==47){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==48){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==49){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==50){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==51){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==52){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==53){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==54){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==55){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==56){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==57){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
   
   if(select_question==58){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==59){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==60){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
   
   if(select_question==61){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==62){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==63){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==64){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==65){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==66){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==67){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==68){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==69){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==70){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==71){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==72){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
   
   if(select_question==73){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==74){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==75){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==76){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==77){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==78){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==79){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==80){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==81){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==82){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==83){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==84){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==85){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==86){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==87){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==88){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==89){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==90){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==91){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==92){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==93){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==94){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==95){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==96){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==97){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==98){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==99){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==100){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
    
   if(select_question==101){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==102){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
    
   if(select_question==103){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==104){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==105){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==106){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){      
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }
   
   if(select_question==107){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){      
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==108){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==109){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==110){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==111){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){      
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==112){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==113){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==114){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==115){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==116){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==117){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }
   
   if(select_question==118){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==119){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==120){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==121){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==122){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==123){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==124){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==125){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==126){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==-1){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){      
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

  if(select_question==-2){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }

  if(select_question==-3){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
       gameState1=WRONG3_2;
       wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-4){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-5){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG1_3;
     wrong.play();

   }
  }

  if(select_question==-6){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG4_2;
      wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-7){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   }
  }

  if(select_question==-8){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG3_2;
      wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-9){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG1_2;
      wrong.play();

   }
  }
  
  if(select_question==-10){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG1_3;
     wrong.play();

   }
  }

  if(select_question==-11){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG4_2;
      wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-12){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG3_2;
      wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-13){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG2_4;
     wrong.play();

   }
  }

  if(select_question==-14){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG4_3;
     wrong.play();

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-15){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG2_4;
     wrong.play();

   }
  }
  
  if(select_question==-16){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG4_2;
      wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-17){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-18){
  if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG2_4;
     wrong.play();

   }
  }
  
  if(select_question==-19){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
       gameState1=WRONG3_2;
       wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-20){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-21){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG3_4;
     wrong.play();

   }
  }
  
  if(select_question==-22){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }

  if(select_question==-23){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG2_4;
     wrong.play();

   }
  }

  if(select_question==-24){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-25){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=WRONG1_2;
      wrong.play();

   }
  }

  if(select_question==-26){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-27){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG1_3;
     wrong.play();

   }
  }
  
  if(select_question==-28){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG4_3;
     wrong.play();

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-29){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   }
  }

  if(select_question==-30){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG3_1;
     wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } 
  }
  
  if(select_question==-31){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){     
      gameState1=CORRECT2;
      correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG2_4;
     wrong.play();

   }
  }

  if(select_question==-32){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG1_3;
     wrong.play();

   }
  }

  if(select_question==-33){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-34){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG3_4;
     wrong.play();

   }
  }

  if(select_question==-35){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG1_3;
     wrong.play();

   }
  }

  if(select_question==-36){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG3_4;
     wrong.play();

   }
  }
  
  if(select_question==-37){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG3_1;
     wrong.play();

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-38){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-39){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-40){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-41){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG1_2;
     wrong.play();

   }
  }

  if(select_question==-42){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG3_4;
     wrong.play();

   }
  }
  
  if(select_question==-43){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-44){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   } 
  }

  if(select_question==-45){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-46){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }

  if(select_question==-47){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   }
  }

  if(select_question==-48){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG3_1;
     wrong.play();

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-49){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG1_2;
     wrong.play();

   }
  }

  if(select_question==-50){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-51){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG2_4;
     wrong.play();

   }
  }
  
  if(select_question==-52){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG1_2;
     wrong.play();

   } 
  }

  if(select_question==-53){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG4_3;
     wrong.play();

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-54){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   }
  }
  
  if(select_question==-55){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG4_2;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-56){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   }
  }

  if(select_question==-57){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG1_3;
     wrong.play();

   }
  }
  
  if(select_question==-58){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG3_1;
     wrong.play();

   }if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-59){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG2_3;
     wrong.play();

   } 
  }

  if(select_question==-60){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }
  
  if(select_question==-61){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG3_1;
     wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-62){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG4_2;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-63){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG4_2;
     wrong.play();

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-64){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } 
  }

  if(select_question==-65){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }

  if(select_question==-66){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG4_1;
     wrong.play();

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }
  
  if(select_question==-67){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG3_4;
     wrong.play();

   }
  }

  if(select_question==-68){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG1_2;
     wrong.play();

   }
  }

  if(select_question==-69){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG3_1;
     wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } 
  }
  
  if(select_question==-70){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } 
  }

  if(select_question==-71){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }

  if(select_question==-72){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG1_4;
     wrong.play();

   }
  }
  
  if(select_question==-73){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=WRONG4_3;
     wrong.play();

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=CORRECT4;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   }
  }

  if(select_question==-74){
   if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
     //click.play();
     gameState1=WRONG3_4;
     wrong.play();

   }
  }

  if(select_question==-75){
   if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG3_2;
     wrong.play();

   } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
     //click.play();
     gameState1=CORRECT3;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } 
  }
  
  if(select_question==-76){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=WRONG2_1;
     wrong.play();

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=CORRECT2;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } 
  }

  if(select_question==-77){
   if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
     //click.play();
     gameState1=CORRECT1;
     correct.play();
     if(score2===0){
     score2=score2+5;
     }
     score=score*2;

   } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
     //click.play();
     gameState1=WRONG1_2;
     wrong.play();

   } 
  }
  
  if(select_question==-78){
    if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG4_3;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-79){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==-80){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   
   if(select_question==-81){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-82){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==-83){
    if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==-84){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-85){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } 
   }

   if(select_question==-86){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==-87){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-88){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } 
   }

   if(select_question==-89){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } 
   }

   if(select_question==-90){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }
   
   if(select_question==-91){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-92){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==-93){
    if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }
   
   if(select_question==-94){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-95){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } 
   }
   
   if(select_question==-96){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    }
   }

   if(select_question==-97){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==-98){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }
   
   if(select_question==-99){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG2_4;
      wrong.play();

    }
   }

   if(select_question==-100){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } 
   }
    
   if(select_question==-101){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-102){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } 
   }
    
   if(select_question==-103){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-104){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-105){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-106){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } 
   }
   
   if(select_question==-107){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-108){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } 
   }

   if(select_question==-109){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG4_1;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-110){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-111){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG2_3;
      wrong.play();

    } 
   }

   if(select_question==-112){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==-113){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG3_1;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-114){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG4_2;
      wrong.play();

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=CORRECT4;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }

   if(select_question==-115){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } 
   }

   if(select_question==-116){
    if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==-117){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG1_2;
      wrong.play();

    } 
   }
   
   if(select_question==-118){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } 
   }

   if(select_question==-119){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG1_4;
      wrong.play();

    }
   }

   if(select_question==-120){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=WRONG2_1;
      wrong.play();

    } if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=CORRECT2;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }

   if(select_question==-121){
     if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    }
   }   
   if(select_question==-122){
    if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option4bg) && time2<27 || keyWentDown("d") && time2<27){
      gameState1=WRONG3_4;
      wrong.play();

    }
   }

   if(select_question==-123){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } 
   }

   if(select_question==-124){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }
   
   if(select_question==-125){
    if(mousePressedOver(option1bg) && time2<27 || keyWentDown("a") && time2<27){
      gameState1=CORRECT1;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=WRONG1_3;
      wrong.play();

    } 
   }

   if(select_question==-126){
    if(mousePressedOver(option2bg) && time2<27 || keyWentDown("b") && time2<27){
      gameState1=WRONG3_2;
      wrong.play();

    } if(mousePressedOver(option3bg) && time2<27 || keyWentDown("c") && time2<27){
      gameState1=CORRECT3;
      correct.play();
      if(score2===0){
      score2=score2+5;
      }
     score=score*2;

    } 
   }
  }
   }
  
  if(gameState1===WRONG1_2){
    timer.visible=false;
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=430;
    correctOption.y=570;

    wrongOption.x=870;
    wrongOption.y=570;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG1_3){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=430;
    correctOption.y=570;

    wrongOption.x=430;
    wrongOption.y=640;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG1_4){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=430;
    correctOption.y=570;

    wrongOption.x=870;
    wrongOption.y=640;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   




   if(gameState1===WRONG2_1){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=870;
    correctOption.y=570;

    wrongOption.x=430;
    wrongOption.y=570;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG2_3){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=870;
    correctOption.y=570;

    wrongOption.x=430;
    wrongOption.y=640;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG2_4){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=870;
    correctOption.y=570;

    wrongOption.x=870;
    wrongOption.y=640;
 
   restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }







   if(gameState1===WRONG3_1){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=430;
    correctOption.y=640;

    wrongOption.x=430;
    wrongOption.y=570;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG3_2){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=430;
    correctOption.y=640;

    wrongOption.x=870;
    wrongOption.y=570;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG3_4){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=430;
    correctOption.y=640;

    wrongOption.x=870;
    wrongOption.y=640;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   





   if(gameState1===WRONG4_1){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=870;
    correctOption.y=640;

    wrongOption.x=430;
    wrongOption.y=570;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

   if(gameState1===WRONG4_2){
    correctOption.visible=true;

    wrongOption.visible=true;

    correctOption.x=870;
    correctOption.y=640;

    wrongOption.x=870;
    wrongOption.y=570;
 
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }

  if(gameState1===WRONG4_3){
   correctOption.visible=true;

   wrongOption.visible=true;

   correctOption.x=870;
   correctOption.y=640;

   wrongOption.x=430;
   wrongOption.y=640;

    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
   }





   if(gameState1===CORRECT1){
    option1bg.visible=false;
    correctOption.visible=true;

    if(score>83886080 && scorecount===0){
      score=10;
      scorecount=1;
    }
    correctOption.x=430;
    correctOption.y=570;

    next.visible=true;

    next.visible=true;

    timer.visible=false;
    
    

     if(mousePressedOver(next) || keyWentDown("RIGHT_ARROW")){
       kbcSound2.play();
       if(l5count===3){
         l5count=l5count+1;
       }
       time=1;
       time2=30;
      correctOption.visible=false;
      next.visible=false;
        select_question=Math.round(random(1,126));
        gameState1=QUESTION;
        questionnum+=1;
    }
  }

  if(gameState1===CORRECT2){
    option2bg.visible=false;
    correctOption.visible=true;

    if(score>83886080 && scorecount===0){
      score=10;
      scorecount=1;
    }
    correctOption.x=870;
    correctOption.y=570;
 
    next.visible=true;

    timer.visible=false;
    
    

    if(mousePressedOver(next) || keyWentDown("RIGHT_ARROW")){
      kbcSound2.play();
      if(l5count===3){
        l5count=l5count+1;
      }
      time=1;
      time2=30;
        correctOption.visible=false;
        next.visible=false;
        select_question=Math.round(random(1,126));
        gameState1=QUESTION;
        questionnum+=1;
    }
  }

  if(gameState1===CORRECT3){
    correctOption.visible=true;

    if(score>83886080 && scorecount===0){
      score=10;
      scorecount=1;
    }
    correctOption.x=430;
    correctOption.y=640;
 
    next.visible=true;

    timer.visible=false;
    
    

    if(mousePressedOver(next) || keyWentDown("RIGHT_ARROW")){
     kbcSound2.play();
      if(l5count===3){
        l5count=l5count+1;
      }
      time=1;
      time2=30;
      correctOption.visible=false;
      next.visible=false;
        select_question=Math.round(random(1,126));
        gameState1=QUESTION;
        questionnum+=1;
    }
  }

  if(gameState1===CORRECT4){
    correctOption.visible=true;

    if(score>83886080 && scorecount===0){
      score=10;
      scorecount=1;
    }
    correctOption.x=870;
    correctOption.y=640;

    next.visible=true;

    timer.visible=false;
    
    

    if(mousePressedOver(next) || keyWentDown("RIGHT_ARROW")){
     kbcSound2.play();
      if(l5count===3){
        l5count=l5count+1;
      }
      time=1;
      time2=30;
      correctOption.visible=false;
      next.visible=false;
         select_question=Math.round(random(1,126));
        gameState1=QUESTION;
        questionnum+=1;
    }
  }

  if(gameState1===RESTART){
    restart.visible=true;

    timer.visible=false;

    
    if(mousePressedOver(restart) || keyWentDown("r")){
      timer.visible=false;
      time=1;
      time2=30;
      
      wrongOption.visible=false;
      correctOption.visible=false;
      restart.visible=false;
        select_question=Math.round(random(1,126));
        gameState=3;
        gameState1=NORMAL1;
        questionnum+=1;
    }
  }

  if(gameState1===LIFELINE){
    
    lifeline1.visible=true;
    lifeline2.visible=true;
    lifeline3.visible=true;
    lifeline4.visible=true;
    yes.visible=true;
    no.visible=true;
    yes.x=320;
    no.x=400;

    if(select_question==1){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-1;
        l1count=1;
        l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
        yes.x=-100;
        no.x=-100;     
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=1;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
  }

  if(select_question==2){
    if(mousePressedOver(yes)){
      clock.stop();
       yes.visible=false;
      no.visible=false;
      select_question=-2;
      l1count=1;
      l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
      yes.x=-100;
      no.x=-100;     
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=2;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
}

if(select_question==3){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-3;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=3;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==4){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-4;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=4;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==5){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-5;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=5;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==6){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-6;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=6;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==7){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-7;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=7;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==8){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-8;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=8;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==9){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-9;
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=9;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==10){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-10
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=10;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==11){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-11
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=11;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==12){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-12
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=12;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==13){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-13
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=13;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==14){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-14
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=14;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==15){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-15
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=15;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==16){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-16
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=16;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==17){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-17
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=17;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==18){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-18
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=18;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==19){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-19
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=19;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==20){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-20
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=20;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==21){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-21
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=21;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==22){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-22
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=22;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==23){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-23
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=23;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==24){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-24
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=24;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==25){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-25
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=25;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==26){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-26
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=26;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==27){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-27
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=27;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==28){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-28
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=28;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==29){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-29
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=29;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==30){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-30
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=30;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==31){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-31
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=31;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==32){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-32
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=32;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==33){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-33
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=33;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==34){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-34
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=34;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==35){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-35
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=35;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==36){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-36
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=36;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==37){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-37
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=37;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==38){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-38
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=38;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==39){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-39
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=39;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==40){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-40
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=40;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==41){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-41
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=41;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==42){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-42
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=42;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==43){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-43
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=43;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==44){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-44
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=44;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==45){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-45
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=45;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==46){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-46
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=46;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==47){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-47
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=47;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==48){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-48
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=48;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==49){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-49
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=49;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==50){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-50
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=50;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==51){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-51
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=51;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==52){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-52
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=52;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==53){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-53
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=53;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==54){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-54
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=54;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==55){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-55
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=55;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==56){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-56
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=56;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==57){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-57
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=57;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==58){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-58
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=58;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==59){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-59
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=59;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==60){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-60
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=60;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==61){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-61
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=61;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==62){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-62
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=62;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==63){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-63
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=63;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==64){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-64
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=64;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==65){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-65
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=65;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==66){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-66
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=66;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==67){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-67
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=67;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==68){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-68
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=68;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==69){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-69
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=69;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==70){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-70
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=70;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==71){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-71
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=71;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==72){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-72
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=72;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==73){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-73
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=73;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==74){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-74
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=74;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==75){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-75
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=75;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
}

if(select_question==76){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-76
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
    yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=76;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
}

if(select_question==77){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-77
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
    yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=77;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
}

if(select_question==78){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-78
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
    yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=78;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
}

if(select_question==79){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-79
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
    yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=79;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
}

if(select_question==80){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=-80
    l1count=1;
    l5count=l5count+1;
    if(l1count===1 || l1count===3){
      lifeline1.addAnimation("running",lifeline1Img2);
    }
     yes.x=-100;
    no.x=-100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    select_question=80;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

  if(select_question==81){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-81
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=81;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==82){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-82
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=82;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==83){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-83
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=83;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==84){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-84
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=84;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==85){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-85
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=85;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==86){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-86
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=86;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==87){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-87
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=87;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==88){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-88
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=88;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==89){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-89
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=89;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==90){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-90
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=90;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  if(select_question==91){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-91
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=91;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==92){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-92
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=92;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==93){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-93
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=93;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==94){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-94
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=94;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==95){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-95
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=95;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==96){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-96
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=96;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==97){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-97
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=97;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==98){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-98
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=98;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==99){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-99
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=99;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==100){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-100
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=100;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==101){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-101
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=101;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==102){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-102
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=102;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==103){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-103
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=103;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==104){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-104
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=104;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==105){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-105
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=105;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==106){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-106
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=106;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==107){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-107
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=107;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==108){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-108
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=108;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==109){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-109
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=109;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==110){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-110
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=110;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==111){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-111
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
      yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=111;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
  }
  
  if(select_question==112){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=-112
      l1count=1;
      l5count=l5count+1;
      if(l1count===1 || l1count===3){
        lifeline1.addAnimation("running",lifeline1Img2);
      }
       yes.x=-100;
      no.x=-100;
      gameState1=QUESTION;
    }
  
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      select_question=112;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
  }
  
    if(select_question==113){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-113
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=113;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==114){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-114
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=114;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==115){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-115
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=115;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==116){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-116
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=116;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==117){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-117
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=117;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==118){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-118
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=118;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==119){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-119
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=119;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==120){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-120
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=120;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==121){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-121
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=121;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    if(select_question==122){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-122
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=122;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==123){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-123
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
         yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=123;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==124){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-124
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=124;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==125){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-125
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=125;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
    
    if(select_question==126){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=-126
        l1count=1;
        l5count=l5count+1;
        if(l1count===1 || l1count===3){
          lifeline1.addAnimation("running",lifeline1Img2);
        }
        yes.x=-100;
        no.x=-100;
        gameState1=QUESTION;
      }
    
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        select_question=126;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
    }
}

if(gameState1===LIFELINE2){
  
  lifeline1.visible=true;
  lifeline2.visible=true;
  lifeline3.visible=true;
  lifeline4.visible=true;
  yes.visible=true;
  no.visible=true;
  yes.x=320;
  no.x=400;
if(select_question==1 || select_question==-1){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;     
  gameState1=LIFELINE2ACTIVE;
}
  
    if(mousePressedOver(no)){
      clock.stop();

      yes.visible=false;
      no.visible=false;
         gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
}
if(select_question==2 || select_question==-2){
  if(mousePressedOver(yes)){
    clock.stop();
     yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;     
  gameState1=LIFELINE2ACTIVE;
}

  if(mousePressedOver(no)){
    clock.stop();

    yes.visible=false;
    no.visible=false;
     gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
}

if(select_question==3 || select_question==-3){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==4 || select_question==-4){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==5 || select_question==-5){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==6 || select_question==-6){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==7 || select_question==-7){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==8 || select_question==-8){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==9 || select_question==-9){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  ameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==10 || select_question==-10){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==11 || select_question==-11){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==12 || select_question==-12){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==13 || select_question==-13){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==14 || select_question==-14){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==15 || select_question==-15){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==16 || select_question==-16){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==17 || select_question==-17){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==18 || select_question==-18){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==19 || select_question==-19){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==20 || select_question==-20){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==21 || select_question==-21){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==22 || select_question==-22){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==23 || select_question==-23){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==24 || select_question==-24){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==25 || select_question==-25){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==26 || select_question==-26){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==27 || select_question==-27){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==28 || select_question==-28){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==29 || select_question==-29){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==30 || select_question==-30){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==31 || select_question==-31){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==32 || select_question==-32){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==33 || select_question==-33){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==34 || select_question==-34){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==35 || select_question==-35){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==36 || select_question==-36){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==37 || select_question==-37){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==38 || select_question==-38){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==39 || select_question==-39){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==40 || select_question==-40){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==41 || select_question==-41){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==42 || select_question==-42){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==43 || select_question==-43){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==44 || select_question==-44){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==45 || select_question==-45){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==46 || select_question==-46){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==47 || select_question==-47){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==48 || select_question==-48){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==49 || select_question==-49){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==50 || select_question==-50){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==51 || select_question==-51){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==52 || select_question==-52){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==53 || select_question==-53){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==54 || select_question==-54){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==55 || select_question==-55){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==56 || select_question==-56){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==57 || select_question==-57){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==58 || select_question==-58){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==59 || select_question==-59){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==60 || select_question==-60){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==61 || select_question==-61){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==62 || select_question==-62){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==63 || select_question==-63){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==64 || select_question==-64){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==65 || select_question==-65){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==66 || select_question==-66){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==67 || select_question==-67){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==68 || select_question==-68){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==69 || select_question==-69){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==70 || select_question==-70){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==71 || select_question==-71){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==72 || select_question==-72){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==73 || select_question==-73){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==74 || select_question==-74){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
 yes.x=-100;
  no.x=-100;
}
}

if(select_question==75 || select_question==-75){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
  yes.x=-100;
  no.x=-100;
}
}

if(select_question==76 || select_question==-76){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
  yes.x=-100;
  no.x=-100;
}
}

if(select_question==77 || select_question==-77){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
  yes.x=-100;
  no.x=-100;
}
}

if(select_question==78 || select_question==-78){
if(mousePressedOver(yes)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  l2count=1;
  l5count=l5count+1;
  yes.x=-100;
  no.x=-100;
  gameState1=LIFELINE2ACTIVE;
}

if(mousePressedOver(no)){
  clock.stop();
  yes.visible=false;
  no.visible=false;
  gameState1=QUESTION;
  yes.x=-100;
  no.x=-100;
}
}

if(select_question==79 || select_question==-79){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==80 || select_question==-80){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
  }
  
if(select_question==81 || select_question==-81){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==82 || select_question==-82){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==83 || select_question==-83){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==84 || select_question==-84){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
   yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==85 || select_question==-85){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==86 || select_question==-86){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==87 || select_question==-87){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==88 || select_question==-88){
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l2count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;
    gameState1=LIFELINE2ACTIVE;
  }
  
  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
  }
  
  if(select_question==89 || select_question==-89){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==90 || select_question==-90){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
    }
    if(select_question==91 || select_question==-91){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==92 || select_question==-92){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==93 || select_question==-93){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==94 || select_question==-94){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==95 || select_question==-95){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==96 || select_question==-96){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==97 || select_question==-97){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==98 || select_question==-98){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==99 || select_question==-99){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==100 || select_question==-100){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==101 || select_question==-101){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==102 || select_question==-102){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==103 || select_question==-103){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==104 || select_question==-104){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==105 || select_question==-105){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
     yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==106 || select_question==-106){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==107 || select_question==-107){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==108 || select_question==-108){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==109 || select_question==-109){
    if(mousePressedOver(yes)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      l2count=1;
      l5count=l5count+1;
      yes.x=-100;
      no.x=-100;
      gameState1=LIFELINE2ACTIVE;
    }
    
    if(mousePressedOver(no)){
      clock.stop();
      yes.visible=false;
      no.visible=false;
      gameState1=QUESTION;
      yes.x=-100;
      no.x=-100;
    }
    }
    
    if(select_question==110 || select_question==-110){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==111 || select_question==-111){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
      }
      
    if(select_question==112 || select_question==-112){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==113 || select_question==-113){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==114 || select_question==-114){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==115 || select_question==-115){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
       yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==116 || select_question==-116){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==117 || select_question==-117){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==118 || select_question==-118){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==119 || select_question==-119){
      if(mousePressedOver(yes)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        l2count=1;
        l5count=l5count+1;
        yes.x=-100;
        no.x=-100;
        gameState1=LIFELINE2ACTIVE;
      }
      
      if(mousePressedOver(no)){
        clock.stop();
        yes.visible=false;
        no.visible=false;
        gameState1=QUESTION;
        yes.x=-100;
        no.x=-100;
      }
      }
      
      if(select_question==120 || select_question==-120){
        if(mousePressedOver(yes)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          l2count=1;
          l5count=l5count+1;
          yes.x=-100;
          no.x=-100;
          gameState1=LIFELINE2ACTIVE;
        }
        
        if(mousePressedOver(no)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          gameState1=QUESTION;
          yes.x=-100;
          no.x=-100;
        }
        }
        
        if(select_question==121 || select_question==-121){
        if(mousePressedOver(yes)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          l2count=1;
          l5count=l5count+1;
          yes.x=-100;
          no.x=-100;
          gameState1=LIFELINE2ACTIVE;
        }
        
        if(mousePressedOver(no)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          gameState1=QUESTION;
          yes.x=-100;
          no.x=-100;
        }
        }
        if(select_question==122 || select_question==-122){
        if(mousePressedOver(yes)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          l2count=1;
          l5count=l5count+1;
          yes.x=-100;
          no.x=-100;
          gameState1=LIFELINE2ACTIVE;
        }
        
        if(mousePressedOver(no)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          gameState1=QUESTION;
          yes.x=-100;
          no.x=-100;
        }
        }
        
        if(select_question==123 || select_question==-123){
        if(mousePressedOver(yes)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          l2count=1;
          l5count=l5count+1;
          yes.x=-100;
          no.x=-100;
          gameState1=LIFELINE2ACTIVE;
        }
        
        if(mousePressedOver(no)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          gameState1=QUESTION;
          yes.x=-100;
          no.x=-100;
        }
        }
        
        if(select_question==124 || select_question==-124){
        if(mousePressedOver(yes)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          l2count=1;
          l5count=l5count+1;
          yes.x=-100;
          no.x=-100;
          gameState1=LIFELINE2ACTIVE;
        }
        
        if(mousePressedOver(no)){
          clock.stop();
          yes.visible=false;
          no.visible=false;
          gameState1=QUESTION;
          yes.x=-100;
          no.x=-100;
        }
        }
        
        if(select_question==125 || select_question==-125){
          if(mousePressedOver(yes)){
            clock.stop();
            yes.visible=false;
            no.visible=false;
            l2count=1;
            l5count=l5count+1;
            yes.x=-100;
            no.x=-100;
            gameState1=LIFELINE2ACTIVE;
          }
          
          if(mousePressedOver(no)){
            clock.stop();
            yes.visible=false;
            no.visible=false;
            gameState1=QUESTION;
            yes.x=-100;
            no.x=-100;
          }
          }
          
          if(select_question==126 || select_question==-126){
          if(mousePressedOver(yes)){
            clock.stop();
            yes.visible=false;
            no.visible=false;
            l2count=1;
            l5count=l5count+1;
            yes.x=-100;
            no.x=-100;
            gameState1=LIFELINE2ACTIVE;
          }
          
          if(mousePressedOver(no)){
            clock.stop();
            yes.visible=false;
            no.visible=false;
            gameState1=QUESTION;
            yes.x=-100;
            no.x=-100;
          }
          }
}

if(gameState1===LIFELINE2ACTIVE){
  
  lifeline1.visible=true;
  lifeline2.visible=true;
  lifeline3.visible=true;
  lifeline4.visible=true;
  yes.visible=false;
  no.visible=false;

if(select_question==1 || select_question==-1){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==2 || select_question==-2){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==3 || select_question==-3){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==4 || select_question==-4){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==5 || select_question==-5){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==6 || select_question==-6){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==7 || select_question==-7){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==8 || select_question==-8){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==9 || select_question==-9){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==10 || select_question==-10){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==11 || select_question==-11){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==12 || select_question==-12){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==13 || select_question==-13){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==14 || select_question==-14){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==15 || select_question==-15){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==16 || select_question==-16){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==17 || select_question==-17){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==18 || select_question==-18){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==19 || select_question==-19){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==20 || select_question==-20){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==21 || select_question==-21){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==22 || select_question==-22){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==23 || select_question==-23){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==24 || select_question==-24){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==25 || select_question==-25){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==26 || select_question==-26){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==27 || select_question==-27){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==28 || select_question==-28){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==29 || select_question==-29){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==30 || select_question==-30){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==31 || select_question==-31){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==32 || select_question==-32){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==33 || select_question==-33){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==34 || select_question==-34){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==35 || select_question==-35){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==36 || select_question==-36){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==37 || select_question==-37){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==38 || select_question==-38){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==39 || select_question==-39){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==40 || select_question==-40){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==41 || select_question==-41){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==42 || select_question==-42){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==43 || select_question==-43){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==44 || select_question==-44){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==45 || select_question==-45){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==46 || select_question==-46){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==47 || select_question==-47){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==48 || select_question==-48){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==49 || select_question==-49){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==50 || select_question==-50){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==51 || select_question==-51){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==52 || select_question==-52){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==53 || select_question==-53){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==54 || select_question==-54){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==55 || select_question==-55){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==56 || select_question==-56){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==57 || select_question==-57){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==58 || select_question==-58){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==59 || select_question==-59){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==60 || select_question==-60){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==61 || select_question==-61){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==62 || select_question==-62){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==63 || select_question==-63){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==64 || select_question==-64){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==65 || select_question==-65){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==66 || select_question==-66){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==67 || select_question==-67){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==68 || select_question==-68){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==69 || select_question==-69){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==70 || select_question==-70){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==71 || select_question==-71){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==72 || select_question==-72){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==73 || select_question==-73){
 man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==74 || select_question==-74){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==75 || select_question==-75){
 man.visible=true;
 cut.visible=true;
 ansOptC.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptC.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==76 || select_question==-76){
 man.visible=true;
 cut.visible=true;
 ansOptB.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptB.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==77 || select_question==-77){
 man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==78 || select_question==-78){
  man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
 }
 
if(select_question==79 || select_question==-79){
  man.visible=true;
 cut.visible=true;
 ansOptA.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptA.visible=false;
   tvscreen.visible=false;
 }
 }

if(select_question==80 || select_question==-80){
  man.visible=true;
 cut.visible=true;
 ansOptD.visible=true;
 tvscreen.visible=true;
if(gameState===5){
 background1.visible=false;
}
 if(gameState===7){
 background2.visible=false;
}
 if(gameState===9){
 background3.visible=false;
}
 
 if(mousePressedOver(cut)){
   clock.stop();
   gameState1=QUESTION;
  
   if(l2count===1 || l2count===3){
     lifeline2.addAnimation("running", lifeline2Img2);
   }
   
   man.visible=false;
   cut.visible=false;
   ansOptD.visible=false;
   tvscreen.visible=false;
 }
}

if(select_question==81 || select_question==-81){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==82 || select_question==-82){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==83 || select_question==-83){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==84 || select_question==-84){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==85 || select_question==-85){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==86 || select_question==-86){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==87 || select_question==-87){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==88 || select_question==-88){
   man.visible=true;
   cut.visible=true;
   ansOptB.visible=true;
   tvscreen.visible=true;
  
   background1.visible=false;
   background2.visible=false;
   background3.visible=false;
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptB.visible=false;
     tvscreen.visible=false;
   }
  }
  
 if(select_question==89 || select_question==-89){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  
   background1.visible=false;
   background2.visible=false;
   background3.visible=false;
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
 
 if(select_question==90 || select_question==-90){
   man.visible=true;
   cut.visible=true;
   ansOptC.visible=true;
   tvscreen.visible=true;
 
   background1.visible=false;
   background2.visible=false;
   background3.visible=false;
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
   
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptC.visible=false;
     tvscreen.visible=false;
   }
 }
 if(select_question==91 || select_question==-91){
  man.visible=true;
  cut.visible=true;
  ansOptD.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptD.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==92 || select_question==-92){
  man.visible=true;
  cut.visible=true;
  ansOptA.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptA.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==93 || select_question==-93){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==94 || select_question==-94){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==95 || select_question==-95){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==96 || select_question==-96){
  man.visible=true;
  cut.visible=true;
  ansOptA.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptA.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==97 || select_question==-97){
  man.visible=true;
  cut.visible=true;
  ansOptA.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptA.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==98 || select_question==-98){
  man.visible=true;
  cut.visible=true;
  ansOptD.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==99 || select_question==-99){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==100 || select_question==-100){
  man.visible=true;
  cut.visible=true;
  ansOptA.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptA.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==101 || select_question==-101){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==102 || select_question==-102){
  man.visible=true;
  cut.visible=true;
  ansOptA.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptA.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==103 || select_question==-103){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==104 || select_question==-104){
  man.visible=true;
  cut.visible=true;
  ansOptD.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptD.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==105 || select_question==-105){
  man.visible=true;
  cut.visible=true;
  ansOptC.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptC.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==106 || select_question==-106){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==107 || select_question==-107){
  man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==108 || select_question==-108){
  man.visible=true;
  cut.visible=true;
  ansOptA.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptA.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==109 || select_question==-109){
   man.visible=true;
  cut.visible=true;
  ansOptD.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptD.visible=false;
    tvscreen.visible=false;
  }
  }
  
 if(select_question==110 || select_question==-110){
   man.visible=true;
  cut.visible=true;
  ansOptD.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptD.visible=false;
    tvscreen.visible=false;
  }
  }
 
 if(select_question==111 || select_question==-111){
   man.visible=true;
  cut.visible=true;
  ansOptB.visible=true;
  tvscreen.visible=true;
 if(gameState===5){
  background1.visible=false;
 }
  if(gameState===7){
  background2.visible=false;
 }
  if(gameState===9){
  background3.visible=false;
 }
  
  if(mousePressedOver(cut)){
    clock.stop();
    gameState1=QUESTION;
   
    if(l2count===1 || l2count===3){
      lifeline2.addAnimation("running", lifeline2Img2);
    }
    
    man.visible=false;
    cut.visible=false;
    ansOptB.visible=false;
    tvscreen.visible=false;
  }
 }
 
 if(select_question==112 || select_question==-112){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==113 || select_question==-113){
   man.visible=true;
   cut.visible=true;
   ansOptC.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptC.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==114 || select_question==-114){
   man.visible=true;
   cut.visible=true;
   ansOptD.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptD.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==115 || select_question==-115){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==116 || select_question==-116){
   man.visible=true;
   cut.visible=true;
   ansOptC.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptC.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==117 || select_question==-117){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==118 || select_question==-118){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==119 || select_question==-119){
    man.visible=true;
    cut.visible=true;
    ansOptA.visible=true;
    tvscreen.visible=true;
   
    background1.visible=false;
    background2.visible=false;
    background3.visible=false;
    
    if(mousePressedOver(cut)){
      clock.stop();
      gameState1=QUESTION;
     
      if(l2count===1 || l2count===3){
        lifeline2.addAnimation("running", lifeline2Img2);
      }
      
      man.visible=false;
      cut.visible=false;
      ansOptA.visible=false;
      tvscreen.visible=false;
    }
   }
   
  if(select_question==120 || select_question==-120){
    man.visible=true;
    cut.visible=true;
    ansOptB.visible=true;
    tvscreen.visible=true;
   
    background1.visible=false;
    background2.visible=false;
    background3.visible=false;
    
    if(mousePressedOver(cut)){
      clock.stop();
      gameState1=QUESTION;
     
      if(l2count===1 || l2count===3){
        lifeline2.addAnimation("running", lifeline2Img2);
      }
      
      man.visible=false;
      cut.visible=false;
      ansOptB.visible=false;
      tvscreen.visible=false;
    }
   }
  
  if(select_question==121 || select_question==-121){
    man.visible=true;
    cut.visible=true;
    ansOptC.visible=true;
    tvscreen.visible=true;
  
    background1.visible=false;
    background2.visible=false;
    background3.visible=false;
    
    if(mousePressedOver(cut)){
      clock.stop();
      gameState1=QUESTION;
    
      if(l2count===1 || l2count===3){
        lifeline2.addAnimation("running", lifeline2Img2);
      }
      
      man.visible=false;
      cut.visible=false;
      ansOptC.visible=false;
      tvscreen.visible=false;
    }
  }
  if(select_question==122 || select_question==-122){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==123 || select_question==-123){
   man.visible=true;
   cut.visible=true;
   ansOptA.visible=true;
   tvscreen.visible=true;
  if(gameState===5){
   background1.visible=false;
  }
   if(gameState===7){
   background2.visible=false;
  }
   if(gameState===9){
   background3.visible=false;
  }
   
   if(mousePressedOver(cut)){
     clock.stop();
     gameState1=QUESTION;
    
     if(l2count===1 || l2count===3){
       lifeline2.addAnimation("running", lifeline2Img2);
     }
     
     man.visible=false;
     cut.visible=false;
     ansOptA.visible=false;
     tvscreen.visible=false;
   }
  }
  
  if(select_question==124 || select_question==-124){
    man.visible=true;
    cut.visible=true;
    ansOptA.visible=true;
    tvscreen.visible=true;
   
    background1.visible=false;
    background2.visible=false;
    background3.visible=false;
    
    if(mousePressedOver(cut)){
      clock.stop();
      gameState1=QUESTION;
     
      if(l2count===1 || l2count===3){
        lifeline2.addAnimation("running", lifeline2Img2);
      }
      
      man.visible=false;
      cut.visible=false;
      ansOptA.visible=false;
      tvscreen.visible=false;
    }
   }
   
  if(select_question==125 || select_question==-125){
    man.visible=true;
    cut.visible=true;
    ansOptB.visible=true;
    tvscreen.visible=true;
   
    background1.visible=false;
    background2.visible=false;
    background3.visible=false;
    
    if(mousePressedOver(cut)){
      clock.stop();
      gameState1=QUESTION;
     
      if(l2count===1 || l2count===3){
        lifeline2.addAnimation("running", lifeline2Img2);
      }
      
      man.visible=false;
      cut.visible=false;
      ansOptB.visible=false;
      tvscreen.visible=false;
    }
   }
  
  if(select_question==126 || select_question==-126){
    man.visible=true;
    cut.visible=true;
    ansOptC.visible=true;
    tvscreen.visible=true;
  
    background1.visible=false;
    background2.visible=false;
    background3.visible=false;
    
    if(mousePressedOver(cut)){
      clock.stop();
      gameState1=QUESTION;
    
      if(l2count===1 || l2count===3){
        lifeline2.addAnimation("running", lifeline2Img2);
      }
      
      man.visible=false;
      cut.visible=false;
      ansOptC.visible=false;
      tvscreen.visible=false;
    }
  }
}

if(gameState1===LIFELINE3){
  
  lifeline1.visible=true;
  lifeline2.visible=true;
  lifeline3.visible=true;
  lifeline4.visible=true;
  yes.visible=true;
  no.visible=true;
  yes.x=320;
  no.x=400;
  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    l3count=1;
    l5count=l5count+1;
    yes.x=-100;
    no.x=-100;  
    gameState1=LIFELINE3ACTIVE;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
  }

}

if(gameState1===LIFELINE3ACTIVE){
  
  lifeline1.visible=true;
  lifeline2.visible=true;
  lifeline3.visible=true;
  lifeline4.visible=true;
  yes.visible=false;  
  no.visible=false;

if(select_question==1 || select_question==-1){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==2 || select_question==-2){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==3 || select_question==-3){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==4 || select_question==-4){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==5 || select_question==-5){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==6 || select_question==-6){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==7 || select_question==-7){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==8 || select_question==-8){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==9 || select_question==-9){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==10 || select_question==-10){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==11 || select_question==-11){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==12 || select_question==-12){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==13 || select_question==-13){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==14 || select_question==-14){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==15 || select_question==-15){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==16 || select_question==-16){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==17 || select_question==-17){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==18 || select_question==-18){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==19 || select_question==-19){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==20 || select_question==-20){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==21 || select_question==-21){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==22 || select_question==-22){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==23 || select_question==-23){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==24 || select_question==-24){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==25 || select_question==-25){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==26 || select_question==-26){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==27 || select_question==-27){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==28 || select_question==-28){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==29 || select_question==-29){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==30 || select_question==-30){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==31 || select_question==-31){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==32 || select_question==-32){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==33 || select_question==-33){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==34 || select_question==-34){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==35 || select_question==-35){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==36 || select_question==-36){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==37 || select_question==-37){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==38 || select_question==-38){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==39 || select_question==-39){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==40 || select_question==-40){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==41 || select_question==-41){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==42 || select_question==-42){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==43 || select_question==-43){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==44 || select_question==-44){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==45 || select_question==-45){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==46 || select_question==-46){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==47 || select_question==-47){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==48 || select_question==-48){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==49 || select_question==-49){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==50 || select_question==-50){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==51 || select_question==-51){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==52 || select_question==-52){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==53 || select_question==-53){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==54 || select_question==-54){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==55 || select_question==-55){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==56 || select_question==-56){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==57 || select_question==-57){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==58 || select_question==-58){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==59 || select_question==-59){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==60 || select_question==-60){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==61 || select_question==-61){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==62 || select_question==-62){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==63 || select_question==-63){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==64 || select_question==-64){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==65 || select_question==-65){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==66 || select_question==-66){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==67 || select_question==-67){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==68 || select_question==-68){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==69 || select_question==-69){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==70 || select_question==-70){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==71 || select_question==-71){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==72 || select_question==-72){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==73 || select_question==-73){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==74 || select_question==-74){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==75 || select_question==-75){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==76 || select_question==-76){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==77 || select_question==-77){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==78 || select_question==-78){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==79 || select_question==-79){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==80 || select_question==-80){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==81 || select_question==-81){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==82 || select_question==-82){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==83 || select_question==-83){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==84 || select_question==-84){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==85 || select_question==-85){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==86 || select_question==-86){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==87 || select_question==-87){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==88 || select_question==-88){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==89 || select_question==-89){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==90 || select_question==90){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}
if(select_question==91 || select_question==-91){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==92 || select_question==-92){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==93 || select_question==-93){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==94 || select_question==-94){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==95 || select_question==-95){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==96 || select_question==-96){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==97 || select_question==-97){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==98 || select_question==-98){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==99 || select_question==-99){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==100 || select_question==-100){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==101 || select_question==-101){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running", APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==102 || select_question==-102){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==103 || select_question==-103){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==104 || select_question==-104){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==105 || select_question==-105){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==106 || select_question==-106){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==107 || select_question==-107){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running", APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==108 || select_question==-108){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==109 || select_question==-109){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==110 || select_question==-110){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==111 || select_question==-111){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==112 || select_question==-112){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==113 || select_question==-113){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==114 || select_question==-114){
  APoptD.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptD.addAnimation("running", APoptDImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptD.addAnimation("running",APoptDImg);
    gameState1=QUESTION;
    APoptD.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==115 || select_question==-115){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==116 || select_question==-116){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==117 || select_question==-117){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running", APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==118 || select_question==-118){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==119 || select_question==-119){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==120 || select_question==-120){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==121 || select_question==-121){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}
if(select_question==122 || select_question==-122){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running", APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;    
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==123 || select_question==-123){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==124 || select_question==-124){
  APoptA.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptA.addAnimation("running", APoptAImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptA.addAnimation("running",APoptAImg);
    gameState1=QUESTION;
    APoptA.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==125 || select_question==-125){
  APoptB.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptB.addAnimation("running", APoptBImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptB.addAnimation("running",APoptBImg);
    gameState1=QUESTION;
    APoptB.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}

if(select_question==126 || select_question==-126){
  APoptC.visible=true;
  cut.visible=true;
  tvscreen.visible=true;
  stopAP.velocityY=10;
  
  background1.visible=false;
  background2.visible=false;
  background3.visible=false;

  if(stopAP.y>600){
    stopAP.velocityY=0;
    APoptC.addAnimation("running", APoptCImg2);
  } 
  if(mousePressedOver(cut) && stopAP.y>600){
    clock.stop();
    APoptC.addAnimation("running",APoptCImg);
    gameState1=QUESTION;
    APoptC.visible=false;
    cut.visible=false;
    tvscreen.visible=false;
    if(l3count===1 || l3count===3){
      lifeline3.addAnimation("running",lifeline3Img2);
    }
  }
}
}
if(gameState===5 || gameState===7 || gameState===9){
  money.visible=true;
}else{
  money.visible=false
}
if(gameState1===LIFELINE4){
  
  yes.visible=true;
  no.visible=true;
  yes.x=320;
  no.x=400;

  if(mousePressedOver(yes)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    yes.x=-100;
    no.x=-100;     
    lifeline4.addAnimation("running", lifeline4Img2);
    l1count=0;
    l2count=0;
    l3count=0;
    l4count=1;
    stopAP.y=100;
    gameState1=QUESTION;
  }

  if(mousePressedOver(no)){
    clock.stop();
    yes.visible=false;
    no.visible=false;
    gameState1=QUESTION;
    yes.x=-100;
    no.x=-100;
  }
}

if(gameState1===ERR1LIFELINE4){
  
  ok.visible=true;
  ok.x=600;
  ok.y=340
  if(mousePressedOver(ok)){
    clock.stop();
    ok.visible=false;
    ok.y=300;
    gameState1=QUESTION;
  }
}

if(gameState1===ERR2LIFELINE4){
  
  ok.visible=true;
  ok.x=600;
  ok.y=320;
  if(mousePressedOver(ok)){
    clock.stop();
    ok.visible=false;
    ok.y=300;
    gameState1=QUESTION;
  }
}

if(l1count===0){
  lifeline1.addAnimation("running",lifeline1Img);
}

if(l2count===0){
  lifeline2.addAnimation("running",lifeline2Img);
}

if(l3count===0){
  lifeline3.addAnimation("running",lifeline3Img);
}

if(l4count===0){
  lifeline4.addAnimation("running",lifeline4Img);
}

   form.display();
   drawSprites();

   if(gameState1===QUESTION){
     lifeline1.visible=true;
     lifeline2.visible=true;
     lifeline3.visible=true;
     lifeline4.visible=true;
    timer.visible=true;

    if(mousePressedOver(lifeline1) && l1count===0 && time2<27){
      gameState1=LIFELINE;
  
    }
  
  if(mousePressedOver(lifeline2) && l2count===0 && time2<27){
    gameState1=LIFELINE2;

  }
  if(mousePressedOver(lifeline3) && l3count===0 && time2<27){
    gameState1=LIFELINE3;

  }



//lifeline 4
if(mousePressedOver(lifeline4) && l1count===1 && l2count===1 && l3count===1 && l4count===0 && l5count===4 && time2<27){
  gameState1=LIFELINE4;
}
else if(mousePressedOver(lifeline4) && l1count===0 && l4count===0 && time2<27){
  gameState1=ERR1LIFELINE4
}
else if(mousePressedOver(lifeline4) && l2count===0 && l4count===0 && time2<27){
  gameState1=ERR1LIFELINE4
}
else if(mousePressedOver(lifeline4) && l3count===0 && l4count===0 && time2<27){
  gameState1=ERR1LIFELINE4
}
else if(mousePressedOver(lifeline4) && l1count===1 && l5count!==4 && l4count===0 && time2<27){
  gameState1=ERR2LIFELINE4;
}
else if(mousePressedOver(lifeline4) && l2count===1 && l5count!==4 && l4count===0 && time2<27){
  gameState1=ERR2LIFELINE4
}
else if(mousePressedOver(lifeline4) && l3count===1 && l5count!==4 && l4count===0 && time2<27){
  gameState1=ERR2LIFELINE4
}

if(score>83886080 && scorecount===0){
  score=10;
  scorecount=1;
}

    var count2=World.seconds;
    if(count2+++1){
      time++;
    }
    
    if(time===30){
      time2=29;
    }
     
    if(time===60){
      time2=28;
    }
  
    if(time===90){
      time2=27;
    }
    if(time===120){
      clock.play();
     time2=26;
    }
  
    if(time===150){
      clock.play();
     time2=25;
    }
  
    if(time===180){
      clock.play();
     time2=24;
    }
  
    if(time===210){
      clock.play();
     time2=23;
    }
  
    if(time===240){
      clock.play();
     time2=22;
    }
  
    if(time===270){
      clock.play();
     time2=21;
    }
  
    if(time===300){
      clock.play();
     time2=20;
    }
  
    if(time===330){
      clock.play();
     time2=19;
    }
  
    if(time===360){
      clock.play();
     time2=18;
    }
  
    if(time===390){
      clock.play();
     time2=17;
    }
  
    if(time===420){
      clock.play();
     time2=16;
    }
  
    if(time===450){
      clock.play();
     time2=15;
    }
  
    if(time===480){
      clock.play();
     time2=14;
    }
  
    if(time===510){
      clock.play();
     time2=13;
    }
  
    if(time===540){
      clock.play();
     time2=12;
    }
  
    if(time===570){
      clock.play();
     time2=11;
    }
  
    if(time===600){
      clock.play();
     time2=10;
    }
  
    if(time===630){
      clock.play();
     time2=9;
    }
  
    if(time===660){
      clock.play();
     time2=8;
    }
  
    if(time===690){
      clock.play();
     time2=7;
    }
  
    if(time===720){
      clock.play();
     time2=6;
    }
  
    if(time===750){
      clock.play();
     time2=5;
    }
  
    if(time===780){
      clock.play();
     time2=4;
    }
  
    if(time===810){
      clock.play();
     time2=3;
    }
  
    if(time===840){
      clock.play();
     time2=2;
    }
  
    if(time===870){
      clock.play();
     time2=1;
    }
  
     if(time===900){
       clock.stop();
      time2=0;
      
    }
 
    if(time2===0){
      time2=1;
      gameState1=RESTART;
      fill("red");
      textSize(100)
      text("Time Up", 620,370);
    }

if(time2<11){
  fill("red");
  textSize(35);
  text(time2, timer.x-20, timer.y+20);
}

if(time2>10){
  fill("white");
  textSize(35);
  text(time2, timer.x-20, timer.y+20);
}
}

if(gameState1===LIFELINE || gameState1===LIFELINE2 || gameState1===LIFELINE3 || gameState1===ERR1LIFELINE4 || gameState1===ERR2LIFELINE4 || gameState1===LIFELINE4){
  fill("white");
  textSize(35);
  text(time2, timer.x-20, timer.y+20);
}

if(gameState1===ERR1LIFELINE4){
  fill("white");
  textSize(30);
  text("THIS LIFELINE WILL ACTIVATE WHEN YOU WILL USE ALL",200,250);
  text("OTHER LIFELINES",450,300);
}

if(gameState1===ERR2LIFELINE4){
  fill("white");
  textSize(30);
  text("THIS LIFELINE WILL ACTIVATE IN NEXT QUESTION",200,250);
}

if(gameState===2){
  fill("white");
  textSize(100);
  text("WELCOME ",330,100);
  fill("yellow");
  text(player.name,0,200);
}

if(gameState===3){
  fill("yellow");
  textSize(70);
  text("CHOOSE YOUR CHARACTER",100,130);

}

if(gameState===2){
  if(line.x!==600){
    loading.visible=true;
    line.visible=true;
    textSize(35);
    fill("red");
    text("LOADING", 520, 640);
  }
  if(line.x===600){
    loading.visible=false;
    line.visible=false;
  }
}
if(gameState===4 || gameState===6 || gameState===8){
Ayr.visible=true;

}
if(gameState===5 && score2===0){
  fill("white");
  textSize(30);
  text(": "+score2,900,50);
}
 
if(gameState===7 && score2===0){
  fill("white");
  textSize(30);
  text(": "+score2,900,50);
}
 
if(gameState===9 && score2===0){
  fill("white");
  textSize(30);
  text(": "+score2,900,50);
}
 
else if(gameState===5 && score2===5){
  fill("white");
  textSize(30);
  text(": "+score,900,50);
}
if(gameState===5 && score2===5 && scorecount===1){
  fill("white");
  textSize(30);
  text(": "+score+" Cr",900,50);
}
 
else if(gameState===7 && score2===5){
  fill("white");
  textSize(30);
  text(": "+score,900,50);
}
if(gameState===7 && score2===5 && scorecount===1){
  fill("white");
  textSize(30);
  text(": "+score+" Cr",900,50);
}
 
else if(gameState===9 && score2===5){
  fill("white");
  textSize(30);
  text(": "+score,900,50);
}
if(gameState===9 && score2===5 && scorecount===1){
  fill("white");
  textSize(30);
  text(": "+score+" Cr",900,50);
}
 
//if(gameState1===RESTART){
  //fill("white");
  //textSize(30);
 // text("YOUR CHECK",600,200);
//  text(player.name,580,250);
//}

if(gameState===5 || gameState===7 || gameState===9){
fill("white");
textSize(30);
text(questionnum+". ",220,480);

if(select_question==1){
fill("white");
textSize(27);
text("who is the son of Mohammad-Jahir-Ud-Din-Babur?",260,480);

textSize(27);
text("a. Akbar",230,580);
textSize(27);
text("b. Humayun",670,580);
textSize(27);
text("c. Umar",230,650);
textSize(27);
text("d. Birbal",670,650);


} if(select_question==2){
fill("white");
textSize(27);
text("who is the son of humayun?",260,480);

textSize(27);
text("a. Akbar",230,580);
textSize(27);
text("b. Humayun",670,580);
textSize(27);
text("c. Umar",230,650);
textSize(27);
text("d. Birbal",670,650);

} if(select_question==3){
fill("white");
textSize(27);
text("who is the father of Mohammad-Jahir-Ud-Din-Babur?",260,480);

textSize(27);
text("a. Akbar",230,580);
textSize(27);
text("b. Humayun",670,580);
textSize(27);
text("c. Umar",230,650);
textSize(27);
text("d. Birbal",670,650);
}
if(select_question==4){
fill("white");
textSize(27);
text("River Indus is also known as",260,480);

textSize(27);
text("a. Tapi River",230,580);
textSize(27);
text("b. Sindhu River",670,580);
textSize(27);
text("c. Ganga River",230,650);
textSize(27);
text("d. Godavari River",670,650);
}
if(select_question==5){
fill("white");
textSize(27);
text("Which state is the largest producer of wheat in India?",260,480);

textSize(27);
text("a. Uttar Pradesh",230,580);
textSize(27);
text("b. Andhra Pradesh",670,580);
textSize(27);
text("c. Madhya Pradesh",230,650);
textSize(27);
text("d. Himachal Pradesh",670,650);
}
if(select_question==6){
fill("white");
textSize(27);
text("Which state is the largest state in India?",260,480);

textSize(27);
text("a. Arunachal Pradesh",230,580);
textSize(27);
text("b. Maharashtra",670,580);
textSize(27);
text("c. Tamil Nadu",230,650);
textSize(27);
text("d. Rajasthan",670,650);
}
if(select_question==7){
fill("white");
textSize(27);
text("Mughal Emperor Akbar built",260,480);

textSize(27);
text("a. Delhi",230,580);
textSize(27);
text("b. Fatehpur Sikri",670,580);
textSize(27);
text("c. Thanjavur",230,650);
textSize(27);
text("d. Allahabad",670,650);
}
if(select_question==8){
fill("white");
textSize(27);
text("Who built the Red Fort of Delhi?",260,480);

textSize(27);
text("a. Akbar",230,580);
textSize(27);
text("b. Shivaji Maharaj",670,580);
textSize(27);
text("c. Ustad Ahmed Lahouri",230,650);
textSize(27);
text("d. Babur",670,650);
}
if(select_question==9){
fill("white");
textSize(27);
text("Who built Sanchi Stupa?",260,480);

textSize(27);
text("a. Ashoka",230,580);
textSize(27);
text("b. Bindusar",670,580);
textSize(27);
text("c. Chandragupta",230,650);
textSize(27);
text("d. Samudragupta",670,650);
}
if(select_question==10){
fill("white");
textSize(27);
text("Who built Charminar?",260,480);

textSize(25);
text("a. Mohammad Quli Qutub Shah",230,580);
textSize(27);
text("b. Qutub-ud-din-Aibaak",670,580);
textSize(27);
text("c. Ala-ud-din-Khilji",230,650);
textSize(27);
text("d. Mohammad-Jalal-Ud-Din-Akbar",670,650);
}
if(select_question==11){
fill("white");
textSize(27);
text("What was constructed as a memorial for the Indian Soldiers who",270,470);
text("died in the First World War and the Afghan War?",270,510);

textSize(27);
text("a. Charminar",230,580);
textSize(27);
text("b. Buland Darwaza",670,580);
textSize(27);
text("c. Gateway of India",230,650);
textSize(27);
text("d. India Gate",670,650);
}
if(select_question==12){
fill("white");
textSize(27);
text("Where did Salar Jung Museum is situated?",260,480);

textSize(27);
text("a. Delhi",230,580);
textSize(27);
text("b. Jaipur",670,580);
textSize(27);
text("c. Hyderabad",230,650);
textSize(27);
text("d. Mumbai",670,650);
}
if(select_question==13){
fill("white");
textSize(27);
text("In which state is Bodo language is spoken?",260,480);

textSize(27);
text("a. Tamil Nadu",230,580);
textSize(27);
text("b. Assam",670,580);
textSize(27);
text("c. Karnataka",230,650);
textSize(27);
text("d. Uttarakhand",670,650);
}
if(select_question==14){
fill("white");
textSize(27);
text("Which language is predominantly spoken in kerala?",260,480);

textSize(27);
text("a. Tamil",230,580);
textSize(27);
text("b. Telugu",670,580);
textSize(27);
text("c. Kannada",230,650);
textSize(27);
text("d. Malayalam",670,650);
}
if(select_question==15){
fill("white");
textSize(27);
text("Which language is known as the 'Italian of the East'?",260,480);

textSize(27);
text("a. Bodo",230,580);
textSize(27);
text("b. Telugu",670,580);
textSize(27);
text("c. Malayalam",230,650);
textSize(27);
text("d. Tamil",670,650);
}
if(select_question==16){
fill("white");
textSize(27);
text("Which is the only state which has Sanskrit as one of its official",260,470);
text("language?",260,510)

textSize(27);
text("a. Telangana",230,580);
textSize(27);
text("b. Sikkim",670,580);
textSize(27);
text("c. Karnataka",230,650);
textSize(27);
text("d. Uttarakhand",670,650);
}
if(select_question==17){
fill("white");
textSize(27);
text("Which is the first language to be conferred the status of a Classical",260,460);
text("language?",260,510);
textSize(27);
text("a. Sanskrit",230,580);
textSize(27);
text("b. Malayalam",670,580);
textSize(27);
text("c. Marathi",230,650);
textSize(27);
text("d. Tamil",670,650);
}
if(select_question==18){
fill("white");
textSize(27);
text("Which is the official language of Nagaland?",260,480);

textSize(27);
text("a. Hindi",230,580);
textSize(27);
text("b. English",670,580);
textSize(27);
text("c. French",230,650);
textSize(27);
text("d. Bodo",670,650);
}
if(select_question==19){
fill("white");
textSize(27);
text("Which foreign language is commonly spoken in Puducherry?",260,480);

textSize(27);
text("a. English",230,580);
textSize(27);
text("b. German",670,580);
textSize(27);
text("c. French",230,650);
textSize(27);
text("d. Chinese",670,650);
}
if(select_question==20){
fill("white");
textSize(27);
text("Who is also known as 'Tiger of Mysore?",260,480);

textSize(27);
text("a. Hyder Ali",230,580);
textSize(27);
text("b. Tipu Sultan",670,580);
textSize(27);
text("c. Samrat Ashoka",230,650);
textSize(27);
text("d. Bimbisara",670,650);
}
if(select_question==21){
fill("white");
textSize(27);
text("Who belonged to the Haryanka Dynasty?",260,480);

textSize(27);
text("a. Tipu Sultan",230,580);
textSize(27);
text("b. Chandragupta Maurya",670,580);
textSize(27);
text("c. Bimbisara",230,650);
textSize(27);
text("d. Chandragupta Vikramaditya",670,650);
}
if(select_question==22){
fill("white");
textSize(27);
text("The Alexander defeated which brave king?",260,480);

textSize(27);
text("a. Porus",230,580);
textSize(27);
text("b. Ashoka",670,580);
textSize(27);
text("c. Bimbisara",230,650);
textSize(27);
text("d. Harshavardana",670,650);
}
if(select_question==23){
fill("white");
textSize(27);
text("Who is the 'Napoleon' of the Indian history?",260,480);

textSize(27);
text("a. Ashoka",230,580);
textSize(27);
text("b. Samudragupta",670,580);
textSize(27);
text("c. Akbar",230,650);
textSize(27);
text("d. Hyder Ali",670,650);
}
if(select_question==24){
fill("white");
textSize(27);
text("Who is the Kushana King?",260,480);

textSize(27);
text("a. Ranjit Singh",230,580);
textSize(27);
text("b. Kanishka",670,580);
textSize(27);
text("c. Alexander",230,650);
textSize(27);
text("d. Bimbisara",670,650);
}
if(select_question==25){
fill("white");
textSize(27);
text("Who is the author of 'Abhigyan Shakuntalam?",260,480);

textSize(27);
text("a. Kalidasa",230,580);
textSize(27);
text("b. Chitra Subramaniam",670,580);
textSize(27);
text("c. Vikram Seth",230,650);
textSize(27);
text("d. Nirad C. Choudhuri",670,650);
}
if(select_question==26){
fill("white");
textSize(27);
text("Who was moved by the Kalinga war?",260,480);

textSize(27);
text("a. Bimbisara",230,580);
textSize(27);
text("b. Kanishka",670,580);
textSize(27);
text("c. Chandragupta",230,650);
textSize(27);
text("d. Ashoka",670,650);
}
if(select_question==27){
fill("white");
textSize(27);
text("Who is known as the 'BSP Supremo'?",260,480);

textSize(27);
text("a. Mayamati",230,580);
textSize(27);
text("b. Sheila Dikshit",670,580);
textSize(27);
text("c. Meira Kumar",230,650);
textSize(27);
text("d. Sonia Gandhi",670,650);
}
if(select_question==28){
fill("white");
textSize(27);
text("Who became the first woman Chief Minister of Rajasthan?",260,480);

textSize(27);
text("a. Sonia Gandhi",230,580);
textSize(27);
text("b. Mamata Banerjee",670,580);
textSize(27);
text("c. Mayamati",230,650);
textSize(27);
text("d. Vasundhara Raje",670,650);
}
if(select_question==29){
fill("white");
textSize(27);
text("Who is the first woman Speaker of Lok Sabha?",260,480);

textSize(27);
text("a. Pratibha Devisingh Patil",230,580);
textSize(27);
text("b. Meira Kumar",670,580);
textSize(27);
text("c. Mamata Banerjee",230,650);
textSize(27);
text("d. Sheila Dikshit",670,650);
}
if(select_question==30){
fill("white");
textSize(27);
text("Who was the Chief Minister of Delhi for fifteen consecutive years?",260,480);

textSize(27);
text("a. Mamata Banerjee",230,580);
textSize(27);
text("b. Mayamati",670,580);
textSize(27);
text("c. Sheila Dikshit",230,650);
textSize(27);
text("d. Smirit Irani",670,650);
}
if(select_question==31){
fill("white");
textSize(27);
text("Who is a former of Supreme Court lawyer and the first woman",260,460);
text("Chief Minister of Delhi?",260,510)
textSize(27);
text("a. Smirit Irani",230,580);
textSize(27);
text("b. Sushma Swaraj",670,580);
textSize(27);
text("c. Jayaram Jayalalitha",230,650);
textSize(27);
text("d. Meira Kumar",670,650);
}
if(select_question==32){
fill("white");
textSize(27);
text("Where did Battle of Buxar fought?",260,480);

textSize(27);
text("a. Bihar",230,580);
textSize(27);
text("b. Kerala",670,580);
textSize(27);
text("c. Telangana",230,650);
textSize(27);
text("d. Sikkim",670,650);
}
if(select_question==33){
fill("white");
textSize(27);
text("Who is the one and only successful Cricket captain in world to win",260,460);
text("all international trophies?",260,510);
textSize(27);
text("a. Eoin Morgan",230,580);
textSize(27);
text("b. Ken Williamson",670,580);
textSize(27);
text("c. Steve Smith",230,650);
textSize(27);
text("d. M.S. Dhoni",670,650);
}
if(select_question==34){
fill("white");
textSize(27);
text("In which country cricket began?",260,480);

textSize(27);
text("a. France",230,580);
textSize(27);
text("b. Germany",670,580);
textSize(27);
text("c. England",230,650);
textSize(27);
text("d. Russia",670,650);
}
if(select_question==35){
fill("white");
textSize(27);
text("Who won the World Cup 2019?",260,480);

textSize(27);
text("a. England",230,580);
textSize(27);
text("b. Australia",670,580);
textSize(27);
text("c. New Zealand",230,650);
textSize(27);
text("d. West Indies",670,650);
}
if(select_question==36){
fill("white");
textSize(27);
text("Who is the son of Hyder Ali?",260,480);

textSize(27);
text("a. Bimbisara",230,580);
textSize(27);
text("b. Ashoka",670,580);
textSize(27);
text("c. Tipu Sultan",230,650);
textSize(27);
text("d. Duleep Singh",670,650);
}
if(select_question==37){
fill("white");
textSize(27);
text("Who started 'Mooknayak' newspaper?",260,480);

textSize(27);
text("a. Rabindranath Tagore",230,580);
textSize(27);
text("b. Abdul Fazal",670,580);
textSize(27);
text("c. Dr. Babasaheb Ambedkar",230,650);
textSize(27);
text("d. Amit Choudhuri",670,650);
}
if(select_question==38){
fill("white");
textSize(27);
text("Who said 'That's one step for a man, a giant leap for mankind?",260,480);

textSize(27);
text("a. Napolean Bonaparte",230,580);
textSize(27);
text("b. William Shakespeare",670,580);
textSize(27);
text("c. George Herbert",230,650);
textSize(27);
text("d. Neil Armstrong",670,650);
}
if(select_question==39){
fill("white");
textSize(27);
text("Which is another name of Japan?",260,480);

textSize(27);
text("a. Osaka",230,580);
textSize(27);
text("b. Tokyo",670,580);
textSize(27);
text("c. Fujiyana",230,650);
textSize(27);
text("d. Nippon",670,650);
}
if(select_question==40){
fill("white");
textSize(27);
text("Where did UN headquarters is situated?",260,480);

textSize(27);
text("a. Paris",230,580);
textSize(27);
text("b. New York",670,580);
textSize(27);
text("c. Viennna",230,650);
textSize(27);
text("d. U.S.A.",670,650);
}
if(select_question==41){
fill("white");
textSize(27);
text("which part of the plant is used most for medicinal properties?",260,480);

textSize(27);
text("a. Leaves",230,580);
textSize(27);
text("b. Stem",670,580);
textSize(27);
text("c. Seeds",230,650);
textSize(27);
text("d. Root",670,650);
}
if(select_question==42){
fill("white");
textSize(27);
text("Which Cricketer holds the record of highest individual run score",260,460);
text("in an ODI?",260,510);
textSize(27);
text("a. Glen Maxwell",230,580);
textSize(27);
text("b. Sachin Tendulkar",670,580);
textSize(27);
text("c. Rohit Sharma",230,650);
textSize(27);
text("d. Chris Gayle",670,650);
}
if(select_question==43){
fill("white");
textSize(27);
text("Which planet is called 'Earth's twin'?",260,480);

textSize(27);
text("a. Venus",230,580);
textSize(27);
text("b. Neptune",670,580);
textSize(27);
text("c. Mars",230,650);
textSize(27);
text("d. Saturn",670,650);
}
if(select_question==44){
fill("white");
textSize(27);
text("In which Indian city would you find the Indira Gandhi Internaational",260,460);
text("Airport?",260,510)
textSize(27);
text("a. Kolkata",230,580);
textSize(27);
text("b. New Delhi",670,580);
textSize(27);
text("c. Bengaluru",230,650);
textSize(27);
text("d. Chennai",670,650);
}
if(select_question==45){
fill("white");
textSize(27);
text("How many years ago Universe was created?",260,480);

textSize(27);
text("a. 4.5 Billions years ago",230,580);
textSize(27);
text("b. 3 Billions years ago",670,580);
textSize(27);
text("c. 4 Billions years ago",230,650);
textSize(27);
text("d. 20 Billions years ago",670,650);
}
if(select_question==46){
fill("white");
textSize(27);
text("How many years ago Earth was created?",260,480);

textSize(27);
text("a. 4.5 Billions years ago",230,580);
textSize(27);
text("b. 3 Billions years ago",670,580);
textSize(27);
text("c. 3.5 Billions years ago",230,650);
textSize(27);
text("d. 4 Billions years ago",670,650);
}
if(select_question==47){
fill("white");
textSize(27);
text("Which country won maximum number of Gold medals in Summer",260,460);
text("Olympics 2016?",260,510);
textSize(27);
text("a. Britain",230,580);
textSize(27);
text("b. USA",670,580);
textSize(27);
text("c. France",230,650);
textSize(27);
text("d. China",670,650);
}
if(select_question==48){
fill("white");
textSize(27);
text("Which country won Gold medal in Javalin throw in Tokyo Olympics",260,460);
text("2020?",260,510)
textSize(27);
text("a. USA",230,580);
textSize(27);
text("b. France",670,580);
textSize(27);
text("c. India",230,650);
textSize(27);
text("d. China",670,650);
}
if(select_question==49){
fill("white");
textSize(27);
text("Who is also known as 'Prince of Martyrs'?",260,480);

textSize(27);
text("a. Bhagat Singh",230,580);
textSize(27);
text("b. Raja Rammohan Roy",670,580);
textSize(27);
text("c. Bal Gangadhar Tilak",230,650);
textSize(27);
text("d. Muhammad Ali",670,650);
}
if(select_question==50){
fill("white");
textSize(27);
text("In which country Industrial Revolution began?",260,480);

textSize(27);
text("a. France",230,580);
textSize(27);
text("b. USA",670,580);
textSize(27);
text("c. Russia",230,650);
textSize(27);
text("d. England",670,650);
}
if(select_question==51){
fill("white");
textSize(27);
text("What is the capital of Sri Lanka?",260,480);

textSize(27);
text("a. Comberra",230,580);
textSize(27);
text("b. Colombo",670,580);
textSize(27);
text("c. Doha",230,650);
textSize(27);
text("d. Juba",670,650);
}
if(select_question==52){
fill("white");
textSize(27);
text("Who is the first vice president of India?",260,480);

textSize(27);
text("a. Dr. Radhakrishnan",230,580);
textSize(27);
text("b. Jawaharlal Nehru",670,580);
textSize(27);
text("c. Vallabh bhai Patel",230,650);
textSize(27);
text("d. V.V. Giri",670,650);
}
if(select_question==53){
fill("white");
textSize(27);
text("Who invented 'Theory of Relativity'?",260,480);

textSize(27);
text("a. Issac Newton",230,580);
textSize(27);
text("b. Charles Babbage",670,580);
textSize(27);
text("c. Henry Fauld",230,650);
textSize(27);
text("d. Albert Einstein",670,650);
}
if(select_question==54){
fill("white");
textSize(27);
text("Who is known as 'father of Genetics'?",260,480);

textSize(27);
text("a. Morgan",230,580);
textSize(27);
text("b. Mendal",670,580);
textSize(27);
text("c. Hugo de Vries",230,650);
textSize(27);
text("d. Meischer",670,650);
}
if(select_question==55){
fill("white");
textSize(27);
text("What is the old name of Bangladesh?",260,480);

textSize(27);
text("a. Persia",230,580);
textSize(27);
text("b. Burma",670,580);
textSize(27);
text("c. Holland",230,650);
textSize(27);
text("d. East Pakistan",670,650);
}
if(select_question==56){
fill("white");
textSize(27);
text("Which is the largest planet in the solar system?",260,480);

textSize(27);
text("a. Venus",230,580);
textSize(27);
text("b. Jupiter",670,580);
textSize(27);
text("c. Saturn",230,650);
textSize(27);
text("d. Earth",670,650);
}
if(select_question==57){
fill("white");
textSize(27);
text("Which continent is smallest continent in the world?",260,480);

textSize(27);
text("a. Australia",230,580);
textSize(27);
text("b. South America",670,580);
textSize(27);
text("c. Antartica",230,650);
textSize(27);
text("d. Asia",670,650);
}
if(select_question==58){
fill("white");
textSize(27);
text("Which is the oldest religion?",260,480);

textSize(27);
text("a. Muslim",230,580);
textSize(27);
text("b. Christian",670,580);
textSize(27);
text("c. Hinduism",230,650);
textSize(27);
text("d. Sikh",670,650);
}
if(select_question==59){
fill("white");
textSize(27);
text("Who is the author of 'Hungry Stones'?",260,480);

textSize(27);
text("a. Amit Choudhuri",230,580);
textSize(27);
text("b. Rabindranath Tagore",670,580);
textSize(27);
text("c. Abdul Fazal",230,650);
textSize(27);
text("d. Nayantara Sehgal",670,650);
}
if(select_question==60){
fill("white");
textSize(27);
text("The name of the large cannon used by the Germans in the First",260,460);
text("World War?",260,510)
textSize(27);
text("a. Big Bertha",230,580);
textSize(27);
text("b. Big Apple",670,580);
textSize(27);
text("c. Big Ben",230,650);
textSize(27);
text("d. Big Bang",670,650);
}
if(select_question==61){
fill("white");
textSize(27);
text("Which of these two countries have not signed the kyoto Climate",260,460);
text("Treaty?",260,510);
textSize(27);
text("a. China and France",230,580);
textSize(27);
text("b. USA and France",670,580);
textSize(27);
text("c. USA and Australia",230,650);
textSize(27);
text("d. Australia and France",670,650);
}
if(select_question==62){
fill("white");
textSize(27);
text("Where did M.S. Dhoni born?",260,480);

textSize(27);
text("a. Mumbai",230,580);
textSize(27);
text("b. Chennai",670,580);
textSize(27);
text("c. Hyderabad",230,650);
textSize(27);
text("d. Ranchi",670,650);
}
if(select_question==63){
fill("white");
textSize(27);
text("Ngwee is a coin of which country?",260,480);

textSize(27);
text("a. Zimbabwe",230,580);
textSize(27);
text("b. New Zealand",670,580);
textSize(27);
text("c. Poland",230,650);
textSize(27);
text("d. Zambia",670,650);
}
if(select_question==64){
fill("white");
textSize(27);
text("What is a coracle?",260,480);

textSize(27);
text("a. a crow",230,580);
textSize(27);
text("b. a boat",670,580);
textSize(27);
text("c. a disease",230,650);
textSize(27);
text("d. a wise man",670,650);
}
if(select_question==65){
fill("white");
textSize(27);
text("What is the meaning of 'Civvies'?",260,480);

textSize(27);
text("a. Civilian Clothes",230,580);
textSize(27);
text("b. Civil Service",670,580);
textSize(27);
text("c. Civil Engineering",230,650);
textSize(27);
text("d. Civil Law",670,650);
}
if(select_question==66){
fill("white");
textSize(27);
text("Which of these is capital of a country?",260,480);

textSize(27);
text("a. Principe",230,580);
textSize(27);
text("b. Naura",670,580);
textSize(27);
text("c. Malta",230,650);
textSize(27);
text("d. Apia",670,650);
}
if(select_question==67){
fill("white");
textSize(27);
text("Which country's researchers were the first to clone a horse?",260,480);

textSize(27);
text("a. China",230,580);
textSize(27);
text("b. USA",670,580);
textSize(27);
text("c. Italian",230,650);
textSize(27);
text("d. German",670,650);
}
if(select_question==68){
fill("white");
textSize(27);
text("Where did Issac Newton born?",260,480);

textSize(27);
text("a. England",230,580);
textSize(27);
text("b. USA",670,580);
textSize(27);
text("c. Brazil",230,650);
textSize(27);
text("d. France",670,650);
}
if(select_question==69){
fill("white");
textSize(27);
text("In the year 1642, after the death of which scientist Issac Newton",260,460);
text("born?",260,510);
textSize(27);
text("a. Albert Einstein",230,580);
textSize(27);
text("b. Galileo Galilei",670,580);
textSize(27);
text("c. Thomas Edison",230,650);
textSize(27);
text("d. Johannes Kepler",670,650);
}
if(select_question==70){
fill("white");
textSize(27);
text("Where did Yanam, the part of pondicherry is located?",260,480);

textSize(27);
text("a. Kerala",230,580);
textSize(27);
text("b. Tamil Nadu",670,580);
textSize(27);
text("c. Andhra Pradesh",230,650);
textSize(27);
text("d. Karnataka",670,650);
}
if(select_question==71){
fill("white");
textSize(27);
text("Who is the author of 'The Idea of a University?",260,480);

textSize(27);
text("a. Cardinal Newman",230,580);
textSize(27);
text("b. Francis Bacon",670,580);
textSize(27);
text("c. Dr. s. Radhakrishnan",230,650);
textSize(27);
text("d. Thomas Carlyle",670,650);
}
if(select_question==72){
fill("white");
textSize(27);
text("The Tripitaka is the sacred text of which religion?",260,480);

textSize(27);
text("a. Buddhism",230,580);
textSize(27);
text("b. Muslim",670,580);
textSize(27);
text("c. Christian",230,650);
textSize(27);
text("d. Jains",670,650);
}
if(select_question==73){
fill("white");
textSize(27);
text("The epic poem 'The Light of Asia' is about?",260,480);

textSize(27);
text("a. Tagore",230,580);
textSize(27);
text("b. Gandhiji",670,580);
textSize(27);
text("c. the Dalai Lama",230,650);
textSize(27);
text("d. the Buddha",670,650);
}
if(select_question==74){
fill("white");
textSize(27);
text("In which country there is no traffic light?",260,480);

textSize(27);
text("a. Ethiopia",230,580);
textSize(27);
text("b. Italy",670,580);
textSize(27);
text("c. Bhutan",230,650);
textSize(27);
text("d. Eritrea",670,650);
}
if(select_question==75){
fill("white");
textSize(27);
text("In which country Owen Falls, the world's greatest manmade lake is?",260,480);

textSize(27);
text("a. Zimbabwe",230,580);
textSize(27);
text("b. Canada",670,580);
textSize(27);
text("c. Uganda",230,650);
textSize(27);
text("d. USA",670,650);
}
if(select_question==76){
fill("white");
textSize(27);
text("Which country is the first country to adopt Christianity as its religion?",260,480);

textSize(27);
text("a. France",230,580);
textSize(27);
text("b. Armenia",670,580);
textSize(27);
text("c. Austria",230,650);
textSize(27);
text("d. Mexico",670,650);
}
if(select_question==77){
fill("white");
textSize(27);
text("Khamman is one of the districts of?",260,480);

textSize(27);
text("a. Andhra Pradesh",230,580);
textSize(27);
text("b. Uttar Pradesh",670,580);
textSize(27);
text("c. Himachal Pradesh",230,650);
textSize(27);
text("d. Arunachal Pradesh",670,650);
}  
if(select_question==78){
fill("white");
textSize(27);
text("Sound wave do not travel in?",260,480);

textSize(27);
text("a. Solids",230,580);
textSize(27);
text("b. Liquids",670,580);
textSize(27);
text("c. Gases",230,650);
textSize(27);
text("d. Vaccum",670,650);
} 
if(select_question==79){
fill("white");
textSize(27);
text("Who established 'Mitramela', a revolutionary organization in 1900 AD?",260,480);

textSize(27);
text("a. V. D. Savarkar",230,580);
textSize(27);
text("b. Kanhere Brothers",670,580);
textSize(27);
text("c. Babaji Savarkar",230,650);
textSize(27);
text("d. Damodar Chaphekar",670,650);
}      
if(select_question==80){
fill("white");
textSize(27);
text("Who was first Indian to be awarded by Nobel Prize?",260,480);

textSize(27);
text("a. Vinoba Bhave",230,580);
textSize(27);
text("b. Ravindranath Tagore",670,580);
textSize(27);
text("c. Vallabh Bhai Patel",230,650);
textSize(27);
text("d. Pandit Jawaharlal Nehru",670,650);
}                      
if(select_question==81){
fill("white");
textSize(27);
text("A draft proposal of a law is known as?",260,480);

textSize(27);
text("a. Resolution",230,580);
textSize(27);
text("b. Bill",670,580);
textSize(27);
text("c. Ordinance",230,650);
textSize(27);
text("d. Draft",670,650);
} 
if(select_question==82){
fill("white");
textSize(27);
text("What is the original name of Shahu Maharaj?",260,480);

textSize(27);
text("a. Jasing Rao",230,580);
textSize(27);
text("b. Yashwant Rao",670,580);
textSize(27);
text("c. Jayaji Rao",230,650);
textSize(27);
text("d. Uday Singh",670,650);
}      
if(select_question==83){
fill("white");
textSize(27);
text("Which satyagraha was organised by Sardar Vallabhbhai Patel?",260,480);

textSize(27);
text("a. Zenda Satyagraha",230,580);
textSize(27);
text("b. Kheda Satyagraha",670,580);
textSize(27);
text("c. Bardoli Satyagraha",230,650);
textSize(27);
text("d. Salt Satyagraha",670,650);
}           
if(select_question==84){
fill("white");
textSize(27);
text("What was established during 1906?",260,480);

textSize(27);
text("a. Swaraj Party",230,580);
textSize(27);
text("b. Communist Party",670,580);
textSize(27);
text("c. Muslim League",230,650);
textSize(27);
text("d. Janata Dal",670,650);
} 
if(select_question==85){
fill("white");
textSize(27);
text("Who established Azad Hind Government?",260,480);

textSize(27);
text("a. Lala Hardayal",230,580);
textSize(27);
text("b. Subhash Chandra Bose",670,580);
textSize(27);
text("c. Ras Bihari Bose",230,650);
textSize(27);
text("d. Ravindranath Tagore",670,650);
}      
if(select_question==86){
fill("white");
textSize(27);
text("Film actor Chiranjeevi mainly works in which language?",260,480);

textSize(27);
text("a. Tamil",230,580);
textSize(27);
text("b. Telugu",670,580);
textSize(27);
text("c. Malayalam",230,650);
textSize(27);
text("d. Kannada",670,650);
}      
if(select_question==87){
fill("white");
textSize(27);
text("Who is 12th president of India?",260,480);

textSize(27);
text("a. Ram Nath Kovind",230,580);
textSize(27);
text("b. Pranab Mukherjee",670,580);
textSize(27);
text("c. Pratibha Patil",230,650);
textSize(27);
text("d. A. P. J. Abdul Kalam",670,650);
} 
if(select_question==88){
fill("white");
textSize(27);
text("Where did winter session of the Maharashtra State Legislature takes",260,460);
text("place?",260,510);

textSize(27);
text("a. Aurangabad",230,580);
textSize(27);
text("b. Nagpur",670,580);
textSize(27);
text("c. Mumbai",230,650);
textSize(27);
text("d. Pune",670,650);
}      
if(select_question==89){
fill("white");
textSize(27);
text("Which film is most successful in Box Office in worldwide?",260,480);

textSize(27);
text("a. Dangal",230,580);
textSize(27);
text("b. RRR",670,580);
textSize(27);
text("c. KGF Chapter 2",230,650);
textSize(27);
text("d. Bahubali 2",670,650);
}        
if(select_question==90){
fill("white");
textSize(27);
text("Which of the following objective is not included in the Preamble",260,460);
text("of the Indian Constitution?",260,510);

textSize(27);
text("a. Equality",230,580);
textSize(27);
text("b. Liberty",670,580);
textSize(27);
text("c. Federalism",230,650);
textSize(27);
text("d. Justice",670,650);
}                  
if(select_question==91){
fill("white");
textSize(27);
text("Who was recognised as a pioneer of social revolutionary in the",260,460);
text("social history of 20th century?",260,510)
textSize(27);
text("a. Chhatrapati Sambhaji Maharaj",230,580);
textSize(27);
text("b. Rajaram Maharaj",670,580);
textSize(27);
text("c. Chhatrapati Shivaji Maharaj",230,650);
textSize(27);
text("d. Rajarshi Shahu Maharaj",670,650);
}
if(select_question==92){
fill("white");
textSize(27);
text("Where did first civic reception in the honour of President Pratibha",260,460);
text("Patil was organised?",260,510);
textSize(27);
text("a. Amravati",230,580);
textSize(27);
text("b. Nagpur",670,580);
textSize(27);
text("c. Pune",230,650);
textSize(27);
text("d. Mumbai",670,650);
}
if(select_question==93){
fill("white");
textSize(27);
text("Where did first underground railway in India was built",260,480);

textSize(27);
text("a. Mumbai",230,580);
textSize(27);
text("b. Chennai",670,580);
textSize(27);
text("c. Delhi",230,650);
textSize(27);
text("d. Kolkata",670,650);
}
if(select_question==94){
fill("white");
textSize(27);
text("Whome did India defeated to won Asia Cup 2007?",260,480);

textSize(27);
text("a. Malaysia",230,580);
textSize(27);
text("b. Japan",670,580);
textSize(27);
text("c. South Korea",230,650);
textSize(27);
text("d. China",670,650);
}
if(select_question==95){
fill("white");
textSize(27);
text("Where did first session of Indian National Congress was held?",260,480);

textSize(27);
text("a. Nagpur",230,580);
textSize(27);
text("b. Mumbai",670,580);
textSize(27);
text("c. Pune",230,650);
textSize(27);
text("d. Chennai",670,650);
}
if(select_question==96){
fill("white");
textSize(27);
text("Who has described the revolt of 1857 as a 'First War of",260,460);
text("Independence'?",260,510);

textSize(27);
text("a. Swantantryaveer Savarkar",230,580);
textSize(27);
text("b. Lokmanya Tilak",670,580);
textSize(27);
text("c. G. G. Agarkar",230,650);
textSize(27);
text("d. Justice Ranade",670,650);
}
if(select_question==97){
fill("white");
textSize(27);
text("Which new technique was introduced by Gandhiji to fight against",260,460);
text("British Government?",260,510);

textSize(27);
text("a. Satyagraha",230,580);
textSize(27);
text("b. Armed Movement",670,580);
textSize(27);
text("c. To request the government",230,650);
textSize(27);
text("d. Non-cooperation",670,650);
}
if(select_question==98){
fill("white");
textSize(27);
text("Where did 'Quit India' resolution was passed by Indian National",260,460);
text("Congress in 1942?",260,510);

textSize(27);
text("a. Calcutta",230,580);
textSize(27);
text("b. Madras",670,580);
textSize(27);
text("c. Nagpur",230,650);
textSize(27);
text("d. Mumbai",670,650);
}
if(select_question==99){
fill("white");
textSize(27);
text("Who was the Draft Committee of the Constituent Assembly?",260,480);

textSize(27);
text("a. Pandit Jawaharlal Nehru",230,580);
textSize(27);
text("b. Dr. Babasaheb Ambedkar",670,580);
textSize(27);
text("c. Barrister Jaykar",230,650);
textSize(27);
text("d. Sardar Vallabhbhai Patel",670,650);
}
if(select_question==100){
fill("white");
textSize(27);
text("Whose message was 'Learn, Organise and Agitate' given to",260,460);
text("Dalit Youth?",260,510);
textSize(27);
text("a. Dr. Babasaheb Ambedkar",230,580);
textSize(27);
text("b. Mahatma Phule",670,580);
textSize(27);
text("c. Maharshi Karve",230,650);
textSize(27);
text("d. Rajarshi Shahu Maharaj",670,650);
}
if(select_question==101){
fill("white");
textSize(27);
text("Which new revolutionary association was formed by Bhagat Singh,",260,460);
text("Sukhdev, Chandrashekhar Azad?",260,510);

textSize(27);
text("a. Abhinav Bharat",230,580);
textSize(27);
text("b. Hindustan Republic Association",670,580);
textSize(25.5);
text("c. Hindustan Socialist Republic",230,635);
text("Association",255,663);
textSize(27);
text("d. Gadar Party",670,650);
}
if(select_question==102){
fill("white");
textSize(27);
text("When did the British Administrators had used the word",260,460);
text("'Independence' for India for the first time?",260,510);

textSize(27);
text("a. Attlee's announcement",230,580);
textSize(27);
text("b. Cabinet Mission Plan",670,580);
textSize(27);
text("c. Mountbatten Plan",230,650);
textSize(27);
text("d. Wavell Plan",670,650);
}
if(select_question==103){
fill("white");
textSize(27);
text("Who said, 'Untouchability is a stigma on Society'?",260,480);

textSize(27);
text("a. Maharshi V. R. Shinde",230,580);
textSize(27);
text("b. Mahatma Phule",670,580);
textSize(27);
text("c. Dr. Babasaheb Ambedkar",230,650);
textSize(27);
text("d. Gopal Baba Velangkar",670,650);
}
if(select_question==104){
fill("white");
textSize(27);
text("Who was chosen as the first satyagrahi for Individual Satyagraha?",260,480);

textSize(27);
text("a. Sardar Vallabhbhai Patel",230,580);
textSize(27);
text("b. Maulana Abul Kalam Azad",670,580);
textSize(27);
text("c. Pandit Jawaharlal Nehru",230,650);
textSize(27);
text("d. Acharya Vinoba bhave",670,650);
}
if(select_question==105){
fill("white");
textSize(27);
text("Which British Prime Minister announced Communal Award in 1932?",260,480);

textSize(27);
text("a. Winston Churchill",230,580);
textSize(27);
text("b. Woodrow Wilson",670,580);
textSize(27);
text("c. Ramsay MacDonald",230,650);
textSize(27);
text("d. Attlee",670,650);
}
if(select_question==106){
fill("white");
textSize(27);
text("Who was the first women educated by Mahatma Phule?",260,480);

textSize(27);
text("a. Tarabai",230,580);
textSize(27);
text("b. Savitribai",670,580);
textSize(27);
text("c. Ramabai",230,650);
textSize(27);
text("d. Anandibai",670,650);
}
if(select_question==107){
fill("white");
textSize(27);
text("Who was very expensive player in Auction of Tata IPL 2022?",260,480);

textSize(27);
text("a. David Warner",230,580);
textSize(27);
text("b. Ishan Kishan",670,580);
textSize(27);
text("c. Hardik Pandya",230,650);
textSize(27);
text("d. Faf Duplesi",670,650);
}
if(select_question==108){
fill("white");
textSize(27);
text("Who was elected as President of th Constituent Assembly?",260,480);

textSize(27);
text("a. Dr. Rajendra Prasad",230,580);
textSize(27);
text("b. Dr. Babasaheb Ambedkar",670,580);
textSize(27);
text("c. Mahatma Phule",230,650);
textSize(27);
text("d. Gopal Baba Velangkar",670,650);
}  
if(select_question==109){
fill("white");
textSize(27);
text("Where did Dr. Babasaheb Ambedkar was changed his religion and",260,460);
text("became Buddhist with his disciples in October 1956?",260,510);

textSize(27);
text("a. Mumbai",230,580);
textSize(27);
text("b. Pune",670,580);
textSize(27);
text("c. Satara",230,650);
textSize(27);
text("d. Nagpur",670,650);
} 
if(select_question==110){
fill("white");
textSize(27);
text("Who Convened the First Round Table Conference in 1930?",260,480);

textSize(27);
text("a. Lord Canning",230,580);
textSize(27);
text("b. Lord Ripon",670,580);
textSize(27);
text("c. Lord Mountbatten",230,650);
textSize(27);
text("d. Ramsay MacDonald",670,650);
}      
if(select_question==111){
fill("white");
textSize(27);
text("Who founded the Satyashodak Samaj in 1873?",260,480);

textSize(27);
text("a. Maharshi Karve",230,580);
textSize(27);
text("b. Mahatma Phule",670,580);
textSize(27);
text("c. Sayajirao Gaikwad",230,650);
textSize(27);
text("d. Rajarshi Shahu Maharaj",670,650);
}                      
if(select_question==112){
fill("white");
textSize(27);
text("Who founded the First Indian Women's University?",260,480);

textSize(27);
text("a. Maharshi Karve",230,580);
textSize(27);
text("b. Mahatma Phule",670,580);
textSize(27);
text("c. Rajarshi Shahu Maharaj",230,650);
textSize(27);
text("d. Sayajirao Gaikwad",670,650);
} 
if(select_question==113){
fill("white");
textSize(27);
text("Who written 'Gulamgiri' book?",260,480);

textSize(27);
text("a. Lokmanya Tilak",230,580);
textSize(27);
text("b. V. D. Savarkar",670,580);
textSize(27);
text("c. Mahatma Jyotiba Phule",230,650);
textSize(27);
text("d. Mahatma Gandhi",670,650);
}      
if(select_question==114){
fill("white");
textSize(27);
text("Who did Satyagraha to exercise the right to use the water from",260,460);
text("'Chavdar Lake' in Mahad?",260,510);

textSize(27);
text("a. Jayprakash Narayan",230,580);
textSize(27);
text("b. Swatantryaveer Savarkar",670,580);
textSize(27);
text("c. Mahatma Gandhi",230,650);
textSize(27);
text("d. Dr. Babasaheb Ambedkar",670,650);
}           
if(select_question==115){
fill("white");
textSize(27);
text("Who inspired youth for revolutionary work through the newspaper",260,460);
text("'Vande Mataram'?",260,510);

textSize(27);
text("a. Aurobindo Ghosh",230,580);
textSize(27);
text("b. Khudiram Ghosh",670,580);
textSize(27);
text("c. Rasbihari Ghosh",230,650);
textSize(27);
text("d. Bupendranath",670,650);
} 
if(select_question==116){
fill("white");
textSize(27);
text("When did Dr. Babasaheb accepted Buddhism?",260,480);

textSize(27);
text("a. 16th March 1927",230,580);
textSize(27);
text("b. 18th June 1927",670,580);
textSize(27);
text("c. 14th October 1956",230,650);
textSize(27);
text("d. 20th November 1935",670,650);
}      
if(select_question==117){
fill("white");
textSize(27);
text("Who is known as 'Architect of Indian Constitution'?",260,480);

textSize(27);
text("a. Dr. Babasaheb Ambedkar",230,580);
textSize(27);
text("b. Dr. Rajendra Prasad",670,580);
textSize(27);
text("c. Gopal Baba Velangkar",230,650);
textSize(27);
text("d. Mahatma Phule",670,650);
}      
if(select_question==118){
fill("white");
textSize(27);
text("How the Constitution of India describes India?",260,480);

textSize(27);
text("a. The Union",230,580);
textSize(27);
text("b. Legislature",670,580);
textSize(27);
text("c. The Union of States",230,650);
textSize(27);
text("d. Legislative Council",670,650);
} 
if(select_question==119){
fill("white");
textSize(27);
text("What was founded by Dr. Babasaheb Ambedkar to solve the",260,460);
text("problems of the workers and the peasants?",260,510);

textSize(27);
text("a. Independent Labour Party",230,580);
textSize(27);
text("b. Praja Parishad",670,580);
textSize(27);
text("c. Hitvardhak Sabha",230,650);
textSize(27);
text("d. Labour Party",670,650);
}       
if(select_question==120){
fill("white");
textSize(27);
text("What did Indian Constitution created?",260,480);

textSize(27);
text("a. Strong Territories",230,580);
textSize(27);
text("b. Strong Union",670,580);
textSize(27);
text("c. Strong Executive",230,650);
textSize(27);
text("d. Strong Legislature",670,650);
}            
if(select_question==121){
fill("white");
textSize(27);
text("On which of the following days, the Constituent Assembly adopted",260,460);
text("the Indian Constitution?",260,510);

textSize(27);
text("a. 26th January 1930",230,580);
textSize(27);
text("b. 26th November 1947",670,580);
textSize(27);
text("c. 26th November 1949",230,650);
textSize(27);
text("d. 26th January 1950",670,650);
}      
if(select_question==122){
fill("white");
textSize(27);
text("Where is the second 'Marathi Vishwa Sahitya Sammelan' took place?",260,480);

textSize(27);
text("a. Hong-Kong",230,580);
textSize(27);
text("b. San Francisco",670,580);
textSize(27);
text("c. Dubai",230,650);
textSize(27);
text("d. New York",670,650);
}      
if(select_question==123){
fill("white");
textSize(27);
text("Which small car was lauched by Tata?",260,480);

textSize(27);
text("a. Nano",230,580);
textSize(27);
text("b. Alto",670,580);
textSize(27);
text("c. Sumo",230,650);
textSize(27);
text("d. Primo",670,650);
} 
if(select_question==124){
fill("white");
textSize(27);
text("Who was the president of first session of 'Indian National Congress'?",260,480);

textSize(27);
text("a. Allen Octavian Hume",230,580);
textSize(27);
text("b. Surendranath Banerjee",670,580);
textSize(27);
text("c. Wyomeshchandra Banerjee",230,650);
textSize(27);
text("d. Swantantryaveer Savarkar",670,650);
}       
if(select_question==125){
fill("white");
textSize(27);
text("Who is the founder of Sikh religion?",260,480);

textSize(27);
text("a. Guru Nanak",230,580);
textSize(27);
text("b. Guru Tegbahadur",670,580);
textSize(27);
text("c. Guru Gobindsingh",230,650);
textSize(27);
text("d. Vardhaman Mahavir",670,650);
}            
if(select_question==126){
fill("white");
textSize(27);
text("Who worked for upliftment of Dalits by establishing Dalit Sangh in",260,460);
text("1906?",260,510);

textSize(27);
text("a. Mahatma Jyotiba Phule",230,580);
textSize(27);
text("b. Shahu Maharaj",670,580);
textSize(27);
text("c. Vitthal Ramji Shinde",230,650);
textSize(27);
text("d. Sayajirao Gaikwad",670,650);
}                                                        

if(select_question==-1){
fill("white");
textSize(27);
text("who is the son of Mohammad-Jahir-Ud-Din-Babur?",260,480);

textSize(27);
text("a. Akbar",230,580);
textSize(27);
text("b. Humayun",670,580);


} if(select_question==-2){
fill("white");
textSize(27);
text("who is the son of humayun?",260,480);

textSize(27);
text("a. Akbar",230,580);
textSize(27);
text("d. Birbal",670,650);

} if(select_question==-3){
fill("white");
textSize(27);
text("who is the father of Mohammad-Jahir-Ud-Din-Babur?",260,480);

textSize(27);
text("b. Humayun",670,580);
textSize(27);
text("c. Umar",230,650);
}
if(select_question==-4){
fill("white");
textSize(27);
text("River Indus is also known as",260,480);

textSize(27);
text("a. Tapi River",230,580);
textSize(27);
text("b. Sindhu River",670,580);
}
if(select_question==-5){
fill("white");
textSize(27);
text("Which state is the largest producer of wheat in India?",260,480);

textSize(27);
text("a. Uttar Pradesh",230,580);
textSize(27);
text("c. Madhya Pradesh",230,650);
}
if(select_question==-6){
fill("white");
textSize(27);
text("Which state is the largest state in India?",260,480);

textSize(27);
text("b. Maharashtra",670,580);
textSize(27);
text("d. Rajasthan",670,650);
}
if(select_question==-7){
fill("white");
textSize(27);
text("Mughal Emperor Akbar built",260,480);

textSize(27);
text("b. Fatehpur Sikri",670,580);
textSize(27);
text("c. Thanjavur",230,650);
}
if(select_question==-8){
fill("white");
textSize(27);
text("Who built the Red Fort of Delhi?",260,480);

textSize(27);
text("b. Shivaji Maharaj",670,580);
textSize(27);
text("c. Ustad Ahmed Lahouri",230,650);
}
if(select_question==-9){
fill("white");
textSize(27);
text("Who built Sanchi Stupa?",260,480);

textSize(27);
text("a. Ashoka",230,580);
textSize(27);
text("b. Bindusar",670,580);
}
if(select_question==-10){
fill("white");
textSize(27);
text("Who built Charminar?",260,480);

textSize(25);
text("a. Mohammad Quli Qutub Shah",230,580);
textSize(27);
text("c. Ala-ud-din-Khilji",230,650);
}
if(select_question==-11){
fill("white");
textSize(27);
text("What was constructed as a memorial for the Indian Soldiers who",270,470);
text("died in the First World War and the Afghan War?",270,510);

textSize(27);
text("b. Buland Darwaza",670,580);
textSize(27);
text("d. India Gate",670,650);
}
if(select_question==-12){
fill("white");
textSize(27);
text("Where did Salar Jung Museum is situated?",260,480);

textSize(27);
text("a. Delhi",230,580);
textSize(27);
text("b. Jaipur",670,580);
textSize(27);
text("c. Hyderabad",230,650);
textSize(27);
text("d. Mumbai",670,650);
}
if(select_question==-13){
fill("white");
textSize(27);
text("In which state is Bodo language is spoken?",260,480);

textSize(27);
text("b. Assam",670,580);
textSize(27);
text("d. Uttarakhand",670,650);
}
if(select_question==-14){
fill("white");
textSize(27);
text("Which language is predominantly spoken in kerala?",260,480);

textSize(27);
text("c. Kannada",230,650);
textSize(27);
text("d. Malayalam",670,650);
}
if(select_question==-15){
fill("white");
textSize(27);
text("Which language is known as the 'Italian of the East'?",260,480);

textSize(27);
text("b. Telugu",670,580);
textSize(27);
text("d. Tamil",670,650);
}
if(select_question==-16){
fill("white");
textSize(27);
text("Which is the only state which has Sanskrit as one of its official",260,470);
text("language?",260,510)

textSize(27);
text("a. Telangana",230,580);
textSize(27);
text("b. Sikkim",670,580);
textSize(27);
text("c. Karnataka",230,650);
textSize(27);
text("d. Uttarakhand",670,650);
}
if(select_question==-17){
fill("white");
textSize(27);
text("Which is the first language to be conferred the status of a Classical",260,460);
text("language?",260,510);
textSize(27);
text("a. Sanskrit",230,580);
textSize(27);
text("d. Tamil",670,650);
}
if(select_question==-18){
fill("white");
textSize(27);
text("Which is the official language of Nagaland?",260,480);

textSize(27);
text("b. English",670,580);
textSize(27);
text("d. Bodo",670,650);
}
if(select_question==-19){
fill("white");
textSize(27);
text("Which foreign language is commonly spoken in Puducherry?",260,480);

textSize(27);
text("b. German",670,580);
textSize(27);
text("c. French",230,650);
}
if(select_question==-20){
fill("white");
textSize(27);
text("Who is also known as 'Tiger of Mysore?",260,480);

textSize(27);
text("a. Hyder Ali",230,580);
textSize(27);
text("b. Tipu Sultan",670,580);
}
if(select_question==-21){
fill("white");
textSize(27);
text("Who belonged to the Haryanka Dynasty?",260,480);

textSize(27);
text("c. Bimbisara",230,650);
textSize(27);
text("d. Chandragupta Vikramaditya",670,650);
}
if(select_question==-22){
fill("white");
textSize(27);
text("The Alexander defeated which brave king?",260,480);

textSize(27);
text("a. Porus",230,580);
textSize(27);
text("d. Harshavardana",670,650);
}
if(select_question==-23){
fill("white");
textSize(27);
text("Who is the 'Napoleon' of the Indian history?",260,480);

textSize(27);
text("b. Samudragupta",670,580);
textSize(27);
text("d. Hyder Ali",670,650);
}
if(select_question==-24){
fill("white");
textSize(27);
text("Who is the Kushana King?",260,480);

textSize(27);
text("a. Ranjit Singh",230,580);
textSize(27);
text("b. Kanishka",670,580);
}
if(select_question==-25){
fill("white");
textSize(27);
text("Who is the author of 'Abhigyan Shakuntalam?",260,480);

textSize(27);
text("a. Kalidasa",230,580);
textSize(27);
text("b. Chitra Subramaniam",670,580);
}
if(select_question==-26){
fill("white");
textSize(27);
text("Who was moved by the Kalinga war?",260,480);

textSize(27);
text("a. Bimbisara",230,580);
textSize(27);
text("d. Ashoka",670,650);
}
if(select_question==-27){
fill("white");
textSize(27);
text("Who is known as the 'BSP Supremo'?",260,480);

textSize(27);
text("a. Mayamati",230,580);
textSize(27);
text("c. Meira Kumar",230,650);
}
if(select_question==-28){
fill("white");
textSize(27);
text("Who became the first woman Chief Minister of Rajasthan?",260,480);

textSize(27);
text("c. Mayamati",230,650);
textSize(27);
text("d. Vasundhara Raje",670,650);
}
if(select_question==-29){
fill("white");
textSize(27);
text("Who is the first woman Speaker of Lok Sabha?",260,480);

textSize(27);
text("b. Meira Kumar",670,580);
textSize(27);
text("c. Mamata Banerjee",230,650);
}
if(select_question==-30){
fill("white");
textSize(27);
text("Who was the Chief Minister of Delhi for fifteen consecutive years?",260,480);

textSize(27);
text("a. Mamata Banerjee",230,580);
textSize(27);
text("c. Sheila Dikshit",230,650);
}
if(select_question==-31){
fill("white");
textSize(27);
text("Who is a former of Supreme Court lawyer and the first woman",260,460);
text("Chief Minister of Delhi?",260,510)
textSize(27);
text("b. Sushma Swaraj",670,580);
textSize(27);
text("d. Meira Kumar",670,650);
}
if(select_question==-32){
fill("white");
textSize(27);
text("Where did Battle of Buxar fought?",260,480);

textSize(27);
text("a. Bihar",230,580);
textSize(27);
text("c. Telangana",230,650);
}
if(select_question==-33){
fill("white");
textSize(27);
text("Who is the one and only successful Cricket captain in world to win",260,460);
text("all international trophies?",260,510);
textSize(27);
text("a. Eoin Morgan",230,580);
textSize(27);
text("d. M.S. Dhoni",670,650);
}
if(select_question==-34){
fill("white");
textSize(27);
text("In which country cricket began?",260,480);

textSize(27);
text("c. England",230,650);
textSize(27);
text("d. Russia",670,650);
}
if(select_question==-35){
fill("white");
textSize(27);
text("Who won the World Cup 2019?",260,480);

textSize(27);
text("a. England",230,580);
textSize(27);
text("c. New Zealand",230,650);
}
if(select_question==-36){
fill("white");
textSize(27);
text("Who is the son of Hyder Ali?",260,480);

textSize(27);
text("c. Tipu Sultan",230,650);
textSize(27);
text("d. Duleep Singh",670,650);
}
if(select_question==-37){
fill("white");
textSize(27);
text("Who started 'Mooknayak' newspaper?",260,480);

textSize(27);
text("a. Rabindranath Tagore",230,580);
textSize(27);
text("c. Dr. Babasaheb Ambedkar",230,650);
}
if(select_question==-38){
fill("white");
textSize(27);
text("Who said 'That's one step for a man, a giant leap for mankind?",260,480);

textSize(27);
text("a. Napolean Bonaparte",230,580);
textSize(27);
text("d. Neil Armstrong",670,650);
}
if(select_question==-39){
fill("white");
textSize(27);
text("Which is another name of Japan?",260,480);

textSize(27);
text("a. Osaka",230,580);
textSize(27);
text("d. Nippon",670,650);
}
if(select_question==-40){
fill("white");
textSize(27);
text("Where did UN headquarters is situated?",260,480);

textSize(27);
text("a. Paris",230,580);
textSize(27);
text("b. New York",670,580);
}
if(select_question==-41){
fill("white");
textSize(27);
text("which part of the plant is used most for medicinal properties?",260,480);

textSize(27);
text("a. Leaves",230,580);
textSize(27);
text("b. Stem",670,580);
}
if(select_question==-42){
fill("white");
textSize(27);
text("Which Cricketer holds the record of highest individual run score",260,460);
text("in an ODI?",260,510);
textSize(27);
text("c. Rohit Sharma",230,650);
textSize(27);
text("d. Chris Gayle",670,650);
}
if(select_question==-43){
fill("white");
textSize(27);
text("Which planet is called 'Earth's twin'?",260,480);

textSize(27);
text("a. Venus",230,580);
textSize(27);
text("b. Neptune",670,580);
}
if(select_question==-44){
fill("white");
textSize(27);
text("In which Indian city would you find the Indira Gandhi Internaational",260,460);
text("Airport?",260,510)
textSize(27);
text("b. New Delhi",670,580);
textSize(27);
text("c. Bengaluru",230,650);
}
if(select_question==-45){
fill("white");
textSize(27);
text("How many years ago Universe was created?",260,480);

textSize(27);
text("a. 4.5 Billions years ago",230,580);
textSize(27);
text("d. 20 Billions years ago",670,650);
}
if(select_question==-46){
fill("white");
textSize(27);
text("How many years ago Earth was created?",260,480);

textSize(27);
text("a. 4.5 Billions years ago",230,580);
textSize(27);
text("d. 4 Billions years ago",670,650);
}
if(select_question==-47){
fill("white");
textSize(27);
text("Which country won maximum number of Gold medals in Summer",260,460);
text("Olympics 2016?",260,510);
textSize(27);
text("b. USA",670,580);
textSize(27);
text("c. France",230,650);
}
if(select_question==-48){
fill("white");
textSize(27);
text("Which country won Gold medal in Javalin throw in Tokyo Olympics",260,460);
text("2020?",260,510)
textSize(27);
text("a. USA",230,580);
textSize(27);
text("c. India",230,650);
}
if(select_question==-49){
fill("white");
textSize(27);
text("Who is also known as 'Prince of Martyrs'?",260,480);

textSize(27);
text("a. Bhagat Singh",230,580);
textSize(27);
text("b. Raja Rammohan Roy",670,580);
}
if(select_question==-50){
fill("white");
textSize(27);
text("In which country Industrial Revolution began?",260,480);

textSize(27);
text("a. France",230,580);
textSize(27);
text("d. England",670,650);
}
if(select_question==-51){
fill("white");
textSize(27);
text("What is the capital of Sri Lanka?",260,480);

textSize(27);
text("b. Colombo",670,580);
textSize(27);
text("d. Juba",670,650);
}
if(select_question==-52){
fill("white");
textSize(27);
text("Who is the first vice president of India?",260,480);

textSize(27);
text("a. Dr. Radhakrishnan",230,580);
textSize(27);
text("b. Jawaharlal Nehru",670,580);
}
if(select_question==-53){
fill("white");
textSize(27);
text("Who invented 'Theory of Relativity'?",260,480);

textSize(27);
text("c. Henry Fauld",230,650);
textSize(27);
text("d. Albert Einstein",670,650);
}
if(select_question==-54){
fill("white");
textSize(27);
text("Who is known as 'father of Genetics'?",260,480);

textSize(27);
text("b. Mendal",670,580);
textSize(27);
text("c. Hugo de Vries",230,650);
}
if(select_question==-55){
fill("white");
textSize(27);
text("What is the old name of Bangladesh?",260,480);

textSize(27);
text("b. Burma",670,580);
textSize(27);
text("d. East Pakistan",670,650);
}
if(select_question==-56){
fill("white");
textSize(27);
text("Which is the largest planet in the solar system?",260,480);

textSize(27);
text("b. Jupiter",670,580);
textSize(27);
text("c. Saturn",230,650);
}
if(select_question==-57){
fill("white");
textSize(27);
text("Which continent is smallest continent in the world?",260,480);

textSize(27);
text("a. Australia",230,580);
textSize(27);
text("c. Antartica",230,650);
}
if(select_question==-58){
fill("white");
textSize(27);
text("Which is the oldest religion?",260,480);

textSize(27);
text("a. Muslim",230,580);
textSize(27);
text("c. Hinduism",230,650);
}
if(select_question==-59){
fill("white");
textSize(27);
text("Who is the author of 'Hungry Stones'?",260,480);

textSize(27);
text("b. Rabindranath Tagore",670,580);
textSize(27);
text("c. Abdul Fazal",230,650);
}
if(select_question==-60){
fill("white");
textSize(27);
text("The name of the large cannon used by the Germans in the First",260,460);
text("World War?",260,510)
textSize(27);
text("a. Big Bertha",230,580);
textSize(27);
text("d. Big Bang",670,650);
}
if(select_question==-61){
fill("white");
textSize(27);
text("Which of these two countries have not signed the kyoto Climate",260,460);
text("Treaty?",260,510);
textSize(27);
text("a. China and France",230,580);
textSize(27);
text("c. USA and Australia",230,650);
}
if(select_question==-62){
fill("white");
textSize(27);
text("Where did M.S. Dhoni born?",260,480);

textSize(27);
text("b. Chennai",670,580);
textSize(27);
text("d. Ranchi",670,650);
}
if(select_question==-63){
fill("white");
textSize(27);
text("Ngwee is a coin of which country?",260,480);

textSize(27);
text("b. New Zealand",670,580);
textSize(27);
text("d. Zambia",670,650);
}
if(select_question==-64){
fill("white");
textSize(27);
text("What is a coracle?",260,480);

textSize(27);
text("a. a crow",230,580);
textSize(27);
text("b. a boat",670,580);
}
if(select_question==-65){
fill("white");
textSize(27);
text("What is the meaning of 'Civvies'?",260,480);

textSize(27);
text("a. Civilian Clothes",230,580);
textSize(27);
text("d. Civil Law",670,650);
}
if(select_question==-66){
fill("white");
textSize(27);
text("Which of these is capital of a country?",260,480);

textSize(27);
text("a. Principe",230,580);
textSize(27);
text("d. Apia",670,650);
}
if(select_question==-67){
fill("white");
textSize(27);
text("Which country's researchers were the first to clone a horse?",260,480);

textSize(27);
text("c. Italian",230,650);
textSize(27);
text("d. German",670,650);
}
if(select_question==-68){
fill("white");
textSize(27);
text("Where did Issac Newton born?",260,480);

textSize(27);
text("a. England",230,580);
textSize(27);
text("b. USA",670,580);
}
if(select_question==-69){
fill("white");
textSize(27);
text("In the year 1642, after the death of which scientist Issac Newton",260,460);
text("born?",260,510);
textSize(27);
text("a. Albert Einstein",230,580);
textSize(27);
text("c. Thomas Edison",230,650);
}
if(select_question==-70){
fill("white");
textSize(27);
text("Where did Yanam, the part of pondicherry is located?",260,480);

textSize(27);
text("a. Kerala",230,580);
textSize(27);
text("b. Tamil Nadu",670,580);
}
if(select_question==-71){
fill("white");
textSize(27);
text("Who is the author of 'The Idea of a University?",260,480);

textSize(27);
text("a. Cardinal Newman",230,580);
textSize(27);
text("d. Thomas Carlyle",670,650);
}
if(select_question==-72){
fill("white");
textSize(27);
text("The Tripitaka is the sacred text of which religion?",260,480);

textSize(27);
text("a. Buddhism",230,580);
textSize(27);
text("d. Jains",670,650);
}
if(select_question==-73){
fill("white");
textSize(27);
text("The epic poem 'The Light of Asia' is about?",260,480);

textSize(27);
text("c. the Dalai Lama",230,650);
textSize(27);
text("d. the Buddha",670,650);
}
if(select_question==-74){
fill("white");
textSize(27);
text("In which country there is no traffic light?",260,480);

textSize(27);
text("c. Bhutan",230,650);
textSize(27);
text("d. Eritrea",670,650);
}
if(select_question==-75){
fill("white");
textSize(27);
text("In which country Owen Falls, the world's greatest manmade lake is?",260,480);

textSize(27);
text("b. Canada",670,580);
textSize(27);
text("c. Uganda",230,650);
}
if(select_question==-76){
fill("white");
textSize(27);
text("Which country is the first country to adopt Christianity as its religion?",260,480);

textSize(27);
text("a. France",230,580);
textSize(27);
text("b. Armenia",670,580);
}
if(select_question==-77){
fill("white");
textSize(27);
text("Khamman is one of the districts of?",260,480);

textSize(27);
text("a. Andhra Pradesh",230,580);
textSize(27);
text("b. Uttar Pradesh",670,580);
}   
if(select_question==-78){
fill("white");
textSize(27);
text("Sound wave do not travel in?",260,480);

textSize(27);
text("c. Gases",230,650);
textSize(27);
text("d. Vaccum",670,650);
}     
if(select_question==-79){
fill("white");
textSize(27);
text("Who established 'Mitramela', a revolutionary organization in 1900 AD?",260,480);

textSize(27);
text("a. V. D. Savarkar",230,580);
textSize(27);
text("d. Damodar Chaphekar",670,650);
}      
if(select_question==-80){
fill("white");
textSize(27);
text("Who was first Indian to be awarded by Nobel Prize?",260,480);

textSize(27);
text("b. Ravindranath Tagore",670,580);
textSize(27);
text("d. Pandit Jawaharlal Nehru",670,650);
}                         
if(select_question==-81){
fill("white");
textSize(27);
text("A draft proposal of a law is known as?",260,480);

textSize(27);
text("a. Resolution",230,580);
textSize(27);
text("b. Bill",670,580);
} 
if(select_question==-82){
fill("white");
textSize(27);
text("What is the original name of Shahu Maharaj?",260,480);

textSize(27);
text("b. Yashwant Rao",670,580);
textSize(27);
text("d. Uday Singh",670,650);
}      
if(select_question==-83){
fill("white");
textSize(27);
text("Which satyagraha was organised by Sardar Vallabhbhai Patel?",260,480);

textSize(27);
text("c. Bardoli Satyagraha",230,650);
textSize(27);
text("d. Salt Satyagraha",670,650);
}           
if(select_question==-84){
fill("white");
textSize(27);
text("What was established during 1906?",260,480);

textSize(27);
text("a. Swaraj Party",230,580);
textSize(27);
text("c. Muslim League",230,650);
} 
if(select_question==-85){
fill("white");
textSize(27);
text("Who established Azad Hind Government?",260,480);

textSize(27);
text("b. Subhash Chandra Bose",670,580);
textSize(27);
text("c. Ras Bihari Bose",230,650);
}      
if(select_question==-86){
fill("white");
textSize(27);
text("Film actor Chiranjeevi mainly works in which language?",260,480);

textSize(27);
text("b. Telugu",670,580);
textSize(27);
text("d. Kannada",670,650);
}      
if(select_question==-87){
fill("white");
textSize(27);
text("Who is 12th president of India?",260,480);

textSize(27);
text("a. Ram Nath Kovind",230,580);
textSize(27);
text("c. Pratibha Patil",230,650);
} 
if(select_question==-88){
fill("white");
textSize(27);
text("Where did winter session of the Maharashtra State Legislature takes place?",260,480);

textSize(27);
text("b. Nagpur",670,580);
textSize(27);
text("c. Mumbai",230,650);
}      
if(select_question==-89){
fill("white");
textSize(27);
text("Which film is most successful in Box Office in worldwide?",260,480);

textSize(27);
text("a. Dangal",230,580);
textSize(27);
text("c. KGF Chapter 2",230,650);
}        
if(select_question==-90){
fill("white");
textSize(27);
text("Which of the following objective is not included in the Preamble",260,460);
text("of the Indian Constitution?",260,510);

textSize(27);
text("b. Liberty",670,580);
textSize(27);
text("c. Federalism",230,650);
}                          
if(select_question==-91){
fill("white");
textSize(27);
text("Who was recognised as a pioneer of social revolutionary in the",260,460);
text("social history of 20th century?",260,510)
textSize(27);
text("b. Rajaram Maharaj",670,580);
textSize(27);
text("d. Rajarshi Shahu Maharaj",670,650);
}
if(select_question==-92){
fill("white");
textSize(27);
text("Where did first civic reception in the honour of President Pratibha",260,460);
text("Patil was organised?",260,510);
textSize(27);
text("a. Amravati",230,580);
textSize(27);
text("d. Mumbai",670,650);
}
if(select_question==-93){
fill("white");
textSize(27);
text("Where did first underground railway in India was built",260,480);

textSize(27);
text("c. Delhi",230,650);
textSize(27);
text("d. Kolkata",670,650);
}
if(select_question==-94){
fill("white");
textSize(27);
text("Whome did India defeated to won Asia Cup 2007?",260,480);

textSize(27);
text("b. Japan",670,580);
textSize(27);
text("c. South Korea",230,650);
}
if(select_question==-95){
fill("white");
textSize(27);
text("Where did first session of Indian National Congress was held?",260,480);

textSize(27);
text("b. Mumbai",670,580);
textSize(27);
text("c. Pune",230,650);
}
if(select_question==-96){
fill("white");
textSize(27);
text("Who has described the revolt of 1857 as a 'First War of",260,460);
text("Independence'?",260,510);

textSize(27);
text("a. Swantantryaveer Savarkar",230,580);
textSize(27);
text("c. G. G. Agarkar",230,650);
}
if(select_question==-97){
fill("white");
textSize(27);
text("Which new technique was introduced by Gandhiji to fight against",260,460);
text("British Government?",260,510);

textSize(27);
text("a. Satyagraha",230,580);
textSize(27);
text("d. Non-cooperation",670,650);
}
if(select_question==-98){
fill("white");
textSize(27);
text("Where did 'Quit India' resolution was passed by Indian National",260,460);
text("Congress in 1942?",260,510);

textSize(27);
text("a. Calcutta",230,580);
textSize(27);
text("d. Mumbai",670,650);
}
if(select_question==-99){
fill("white");
textSize(27);
text("Who was the Draft Committee of the Constituent Assembly?",260,480);

textSize(27);
text("b. Dr. Babasaheb Ambedkar",670,580);
textSize(27);
text("d. Sardar Vallabhbhai Patel",670,650);
}
if(select_question==-100){
fill("white");
textSize(27);
text("Whose message was 'Learn, Organise and Agitate' given to",260,460);
text("Dalit Youth?",260,510);
textSize(27);
text("a. Dr. Babasaheb Ambedkar",230,580);
textSize(27);
text("b. Mahatma Phule",670,580);
}
if(select_question==-101){
fill("white");
textSize(27);
text("Which new revolutionary association was formed by Bhagat Singh,",260,480);
text("Sukhdev, Chandrashekhar Azad?",260,510);

textSize(27);
text("b. Hindustan Republic Association",670,580);
textSize(27);
text("c. Hindustan Socialist Republic Association ",230,650);
}
if(select_question==-102){
fill("white");
textSize(27);
text("When did the British Administrators had used the word",260,460);
text("'Independence' for India for the first time?",260,510);

textSize(27);
text("a. Attlee's announcement",230,580);
textSize(27);
text("b. Cabinet Mission Plan",670,580);
}
if(select_question==-103){
fill("white");
textSize(27);
text("Who said, 'Untouchability is a stigma on Society'?",260,480);

textSize(27);
text("b. Mahatma Phule",670,580);
textSize(27);
text("c. Dr. Babasaheb Ambedkar",230,650);
}
if(select_question==-104){
fill("white");
textSize(27);
text("Who was chosen as the first satyagrahi for Individual Satyagraha?",260,480);

textSize(27);
text("b. Maulana Abul Kalam Azad",670,580);
textSize(27);
text("d. Acharya Vinoba bhave",670,650);
}
if(select_question==-105){
fill("white");
textSize(27);
text("Which British Prime Minister announced Communal Award in 1932?",260,480);

textSize(27);
text("a. Winston Churchill",230,580);
textSize(27);
text("c. Ramsay MacDonald",230,650);
}
if(select_question==-106){
fill("white");
textSize(27);
text("Who was the first women educated by Mahatma Phule?",260,480);

textSize(27);
text("b. Savitribai",670,580);
textSize(27);
text("c. Ramabai",230,650);
}
if(select_question==-107){
fill("white");
textSize(27);
text("Who was very expensive player in Auction of Tata IPL 2022?",260,480);

textSize(27);
text("a. David Warner",230,580);
textSize(27);
text("b. Ishan Kishan",670,580);
}
if(select_question==-108){
fill("white");
textSize(27);
text("Who was elected as President of th Constituent Assembly?",260,480);

textSize(27);
text("a. Dr. Rajendra Prasad",230,580);
textSize(27);
text("b. Dr. Babasaheb Ambedkar",670,580);
}  
if(select_question==-109){
fill("white");
textSize(27);
text("Where did Dr. Babasaheb Ambedkar was changed his religion and",260,460);
text("became Buddhist with his disciples in October 1956?",260,510);

textSize(27);
text("a. Mumbai",230,580);
textSize(27);
text("d. Nagpur",670,650);
} 
if(select_question==-110){
fill("white");
textSize(27);
text("Who Convened the First Round Table Conference in 1930?",260,480);

textSize(27);
text("b. Lord Ripon",670,580);
textSize(27);
text("d. Ramsay MacDonald",670,650);
}      
if(select_question==-111){
fill("white");
textSize(27);
text("Who founded the Satyashodak Samaj in 1873?",260,480);

textSize(27);
text("b. Mahatma Phule",670,580);
textSize(27);
text("c. Sayajirao Gaikwad",230,650);
}                      
if(select_question==-112){
fill("white");
textSize(27);
text("Who founded the First Indian Women's University?",260,480);

textSize(27);
text("a. Maharshi Karve",230,580);
textSize(27);
text("d. Sayajirao Gaikwad",670,650);
} 
if(select_question==-113){
fill("white");
textSize(27);
text("Who written 'Gulamgiri' book?",260,480);

textSize(27);
text("a. Lokmanya Tilak",230,580);
textSize(27);
text("c. Mahatma Jyotiba Phule",230,650);
}      
if(select_question==-114){
fill("white");
textSize(27);
text("Who did Satyagraha to exercise the right to use the water from",260,460);
text("'Chavdar Lake' in Mahad?",260,510);

textSize(27);
text("b. Swatantryaveer Savarkar",670,580);
textSize(27);
text("d. Dr. Babasaheb Ambedkar",670,650);
}           
if(select_question==-115){
fill("white");
textSize(27);
text("Who inspired youth for revolutionary work through the newspaper",260,460);
text("'Vande Mataram'?",260,510);

textSize(27);
text("a. Aurobindo Ghosh",230,580);
textSize(27);
text("b. Khudiram Ghosh",670,580);
} 
if(select_question==-116){
fill("white");
textSize(27);
text("When did Dr. Babasaheb accepted Buddhism?",260,480);

textSize(27);
text("c. 14th October 1956",230,650);
textSize(27);
text("d. 20th November 1935",670,650);
}      
if(select_question==-117){
fill("white");
textSize(27);
text("Who is known as 'Architect of Indian Constitution'?",260,480);

textSize(27);
text("a. Dr. Babasaheb Ambedkar",230,580);
textSize(27);
text("b. Dr. Rajendra Prasad",670,580);
}      
if(select_question==-118){
fill("white");
textSize(27);
text("How the Constitution of India describes India?",260,480);

textSize(27);
text("a. The Union",230,580);
textSize(27);
text("c. The Union of States",230,650);
} 
if(select_question==-119){
fill("white");
textSize(27);
text("What was founded by Dr. Babasaheb Ambedkar to solve the",260,460);
text("problems of the workers and the peasants?",260,510);

textSize(27);
text("a. Independent Labour Party",230,580);
textSize(27);
text("d. Labour Party",670,650);
}      
if(select_question==-120){
fill("white");
textSize(27);
text("What did Indian Constitution created?",260,480);

textSize(27);
text("a. Strong Territories",230,580);
textSize(27);
text("b. Strong Union",670,580);
}        
if(select_question==-121){
fill("white");
textSize(27);
text("On which of the following days, the Constituent Assembly adopted",260,460);
text("the Indian Constitution?",260,510);

textSize(27);
text("b. 26th November 1947",670,580);
textSize(27);
text("c. 26th November 1949",230,650);
}      
if(select_question==-122){
fill("white");
textSize(27);
text("Where is the second 'Marathi Vishwa Sahitya Sammelan' took place?",260,480);

textSize(27);
text("a. Hong-Kong",230,580);
textSize(27);
text("c. Dubai",230,650);
}      
if(select_question==-123){
fill("white");
textSize(27);
text("Which small car was lauched by Tata?",260,480);

textSize(27);
text("a. Nano",230,580);
textSize(27);
text("c. Sumo",230,650);
} 
if(select_question==-124){
fill("white");
textSize(27);
text("Who was the president of first session of 'Indian National Congress'?",260,480);

textSize(27);
text("b. Surendranath Banerjee",670,580);
textSize(27);
text("c. Wyomeshchandra Banerjee",230,650);
}       
if(select_question==-125){
fill("white");
textSize(27);
text("Who is the founder of Sikh religion?",260,480);

textSize(27);
text("a. Guru Nanak",230,580);
textSize(27);
text("c. Guru Gobindsingh",230,650);
}            
if(select_question==-126){
fill("white");
textSize(27);
text("Who worked for upliftment of Dalits by establishing Dalit Sangh in",260,460);
text("1906?",260,510);

textSize(27);
text("b. Shahu Maharaj",670,580);
textSize(27);
text("c. Vitthal Ramji Shinde",230,650);
}                                                      
}

if(gameState1===LIFELINE2ACTIVE || gameState1===LIFELINE3ACTIVE){
  drawSprites();
}
}