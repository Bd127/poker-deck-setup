const grid = document.querySelector(".grid");

// card varible
const types = ["<b>D</b>", "<b>S</b>", "<b>H</b>", "<b>C</b>"];
const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
let deck = [];
let hand = [];
let gy = [];
// keeps count of the amount of times i used my graveYard()
let a = 0;
console.log(a);

//creating the deck
function deckBuilder() {
    for (let i = 0; i < types.length; i++) {
        for (let x = 0; x < counts.length; x++) {
            deck.push(types[i] + counts[x]);
        }
    }

    const div = document.createElement("div");
    div.setAttribute("class", "card");
    grid.appendChild(div);

    // calls the gravyard function when clicked on
    div.addEventListener("click", graveYard);
    
}

   
    
    


deckBuilder();

// shuffing the deck
function shuffie() {
    deck.sort(() => 0.5 - Math.random());
    return deck
}
function draw() {
    for (let z = 0; z <= 4; z++) {
        hand.push(deck[z]);
        deck.splice(z, 1);
    }
    for (let x = 0; x <= 4; x++) {
        const myhand = document.createElement("div");
        myhand.setAttribute("class", "hand");
        grid.appendChild(myhand);
        myhand.innerHTML = hand[x];
    }
}
// grav yard function
function graveYard() {
    gy.push(deck[0]);
    deck.splice(0, 1);
   
   
    const gyDisplay = document.createElement("div");
    gyDisplay.setAttribute("class", "grave-yard");
    grid.appendChild(gyDisplay);
    gyDisplay.innerHTML = gy[a];
    a++;
    console.log(a);
}


shuffie();
draw();








