class Paper{

constructor(x,y){

    var option={
        isStatic:false,
        restitution:0.5,
        density:1.8,
        friction:0.5


    }
    //this.body=Matter.Bodies.circle(150,440,30,option);
    this.body=Matter.Bodies.rectangle(150, 440, 40, 70, option)
    this.width=70;
    this.height=15;
    this.image=loadImage("paper.png");
    World.add(world,this.body);
   
    

}
display(){
   imageMode(CENTER);
    //fill(this.color);
    var pos=this.body.position;
    image(this.image,pos.x,pos.y,80,70);




}


}