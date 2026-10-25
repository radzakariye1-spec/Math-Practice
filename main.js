const equation = document.getElementById("equation");
const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");
const correctAns = document.getElementById("correctAns");

let realAns;     

let c = 0;
let w = 0;

let num1;
let num2;
let num3;

let currentCorrectAnswer;

function reset() {
    c = 0;
    w = 0;

    correct.innerHTML = c;
    wrong.innerHTML = w;

    correctAns.innerHTML = ``
}

function pickRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateQuestion() {
    const operation = document.getElementById("operation");

    if (operation.value == "add") {
        num1 = pickRandomNumber(0, 50);
        num2 = pickRandomNumber(0, 50);

        equation.innerHTML = `${num1} + ${num2}`
        
        return num1 + num2
    } else if (operation.value == "subtract") {
            num1 = pickRandomNumber(0, 50);
            num2 = pickRandomNumber(0, 50);

            let biggest = Math.max(num1, num2)
            let smallest = Math.min(num1, num2)

            equation.innerHTML = `${biggest} - ${smallest}`

            return biggest - smallest;
    } else if (operation.value == "multiply") {
        num1 = pickRandomNumber(0, 12);
        num2 = pickRandomNumber(0, 12);

        equation.innerHTML = `${num1} x ${num2}`

        return num1 * num2
    } else if (operation.value == "divide") {
        let answer = pickRandomNumber(1, 12);
        num2 = pickRandomNumber(1, 12);
        
        num1 = answer * num2;

        equation.innerHTML = `${num1} / ${num2}`;

        return answer
    } else if (operation.value == "exponents") {
        num1 = pickRandomNumber(0, 5);
        num2 = pickRandomNumber(0, 3);

        equation.innerHTML = `${num1}<sup>${num2}</sup>`;
        
        return num1 ** num2
    } else if (operation.value == "squareroot") {
        num1 = pickRandomNumber(1, 12);

        equation.innerHTML = `&radic;${num1 ** 2}`;

        return num1
    } else if (operation.value == "percentages") {
        num1 = pickRandomNumber(1, 10) * 10 // whole number

        let percent = pickRandomNumber(0, 10) * 10

        equation.innerHTML = `${percent}% of ${num1}`;

        return (percent/100) * num1
    } else if (operation.value == "BEDMAS") {
        let number = pickRandomNumber(1, 3);

        num1 = pickRandomNumber(1, 10);
        num2 = pickRandomNumber(1, 10);
        num3 = pickRandomNumber(1, 10);

        if (number == 1) {
            equation.innerHTML =   `${num1} x (${num2} + ${num3})`

            return num1 * (num2 + num3)
        } else if (number == 2) {
            equation.innerHTML =   `(${num1} + ${num2}) x ${num3}`

            return (num1 + num2) * num3;
        } else {
            let bigger = Math.max(num1, num2, num3);
            let smaller = Math.min(num1, num2, num3);

            equation.innerHTML =   `${num2} + ${bigger - smaller} x ${num1}`

            return  num2 + (bigger - smaller) * num1
        }
    }
}

currentCorrectAnswer = generateQuestion()

function checkAns() {
    const userAns = +document.getElementById("ans").value;
    const userInput = document.getElementById("ans");

    if (userAns == currentCorrectAnswer) {
        c++;
        correct.innerHTML = c;

        correctAns.innerHTML = ``
    } else {
        w++;
        wrong.innerHTML = w;

        correctAns.innerHTML = `The correct answer was ${currentCorrectAnswer}`
    }

    userInput.value = ""

    currentCorrectAnswer = generateQuestion();
}

function handleKeyPress(event) {
    if (event.key == "Enter") {
        checkAns();
    }
}

document.getElementById("ans").addEventListener("keydown", handleKeyPress); // Checks for enter key in PC
document.getElementById("subBtn").addEventListener("click", checkAns); // Checks if button is clicked for any device