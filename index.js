function computerPlay()
{
   const options = ['rock','paper','scissor'];
   const index = Math.floor(Math.random() * 3);
   return options[index]; 
}

function playRound(playerSelection,computerSelection)
{
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection)
    {
        return `It's a draw`;
    }

    const player = changeToOptionNum(playerSelection);
    const computer = changeToOptionNum(computerSelection);

    let did_player_won;

    if (player > computer)
    {
        did_player_won = true;
    }
    else
    {
        did_player_won = false;
    }

    if (player + computer === 2)
    {
        did_player_won = !did_player_won;
    }

    const ans = did_player_won? `You won! ${playerSelection} beats ${computerSelection}` : `You lose! ${computerSelection} beats ${playerSelection}`;
    return ans;
}

function changeToOptionNum(selection)
{
    const options = ['rock','paper','scissor'];
    for (let i = 0; i < 3; i++)
    {
        if (selection === options[i])
            return i;
    }
}

function game()
{
    let playerCount = 0, computerCount = 0;
    for (let i = 0; i < 5; i++)
    {
        let playerSelection, computerSelection;
        
        while (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissor')
        {
            playerSelection = prompt('Open developer console to play. Choose between rock,paper,scissor');
            if (playerSelection)
                playerSelection = playerSelection.toLowerCase();
        }

        computerSelection = computerPlay();
        const result = playRound(playerSelection,computerSelection);
        console.log(result);

        const resultWords = result.split(' ');

        //console.log(resultWords);

        if (resultWords[1] === 'won!')
            playerCount++; 
        else if (resultWords[1] === 'lose!')
            computerCount++;   
            
        //console.log(`${computerCount}  ${playerCount}`);    
    }

    if (playerCount > computerCount)
    {
        console.log('You Won the Game! Congratulations');
    }
    else if (playerCount === computerCount)
    {
        console.log('Game is draw! Nobody Won');
    }
    else
    {
        console.log('Sorry ! You Lost the Game to Computer');
    }
}

game();