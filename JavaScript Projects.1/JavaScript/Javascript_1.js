function Animal_Func() {
    var Animal_Output;
    var Animal = document.getElementById("Animal").value;
var Animal_String = " is a great animal!";
switch(Animal) {
    case "Bird":
        Animal_Output = "Bird" + Animal_String;
        break;
    case "Cat":
        Animal_Output = "Cat"+ Animal_String;
        break;
    case "Dog":
        Animal_Output = "Dog" + Animal_String;
        break;
    case "Lizard":
        Animal_Output = "Lizard" + Animal_String;
        break;
    case "Snake":
        Animal_Output = "Snake" + Animal_String;
        break;
    case "Pig":
        Animal_Output = "Pig" + Animal_String;
        break;
        default:
        Animal_Output = "Please enter an animal from the list above.";
}
document.getElementById("Output").innerHTML= Animal_Output;}

function Hello_World_function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML= "The text has changed!";
}
window.onload= function() {
    var c = document.getElementsById("myLandscape");
    var ctx = c.getContext("2d");
    var img = document.getElementsById("landscape_Image");
    ctx.drawImage(img, 10, 10);
}
var c= document.getElementById("myGradient");
var  ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150,100);