var config;
(function (config) {
    var Keys = /** @class */ (function () {
        function Keys() {
        }
        //space bar
        Keys.SPACE = 32;
        //arrow keys
        Keys.LEFT_ARROW = 37;
        Keys.RIGHT_ARRROW = 39;
        Keys.up_ARROW = 38;
        Keys.down_ARRROW = 40;
        //wasd keys
        Keys.W = 87;
        Keys.A = 65;
        Keys.S = 83;
        Keys.D = 68;
        return Keys;
    }());
    config.Keys = Keys;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map