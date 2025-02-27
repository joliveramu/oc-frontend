//Player movements

//This function will check if players are near to each other
function playerNearTileCheck(player1, player2)
{
    if(player1 === (player2 + 1))
    {
        return true;
    }else if(player2 === (player1 + 1))
    {
        return true;
    }else if(player1 === (player2 - 1))
    {
        return true;
    }else if(player2 === (player1 - 1)){

        return true;
    }else if(player1 === (player2 + 12))
    {
        return true;
    }else if(player2 === (player1 + 12))
    {
        return true;
    }else if(player1 === (player2 - 12))
    {
        return true;
    }else if(player2 === (player1 - 12)){
        return true;
    }
}

//Check P1 Tile touches the weapons' tiles.
function p1WeaponsChecker(p1Tile)
{
    switch(p1Tile)
    {
        case weapon1:
            if(weapon1Access)
            {
                weapon1Access = false;
                p1.attackPoint = 20;
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P1 Attack is now 20!");
                console.log(`Player 1 Attack is: ${p1.attackPoint}`);
                P1Positioning();
                P2Positioning();
            }
            break;
        case weapon2:
            if(weapon2Access)
            {
                weapon2Access = false;
                p1.attackPoint = 30;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P1 Attack is now 30!");
                console.log(`Player 1 Attack is: ${p1.attackPoint}`);
                P1Positioning();
                P2Positioning();
            }
            break;
        case weapon3:
            if(weapon3Access)
            {
                weapon3Access = false;
                p1.attackPoint = 40;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P1 Attack is now 40!");
                console.log(`Player 1 Attack is: ${p1.attackPoint}`);
                P1Positioning();
                P2Positioning();
            }
            break;
        case weapon4:
            if(weapon4Access)
            {
                weapon4Access = false;
                p1.attackPoint = 50;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                alert("P1 Attack is now 50!");
                console.log(`Player 1 Attack is: ${p1.attackPoint}`);
                P1Positioning();
                P2Positioning();
            }
            break;
        default:
            break;
    }
}

//Check P2 Tile touches the weapons' tiles.
function p2WeaponsChecker(p2Tile)
{
    switch(p2Tile)
    {
        case weapon1:
            if(weapon1Access)
            {
                weapon1Access = false;
                p2.attackPoint = 20;
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P2 Attack is now 20!");
                console.log(`Player 2 Attack is: ${p2.attackPoint}`);
                P2Positioning();
                P1Positioning();
            }
            break;
        case weapon2:
            if(weapon2Access)
            {
                weapon2Access = false;
                p2.attackPoint = 30;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P2 Attack is now 30!");
                console.log(`Player 2 Attack is: ${p2.attackPoint}`);
                P2Positioning();
                P1Positioning();
            }
            break;
        case weapon3:
            if(weapon3Access)
            {
                weapon3Access = false;
                p2.attackPoint = 40;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P2 Attack is now 40!");
                console.log(`Player 2 Attack is: ${p2.attackPoint}`);
                P2Positioning();
                P1Positioning();
            }
            break;
        case weapon4:
            if(weapon4Access)
            {
                weapon4Access = false;
                p2.attackPoint = 50;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                alert("P2 Attack is now 50!");
                console.log(`Player 2 Attack is: ${p2.attackPoint}`);
                P2Positioning();
                P1Positioning();
            }
            break;
        default:
            break;
    }
}

//P1 Panel Visibility
var p1PanelVisibility = () => 
{
    p2AttackPanel.style.visibility = "hidden";
    player1.style.visibility = "visible";
    p1AttackPanel.style.visibility = "visible";
}
  
//P2 Panel Visibility
var p2PanelVisibility = () => 
{
    p1AttackPanel.style.visibility = "hidden";
    player2.style.visibility = "visible";
    p2AttackPanel.style.visibility = "visible";
}

//P1 Attack
$('#btnP1Attack').click(function(){
           
                console.log(p2.defense);
                if(p2.defense)
                {
                    p2.health -= p1.attackPoint * 0.5;
                    p2Health.textContent -= p1.attackPoint * 0.5;
                    p2PanelVisibility();
                    console.log(`P2 health is: ${p2.health}`);
                    p2.defense = false;
                }else{
                    p2.health -= p1.attackPoint;
                    p2PanelVisibility();
                    console.log(`P2 health is: ${p2.health}`);
                }
               
                p2Health.textContent = p2.health;
            
                if(p2.health <= 0)
                {
                    alert("Player 1 Wins!");
                    gameDecision.style.textAlign = "center";
                    gameDecision.style.color = "red";
                    gameDecision.innerText = "P1 WINS!";
                    btnP1Attack.style.display = "none";
                    btnP2Attack.style.display = "none";
                    gameRestart();
                }
               
            
});

//P2 Attack
$('#btnP2Attack').click(function(){
        
            console.log(p1.defense);
            if(p1.defense)
            {
                console.log(`P1 health is: ${p1.health}`);
                p1.health -= p2.attackPoint * 0.5;
                p1PanelVisibility();
                console.log(`P1 health is: ${p1.health}`);
                p1.defense = false;
            }else{
                console.log(`P1 health is: ${p1.health}`);
                p1.health -= p2.attackPoint;
                p1PanelVisibility();
                console.log(`P1 health is: ${p1.health}`);
            }
            p1Health.textContent = p1.health;
            
            if(p1.health <= 0)
            {
                alert("Player 2 Wins!");
                gameDecision.style.textAlign = "center";
                gameDecision.style.color = "blue";
                gameDecision.innerText = "P2 WINS!";
                btnP1Attack.style.display = "none";
                btnP2Attack.style.display = "none";
                gameRestart();
            }
           
});

//P1 Defend
$('#btnP1Defend').click(function(){
    p1.defense = true;
    p2PanelVisibility();
});

//P2 Defend
$('#btnP2Defend').click(function(){
    p2.defense = true;
    p1PanelVisibility();
});

//P2 Visibility
let p2Visibility = () =>
{
    player1.style.visibility = "hidden";
    player2.style.visibility = "visible";
}

//P1 Visibility
let p1Visibility = () =>
{
    player1.style.visibility = "visible";
    player2.style.visibility = "hidden";
}

//P1 Engage visibility
let p1EngageVisibility = () =>
{
    $('#player1').css("visibility","visible");
    p1ActionPanel.style.visibility = "visible";
    p1AttackPanel.style.visibility = "visible";
    player1Actions.style.visibility = "hidden";
    player2Actions.style.visibility = "hidden";
}

//P2 Engage visibility
let p2EngageVisibility = () =>
{
    $('#player2').css("visibility","visible");
    p2ActionPanel.style.visibility = "visible";
    p2AttackPanel.style.visibility = "visible";
    player1Actions.style.visibility = "hidden";
    player2Actions.style.visibility = "hidden";
}

// Checks if the player 1 is diagonal to player 2
let P1diagonalChecker = (p1Tile) =>
{
    if((p1Tile + 11) === randomTileP2 || (p1Tile + 13) === randomTileP2)
    {
        // alert("P1 Engaging P2 Diagonal 1");
        console.log(`Player 2 @ ${randomTileP1}`);
        return true;
    }else if((p1Tile - 11) === randomTileP2 || (p1Tile - 13) === randomTileP2)
    {
        // alert("P1 Engaging P2 Diagonal 2");
        console.log(`Player 2 @ ${randomTileP1}`);
        return true;
    }
}

// Checks if the player 2 is diagonal to player 1
let P2diagonalChecker = (p2Tile) =>
{
    if((p2Tile + 11) === randomTileP1 || (p2Tile + 13) === randomTileP1)
    {
        // alert("P2 Engaging P1 Diagonal 1");
        console.log(`Player 2 @ ${randomTileP2}`);
        return true;
    }else if((p2Tile - 11) === randomTileP1 || (p2Tile - 13) === randomTileP1)
    {
        // alert("P2 Engaging P1 Diagonal 2");
        console.log(`Player 2 @ ${randomTileP2}`);
        return true;
    }
}

//P1 Positioning
let P1Positioning = () =>
{
    gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
    gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
}

//P2 Positioning
let P2Positioning = () =>
{
    gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
    gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
}


//Movements
//Player 1
//Added another condition if player 1 and player 2 tiles are the same, they will be engaging for a battle

$('#p1AttackPanel').css("visibility","hidden");
$('#p2AttackPanel').css("visibility","hidden");
$('#player2').css("visibility","hidden");

//Player 1 Left movement
$('#btnP1Left').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1--;

    if((gameTiles.length > randomTileP1 && randomTileP1 < 0) 
    || (blocksArray.includes(randomTileP1)))
    {
        alert("Cannot make any movement.");
        randomTileP1++;
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
        
    }else if(randomTileP1 === (randomTileP2 + 1)  || P1diagonalChecker(randomTileP1))
    {
        alert("Engaging enemy P2");
        // randomTileP1--;
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
        p2EngageVisibility();
    }else{
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        tileMovement++;
        console.log(`Player 1 @ ${randomTileP1}`);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2Visibility();
        }
    }
});

//Player 1 Right movement
$('#btnP1Right').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    randomTileP1++;
    if((gameTiles.length <= randomTileP1) 
    || blocksArray.includes(randomTileP1)
    )
    {
        alert("P1 Cannot make any movement.");
        randomTileP1--;
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
    }else if(randomTileP1 === (randomTileP2 - 1) || P1diagonalChecker(randomTileP1))
    {
            alert("Engaging enemy P2");
            // randomTileP1++;
            p1WeaponsChecker(randomTileP1);
            P1Positioning();
            console.log(`Player 1 @ ${randomTileP1}`);
            p2EngageVisibility();
    }else{
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2Visibility();
        }
    }
});

//Player 1 Up movement
$('#btnP1Up').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    randomTileP1 -= 12;
    if((gameTiles.length > randomTileP1 && randomTileP1 < 0) 
    || blocksArray.includes(randomTileP1)
    )
    {
        alert("P1 Cannot make any movement.");
        randomTileP1 += 12;
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
       
    }else if(randomTileP1 === (randomTileP2 + 12)  || P1diagonalChecker(randomTileP1))
    {
        alert("Engaging enemy P2");
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
        p2EngageVisibility();
    }else{
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        tileMovement++;
        console.log(`Player 1 @ ${randomTileP1}`);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2Visibility();
        }
    }
});

//Player 1 Down movement
$('#btnP1Down').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    randomTileP1 += 12;
    if((gameTiles.length <= randomTileP1) 
    || blocksArray.includes(randomTileP1))
    {
        alert("P1 Cannot make any movement.");
        randomTileP1 -= 12;
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
    }else if(randomTileP1 === (randomTileP2 - 12)  || P1diagonalChecker(randomTileP1))
    {
        alert("Engaging enemy P2");
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        console.log(`Player 1 @ ${randomTileP1}`);
        p2EngageVisibility();
    }else{
        p1WeaponsChecker(randomTileP1);
        P1Positioning();
        tileMovement++;
        console.log(`Player 1 @ ${randomTileP1}`);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            p2Visibility();
        }
    }
});


//Player 2

//Player 2 Left movement
$('#btnP2Left').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    randomTileP2--;
    if((gameTiles.length > randomTileP2 && randomTileP2 < 0) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2++;
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
    }else if (randomTileP2 === (randomTileP1 + 1) || P2diagonalChecker(randomTileP2)){
        alert("Engaging P1");
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
        p1EngageVisibility();
    }else{
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        tileMovement++;
        console.log(`Player 2 @ ${randomTileP2}`);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1Visibility();
        }
    }
});

//Player 2 Right movement
$('#btnP2Right').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    randomTileP2++;
    if((gameTiles.length <= randomTileP2) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2--;
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
    }else if (randomTileP2 === (randomTileP1 - 1) || P2diagonalChecker(randomTileP2)){
        alert("Engaging P1");
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
        p1EngageVisibility();
    }else{
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        tileMovement++;
        console.log(`Player 2 @ ${randomTileP2}`);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1Visibility();
        }
    }
});

//Player 2 Up movement
$('#btnP2Up').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    randomTileP2 -= 12;
    if((gameTiles.length > randomTileP2 && randomTileP2 < 0) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2 += 12;
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
    }else if (randomTileP2 === (randomTileP1 + 12) || P2diagonalChecker(randomTileP2)){
        alert("Engaging P1");
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
        p1EngageVisibility();
    }else{
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        tileMovement++;
        console.log(`Player 2 @ ${randomTileP2}`);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1Visibility();
        }
    }
});

//Player 2 Down movement
$('#btnP2Down').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    randomTileP2 += 12;
    if((gameTiles.length <= randomTileP2) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2 -= 12;
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
    }else if (randomTileP2 === (randomTileP1 - 12) || P2diagonalChecker(randomTileP2)){
        alert("Engaging P1");
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        console.log(`Player 2 @ ${randomTileP2}`);
        p1EngageVisibility();
    }else{
        p2WeaponsChecker(randomTileP2);
        P2Positioning();
        tileMovement++;
        console.log(`Player 2 @ ${randomTileP2}`);
        if(tileMovement == 3)   
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            p1Visibility();
        }
    }
});
