/* setup*/
const canvasHeight = 500;
const canvasWidth = 500;
const playerSize = 50;
const playerStart = 200;
const coinSize = 20;
const timeOut = 5000;
const warning = 2000;
var Speed = 3;
const controls = ['w','a','s','d','k','l'];
var score = 0;
var LifeExpectancy = 5000; 
var playerSpeed = 3;
var gameState = "start"
var i =0;
var lives = 3;
var nextSpeedUp = 5;



function setup(){
    console.log("player");
    cnv = new Canvas (canvasWidth,canvasHeight);
	displayMode('centered')
	background("pink")
    player = new Sprite (playerStart, playerStart, playerSize, playerSize,'k');
    player.color = 'green';
	totalCoin = new Group();
} 

function draw(){
	if (gameState=="start"){
		
		text("game that works",100,50)
		text("press Enter to start", 100,250)
		if (kb.pressed('enter')){
			gameState="running";
		}
	}
	if (gameState=="running"){ 
		

    	background('skyblue')
    	playerMovement()
	
		if (totalCoin.length<10){
			if (random(0,1000)<15){
			createCoin()
			console.log(random(0,1000))
		}
	} else{
			console.log("limit reached")
	}

    	text("score = "+score, 50,50)
		text("lives = "+lives, 50,60)
	for ( i=0; i<totalCoin.length;i++){
		checkCoinTime(totalCoin[i])
	}
		totalCoin.collides(player,addPoint);
		if (score == nextSpeedUp)
		if (lives < 0 ){
			gameState ="dead";
		}
		if (score == nextSpeedUp){
			score = score+1;
			nextSpeedUp = nextSpeedUp+5;
			if (nextSpeedUp == 35){
				nextSpeedup = 0;
				
			}
		if (nextSpeedUp == 0){
			text("MAX SPEED!",10,10)
		}
		}
	} else if (gameState=="dead"){
		text("uh,oh! you failed to collect all the coins!", 50,50)
		text("you scored"+score, 50, 50)
		text("press enter to replay");
		if(kb.pressed('enter')){
			score = 0;
			lives = 3;
			gameState = playing;
		}
	}
}

function addPoint(_coin_,_player_) {
	_coin_.remove();
	score = score+1;



}

function createCoin(){
	//random (0, WIDNOWHEIGHT)
	var coinSpawnY = (Math.random()*canvasWidth)
	var coinSpawnX = (Math.random()*canvasHeight)
	console.log(coinSpawnY)
	console.log(coinSpawnX)
	coin=new Sprite (coinSpawnX, coinSpawnY, coinSize);
	coin.color = 'yellow';
    coin.spawntime = millis();
	console.log("spawntime "+coin.spawntime );
	totalCoin.add(coin);
}


function checkCoinTime(checkingCoin){

	if (checkingCoin.spawntime +timeOut < millis()){
		
		console.log("A coin has died of dementia")
		checkingCoin.remove()
		
		lives = lives-1;
	} else if (coin.spawntime+warning < millis()){
		console.log("cranberry sauce")
		checkingCoin.color = 'red';
	} else {
		console.log("plum Jam")
	}
}

function playerMovement(){
	var xPress=0;
    var yPress=0;
    /* controls for x*/
    if (kb.pressing(controls[1])) {
        //left
        xPress= xPress-Speed;
    };
     
     if (kb.pressing (controls[3])) {
        //right
        xPress = xPress+Speed;
    };
    /* controls for y*/
    if (kb.pressing(controls[0])) {
        //up
        yPress= yPress-Speed;
    };
        
     if (kb.pressing (controls[2])) {
        //down
        yPress = yPress+Speed;

    };
 

    player.vel.x = xPress;
    player.vel.y = yPress;

}

function endGame(){

}
