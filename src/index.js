// MAIN GAME FILE
 
// modules to import
import Phaser from 'phaser';
import { PreloadAssets } from './preloadAssets';
import { PlayGame} from './playGame';
import { GameOver} from './gameOver';
import { StartGame} from './startGame';
import { GameOptions } from './gameOptions';
 
// object to initialize the Scale Manager
const scaleNesnesi= {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: 'thegame',
    width: 750,
    height: 1334
}
 
// obhect to initialize Arcade physics
const physicsNesnesi = {
    default: 'arcade',
    arcade: {
        gravity: {
            y: GameOptions.oyunYercekimi
        },
        debug:false
    }    
}
 
// game configuration object
const gameConfig = {
    type: Phaser.AUTO,
    backgroundColor:0x444444,
    scale: scaleNesnesi,
    scene: [PreloadAssets, PlayGame,GameOver,StartGame],
    physics: physicsNesnesi,
    audio: {
        disableWebAudio: true
    }
}
 
// the game itself
new Phaser.Game(gameConfig);