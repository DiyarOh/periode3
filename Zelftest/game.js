let canvas = document.getElementById("game-box");
let context = canvas.getContext("2d");
let player_Character = new Image();
let apple_Image = new Image();

// CharacterCreation
player_Character.src = "images/pikachu.png";
apple_Image.src = "images/berry.png";

//Starters Position

let player_x = 100;
let player_y = 0;

let berry_x = 400;
let berry_y = 400;

let move_speed = 0.08;

function game_loop() {
    requestAnimationFrame(game_loop)
    context.clearRect(0, 0, 1500, 1200)

    document.addEventListener('keydown', function (event) {

        if (event.keyCode === 37) {
            if (parseInt(player_x) > 0) {
                player_x = player_x - move_speed;
            }

        } else if (event.keyCode === 39) {
            if (parseInt(player_x) < 1350) {
                player_x = player_x + move_speed;
            }

        } else if (event.keyCode === 40) {
            if (parseInt(player_y) < 1020) {
                player_y = player_y + move_speed;
            }

        } else if (event.keyCode === 38) {
            if (parseInt(player_y) > 0) {
                player_y = player_y - move_speed;
            }
        }


    });
    context.drawImage(player_Character, player_x, player_y, 150, 180);
    context.font = '40px serif';

}


player_Character.width = 150
player_Character.height = 180

apple_Image.width = 100
apple_Image.height = 100

function apple_Spawn() {
    requestAnimationFrame(apple_Spawn);
    context.clearRect(berry_x, berry_y, 100, 100)

    if (player_x + player_Character.width >= berry_x &&
        player_x <= berry_x + apple_Image.width &&
        player_y + player_Character.height >= berry_y &&
        player_y <= berry_y + apple_Image.height) {
        let berry_x = 600;
        let berry_y = 800;
        console.log("collide")
        context.drawImage(apple_Image, berry_x, berry_y, 100, 100);
    }
    context.drawImage(apple_Image, berry_x, berry_y, 100, 100);
}


game_loop();
apple_Spawn();