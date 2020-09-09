class Person{
   
     constructor(private name:string,private age:number){
         
     }
 
    public show():void{
         console.log(`name is ${this.name}, age is ${this.age}`)
     }
 }

 let p= new Person('daniel',8);

 p.show();

 