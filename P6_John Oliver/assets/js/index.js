//Getting the table's #gameBoard id
let gameBoard = document.getElementById('gameBoard');

//Getting all the td's .game-tiles class
let gameTiles = document.getElementsByClassName('game-tiles');

//Map Level Array
let mapBoard = ["map1","map2","map3","map4"];

//Players Array
let players = ["c","basic"];

//Weapons array
let weapons = ["web","mobile","desktop","embedded"];

// gameTiles[0].style.backgroundColor = 'blue';
//random generation of background

//Random player 1 & 2 placement generation
let randomPlayer1 = Math.floor(Math.random() * players.length);
let randomPlayer2 = Math.floor(Math.random() * randomPlayer1);

//Generate numbers according to random number generated for Board and Tiles.
let randomBoard = Math.floor(Math.random() * mapBoard.length);
let randomTileP1 = Math.floor(Math.random() * gameTiles.length);
let randomTileP2 = Math.floor(Math.random() * gameTiles.length);

//onload function
window.addEventListener("load", function(){

    //Initialize Player 1  
    gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
    gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
     
    //Initialize Player 2
    gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
    gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
       
    //Initialize weapons in random arrangement
    let weapon1 = Math.floor(Math.random() * gameTiles.length);
    let weapon2 = Math.floor(Math.random() * gameTiles.length);
    let weapon3 = Math.floor(Math.random() * gameTiles.length);
    let weapon4 = Math.floor(Math.random() * gameTiles.length);
    gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
    gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
    gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
    gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";

    //Display blocks in random area
    for(var i = 0; i < 8; i++)
    {
        gameTiles[Math.floor(Math.random() * gameTiles.length)].style.backgroundImage = "url('assets/img/blocks.png')";
    }

    //Initialize Map level
    gameBoard.style.backgroundImage = "url('assets/img/"+mapBoard[randomBoard]+".png')";
    gameBoard.style.backgroundRepeat = "no-repeat";
    gameBoard.style.backgroundSize = "cover";

}, false);