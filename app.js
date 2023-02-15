function getRandomInt(min, max){
    return (Math.floor(Math.random() * (max-min)+min));
}

function on() {
    document.getElementById("startScreen").style.display = "block";
  }
  
function off() {
    document.getElementById("startScreen").style.display = "none";
    gamePaused = false;
}


//GLOBAL VARIABLES
var game = document.getElementById('game');
const roundNumContent = document.getElementById('roundNum');
const damageLevelContent = document.getElementById('damageLevel')
const killCount = document.getElementById('kill-count');
const healthLevelContent = document.getElementById('healthLevel');
const ctx = game.getContext('2d');
const startButton = document.getElementById('start-button');
const buyScreen = document.getElementById('buy-screen');
console.log(game.width+" "+game.height);

let rambo; //Main Character
let health = 100;
let money; 
let damageLevel;
let totalKills = 0;

//PICTURE VARIABLES
achiliesFacingLeft = document.getElementById("AFL");
Enemy1Right1 = document.getElementById("Enemy1Right1");

//mages

//back frames
MageBackFrame1 = document.getElementById("MageBackFrame1");
MageBackFrame2 = document.getElementById("MageBackFrame2");
MageBackFrame3 = document.getElementById("MageBackFrame3");
MageBackFrame4 = document.getElementById("MageBackFrame4");
let MageBackFramesArr = [MageBackFrame1, MageBackFrame2, MageBackFrame3, MageBackFrame4]
//front frames
MageFrontFrame1 = document.getElementById("MageFrontFrame1");
MageFrontFrame2 = document.getElementById("MageFrontFrame2");
MageFrontFrame3 = document.getElementById("MageFrontFrame3");
MageFrontFrame4 = document.getElementById("MageFrontFrame4");
let MageFrontFramesArr = [MageFrontFrame1, MageFrontFrame2, MageFrontFrame3, MageFrontFrame4];
//left frames
MageLeftFrame1 = document.getElementById("MageLeftFrame1");
MageLeftFrame2 = document.getElementById("MageLeftFrame2");
MageLeftFrame3 = document.getElementById("MageLeftFrame3");
MageLeftFrame4 = document.getElementById("MageLeftFrame4");
let MageLeftFramesArr = [MageLeftFrame1, MageLeftFrame2, MageLeftFrame3, MageLeftFrame4]
//right frames
MageRightFrame1 = document.getElementById("MageRightFrame1");
MageRightFrame1 = document.getElementById("MageRightFrame2");
MageRightFrame1 = document.getElementById("MageRightFrame3");
MageRightFrame1 = document.getElementById("MageRightFrame4");
let MageRightFramesArr = [MageRightFrame1, MageRightFrame2, MageRightFrame3, MageRightFrame4]


//zombies

//backframes
ZombieBackFrame1 = document.getElementById("ZombieBackFrame1");
ZombieBackFrame2 = document.getElementById("ZombieBackFrame2");
ZombieBackFrame3 = document.getElementById("ZombieBackFrame3");
ZombieBackFrame4 = document.getElementById("ZombieBackFrame4");
ZombieBackFrame5 = document.getElementById("ZombieBackFrame5");
ZombieBackFrame6 = document.getElementById("ZombieBackFrame6");
ZombieBackFrame7 = document.getElementById("ZombieBackFrame7");
ZombieBackFrame8 = document.getElementById("ZombieBackFrame8");
let ZombieBackFramesArr = [ZombieBackFrame1, ZombieBackFrame2, ZombieBackFrame3, ZombieBackFrame4, ZombieBackFrame5, ZombieBackFrame6, ZombieBackFrame7, ZombieBackFrame8];

//front frames
ZombieFrontFrame1 = document.getElementById("ZombieFrontFrame1");
ZombieFrontFrame2 = document.getElementById("ZombieFrontFrame2");
ZombieFrontFrame3 = document.getElementById("ZombieFrontFrame3");
ZombieFrontFrame4 = document.getElementById("ZombieFrontFrame4");
ZombieFrontFrame5 = document.getElementById("ZombieFrontFrame5");
ZombieFrontFrame6 = document.getElementById("ZombieFrontFrame6");
ZombieFrontFrame7 = document.getElementById("ZombieFrontFrame7");
ZombieFrontFrame8 = document.getElementById("ZombieFrontFrame8");
let ZombieFrontFramesArr = [ZombieFrontFrame1, ZombieFrontFrame2, ZombieFrontFrame3, ZombieFrontFrame4, ZombieFrontFrame5, ZombieFrontFrame6, ZombieFrontFrame7, ZombieFrontFrame8];
//left frames
ZombieLeftFrame1 = document.getElementById("ZombieLeftFrame1");
ZombieLeftFrame2 = document.getElementById("ZombieLeftFrame2");
ZombieLeftFrame3 = document.getElementById("ZombieLeftFrame3");
ZombieLeftFrame4 = document.getElementById("ZombieLeftFrame4");
ZombieLeftFrame5 = document.getElementById("ZombieLeftFrame5");
ZombieLeftFrame6 = document.getElementById("ZombieLeftFrame6");
ZombieLeftFrame7 = document.getElementById("ZombieLeftFrame7");
ZombieLeftFrame8 = document.getElementById("ZombieLeftFrame8");
let ZombieLeftFramesArr = [ZombieLeftFrame1, ZombieLeftFrame2, ZombieLeftFrame3, ZombieLeftFrame4, ZombieLeftFrame5, ZombieLeftFrame6, ZombieLeftFrame7, ZombieLeftFrame8];
//right frames
ZombieRightFrame1 = document.getElementById("ZombieRightFrame1");
ZombieRightFrame2 = document.getElementById("ZombieRightFrame2");
ZombieRightFrame3 = document.getElementById("ZombieRightFrame3");
ZombieRightFrame4 = document.getElementById("ZombieRightFrame4");
ZombieRightFrame5 = document.getElementById("ZombieRightFrame5");
ZombieRightFrame6 = document.getElementById("ZombieRightFrame6");
ZombieRightFrame7 = document.getElementById("ZombieRightFrame7");
ZombieRightFrame8 = document.getElementById("ZombieRightFrame8");
let ZombieRightFramesArr = [ZombieRightFrame1, ZombieRightFrame2, ZombieRightFrame3, ZombieRightFrame4, ZombieRightFrame5, ZombieRightFrame6, ZombieRightFrame7, ZombieRightFrame8];

//right frames hit

HitZombieRightFrame2 = document.getElementById("HitZombieRightFrame2");
HitZombieRightFrame3 = document.getElementById("HitZombieRightFrame3");
HitZombieRightFrame4 = document.getElementById("HitZombieRightFrame4");
HitZombieRightFrame5 = document.getElementById("HitZombieRightFrame5");
HitZombieRightFrame6 = document.getElementById("HitZombieRightFrame6");
let HitZombieRightFramesArr = [ZombieRightFrame1, HitZombieRightFrame2, HitZombieRightFrame3, HitZombieRightFrame4, HitZombieRightFrame5, HitZombieRightFrame6];

//front frames hit
HitZombieFrontFrame2 = document.getElementById("HitZombieFrontFrame2");
HitZombieFrontFrame3 = document.getElementById("HitZombieFrontFrame3");
HitZombieFrontFrame4 = document.getElementById("HitZombieFrontFrame4");
HitZombieFrontFrame5 = document.getElementById("HitZombieFrontFrame5");
HitZombieFrontFrame6 = document.getElementById("HitZombieFrontFrame6");
let HitZombieTopFramesArr = [ZombieFrontFrame1, HitZombieFrontFrame2, HitZombieFrontFrame3, HitZombieFrontFrame4, HitZombieFrontFrame5, HitZombieFrontFrame6];

//left frames hit
HitZombieLeftFrame2 = document.getElementById("HitZombieLeftFrame2");
HitZombieLeftFrame3 = document.getElementById("HitZombieLeftFrame3");
HitZombieLeftFrame4 = document.getElementById("HitZombieLeftFrame4");
HitZombieLeftFrame5 = document.getElementById("HitZombieLeftFrame5");
HitZombieLeftFrame6 = document.getElementById("HitZombieLeftFrame6");
let HitZombieLeftFramesArr = [ZombieLeftFrame1, HitZombieLeftFrame2, HitZombieLeftFrame3, HitZombieLeftFrame4, HitZombieLeftFrame5, HitZombieLeftFrame6];

//back frames hit
HitZombieBackFrame2 = document.getElementById("HitZombieBackFrame2");
HitZombieBackFrame3 = document.getElementById("HitZombieBackFrame3");
HitZombieBackFrame4 = document.getElementById("HitZombieBackFrame4");
HitZombieBackFrame5 = document.getElementById("HitZombieBackFrame5");
HitZombieBackFrame6 = document.getElementById("HitZombieBackFrame6");
let HitZombieBottomFramesArr = [ZombieBackFrame1, HitZombieBackFrame2, HitZombieBackFrame3, HitZombieBackFrame4, HitZombieBackFrame5, HitZombieBackFrame6];


//Game Progression
let roundNum = 1;
var arrayOfBullets = [];
let gamePaused = true;

//CLASSES
 
class Hero{
    constructor(x, y, width, height, color, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.image = image;

        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}
class Enemy1{
    constructor(x, y, width, height, color, image){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.startPos = "Temp";
        this.rendered = false;
        this.health = 100;
        this.image = image;
        this.hitting = false;
        // this.render = function() {
        //     ctx.fillStyle = color;
        //     ctx.fillRect(this.x, this.y, this.width, this.height);
        // }
        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
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
        //alert("Enemy has been hit");
        bulletClass.collision++;
        EnemyClass.health -= 50;
        return true;
    }

}

function WalkAnimation(enemy, rightArr, leftArr, topArr, bottomArr, walkFrameCounter, hitFrameCounter){
    if (enemy.startPos === "Left"){
        if (enemy.hitting === false){
            enemy.image = rightArr[walkFrameCounter];
        }
        else if (enemy.hitting === true){
            enemy.image = HitZombieRightFramesArr[hitCounter];
        }
    }
    else if (enemy.startPos === "Right"){
        if (enemy.hitting === false){
            enemy.image = ZombieLeftFramesArr[walkFrameCounter];
        }
        else if (enemy.hitting === true){
            enemy.image = HitZombieLeftFramesArr[hitFrameCounter];
        }
    }
    else if (enemy.startPos === "Top"){
        
        if (enemy.hitting === false){
            enemy.image = topArr[walkFrameCounter];
        }
        else if (enemy.hitting === true){
            enemy.image = HitZombieTopFramesArr[hitFrameCounter];
        }
    }
    else if (enemy.startPos === "Bottom"){
        if (enemy.hitting === false){
            enemy.image = bottomArr[walkFrameCounter];
        }
        else if (enemy.hitting === true){
            enemy.image = HitZombieBottomFramesArr[hitFrameCounter];
        }
    }
}

function BuyScreen(){

    ctx.clearRect(0, 0, game.width, game.height);
    // getElementById('game').style.display = none;
    //buyScreen.style.display = 'block';
    //getElementById('game').style.display = 'block';
    document.getElementById('buy-screen').style.display = 'block';
    document.getElementById('game').style.display = 'none';
    gamePaused = true;
}

function GettingHit(){

}

function delay(arr, i) {
    setTimeout(() => {
      arr[i].render();
    }, 2000);
  }



//Starting Screen
document.addEventListener('keydown', movementHandler);
window.addEventListener('DOMContentLoaded', function() {
    rambo = new Hero((game.width/2)-16, (game.height/2)-13.25, 32, 26.5, 'blue', MageFrontFrame1); //32 53
    const runningGame = this.setInterval(function() {
        if (gamePaused !== true){
            gameLoop2();
        } 
    }, 60);
    
    
});

///MOVEMENT HANDLER
let i = 0;
let attackSequenceFrameCounter = 1;
let testBullet = new Bullet(game.width/2, game.height/2, 1, 1, "yellow");
testBullet.alive = false;
arrayOfBullets.push(testBullet);
function movementHandler(event){
    
    console.log(`Movement is: ${event.key}`);
    
    if (arrayOfBullets[i].alive === false){
        i++;
        
        if (event.key === "ArrowUp"){
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 1, 3, "yellow"));
            rambo.image = MageBackFrame1;
            let frontAttackSequence = setInterval(function() {
                rambo.image = MageBackFramesArr[attackSequenceFrameCounter];
                //console.log(attackSequenceFrameCounter);
                rambo.render();
                attackSequenceFrameCounter++;
                if (attackSequenceFrameCounter >= 4){
                    rambo.image = MageBackFrame1;
                    attackSequenceFrameCounter = 1;
                    clearInterval(frontAttackSequence);
                }
            }, 75)
            let upInterval = setInterval(function() {
                arrayOfBullets[i].moveBulletUp();
                arrayOfBullets[i].render();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(upInterval);
                }
            }, 20);
    
        }

        else if (event.key === "ArrowRight"){
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 5, 1, "red"));
            rambo.image = MageRightFrame1;
            let frontAttackSequence = setInterval(function() {
                rambo.image = MageRightFramesArr[attackSequenceFrameCounter];
                //console.log(attackSequenceFrameCounter);
                rambo.render();
                attackSequenceFrameCounter++;
                if (attackSequenceFrameCounter >= 4){
                    rambo.image = MageRightFrame1;
                    attackSequenceFrameCounter = 1;
                    clearInterval(frontAttackSequence);
                }
            }, 75)
            let rightInterval = setInterval(function() {
                arrayOfBullets[i].moveBulletRight();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(rightInterval);
                }
            }, 20);
        }

        else if (event.key === "ArrowDown"){
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 1, 3, "yellow"));
            //rambo.image = MageFrontFrame1;
            let frontAttackSequence = setInterval(function() {
                rambo.image = MageFrontFramesArr[attackSequenceFrameCounter];
                //console.log(attackSequenceFrameCounter);
                rambo.render();
                attackSequenceFrameCounter++;
                if (attackSequenceFrameCounter >= 4){
                    rambo.image = MageFrontFrame1;
                    attackSequenceFrameCounter = 1;
                    clearInterval(frontAttackSequence);
                }
            }, 75)
            let downInterval = setInterval(function() {
                arrayOfBullets[i].moveBulletDown();
                if (arrayOfBullets[i].alive === false) {
                    clearInterval(downInterval);
                }
            }, 20);
        }

        else if (event.key === "ArrowLeft"){
            arrayOfBullets.push(new Bullet(game.width/2, game.height/2, 5, 1, "red"));
            rambo.image = MageLeftFrame1;
            let frontAttackSequence = setInterval(function() {
                rambo.image = MageLeftFramesArr[attackSequenceFrameCounter];
                //console.log(attackSequenceFrameCounter);
                rambo.render();
                attackSequenceFrameCounter++;
                if (attackSequenceFrameCounter >= 4){
                    rambo.image = MageLeftFrame1;
                    attackSequenceFrameCounter = 1;
                    clearInterval(frontAttackSequence);
                }
            }, 75)
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

    console.log(arrayOfBullets);
    
}

let tempEnemy = new Enemy1(game.width-20, game.height/2, 20, 20, "purple");
let enemyArr = [];


//First Round
let startingPositions = ['Top', 'Right', 'Bottom', 'Left'];
let roundOneArr = [];
for (let i = 0; i < 25; i++){
    roundOneArr.push(new Enemy1(game.width-20, game.height/2-10, 32, 26.5, "purple", Enemy1Right1));
    roundOneArr[i].startPos = startingPositions[getRandomInt(0, 4)];
    if (roundOneArr[i].startPos === 'Top'){
        roundOneArr[i].x = game.width/2-16;
        roundOneArr[i].y = 0;
        roundOneArr[i].image = ZombieFrontFrame1;

    }
    else if (roundOneArr[i].startPos === 'Right'){
        roundOneArr[i].x = game.width-20;
        roundOneArr[i].y = game.height/2-13.25;
        roundOneArr[i].image = ZombieLeftFrame1;

    }
    else if (roundOneArr[i].startPos === 'Bottom'){
        roundOneArr[i].x = game.width/2-16;
        roundOneArr[i].y = game.height-20;
        roundOneArr[i].image = ZombieBackFrame1;

    }
    else if (roundOneArr[i].startPos === 'Left'){
        roundOneArr[i].x = 0;
        roundOneArr[i].y = game.height/2-13.25;
        roundOneArr[i].image = ZombieRightFrame1;

    }
}
console.log(roundOneArr);
//enemyArr.push(tempEnemy);

//Enemy Movement
let enemyCounter = 0;


// let bar = hBar.find('.bar');
// let hit = hBar.find('.hit');

let walkCounter = 0;
let hitCounter = 0;
//Game Loop
function roundOne(){
    for (let i = 0; i < roundOneArr.length; i++) {
        setTimeout(function() {
            if (roundOneArr[i] !== undefined){
                 roundOneArr[i].rendered = true;
            }
        }, 3000 * i+1);
    }
    for (let i = 0; i < roundOneArr.length; i++){
        if (roundOneArr[i].rendered === true){
            roundOneArr[i].render();
            WalkAnimation(roundOneArr[i], ZombieRightFramesArr, ZombieLeftFramesArr, ZombieFrontFramesArr, ZombieBackFramesArr, walkCounter, hitCounter);
        }
    }
    walkCounter++;
    if (walkCounter >= 7){
        walkCounter = 0;
    }
    if (hitCounter >= 5){
        hitCounter = 0;
    }
    hitCounter++;

    setTimeout(function(){
        for (let i = 0; i < roundOneArr.length; i++){
            if (!detectHit(roundOneArr[i], rambo)){
            if (roundOneArr[i].rendered === true){
                if (roundOneArr[i].startPos === 'Top'){
                        roundOneArr[i].y += 0.5;
                }
                else if (roundOneArr[i].startPos === 'Right'){
                    roundOneArr[i].x -= 0.5;
                }
                else if (roundOneArr[i].startPos === 'Bottom'){
                    
                    roundOneArr[i].y -= 0.5;
                
                }
                else if (roundOneArr[i].startPos === 'Left'){
                        roundOneArr[i].x += 0.5;
                }
            }
        }
            
        }
         
        
    }, 10);

    for (let i = 0; i < roundOneArr.length; i++){
        if (detectHit(roundOneArr[i], rambo)){
            // gam
            health -= 1;
            document.getElementById('bar').style.width = health + '%';
            Math.round(health * 100) / 100
            healthLevelContent.textContent = `${health}`;
            roundOneArr[i].hitting = true;
            if (health <= 0){
                //alert("GAME OVER");
                //break;
                document.getElementById("gameover-screen").style.display = "block";
            }
        }
        if (arrayOfBullets[arrayOfBullets.length-1].collision === 0){
            detectHit(arrayOfBullets[arrayOfBullets.length-1], roundOneArr[i]);
            if (roundOneArr[i].health <= 0){
                roundOneArr.splice(i, 1);
                totalKills++;
                killCount.textContent = `Total Kills: ${totalKills}`;
            }
            
        }
    }

    
    if (totalKills === 25){
        document.getElementById("win-screen").style.display = "block";
    }
    // if (totalKills > 1){
    //     BuyScreen();
    // }

    rambo.render();

}

function gameLoop2(){
    ctx.clearRect(0, 0, game.width, game.height);
    roundOne();
    rambo.render();
}

function gameLoop(){
    ctx.clearRect(0, 0, game.width, game.height);
    
    for (let i=0; i<roundOneArr.length; i++) {
        task(i);
     }
       
     function task(i) {
       setTimeout(function() {
           if (roundOneArr[i] !== undefined){
                roundOneArr[i].rendered = true;
           }
       }, 3000 * i+1);
    }

    

    for (let i = 0; i < roundOneArr.length; i++){
        if (roundOneArr[i].rendered === true){
            roundOneArr[i].render();
            WalkAnimation(roundOneArr[i], ZombieRightFramesArr, ZombieLeftFramesArr, ZombieFrontFramesArr, ZombieBackFramesArr, walkCounter, hitCounter);
        }
    }
    walkCounter++;
    if (walkCounter >= 7){
        walkCounter = 0;
    }
    if (hitCounter >= 5){
        hitCounter = 0;
    }
    hitCounter++;
    
    
    
    

    
    setTimeout(function(){
        for (let i = 0; i < roundOneArr.length; i++){
            if (!detectHit(roundOneArr[i], rambo)){
            if (roundOneArr[i].rendered === true){
                if (roundOneArr[i].startPos === 'Top'){
                        roundOneArr[i].y += 0.5;
                }
                else if (roundOneArr[i].startPos === 'Right'){
                    roundOneArr[i].x -= 0.5;
                }
                else if (roundOneArr[i].startPos === 'Bottom'){
                    
                    roundOneArr[i].y -= 0.5;
                
                }
                else if (roundOneArr[i].startPos === 'Left'){
                        roundOneArr[i].x += 0.5;
                }
            }
        }
            
        }
         
        
    }, 10);
    
    for (let i = 0; i < roundOneArr.length; i++){
        if (detectHit(roundOneArr[i], rambo)){
            // gam
            health -= 1;
            document.getElementById('bar').style.width = health + '%';
            Math.round(health * 100) / 100
            healthLevelContent.textContent = `${health}`;
            roundOneArr[i].hitting = true;
            if (health <= 0){
                //alert("GAME OVER");
                //break;
                document.getElementById("gameover-screen").style.display = "block";
            }
        }
        if (arrayOfBullets[arrayOfBullets.length-1].collision === 0){
            detectHit(arrayOfBullets[arrayOfBullets.length-1], roundOneArr[i]);
            if (roundOneArr[i].health <= 0){
                roundOneArr.splice(i, 1);
                totalKills++;
                killCount.textContent = `Total Kills: ${totalKills}`;
            }
            
        }
    }

    
    if (totalKills === 25){
        document.getElementById("win-screen").style.display = "block";
    }
    if (totalKills > 1){
        BuyScreen();
    }
    console.log(gamePaused);
    
    rambo.render();
    

}




