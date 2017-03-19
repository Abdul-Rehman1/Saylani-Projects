/*13. Names & Total scores of two teams are taken as input. Write
a program that shows which team has won the game or show if
there is a tie. (Team A or Team B)*/

var  teamA_Name=prompt("Enter team A name");
var  teamA_score=+prompt("Enter team A score");
var  teamB_Name=prompt("Enter team B name");
var  teamB_score=+prompt("Enter team B score");

if(teamA_score==teamB_score)
{
    document.write("Match draw");
}
else if(teamA_score>teamB_score)
{
    document.write("Team A won");
}
else
{
    document.write("Team B won");
}
