document.write("cow" + 5);

function my_Function() {
   document.getElementById("Test").innerHTML = 0/0;
}
function func_Isnan() {
    document.getElementById("Test").innerHTML= isNaN('This is a string');
}
function func_True() {
    document.getElementById("Test").innerHTML= isNaN('007');
}
function func_Infinity() {
    document.getElementById("Test").innerHTML= (2E310);
}
function func_Neg() {
    document.getElementById("Test").innerHTML= (-3E310);
}
function fun_Bool() {
    document.getElementById("Test").innerHTML=(10>2);
}
function func_BoolTwo() {
    document.getElementById("Test").innerHTML=(10<2);
}
function func_Equal() {
    document.getElementById("Test").innerHTML=(10==10);
}
function func_Equals() {
    document.getElementById("Test").innerHTML=(2==10);
}
x = "82";
y = 82;
document.write(x===y);

A = 'Brad';
B = 'Brad'; {
document.write(A===B);
}

document.write(5 >2 && 10 > 4);

document.write(5 > 10 && 10> 4);

document.write(5 > 10 || 10 > 4);

function not_Function(){
    document.getElementById("Not").innerHTML= !(20>10);
}
function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}