var ball; //red ball
var ball2; //blue ball
var floor = [];
var keys = new Set(); //The issue with key detection was that key was a variable and could only have one value, now it's a set of variables and that allows for multiple keys to be pressed at once.
var posX = 0;
var posY = 0;
var posX2 = 0;
var posY2 = 0;
var posX3 = 0;
var posY3 = 0;
var timeOngoing = true;
var time = 0;
var time2 = 0;
var time3 = 0;
var posSpikeX = 800;
var posSpikeY = 480;
var posSpikeX2 = 400;
var posSpikeY2 = 480;
var brickPosX = 700;
var brickPosY = 400;
var brickPosX2 = 500;
var brickPosY2 = 400;
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
var gravity = 0.09;
var onGround1 = false;
var onGround2 = false;
var onGround3 = false;
var velocityY2 = 0;
var velocityY1 = 0;
var velocityY3 = 0;
var counter = 0;
var counter2 = 0;
var counter3 = 0;
var upAmount = 6;
var speed = 3;

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
    var ball3 = new Image();
    ball3.src = 'Ball3.png';
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

    ball3.onload = function() {
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
            var jump1 = setInterval(ballUp, 1);

            function ballUp() {
                if (counter > 50) {
                    clearInterval(jump1);
                } else {
                    posY -= upAmount;
                    counter++;
                }
            }
            jump.play();
            counter = 0;
        }
        if (keys.has(68)) posX += speed;
        if (keys.has(37)) posX2 -= speed;
        if (keys.has(38) && onGround2) {
            var jump2 = setInterval(ballUp2, 1);

            function ballUp2() {
                if (counter2 > 50) {
                    clearInterval(jump2);
                } else {
                    posY2 -= upAmount;
                    counter2++;
                }
            }
            jump.play();
            counter2 = 0;
        }
        if (keys.has(39)) posX2 += speed;
        if (keys.has(74)) posX3 -= speed;
        if (keys.has(73) && onGround3) {
            var jump3 = setInterval(ballUp3, 1);

            function ballUp3() {
                if (counter3 > 50) {
                    clearInterval(jump3);
                } else {
                    posY3 -= upAmount;
                    counter3++;
                }
            }
            jump.play();
            counter3 = 0;
        }
        if (keys.has(76)) posX3 += speed;
    }, 1);

    setInterval(function() {
        canvas.width = canvas.width;
        ctx.drawImage(ball, posX, posY);
        ctx.drawImage(ball2, posX2, posY2);
        ctx.drawImage(ball3, posX3, posY3);
        ctx.drawImage(spikes, posSpikeX, posSpikeY);
        ctx.drawImage(spikes, posSpikeX2, posSpikeY2);
        ctx.drawImage(brick1, brickPosX, brickPosY);
        ctx.drawImage(brick1, brickPosX2, brickPosY2);
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
        if (posX3 >= mSpikePosX - 30 && posX3 <= mSpikePosX + 30 && posY3 > mSpikePosY) {
            // alert('u ded');
            death.play();
            posY3 = 0;
            posX3 = 0;
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
            posX3 = 0;
            // alert('Player 1 Score:' + time.toString());
            alert('Miika Wins');
            time = 0;
            time2 = 0;
            time3 = 0;
            window.location.href = "level3.html";
        }

        if (posX >= posSpikeX - 30 && posX <= posSpikeX + 30 && posY >= posSpikeY) {
            // alert('u ded');
            death.play();
            posY = 0;
            posX = 0;
        }
        if (posX >= posSpikeX2 - 30 && posX <= posSpikeX2 + 30 && posY >= posSpikeY2) {
            // alert('u ded');
            death.play();
            posY = 0;
            posX = 0;
        }
        //if (posX == posX2 || posX == (posX2 + 50) && posY == posY2) {
        //  posX += fallSpeed;
        //posX2 -= fallSpeed;
        //}
        if (posY >= 499 || (posX >= brickPosX - 50 && posX <= brickPosX + 25 && posY >= brickPosY - 45 && posY <= brickPosY - 25) || (posX >= brickPosX2 - 50 && posX <= brickPosX2 + 25 && posY >= brickPosY2 - 45 && posY <= brickPosY2 - 25)) {
            onGround1 = true;
            velocityY1 = 0;
        } else {
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
            alert('Danila Wins');
            time2 = 0;
            time = 0;
            window.location.href = "level3.html";
        }

        if (posX2 >= posSpikeX - 30 && posX2 <= posSpikeX + 30 && posY2 >= posSpikeY) {
            // alert('u ded');
            death.play();
            posY2 = 0;
            posX2 = 0;
        }
        if (posX2 >= posSpikeX2 - 30 && posX2 <= posSpikeX2 + 30 && posY2 >= posSpikeY2) {
            // alert('u ded');
            death.play();
            posY2 = 0;
            posX2 = 0;
        }

        //if (posX2 == posX && posY2 == posY) {
        //  posX2 -= fallSpeed;
        //}
        if (posY2 >= 499 || (posX2 >= brickPosX - 50 && posX2 <= brickPosX + 25 && posY2 >= brickPosY - 45 && posY2 <= brickPosY - 25) || (posX2 >= brickPosX2 - 50 && posX2 <= brickPosX2 + 25 && posY2 >= brickPosY2 - 45 && posY2 <= brickPosY2 - 25)) {
            onGround2 = true;
            velocityY2 = 0;
        } else {
            onGround2 = false;
        }
        if (!onGround2) {
            velocityY2 += gravity;
        }
        posY2 += velocityY2;
    }, 1);
}

function gameChar3() {
    // var gravityBlue = true;

    setInterval(() => {
        // if (gravityBlue && posY2 < 499) {
        // 	posY2 += fallSpeed;
        // }

        if (posX3 == 1200) {
            posX = 0;
            posX2 = 0;
            posX3 = 0;
            // alert('Player 2 Score: ' + time2.toString());
            alert('Eetu Wins');
            time2 = 0;
            time = 0;
            time3 = 0;
            window.location.href = "level2.html";
        }

        if (posX3 >= posSpikeX - 30 && posX3 <= posSpikeX + 30 && posY3 >= posSpikeY) {
            // alert('u ded');
            death.play();
            posY3 = 0;
            posX3 = 0;
        }
        if (posX3 >= posSpikeX2 - 30 && posX3 <= posSpikeX2 + 30 && posY3 >= posSpikeY2) {
            // alert('u ded');
            death.play();
            posY3 = 0;
            posX3 = 0;
        }

        //if (posX2 == posX && posY2 == posY) {
        //  posX2 -= fallSpeed;
        //}
        if (posY3 >= 499 || (posX3 >= brickPosX - 50 && posX3 <= brickPosX + 25 && posY3 >= brickPosY - 45 && posY3 <= brickPosY - 25) || (posX3 >= brickPosX2 - 50 && posX3 <= brickPosX2 + 25 && posY3 >= brickPosY2 - 45 && posY3 <= brickPosY2 - 25)) {
            onGround3 = true;
            velocityY3 = 0;
        } else {
            onGround3 = false;
        }
        if (!onGround3) {
            velocityY3 += gravity;
        }
        posY3 += velocityY3;
    }, 1);
}

function playSound() {
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

function singlePlayer() {
    ball2.style.display = 'none';
}

function multiPlayer() {
    ball2.style.display = 'none';
}

function mute() {
    death.muted = true;
    jump.muted = true;
    background.muted = true;
}

function soundsOn() {
    death.muted = false;
    jump.muted = false;
    background.muted = false;
}

gameStart();
gameChar1();
gameChar2();
gameChar3();
movingSpikes();
playSound();