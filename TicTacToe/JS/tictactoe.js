          //This variable keeps track of whose turn it is.
let activePlayer = 'X';
          //This array stores an array of moves. We use this to determine win conditions.
let selectedSquares = [];

            //This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
            //This condition ensures a square hasn't been selected already.
            //The .some() method is used to check each element of selectedSquare array
            //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
            //This variable retrieves the html element id that was clicked.
    let select = document.getElementById(squareNumber);
            //This condition checks whose turn it is.
    if (activePlayer === 'X'){
            //if active player is equal to X, the x.png is placed in html.
        select.style.backgroundImage= 'url("images/o.png")';
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
    audio('./media/bell1.mp3');
            //This condition checks to see if it is computers turn.
    if (activePlayer === 'O') {
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
            pickASquare = String(Math.floor(Math.random() * 9));
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
    audio('./media/bell2.mp3');
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
setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000) ;
}
            //This function takes a string parameter of the path you set earlier for placement sound ('./media/place/mp3')
function audio(audioURL) {
    //We create a new audio object and we pass the path as a parameter.
let audio = new Audio(audioURL);
    //Play method plays our audio sound.
audio.play();
}
        //This utilizes HTMl canvas to draw lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
        //This line accesses our html canvas element.
    const canvas = document.getElementById('win-lines')
    const c = canvas.getContext('2d');
        //This line indicates where the start of a line x axis is.
    let x1 = coordX1,
            //This line indicates where the start of a lines x axis is.
        y1 = coordY1,
            //This line indicates where the end of a lines x axis is.
        x2 = coordX2,
            //This line indicates where the end of a lines x axis is.
        y2 = coordY2,
            //This variable stores temporary x axis data we update in our animation loop.
        x = x1,
            //This variable stores temporary y axis data we update in our animation loop.
        y = y1;


            //this function interacts with the canvas.
function animationLineDraw() {
            //This variable creates a loop.
    const animationLoop = requestAnimationFrame(animationLineDraw);
            //this method clears content from last loop iteration.
    c.clearRect(0, 0, 608, 608)
            //This method starts a new path.
    c.beginPath();
            //Starting oint for our line.
    c.moveTo(x1, y1)
            //This method indicated the end point in our line.
    c.lineTo(x1, y1)
    c.lineWidth = 10;
    c.strokeStyle = 'rgba(70, 255, 33, .8)';
            //This method draws everything we laid out before.
    c.stroke();
            //this checks if we've reached the end point.
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop) ; }
        }
    
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10;} 
            if (y > y2) { y -= 10;}
            if (x >= x2 && y <= y2) ( cancelAnimationFrame(animationLoop))
        }
    }
function clear() {
    const animationLoop = requestAnimationFrame(clear);
    c.clearRect(0, 0, 608, 608);
            //This line stops our animation loop.
    cancelAnimationFrame(animationLoop);
}
disableClick();
audio('./media.winGame.mp3');
animationLineDraw();
setTimeout(function () { clear(); resetGame(); }, 1000);
}

            //This function resets the game in the event of a tie or a win.
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage= ''
    }
    selectedSquares = [];
}