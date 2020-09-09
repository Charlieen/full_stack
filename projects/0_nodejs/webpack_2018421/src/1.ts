class Person{
    constructor(private name:string,private age:number){

    }

    show(){
        console.log(`name is ${this.name}, age is ${this.age}`);
    }
}

let p:Person = new Person('dzg',41);
p.show();