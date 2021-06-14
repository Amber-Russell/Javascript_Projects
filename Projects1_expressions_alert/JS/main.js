window.alert ("Hi there!");  //pop up window with "hi there"
window.alert("Ready or not! Here I come!");   //pop up window statment "ready or not"

var A= 'this is a string'; defines variable "A" a string

document.write(A);   //announces "A" value

window.alert ("The saying goes\"There are plenty of fish in the sea\" and we believe that to be true. If it "+
" was false, we would have been alone.")    //used '\' to separate the quotations so the program doesnt think it is a function

var B="plenty" + "fish"   //added two variables and created id
document.write(B)

var family= "Robinsons", Mom="Sue", Dad = "Drew", Son = "Charlie";
document.write (Son);   //assigned id to family element

var family= family.fontcolor("green");   //assigned family element font color
document.write(family);     //processed funtion and returned results

var A = A.fontcolor("red");
document.write(A)

function My_First_Function() {     //Defining a function and naming it
    var str="This text is green!";   //defied variable and gave it string value
    var result = str.fontcolor("green");   // used the fontcolor method on str var
    document.getElementById("Green_Text").innerHTML = result;  //put the value result into HTML element with "green text" id
}