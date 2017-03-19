/*10. Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Take input
from users, the following:
a. Name of item1
b. Name of item2
c. Price of item 1
d. Price of item 2
e. Ordered quantity of item 1
f. Ordered Quantity of item 2
g. Shipping charges
Compute the total cost. If the total cost is above 2000 PKR ,
offer them 10% discount & show the receipt in your browser.*/

var item1Name=prompt("Enter 1st item name");
var item1Price=+prompt("Enter 1st item price");
var item1Quantity=+prompt("Enter quantity of 1st item");
var item2Name=prompt("Enter 2nd item name");
var item2Price=+prompt("Enter 2nd item price");
var item2Quantity=+prompt("Enter quantity of 2nd item");
var shippingCharges=+prompt("Enter Shipping charges");

document.write("Shopping Cart <br>");
document.write("The price of "+item1Name+" is"+item1Price+"<br>");
document.write("The quantity of "+item1Name+" is"+item1Quantity+"<br>");
document.write("The price of "+item2Name+" is"+item2Price+"<br>");
document.write("The quantity of "+item2Name+" is"+item2Quantity+"<br><br>");
document.write("Shipping Charges: "+shippingCharges+"<br>");
var  total=((item1Price*item1Quantity)+(item2Price*item2Quantity))+shippingCharges;
document.write("Total cost of your order is "+total+"<br>");
if(total>2000)
{
    document.write("Discounted Price: "+total*0.9+"<br>");
}
