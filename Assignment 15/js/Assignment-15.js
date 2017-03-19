/*15. Write a program that checks whether the given input is an
even number or an odd number.*/

var  inputNum=+prompt("Enter to a number to check whether it is even or odd");
if(inputNum%2==0)
{
    document.write(inputNum+" is even number");
}
else{
    document.write(inputNum+" is not odd number");
}