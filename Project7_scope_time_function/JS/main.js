var x=10;            // variable x was sassigned outside of the function (global variable)
function Add_Numbers_1() {
    document.write(20 + x + "<br>");
}function Add_Numbers_2() {
    document.write(x + 100);
}
Add_Numbers_1();
Add_Numbers_2();          //answer returned=30, 110. variable worked for both problems

function Add_numbers_3() {     //variable within the function (local variable)
    var y= 10;
    document.write(20 + y + "<br>");
}
function Add_numbers_4() {     
    var y= 10;       
    document.write(y + 100);            //error because value not defined
}
Add_numbers_3();                         //returns 30, local variable only within one function
Add_numbers_4();

function Add_numbers_5() {
    var A = 10;
    console.log(15 + A);
}
function Add_numbers_6() {
    var A = 10;
    console.log(A + 100);
}
Add_numbers_5();
Add_numbers_6();

function get_Date () {
    if (new Date().getHours() > 18) {
        document.getElementById("Hello").innerHTML= "How are you this afternoon?";
    }
 }
 function Age_Function() {
     Age = document.getElementById("Age").value;
     if (Age >= 21) {
         Adult = "Your old enough to come to the bar";
     }
     else {
         Adult = "You are too young to enter";
     }
     document.getElementById("Old_enough").innerHTML = Adult;
 }
 function Time_function() {
     var Time = new Date().getHours();
     var reply;
     if(Time <12 == Time > 0) {
         Reply = "It is morning time!";
     }
     else if (Time >= 12 == Time< 18) {
         Reply = "It is afternoon!";
     }
     else {
         Reply = "Its evening time.";
     }
     document.getElementById("Time_of_day").innerHTML = Reply;
 }