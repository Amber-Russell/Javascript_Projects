function Count_To_Ten() {
    var Digit = "";
    var x = 1;                       //assigning x to the value of 1
    while (x < 11) {                  //requestion loop until x = 11
        Digit += "<br>" + x;      //break to separate lines.
        x++;                      //requesting x + 1 in loop
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}
function my_Length() {
    var str = "how are you?";
    var n = str.length;                        //assigned var with "n" string length
    document.getElementById("String_Length").innerHTML = n;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];   //string array
var Content = "";
var Y;
function for_Loop() {                                   //loop function
    for (Y = 0; Y < Instruments.length; Y++) {           
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
function cat_pics() {
    var Cat_Picture = [];             //assigning var Cat_pic
    Cat_Picture[0] = "sleeping";     //index 0 = sleeping etc.
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
    Cat_Picture[2] + ".";                  
}
function constant_function() {
    const Vehicle= {make:"Honda", model:"Civic", color:"red"};         //vehicle is the constant
    Vehicle.make = "toyota";                         //value of make=toyota
    Vehicle.model = "forerunner";
    Vehicle.price = "$13,500";
    document.getElementById("Constant").innerHTML = "The cost of a " + 
    Vehicle.make + Vehicle.model + "is about " + Vehicle.price + ".";
}
{
    var Y = 34;
    document.write(Y);
    {
        let Y = 67;
        document.write(Y);
    }
    document.getElementById("Let_Keyword").innerHTML= Y;
}
function returned() {
    return Math.PI;
}

document.getElementById("return_Func").innerHTML = returned();

let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "1976 ",
    color: "blue ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

var text = "";
var i;
for (i = 0;i < 10; i++) {
    if (i === 3) {
        break;
    }
    text += "The number is " + i + "<br>";
}
document.getElementById("break_Func").innerHTML = text;

var text = "";
var i;
for (i = 0;i < 10; i++) {
    if (i === 3) {
        continue;
    }
    text += "The number is " + i + "<br>";
}
document.getElementById("continue_Func").innerHTML = text;


