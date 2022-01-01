// Retrieve local storage.

const playerName = localStorage.getItem("player");
document.getElementById("user_intel").innerHTML = `Hello ${playerName}`;

let totTimeOnThird = Number(localStorage.getItem("timeFirstLevel")) + Number(localStorage.getItem("timeSecondLevel"));



const victoryElem = document.getElementById("cardbody");
const homeCountDown = document.getElementById("homecountdown");
const timeVictory = document.getElementById("timeVictory");




// 1. Logique play qui va créer les blocks.

const mystery = "./imagesMemo/questionMark.png";
const containerCards = document.getElementById("container-cards");
containerCards.style.display = "flex wrap";
containerCards.style.flexDirection = "row";
containerCards.style.justifyContent = "center";
const playBtn = document.getElementById("btn-play");



const controlsElem = document.getElementById("controls");

let array = [
    {
        name: 'zombie',
        recto: "./images-all-level/bat.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'geisha',
        recto: "./images-all-level/geisha.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: true,
    },
    {
        name: 'prize',
        recto: "./imagesMemo/prize.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'bat2',
        recto: "./images-all-level/Bat2.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'ghost',
        recto: "./images-all-level/tux-161365_640.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'cherry',
        recto: "./imagesMemo/cherrytree.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'samurai',
        recto: "./imagesMemo/samuray.png",
        verso: "./imagesMemo/questionMark.png",
        isRecto: false,
        clicked: false,
    },
    {
        name: 'rabbits',
        recto: "./imagesMemo/rabbits.png",
        verso: "./imagesMemo/questionMark.png",
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

    playBtn.disabled = true;

    function timerHome(limit) {
        return new Promise((resolve, reject) => {
          let count = 200;
          let id = setInterval(() => {
            count--;
            console.log(count);
            homeCountDown.textContent = count;
            timeVictory.textContent = 200 - count;
            localStorage.setItem('timeThirdLevel', (200 - count).toString());
            if (count === limit) resolve(id);
            if (done === true) resolve(id);
          }, 1000);
        });
      }
    
      timerHome(0)
        .then((id) => {
          clearInterval(id);
        });


    controlsElem.classList.remove("col-3");
    controlsElem.classList.add("col-2")
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement("div");
        div.className = `card_${cards[i].name}`;
        div.id = `${cards[i].url}`;
        div.style.display = "inline-block";
        div.style.margin = "40px";
        div.style.width = "15%";
        div.style.height = "140px";
        div.style.borderRadius = "10px";
        div.style.backgroundColor = "black";
        let img = document.createElement("img");
        img.src = cards[i].verso;
        img.id = cards[i].recto;
        img.className = i;
        img.style.width = "100%";
        img.style.height = "140px";
        img.style.borderRadius = "10px";
        img.style.border = "blue groove 5px";
        div.appendChild(img);
        containerCards.appendChild(div);
        console.log(typeof img.className);
    }
    myCards = document.querySelectorAll("#container-cards div img");
    [...myCards].forEach((card) => (card.addEventListener("click", toggleHandler)));
}

let cardClicked = [];
console.log(cardClicked.length);

let done = false;

function victory () {
    document.getElementById("game").classList.remove("col-8");
    document.getElementById("game").classList.add("col-4");
    document.getElementById("intel").classList.remove("col-1");
    document.getElementById("intel").classList.add("col-6");
    totTimeOnThird += Number(localStorage.getItem("timeThirdLevel"));
    victoryElem.style.visibility = "visible";
    const soFar = document.createElement("div");
    const soFarInside = document.createElement("h2");
    soFarInside.classList.add("col-12");
    soFar.classList.add("row");
    soFar.classList.add("text-danger");
    soFar.classList.add("text-center");
    soFarInside.innerHTML = `So far your total time is ${totTimeOnThird} seconds`;
    document.getElementById("main").appendChild(soFar);
    soFar.appendChild(soFarInside);
    done = true;
    const myDivs = document.querySelectorAll("#container-cards div");
    [...myDivs].forEach((div) => div.remove())
}


function toggleHandler(event) {
    const card = event.target;
    cardClicked.push(card);
    const id = card.getAttribute("id");
    card.src = id;
    // card.className = "clicked";
    card.isRecto = true;
    let arrIntermediary = [];
    for (let i = 1; i < cardClicked.length; i++) {
        console.log(cardClicked[i - 1].id, cardClicked[i].id);

        if ((cardClicked[i].id === cardClicked[i - 1].id) && Number(cardClicked[i].className) !== Number(cardClicked[i - 1].className) && cardClicked[i].backgroundColor !== "green" && cardClicked[i - 1].backgroundColor !== "green") {
            cardClicked[i - 1].style.backgroundColor = "blue";
            cardClicked[i].style.backgroundColor = "blue";
            cardClicked[i - 1].src = cardClicked[i - 1].id;
            cardClicked[i].src = cardClicked[i].id;
            if (arrIntermediary.includes(cardClicked[i]) === false) {
                arrIntermediary.push(cardClicked[i]);
            }
            if (arrIntermediary.includes(cardClicked[i - 1]) === false) {
                arrIntermediary.push(cardClicked[i - 1]);
            }
        }
    }
    if (arrIntermediary.length === 16) {
        victory();
    }

    const myInterval = setInterval(function toggleBack() {
        if (event.target.style.backgroundColor !== "blue") {
            event.target.src = mystery;
            event.target.isRecto = false;
        }
    }, 2000)
}



playBtn.addEventListener("click", createCards);


