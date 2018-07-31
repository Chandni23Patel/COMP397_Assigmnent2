var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Snowman = /** @class */ (function (_super) {
        __extends(Snowman, _super);
        /**
         * Creates an instance of Plane.
         * @memberof Snowman
         */
        function Snowman() {
            var _this = _super.call(this, "snowman") || this;
            console.log(_this.width + " " + _this.height);
            _this.Start();
            return _this;
        }
        // private methods
        Snowman.prototype._checkBounds = function () {
            // check right boundary
            if (this.x > config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Snowman.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight - 200;
            this.y = 230;
        };
        Snowman.prototype.Update = function () {
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Snowman.prototype.Reset = function () { };
        Snowman.prototype.Move = function () {
            if (managers.Game.keyboardManager.jump) {
                this.y = 270;
            }
            else {
                this.y = 370;
            }
        };
        return Snowman;
    }(objects.GameObject));
    objects.Snowman = Snowman;
})(objects || (objects = {}));
//# sourceMappingURL=snowman.js.map