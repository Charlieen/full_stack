class Person{
   protected name:string;
   private age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    show():void{
        console.log(`name is ${this.name}, age is ${this.age}`)
    }
}

class Staff extends Person{
    private job:string;

   constructor(name:string,age:number,job:string){
        super(name,age);
        this.job= job; 
   }
   show():void{
       super.show();
       console.log(this.name);
       // console.log(this.age);
       console.log(`work position is ${this.job}`);
   }
}

let p= new Staff('dzg',41,'developer');


p.show();