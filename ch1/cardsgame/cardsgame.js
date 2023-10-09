export const playCardGame = () =>{

let cards=[];

const suits= ['♠','♦', '♥', '♣'];

const values =[

    {id:2, value:2},
    {id:3, value:3},    {id:4, value:4},
    {id:5, value:5},    {id:6, value:6},
    {id:7, value:7},    {id:8, value:8},
    {id:9, value:9},    {id:10, value:10},
    {id:'J', value:11},    {id:'Q', value:12},
    {id:'K', value:13},    {id:'A', value:14}

    ]
    
for (let i of values){
    for(let l of suits){
        const obj = {
            values: i.value,
            suits: l,
        }
        cards.push(obj)
    }
}
let random =[];
const randomCard = cards[Math.floor(Math.random()*cards.length)];
random.push(randomCard);

const dom = document;
console.dir(dom);
const buttonElement = dom.querySelector('button');
console.dir(buttonElement);
const handleButtonClick = (event) => {
console.log('Hiciste click, canalla');
console.log(event);}

buttonElement.addEventListener('button',
handleButtonClick)


   /*  const parentElement = h1Element.parentNode;
    console.dir(parentElement);
    parentElement.innerHTML += `
      <div>
        <h2>Título canalla</h2>` */
//console.log(cards);
//console.log(random);
 }

    playCardGame();