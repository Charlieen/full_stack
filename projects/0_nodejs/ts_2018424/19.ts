interface Shape{
    area():number;
}

class Rect implements Shape{
    constructor(private width:number,private height:number){
        
    }
    area():number{
        return this.width * this.height;
    }
    
}

let r:Rect = new Rect(10,111);

console.log(r.area());