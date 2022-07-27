//GLOBAL VARIABLES
const game = document.getElementById('game');
const roundNumContent = document.getElementById('roundNum');
const damageLevelContent = document.getElementById('damageLevel')

const ctx = game.getContext('2d');

let rambo; //Main Character
let health;
let money; 
let damageLevel;

//CLASSES
 
class Hero{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;

        this.render = function() {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    
}

class Bullet{
    constructor(x, y, width, height, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.alive = true;
        this.render = function(){
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    moveBulletUp(){
        this.y -= 3;
        this.render();
    }

    moveBulletRight(){
        this.x +=3;
        this.render();
    }
    moveBulletDown(){
        this.y += 3;
        this.render();
    }
    moveBulletLeft(){
        this.x -=3;
        this.render();
    }
}

//Functions
function bulletUpdate(bullet){
    console.log(bullet.alive);
    console.log(bullet.y);
    if (bullet.alive){
            bullet.moveBulletUp();
    }
    if (bullet.y <= 0 || bullet.y >= game.height || bullet.x <= 0 || bullet.x >= game.width){
        bullet.alive = false;
    }
    bullet.render();
    
}

function stopInterval(whatToStop){
    clearInterval(whatToStop);
}
//Starting Screen
document.addEventListener('keydown', movementHandler);
window.addEventListener('DOMContentLoaded', function() {
    rambo = new Hero((game.width/2)-5, (game.height/2)-5, 10, 10, 'blue');
    
    const runningGame = this.setInterval(gameLoop, 60);
    
});

///MOVEMENT HANDLER
let testBullet = new Bullet(game.width/2, game.height/2, 1, 1, "yellow");
function movementHandler(event){
    console.log(`Movement is: ${event.key}`);
    if (event.key === "ArrowUp"){
        //console.log("UP");
        //let upBullet = new Bullet(game.width/2, game.height/2, 1, 1, "yellow");
        setInterval(function() {
            testBullet.moveBulletUp();
            if (testBullet.alive === false) {
                clearInterval(testBullet);
            }
        }, 100);

    }
    else if (event.key === "ArrowRight"){
        //console.log("RIGHT")
        //testBullet.moveBulletRight();
        setInterval(function() 
        { testBullet.moveBulletRight(); if (testBullet.alive === false) {clearInterval(testBullet)}}, 100 );;
    }
    else if (event.key === "ArrowDown"){
        //testBullet.moveBulletDown();
        setInterval( function() { testBullet.moveBulletDown(); if (testBullet.alive === false) {clearInterval(testBullet)}}, 100 );
        //console.log("DOWN");
    }
    else if (event.key === "ArrowLeft"){
        // testBullet.moveBulletLeft();
        //console.log("LEFT");
        setInterval( function() { testBullet.moveBulletLeft(); if (testBullet.alive === false) {clearInterval(testBullet)}}, 100 );
    }
    //return event.key;
}

//Game Loop

function gameLoop(){
    ctx.clearRect(0, 0, game.width, game.height);
    
// testBullet.render(); 
    if (testBullet.alive){
        //bulletUpdate(testBullet);
    }
    
    rambo.render();

}

//let aBullet = setInterval( function() { bulletUpdate(testBullet); if (testBullet.alive === false) {clearInterval(aBullet)}}, 100 );






