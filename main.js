

let dealerdisplay = document.getElementById("dealer")
let playerdisplay = document.getElementById("player")
let dealerhand = []
let playerhand = []
// pick cards from 1-13
for (x=0;x < 2; x++){
    let pick = Math.floor(Math.random() * (14 - 1) + 1)
    dealerhand.push(pick)
    dealerdisplay.innerHTML = `?, ${dealerhand[1]}`
}
for (x=0;x < 2; x++){
    let pick = Math.floor(Math.random() * (14 - 1) + 1)
    playerhand.push(pick)
    playerdisplay.innerHTML = playerhand
}

console.log(dealerhand)
