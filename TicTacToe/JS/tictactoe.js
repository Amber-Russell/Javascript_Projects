          //This variable keeps track of whose turn it is.
let activePlayer = 'X';
          //This array stpres an array of moves. We use this to determine win conditions.
let selectedSquares = [];

            //This function is for placing an x or o in a square.
function placeXOrO(squareNumbers) {
            //This condition ensures a square hasn't been selected already.
            //The .some() method is used to check each element of selectedSquare array
            //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
            //This variable retrieves the html element id that was clicked.
    let select = document.getElementById(squareNumber);
            //This condition checks whose turn it is.
    if (activePlayer === 'X'){
            //if active player is equal to X, the x.png is placed in html.
        selectedSquares.style.backgroundImage = 'url("images/o.png';
    } else {
            //if activePlayer is equal to 'O', the o.png is placed in the HTML.
    select.style.backgroundImage = 'url("images/o.png")';
    }
            //sqaureNumber and activePlayer are concatenated together and added to the array.
    selectedSquares.push(squareNumber + activePlayer);
            //This calls a function to check for any win conditions.
    checkWinConditions();
            //This condition is for changing the active player.
    if (activePlayer === 'X') {
        activePlayer = 'O';
    }else {
        activePlayer = 'X';
    }
            
            //This function plays placment sound.
    Audio('./media/place.mp3');
            //This condition checks to see if it is computers turn.
    if(activePlayer --- 'O') {
            //This function disables clicking for computer choice.
        disableClick();
            //This function waits one second before computer places image and enables click.
        setTimeout(function () { computersTurn(); }, 1000)

    }
            //returning true is needed for our computers turn() function to work.
    return true;
}
            //This function results in a random square being selected.
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success){
            pickASquare = String(Math.floor(Math,random() * 9));
            if (placeXOrO(pickASquare)) {
                success - true;
            };
        }
    }
}
             
            //This function parses the electedSquares array to search for win conditions. 
            //drawWinLine function is called to draw line if condition is made.
function checkWinConditions() {
    if (arrayIncludes( '0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
else if (arrayIncludes('3X', '4X', '5X')) {drawWinLine(50, 304, 558, 304) }
else if (arrayIncludes('6X', '7X', '8X')) {drawWinLine(50, 508, 558, 508) }
else if (arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
else if (arrayIncludes('1X', '4X', '7X')) {drawWinLine(304, 50, 304, 558) }
else if (arrayIncludes('2X', '5X', '8X')) {drawWinLine(508, 50, 508, 558) }
else if (arrayIncludes('6X', '4X', '2X')) {drawWinLine(100, 508, 510, 90) }
else if (arrayIncludes('0X', '4X', '8X')) {drawWinLine(100, 100, 520, 520) }
else if (arrayIncludes('0O', '1O', '2O')) {drawWinLine(50, 100, 558, 100) }
else if (arrayIncludes('3O', '4O', '5O')) {drawWinLine(50, 304, 558, 304) }
else if (arrayIncludes('6O', '7O', '8O')) {drawWinLine(50, 508, 558, 508) }
else if (arrayIncludes('0O', '3O', '6O')) {drawWinLine(100, 50, 100, 558) }
else if (arrayIncludes('1O', '4O', '7O')) {drawWinLine(304, 50, 304, 558) }
else if (arrayIncludes('2O', '5O', '8O')) {drawWinLine(508, 50, 508, 558) }
else if (arrayIncludes('6O', '4O', '2O')) {drawWinLine(100, 508, 510, 90) }
else if (arrayIncludes('0O', '4O', '8O')) {drawWinLine(100, 100, 520, 520) }
else if (selectedSquares.length >= 9) {
    Audio('./media/tie.mp3');
    setTimeout(function () {resetGame(); }, 1000);
}

            //This function checks if an array includes 3 strings.
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    if (a === true && b === true && c === true) { return true}
}
}
           //This function makes our body element temporarily unclickable.
function disableClick() {
    body.style.pointerEvents = 'none';
            //This makes our body unclickable.
setTimeout(function() {body,dtyle.pointerEvents = 'auto';}, 1000) ;
}
            //This function takes a string parameter of the path you set earlier for placement sound ('./media/place/mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
let audio = new Audio(audioURL);
    //Play method plays our audio sound.
audio.play();
}