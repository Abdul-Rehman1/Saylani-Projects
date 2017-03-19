/*12.Write a program to check whether the given number is
divisible by 3. Show the message to the user if the number is
divisible by 3 */

var  inputNum=+prompt("Enter to a number to check whether it is divisible by 3 or not");
//document.write(typeof(inputNum)+inputNum%3);
if(inputNum%3==0)
{
    document.write(inputNum+" is divisible by 3");
}
else{
    document.write(inputNum+" is not divisible by 3");
}