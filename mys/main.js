var config = {
    type: Phaser.AUTO,
    width: window.innerWidth, 
    height: window.innerHeight,
    parent: 'phaser-example',
    backgroundColor: '#2d2d2d',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ Scene1 , Scene2, Scene3, Scene4, Scene5, SceneWin]
};
var game = new Phaser.Game(config);

