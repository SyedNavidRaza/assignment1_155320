var a = 2; // 1
var b = 1;// 0
x = --a;                            // 1
y = --b;                            // 0
z = ++b;                            // 1
c = b--;                            // 1
var result1 = x - y;                // 1 - 0 = 1
var result2 = result1 + z;          // 1 + 1 = 2
var result3 = result2 + c;          // 2 + 1 = 3
var message = ("a is ")
document.write(message + a)         // 1
document.write("<br>")
var message = ("b is ")
document.write(message + b)         // 0
document.write("<br>")
var message = ("result is ")
document.write(message + result3)   // 3
//var result = --a - --b + ++b + b--;
//var result = 1 - 0 + 1 + 1; 
