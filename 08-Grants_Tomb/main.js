
const question = {
    stem: "Who is buried in Grant's Tomb?",
    option1: "Andrew",
    option2: "Grant",
    option3: "Moe",
    option4: "Raine",
    correct: 2,
    display: () => {
        document.getElementById('answer1').innerHTML = question.option1
        document.getElementById('answer2').innerHTML = question.option2
        document.getElementById('answer3').innerHTML = question.option3
        document.getElementById('answer4').innerHTML = question.option4
        document.querySelector('#stem').textContent = question.stem
        // Display the question options here
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "Correct!"
        } 
        else {
            document.querySelector(".feedback").textContent = "Incorrect!"
        }
    },
  
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1))
document.querySelector('#answer2').addEventListener('click', () => question.check(2))
document.querySelector('#answer3').addEventListener('click', () => question.check(3))
document.querySelector('#answer4').addEventListener('click', () => question.check(4))

question.display()