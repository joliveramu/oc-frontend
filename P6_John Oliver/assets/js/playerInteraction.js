//Player movements

let p1Attack = 10;
let p2Attack = 10;
let p1Defense = false;
let p2Defense = false;

//Check P1 Tile touches the weapons' tiles.
function p1WeaponsChecker(p1Tile)
{
    switch(p1Tile)
    {
        case weapon1:
            if(weapon1Access)
            {
                weapon1Access = false;
                p1Attack = 10;
                p1Attack += 10;
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P1 Attack +10");
                console.log(`Player 1 Attack is: ${p1Attack}`);
            }
            break;
        case weapon2:
            if(weapon2Access)
            {
                weapon2Access = false;
                p1Attack = 10;
                p1Attack += 15;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P1 Attack +15");
                console.log(`Player 1 Attack is: ${p1Attack}`);
            }
            break;
        case weapon3:
            if(weapon3Access)
            {
                weapon3Access = false;
                p1Attack = 10;
                p1Attack += 20;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P1 Attack +20");
                console.log(`Player 1 Attack is: ${p1Attack}`);
            }
            break;
        case weapon4:
            if(weapon4Access)
            {
                weapon4Access = false;
                p1Attack = 10;
                p1Attack += 50;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                alert("P1 Attack +50");
                console.log(`Player 1 Attack is: ${p1Attack}`);
            }
            break;
        default:
                break;
    }
}

function p2WeaponsChecker(p2Tile)
{
    switch(p2Tile)
    {
        case weapon1:
            if(weapon1Access)
            {
                weapon1Access = false;
                p2Attack = 10;
                p2Attack += 10;
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P2 Attack +10");
                console.log(`Player 2 Attack is: ${p2Attack}`);
            }
            break;
        case weapon2:
            if(weapon2Access)
            {
                weapon2Access = false;
                p2Attack = 10;
                p2Attack += 15;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P2 Attack +15");
                console.log(`Player 2 Attack is: ${p2Attack}`);
            }
            break;
        case weapon3:
            if(weapon3Access)
            {
                weapon3Access = false;
                p2Attack = 10;
                p2Attack += 20;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon4Access = true;
                gameTiles[weapon4].style.backgroundImage = "url('assets/img/"+weapons[3]+".png')";
                alert("P2 Attack +20");
                console.log(`Player 2 Attack is: ${p2Attack}`);
            }
            break;
        case weapon4:
            if(weapon4Access)
            {
                weapon4Access = false;
                p2Attack = 10;
                p2Attack += 50;
                weapon1Access = true;
                gameTiles[weapon1].style.backgroundImage = "url('assets/img/"+weapons[0]+".png')";
                weapon2Access = true;
                gameTiles[weapon2].style.backgroundImage = "url('assets/img/"+weapons[1]+".png')";
                weapon3Access = true;
                gameTiles[weapon3].style.backgroundImage = "url('assets/img/"+weapons[2]+".png')";
                alert("P1 Attack +50");
                console.log(`Player 2 Attack is: ${p2Attack}`);
            }
            break;
        default:
            break;
    }
}

$('#btnP1Attack').click(function(){
           
                console.log(p2Defense);
                if(p2Defense)
                {
                    p2 -= p1Attack * 0.5;
                    p2Health.textContent = p2;
                    p1AttackPanel.style.visibility = "hidden";
                    player2.style.visibility = "visible";
                    p2AttackPanel.style.visibility = "visible";
                    console.log(`P2 health is: ${p2}`);
                    p2Defense = false;
                }else{
                    p2 -= p1Attack;
                    p2Health.textContent = p2;
                    p1AttackPanel.style.visibility = "hidden";
                    player2.style.visibility = "visible";
                    p2AttackPanel.style.visibility = "visible";
                    console.log(`P2 health is: ${p2}`);
                }
               
                
            
                if(p2 <= 0)
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

$('#btnP1Defend').click(function(){
    p1Defense = true;
    p1AttackPanel.style.visibility = "hidden";
    player2.style.visibility = "visible";
    p2AttackPanel.style.visibility = "visible";
});

$('#btnP2Defend').click(function(){
    p2Defense = true;
    p2AttackPanel.style.visibility = "hidden";
    player1.style.visibility = "visible";
    p1AttackPanel.style.visibility = "visible";
});

$('#btnP2Attack').click(function(){
        
            console.log(p1Defense);
            if(p1Defense)
            {
                // p2Attack /= 2;
                console.log(`P1 health is: ${p1}`);
                p1 -= p2Attack * 0.5;
                p1Health.textContent = p1;
                p2AttackPanel.style.visibility = "hidden";
                player1.style.visibility = "visible";
                p1AttackPanel.style.visibility = "visible";
                console.log(`P1 health is: ${p1}`);
                p1Defense = false;
            }else{
                console.log(`P1 health is: ${p1}`);
                p1 -= p2Attack;
                p1Health.textContent = p1;
                p2AttackPanel.style.visibility = "hidden";
                player1.style.visibility = "visible";
                p1AttackPanel.style.visibility = "visible";
                console.log(`P1 health is: ${p1}`);
            }
            
            
            if(p1 <= 0)
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



//Movements
//Player 1
//Added another condition if player 1 and player 2 tiles are the same, they will be engaging for a battle

$('#p1AttackPanel').css("visibility","hidden");
$('#p2AttackPanel').css("visibility","hidden");
$('#player2').css("visibility","hidden");

$('#btnP1Left').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1--;

    if((gameTiles.length > randomTileP1 && randomTileP1 < 0) 
    || (blocksArray.includes(randomTileP1)))
    {
        alert("Cannot make any movement.");
        randomTileP1++;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
        
    }else if(randomTileP1 === (randomTileP2 + 2))
    {
        alert("Engaging enemy P2");
        // randomTileP1++;
        randomTileP1--;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
        p1ActionPanel.style.visibility = "visible";
        p1AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
        
    }else{
        p1WeaponsChecker(randomTileP1);
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(`Player 1 @ ${randomTileP1}`);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            // p2ActionPanel.style.visibility = 'visible';
            // p1ActionPanel.style.visibility = 'hidden';
            player2.style.visibility = "visible";
            player1.style.visibility = "hidden";
        }
    }
});

$('#btnP1Right').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1++;
    if((gameTiles.length <= randomTileP1) 
    || blocksArray.includes(randomTileP1)
    )
    {
        alert("P1 Cannot make any movement.");
        randomTileP1--;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
    }else if(randomTileP1 === (randomTileP2 - 2))
    {
            alert("Engaging enemy P2");
            // randomTileP1--;
            randomTileP1++;
            gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
            console.log(`Player 1 @ ${randomTileP1}`);
            p1ActionPanel.style.visibility = "visible";
            p1AttackPanel.style.visibility = "visible";
            player1Actions.style.visibility = "hidden";
            player2Actions.style.visibility = "hidden";
    }else{
        p1WeaponsChecker(randomTileP1);
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            // p2ActionPanel.style.visibility = 'visible';
            // p1ActionPanel.style.visibility = 'hidden';
            player2.style.visibility = "visible";
            player1.style.visibility = "hidden";
        }
    }
});

$('#btnP1Up').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1 -= 12;
    if((gameTiles.length > randomTileP1 && randomTileP1 < 0) 
    || blocksArray.includes(randomTileP1)
    )
    {
        alert("P1 Cannot make any movement.");
        randomTileP1 += 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
       
    }else if(randomTileP1 === (randomTileP2 + 12))
    {
        alert("Engaging enemy P2");
        // randomTileP1 += 12;
        // randomTileP1 -= 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
        p1ActionPanel.style.visibility = "visible";
        p1AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
    }else{
        p1WeaponsChecker(randomTileP1);
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(`Player 1 @ ${randomTileP1}`);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            // p2ActionPanel.style.visibility = 'visible';
            // p1ActionPanel.style.visibility = 'hidden';
            player2.style.visibility = "visible";
            player1.style.visibility = "hidden";
        }
    }
});

$('#btnP1Down').click(function(){
    gameTiles[randomTileP1].style.backgroundImage = "none";
    console.log(randomTileP1);
    randomTileP1 += 12;
    if((gameTiles.length <= randomTileP1) 
    || blocksArray.includes(randomTileP1)
    )
    {
        alert("P1 Cannot make any movement.");
        randomTileP1 -= 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
       
    }else if(randomTileP1 === (randomTileP2 - 12))
    {
        alert("Engaging enemy P2");
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(`Player 1 @ ${randomTileP1}`);
        p1ActionPanel.style.visibility = "visible";
        p1AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
    }else{
        p1WeaponsChecker(randomTileP1);
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(`Player 1 @ ${randomTileP1}`);
        if(tileMovement == 3)
        {
            alert("Player 2 should now move");
            tileMovement = 0;
            // p2ActionPanel.style.visibility = 'visible';
            // p1ActionPanel.style.visibility = 'hidden';
            player2.style.visibility = "visible";
            player1.style.visibility = "hidden";
        }
    }
});


//Player 2

$('#btnP2Left').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2--;
    if((gameTiles.length > randomTileP2 && randomTileP2 < 0) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2++;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else if (randomTileP2 === (randomTileP1 + 2)){
        alert("Engaging P1");
        // randomTileP2++;
        randomTileP2--;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
    }else{
        p2WeaponsChecker(randomTileP2);
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            // p1ActionPanel.style.visibility = 'visible';
            // p2ActionPanel.style.visibility = 'hidden';
            player1.style.visibility = "visible";
            player2.style.visibility = "hidden";
        }
    }
});

$('#btnP2Right').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2++;
    if((gameTiles.length <= randomTileP2) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2--;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else if (randomTileP2 === (randomTileP1 - 2)){
        alert("Engaging P1");
        randomTileP2++;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
    }else{
        p2WeaponsChecker(randomTileP2);
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            // p1ActionPanel.style.visibility = 'visible';
            // p2ActionPanel.style.visibility = 'hidden';
            player1.style.visibility = "visible";
            player2.style.visibility = "hidden";
        }
    }
});

$('#btnP2Up').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2 -= 12;
    if((gameTiles.length > randomTileP2 && randomTileP2 < 0) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2 += 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else if (randomTileP2 === (randomTileP1 + 12)){
        alert("Engaging P1");
        // randomTileP2 += 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
    }else{
        p2WeaponsChecker(randomTileP2);
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            // p1ActionPanel.style.visibility = 'visible';
            // p2ActionPanel.style.visibility = 'hidden';
            player1.style.visibility = "visible";
            player2.style.visibility = "hidden";
        }
    }
});

$('#btnP2Down').click(function(){
    gameTiles[randomTileP2].style.backgroundImage = "none";
    console.log(randomTileP2);
    randomTileP2 += 12;
    if((gameTiles.length <= randomTileP2) 
    || blocksArray.includes(randomTileP2))
    {
        alert("P2 Cannot make any movement.");
        randomTileP2 -= 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
    }else if (randomTileP2 === (randomTileP1 - 12)){
        alert("Engaging P1");
        // randomTileP2 -= 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
        player1Actions.style.visibility = "hidden";
        player2Actions.style.visibility = "hidden";
    }else{
        p2WeaponsChecker(randomTileP2);
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
        tileMovement++;
        console.log(tileMovement);
        if(tileMovement == 3)   
        {
            alert("Player 1 should now move");
            tileMovement = 0;
            // p1ActionPanel.style.visibility = 'visible';
            // p2ActionPanel.style.visibility = 'hidden';
            player1.style.visibility = "visible";
            player2.style.visibility = "hidden";
        }
    }
});
