module  managers{
    export class Keyboard{
        //private variables
    
        //public variables
      
        public jump: boolean;
        public enabled: boolean;
        public paused: boolean;
    
        //constructors
        constructor()
        {
            this.enabled = true;
            document.addEventListener('keydown',this.onSpacePress.bind(this),false);
            document.addEventListener('keyup',this.onSpaceRelease.bind(this),false);
         
        }
    
        //private methods
    
        //public methods
        public onSpacePress(event:KeyboardEvent):void{
            switch(event.keyCode)
            {
                
                case config.Keys.SPACE:
                this.jump = true;
                break;
        
            }
        }

        public onSpaceRelease(event:KeyboardEvent):void{
            switch(event.keyCode)
            {
                
                case config.Keys.SPACE:
                this.jump = false;
                break;
        
            }
        }
    }
}
    