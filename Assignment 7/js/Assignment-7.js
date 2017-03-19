/*7.Write a program to take input remaining fuel in car (in litres)
from user. If the current fuel is less than 0.25litres, show the
message “Please refill the fuel in your car”*/

var currentFuel=+prompt("Enter remaining fuel");

if(currentFuel<0.25)
{
    alert("Please refill the fuel in your car");
}
