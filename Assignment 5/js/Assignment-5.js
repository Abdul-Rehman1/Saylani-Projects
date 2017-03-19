/*5.Write a program to take input color of road traffic signal from
the user & show the message according to this table:
Signal color Message
red vehicles must stop
yellow vehicles should get ready to move
green vehicles can move now*/

var color=prompt("Enter your color of traffic signal");
if(color=="red")
{
    alert("vehicles must stop");
}
else if(color=="yellow")
{
    alert("vehicles should get ready to move");
}
else if(color=="green")
{
    alert("vehicles can move now");
}
else
    alert("Not a traffic signal color");
