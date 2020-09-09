var Rect = /** @class */ (function () {
    function Rect(width, height) {
        this.width = width;
        this.height = height;
    }
    Rect.prototype.area = function () {
        return this.width * this.height;
    };
    return Rect;
}());
var r = new Rect(10, 111);
console.log(r.area());
