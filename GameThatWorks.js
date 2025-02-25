/* setup*/
const canvasHeight = 500;
const canvasWidth = 500;
const playerSize = 50;
const playerStart = 200;
const coinSize = 20;
const TimeOut = 2000;
var score = 0;
function setup(){
    console.log("playter")
    cnv = new Canvas (canvasWidth,canvasHeight)
    player = new Sprite (playerStart, playerStart, playerSize, playerSize,)
    player.color = 'green';

} 
function createCoin(){
	//random (0, WIDNOWHEIGHT)
	coin=new Sprite (random(0, canvasHeight), random(0, canvasWidth), coinSize);
	coin.color = 'yellow';
    coin.spawntime = millis();

}
function checkCoinTime(){
    // Check if the coin has been around too long (COIN_TIMEPUT millisecomnds)
    if (coin.spawntime + TimeOut < millis()){
        coin.remove()
    }
}
function playerMovement(){
	if (kb.pressing('a')) {
	player.vel.x = -2;
	}
	
	else if (kb.pressing ('d')) {
	player.vel.x = 2;
	
	};
	if (kb.released('a')) {
		player.vel.x = 0;
	}else if (kb.released('d')){
		player.vel.x = 0;
	}
	
	if (kb.pressing('s')) {
		player.vel.y = 2;
		}
		
		else if (kb.pressing ('w')) {
		player.vel.y = -2;
		
		}
	if (kb.released('a')) {
			player.vel.x = 0;
	}else if (kb.released('d')){
			player.vel.x = 0;
		}
    if (kb.released('w')){
        player.vel.y = 0;

    }else if (kb.released('d')){
        player.vel.y = 0;
    }
}

function draw(){
    background('skyblue')
    playerMovement()
    checkCoinTime()
    text("score = "+score)

}

