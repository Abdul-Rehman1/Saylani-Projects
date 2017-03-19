/*11. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.
Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct
answer”.
b. If the guessed number +1 is the secret number, show
“Close enough to the correct answer”.*/

var secretNum=9;
var inputedNum=+prompt("Enter a guessed nummber (1-10)");
if(inputedNum==secretNum)
{
    alert("Bingo! Correct answer");
}
else if((inputedNum+1)==secretNum)
{
    alert("Close enough to the correct answer");
}
else if((inputedNum-1)==secretNum)
{
    alert("Close enough to the correct answer");
}
else{
    alert("Try again!");
}
