let dealerdisplay = document.getElementById("dealer");
let playerdisplay = document.getElementById("player");
let hit = document.getElementById("hit");
let stand = document.getElementById("stand");
let deal = document.getElementById("deal");
let play = document.getElementById("play");
let dealerimg = document.getElementById("dealerimg");
let playerimg = document.getElementById("playerimg");
let back = document.getElementsByClassName("backpic");
let front = document.getElementsByClassName("frontside");
let again = document.getElementById("again")
// Buttons
hit.addEventListener("click", clickhit);
stand.addEventListener("click", clickstand);
again.addEventListener("click", restart)
document.addEventListener("click", start);
// object that will be used later to check there will be no more than 2 of the same card
cahds = {};
// Array of every card

let cards = [
  { name: "1club", value: 11 },
  { name: "2club", value: 2 },
  { name: "3club", value: 3 },
  { name: "4club", value: 4 },
  { name: "5club", value: 5 },
  { name: "6club", value: 6 },
  { name: "7club", value: 7 },
  { name: "8club", value: 8 },
  { name: "9club", value: 9 },
  { name: "10club", value: 10 },
  { name: "jackclub", value: 10 },
  { name: "queenclub", value: 10 },
  { name: "kingclub", value: 10 },

  { name: "1spade", value: 11 },
  { name: "2spade", value: 2 },
  { name: "3spade", value: 3 },
  { name: "4spade", value: 4 },
  { name: "5spade", value: 5 },
  { name: "6spade", value: 6 },
  { name: "7spade", value: 7 },
  { name: "8spade", value: 8 },
  { name: "9spade", value: 9 },
  { name: "10spade", value: 10 },
  { name: "jackspade", value: 10 },
  { name: "queenspade", value: 10 },
  { name: "kingspade", value: 10 },

  { name: "1diamond", value: 11 },
  { name: "2diamond", value: 2 },
  { name: "3diamond", value: 3 },
  { name: "4diamond", value: 4 },
  { name: "5diamond", value: 5 },
  { name: "6diamond", value: 6 },
  { name: "7diamond", value: 7 },
  { name: "8diamond", value: 8 },
  { name: "9diamond", value: 9 },
  { name: "10diamond", value: 10 },
  { name: "jackdiamond", value: 10 },
  { name: "queendiamond", value: 10 },
  { name: "kingdiamond", value: 10 },

  { name: "1heart", value: 11 },
  { name: "2heart", value: 2 },
  { name: "3heart", value: 3 },
  { name: "4heart", value: 4 },
  { name: "5heart", value: 5 },
  { name: "6heart", value: 6 },
  { name: "7heart", value: 7 },
  { name: "8heart", value: 8 },
  { name: "9heart", value: 9 },
  { name: "10heart", value: 10 },
  { name: "jackheart", value: 10 },
  { name: "queenheart", value: 10 },
  { name: "kingheart", value: 10 },
];
let dealerhand = [];
let playerhand = [];
var stophit = false;
var stopstand = false;
let pressed = false;
let playerhandnum = 0;
let dealerhandnum = 0;
// First click, sets up cards
function start() {
  if (pressed) {
    return;
  }

  for (let x = 0; x < 2; x++) {
    playerhand.push(randint());
    dealerhand.push(randint());
  }
  console.log(dealerhand, playerhand);
  cardsthing(playerhand, playerdisplay, 0);
  cardsthing(dealerhand, dealerdisplay, 1);
  checknum();
  pressed = true;
  again.style.visibility = "visible"
  document.getElementById("start").innerHTML = ""
}
// restart button, resets everything
function restart() {
  

  console.log("ajjjjjsadhashd")
  dealerhand = [];
  playerhand = [];
  stophit = false;
  stopstand = false;
  pressed = false;
  playerhandnum = 0;
  dealerhandnum = 0;
  play.innerHTML = ""
  deal.innerHTML = ""
  cards = [
    { name: "1club", value: 11 },
    { name: "2club", value: 2 },
    { name: "3club", value: 3 },
    { name: "4club", value: 4 },
    { name: "5club", value: 5 },
    { name: "6club", value: 6 },
    { name: "7club", value: 7 },
    { name: "8club", value: 8 },
    { name: "9club", value: 9 },
    { name: "10club", value: 10 },
    { name: "jackclub", value: 10 },
    { name: "queenclub", value: 10 },
    { name: "kingclub", value: 10 },
  
    { name: "1spade", value: 11 },
    { name: "2spade", value: 2 },
    { name: "3spade", value: 3 },
    { name: "4spade", value: 4 },
    { name: "5spade", value: 5 },
    { name: "6spade", value: 6 },
    { name: "7spade", value: 7 },
    { name: "8spade", value: 8 },
    { name: "9spade", value: 9 },
    { name: "10spade", value: 10 },
    { name: "jackspade", value: 10 },
    { name: "queenspade", value: 10 },
    { name: "kingspade", value: 10 },
  
    { name: "1diamond", value: 11 },
    { name: "2diamond", value: 2 },
    { name: "3diamond", value: 3 },
    { name: "4diamond", value: 4 },
    { name: "5diamond", value: 5 },
    { name: "6diamond", value: 6 },
    { name: "7diamond", value: 7 },
    { name: "8diamond", value: 8 },
    { name: "9diamond", value: 9 },
    { name: "10diamond", value: 10 },
    { name: "jackdiamond", value: 10 },
    { name: "queendiamond", value: 10 },
    { name: "kingdiamond", value: 10 },
  
    { name: "1heart", value: 11 },
    { name: "2heart", value: 2 },
    { name: "3heart", value: 3 },
    { name: "4heart", value: 4 },
    { name: "5heart", value: 5 },
    { name: "6heart", value: 6 },
    { name: "7heart", value: 7 },
    { name: "8heart", value: 8 },
    { name: "9heart", value: 9 },
    { name: "10heart", value: 10 },
    { name: "jackheart", value: 10 },
    { name: "queenheart", value: 10 },
    { name: "kingheart", value: 10 },
  ];
  start();
  pressed = true
}
// hit button
function clickhit() {
  // if other buttons are already pressed, this cannot be pressed again
  if (!pressed) {
    return;
  }
  if (stopstand) {
    alert("Can't Press this again");
    return;
  }
  // If bust, cant press again
  if (stophit) {
    alert("Bust! Dealer Wins");
    return;
  }
  //  if the number is above 21 cant press again, alert
  checknum();
  playerhand.push(randint());
  if (checknum() > 21) {
    alert("Bust! Dealer Wins");
    cardsthing(playerhand, playerdisplay);

    stophit = true;
    return;
  }
  // display the cards
  cardsthing(playerhand, playerdisplay, 0);
}
// check if the number is above 21 
function checknum() {
  playerhandnum = 0;
  for (let x = 0; x < playerhand.length; x++) {
    playerhandnum += playerhand[x].value;
    play.innerHTML = playerhandnum;
    if (playerhandnum > 21) {
      for (let x = 0; x < playerhand.length; x++) {
        if (playerhand[x].value === 11) {
          playerhand[x].value = 1;
          playerhandnum -= 10;
          cardsthing(playerhand, playerdisplay, 0);
          play.innerHTML = playerhandnum;
        }
      }
    }
  }
  return playerhandnum;
}
// stand button
function clickstand() {
  // if pressed already cant press again
  if (stopstand) {
    return;
  }
  if (stophit) {
    alert("Bust! Dealer Wins");
    return;
  }
  dealerhandnum = 0;
  // doesnt need to check number after every time can just automate
  for (let x = 0; x < dealerhand.length; x++) {
    dealerhandnum += dealerhand[x].value;
  }
  add();
  console.log(dealerhandnum);
  console.log(playerhandnum);
  // if number is above 21, bust
  if (dealerhandnum > 21) {
    alert("Bust! Player wins");
    deal.innerHTML = dealerhandnum;

    cardsthing(dealerhand, dealerdisplay, 0);
    return;
  }
  // check between scores
  if (dealerhandnum < playerhandnum) {
    alert("Player Wins!");
  } else if (playerhandnum === dealerhandnum) {
    alert("Push");
  } else {
    alert("Dealer Wins!");
  }
  deal.innerHTML = dealerhandnum;
  cardsthing(dealerhand, dealerdisplay, 0);
  stopstand = true;
}
// add new card for dealer and check if it is above 15
function add() {
  while (dealerhandnum <= 15) {
    let bob = randint();
    dealerhand.push(bob);
    dealerhandnum += bob.value;
    if (dealerhandnum > 21) {
      for (let x = 0; x < dealerhand.length; x++) {
        if (dealerhand[x].value === 11) {
          dealerhand[x].value = 1;
          dealerhandnum -= 10;
          cardsthing(dealerhand, dealerdisplay, 0);
          deal.innerHTML = dealerhandnum;
        }
      }
    }
  }
}
// select random number
function randint() {
  let random = Math.floor(Math.random() * cards.length);
  let thing = cards[random];
  console.log(random);
  cahds[`${thing.name}`]++;
  // if the card is called more than 2 times it is taken out of the array and another card is selected
  if (isNaN(cahds[`${thing.name}`])) {
    cahds[`${thing.name}`] = 1;
    return cards[random];
  }
  console.log(cahds[`${thing.name}`]);
  if (cahds[`${thing.name}`] >= 2) {
    cards.splice(random, 1);

    return randint();
  }
}
function cardsthing(L, M, test) {
  // displaying the cards
  M.innerHTML = "";
  if (test === 1) {
    M.innerHTML += `<img class="backpic"src="cards/backside.png"><img class="frontside"src="cards/${L[1].name}.png">`;
  } else {
    for (let x = 0; x < L.length; x++) {
      M.innerHTML += `<img class="frontside" src="cards/${L[x].name}.png">`;
    }
  }
}
