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
		}, 1000);
	}
	if (timeOngoing == true && posX2 != 1200) {
		setInterval(() => {
			time2 += 1;
		}, 1000);
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
		if (keys.has(65)) posX -= 2;
		if (keys.has(87)) {
			posY -= jumpSpeed;
			jump.play();
		}
		if (keys.has(68)) posX += 2;
		if (keys.has(37)) posX2 -= 2;
		if (keys.has(38)) {
			posY2 -= jumpSpeed;
			jump.play();
		}
		if (keys.has(39)) posX2 += 2;
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
	var gravityRed = true;

	setInterval(() => {
		if (gravityRed && posY < 499) {
			posY += fallSpeed;
		}

		if (posX == 1200) {
			posX = 0;
			console.log('Player 1', time);
			time = 0;
			time2 = 0;
		}

		if (posX >= 770 && posX <= 830 && posY >= 500) {
			// alert('u ded');
			death.play();
			posY = 0;
			posX = 0;
		}
		if (posX >= 650 && posX <= 725 && posY >= 305 && posY <= 325) {
			posY -= 2;
		}
		//if (posX == posX2 || posX == (posX2 + 50) && posY == posY2) {
		//  posX += fallSpeed;
		//posX2 -= fallSpeed;
		//}
	}, 1);
}

function gameChar2() {
	var gravityBlue = true;

	setInterval(() => {
		if (gravityBlue && posY2 < 499) {
			posY2 += fallSpeed;
		}

		if (posX2 == 1200) {
			posX2 = 0;
			console.log('Player 2', time2);
			time2 = 0;
			time = 0;
		}

		if (posX2 >= 770 && posX2 <= 830 && posY2 >= 500) {
			// alert('u ded');
			death.play();
			posY2 = 0;
			posX2 = 0;
		}
		if (posX2 >= 650 && posX2 <= 725 && posY2 >= 305 && posY2 <= 325) {
			posY2 -= 2;
		}

		//if (posX2 == posX && posY2 == posY) {
		//  posX2 -= fallSpeed;
		//}
	}, 1);
}

function playSound() {
	//alert("");
	if (typeof background.loop == 'boolean') {
		background.loop = true;
	} else {
		background.addEventListener(
			'ended',
			function() {
				this.currentTime = 0;
				this.play();
			},
			false
		);
	}
	background.volume = 0.3;
	background.play();
}

gameStart();
gameChar1();
gameChar2();
movingSpikes();
playSound();
