var ball; //red ball
var ball2; //blue ball
var floor = [];
var keys = new Set(); //The issue with key detection was that key was a variable and could only have one value, now it's a set of variables and that allows for multiple keys to be pressed at once.
var posX = 0;
var posY = 0;
var posX2 = 0;
var posY2 = 0;
var timeOngoing = true;
var time = 0;
var time2 = 0;
var posSpikeX = 800;
var posSpikeY = 480;
var brickPosX = 700;
var brickPosY = 350;
var spikes;
var fallSpeed = 2;
var jumpSpeed = 4;
var movingSpikes;
var mSpikePosX = 400;
var mSpikePosY = 480;
var comeBack = false;
var jump = new Audio('bounce.ogg');
var death = new Audio('death.wav');
var background = new Audio('background.wav');
var gravity = 0.02;
var onGround1 = false;
var onGround2 = false;
var velocityY2 = 0;
var velocityY1 = 0;
var counter = 0;
var upAmount = 2;
var speed = 5;


window.onload = function() {
	background.play();
	var ball = new Image();
	ball.src = 'Ball.png';
	var ball2 = new Image();
	ball2.src = 'Ball2.png';
	var spikes = new Image();
	spikes.src = 'spikes.png';
	var brick1 = new Image();
	brick1.src = 'Bricks.png';
	var movingSpikes = new Image();
	movingSpikes.src = 'spikes.png';
	if (timeOngoing == true && posX != 1200) {
		setInterval(() => {
			time += 1;
		}, 1);
	}
	if (timeOngoing == true && posX2 != 1200) {
		setInterval(() => {
			time2 += 1;
		}, 1);
	}

	var canvas = document.getElementById('bg');
	let posXFloor = 0;
	let posYFloor = 550;
	var ctx = canvas.getContext('2d');
	var floor = [];
	for (let i = 0; i < 25; i++) {
		floor = new Image();
		if (floor && floor.style) {
			floor.style.height = '50px';
			floor.style.width = '50px';
		}
		floor.src = 'Bricks.png';
		floor.onload = function() {
			ctx.drawImage(floor, i * 50, posYFloor);
		};
	}

	ball.onload = function() {
		ctx.drawImage(ball, posX, posY);
	};

	ball2.onload = function() {
		ctx.drawImage(ball2, posX2, posY2);
	};

	spikes.onload = function() {
		ctx.drawImage(spikes, posSpikeX, posSpikeY);
	};

	brick1.onload = function() {
		ctx.drawImage(brick1, brickPosX, brickPosY);
	};

	movingSpikes.onload = function() {
		ctx.drawImage(movingSpikes, mSpikePosX, mSpikePosY);
	};

	document.onkeydown = function(e) {
		keys.add(window.event ? e.keyCode : e.which);
	};

	document.onkeyup = function(e) {
		keys.delete(window.event ? e.keyCode : e.which);
	};

	setInterval(function() {
		if (keys.has(65)) posX -= speed;
		if (keys.has(87) && onGround1) {
			for (i = 0; i < 60; i++) {
				posY -= upAmount;
				setTimeout(function() {
					posY -= upAmount;
				}, 1000/60);
			}
			jump.play();
		}
		if (keys.has(68)) posX += speed;
		if (keys.has(37)) posX2 -= speed;
		if (keys.has(38) && onGround2) {
			jump.play();
			for (i = 0; i < 60; i++) {
				posY2 -= upAmount;
				setTimeout(function() {
					posY2 -= upAmount;
				}, 1000/60);
			}
		}
		if (keys.has(39)) posX2 += speed;
	}, 1);

	setInterval(function() {
		canvas.width = canvas.width;
		ctx.drawImage(ball, posX, posY);
		ctx.drawImage(ball2, posX2, posY2);
		ctx.drawImage(spikes, posSpikeX, posSpikeY);
		ctx.drawImage(brick1, brickPosX, brickPosY);
		ctx.drawImage(movingSpikes, mSpikePosX, mSpikePosY);
		for (let i = 0; i < 25; i++) {
			ctx.drawImage(floor, i * 50, posYFloor);
		}
	}, 1);
};

function gameStart() {}

function movingSpikes() {
	setInterval(() => {
		if (comeBack == false && mSpikePosX < 600) {
			//SPIKE MOVEMENT DOESNT WORK
			mSpikePosX += 2;
		}

		if (posX >= mSpikePosX - 30 && posX <= mSpikePosX + 30 && posY > mSpikePosY) {
			// alert('u ded');
			death.play();
			posY = 0;
			posX = 0;
		}
		if (posX2 >= mSpikePosX - 30 && posX2 <= mSpikePosX + 30 && posY2 > mSpikePosY) {
			// alert('u ded');
			death.play();
			posY2 = 0;
			posX2 = 0;
		}
	}, 1);
}



function gameChar1() {
	// var gravityRed = true;

	setInterval(() => {
		// if (gravityRed && posY < 499) {
		// 	posY += fallSpeed;
		// }


		if (posX == 1200) {
			posX = 0;
			posX2 = 0;
			// alert('Player 1 Score:' + time.toString());
			alert("Player 1 Wins")
			time = 0;
			time2 = 0;
		}

		if (posX >= 770 && posX <= 830 && posY >= 500) {
			// alert('u ded');
			death.play();
			posY = 0;
			posX = 0;
		}
		//if (posX == posX2 || posX == (posX2 + 50) && posY == posY2) {
		//  posX += fallSpeed;
		//posX2 -= fallSpeed;
		//}
		if (posY >= 499 || posX >= 650 && posX <= 725 && posY >= 305 && posY <= 325) {
			onGround1 = true;
			velocityY1 = 0;
		} 
		else {
			onGround1 = false;
		}
		if (!onGround1) {
			velocityY1 += gravity;
		}
		posY += velocityY1;
	}, 1);
}

function gameChar2() {
	// var gravityBlue = true;

	setInterval(() => {
		// if (gravityBlue && posY2 < 499) {
		// 	posY2 += fallSpeed;
		// }

		if (posX2 == 1200) {
			posX = 0;
			posX2 = 0;
			// alert('Player 2 Score: ' + time2.toString());
			alert("Player 2 Wins")
			time2 = 0;
			time = 0;
		}

		if (posX2 >= 770 && posX2 <= 830 && posY2 >= 500) {
			// alert('u ded');
			death.play();
			posY2 = 0;
			posX2 = 0;
		}

		//if (posX2 == posX && posY2 == posY) {
		//  posX2 -= fallSpeed;
		//}
		if (posY2 >= 499 || posX2 >= 650 && posX2 <= 725 && posY2 >= 305 && posY2 <= 325) {
			onGround2 = true;
			velocityY2 = 0;
		}
		else {
			onGround2 = false;
		}
		if (!onGround2) {
			velocityY2 += gravity;
		}
		posY2 += velocityY2;
	}, 1);
}

gameStart();
gameChar1();
gameChar2();
movingSpikes();
