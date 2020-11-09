class Ground{

    constructor(x,y,width,height){

        var options ={

            isStatic:true
        }

        this.ground = Bodies.rectangle(x,y,width,height,options);
        this.w = width;
        this.h = height;
        World.add(world,this.ground);



    }

    display(){

        var groundPos = this.ground.position;

        rectMode(CENTER);
        fill("white");
        rect(groundPos.x,groundPos.display,this.w,this.h);



    }




}