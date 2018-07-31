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
var scenes;
(function (scenes) {
    var Level = /** @class */ (function (_super) {
        __extends(Level, _super);
        // constructors
        function Level() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // public methods
        Level.prototype.Start = function () {
            this._snowman = new objects.Snowman();
            this._ocean = new objects.Ocean();
            this._dog = new objects.Dog();
            this._reindeer = new objects.Reindeer();
            this.Main();
        };
        Level.prototype.Update = function () {
            this._snowman.Update();
            this._ocean.Update();
            this._dog.Update();
            this._reindeer.Update();
            if (managers.Collision.check(this._snowman, this._dog)) {
                console.log("collision-dog");
            }
            if (managers.Collision.check(this._snowman, this._reindeer)) {
                console.log("collision-reindeer");
            }
        };
        Level.prototype.Reset = function () {
        };
        Level.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Level.prototype.Main = function () {
            console.log("Starting - PLAY2 SCENE");
            // adding the background to the scene
            this.addChild(this._ocean);
            // adding the snowman to the scene
            this.addChild(this._snowman);
            // adding the dog to the scene
            this.addChild(this._dog);
            this.addChild(this._reindeer);
            // adding label to keep track of score
            this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            this.addChild(managers.Game.ScoreBoard.DogLabel);
            this.addChild(managers.Game.ScoreBoard.ReindeerLabel);
        };
        return Level;
    }(objects.Scene));
    scenes.Level = Level;
})(scenes || (scenes = {}));
//# sourceMappingURL=level.js.map