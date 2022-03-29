// Game Area
const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")


//Paddle Stats
let player_Paddle_Height = 120
let opponent_Paddle_Height = 100
canvas.height = window.innerHeight - 100
canvas.width = window.innerWidth - 100

//Game loop
class Player_Paddle {
    constructor() {
        this.position = {
            x: 10,
            y: 460
        }
        this.velocity = {
            x: 10,
            y: 20
        }
        this.width = 20
        this.height = player_Paddle_Height
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}
class Computer_Paddle {
    constructor() {
        this.position = {
            x: canvas.width - 40,
            y: 460
        }
        this.velocity = {
            x: 10,
            y: 20
        }
        this.width = 20
        this.height = player_Paddle_Height
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}

class Ball {
    constructor() {
        this.position = {
            x: 500,
            y: 500
        }

        this.velocity = {
            x: 5,
            y: 7.5
        }
        this.height = 30
        this.width = 30
    }

    draw() {
        ctx.fillStyle = "black"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

}

function computerMove(){
    let number = 1
    computer.position.y = ball.position.y + number
    console.log(number)

}

function testMove(){
    player.position.y = ball.position.y - 4
}

function ballMove() {
    ball.position.x = ball.position.x - ball.velocity.x
    ball.position.y = ball.position.y - ball.velocity.y
    if (ball.position.x === canvas.width - canvas.width) {
        ball.velocity.x = 0
        ball.velocity.y = 0
    }else if (ball.position.x >= canvas.width){
        ball.velocity.x = 0
        ball.velocity.y = 0
    } else if (player.position.x + player.width >= ball.position.x &&
        player.position.x <= ball.position.x + ball.width &&
        player.position.y + player.height >= ball.position.y &&
        player.position.y <= ball.position.y + ball.height ){
        ball.velocity.x = -20
    }
    else if (ball.position.y >= canvas.height){
        ball.velocity.y = 7.5
    }
    else if (ball.position.y <= canvas.height - canvas.height ){
        ball.velocity.y = -7.5
    }else if (computer.position.x - computer.width >= ball.position.x &&
        computer.position.x <= ball.position.x + ball.width &&
        computer.position.y + computer.height >= ball.position.y &&
        computer.position.y <= ball.position.y + ball.height ){
        ball.velocity.x = 20
    }
}

function game_loop() {
    requestAnimationFrame(game_loop)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    ball.draw()
    computer.update()
    ballMove()
    computerMove()
    testMove()
}

const player = new Player_Paddle()
const ball = new Ball()
const computer = new Computer_Paddle()


game_loop()
// Paddle Movement
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 40) {
        if (parseInt(player.position.y) < canvas.height - 100) {
            player.position.y = player.position.y + player.velocity.y;
        }

    } else if (event.keyCode === 38) {
        if (parseInt(player.position.y) > 0) {
            player.position.y = player.position.y - player.velocity.y;
        }
    }
});
