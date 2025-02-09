//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoard;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/playbutton.png" },
        { id: "SettingButton", src: "/Assets/images/settingbutton.png" },
        { id: "BackButton", src: "/Assets/images/backbutton.png" },
        { id: "CancelButton", src: "/Assets/images/cancelbutton.png" },
        { id: "InfoButton", src: "/Assets/images/infobutton.png" },
        { id: "ocean", src: "/Assets/images/background3.png" },
        { id: "snowman", src: "/Assets/images/man-small.png" },
        { id: "dog", src: "/Assets/images/dog-small.png" },
        { id: "reindeer", src: "/Assets/images/deer-small.png" },
        { id: "die", src: "/Assets/audio/die.wav" },
        { id: "button", src: "/Assets/audio/button.wav" },
        { id: "thunder", src: "/Assets/audio/thunder.ogg" },
        { id: "background", src: "/Assets/audio/background.mp3" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        ScoreBoard = new managers.ScoreBoard;
        managers.Game.ScoreBoard = ScoreBoard;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
            case config.Scene.LEVEL:
                CurrentScene = new scenes.Level();
                break;
            case config.Scene.SETTING:
                CurrentScene = new scenes.Setting();
                break;
            case config.Scene.INFORMATION:
                CurrentScene = new scenes.Information();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map