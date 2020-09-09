var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, age, job) {
        var _this = _super.call(this, name, age) || this;
        _this.job = job;
        return _this;
    }
    Staff.prototype.show = function () {
        _super.prototype.show.call(this);
        console.log(this.name);
        console.log("work position is " + this.job);
    };
    return Staff;
}(Person));
var p = new Staff('dzg', 41, 'developer');
p.show();
