/*16. Weather in Karachi nowadays is too cool, write a program
that takes temperature as input and shows a message based on
following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/

var  T=+prompt("Enter the temparature of Karachi");
if(T > 40)
{
    document.write("It is too hot outside.");
}
else if(T > 30)
{
    document.write("The Weather today is Normal.");
}
else if(T > 20)
{
    document.write("Today’s Weather is cool.");
}
else if(T > 10)
{
    document.write("OMG! Today’s weather is so Cool.");
}

