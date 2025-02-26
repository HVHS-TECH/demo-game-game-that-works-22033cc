/* setup*/
const canvasHeight = 500;
const canvasWidth = 500;
const playerSize = 50;
const playerStart = 200;
const coinSize = 20;
const TimeOut = 1500;
var score = 0;
var LifeExpectancy = 5000; 
var playerSpeed = 3;

function setup(){
    console.log("playter")
    cnv = new Canvas (canvasWidth,canvasHeight)
    player = new Sprite (playerStart, playerStart, playerSize, playerSize,)
    player.color = 'green';
	totalCoin = new Group();
} 

function draw(){
	text("score:"+score, 20, 20)
    background('skyblue')
    playerMovement()
	if (random(0,1000)<20){
		createCoin()
		console.log(random(0,1000))
	}
    text("score = "+score, 50,50)

	for (var i = 0; i < totalCoin.length; i++){
		// Check Coin time should return true if the coin is old and needs to be deleted
		checkCoinTime(totalCoin[i])
		console.log("psychedelic breakfast")
		console.log(totalCoin.length)
	}
		

totalCoin.collides(player,addPoint);
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
	totalCoin.add(coin);
}


function checkCoinTime(){
	console.log("timeoutstarted")
    // Check if the coin has been around too long (COIN_TIMEPUT millisecomnds)
    if (coin.spawntime + TimeOut < millis()){
		console.log(coin.spawntime +TimeOut)
		console.log("millis"+millis())
        coin.remove()
		console.log("coin killed")
		
    } else{
		console.log("cornflakes")
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
