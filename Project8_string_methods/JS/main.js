function slice_Method() {
    var Sentence= "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);          //The number indicate that characters inbetween 27, and 33 while be "sliced" so the return is "johnny"
    document.getElementById("Slice").innerHTML= Section;
}
function My_Uppercase() {
    var str = "This is my string."         //string to be used
    var res = str.toUpperCase();           //telling str var to be uppercase
    document.getElementById("upper_Case").innerHTML = res;       
}
function My_Search(){
    var str = "If you're happy and you know it clap your hands.";   //string value=sentence
    var n = str.search("hands");              // search string value for "hands", if not found return -1
    document.getElementById("Search").innerHTML = n;   //place answer in html <p> labeled "Search"

}
function My_String() {
    var x = 240;               //value 240 to be returned as a string
    document.getElementById("String").innerHTML= x.toString();
}
function precision_Method() {
    var x = 12938.3012987376112;      //rounding the number at "10th" number
    document.getElementById("Precision").innerHTML = x.toPrecision(10);   //output= 12938.30130
}
function myFixed() {
var num = 6.2546789
var n = num.toFixed(3);      //the "3" is to announce the place to round the number
document.getElementById("Fixed").innerHTML= n;      //return=6.255
}
function my_Value() {
    var str = "This is my string.";
    var res = str.valueOf();                //value of the string
    document.getElementById("Value").innerHTML= res;
}