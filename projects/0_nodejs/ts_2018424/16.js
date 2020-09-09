var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "name", {
        // public getName():string{
        //     return this._name;
        // }
        // public setName(newName:string){
        //     this._name=newName;
        // }
        get: function () {
            return this._name;
        },
        set: function (newName) {
            this._name = newName;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.show = function () {
        console.log(this.name);
    };
    return Person;
}());
var p = new Person('lili');
p.name = 'dddddfewafearerewrewwr';
console.log(p.name);
