const colors = [];
let winner = "";

const guess = document.querySelector('#guess');
const squares = document.querySelectorAll('.square');
const newColors = document.querySelector('#change-colors');

const generateColor = () => {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

const newSquaresColor = () => {
    squares.forEach( square => {
        let randomColor = generateColor();
        colors.push(randomColor);
        square.style.backgroundColor = randomColor;
    });
}
newSquaresColor();

const pickWinnerColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    const colorWinner = squares[randomNumber].style.backgroundColor;
    winner = colorWinner;
    guess.textContent = colorWinner;
}
pickWinnerColor();

newColors.addEventListener('click', function(){
    newSquaresColor();
    pickWinnerColor();
    squares.forEach( square => {
        square.style.opacity = "1";
    });
});

squares.forEach( square => {
    square.addEventListener('click', function(){
        let currentColor = this.style.backgroundColor;
        if (currentColor === winner) {
            newSquaresColor();
            pickWinnerColor();
            squares.forEach( square => {
                square.style.opacity = "1";
            });
        } else {
            this.style.opacity = "0";
        }
    });
})