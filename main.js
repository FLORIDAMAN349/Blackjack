

let dealerdisplay = document.getElementById("dealer")
let playerdisplay = document.getElementById("player")
let hit = document.getElementById("hit")
let stand = document.getElementById("stand")
hit.addEventListener("click", clickhit)
stand.addEventListener("click",standhit)
let cards = [1,2,3,4,5,6,7,8,9,10,10,10,10]
let dealerhand = []
let playerhand = []
let dealerhandnum = 0
// pick cards from 1-13
for (x=0;x < 2; x++){
    
    dealerhand.push(random())
    dealerdisplay.innerHTML = `?, ${dealerhand[1]}`
}
for (x=0;x < 2; x++){
    playerhand.push(random())
    playerdisplay.innerHTML = playerhand
}
function clickhit(){

    
    let playerhandnum = 0
    bustchecker()
    
    if (bust){
        alert("bust")
        return
        
        
        
    }   else {
        playerhand.push(random())

    }
    bustchecker()
        
    
    playerdisplay.innerHTML = playerhand

}
function standhit(){

}
function random(){
    let random = Math.floor(Math.random() * (13 - 1) + 1)
    return cards[random]
}
function bustchecker(){
    let playerhandnum = 0
    let bust = false
    for (x = 0;x < playerhand.length;x++){
        playerhandnum += playerhand[x]
        
    }
    if (playerhandnum > 21){
        bust = true
        
    }
    return bust
}
console.log(dealerhand)
console.log(playerhand)

