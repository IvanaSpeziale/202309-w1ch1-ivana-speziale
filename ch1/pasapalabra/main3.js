const questionLibrary = [  
    [
        {
            question: 'Ingrediente mas utilizado en la comida japonesa', 
            answer: 'arroz'
        },

        {
            question: '¿Cuál es el nombre del país más grande de América del Sur?',
            answer: 'argentina'
        },

        {
            question: '¿Qué órgano del cuerpo humano es responsable de bombear la sangre?',
            answer: 'corazón'
        },

        {
            letter:'a'
        }
    ],

[
        {
            question: '¿Cómo se llama la capital de Portugal?', 
            answer: 'Lisboa'
        },
        
        {
            question: '¿Qué ave nocturna de hábitos carnívoros es conocida por girar la cabeza casi 180 grados?',
            answer: 'Buho'
        },
        
        {
            question: 'Metodo de transporte acuatico',
            answer: 'Barco'
        },
        
        {
            letter:'b'
        }
],

];

let counterCorrect = 0;
let counterWrong = 0;
let turn =0;
const passed= [];
let switchCase = false;

//button submit
const sumCorrectCounter = () =>{
    counterCorrect++;
}

const sumWrongCounter = () => {
    counterWrong++;
}

const sumTurn = () =>{
    turn++;
}

const modifyLetter = (turnValue) =>{
    const foundLetter = questionLibrary[turnValue][3].letter;
    let domLetterToModify = dom.querySelector(`.${foundLetter}-letter`)
    //console.log(foundLetter);
    domLetterToModify.innerHTML = `<p class="grey-letter">${foundLetter.toUpperCase()}</p>` 
}

const printQuestion = (turnValue) =>{
    const foundQuestion = questionLibrary[turnValue][0].question;
    let domFoundQuestion  = dom.querySelector('.ask')
    //console.log(domFoundQuestion);
    domFoundQuestion.textContent= `${foundQuestion}`  
}


const dom = document
const handleSubmit = (event) =>{
    event.preventDefault();
    const formElement = event.target
    let userAnswer = formElement.elements.namedItem('answer').value;
    let correctAnswer= questionLibrary[turn][0].answer;
    
    
    if (userAnswer === correctAnswer){
        modifyLetter(turn);
        sumCorrectCounter();
    
    }else {
        modifyLetter(turn);
        sumWrongCounter();
    }
    sumTurn();
    
    //agregar required
    
}
printQuestion(turn);
const domSubmit = dom.querySelector('form');
domSubmit.addEventListener('submit', handleSubmit);
