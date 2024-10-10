import { Hero } from "./scripts/hero.js";
import { Input } from "./scripts/input.js";
import { World } from "./scripts/world.js";

//console.log('script');
export const TILE_SIZE = 32; // asset size 32*32 or 16*16 for example
export const COLS = 15;
export const ROWS = 20;
const GAME_WIDTH = TILE_SIZE * COLS;
const GAME_HEIGHT = TILE_SIZE * ROWS;

//Preform the code benethe after everything is loaded
window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    const world = new World();
    world.drawGrid(ctx)

    const hero = new Hero({position:{x:5, y:5}});
    hero.draw(ctx);

    const input = new Input();

})