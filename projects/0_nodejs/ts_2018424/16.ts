class Person{
    private _name:string;


    constructor(name:string){
        this._name=name;
    }

    // public getName():string{
    //     return this._name;
    // }
    // public setName(newName:string){
    //     this._name=newName;
    // }

    get name():string{
        return this._name;
    }

    set name(newName:string){
        this._name= newName;
    }

    show():void{
        console.log(this.name);
    }
}

 let p:Person = new Person('lili');

 p.name='dddddfewafearerewrewwr';
console.log(p.name);