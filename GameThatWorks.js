/* setup*/
const canvasHeight = 500;
const canvasWidth = 500;
const playerSize = 50;
const playerStart = 200;
const coinSize = 20;
const timeOut = 5000;
const warning = 2000;
var score = 0;
var LifeExpectancy = 5000; 
var playerSpeed = 3;
var gameState = "start"
var i =0;
var lives = 3;
function setup(){
    console.log("playter")
    cnv = new Canvas (canvasWidth,canvasHeight)
    player = new Sprite (playerStart, playerStart, playerSize, playerSize,'k')
    player.color = 'green';
	totalCoin = new Group();
} 

function draw(){
	if (gameState=="running"){ 
		text("score:"+score, 20, 20)
		text("lives:"+lives, 20, 30)
    	background('skyblue')
    	playerMovement()
		if (totalCoin.length<10){
			if (random(0,1000)<20){
			createCoin()
			console.log(random(0,1000))
		}
	} else{
			console.log("limit reached")
	}

    	text("score = "+score, 50,50)
	for ( i=0; i<totalCoin.length;i++){
		checkCoinTime(totalCoin[i])
	}
		totalCoin.collides(player,addPoint);
	} else if (gameState=="certain Death"){
		endGame();
	}
}

function addPoint(_coin_,_player_) {
	_coin_.remove();
	score = score+1;



}

function createCoin(){
	//random (0, WIDNOWHEIGHT)
	coin=new Sprite (random(0, canvasHeight), random(0, canvasWidth), coinSize);
	coin.color = 'yellow';
    coin.spawntime = millis();
	console.log("spawntime "+coin.spawntime );
	totalCoin.add(coin);
}


function checkCoinTime(checkingCoin){

	if (checkingCoin.spawntime +timeOut < millis()){
		
		console.log("A coin has died of dementia")
		checkingCoin.remove()
	} else if (coin.spawntime+warning < millis()){
		console.log("cranberry sauce")
		checkingCoin.color = 'red';
	} else {
		console.log("plum Jam")
	}
}

function playerMovement(){
	if (kb.pressing('a')) {
	player.vel.x = -playerSpeed;
	}
	
	else if (kb.pressing ('d')) {
	player.vel.x = playerSpeed;
	
	};
	if (kb.released('a')) {
		player.vel.x = 0;
	}else if (kb.released('d')){
		player.vel.x = 0;
	}
	
	if (kb.pressing('s')) {
		player.vel.y = playerSpeed;
		}
		
		else if (kb.pressing ('w')) {
		player.vel.y = -playerSpeed;
		
		}
	if (kb.released('a')) {
			player.vel.x = 0;
	}else if (kb.released('d')){
			player.vel.x = 0;
		}
    if (kb.released('w')){
        player.vel.y = 0;

    }else if (kb.released('s')){
        player.vel.y = 0;
    }
}
function endGame(){
	background('red')
	player.remove();
	coins.remove();
	fill(0, 0, 0);
	textSize(50);
	text("You missed a coin! ", 10,100);
	textSize(100);

	text("Score: " + score, 10,200);
}