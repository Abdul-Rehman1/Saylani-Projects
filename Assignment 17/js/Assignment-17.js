/*17. Write a program to create a calculator for +,-,*, / & % using if
statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user. */

var  FirstNum=+prompt("Enter the first number");
var  operator=prompt("Enter the operator");
var  secNum=+prompt("Enter the 2nd number");
var computed=FirstNum;

if(operator=='+')
{
   computed+=secNum;
}
else if(operator=='-')
{
   computed-=secNum;
}
else if(operator=='*')
{
   computed*=secNum;
}
else if(operator=='/')
{
   computed/=secNum;
}
alert(FirstNum+operator+secNum+"="+computed);
