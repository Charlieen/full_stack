var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function () {
        console.log("name is " + this.name + ", age is " + this.age);
    };
    return Person;
}());
var p = new Person('daniel', 8);
p.show();
