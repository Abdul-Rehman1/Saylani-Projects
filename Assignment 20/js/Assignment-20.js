/*20. Write a program that:
a. takes 2 numbers.
b. tells whichever number is the greater (higher) number.
c. tells if they are equal
Show the output to make sure it works (e.g. "The greater
number of 5 and 10 is 10.") */

var  a=+prompt("Enter first number");
var  b=+prompt("Enter Second number");

if(a==b)
{
   alert(a+" and "+b+" both are same");  
}
else if(b>a)
{
   alert("The greater number of "+a+" and "+b+" is " +b);

}
else 
{
  alert("The greater number of "+a+" and "+b+" is " +a);
}
