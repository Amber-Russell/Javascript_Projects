function my_Dictionary() {
    var Animal = {
        species:"Dog",
        color:"Black and white",
        Breed: "mix terrier",
        Age: 2,
        Sound:"woof!"
    };
    delete Animal.color;
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}