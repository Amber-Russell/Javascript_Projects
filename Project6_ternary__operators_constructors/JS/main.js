function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride= (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";

}
function vote_Function() {
    var Age, Can_vote;
    Age =document.getElementById("Age").value;
    Can_vote= (Age < 18) ? "You are too young" : "You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", " Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}
function Student(Name, Age, Animals) {
    this.Student_Name = Name;        //this* is to label "student" class followed by value
    this.Student_Age = Age;
    this.Student_Animals = Animals;
}
var Tim = new Student("Tim", 34, "2 dogs.");
var Jill = new Student("Jill", 22, "1 cat.");     //variety of student inputs
var Bob = new Student("Bob", 55, "no animals.");
function students() {
    document.getElementById("New_and_This").innerHTML= Jill.Student_Name + " is a student, age " +
    Jill.Student_Age + " years old and owns " + Jill.Student_Animals;
}
function count_Func() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        return Starting_point;
        }
    }
