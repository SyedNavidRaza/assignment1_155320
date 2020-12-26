var a;
var message = ("Value after variable declaration is ")
document.write(message + a);
document.write("<br>");
a = 5;
var message = ("Initial value: ")
document.write(message + a);
document.write("<br>");
a = ++a;
var message = ("Value after increment is: ")
document.write(message + a);
document.write("<br>");
b = a + 7;
var message = ("Value after addition is: ")
document.write(message + b);
document.write("<br>");
b = --b;
var message = ("Value after decrement is: ")
document.write(message + b);
document.write("<br>");
c = b % 4;
var message = ("The reminder is: ")
document.write(message + c);
document.write("<br>");