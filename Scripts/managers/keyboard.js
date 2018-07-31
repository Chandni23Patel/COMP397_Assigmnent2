var managers;
(function (managers) {
    var Keyboard = /** @class */ (function () {
        //constructors
        function Keyboard() {
            this.enabled = true;
            document.addEventListener('keydown', this.onSpacePress.bind(this), false);
            document.addEventListener('keyup', this.onSpaceRelease.bind(this), false);
        }
        //private methods
        //public methods
        Keyboard.prototype.onSpacePress = function (event) {
            switch (event.keyCode) {
                case config.Keys.SPACE:
                    this.jump = true;
                    break;
            }
        };
        Keyboard.prototype.onSpaceRelease = function (event) {
            switch (event.keyCode) {
                case config.Keys.SPACE:
                    this.jump = false;
                    break;
            }
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map