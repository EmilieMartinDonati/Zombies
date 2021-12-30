// 1. Logique play qui va créer les blocks.

const mystery = "./questionMark.png";
const containerCards = document.getElementById("container-cards");
containerCards.style.display = "flex wrap";
containerCards.style.flexDirection = "row";
containerCards.style.justifyContent = "center";
const playBtn = document.getElementById("btn-play");

let array = [
    {
        name: 'zombie',
        recto: "./bat.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'geisha',
        recto: "./geisha.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: true,
    },
    {
        name: 'mandala',
        recto: "./mandala.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'bat2',
        recto: "./bat2.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'ghost',
        recto: "./tux-161365_640.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'cherry',
        recto: "./imagesMemo/cherrytree.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'samurai',
        recto: "./imagesMemo/samuray.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'rabbits',
        recto: "./imagesMemo/rabbits.png",
        verso: "./questionMark.png",
        isRecto: false,
        clicked: false,
    }
]

let cards = [];


for (let i = 0; i < array.length; i++) {
    cards.push(array[i]);
    cards.push(array[i]);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(cards);

let myCards;

function createCards() {
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement("div");
        div.className = `card_${cards[i].name}`;
        div.id = `${cards[i].url}`;
        div.style.display = "inline-block";
        div.style.margin = "40px";
        div.style.width = "100px";
        div.style.height = "120px";
        div.style.borderRadius = "10px";
        div.style.backgroundColor = "black";
        let img = document.createElement("img");
        img.src = cards[i].verso;
        img.id = cards[i].recto;
        img.className = i;
        img.style.width = "100px";
        img.style.height = "120px";
        img.style.borderRadius = "10px";
        img.style.border = "blue dotted 2px";
        div.appendChild(img);
        containerCards.appendChild(div);
        console.log(typeof img.className);
    }
    myCards = document.querySelectorAll("#container-cards div img");
    [...myCards].forEach((card) => (card.addEventListener("click", toggleHandler)));
}

let cardClicked = [];
console.log(cardClicked.length);

let victoryCounter = 0;


function toggleHandler(event) {
    const card = event.target;
    cardClicked.push(card);
    const id = card.getAttribute("id");
    card.src = id;
    // card.className = "clicked";
    card.isRecto = true;
    let arrIntermediary = [];
    // console.log(cardClicked, cardClicked.length, cardClicked[1]);
    // if (cardClicked.length >= 2) {
    //     cardClicked.shift();
    // }
    // else if (cardClicked[0].src === cardClicked[1].src) {
    //     cardClicked[0].style.backgroundColor = "green";
    //         cardClicked[1].style.backgroundColor = "green";
    //         cardClicked[0].src = cardClicked[0].id;
    //         cardClicked[1].src = cardClicked[1].id;
    //         counterVictory += 1;
    //         console.log(counterVictory);
    // }
    for (let i = 1; i < cardClicked.length; i++) {
        console.log(cardClicked[i - 1].id, cardClicked[i].id);

        if ((cardClicked[i].id === cardClicked[i - 1].id) && Number(cardClicked[i].className) !== Number(cardClicked[i - 1].className) && cardClicked[i].backgroundColor !== "green" && cardClicked[i - 1].backgroundColor !== "green") {
            cardClicked[i - 1].style.backgroundColor = "green";
            cardClicked[i].style.backgroundColor = "green";
            cardClicked[i - 1].src = cardClicked[i - 1].id;
            cardClicked[i].src = cardClicked[i].id;
        }
    }

    const myInterval = setInterval(function toggleBack() {
        if (event.target.style.backgroundColor !== "green") {
            event.target.src = mystery;
            event.target.isRecto = false;
        }
    }, 4000)
}


function Victory() {
    myCards = document.querySelectorAll("#container-cards div img");
    [...myCards].forEach(function checkVictory(elem) {
        if (elem.style.backgroundColor === "green") {
            victoryCounter += 1;
            console.log(victoryCounter);
        }
    })
}

playBtn.addEventListener("click", createCards);


