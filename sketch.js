const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies=Matter.Bodies;


var dustbin1,paper,dustbin2,dustbin3,ground,paper,linee;


function setup(){
    var canvas =createCanvas(1200,600);

    engine=Engine.create();
    world=engine.world;

    dustbin1=new Dustbin(980,540,20,15);
    dustbin2=new Dustbin(887,455,5,160);
    dustbin3=new Dustbin(1072,455,5,160);
    dustbin4=new Dust(900,440,600,300);
    ground= new Ground(600,550,1200,15)
    paper= new Paper();
  /*  linee=createSprite(900,425,300,160);
    linee.scale=0.7
    linee.addAnimation("dustbin",lineImg);*/
  

}

function draw(){
    background(65,137,169);
  //  drawSprites();
    fill("red")
    textFont("Segoe UI Black");
    textSize(30);
    text("THROW BALL IN DUSTBIN",340,300)
    text("BY USING UP ARROW KEY",350,350);

    Engine.update(engine);
   // dustbin1.display();
    //dustbin2.display();
    //dustbin3.display();
    paper.display();
    dustbin4.display();
    ground.display();
   
    if((paper.body.position.x>910)&&paper.body.position.y>400){
      Matter.Body.setStatic(paper.body,true);
    }
 

}

function keyPressed(){
    if(keyCode===UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150})
    
    }
    

}
