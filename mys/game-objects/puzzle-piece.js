class PiecePuzzle extends Phaser.GameObjects.Sprite{

    constructor (scene, x, y, texture, finalPositionX, finalPositionY)
      {
        super(scene, x, y, texture);
        this.finalPositionX = finalPositionX;
        this.finalPositionY = finalPositionY;
          
        var movablePiece = false;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setInteractive().on('pointerdown', this.onClick.bind(this));
      }
  
    onClick(piece, pointer, localX, localY, event){
        if(this.movablePiece){
          this.move();
        }  
    }
  
    move(){
        var blackPosX = this.scene.getBlackPieceX();
        var blackPosY = this.scene.getBlackPieceY();
        this.scene.updateBlackPiece(this.x,this.y);
        this.x = blackPosX;
        this.y = blackPosY ;
       
    }

    finalPos(){
      if(this.x == this.finalPositionX && this.y == this.finalPositionY){
        return true;
      }
    }
    setMovible(bool)
    {
      this.movablePiece = bool;
    }
  
    getPosX(){
        return this.x;
    }

    getPosY(){
        return this.y;
    }

    setPosX(x){
      this.x = x;
    }

    setPosY(y){
        return this.y = y;
    }
    
}