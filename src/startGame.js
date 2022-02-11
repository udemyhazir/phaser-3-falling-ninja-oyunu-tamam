

import { GameOptions } from './gameOptions';


export class StartGame extends Phaser.Scene {
    constructor() {
        super({ key: "StartGame" });
    }

    create(){

        


        this.oyunGenislik = this.game.config.width;
 
        this.oyunYukseklik = this.game.config.height ;

        this.arkaPlanAyarla();


    
        
        let offset = new Phaser.Math.Vector2((this.oyunGenislik - GameOptions.cizgiGenislik) / 2, (this.oyunYukseklik - GameOptions.cizgiYukseklik) / 4);

        this.path = new Phaser.Curves.Path(offset.x + GameOptions.egimYaricap, offset.y);

        this.path.lineTo(offset.x + GameOptions.cizgiGenislik - GameOptions.egimYaricap, offset.y);
        this.path.ellipseTo(-GameOptions.egimYaricap, -GameOptions.egimYaricap, 90, 180, false, 0);
        this.path.lineTo(offset.x + GameOptions.cizgiGenislik, offset.y + GameOptions.cizgiYukseklik - GameOptions.egimYaricap);
        this.path.ellipseTo(-GameOptions.egimYaricap, -GameOptions.egimYaricap, 180, 270, false, 0);
        this.path.lineTo(offset.x + GameOptions.egimYaricap, offset.y + GameOptions.cizgiYukseklik);
        this.path.ellipseTo(-GameOptions.egimYaricap, -GameOptions.egimYaricap, 270, 0, false, 0);
        this.path.lineTo(offset.x, offset.y + GameOptions.egimYaricap);
        this.path.ellipseTo(-GameOptions.egimYaricap, -GameOptions.egimYaricap, 0, 90, false, 0);


 

        this.graphics = this.add.graphics();
        this.graphics.lineStyle(5, 0xdc2f02,0.5);
        this.path.draw(this.graphics);


        this.firmaIsim = this.add.text(offset.x+ GameOptions.egimYaricap, offset.y+ GameOptions.egimYaricap,"AOS GAME", {
            color: '#001524',
            fontFamily: '"Press Start 2P"',
            fontSize: '48px'
        });

        this.oyunIsim = this.add.text(offset.x+ GameOptions.egimYaricap, offset.y+ GameOptions.egimYaricap+100,"Falling Ninja", {
            color: '#001524',
            fontFamily: '"Press Start 2P"',
            fontSize: '30px'
        });


        this.play=this.physics.add.sprite(this.oyunGenislik/10*5, this.oyunYukseklik/10*6, 'play');

        this.tweens.add({
            targets: this.play,
            scale:{from:8,to:10},
            rotation:{from:-0.2,to:0.2},
            ease: 'Linear',  //'Cubic', 'Elastic'
            callbackScope: this,
            duration: 1500,
            repeat:-1,
            yoyo:true
        });

        this.tweens.add({
            targets: [this.graphics,this.firmaIsim,this.oyunIsim],
            alpha:0.5,
            ease: 'Linear',  //'Cubic', 'Elastic'
            callbackScope: this,
            duration: 2000,
            repeat:-1,
            yoyo:true
        });

        this.play.body.setAllowGravity(false);

        this.play.setScale(8);

        let sahne=this.scene

        this.play.setInteractive().on('pointerdown', function(){
            sahne.start("PlayGame")
        });
    }

    arkaPlanAyarla() {
 
        this.arkaPlanResim = this.add.tileSprite(0, 0, this.oyunGenislik / GameOptions.pixelScale, this.oyunYukseklik / GameOptions.pixelScale, 'background');

        this.arkaPlanResim.scale = GameOptions.pixelScale;
         
        this.arkaPlanResim.setOrigin(0, 0);
        
    }

}
