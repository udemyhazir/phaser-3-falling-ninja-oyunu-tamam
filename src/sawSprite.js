
///4

import { GameOptions } from './gameOptions';
import { rastgeleDegerGetir } from './utils';



export default class SawSprite extends Phaser.Physics.Arcade.Sprite {
 
    
    constructor(scene, platform, group) {
        super(scene, platform.x, platform.y, 'testere');
 
        scene.add.existing(this);
 
        scene.physics.add.existing(this);

        this.scale = GameOptions.testereScale;
 
        this.body.setSize(this.displayWidth/GameOptions.testereScale*.9, this.displayHeight/GameOptions.testereScale*.8, true);
 
        
 
        group.add(this);
 
        this.setVelocityX(rastgeleDegerGetir(GameOptions.testereDevriyeHizDizisi) * Phaser.Math.RND.sign());

        this.hareketPlatform=this;

        this.anims.play('saw', true);

        this.body.setImmovable(true);
 
        // platform yerçekiminden etkilenmesin
        this.body.setAllowGravity(false);

        
        
    }
 

    ////1
    hareketBelirle(){


        //this.setFlipX(this.body.velocity.x > 0);

        let platformAlanlar = this.hareketPlatform.getBounds();
 
        let testereAlanlar = this.getBounds();
 
        let testereHiz = this.body.velocity.x
        
        
        if ((platformAlanlar.right +20 < testereAlanlar.right && testereHiz > 0) || (platformAlanlar.left -20 > testereAlanlar.left && testereHiz < 0)) {
 
            this.setVelocityX(testereHiz * -1);
            
        }
    }
    
}