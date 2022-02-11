


export function rastgeleDegerGetir(dizi){
 
    return Phaser.Math.Between(dizi[0], dizi[1]);
}


export function yuvarla(sayi){

    sayi=sayi.toFixed(2);
    return Number(sayi);
}


export function rastgeleKarakterGetir(dizi){
    let index=Phaser.Math.Between(0, dizi.length-1);

    return dizi[index];
    //return "yarasa"

}