let canvas = document.getElementById("game-box");
let context = canvas.getContext("2d");
let player_Character = new Image();
let apple_Image = new Image();
let scoreBoard = document.getElementById("score");

// CharacterCreation

// player_Character.src = "images/pikachu.png";
apple_Image.src = "images/berry.png";

//Starters Position

let player_x = 100;
let player_y = 0;
let score = 0;

let berry_x = Math.floor(Math.random() * 1400);
let berry_y = Math.floor(Math.random() * 1100);





function game_loop() {
    requestAnimationFrame(game_loop)
    let move_speed = 0.05;
    let char_Height = 180;
    let char_Width = 150;
    console.log(move_speed)
    context.clearRect(0, 0, 1500, 1200)

    scoreBoard.innerHTML = score;
    if (score < 10){
        player_Character.src = "images/pichu.png";
        char_Width = 170;}

    else if (score >=10 && score < 30){
        player_Character.src = "images/pikachu.png";
    }
    else if (score >= 30 && score <= 50){
        player_Character.src = "images/raichu.png";
    }
    else if (score > 50){
        char_Width = 170;
        player_Character.src = "images/raichu2.png";
    }
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
        // else if (event.keyCode === 32) {
        //     if (player_x + player_Character.width >= berry_x && //left
        //         player_x <= berry_x + apple_Image.width &&//right
        //         player_y + player_Character.height >= berry_y &&//top
        //         player_y <= berry_y + apple_Image.height)//bottom
        //     {
        //
        //         berry_x = Math.floor(Math.random() * 1400);
        //         berry_y = Math.floor(Math.random() * 1100);
        //
        //     }
        // }
        // else if (event.keyCode === 87) {
        //  window.close()
        // }


    });
    if (player_x + player_Character.width >= berry_x && //left
        player_x <= berry_x + apple_Image.width &&//right
        player_y + player_Character.height >= berry_y &&//top
        player_y <= berry_y + apple_Image.height)//bottom
    {

        berry_x = Math.floor(Math.random() * 1400);
        berry_y = Math.floor(Math.random() * 1100);
        score++;

    }
    context.drawImage(player_Character, player_x, player_y, char_Width, char_Height);
    context.drawImage(apple_Image, berry_x, berry_y, 100, 100);
    context.font = '40px serif';
    // context.fillText("player_x: " + player_x, player_x, 50)
}


player_Character.width = 150
player_Character.height = 180

apple_Image.width = 100
apple_Image.height = 100


// function apple_Spawn() {
//     requestAnimationFrame(apple_Spawn)
//     context.drawImage(apple_Image, berry_x, berry_y, 100, 100);
//     if (player_x + player_Character.width >= berry_x && //left
//     player_x <= berry_x + apple_Image.width &&//right
//     player_y + player_Character.height >= berry_y &&//top
//     player_y <= berry_y + apple_Image.height)//bottom
// {
//     console.log("collide")
//
// }
//
// }


game_loop();

// if (player_x + player_Character.width >= berry_x && //left
//     player_x <= berry_x + apple_Image.width &&//right
//     player_y + player_Character.height >= berry_y &&//top
//     player_y <= berry_y + apple_Image.height)//bottom
// {
//     console.log("collide")
//     context.clearRect(berry_x, berry_y, 10, 1200)
//
// }