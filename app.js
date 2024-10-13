let ResetGame = document.querySelector("#btn");
let right = document.querySelector("#right");
let left = document.querySelector("#left");
let msgcontainer = document.querySelector(".arrow");
let Game = document.querySelector("body");
let read = document.querySelector(".heada");


const resetgame = () => {
    
    read.innerText = `Happy Vijayadashami` ;
    left.style.backgroundImage = "url('https://png.pngtree.com/png-vector/20220923/ourmid/pngtree-vijaydashami-ram-image-png-image_6213870.png')";
    left.style.backgroundSize = "cover";
    left.style.backgroundSize = "cover";
    left.style.backgroundSize = "cover";
    Game.style.backgroundColor = "rgb(7, 7, 44)"
    left.style.filter = "drop-shadow(2px 2px 30px rgb(67, 114, 215))";
    right.style.filter = "drop-shadow(0 0 5px rgba(255, 255, 0, 0.3))";
    right.style.animation = "pulse-shadow 2s ease-in-out infinite";
    msgcontainer.classList.remove("hide");

};

ResetGame.addEventListener("click" , resetgame);