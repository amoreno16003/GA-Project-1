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

//PICTURE VARIABLES
achiliesFacingLeft = document.getElementById("AFL");

//Game Progression
let roundNum = 1;

var arrayOfBullets = [];

//CLASSES
 
class Hero{
    constructor(x, y, width, height, color, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.image = image;

        // this.render = function() {
        //     ctx.fillStyle = color;
        //     ctx.fillRect(this.x, this.y, this.width, this.height);
        // }
        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
        this.startPos = "Temp";
        this.rendered = false;
        this.index = null;
        this.health = 100;

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
        this.collision = 0;
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

function detectHit(bulletClass, EnemyClass){
    let hitTest = 
    bulletClass.y + bulletClass.height > EnemyClass.y &&
    bulletClass.y < EnemyClass.y + EnemyClass.height &&
    bulletClass.x + bulletClass.width > EnemyClass.x &&
    bulletClass.x < EnemyClass.x + EnemyClass.width;

    if (hitTest){
        alert("Enemy has been hit");
        bulletClass.collision++;
        EnemyClass.health -= 50;
        return true;
    }
}

function delay(arr, i) {
    setTimeout(() => {
      arr[i].render();
    }, 2000);
  }

//Starting Screen
document.addEventListener('keydown', movementHandler);
window.addEventListener('DOMContentLoaded', function() {
    rambo = new Hero((game.width/2)-12.75, (game.height/2)-16, 25.5, 32, 'blue', achiliesFacingLeft);
    //rambo = new Hero(achiliesFacingLeft, game.width/2, game.height/2);
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
enemyArr.push(new Enemy1(0, game.height/2-10, 20, 20, "black"));
enemyArr.push(new Enemy1(game.width-20, game.height/2-10, 20, 20, "purple"));
enemyArr.push(new Enemy1(game.width/2-10, 0, 20, 20, "yellow"));
enemyArr.push(new Enemy1(game.width/2-10, game.height-20, 20, 20, "green"));


//First Round
let startingPositions = ['Top', 'Right', 'Bottom', 'Left'];
let roundOneArr = [];
for (let i = 0; i < 5; i++){
    roundOneArr.push(new Enemy1(game.width-20, game.height/2-10, 20, 20, "purple"));
    roundOneArr[i].startPos = startingPositions[getRandomInt(0, 4)];
    roundOneArr[i].index = roundOneArr.length-1;
    if (roundOneArr[i].startPos === 'Top'){
        roundOneArr[i].x = game.width/2-10;
        roundOneArr[i].y = 0;
    }
    else if (roundOneArr[i].startPos === 'Right'){
        roundOneArr[i].x = game.width-20;
        roundOneArr[i].y = game.height/2-10;
    }
    else if (roundOneArr[i].startPos === 'Bottom'){
        roundOneArr[i].x = game.width/2-10;
        roundOneArr[i].y = game.height-20;
    }
    else if (roundOneArr[i].startPos === 'Left'){
        roundOneArr[i].x = 0;
        roundOneArr[i].y = game.height/2-10;
    }
}
console.log(roundOneArr);
//enemyArr.push(tempEnemy);

//Enemy Movement
let enemyCounter = 0;
//Game Loop

function gameLoop(){
    ctx.clearRect(0, 0, game.width, game.height);
    
// testBullet.render(); 
    if (testBullet.alive){
        //bulletUpdate(testBullet);
    }
    // setInterval(function(){
    //     enemyArr[enemyCounter].rendered = true;
    //     if (enemyCounter < enemyArr.length-1){
    //         enemyCounter++;
    //     }
        
    // }, 1000)
    
    for (let i=0; i<roundOneArr.length; i++) {
        task(i);
     }
       
     function task(i) {
       setTimeout(function() {
           // Add tasks to do
           //console.log(roundOneArr[i].startPos);
           if (roundOneArr[i] !== undefined){
                roundOneArr[i].rendered = true;
           }
       }, 2000 * i+1);
    }

    // function task2(i){
    //     setTimeout(function() {
    //         // Add tasks to do
    //         if (roundOneArr[i].startPos === 'Top'){
    //             roundOneArr[i].y += 1;
    //         }
    //         else if (roundOneArr[i].startPos === 'Right'){
    //             roundOneArr[i].x -= 1;
    //         }
    //         else if (roundOneArr[i].startPos === 'Bottom'){
    //             roundOneArr[i].y -= 1;
    //         }
    //         else if (roundOneArr[i].startPos === 'Left'){
    //             roundOneArr[i].x += 1;
    //         }
    //     }, 100);
    // }
    for (let i = 0; i < roundOneArr.length; i++){
        if (roundOneArr[i].rendered === true){
            roundOneArr[i].render();
            
        }
    }
    // if (roundOneArr[i].rendered === true){
    //     setTimeout(function() {
    //         // Add tasks to do
    //         if (roundOneArr[i].startPos === 'Top'){
    //             roundOneArr[i].y += 1;
    //         }
    //         else if (roundOneArr[i].startPos === 'Right'){
    //             roundOneArr[i].x -= 1;
    //         }
    //         else if (roundOneArr[i].startPos === 'Bottom'){
    //             roundOneArr[i].y -= 1;
    //         }
    //         else if (roundOneArr[i].startPos === 'Left'){
    //             roundOneArr[i].x += 1;
    //         }
    //     }, 100);
    // }

    
    setTimeout(function(){
        for (let i = 0; i < roundOneArr.length; i++){
            if (roundOneArr[i].rendered === true){
                if (roundOneArr[i].startPos === 'Top'){
                    roundOneArr[i].y += 1;
                }
                else if (roundOneArr[i].startPos === 'Right'){
                    roundOneArr[i].x -= 1;
                }
                else if (roundOneArr[i].startPos === 'Bottom'){
                    roundOneArr[i].y -= 1;
                }
                else if (roundOneArr[i].startPos === 'Left'){
                    roundOneArr[i].x += 1;
                }
            }
            
        }
         
        
    }, 10);
    //console.log(roundOneArr);
    for (let i = 0; i < roundOneArr.length; i++){
        if (arrayOfBullets[arrayOfBullets.length-1].collision === 0){
            detectHit(arrayOfBullets[arrayOfBullets.length-1], roundOneArr[i]);
            if (roundOneArr[i].health <= 0){
                roundOneArr.splice(i, 1);
            }
        }
    }
   
    

    rambo.render();
    

}




