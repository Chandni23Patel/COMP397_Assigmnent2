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
    var Reindeer = /** @class */ (function (_super) {
        __extends(Reindeer, _super);
        /**
         * Creates an instance of Dog.
         * @memberof Reindeer
         */
        function Reindeer() {
            var _this = _super.call(this, "reindeer") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Reindeer.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x < this.halfWidth) {
                this.Reset();
            }
        };
        // public methods
        Reindeer.prototype.Start = function () {
            this._dogPosition = 80;
            this.x = config.Screen.WIDTH;
            this.y = config.Screen.HALF_HEIGHT + this._dogPosition;
            this._horizontalSpeed = 5;
            this.Reset();
        };
        Reindeer.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Reindeer.prototype.Reset = function () {
            this._horizontalSpeed = Math.floor((Math.random() * 4) + 2);
            this.x = config.Screen.WIDTH;
            this.y = config.Screen.HALF_HEIGHT + this._dogPosition;
        };
        return Reindeer;
    }(objects.GameObject));
    objects.Reindeer = Reindeer;
})(objects || (objects = {}));
//# sourceMappingURL=reindeer.js.map