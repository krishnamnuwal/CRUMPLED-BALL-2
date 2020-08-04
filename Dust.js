class Dust {
constructor(x,y,width,height){
   var option={
   isStatic:true


   }
   this.body=Bodies.rectangle(x,y,width,height);
   this.width=width;
   this.height=height;
   this.image=loadImage("dustb.png");
     
}
display(){

    
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}

}