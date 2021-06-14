class Scene5 extends Phaser.Scene {

    constructor ()
    {
        super('Scene5');
        this.x = window.innerWidth/2;
        this.y = window.innerHeight/2;

        this.posiciones = [new Position(-300,0), new Position(-100,0),new Position(100,0),new Position(300,0),new Position(-300,-200),new Position(-100,-200),new Position(100,-200),new Position(300,-200),new Position(-300,200),new Position(-100,200),new Position(100,200),new Position(300,200)];
       
        var blackpiece;
        this.board = [
            {image:'1',sprite:'sprite1Landscape'},
            {image:'2',sprite:'sprite2Landscape'},
            {image:'3',sprite:'sprite3Landscape'},
            {image:'4',sprite:'sprite4Landscape'},
            {image:'5',sprite:'sprite5Landscape'},
            {image:'6',sprite:'sprite6Landscape'},
            {image:'7',sprite:'sprite7Landscape'},
            {image:'8',sprite:'sprite8Landscape'},
            {image:'9',sprite:'black'},
            {image:'10',sprite:'sprite10Landscape'},
            {image:'11',sprite:'sprite11Landscape'},
            {image:'12',sprite:'sprite12Landscape'}
        ];    

    }

    preload ()
    {
        this.load.image('background2', 'mys/assets/background2.jpg');

        this.load.image('landscape', 'mys/assets/landscape.jpg');

        this.load.spritesheet('sprite1Landscape', 'mys/assets/1-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }  );
        
        this.load.spritesheet('sprite2Landscape', 'mys/assets/2-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );
         
        this.load.spritesheet('sprite3Landscape', 'mys/assets/3-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );
      
        this.load.spritesheet('sprite4Landscape', 'mys/assets/4-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );

        this.load.spritesheet('sprite5Landscape', 'mys/assets/5-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }  );
        
        this.load.spritesheet('sprite6Landscape', 'mys/assets/6-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );
         
        this.load.spritesheet('sprite7Landscape', 'mys/assets/7-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );
      
        this.load.spritesheet('sprite8Landscape', 'mys/assets/8-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );

        this.load.spritesheet('black', 'mys/assets/black.png',
        { frameWidth: 200, frameHeight: 200 }  );
        
        this.load.spritesheet('sprite10Landscape', 'mys/assets/10-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );
         
        this.load.spritesheet('sprite11Landscape', 'mys/assets/11-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );
      
        this.load.spritesheet('sprite12Landscape', 'mys/assets/12-landscape.jpg',
        { frameWidth: 200, frameHeight: 200 }   );

        this.load.image('backButton', 'mys/assets/backButton.png');
      
        this.load.image('smile', 'mys/assets/smile.png');
    }

    create ()
    {
        initTracking ('Scene5')

        this.checkPreviousGame(this.posiciones.length);

        this.background2 = this.add.image(this.x, this.y,'background2');
        this.background = this.add.image(this.x, this.y,'background');
        this.background.setVisible(false);

        this.myimage  = this.add.image(this.x, this.y+450,'landscape');
        this.myimage.setScale(0.5,0.5);

        var cam  = this.cameras.add(0, 0, this.x*2, this.y*2);    
        cam.setBackgroundColor('0x000000');

        this.backButton = this.add.image(this.x-300, this.y+450,'backButton'), () => this.scene.start('Scene1');
        this.backButton.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('Scene1'));

        this.piezas = [];
    
        this.createPuzzle();

        this.emojiSmile = this.add.image(this.x, this.y-250,'smile');
        this.emojiSmile.setVisible(false);

        this.title = new TextTitle(this, this.x-190, this.y-150, 'You have completed the puzzle!',
             { fontFamily: 'myFont', fontSize:30, fill: '#ffff00'});
        this.add.existing(this.title);
        this.title.visible=false;
    }

    update()
    {
        this.piezas.forEach(element => {
            if(this.canMove(element)){
                element.setMovible(true);
            }else{
                element.setMovible(false);
            }
            
        });
        if(this.checkWin()){
            setTimeout(() => {
                this.hidePuzzle();
             }, 1200); 
        }
    }

    canMove(piece) {
        
        if(piece.getPosX() == this.blackpiece.getPosX() - 200 || piece.getPosX() == this.blackpiece.getPosX() + 200 ||
            piece.getPosY() == this.blackpiece.getPosY() - 200 || piece.getPosY() == this.blackpiece.getPosY() + 200){
                if(piece.getPosX() == this.blackpiece.getPosX() || piece.getPosY() == this.blackpiece.getPosY()){
                    return true;
                }
            }
        return false;
    }

    checkWin(){
        var win = true;
        this.piezas.forEach(element => {  
            if(!element.finalPos()){
                win = false;
            }
        });
        return win;
    }

    checkPreviousGame(length){
        if(length == 0){
            this.posiciones = [new Position(-300,0), new Position(-100,0),new Position(100,0),new Position(300,0),new Position(-300,-200),
                new Position(-100,-200),new Position(100,-200),new Position(300,-200),new Position(-300,200),new Position(-100,200),new Position(100,200),new Position(300,200)];
        }
    }

    putFinalPosition(image){
        if(image == 'sprite1Landscape'){
            return new Position(-300,0);
        }else if(image == 'sprite2Landscape'){
            return new Position(-100,0);
        }else if(image == 'sprite3Landscape'){
            return new Position(100,0)
        }else if(image == 'sprite4Landscape'){
            return new Position(300,0)
        }else if(image == 'sprite5Landscape'){
            return new Position(-300,-200)
        }else if(image == 'sprite6Landscape'){
            return new Position(-100,-200)
        }else if(image == 'sprite7Landscape'){
            return new Position(100,-200)
        }else if(image == 'sprite8Landscape'){
            return new Position(300,-200)
        }else if(image == 'black'){
            return new Position(-300,200)
        }else if(image == 'sprite10Landscape'){
            return new Position(-100,200)
        }else if(image == 'sprite11Landscape'){
            return new Position(100,200)
        }else{
            return new Position(300,200)
        }
            
       
    }

    //Metodos auxiliares 
    getBlackPiece(){
        return this.blackpiece;
    }
    getBlackPieceX(){
        return this.blackpiece.getPosX();
    }

    getBlackPieceY(){
        return this.blackpiece.getPosY();
    }
    getRandomPosition(max,min) {
        return Math.round(Math.random() * (max - min) + min);
      }

    updateBlackPiece(x,y){
        this.blackpiece.setPosX(x);
        this.blackpiece.setPosY(y);
        this.board.forEach(element => {
            if(element["sprite"] == "black"){
                element = this.blackpiece;
            }
        });
    }
    
    hidePuzzle(){
        this.piezas.forEach(element => {
           element.setVisible(false);
        })
        this.myimage.setVisible(false);
        this.backButton.setVisible(false);
        this.title.visible=true;
        this.emojiSmile.setVisible(true);
        this.background.setVisible(true);
        this.background2.setVisible(false);

        this.clickButton = new TextButton(this, this.x-220, this.y-50, 'Click here to return to the menu !',
        { fontFamily: 'myFont', fontSize:30, fill: '#ffff00'}, () => this.scene.start('Scene1'),finishTracking(window.location.href, 'Puzzle 4', 6,0));
        this.add.existing(this.clickButton);
        this.clickButton.visible=true;
    }
    //Creates
    createPuzzle(){
        this.board.forEach(element => {
            var posicion = this.getRandomPosition(this.posiciones.length-1,0)
            var xpieza = this.posiciones[posicion];
            var finalPosition = this.putFinalPosition(element["sprite"]);
            var pieza = new PiecePuzzle ( this, xpieza.getX()+this.x, xpieza.getY()+this.y, element["sprite"], finalPosition.getX()+this.x, finalPosition.getY()+this.y);
            this.posiciones.splice(posicion, 1)
            this.piezas.push( pieza );
            if(element["sprite"] == "black"){
                this.blackpiece = pieza;
            }
        });

        
        this.piezas.forEach(element => {
            if(this.canMove(element)){
                element.setMovible();
            }
        });
    }
}