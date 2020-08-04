class Dustbin{
    constructor(x,y,width,height){
        var option={
            isStatic:true

        }
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width=width;
        this.height=height;
       // this.image=loadImage("dust.png")
       this.color="black";
        World.add(world,this.body);
    }
display(){

rectMode(CENTER);
fill(this.color);
var pos=this.body.position;

rect(pos.x,pos.y,this.width,this.height);

}

}