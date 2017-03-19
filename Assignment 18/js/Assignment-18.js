/*18. Write a program that takes user input day name. If the day is
Monday, Tuesday, Wednesday, Thursday or Friday, then show
“It’s a week day”. If the day is Saturday then show “It’s
weekend”. If the day is Sunday then show “Yay! It’s a holiday”. */

var  dayName=prompt("Enter name of the day");


if(dayName="Saturday")
{
   alert("It’s weekend");
}
else if(dayName="Sunday")
{
   alert("Yay! It’s a holiday");
}
else if(dayName=="Monday"||dayName=="Tuesday"||dayName=="Wednesday"||dayName=="Thusrday"||dayName=="Friday"||dayName=="monday"||dayName=="tuesday"||dayName=="wednesday"||dayName=="thusrday"||dayName=="friday")
{
   alert("It is week day");
}
