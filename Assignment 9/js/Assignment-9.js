 /*9.Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page.
Take percentage & compute grade as per following table:
Percentage % Grade Remarks
Greater than or equal to 80 A-one Excellent
Greater than or equal to 70 A Good
Greater than or equal to 60 B You need to improve
Less than 60 Fail Sorry
Show the total marks, marks obtained, percentage, grade & remarks .*/

var _1stSub=+prompt("Enter first subject marks");
var _2ndsub=+prompt("Enter second subject marks");
var _3rdsub=+prompt("Enter third subject marks");
var total=+prompt("Enter total marks");
if(!isNaN(_1stSub)&&!isNaN(_2ndsub)&&!isNaN(_3rdsub)&&!isNaN(total))
{
    if((_1stSub+_2ndsub+_3rdsub)<=total)
    {
        var per=((_1stSub+_2ndsub+_3rdsub)*100)/total;
        var grade="",remarks="";

        if(per>=80&&per<=100)
        {
            grade="A+";
            remarks="Excellent";
        }
        else if(per>=70&&per<80)
        {
            grade="A";
            remarks="Good";
        }
        else if(per>=60&&per<70)
        {
            grade="B";
            remarks="You need to improve";
        }
        else if(per<60)
        {
            grade="fail";
            remarks="Sorry";
        }
        document.write("MARK SHEET <br> Total marks: "+total+"<br> Marks obtained: "+(_1stSub+_2ndsub+_3rdsub)+"<br> Percentage: "+per+"<br> Grade: "+grade+"<br> Remarks: "+remarks); 
    }
    else
    {
        document.write("Obtained marks can not be greater than total marks");
    }
}
else{
    document.write("You may entered wrong input");
}