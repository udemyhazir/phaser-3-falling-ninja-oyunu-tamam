
import PlatformSprite from './platformSprite';
import PlayerSprite from './playerSprite';
import { GameOptions } from './gameOptions';
import { rastgeleDegerGetir,yuvarla,rastgeleKarakterGetir } from './utils';

import EnemyGroup from './enemyGroup';
import EnemySprite from './enemySprite';


import SawGroup from './sawGroup';
import SawSprite from './sawSprite';

export class PlayGame extends Phaser.Scene {
    constructor() {
        super({ key: "PlayGame" });
    }

    
 
    
    create() {

        this.oyunGenislik = this.game.config.width;
 
        this.oyunYukseklik = this.game.config.height ;

        this.animasyonlarıOlustur();

        this.arkaPlanAyarla();

        this.puan=0;


        var config={
            volume: 1,
            loop: false
        }

        var backConfig={
            
            mute: false,
            volume: 0.2,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 1
            
        }

       
        this.jumpMusic = this.sound.add("jumpSound", config);
        this.hitMusic = this.sound.add("hitSound", config);
        this.deadMusic = this.sound.add("deadSound", config);

        this.backMusic = this.sound.add("backgroundSound", backConfig);

       
        this.backMusic.play();

        this.ekranMetni1 = this.add.text(45, 16, '', {
            color: '#001524',
            fontFamily: '"Press Start 2P"',
            fontSize: '24px'
        });

        this.ekranMetni2 = this.add.text(45, 48, '', {
            color: '#001524',
            fontFamily: '"Press Start 2P"',
            fontSize: '24px'
        });

        this.puanMetni = this.add.text(520, 16, "Puan: "+this.puan, {
            color: '#ba181b',
            fontFamily: '"Press Start 2P"',
            fontSize: '24px'
        });

        this.oyuncu = new PlayerSprite(this, this.oyunGenislik / 2, this.oyunYukseklik*GameOptions.ilkPlatformPozisyon-100, "oyuncu");

        this.oyuncu.hareketEt("dur",null)

        this.oyuncu.ilkHareket=false;
 
       
        this.platformGrup = this.physics.add.group();
        
        this.yanPlatformGrup = this.physics.add.group();
 
        
        let platform = new PlatformSprite(this, this.oyunGenislik / 2, this.oyunYukseklik * GameOptions.ilkPlatformPozisyon, "platform");

        this.yanPlatformOlustur(platform.x,platform.y,platform.displayWidth,platform.displayHeight)



        this.bekciGrup = new EnemyGroup(this.physics.world, this);

       
        this.testereGrup = new SawGroup(this.physics.world, this);

        

 
        platform.grubaEkle(this.platformGrup);

        this.platformYerlestirmeDurum=false;

        for(let i = 0; i < 10; i ++) {
 
            
            let platform = new PlatformSprite(this, 0, 0, "platform");

            
 
            platform.grubaEkle(this.platformGrup);

            this.platformYerlestir(platform)

            this.platformaBekciYerlestirme(platform);

            
            this.platformaTestereYerlestirme(platform)
            
        }

        this.platformYerlestirmeDurum=true;

        
        

        
        this.input.on("pointerdown", this.oyuncuyuHareketEttir,this);

        this.input.on("pointerup", this.oyuncuyuDurdur, this);

        this.oyuncu.on('animationcomplete', this.animTamamlandi, this);

        
    }

    animTamamlandi(animasyon)
    {
        console.log(animasyon.key);
        if(animasyon.key === 'dis')
        {
            this.deadMusic.play();
            this.scene.start("GameOver",{puan:this.puan});
        }
    }

    arkaPlanAyarla() {
 
        
        this.arkaPlanResim = this.add.tileSprite(0, 0, this.oyunGenislik / GameOptions.pixelScale, this.oyunYukseklik / GameOptions.pixelScale, 'background');

        this.arkaPlanResim.scale = GameOptions.pixelScale;
         
       
        this.arkaPlanResim.setOrigin(0, 0);
 
        
    }

   
    animasyonlarıOlustur(){
 
        
        this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers('oyuncu', {
                start: 0,
                end: 10
            }),
            frameRate: 20,
            repeat: -1
        });
 
      
        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers('oyuncu_kos', {
                start: 0,
                end: 11
            }),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "dis",
            frames: this.anims.generateFrameNumbers('oyuncu_vurulma', {
                start: 0,
                end: 5
            }),
            frameRate: 20,
            repeat:0
            
        });
 
       
        this.anims.create({
            key: "bekci_run",
            frames: this.anims.generateFrameNumbers('bekci_kos', {
                start: 0,
                end: 11
            }),
            frameRate: 20,
            repeat: -1
        });
 
       
        this.anims.create({
            key: "falling",
            frames: this.anims.generateFrameNumbers('bekci_vurulma', {
                start: 0,
                end: 2
            }),
            frameRate: 20
        });

       
        this.anims.create({
            key: "saw",
            frames: this.anims.generateFrameNumbers('testere', {
                start: 0,
                end: 7
            }),
            frameRate: 20,
            repeat: -1
        });


        this.anims.create({
            key: "tavuk_run",
            frames: this.anims.generateFrameNumbers('tavuk_kos', {
                start: 0,
                end: 13
            }),
            frameRate: 20,
            repeat: -1
        });
 
       
        this.anims.create({
            key: "tavuk_falling",
            frames: this.anims.generateFrameNumbers('tavuk_vurulma', {
                start: 0,
                end: 2
            }),
            frameRate: 20
        });

        this.anims.create({
            key: "mantar_run",
            frames: this.anims.generateFrameNumbers('mantar_kos', {
                start: 0,
                end: 15
            }),
            frameRate: 20,
            repeat: -1
        });
 
        
        this.anims.create({
            key: "mantar_falling",
            frames: this.anims.generateFrameNumbers('mantar_vurulma', {
                start: 0,
                end: 2
            }),
            frameRate: 20
        });

        this.anims.create({
            key: "rino_run",
            frames: this.anims.generateFrameNumbers('rino_kos', {
                start: 0,
                end:5
            }),
            frameRate: 20,
            repeat: -1
        });
 
        
        this.anims.create({
            key: "rino_falling",
            frames: this.anims.generateFrameNumbers('rino_vurulma', {
                start: 0,
                end: 2
            }),
            frameRate: 20
        });

        this.anims.create({
            key: "bocek_run",
            frames: this.anims.generateFrameNumbers('bocek_kos', {
                start: 0,
                end: 9
            }),
            frameRate: 20,
            repeat: -1
        });
 
      
        this.anims.create({
            key: "bocek_falling",
            frames: this.anims.generateFrameNumbers('bocek_vurulma', {
                start: 0,
                end: 2
            }),
            frameRate: 20
        });

        this.anims.create({
            key: "yarasa_run",
            frames: this.anims.generateFrameNumbers('yarasa_kos', {
                start: 0,
                end: 9
            }),
            frameRate: 20,
            repeat: -1
        });
 
        
        this.anims.create({
            key: "yarasa_falling",
            frames: this.anims.generateFrameNumbers('yarasa_vurulma', {
                start: 0,
                end: 2
            }),
            frameRate: 20
        });
    }


    

    platformaBekciYerlestirme(platform) {
 
        
        if (Math.floor(Math.random()+0.5) < GameOptions.bekciOlasilik) {

                this.bekciKarakter=rastgeleKarakterGetir(GameOptions.bekciKarakterDizisi);
             
                new EnemySprite(this, platform, this.bekciGrup,this.bekciKarakter)
            
        }
    }

    platformaTestereYerlestirme(platform) {
 
        if(platform.platformTip!=1)
        {
            if (Math.floor(Math.random()+0.5) < GameOptions.testereOlasilik) {
                
                    let testere=new SawSprite(this, platform, this.testereGrup)

                    testere.hareketPlatform=platform;
            }

            if(this.oyuncu.ilkHareket!=false){
                this.testereGrup.setVelocityY(-GameOptions.platformHiz)
            }

            
        }
    }



    enAltPlatformGetir(){
 
        
        let enAltPlatform = 0;
 
        
        let platformlar= this.platformGrup.getChildren();
 
      
        for (let platform of platformlar) {
 
           
            enAltPlatform = Math.max(enAltPlatform, platform.y);
        };
 
       
        return enAltPlatform;
    }


   

  
    platformYerlestir(platform){

        platform.y = this.enAltPlatformGetir() + rastgeleDegerGetir(GameOptions.platformDikeyMesafeDizisi);
 
        platform.x = this.oyunGenislik / 2 + rastgeleDegerGetir(GameOptions.platformDikeyMesafeDizisi) * Phaser.Math.RND.sign();

        platform.displayWidth = rastgeleDegerGetir(GameOptions.platformGenislikDizisi);

        platform.platformTip= this.platformTipOlustur();
        if(this.platformYerlestirmeDurum==false){
            this.yanPlatformOlustur(platform.x,platform.y,platform.displayWidth,platform.displayHeight)
        }else{
            this.yanPlatformOlustur(platform.x,platform.y-1.5,platform.displayWidth,platform.displayHeight)
        }
        
       

    }


    platformTipOlustur(){
        let rastgeleSayi=Phaser.Math.Between(0, 9);

        if(rastgeleSayi <=5 ){
            rastgeleSayi=0;
        }else if(rastgeleSayi <=7 ){
            rastgeleSayi=1;
        }else{
            rastgeleSayi=2;
        }

        return rastgeleSayi;

    }


    yanPlatformOlustur(x,y,genislik,yukseklik){
        let solPlatform = new PlatformSprite(this, x-genislik/2, y-yukseklik/2, "platformSolUc");
        let sagPlatform = new PlatformSprite(this, x+genislik/2, y+yukseklik/2, "platformSagUc");


        this.yanPlatformGrup.add(solPlatform);
        this.yanPlatformGrup.add(sagPlatform);

        solPlatform.body.setImmovable(true);
        solPlatform.body.setAllowGravity(false);
        solPlatform.setOrigin(0,0)

        sagPlatform.body.setImmovable(true);
        sagPlatform.body.setAllowGravity(false);
        sagPlatform.setOrigin(0,1)
  
    }

    
    oyuncuyuHareketEttir(e){
 
        let yon= e.x > this.oyunGenislik / 2 ? 1 : -1 ;

        this.oyuncu.setVelocityX(GameOptions.oyuncuHiz * yon);
        
        if(!this.oyuncu.ilkHareket) {
 
            this.oyuncu.ilkHareket = true;
 
            this.platformGrup.setVelocityY(-GameOptions.platformHiz);
            this.yanPlatformGrup.setVelocityY(-GameOptions.platformHiz);

            
            this.testereGrup.setVelocityY(-GameOptions.platformHiz);
           
        }

        this.oyuncu.hareketEt("hareket_et",yon)

       
    }


    oyuncuyuDurdur() {
 
        this.oyuncu.setVelocityX(0);
        this.oyuncu.hareketEt("dur",null)
    }


    
    carpismaAlgila(body1,body2) {


  
        let oyuncu=body1;
  
        let platform=body2;
 
        if (oyuncu.body.touching.down && platform.body.touching.up) {
            
           
            switch (platform.platformTip) {
 
                case 1:
                    if (!platform.yokOlus) {
 
                        
                        platform.yokOlus = true;
 
                        
                        this.tweens.add({
                            targets: platform,
                            alpha: 0,
                            ease: 'Bounce',  //'Cubic', 'Elastic', 'Bounce', 'Back'
                            duration: GameOptions.yokOlmaZamani,
                            callbackScope: this,
                            onComplete: function() {
 
                              
                                platform.yokOlus = false;
 
                                // reset platform opacity to 1
                                platform.alpha = 1;
 
                               
                                // recycle the platform
                                



                                let yanPlatformlar = this.yanPlatformGrup.getChildren();
 
                                for (let yanPlatform of yanPlatformlar) {


                                    if(yuvarla(yanPlatform.x)==yuvarla(platform.x-platform.displayWidth/2) && yuvarla(yanPlatform.y)==yuvarla(platform.y-platform.displayHeight/2)){

                                        yanPlatform.setVisible(false);

                                    }

                                    if(yuvarla(yanPlatform.x)==yuvarla(platform.x+platform.displayWidth/2) && yuvarla(yanPlatform.y)==yuvarla(platform.y+platform.displayHeight/2)){

                                        yanPlatform.setVisible(false);

                                    }
                                }

                                this.platformYerlestir(platform);
                                this.yanPlatformGrup.setVelocityY(-GameOptions.platformHiz);

                                this.puan+=2;
                            }
                        });
                    }
                    break;
                 
                case 2:
 
                    this.jumpMusic.play();
                    oyuncu.setVelocityY(GameOptions.ziplamaHiz * -1);
                    this.puan-=1;
                    break;
            }
        }
    }


    platformBekciCarpismaAlgila(body1,body2){
       
        let bekci=body1;
  
        let platform=body2;

        bekci.devriyePlatform=platform;
    }

    oyuncuBekciCarpismaAlgila(body1, body2){
 
        
        let oyuncu=body1;
  
        
        let bekci=body2;
 
        
        if (oyuncu.body.touching.down && bekci.body.touching.up) {
            this.hitMusic.play();
            
            //if(bekci.bekciKarakter=="bekci"){
                bekci.anims.play(bekci.bekciKarakter.fallAnim, true);
            //}

            // if(bekci.bekciKarakter=="tavuk"){
            //     bekci.anims.play('tavuk_falling', true);
            // }

            // if(bekci.bekciKarakter=="mantar"){
            //     bekci.anims.play('mantar_falling', true);
            // }

            // if(bekci.bekciKarakter=="rino"){
            //     bekci.anims.play('rino_falling', true);
            // }

            // if(bekci.bekciKarakter=="bocek"){
            //     bekci.anims.play('bocek_falling', true);
            // }

            // if(bekci.bekciKarakter=="yarasa"){
            //     bekci.anims.play('yarasa_falling', true);
            // }
            
            
           
            bekci.setFlipY(true);
            this.bekciGrup.remove(bekci);
           

            oyuncu.setVelocityY(GameOptions.ziplamaHiz * -1);

            this.puan+=bekci.bekciKarakter.puan;
        }else {

            //this.deadMusic.play();
            this.backMusic.stop();
            oyuncu.anims.play("dis", true);
            
            //this.scene.start("GameOver",{puan:this.puan});
        }
    }

    oyuncuTestereCarpismaAlgila(body1, body2){
 
            //this.deadMusic.play();
            this.backMusic.stop();
            body1.anims.play("dis", true);
            //this.scene.start("GameOver",{puan:this.puan});
    }


    update(){


        this.ekranMetni1.setText('Bekçi Sayısı:' + this.bekciGrup.countActive(true));

        this.ekranMetni2.setText('Testere Sayısı:' + this.testereGrup.countActive(true));
        this.puanMetni.setText('Puan:' + this.puan);

        this.physics.world.collide( this.oyuncu,this.platformGrup, this.carpismaAlgila,undefined,this);

        this.physics.world.collide(this.bekciGrup, this.platformGrup, this.platformBekciCarpismaAlgila, undefined, this);

        this.physics.world.collide(this.oyuncu, this.bekciGrup, this.oyuncuBekciCarpismaAlgila, undefined, this);

        this.physics.world.collide(this.oyuncu, this.testereGrup, this.oyuncuTestereCarpismaAlgila, undefined, this);
 


        let platformlar = this.platformGrup.getChildren();

        
        for (let platform of platformlar) {
 
            
            if (platform.getBounds().bottom < 0) {
 
                this.puan+=1;
                this.platformYerlestir(platform);
                this.yanPlatformGrup.setVelocityY(-GameOptions.platformHiz);
                

              
                this.platformaBekciYerlestirme(platform);
                this.platformaTestereYerlestirme(platform);

            }
        }

        


        let bekciler = this.bekciGrup.getChildren();
 
        for (let bekci of bekciler) {
 
            bekci.devriyeGez();
            if (bekci.getBounds().bottom < 0) {
 
               
                this.bekciGrup.remove(bekci);
                bekci.destroy(true);
                
                
            }
        }

        let testereler = this.testereGrup.getChildren();
 
        for (let testere of testereler) {
 
            testere.hareketBelirle();
            if (testere.getBounds().bottom < 0) {
 
               
                this.testereGrup.remove(testere);
                testere.destroy(true);

                
            }
        }

       
        if(this.oyuncu.y > this.oyunYukseklik || this.oyuncu.y < 0) {
 
            this.deadMusic.play();
            this.backMusic.stop();
            this.scene.start("GameOver",{puan:this.puan});
        }
    }
}
