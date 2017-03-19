/*2.Write a program to take input a number from user & display
it’s multiplication table on your browser. If user does not enter
a new number, multiplication table of 5 should be displayed by
default.*/ 

var tableNum=+prompt("Enter a table number","5");
document.write("Table of "+tableNum);
for(var i=1;i<=10;i++)
{
    document.write("<br>"+tableNum+"x"+i+"="+tableNum*i);
}
