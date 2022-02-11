// CONFIGURABLE GAME OPTIONS
 
export const GameOptions = {
 
    // ilk platformun yatay pozisyonu ekran yatayda 10'a bölündü 
    ilkPlatformPozisyon: 4 / 10,
 
    // oyun yerçekimi sadece oyuncu için
    oyunYercekimi: 800,

    // oyuncu hız
    oyuncuHiz: 300,
 
    // platform hız
    platformHiz: 90,
 
    // pixel olarak platform genişlik dizisi 50 ile 150 px arası olabilir
    platformGenislikDizisi: [150, 250],

    
 
    // platformun orta nokta ile mesafesi 0 ile 250 px arası olabilir
    platformYatayMesafeDizisi: [0, 250],
 
    // platformlar arası mesafe 150 ile 300 px arası olabilir
    platformDikeyMesafeDizisi: [150, 300],

    platformRenkleri: [0x0b090a, 0xae2012, 0x2d6a4f],

    ziplamaHiz: 500,

    yokOlmaZamani:1000,

    bekciOlasilik:1,

    bekciDevriyeHizDizisi: [20, 80],

    pixelScale: 3,

    bekciScale:2.5,

    platformScale:1.8,

    ///5
    testereScale:2,

    ///5
    testereDevriyeHizDizisi: [10, 30],

    testereOlasilik:1,

    cizgiGenislik: 500,
 
    cizgiYukseklik: 250,
 
    egimYaricap: 50,

    //bekciKarakterDizisi:["bekci","tavuk","mantar","rino","bocek","yarasa"]

    bekciKarakterDizisi:[
        {
            karakterId:"bekci",
            sizeX:0.9,
            sizeY:0.8,
            offsetX:4,
            offsetY:3,
            runAnim:"bekci_run",
            fallAnim:"falling",
            bekciDevriyeHizDizisi:[20,80],
            puan:2
        },
        {
            karakterId:"tavuk",
            sizeX:0.9,
            sizeY:0.9,
            offsetX:4,
            offsetY:3,
            runAnim:"tavuk_run",
            fallAnim:"tavuk_falling",
            bekciDevriyeHizDizisi:[40,90],
            puan:3
        }
        ,
        {
            karakterId:"mantar",
            sizeX:0.9,
            sizeY:0.5,
            offsetX:2,
            offsetY:16,
            runAnim:"mantar_run",
            fallAnim:"mantar_falling",
            bekciDevriyeHizDizisi:[10,40],
            puan:1
        }
        ,
        {
            karakterId:"rino",
            sizeX:1.5,
            sizeY:0.9,
            offsetX:2,
            offsetY:5,
            runAnim:"rino_run",
            fallAnim:"rino_falling",
            bekciDevriyeHizDizisi:[60,100],
            puan:3
        }
        ,
        {
            karakterId:"bocek",
            sizeX:1,
            sizeY:0.6,
            offsetX:2,
            offsetY:5,
            runAnim:"bocek_run",
            fallAnim:"bocek_falling",
            bekciDevriyeHizDizisi:[10,20],
            puan:1
        }
        ,
        {
            karakterId:"yarasa",
            sizeX:1.3,
            sizeY:0.6,
            offsetX:2,
            offsetY:15,
            runAnim:"yarasa_run",
            fallAnim:"yarasa_falling",
            bekciDevriyeHizDizisi:[30,60],
            puan:2
        }
    ]
 

}