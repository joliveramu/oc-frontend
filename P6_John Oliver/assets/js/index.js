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

//Tiles array checking
let tileChecker = [];

//Blocks array
let blocksArray = [];

//Generate numbers according to random number generated for Board and Tiles.
let randomBoard = Math.floor(Math.random() * mapBoard.length);
let randomTileP1 = Math.floor(Math.random() * gameTiles.length);
let randomTileP2 = Math.floor(Math.random() * gameTiles.length);


//Player buttons
let btnP1Attack = document.getElementById('btnP1Attack');
let btnP2Attack = document.getElementById('btnP2Attack');

//Player movements
// P1
let btnP1Left = document.getElementById('btnP1Left');
let btnP1Up = document.getElementById('btnP1Up');
let btnP1Right = document.getElementById('btnP1Right');
let btnP1Down = document.getElementById('btnP1Down');

// P2
let btnP2Left = document.getElementById('btnP2Left');
let btnP2Up = document.getElementById('btnP2Up');
let btnP2Right = document.getElementById('btnP2Right');
let btnP2Down = document.getElementById('btnP2Down');

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
        gameBoard.style.backgroundImage = "url('assets/img/"+mapBoard[randomBoard]+".png')";
        gameBoard.style.backgroundRepeat = "no-repeat";
        gameBoard.style.backgroundSize = "cover";
    
        console.log("Blocks:");
         //Display blocks in random area
         for(var i = 0; i < 8; i++)
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
        console.log(`Weapon 1: ${weapon1}`);
        tileChecker.push(weapon1);
    
        gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
        console.log(`Weapon 2: ${weapon2}`);
        tileChecker.push(weapon2);
    
        gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
        console.log(`Weapon 3: ${weapon3}`);
        tileChecker.push(weapon3);
    
        gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
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

function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
}



//onload function
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

btnP1Attack.addEventListener('click',function(){
    if(p2 !== 0)
    {
        p2 -= 10;
        p2Health.textContent = p2;
    }else{
        gameDecision.style.textAlign = "center";
        gameDecision.style.color = "red";
        gameDecision.innerText = "P1 WINS!";
        btnP1Attack.style.display = "none";
        btnP2Attack.style.display = "none";
        gameRestart();
    }
})

btnP2Attack.addEventListener('click',function()
{

    if(p1 !== 0)
    {
        p1 -= 10;
        p1Health.textContent = p1;
    }else{
        gameDecision.style.textAlign = "center";
        gameDecision.style.color = "blue";
        gameDecision.innerText = "P2 WINS!";
        btnP1Attack.style.display = "none";
        btnP2Attack.style.display = "none";
        gameRestart();
    }
})



//Movements
//Player 1

p2ActionPanel.style.visibility = 'hidden';
btnP1Left.addEventListener('click', function(){
    
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1--;

    if((gameTiles.length > randomTileP1 && randomTileP1 < 0) || (blocksArray.includes(randomTileP1)))
    {
        alert("Cannot make any movement.");
        randomTileP1++;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
        
    }else{
        switch(randomTileP1)
        {
            case weapon1:
                alert("Player 1 health increased by 10.");
                p1 += 10;
                p1Health.textContent = p1;
                break;
            case weapon2:
                alert("Player 1 health increased by 15.");
                p1 += 15;
                p1Health.textContent = p1;
                break;
            case weapon3:
                alert("Player 1 health increased by 20.");
                p1 += 20;
                p1Health.textContent = p1;
                break;
            case weapon4:
                alert("Player 1 health increased by 50.");
                p1 += 50;
                p1Health.textContent = p1;
                break;
        }
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2ActionPanel.style.visibility = 'visible';
            p1ActionPanel.style.visibility = 'hidden';
        }
    }
});

btnP1Up.addEventListener('click', function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1 -= 12;
    if((gameTiles.length > randomTileP1 && randomTileP1 < 0) || blocksArray.includes(randomTileP1))
    {
        alert("P1 Cannot make any movement.");
        randomTileP1 += 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
    }else{
        switch(randomTileP1)
        {
            case weapon1:
                alert("Player 1 health increased by 10.");
                p1 += 10;
                p1Health.textContent = p1;
                break;
            case weapon2:
                alert("Player 1 health increased by 15.");
                p1 += 15;
                p1Health.textContent = p1;
                break;
            case weapon3:
                alert("Player 1 health increased by 20.");
                p1 += 20;
                p1Health.textContent = p1;
                break;
            case weapon4:
                alert("Player 1 health increased by 50.");
                p1 += 50;
                p1Health.textContent = p1;
                break;
        }
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2ActionPanel.style.visibility = 'visible';
            p1ActionPanel.style.visibility = 'hidden';
        }
    }
});

btnP1Right.addEventListener('click', function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1++;
    if((gameTiles.length <= randomTileP1) || blocksArray.includes(randomTileP1))
    {
        alert("P1 Cannot make any movement.");
        randomTileP1--;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
    }else{
        switch(randomTileP1)
        {
            case weapon1:
                alert("Player 1 health increased by 10.");
                p1 += 10;
                p1Health.textContent = p1;
                break;
            case weapon2:
                alert("Player 1 health increased by 15.");
                p1 += 15;
                p1Health.textContent = p1;
                break;
            case weapon3:
                alert("Player 1 health increased by 20.");
                p1 += 20;
                p1Health.textContent = p1;
                break;
            case weapon4:
                alert("Player 1 health increased by 50.");
                p1 += 50;
                p1Health.textContent = p1;
                break;
        }
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2ActionPanel.style.visibility = 'visible';
            p1ActionPanel.style.visibility = 'hidden';
        }
    }
});

btnP1Down.addEventListener('click', function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1 += 12;
    if((gameTiles.length <= randomTileP1) || blocksArray.includes(randomTileP1))
    {
        alert("P1 Cannot make any movement.");
        randomTileP1 -= 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
    }else{
        switch(randomTileP1)
        {
            case weapon1:
                alert("Player 1 health increased by 10.");
                p1 += 10;
                p1Health.textContent = p1;
                break;
            case weapon2:
                alert("Player 1 health increased by 15.");
                p1 += 15;
                p1Health.textContent = p1;
                break;
            case weapon3:
                alert("Player 1 health increased by 20.");
                p1 += 20;
                p1Health.textContent = p1;
                break;
            case weapon4:
                alert("Player 1 health increased by 50.");
                p1 += 50;
                p1Health.textContent = p1;
                break;
        }
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2ActionPanel.style.visibility = 'visible';
            p1ActionPanel.style.visibility = 'hidden';
        }
    }
});

//Player 2
btnP2Left.addEventListener('click', function(){

    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2--;
    if((gameTiles.length > randomTileP2 && randomTileP2 < 0) || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2++;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else{
        switch(randomTileP2)
        {
            case weapon1:
                alert("Player 2 health increased by 10.");
                p2 += 10;
                p2Health.textContent = p2;
                break;
            case weapon2:
                alert("Player 2 health increased by 15.");
                p2 += 15;
                p2Health.textContent = p2;
                break;
            case weapon3:
                alert("Player 2 health increased by 20.");
                p2 += 20;
                p2Health.textContent = p2;
                break;
            case weapon4:
                alert("Player 2 health increased by 50.");
                p2 += 50;
                p2Health.textContent = p2;
                break;
        }
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1ActionPanel.style.visibility = 'visible';
            p2ActionPanel.style.visibility = 'hidden';
        }
    }
});

btnP2Up.addEventListener('click', function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2 -= 12;
    if((gameTiles.length > randomTileP2 && randomTileP2 < 0) || blocksArray.includes(randomTileP2) )
    {
        alert("P2 Cannot make any movement.");
        randomTileP2 += 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else{
        switch(randomTileP2)
        {
            case weapon1:
                alert("Player 2 health increased by 10.");
                p2 += 10;
                p2Health.textContent = p2;
                break;
            case weapon2:
                alert("Player 2 health increased by 15.");
                p2 += 15;
                p2Health.textContent = p2;
                break;
            case weapon3:
                alert("Player 2 health increased by 20.");
                p2 += 20;
                p2Health.textContent = p2;
                break;
            case weapon4:
                alert("Player 2 health increased by 50.");
                p2 += 50;
                p2Health.textContent = p2;
                break;
        }
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1ActionPanel.style.visibility = 'visible';
            p2ActionPanel.style.visibility = 'hidden';
        }
    }
});

btnP2Right.addEventListener('click', function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2++;
    if((gameTiles.length <= randomTileP2) || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2--;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else{
        switch(randomTileP2)
        {
            case weapon1:
                alert("Player 2 health increased by 10.");
                p2 += 10;
                p2Health.textContent = p2;
                break;
            case weapon2:
                alert("Player 2 health increased by 15.");
                p2 += 15;
                p2Health.textContent = p2;
                break;
            case weapon3:
                alert("Player 2 health increased by 20.");
                p2 += 20;
                p2Health.textContent = p2;
                break;
            case weapon4:
                alert("Player 2 health increased by 50.");
                p2 += 50;
                p2Health.textContent = p2;
                break;
        }
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1ActionPanel.style.visibility = 'visible';
            p2ActionPanel.style.visibility = 'hidden';
        }
    }
});

btnP2Down.addEventListener('click', function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2 += 12;
    if((gameTiles.length <= randomTileP2) || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2 -= 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else{
        switch(randomTileP2)
        {
            case weapon1:
                alert("Player 2 health increased by 10.");
                p2 += 10;
                p2Health.textContent = p2;
                break;
            case weapon2:
                alert("Player 2 health increased by 15.");
                p2 += 15;
                p2Health.textContent = p2;
                break;
            case weapon3:
                alert("Player 2 health increased by 20.");
                p2 += 20;
                p2Health.textContent = p2;
                break;
            case weapon4:
                alert("Player 2 health increased by 50.");
                p2 += 50;
                p2Health.textContent = p2;
                break;
        }
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)   
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1ActionPanel.style.visibility = 'visible';
            p2ActionPanel.style.visibility = 'hidden';
        }
    }
});