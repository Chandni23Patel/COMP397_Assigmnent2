module scenes {
    export class Play extends objects.Scene 
    {
        // member variables
    
        private _snowman:objects.Snowman;
        private _ocean:objects.Ocean;
        private _reindeer:objects.Reindeer;
        private _dog1:objects.Dog;
        
        public engineSound:createjs.AbstractSoundInstance;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // public methods
        public Start():void
        {
            //this.engineSound = createjs.Sound.play("background");
            //this.engineSound.loop = -1;
            //this.engineSound.volume = 0.1;

            this._snowman = new objects.Snowman();
            this._ocean = new objects.Ocean();
            this._dog1 = new objects.Dog();
            this._reindeer = new objects.Reindeer();
           
            this.Main();
        }

        public Update():void {
            
            this._snowman.Update();
            this._ocean.Update();
            this._dog1.Update();
            this._reindeer.Update();
           
            if(managers.Collision.check(this._snowman,this._dog1))
            {
                console.log("collision-dog");
            }

            if(managers.Collision.check(this._snowman, this._reindeer))
            {
                console.log("collision-reindeer");
            }
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the background to the scene
            this.addChild(this._ocean);
            
            // adding the snowman to the scene
            this.addChild(this._snowman);

            // adding the dog to the scene
            //this.addChild(this._dog);
            //this.addChild(this._dog1);

            this.addChild(this._reindeer);

            // adding label to keep track of score
            //this.addChild(managers.Game.ScoreBoard.LivesLabel);
            this.addChild(managers.Game.ScoreBoard.ScoreLabel);
            //this.addChild(managers.Game.ScoreBoard.DogLabel);
            this.addChild(managers.Game.ScoreBoard.ReindeerLabel);
        }
    }
}