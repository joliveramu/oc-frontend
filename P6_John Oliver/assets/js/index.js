let turn = 1;

function game(elem)
{
    if(turn == 1)
    {
        elem.innerHTML = "A";
        turn = 2;
    }else if(turn == 2)
    {
        elem.innerHTML = "B";
        turn = 1;
    }
}