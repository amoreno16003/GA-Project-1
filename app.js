function getRandomInt(min, max){
    return (Math.floor(Math.random() * (max-min)+min));
}

//GLOBAL VARIABLES
var game = document.getElementById('game');
const roundNumContent = document.getElementById('roundNum');
const damageLevelContent = document.getElementById('damageLevel')

const ctx = game.getContext('2d');
console.log(game.width+" "+game.height);
let rambo; //Main Character
let health;
let money; 
let damageLevel;

//Game Progression
let roundNum = 1;

var arrayOfBullets = [];

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
class Enemy1{
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
        //this.render();
        if (this.y <= 0 || this.y >= game.height || this.x <= 0 || this.x >= game.width){
            this.alive = false;
        }
    }

    moveBulletRight(){
        this.x +=6;
        this.render();
        if (this.y <= 0 || this.y >= game.height || this.x <= 0 || this.x >= game.width){
            this.alive = false;
        }
    }
    moveBulletDown(){
        this.y += 3;
        this.render();
        if (this.y <= 0 || this.y >= game.height || this.x <= 0 || this.x >= game.width){
            this.alive = false;
        }
    }
    moveBulletLeft(){
        this.x -=6;
        this.render();
        if (this.y <= 0 || this.y >= game.height || this.x <= 0 || this.x >= game.width){
            this.alive = false;
        }
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
    rambo = new Hero((game.width/2)-5, (game.height/2)-5, 10, 7.5, 'blue');
    roundNumContent.textContent = `Round: ${roundNum}`;
    const runningGame = this.setInterval(gameLoop, 60);
    
});

///MOVEMENT HANDLER
let i = 0;
let testBullet = new Bullet(game.width/2, game.height/2, 1, 1, "yellow");
testBullet.alive = false;
arrayOfBullets.push(testBullet);
function movementHandler(event){
    
    console.log(`Movement is: ${event.key}`);
    
    if (arrayOfBullets[i].alive === false){
        i++;
        
        if (event.key === "ArrowUp"){
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 1, 3, "yellow"));
            //console.log("UP");
            //let upBullet = new Bullet(game.width/2, game.height/2, 1, 1, "yellow");
            
            let upInterval = setInterval(function() {
                // console.log(i);
                // console.log(arrayOfBullets[i].alive)
                arrayOfBullets[i].moveBulletUp();
                arrayOfBullets[i].render();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(upInterval);
                }
            }, 20);
    
        }
        else if (event.key === "ArrowRight"){
            //console.log("RIGHT")
            //testBullet.moveBulletRight();
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 5, 1, "red"));
            let rightInterval = setInterval(function() {
                // console.log(i);
                // console.log(arrayOfBullets[i].alive)
                arrayOfBullets[i].moveBulletRight();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(rightInterval);
                }
            }, 20);
        }
        else if (event.key === "ArrowDown"){
            //testBullet.moveBulletDown();
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 1, 3, "yellow"));
            let downInterval = setInterval(function() {
                // console.log(i);
                // console.log(arrayOfBullets[i].alive)
                arrayOfBullets[i].moveBulletDown();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(downInterval);
                }
            }, 20);
            //console.log("DOWN");
        }
        else if (event.key === "ArrowLeft"){
            // testBullet.moveBulletLeft();
            //console.log("LEFT");
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 5, 1, "red"));
            let leftInterval = setInterval(function() {
                // console.log(i);
                // console.log(arrayOfBullets[i].alive)
                arrayOfBullets[i].moveBulletLeft();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(leftInterval);
                }
            }, 20);
        }
    }
    //var tempBullet = new Bullet(game.width/2, game.height/2, 1, 1, "yellow");
    //arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 1, 1, "yellow"));
    //arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 1, 1, "yellow"));

    console.log(arrayOfBullets);
    
    
    //return event.key;
    
}

let tempEnemy = new Enemy1(game.width-20, game.height/2, 20, 20, "purple");
let enemyArr = [];
enemyArr.push(new Enemy1(0, game.height/2, 20, 20, "black"));
enemyArr.push(new Enemy1(game.width-20, game.height/2, 20, 20, "purple"));
//enemyArr.push(tempEnemy);

//Game Loop

function gameLoop(){
    ctx.clearRect(0, 0, game.width, game.height);
    
// testBullet.render(); 
    if (testBullet.alive){
        //bulletUpdate(testBullet);
    }
    for (let i = 0; i < enemyArr.length; i++){
        enemyArr[i].render();
        //console.log(i);
        //console.log(enemyArr[i]);
    }

    
    // setTimeout(function(){
    //      enemyArr[0].x += 1;
    //      enemyArr[1].x -= 1;
    //     
    // }, 100);

    enemyArr[0].AttackRight();
   
    

    rambo.render();
    

}

//let aBullet = setInterval( function() { bulletUpdate(testBullet); if (testBullet.alive === false) {clearInterval(aBullet)}}, 100 );





