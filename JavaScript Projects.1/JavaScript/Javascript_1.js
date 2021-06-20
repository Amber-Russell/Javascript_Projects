function Animal_Func() {
    var Animal_Output;
    var Animal = document.getElementById("Animal").value;
var Animal_String = " is a great animal!";
switch(Animals) {
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
        defualt:
        Animal_Output = "Please enter an animal from the list above.";
}
document.getElementById("Output").innerHTML= Animal_Output;}