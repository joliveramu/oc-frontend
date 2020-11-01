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

//Variables weapon1-4 initialization
let weapon1, weapon2, weapon3, weapon4;

//Variables Weapon1-4 Access if weapons can still be accessed or not
let weapon1Access = true;
let weapon2Access = true;
let weapon3Access = true;
let weapon4Access = true;

//Tiles array checking
let tileChecker = [];

//Blocks array
let blocksArray = [];

//Generate numbers according to random number generated for Board and Tiles.
let randomBoard = Math.floor(Math.random() * mapBoard.length);
let randomTileP1 = Math.floor(Math.random() * gameTiles.length);
let randomTileP2 = Math.floor(Math.random() * gameTiles.length);


//P1 and P2 control panel
let p1ActionPanel = document.getElementById('p1ActionPanel');
let p2ActionPanel = document.getElementById('p2ActionPanel');

//Player healthBar
let p1 = 100;
let p2 = 100;
let p1Health = document.getElementById('p1Health');
let p2Health = document.getElementById('p2Health');

//For game decision
let gameDecision = document.getElementById('gameDecision');

//Movement count
let tileMovement = 0;
function mapLoad()
{

        //Initialize Map level
        gameBoard.style.backgroundImage = "url('assets/img/"+mapBoard[randomBoard]+".jpg')";
        gameBoard.style.backgroundRepeat = "no-repeat";
        gameBoard.style.backgroundSize = "cover";
    
        console.log("Blocks:");
         //Display blocks in random area
         for(var i = 0; i < 10; i++)
         {
             let randomBlocks = Math.floor(Math.random() * gameTiles.length);
             gameTiles[randomBlocks].style.backgroundImage = "url('assets/img/blocks.png')";
             gameTiles[randomBlocks].style.backgroundRepeat = "no-repeat";
             tileChecker.push(randomBlocks);
             blocksArray.push(randomBlocks);
             console.log(randomBlocks);
         }   
           
        //Initialize weapons in random arrangement
        weapon1 = Math.floor(Math.random() * gameTiles.length);
        weapon2 = Math.floor(Math.random() * gameTiles.length);
        weapon3 = Math.floor(Math.random() * gameTiles.length);
        weapon4 = Math.floor(Math.random() * gameTiles.length);
        gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
        gameTiles[weapon1].style.backgroundRepeat = "no-repeat";

        console.log(`Weapon 1: ${weapon1}`);
        tileChecker.push(weapon1);
    
        gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
        gameTiles[weapon2].style.backgroundRepeat = "no-repeat";
        console.log(`Weapon 2: ${weapon2}`);
        tileChecker.push(weapon2);
    
        gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
        gameTiles[weapon3].style.backgroundRepeat = "no-repeat";
        console.log(`Weapon 3: ${weapon3}`);
        tileChecker.push(weapon3);
    
        gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
        gameTiles[weapon4].style.backgroundRepeat = "no-repeat";
        console.log(`Weapon 4: ${weapon4}`);
        tileChecker.push(weapon4);
    
        //Initialize Player 1  
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
        console.log(`P1: ${randomTileP1}`);
        tileChecker.push(randomTileP1);

        //Initialize Player 2
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
        console.log(`P2: ${randomTileP2}`);
        tileChecker.push(randomTileP2);
}

function gameRestart()
{
    let restartGame = confirm("Would you like to play again?..");
    if(restartGame){
        location.reload();
    }
}

//Check if all tile placement does not repeat on the array
function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
}


// //onload function
window.addEventListener("load",function(){
    mapLoad();
    if(checkIfArrayIsUnique(tileChecker))
    {
        //Do nothing
    }else{
        //Map will reload until nothing of the tiles placement are being duplicated by the blocks
        location.reload();
    }
} , false);
