namespace managers {
  export class Collision {
    public static check(
      object1: objects.GameObject,
      object2: objects.GameObject
    ): Boolean {
      let P1 = new math.Vec2(object1.x, object1.y);
      let P2 = new math.Vec2(object2.x, object2.y);

      if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
        if (!object2.isColliding) {
          object2.isColliding = true;
            switch(object2.name) {
                case "dog":
                managers.Game.ScoreBoard.NoOfDog +=1;
                managers.Game.ScoreBoard.Score += 50;  
                break;

                case "reindeer":
                managers.Game.ScoreBoard.Score += 75; 
                managers.Game.ScoreBoard.NoOfReindeer +=1;
                break;
            }
        }
      }
      else {
          object2.isColliding = false;
      }
      return object2.isColliding;
    }
  }
}
