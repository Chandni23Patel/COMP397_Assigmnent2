namespace objects {
    export class Snowman extends objects.GameObject 
    {
      
      /**
       * Creates an instance of Plane.
       * @memberof Snowman
       */
      constructor() {
        super("snowman");
          console.log(this.width+" "+this.height );
        this.Start();
      }
  
      // private methods
      private _checkBounds():void 
      {
          // check right boundary
          if(this.x > config.Screen.WIDTH - this.halfWidth ) 
          {
              this.x = config.Screen.WIDTH - this.halfWidth;
          }
  
          // check left boundary
          if(this.x < this.halfWidth) 
          {
              this.x = this.halfWidth;
          }
      }
  
      // public methods
      public Start(): void {
          this.regX = this.halfWidth;
          this.regY = this.halfHeight-200;
          this.y = 230;
      }
  
      public Update(): void {
          this.x = managers.Game.Stage.mouseX;
          this.Move();
          this._checkBounds();
      }
  
      public Reset(): void {}

      public Move():void
      {
          console.log("hey - this is working");
        if (managers.Game.keyboardManager.jump)
        {
            this.y= 130;
        }
        else 
        {
            this.y = 230;
        }
      }
    }
  }
  