function check() {
    const question1 = document.querySelector('input[type="radio"][name="question1"]:checked').value;
    const question2 = document.querySelector('input[type="radio"][name="question2"]:checked').value;
    const question3 = document.querySelector('input[type="radio"][name="question3"]:checked').value;
    const question4 = document.querySelector('input[type="radio"][name="question4"]:checked').value;
    const question5 = document.querySelector('input[type="radio"][name="question5"]:checked').value;
    const question6 = document.querySelector('input[type="radio"][name="question6"]:checked').value;
    const question7 = document.querySelector('input[type="radio"][name="question7"]:checked').value;
    const question8 = document.querySelector('input[type="radio"][name="question8"]:checked').value;
    const question9 = document.querySelector('input[type="radio"][name="question9"]:checked').value;
    const question10 = document.querySelector('input[type="radio"][name="question10"]:checked').value;
    let correct = 0

    // answers to  questions

    if(question1 === 'Walter Payton') { 
        correct++;
    }
    if(question2 === 'Dixie National Rodeo') {
        correct++;
    }
    if(question3 === 'Harry Cole') {
        correct++;
    }
    if(question4 === 'Univerity of Mississippi Medical Center') {
        correct++;
    }
    if(question5 === 'Pearl'){
        correct++;
    }
    if(question6 === 'Catfish') {
        correct++;
    }
    if(question7 === 'Mississippi Coliseum') {
        correct++;
    }
    if(question8 === 'Hospitality State') {
        correct++;
    }
    if(question9 === 'Andrew Jackson') {
        correct++
    }
    if(question10 === 'Arkansas'){
        correct++;
    
    }


var messages = ['WINNER, You have 10 RIGHT', 'You almost had it, 9 right', 'Just think about, 8 right ', 'Try reading it gain , 7 right', ' Are Really trying, 6,right', 'Just Guessing, 5 right', 'It just a quiz, 4 right', 'No Hope at All, 3 right', 'Just give up, 2 right', 'one RIGHT', 'NONE'];
var pictures = ['img/win.gif','img/med.jpg','img/missing9.jpg', 'img/missing8.jpg', 'img/missing7.jpg', 'img/missing6.jpg', 'img/missing5.jpg', 'img/missing4.jpg', 'img/missing3.jpg', 'img/med.jpg','img/loser.jpg']

// get my pic and messages and correct count
let message = document.getElementById('after_submit');
message.classList.remove('d-none');

let image = document.createElement("img");

switch(correct) {
    case 10: 
        message.innerText = messages[0];
        image.src = pictures[0];
        break;
    case 9:
        message.innerText = messages[1];
        image.src = pictures[1];
        break;
    case 8:
        message.innerText = messages[2];
        image.src = pictures[2];
        break;
    case 7: 
        message.innerText = messages[3];
        image.src = pictures[3];
        break;
    case 6:
        message.innerText = messages[4];
        image.src = pictures[4];
        break;
    case 5:
        message.innerText = messages[5];
        image.src = pictures[5];
        break;
    case 4:
        message.innerText = messages[6];
        image.src = pictures[6];
        break;
    case 3:
        message.innerText = messages[7];
        image. src = pictures[7]
        break;
    case 2:
        message.innerText = messages[8];
        image. src = pictures[8]
        break;
    case 1:
        message.innerText = messages[9];
        image. src = pictures[9]
        break;
    case 0:
        message.innerText = messages[10];
        image. src = pictures[10]
        break;
    default:
        return;
}

message.appendChild(image);
}

    // function form question call
function makeForm(){
    let quizDiv = document.getElementById('quizDiv');
    quizDiv.innerHTML = `
    <form id="quiz" name="quiz" class="form">
    <p id="question1">What superstar running back played at Jackson State University from 1971 to 1974?</p>
    <input type="radio" id="mc" name="question1" value="Walter Payton" class="question1">Walter Payton<br>
    <input type="radio" id="mc" name="question1" value="Rodger Williams" class="question1">Rodger Williams<br>
    

    <p>What rodeo and live stock is hosted Annual at the Colliseum?</p>
    <input type="radio" id="mc" name="question2" value="Dixie National Rodeo">Dixie National Rodeo<br>
    <input type="radio" id="mc" name="question2" value="Cattle Rodeo">Cattle Rodeo<br>
    
    <p>What chemist native Jacksonian invented Pine-Sol floor cleaner in 1929?</p>
    <input type="radio" id="mc" name="question3" value="Harry Cole">Harry Cole<br>
    <input type="radio" id="mc" name="question3" value="Harlon Cole">Harlon Cole<br>

    <p>On June 11,1963, Where was the first lung transplant took place at in Jackson?</p>
    <input type="radio" id="mc" name="question4" value="Mercy Hospital">Mercy Hospital<br>
    <input type="radio" id="mc" name="question4" value="Univerity of Mississippi Medical Center">Univerity of Mississippi Medical Center<br>
    

    <p>Jackson is the capital city of Mississippi. What river is it situated on?</p>
    <input type="radio" id="mc" name="question5" value="Pearl">Pearl<br>
    <input type="radio" id="mc" name="question5" value="Mississippi">Mississippi<br>
    

    <p>Mississippi produces about 60% of America's what?</p>
    <input type="radio" id="mc" name="question6" value="civil war history">Civil War History<br>
    <input type="radio" id="mc" name="question6" value="Catfish">Catfish<br>


    <p>There is an extinct volcano beneath Mississippi's capital city, Jackson. Which sports stadium of Mississippi does it lie directly under?</p>
    <input type="radio" id="mc" name="question7" value="Vaught Hemingway Stadium">Vaught Hemingway Stadium<br>
    <input type="radio" id="mc" name="question7" value="Mississippi Coliseum">Mississippi Coliseum<br>
    

    <p>Mississippi's official nickname is both "the Magnolia State" and the...?</p>
    <input type="radio" id="mc" name="question8" value="Sunflower State">Sunflower State<br>
    <input type="radio" id="mc" name="question8" value="Hospitality State">Hospitality State<br>

    <p>The capital of Mississippi is Jackson, but for whom was it named?</p>
    <input type="radio" id="mc" name="question9" value="Andrew Jackson">Andrew Jackson<br>
    <input type="radio" id="mc" name="question9" value="General Lee">General Lee<br>

    <p>Mississippi borders four other states. With three of those four it shares actual land borders, but from which state is it entirely separated by the Mississippi River?</p>
    <input type="radio" id="mc" name="question10" value="Arkansas">Arkansas<br>
    <input type="radio" id="mc" name="question10" value="Alabama">Alabama<br>

    <input id="submitBtn" type="button" value="Done">
    </form>
    `
    // submit button
    let submitBtn = document.getElementById('submitBtn');
    let form = document.getElementById('quiz');
    submitBtn.addEventListener('click', ()=> {
        check();
        form.classList.add('d-none');
    })
}


// start game

function startGame(){
    let start = document.getElementById('start');
    start.innerHTML = `
        <p><p>
        <button id="startBtn" class="btn btn-warning">start game</button>
        
    `
    let startBtn = document.getElementById('startBtn');
    startBtn.addEventListener('click', ()=> {
        makeForm();
        let form = document.getElementById('form');
        start.classList.add('d-none');
    })
    
}

startGame();
