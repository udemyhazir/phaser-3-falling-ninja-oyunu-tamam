import { GameOptions } from './gameOptions';

export default class PlayerSprite extends Phaser.Physics.Arcade.Sprite {
 
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
 
        scene.add.existing(this);
 
        scene.physics.add.existing(this);

        
        this.body.setSize(x / GameOptions.pixelScale * 0.5, y / GameOptions.pixelScale * 0.6, false);
        
        this.body.setOffset(15, 9);

        //this.anims.play("run",true)

        
    }

    hareketEt(durum,yon) {
 
        if(durum=="hareket_et"){

            this.anims.play('run', true);
        }
        
        if(durum=="dur"){
            
            this.anims.play('idle', true);
        }

        if(yon==1){
            this.setFlipX(false);
        } 
        if(yon==-1){
            this.setFlipX(true);
        }
       
    }
}
