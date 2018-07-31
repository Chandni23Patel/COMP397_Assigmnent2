module managers {
    export class ScoreBoard {
        // private member variables
        private _lives:number;
        private _score:number;
        private _highScore:number;
        private _noOfDog:number;
        private _noOfReindeer:number;

        private _livesLabel:objects.Label;
        private _scoreLabel:objects.Label;
        private _highScoreLabel:objects.Label;
        private _dogLabel:objects.Label;
        private _reindeerLabel:objects.Label;
        // public properties

        /**
         * This returns a reference to the LivesLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get LivesLabel():objects.Label {
            return this._livesLabel;
        }

        /**
         * This returns a reference to the DogLabel object
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get DogLabel():objects.Label {
            return this._dogLabel;
        }

        /**
         * This returns a reference to the ReindeerLabel object
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get ReindeerLabel():objects.Label {
            return this._reindeerLabel;
        }

        /**
         * This returns a reference to the ScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         * @memberof ScoreBoard
         */
        get ScoreLabel():objects.Label {
            return this._scoreLabel;
        }

        /**
         * This returns a reference to the HighScoreLabel object
         *
         * @readonly
         * @type {objects.Label}
         */
        get HighScoreLabel():objects.Label {
            return this._highScoreLabel;
        }


        get Lives():number {
            return this._lives;
        }

        set Lives(newValue:number) {
            this._lives = newValue;
            if(this._lives <= 0) {
                managers.Game.CurrentState = config.Scene.END;
            }
            else {
                this.LivesLabel.text = "Lives: " + this._lives;
            }
        }

        get NoOfDog():number{
            return this._noOfDog;
        }

        set NoOfDog(newValue:number) {
            this._noOfDog = newValue;
            this.DogLabel.text = "Dog: " + this._noOfDog;
        }

        get NoOfReindeer():number{
            return this._noOfReindeer;
        }

        set NoOfReindeer(newValue:number) {
            this._noOfReindeer = newValue;
            if(this._noOfReindeer == 30) {
                managers.Game.CurrentState = config.Scene.LEVEL;
            }
            else {
            this.ReindeerLabel.text = "Reindeer: " + this._noOfReindeer;
            }
        }

        get HighScore():number {
            return this._highScore;
        }

        set HighScore(newValue:number) {
            this._highScore = newValue;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        get Score():number {
            return this._score;
        }

        set Score(newValue:number) {
            this._score = newValue;
            this.ScoreLabel.text = "Score: " + this._score;
            if(this._score > this.HighScore) {
                this.HighScore = this._score;
            }
        }

        
        // constructors
        constructor() {
            this.Start();
        }

        // private methods

        // public methods
        public Start() {
            this._livesLabel = new objects.Label("Lives: 99", "30px", "Consolas", "#FFFF00", 50, 20, false);
            this._dogLabel = new objects.Label("Dog:0", "30px", "Consolas", "#FFFF00", 200, 20, false);
            this._reindeerLabel = new objects.Label("Reindeer:0", "30px", "Consolas", "#FFFF00", 500, 20, false);
            this._scoreLabel = new objects.Label("Score: 99999", "30px", "Consolas", "#FFFF00", 700, 20, false);
            this._highScoreLabel = new objects.Label("High Score: 999999", "35px", "Consolas", "#FFFF00", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
            
            this.HighScore = 0;
            this.Reset();
        }

        public Reset() {
            this.Lives = 5;
            this.Score = 0;
            this.NoOfDog=0;
            this.NoOfReindeer=0;
        }
    }
}