class SceneWin extends Phaser.Scene {

    constructor ()
    {
        super('SceneWin');
        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;
    }

    preload ()
    {
        this.load.image('background', 'mys/assets/background.jpg');
        this.load.image('backToMenu', 'mys/assets/menuButtonn.png');
    }

    create ()
    {
        this.add.image(this.x, this.y,'background');

        this.clickButton = new TextTitle(this, this.x-190, this.y-210, 'You have completed the puzzle!',
             { fontFamily: 'myFont', fontSize:30, fill: '#ffff00'});
        this.add.existing(this.clickButton);

        this.clickButton = new TextButton(this, this.x-220, this.y-50, 'Click here to return to the menu !',
        { fontFamily: 'myFont', fontSize:30, fill: '#ffff00'}, () => this.scene.start('Scene1'));
        this.add.existing(this.clickButton);
        this.clickButton.visible=true;

        this.backToMenu = this.add.image(this.x, this.y-60,'backToMenu');
        this.backToMenu.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene1'));
        
        var cam  = this.cameras.add(0, 0, this.x*2, this.y*2);    
        cam.setBackgroundColor('0xfffffff');

        this.lights.enable();

        this.lights.addLight(300, 300, 300, 0xff0000, 1);
        this.lights.addLight(400, 300, 300, 0x00ff00, 1);
        this.lights.addLight(600, 500, 300, 0x0000ff, 1);
          
    }

}