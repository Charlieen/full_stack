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
// just use as parent class , can not directly use it
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
//---
var Rect = /** @class */ (function (_super) {
    __extends(Rect, _super);
    function Rect(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rect.prototype.draw = function (gd) {
        gd.fillRect();
    };
    Rect.prototype.area = function () {
        return this.width * this.height;
    };
    Rect.prototype.pointIn = function () {
        return true;
    };
    return Rect;
}(Shape));
