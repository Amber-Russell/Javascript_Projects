function addition_Function() {
    var addition= 2 + 2;
    document.getElementById("Math").innerHTML="2+2="+ addition;
}
function subtract_Function() {
    var subtraction = 5 - 2;
    document.getElementById("Math").innerHTML ="5-2="+ subtraction;
}
function multiply() {
    var simple_Math =6 * 8;
    document.getElementById("Math").innerHTML ="6 x 8=" + simple_Math;
}
function division() {
    var simple_Math= 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 =" + simple_Math;
}
function more_Math() {
    var simple_Math = (1 +2) * 10 / 2-5;
    document.getElementById("Math").innerHTML = "(1 +2) * 10 / 2-5 =" + simple_Math;
}
function more_Addition() {
    var addition= 2435 + 656;
    document.getElementById("Math").innerHTML ="2435 + 656 =" + addition;
}
function modulus_Operator() {
    var remainder = 25 % 6;
    document.getElementById("Math").innerHTML= "divide 25 by 6, remainder of: " + remainder;
}
function negation_Operator() {
    var x = 34;
    document.getElementById("Math").innerHTML=-x;
}
function increment() {
var x = 5;
x++;
document.write(x);
}
function decrement() {
var x = 5.25;
x--;
document.write(x);
}

window.alert(Math.random() * 100);

var a=-24.3;
document.write(Math.abs(a)+"<br>");

