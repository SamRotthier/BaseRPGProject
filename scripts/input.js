export const LEFT = "LEFT";
export const RIGHT = "RIGHT";
export const UP = "UP";
export const DOWN = "DOWN";

export class Input{
    constructor(game){
        this.game = game;
        this.keys = []

        window.addEventListener('keydown', e =>{
            //console.log('Pressed ' + e.key);
            if (e.key === "ArrowUp" || e.key.toLowerCase() === "z"){
                this.keyPressed(UP);
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s"){
                this.keyPressed(DOWN);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "q"){
                this.keyPressed(LEFT);
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d"){
                this.keyPressed(RIGHT);
            }else if (e.key === "Enter" || e.key.toLowerCase() === " "){
                this.game.toggleDebug();
            }
        })
        window.addEventListener('keyup', e =>{
            //console.log('Released ' + e.key);
            if (e.key === "ArrowUp" || e.key.toLowerCase() === "z"){
                this.keyReleased(UP);
            } else if (e.key === "ArrowDown" || e.key.toLowerCase() === "s"){
                this.keyReleased(DOWN);
            } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "q"){
                this.keyReleased(LEFT);
            } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "d"){
                this.keyReleased(RIGHT);
            }
            
        })
    }

    keyPressed(key){
        if(this.keys.indexOf(key) === -1){ 
            this.keys.unshift(key)
        }
        //console.log(key, this.keys)
        //console.log(key)
    }

    keyReleased(key){
        const index = this.keys.indexOf(key);
        if (index === -1) return; //index of -1 means key not in array (check if it is in the array)
        this.keys.splice(index, 1); //remove 1 element at that index
        //console.log(key, this.keys)
    }

    get lastKey(){
        return this.keys[0];
    }
}