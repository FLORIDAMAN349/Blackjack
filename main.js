let dealerdisplay = document.getElementById("dealer");
let playerdisplay = document.getElementById("player");
let hit = document.getElementById("hit");
let stand = document.getElementById("stand");
let deal = document.getElementById("deal");
let play = document.getElementById("play");
let dealerimg = document.getElementById("dealerimg");
let playerimg = document.getElementById("playerimg");
let heart = "heart";
let spade = "spade";
let diamond = "diamond";
let club = "club";
let array = [];
cahds = {};
hit.addEventListener("click", clickhit);
stand.addEventListener("click", clickstand);

//   let s1, h1, c1, d1 = 1
//   let s2, h2, c2, d2 = 2
//   let s3, h3, c3, d3 = 3
//   let s4, h4, c4, d4 = 4
//   let s5, h5, c5, d5 = 5
//   let s6, h6, c6, d6 = 6
//   let s7, h7, c7, d7 = 7
//   let s8, h8, c8, d8 = 8
//   let s9, h9, c9, d9 = 9
//   let s10, h10, c10, d10 = 10
//   let sj, hj, cj, dj = 10
//   let sq, hq, cq, dq = 10
//   let sk, hk, ck, dk = 10

let cards = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10,
  //    s1, h1, c1, d1,
  //    s2, h2, c2, d2,
  //    s3, h3, c3, d3,
  //    s4, h4, c4, d4,
  //    s5, h5, c5, d5,
  //    s6, h6, c6, d6,
  //    s7, h7, c7, d7,
  //    s8, h8, c8, d8,
  //    s9, h9, c9, d9,
  //    s10, h10, c10,d10,
  //    sj, hj, cj, dj,
  //    sq, hq, cq, dq,
  //    sk, hk, ck, dk
];
let dealerhand = [];
let playerhand = [];
var stophit = false;
var stopstand = false;
let playerhandnum = 0;
let dealerhandnum = 0;
//   pick cards from 1-13
// for (let x = 0; x < 2; x++) {
//   dealerhand.push(random());

//   dealerdisplay.innerHTML = `?, ${dealerhand[1]} `;
// }
for (let x = 0; x < 2; x++) {
  playerhand.push(random());
  start(playerhand, playerdisplay);
  dealerhand.push(random());
  start(dealerhand, dealerdisplay);
}

checknum();
function clickhit() {
  if (stopstand) {
    alert("Can't Press this again");
    return;
  }
  if (stophit) {
    alert("Bust! Dealer Wins");
    return;
  }
  checknum();
  playerhand.push(random());
  if (checknum() > 21) {
    alert("Bust! Dealer Wins");
    cardsthing(playerhand, playerdisplay);

    stophit = true;
    return;
  }

  cardsthing(playerhand, playerdisplay);
}
function checknum() {
  playerhandnum = 0;
  for (let x = 0; x < playerhand.length; x++) {
    playerhandnum += playerhand[x];
    play.innerHTML = playerhandnum;
    if (playerhandnum > 21) {
      for (let x = 0; x < playerhand.length; x++) {
        if (playerhand[x] === 11) {
          playerhand[x] = 1;
          playerhandnum -= 10;
          cardsthing(playerhand, playerdisplay);
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
    dealerhandnum += dealerhand[x];
  }
  add();
  console.log(dealerhandnum);
  console.log(playerhandnum);

  if (dealerhandnum > 21) {
    alert("Bust! Player wins");
    deal.innerHTML = dealerhandnum;

    cardsthing(dealerhand, dealerdisplay);
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
  cardsthing(dealerhand, dealerdisplay);
  stopstand = true;
}
function add() {
  while (dealerhandnum <= 15) {
    let bob = random();
    dealerhand.push(bob);
    dealerhandnum += bob;
    if (dealerhandnum > 21) {
      for (let x = 0; x < dealerhand.length; x++) {
        if (dealerhand[x] === 11) {
          dealerhand[x] = 1;
          dealerhandnum -= 10;
          cardsthing(dealerhand, dealerdisplay);
          deal.innerHTML = dealerhandnum;
        }
      }
    }
  }
}
function random() {
  let random = Math.floor(Math.random() * 13);
  if (random === 0) {
    if (playerhandnum < 11) {
      return 11;
    } else if (playerhandnum > 11) {
      return 1;
    }
    if (dealerhandnum < 11) {
      return 11;
    } else if (dealerhandnum > 11) {
      return 1;
    }
  } else {
    return cards[random];
  }
}
function start(L, M) {
  let asd = "";
  for (let x = 0; x < L.length; x++) {
    let thing = L[x];
    if (thing === 11) {
      thing = 1;
    }
    let randomthing = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(randomthing);
    array.push(`${thing}spade`);
    if (randomthing == 1) {
      asd += `<img id="${thing}spade"src="cards/${thing}spade.png">`;
      M.innerHTML = asd;
    } else if (randomthing == 2) {
      asd += `<img src="cards/${thing}heart.png">`;
      M.innerHTML = asd;
    } else if (randomthing == 3) {
      asd += `<img src="cards/${thing}club.png">`;
      M.innerHTML = asd;
    } else if (randomthing == 4) {
      asd += `<img src="cards/${thing}diamond.png">`;
      M.innerHTML = asd;
    }
  }
}

function cardsthing(L, M) {
  let thing = L.pop();
  console.log(thing);
  if (thing === 11) {
    thing = 1;
  }
  let randomthing = Math.floor(Math.random() * (5 - 1) + 1);

  if (randomthing == 1) {
    M.innerHTML += `<img id="${thing}spade"src="cards/${thing}spade.png">`;
    checkarraything(thing, "spade");
    // M.innerHTML = asd;
  } else if (randomthing == 2) {
    M.innerHTML += `<img src="cards/${thing}heart.png">`;
    // M.innerHTML = asd;
  } else if (randomthing == 3) {
    M.innerHTML += `<img src="cards/${thing}club.png">`;
    // M.innerHTML = asd;
  } else if (randomthing == 4) {
    M.innerHTML += `<img src="cards/${thing}diamond.png">`;
    // M.innerHTML = asd;
  }
}

checkarraything(1, "spade");
function checkarraything(o, k) {
  cahds[`${o}${k}`]++;
  if (isNaN(cahds[`${o}${k}`])) {
    cahds[`${o}${k}`] = 1;
  }
}
console.log(dealerhand);
console.log(playerhand);
