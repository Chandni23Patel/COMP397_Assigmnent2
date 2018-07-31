var managers;
(function (managers) {
    var ScoreBoard = /** @class */ (function () {
        // constructors
        function ScoreBoard() {
            this.Start();
        }
        Object.defineProperty(ScoreBoard.prototype, "LivesLabel", {
            // public properties
            /**
             * This returns a reference to the LivesLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._livesLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "DogLabel", {
            /**
             * This returns a reference to the DogLabel object
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._dogLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ReindeerLabel", {
            /**
             * This returns a reference to the ReindeerLabel object
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._reindeerLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "ScoreLabel", {
            /**
             * This returns a reference to the ScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             * @memberof ScoreBoard
             */
            get: function () {
                return this._scoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScoreLabel", {
            /**
             * This returns a reference to the HighScoreLabel object
             *
             * @readonly
             * @type {objects.Label}
             */
            get: function () {
                return this._highScoreLabel;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Lives", {
            get: function () {
                return this._lives;
            },
            set: function (newValue) {
                this._lives = newValue;
                if (this._lives <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
                else {
                    this.LivesLabel.text = "Lives: " + this._lives;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "NoOfDog", {
            get: function () {
                return this._noOfDog;
            },
            set: function (newValue) {
                this._noOfDog = newValue;
                this.DogLabel.text = "Dog: " + this._noOfDog;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "NoOfReindeer", {
            get: function () {
                return this._noOfReindeer;
            },
            set: function (newValue) {
                this._noOfReindeer = newValue;
                if (this._noOfReindeer == 30) {
                    managers.Game.CurrentState = config.Scene.PLAY2;
                }
                else {
                    this.ReindeerLabel.text = "Reindeer: " + this._noOfReindeer;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "HighScore", {
            get: function () {
                return this._highScore;
            },
            set: function (newValue) {
                this._highScore = newValue;
                this.HighScoreLabel.text = "High Score: " + this._highScore;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScoreBoard.prototype, "Score", {
            get: function () {
                return this._score;
            },
            set: function (newValue) {
                this._score = newValue;
                this.ScoreLabel.text = "Score: " + this._score;
                if (this._score > this.HighScore) {
                    this.HighScore = this._score;
                }
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        // public methods
        ScoreBoard.prototype.Start = function () {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 50, 20, false);
            this._dogLabel = new objects.Label("Dog:0", "30px", "Consolas", "#FFFF00", 200, 20, false);
            this._reindeerLabel = new objects.Label("Reindeer:0", "30px", "Consolas", "#FFFF00", 500, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 700, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "35px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            this.HighScore = 0;
            this.Reset();
        };
        ScoreBoard.prototype.Reset = function () {
            this.Lives = 5;
            this.Score = 0;
            this.NoOfDog = 0;
            this.NoOfReindeer = 0;
        };
        return ScoreBoard;
    }());
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=scoreboard.js.map