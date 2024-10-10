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

    class Game{
        constructor(){
            this.world = new World();
            this.hero = new Hero({game:this, position:{x:1*TILE_SIZE , y:2* TILE_SIZE}});
            this.input = new Input();
        }
        render(ctx){
            this.hero.update();

            this.world.drawBackground(ctx); // this is the 2nd way of clearing the screen so player doesn't leave trail behind, this is drawn ontop of the old frames
            this.world.drawGrid(ctx);
            this.hero.draw(ctx);
            this.world.drawForeground(ctx);
        }
    }

    const game = new Game();

    function animate(){
        requestAnimationFrame(animate);
        //ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT); // 1 way of clearing the screen so player doesn't leave behind his movement
        game.render(ctx);
        //console.log('animating');
    }
    this.requestAnimationFrame(animate);
   







    // The Game class replaces the following code:
    //const world = new World();
    //world.drawGrid(ctx)
    //const hero = new Hero({position:{x:5, y:5}});
    //hero.draw(ctx);
    //const input = new Input();
})