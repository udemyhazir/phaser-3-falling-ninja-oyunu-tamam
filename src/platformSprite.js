import { GameOptions } from './gameOptions';

export default class PlatformSprite extends Phaser.Physics.Arcade.Sprite {
 
 
    
    // constructor
    constructor(scene, x, y, key) {
        super(scene, x, y, key);
 
        //isFadingOut= false;
        // sahneye platformu ekleme
        scene.add.existing(this);
 
        // platformu fizik bodye ekleme
        scene.physics.add.existing(this);

        this.scale = GameOptions.platformScale;
    }
 
    
    grubaEkle(group) {
 
        // platformu gruba ekle
        group.add(this);
 
        // platform çarpışmalardan etkilenmesin
        this.body.setImmovable(true);
 
        // platform yerçekiminden etkilenmesin
        this.body.setAllowGravity(false);

 
    }

   
}