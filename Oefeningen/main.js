let canvas = document.getElementById("game-area");
let context = canvas.getContext("2d");
let player_sprite = new Image();
/*Maak een nieuw plaatje object aan*/
player_sprite.src = "walk5.jpg";
/*Geef het plaatjes object een bron voor het plaatje*/
/*Start X & Y positie van player*/
let player_x = 100;
let player_y = 0;
function game_loop() {
    requestAnimationFrame(game_loop);
    /*Zodra de huidige frame klaar is met laden begin de loop opnieuw*/
    context.clearRect(0, 0, canvas.height, canvas.width)
    /*Maak de huidige canvas weer leeg zodat er weer kan worden getekend*/
    /*Verhoog deze frame de x positie met 3*/
    document.addEventListener('keydown', function(event) {

        if(event.keyCode === 37) {

            player_x = player_x - 0.09;

        }

        else if(event.keyCode === 39) {

            player_x = player_x + 0.09;

        }


    });

    if (parseInt(player_x) > canvas.width){
        player_x = 100
    } else if (parseInt(player_x) < 100){
        player_x = canvas.width
    }
    /*Teken het plaatje met de nieuwe waardes*/
    context.drawImage(player_sprite, player_x, player_y);
    /*Geef aan met welk font je schrijft*/
    context.font = '40px serif';
    /*Maak een tekst aan op de player_x positie*/
    context.fillText("player_x: " + player_x, player_x, 50)

}

/*Opdracht: Zorg ervoor dat zodra de sprite de zijkant van de canvas raakt deze weer naar linsk gaat*/
/*Hint. de canvas.width geeft automatisch de huidige breedte van het canvas door.*/
game_loop();