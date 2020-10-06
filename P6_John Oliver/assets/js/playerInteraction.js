//Player movements
// P1
// let btnP1Left = document.getElementById('btnP1Left');
// let btnP1Up = document.getElementById('btnP1Up');
// let btnP1Right = document.getElementById('btnP1Right');
// let btnP1Down = document.getElementById('btnP1Down');

// P2
// let btnP2Left = document.getElementById('btnP2Left');
// let btnP2Up = document.getElementById('btnP2Up');
// let btnP2Right = document.getElementById('btnP2Right');
// let btnP2Down = document.getElementById('btnP2Down');


//Player buttons
// let btnP1Attack = document.getElementById('btnP1Attack');
// let btnP2Attack = document.getElementById('btnP2Attack');


//Check if all tile placement does not repeat on the array
function checkIfArrayIsUnique(myArray) {
    return myArray.length === new Set(myArray).size;
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
                alert("Player 1 health increased by 10.");
                p1 += 10;
                p1Health.textContent = p1;
            }
            break;
        case weapon2:
            if(weapon2Access)
            {
                weapon2Access = false;
                alert("Player 1 health increased by 15.");
                p1 += 15;
                p1Health.textContent = p1;
            }
            break;
        case weapon3:
            if(weapon3Access)
            {
                weapon3Access = false;
                alert("Player 1 health increased by 20.");
                p1 += 20;
                p1Health.textContent = p1;
            }
            break;
        case weapon4:
            if(weapon4Access)
            {
                weapon4Access = false;
                alert("Player 1 health increased by 50.");
                p1 += 50;
                p1Health.textContent = p1;
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
                alert("Player 2 health increased by 10.");
                p2 += 10;
                p2Health.textContent = p2;
            }
            break;
        case weapon2:
            if(weapon2Access)
            {
                weapon2Access = false;
                alert("Player 2 health increased by 15.");
                p2 += 15;
                p2Health.textContent = p2;
            }
            break;
        case weapon3:
            if(weapon3Access)
            {
                weapon3Access = false;
                alert("Player 2 health increased by 20.");
                p2 += 20;
                p2Health.textContent = p2;
            }
            break;
        case weapon4:
            if(weapon4Access)
            {
                weapon4Access = false;
                alert("Player 2 health increased by 50.");
                p2 += 50;
                p2Health.textContent = p2;
            }
            break;
        default:
            break;
    }
}


//This function is to be used for the defend feature. If defend is success, attacking player's attack
//will be missed.
function defendSuccess()
{
    let decision = Math.random() >= 0.5 ? true : false;

    return decision;
}

$('#btnP1Attack').click(function(){
    if(p2 !== 0)
            {
                p2 -= 10;
                p2Health.textContent = p2;
                p1AttackPanel.style.visibility = "hidden";
                player2.style.visibility = "visible";
                p2AttackPanel.style.visibility = "visible";
            }else{
                gameDecision.style.textAlign = "center";
                gameDecision.style.color = "red";
                gameDecision.innerText = "P1 WINS!";
                btnP1Attack.style.display = "none";
                btnP2Attack.style.display = "none";
                gameRestart();
            }
});

$('#btnP2Attack').click(function(){
    if(p1 !== 0)
        {
            p1 -= 10;
            p1Health.textContent = p1;
            p2AttackPanel.style.visibility = "hidden";
            player1.style.visibility = "visible";
            p1AttackPanel.style.visibility = "visible";
        }else{
            gameDecision.style.textAlign = "center";
            gameDecision.style.color = "blue";
            gameDecision.innerText = "P2 WINS!";
            btnP1Attack.style.display = "none";
            btnP2Attack.style.display = "none";
            gameRestart();
        }
});

// btnP1Attack.addEventListener('click',function(){
//     // if(defendSuccess())
//     // {
//         if(p2 !== 0)
//         {
//             p2 -= 10;
//             p2Health.textContent = p2;
//             p1AttackPanel.style.visibility = "hidden";
//             player2.style.visibility = "visible";
//             p2AttackPanel.style.visibility = "visible";
//         }else{
//             gameDecision.style.textAlign = "center";
//             gameDecision.style.color = "red";
//             gameDecision.innerText = "P1 WINS!";
//             btnP1Attack.style.display = "none";
//             btnP2Attack.style.display = "none";
//             gameRestart();
//         }
//     // }else{
//     //     p2 -= (10 * 0.5);
//     //     p2Health.textContent = p2;
//     // }
    
// })

// btnP2Attack.addEventListener('click',function()
// {
//     // if(defendSuccess())
//     // {
//         if(p1 !== 0)
//         {
//             p1 -= 10;
//             p1Health.textContent = p1;
//             p2AttackPanel.style.visibility = "hidden";
//             player1.style.visibility = "visible";
//             p1AttackPanel.style.visibility = "visible";
//         }else{
//             gameDecision.style.textAlign = "center";
//             gameDecision.style.color = "blue";
//             gameDecision.innerText = "P2 WINS!";
//             btnP1Attack.style.display = "none";
//             btnP2Attack.style.display = "none";
//             gameRestart();
//         }
//     // }else{
//     //     p1 -= (10 * 0.5);
//     //     p1Health.textContent = p1;
//     // }
// })

//Movements
//Player 1
//Added another condition if player 1 and player 2 tiles are the same, they will be engaging for a battle

// p1AttackPanel.style.visibility = 'hidden';
// p2AttackPanel.style.visibility = 'hidden';
// player2.style.visibility = "hidden";
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
        console.log(randomTileP1);
        
    }else if(randomTileP1 === randomTileP2)
    {
        alert("Engaging enemy P2");
        randomTileP1++;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
        p1ActionPanel.style.visibility = "visible";
        p1AttackPanel.style.visibility = "visible";
        
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
        console.log(randomTileP1);
    }else if(randomTileP1 === randomTileP2)
    {
            alert("Engaging enemy P2");
            randomTileP1--;
            gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
            console.log(randomTileP1);
            p1ActionPanel.style.visibility = "visible";
            p1AttackPanel.style.visibility = "visible";
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
        console.log(randomTileP1);
       
    }else if(randomTileP1 === randomTileP2)
    {
            alert("Engaging enemy P2");
            randomTileP1 += 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
        p1ActionPanel.style.visibility = "visible";
        p1AttackPanel.style.visibility = "visible";
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
        console.log(randomTileP1);
       
    }else if(randomTileP1 === randomTileP2)
    {
            alert("Engaging enemy P2");
            randomTileP1 -= 12;
        gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
        console.log(randomTileP1);
        p1ActionPanel.style.visibility = "visible";
        p1AttackPanel.style.visibility = "visible";
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

// btnP1Left.addEventListener('click', function(){
    
//     gameTiles[randomTileP1].style.backgroundImage = "none";
//     console.log(randomTileP1);
//     randomTileP1--;

//     if((gameTiles.length > randomTileP1 && randomTileP1 < 0) 
//     || (blocksArray.includes(randomTileP1)))
//     {
//         alert("Cannot make any movement.");
//         randomTileP1++;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
        
//     }else if(randomTileP1 === randomTileP2)
//     {
//         alert("Engaging enemy P2");
//         randomTileP1++;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
//         p1ActionPanel.style.visibility = "visible";
//         p1AttackPanel.style.visibility = "visible";
        
//     }else{
//         p1WeaponsChecker(randomTileP1);
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 2 should now move");
//             tileMovement = 0;
//             // p2ActionPanel.style.visibility = 'visible';
//             // p1ActionPanel.style.visibility = 'hidden';
//             player2.style.visibility = "visible";
//             player1.style.visibility = "hidden";
//         }
//     }
// });

// btnP1Up.addEventListener('click', function(){
//     gameTiles[randomTileP1].style.backgroundImage = "none";
//     console.log(randomTileP1);
//     randomTileP1 -= 12;
//     if((gameTiles.length > randomTileP1 && randomTileP1 < 0) 
//     || blocksArray.includes(randomTileP1)
//     )
//     {
//         alert("P1 Cannot make any movement.");
//         randomTileP1 += 12;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
       
//     }else if(randomTileP1 === randomTileP2)
//     {
//             alert("Engaging enemy P2");
//             randomTileP1 += 12;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
//         p1ActionPanel.style.visibility = "visible";
//         p1AttackPanel.style.visibility = "visible";
//     }else{
//         p1WeaponsChecker(randomTileP1);
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 2 should now move");
//             tileMovement = 0;
//             // p2ActionPanel.style.visibility = 'visible';
//             // p1ActionPanel.style.visibility = 'hidden';
//             player2.style.visibility = "visible";
//             player1.style.visibility = "hidden";
//         }
//     }
// });

// btnP1Right.addEventListener('click', function(){
//     gameTiles[randomTileP1].style.backgroundImage = "none";
//     console.log(randomTileP1);
//     randomTileP1++;
//     if((gameTiles.length <= randomTileP1) 
//     || blocksArray.includes(randomTileP1)
//     )
//     {
//         alert("P1 Cannot make any movement.");
//         randomTileP1--;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
//     }else if(randomTileP1 === randomTileP2)
//     {
//             alert("Engaging enemy P2");
//             randomTileP1--;
//             gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//             console.log(randomTileP1);
//             p1ActionPanel.style.visibility = "visible";
//             p1AttackPanel.style.visibility = "visible";
//     }else{
//         p1WeaponsChecker(randomTileP1);
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 2 should now move");
//             tileMovement = 0;
//             // p2ActionPanel.style.visibility = 'visible';
//             // p1ActionPanel.style.visibility = 'hidden';
//             player2.style.visibility = "visible";
//             player1.style.visibility = "hidden";
//         }
//     }
// });

// btnP1Down.addEventListener('click', function(){
//     gameTiles[randomTileP1].style.backgroundImage = "none";
//     console.log(randomTileP1);
//     randomTileP1 += 12;
//     if((gameTiles.length <= randomTileP1) 
//     || blocksArray.includes(randomTileP1)
//     )
//     {
//         alert("P1 Cannot make any movement.");
//         randomTileP1 -= 12;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
       
//     }else if(randomTileP1 === randomTileP2)
//     {
//             alert("Engaging enemy P2");
//             randomTileP1 -= 12;
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         console.log(randomTileP1);
//         p1ActionPanel.style.visibility = "visible";
//         p1AttackPanel.style.visibility = "visible";
//     }else{
//         p1WeaponsChecker(randomTileP1);
//         gameTiles[randomTileP1].style.backgroundImage = "url('assets/img/"+players[0]+".png')";
//         gameTiles[randomTileP1].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 2 should now move");
//             tileMovement = 0;
//             // p2ActionPanel.style.visibility = 'visible';
//             // p1ActionPanel.style.visibility = 'hidden';
//             player2.style.visibility = "visible";
//             player1.style.visibility = "hidden";
//         }
//     }
// });

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
    }else if (randomTileP2 === randomTileP1){
        alert("Engaging P1");
        randomTileP2++;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
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
    }else if (randomTileP2 === randomTileP1){
        alert("Engaging P1");
        randomTileP2--;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
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
    }else if (randomTileP2 === randomTileP1){
        alert("Engaging P1");
        randomTileP2 += 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
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
    }else if (randomTileP2 === randomTileP1){
        alert("Engaging P1");
        randomTileP2 -= 12;
        gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
        console.log(randomTileP2);
        p2ActionPanel.style.visibility = "visible";
        p2AttackPanel.style.visibility = "visible";
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

// btnP2Left.addEventListener('click', function(){

//     gameTiles[randomTileP2].style.backgroundImage = "none";
//     console.log(randomTileP2);
//     randomTileP2--;
//     if((gameTiles.length > randomTileP2 && randomTileP2 < 0) 
//     || blocksArray.includes(randomTileP2))
//     {
//         alert("P2 Cannot make any movement.");
//         randomTileP2++;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//     }else if (randomTileP2 === randomTileP1){
//         alert("Engaging P1");
//         randomTileP2++;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//         p2ActionPanel.style.visibility = "visible";
//         p2AttackPanel.style.visibility = "visible";
//     }else{
//         p2WeaponsChecker(randomTileP2);
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 1 should now move");
//             tileMovement = 0;
//             // p1ActionPanel.style.visibility = 'visible';
//             // p2ActionPanel.style.visibility = 'hidden';
//             player1.style.visibility = "visible";
//             player2.style.visibility = "hidden";
//         }
//     }
// });

// btnP2Up.addEventListener('click', function(){
//     gameTiles[randomTileP2].style.backgroundImage = "none";
//     console.log(randomTileP2);
//     randomTileP2 -= 12;
//     if((gameTiles.length > randomTileP2 && randomTileP2 < 0) 
//     || blocksArray.includes(randomTileP2))
//     {
//         alert("P2 Cannot make any movement.");
//         randomTileP2 += 12;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//     }else if (randomTileP2 === randomTileP1){
//         alert("Engaging P1");
//         randomTileP2 += 12;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//         p2ActionPanel.style.visibility = "visible";
//         p2AttackPanel.style.visibility = "visible";
//     }else{
//         p2WeaponsChecker(randomTileP2);
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 1 should now move");
//             tileMovement = 0;
//             // p1ActionPanel.style.visibility = 'visible';
//             // p2ActionPanel.style.visibility = 'hidden';
//             player1.style.visibility = "visible";
//             player2.style.visibility = "hidden";
//         }
//     }
// });

// btnP2Right.addEventListener('click', function(){
//     gameTiles[randomTileP2].style.backgroundImage = "none";
//     console.log(randomTileP2);
//     randomTileP2++;
//     if((gameTiles.length <= randomTileP2) 
//     || blocksArray.includes(randomTileP2))
//     {
//         alert("P2 Cannot make any movement.");
//         randomTileP2--;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//     }else if (randomTileP2 === randomTileP1){
//         alert("Engaging P1");
//         randomTileP2--;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//         p2ActionPanel.style.visibility = "visible";
//         p2AttackPanel.style.visibility = "visible";
//     }else{
//         p2WeaponsChecker(randomTileP2);
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)
//         {
//             alert("Player 1 should now move");
//             tileMovement = 0;
//             // p1ActionPanel.style.visibility = 'visible';
//             // p2ActionPanel.style.visibility = 'hidden';
//             player1.style.visibility = "visible";
//             player2.style.visibility = "hidden";
//         }
//     }
// });

// btnP2Down.addEventListener('click', function(){
//     gameTiles[randomTileP2].style.backgroundImage = "none";
//     console.log(randomTileP2);
//     randomTileP2 += 12;
//     if((gameTiles.length <= randomTileP2) 
//     || blocksArray.includes(randomTileP2))
//     {
//         alert("P2 Cannot make any movement.");
//         randomTileP2 -= 12;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//     }else if (randomTileP2 === randomTileP1){
//         alert("Engaging P1");
//         randomTileP2 -= 12;
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         console.log(randomTileP2);
//         p2ActionPanel.style.visibility = "visible";
//         p2AttackPanel.style.visibility = "visible";
//     }else{
//         p2WeaponsChecker(randomTileP2);
//         gameTiles[randomTileP2].style.backgroundImage = "url('assets/img/"+players[1]+".png')";
//         gameTiles[randomTileP2].style.backgroundRepeat = "no-repeat";
//         tileMovement++;
//         console.log(tileMovement);
//         if(tileMovement == 3)   
//         {
//             alert("Player 1 should now move");
//             tileMovement = 0;
//             // p1ActionPanel.style.visibility = 'visible';
//             // p2ActionPanel.style.visibility = 'hidden';
//             player1.style.visibility = "visible";
//             player2.style.visibility = "hidden";
//         }
//     }
// });