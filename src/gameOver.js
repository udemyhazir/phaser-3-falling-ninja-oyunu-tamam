import { GameOptions } from './gameOptions';


export class GameOver extends Phaser.Scene {
    constructor() {
        super({ key: "GameOver" });
    }

    init(data){

        this.puan=data.puan;
    }


    create(){

        this.oyunGenislik = this.game.config.width;
 
        this.oyunYukseklik = this.game.config.height ;



        this.arkaPlanAyarla();

        this.back=this.physics.add.sprite(this.oyunGenislik/10*5, this.oyunYukseklik/10*3, 'back');

        this.back.body.setAllowGravity(false);

        this.back.setScale(5);

        this.puanMetni = this.add.text(this.oyunGenislik/10*2, this.oyunYukseklik/10*5,"Puanınız", {
            color: '#001524',
            fontFamily: '"Press Start 2P"',
            fontSize: '48px'
        });

        this.puanRakam= this.add.text(this.oyunGenislik/10*4, this.oyunYukseklik/10*6, +this.puan, {
            color: '#ba181b',
            fontFamily: '"Press Start 2P"',
            fontSize: '48px'
        });

        let sahne=this.scene

        this.back.setInteractive().on('pointerdown', function(){
            sahne.start("PlayGame")
        });
    }


    arkaPlanAyarla() {
 
        this.arkaPlanResim = this.add.tileSprite(0, 0, this.oyunGenislik / GameOptions.pixelScale, this.oyunYukseklik / GameOptions.pixelScale, 'background');

        this.arkaPlanResim.scale = GameOptions.pixelScale;
         
        this.arkaPlanResim.setOrigin(0, 0);
        
    }

}