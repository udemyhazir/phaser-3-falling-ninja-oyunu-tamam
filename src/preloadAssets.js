import WebFontFile from './webFont'

export class PreloadAssets extends Phaser.Scene {
 
     
    constructor() {
        super({
            key: 'PreloadAssets'
        });
    }
 
    preload(){
        //this.load.image('oyuncu', 'assets/player.png');
        this.load.image('platformFull', 'assets/platformFull.png');
        //this.load.image('bekci', 'assets/enemy.png');
        
        this.load.image('platform', 'assets/platform.png');
        this.load.image('platformSolUc', 'assets/leftplatformedge.png');
        this.load.image('platformSagUc', 'assets/rightplatformedge.png');


        this.load.addFile(new WebFontFile(this.load, 'Press Start 2P'))

        this.load.image('background', 'assets/background.png');

        
        this.load.spritesheet('oyuncu', 'assets/hero.png', {
            frameWidth: 96,
            frameHeight: 96
        });
        this.load.spritesheet('oyuncu_kos', 'assets/hero_run.png', {
            frameWidth: 96,
            frameHeight: 96
        });

       

        this.load.spritesheet('oyuncu_vurulma', 'assets/hero_dis.png', {
            frameWidth: 96,
            frameHeight: 96
        });

        this.load.spritesheet('bekci_kos', 'assets/enemy.png', {
            frameWidth: 36,
            frameHeight: 30
        });
        this.load.spritesheet('bekci_vurulma', 'assets/enemy_hit.png', {
            frameWidth: 36,
            frameHeight: 30
        });

        ///1
        this.load.spritesheet('testere', 'assets/saw.png', {
            frameWidth: 38,
            frameHeight: 38
        }); 


        this.load.image('back', 'assets/back.png');

        this.load.image('play', 'assets/play.png');


        this.load.audio('backgroundSound', 'assets/background_sound.wav');
        this.load.audio('jumpSound', 'assets/jump.wav');
        this.load.audio('hitSound', 'assets/hit.wav');
        this.load.audio('deadSound', 'assets/dead.wav');


        this.load.spritesheet('tavuk_kos', 'assets/chicken.png', {
            frameWidth: 32,
            frameHeight: 34
        });
        this.load.spritesheet('tavuk_vurulma', 'assets/chicken_hit.png', {
            frameWidth: 32,
            frameHeight: 34
        });

        this.load.spritesheet('mantar_kos', 'assets/mushroom.png', {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('mantar_vurulma', 'assets/mushroom_hit.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet('rino_kos', 'assets/rino.png', {
            frameWidth: 52,
            frameHeight: 34
        });
        this.load.spritesheet('rino_vurulma', 'assets/rino_hit.png', {
            frameWidth: 52,
            frameHeight: 34
        });

        this.load.spritesheet('bocek_kos', 'assets/snail.png', {
            frameWidth: 38,
            frameHeight: 24
        });
        this.load.spritesheet('bocek_vurulma', 'assets/snail_hit.png', {
            frameWidth: 38,
            frameHeight: 24
        });

        this.load.spritesheet('yarasa_kos', 'assets/bat.png', {
            frameWidth: 46,
            frameHeight: 30
        });
        this.load.spritesheet('yarasa_vurulma', 'assets/bat_hit.png', {
            frameWidth: 46,
            frameHeight: 30
        });

    }
 
    create(){
 
        
        this.scene.start('StartGame');
    }


    
}
