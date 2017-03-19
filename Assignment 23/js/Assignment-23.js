/*23. The Pluralizer: Write a program that:
a. takes 2 inputs, a noun and a number.
b. tells the number and pluralized form, like "5 cats" or "1
dog".
Run the program for a few different inputs and show the result
to make sure it works. */
var noun=prompt("Enter a noun");
var numOfNoun=+prompt("Enter number of"+noun);
if(numOfNoun>=1)
{
   alert(numOfNoun+noun+" s");  
}
if(numOfNoun<0)
{
   alert("can't be negative");  
}
else{
    alert(numOfNoun+" "+noun);
}
