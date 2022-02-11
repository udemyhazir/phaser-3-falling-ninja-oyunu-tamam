import { GameOptions } from './gameOptions';
import { rastgeleDegerGetir } from './utils';



export default class EnemySprite extends Phaser.Physics.Arcade.Sprite {
 
    
    constructor(scene, platform, group,karakter) {
        super(scene, platform.x, platform.y - 100,karakter);
 
        scene.add.existing(this);
 
        scene.physics.add.existing(this);

        this.scale = GameOptions.bekciScale;


        this.bekciKarakter=karakter;
 
        //if(karakter=="bekci"){
            this.body.setSize(this.displayWidth/GameOptions.bekciScale*karakter.sizeX, this.displayHeight/GameOptions.bekciScale*karakter.sizeY, true);
 
            this.body.setOffset(karakter.offsetX, karakter.offsetY);

            this.anims.play(karakter.runAnim, true);
        //}

        // if(karakter=="tavuk"){
        //     this.body.setSize(this.displayWidth/GameOptions.bekciScale*.9, this.displayHeight/GameOptions.bekciScale*.9, true);
 
        //     this.body.setOffset(4, 3);

        //     this.anims.play('tavuk_run', true);
        // }

        // if(karakter=="mantar"){
        //     this.body.setSize(this.displayWidth/GameOptions.bekciScale*.9, this.displayHeight/GameOptions.bekciScale*.5, true);
 
        //     this.body.setOffset(2, 16);

        //     this.anims.play('mantar_run', true);
        // }
        

        // if(karakter=="rino"){
        //     this.body.setSize(this.displayWidth/GameOptions.bekciScale*1.5, this.displayHeight/GameOptions.bekciScale*.9, true);
 
        //     this.body.setOffset(2, 5);

        //     this.anims.play('rino_run', true);
        // }

        // if(karakter=="bocek"){
        //     this.body.setSize(this.displayWidth/GameOptions.bekciScale*1, this.displayHeight/GameOptions.bekciScale*.6, true);
 
        //     this.body.setOffset(2, 5);

        //     this.anims.play('bocek_run', true);
        // }

        // if(karakter=="yarasa"){
        //     this.body.setSize(this.displayWidth/GameOptions.bekciScale*1.3, this.displayHeight/GameOptions.bekciScale*.6, true);
 
        //     this.body.setOffset(2, 15);

        //     this.anims.play('yarasa_run', true);
        // }

        
 
        group.add(this);
 
        this.setVelocityX(rastgeleDegerGetir(karakter.bekciDevriyeHizDizisi) * Phaser.Math.RND.sign());

        this.devriyePlatform=this; 
        
    }
 
    devriyeGez(){


        this.setFlipX(this.body.velocity.x > 0);

        let platformAlanlar = this.devriyePlatform.getBounds();
 
        let bekciAlanlar = this.getBounds();
 
        let bekciHiz = this.body.velocity.x
        
        
        if ((platformAlanlar.right +20 < bekciAlanlar.right && bekciHiz > 0) || (platformAlanlar.left - 20 > bekciAlanlar.left && bekciHiz < 0)) {
 
            // invert enemy horizontal speed
            this.setVelocityX(bekciHiz * -1);
            
        }
    }
    
}