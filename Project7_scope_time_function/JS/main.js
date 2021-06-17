var x=10;            // variable x was sassigned outside of the function
function Add_Numbers_1() {
    document.write(20 + x + "<br>");
}function Add_Numbers_2() {
    document.write(x + 100);
}
Add_Numbers_1();
Add_Numbers_2();          //answer returned=30, 110. variable worked for both problems

function Add_numbers_3() {
    var y= 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {
    document.write(y + 100);
}
Add_numbers_3();
Add_Numbers_4();

function Add_numbers_5() {
    var A = 10;
    console.log(15 + A);
}
function Add_numbers_6() {
    console.log(A + 100);
}
Add_numbers_5();
Add_numbers_6();