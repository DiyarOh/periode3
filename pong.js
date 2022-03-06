
document.addEventListener("click", Jump);

document.addEventListener("keypress")


function Jump() {
    document.getElementById("block1").style.animation = "Jump 400ms";
    setTimeout(clearJump, 500);
}

function clearJump(){
    document.getElementById("block1").style.animation = null
}