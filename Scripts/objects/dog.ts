namespace objects {
  export class Dog extends objects.GameObject {
    // member variables
    private _horizontalSpeed: number;
    private _dogPosition:number;

    /**
     * Creates an instance of Dog.
     * @memberof Dog
     */
    constructor() {
      super("dog");
      this.Start();
    }

    // private methods
    private _checkBounds(): void {
      // check bottom boundary
      if (this.x < this.halfWidth) {
        this.Reset();
      }
    }

    // public methods
    public Start(): void {
      this._dogPosition = 135;
      this.x = config.Screen.WIDTH;
      this.y = config.Screen.HALF_HEIGHT+this._dogPosition;
      this._horizontalSpeed = 5;
      this.Reset();
    }

    public Update(): void {
      this.x -= this._horizontalSpeed;
      this._checkBounds();
    }

    public Reset(): void {
      this._horizontalSpeed = Math.floor((Math.random() * 4) +2); 
      this.x = config.Screen.WIDTH;
      this.y = config.Screen.HALF_HEIGHT+this._dogPosition;
    }
  }
}
