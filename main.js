let dealerdisplay = document.getElementById("dealer");
let playerdisplay = document.getElementById("player");
let hit = document.getElementById("hit");
let stand = document.getElementById("stand");
let deal = document.getElementById("deal");
let play = document.getElementById("play");
let dealerimg = document.getElementById("dealerimg");
let playerimg = document.getElementById("playerimg");
cahds = {};
hit.addEventListener("click", clickhit);
stand.addEventListener("click", clickstand);
document.addEventListener("click", start);

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
}

function clickhit() {
  if (!pressed){
    return
  }
  if (stopstand) {
    alert("Can't Press this again");
    return;
  }
  if (stophit) {
    alert("Bust! Dealer Wins");
    return;
  }
  checknum();
  playerhand.push(randint());
  if (checknum() > 21) {
    alert("Bust! Dealer Wins");
    cardsthing(playerhand, playerdisplay);

    stophit = true;
    return;
  }

  cardsthing(playerhand, playerdisplay, 0);
}
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
function clickstand() {
  if (stopstand) {
    return;
  }
  if (stophit) {
    alert("Bust! Dealer Wins");
    return;
  }
  dealerhandnum = 0;
  for (let x = 0; x < dealerhand.length; x++) {
    dealerhandnum += dealerhand[x].value;
  }
  add();
  console.log(dealerhandnum);
  console.log(playerhandnum);

  if (dealerhandnum > 21) {
    alert("Bust! Player wins");
    deal.innerHTML = dealerhandnum;

    cardsthing(dealerhand, dealerdisplay, 0);
    return;
  }
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
function randint() {
   let random = Math.floor(Math.random() * cards.length);
  let thing = cards[random];
  console.log(random);
  cahds[`${thing.name}`]++;
  if (isNaN(cahds[`${thing.name}`])) {
    cahds[`${thing.name}`] = 1;
    return cards[random];
  }
  console.log(cahds[`${thing.name}`])
  if (cahds[`${thing.name}`] >= 2) {
    cards.splice(random, 1);

    return randint()
  } 
}
function cardsthing(L, M, test) {
  M.innerHTML = "";
  if (test === 1) {
    M.innerHTML += `<img src="cards/backside.png"><img src="cards/${L[1].name}.png">`;
  } else {
    for (let x = 0; x < L.length; x++) {
      M.innerHTML += `<img src="cards/${L[x].name}.png">`;
    }
  }
}

