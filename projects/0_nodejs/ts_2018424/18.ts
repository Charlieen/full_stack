// just use as parent class , can not directly use it
abstract class  Shape{
    abstract  draw(gd):void

    abstract  area():number

    abstract  pointIn(x:number,y:number):boolean
}

//---

class Rect extends Shape{

    constructor(private width:number,private height:number){
        super();
    }

    draw(gd):void{
        gd.fillRect()
    }
    area():number{
        return this.width* this.height;
    }
    pointIn():boolean{
        return true;
    }
}



class Circle extends Shape{

    constructor(private cx:number,private cy:number,private r:number){
        super();
    }

    draw(gd):void{
        gd.fillRect()
    }
    area():number{
        return this.width* this.height;
    }
    pointIn():boolean{
        return true;
    }
}

//多态： 子类都是父类 
let a:Shape;

a= new Rect(11,12);

a= new Circle(300,200,10);


