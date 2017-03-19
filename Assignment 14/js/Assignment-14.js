/*14. Take a string, a number and a Boolean in three variables.
Write a program that checks the type of variables & responds
accordingly. Like */
var  string=prompt("Enter string");
var  numb=+prompt("Enter number");
var boolean=prompt("Enter true/false")
document.write("typeof(string) "+typeof(string));
document.write("<br>typeof(numb) "+typeof(numb));
var bool;
if(boolean=="true"||boolean=="True")
bool=true;
else if(boolean=="false"||boolean=="false")
bool=false;
document.write("<br>typeof(Boolean) "+typeof(bool));

