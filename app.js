const colors = [];
let winner = "";

const guess = document.querySelector('#guess');
const squares = document.querySelectorAll('.square');

const generateColor = () => {
    let randomRed = Math.floor(Math.random() * 255);
    let randomGreen = Math.floor(Math.random() * 255);
    let randomBlue = Math.floor(Math.random() * 255);

    return `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
}

squares.forEach( square => {
    let randomColor = generateColor();
    colors.push(randomColor);
    square.style.backgroundColor = randomColor;
});

const pickWinnerColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    const colorWinner = squares[randomNumber].style.backgroundColor;
    winner = colorWinner;
    guess.textContent = colorWinner;
}
pickWinnerColor();

squares.forEach( square => {
    square.addEventListener('click', function(){
        let currentColor = this.style.backgroundColor;
        if (currentColor === winner) {
            console.log('You win');
        } else {
            console.log('try again');
        }
    });
})