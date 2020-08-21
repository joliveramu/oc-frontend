// let turn = 1;

// function game(elem)
// {
//     if(turn == 1)
//     {
//         elem.innerHTML = "A";
//         turn = 2;
//     }else if(turn == 2)
//     {
//         elem.innerHTML = "B";
//         turn = 1;
//     }
// }

let gameBoard = document.getElementById('gameBoard');
let gameTiles = document.getElementsByClassName('game-tiles');
//Map array
let mapBoard = ["map1","map2","map3","map4"];
//This should be players
let colors = ["red","blue"];

// gameTiles[0].style.backgroundColor = 'blue';
//random generation of background

let randomBlocks = Math.floor(Math.random() * colors.length);
let randomBoard = Math.floor(Math.random() * mapBoard.length);
let randomTile = Math.floor(Math.random() * gameTiles.length);
window.addEventListener("load", function(){
    for(var i = 0; i < 2; i++)
    {
        gameTiles[randomTile].style.backgroundColor = colors[randomBlocks];
        gameTiles[Math.floor(Math.random()*randomTile)].style.backgroundColor = colors[Math.floor(Math.random()*randomBlocks)];
    }
  
    gameBoard.style.backgroundImage = "url('assets/img/"+mapBoard[randomBoard]+".png')";
    gameBoard.style.backgroundRepeat = "no-repeat";
    gameBoard.style.backgroundSize = "cover";

}, false);