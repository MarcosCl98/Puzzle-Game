class Scene1 extends Phaser.Scene   {

    constructor ()
    {
        super('Scene1');
        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;
    }

    preload ()
    {
        this.load.image('background', 'mys/assets/background.jpg');
        this.load.image('button1', 'mys/assets/button1.png');
        this.load.image('button2', 'mys/assets/button2.png');
        this.load.image('button3', 'mys/assets/button3.png');
        this.load.image('button4', 'mys/assets/button4.png');
        this.load.image('demcare', 'mys/assets/demcarelogo.png');
    }

    create ()
    {
        this.add.image(this.x, this.y,'background');
        var myLogo = this.add.image(this.x-270, this.y+220,'demcare');
        myLogo.setScale(0.6,0.6);
        this.clickButton = new TextTitle(this, this.x-160, this.y-210, 'Click the puzzle to Start!',
             { fontFamily: 'myFont', fontSize:30, fill: '#ffff00'});
        this.add.existing(this.clickButton);
        
        this.button1 = this.add.image(this.x, this.y-120,'button1'), () => this.scene.start('Scene2');
        this.button1.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene2'));

        this.button2 = this.add.image(this.x, this.y-40,'button2'), () => this.scene.start('Scene3');
        this.button2.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene3'));

        this.button3 = this.add.image(this.x, this.y+40,'button3'), () => this.scene.start('Scene4');
        this.button3.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene4'));

        this.button4 = this.add.image(this.x, this.y+120,'button4'), () => this.scene.start('Scene5');
        this.button4.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene5'));

        
        var cam  = this.cameras.add(0, 0, this.x*2, this.y*2);    
        cam.setBackgroundColor('0xfffffff');

        this.lights.enable();

        this.lights.addLight(300, 300, 300, 0xff0000, 1);
        this.lights.addLight(400, 300, 300, 0x00ff00, 1);
        this.lights.addLight(600, 500, 300, 0x0000ff, 1);
        
       
    }

    
}