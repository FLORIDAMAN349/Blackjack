

let dealerdisplay = document.getElementById("dealer")
let playerdisplay = document.getElementById("player")
let hit = document.getElementById("hit")
let stand = document.getElementById("stand")
hit.addEventListener("click", clickhit)
stand.addEventListener("click",clickstand)
let cards = [1,2,3,4,5,6,7,8,9,10,10,10,10]
let dealerhand = []
let playerhand = []
let stophit = false
let stopstand = false
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
    if (stopstand){
        return
    }
    if (stophit){
        alert("Bust! Dealer Wins")
        return
    }
    let playerhandnum = 0
    playerhand.push(random())
    for (x = 0;x < playerhand.length;x++){
        playerhandnum += playerhand[x]
        console.log(playerhandnum)
        if (playerhandnum > 21){
            alert("Bust! Dealer Wins")
            playerdisplay.innerHTML = playerhand 
            stophit = true
            return
        }  
    }
    playerdisplay.innerHTML = playerhand 

}
function clickstand(){
    if (stopstand){
        return
    }
    if (stophit){
        alert("Bust! Dealer Wins")
        return
    }
    let dealerhandnum = 0
    for (x = 0;x<dealerhand.length;x++){
        dealerhandnum += dealerhand[x]
        console.log(dealerhandnum)
        
    }
    if (dealerhandnum <= 15){
        dealerhand.push(random())
    }
      
    else if (dealerhandnum > 21){
        alert("Bust! Player wins")
        dealerdisplay.innerHTML = dealerhand
        return
    }   else if (dealerhandnum > 15){
        dealerdisplay.innerHTML = dealerhand
        return
    }  
    if (dealerhandnum > playerhandnum){
        alert("Dealer Wins!")
    }   else {
        alert("Player Wins!")
    }
    dealerdisplay.innerHTML = dealerhand
    stopstand = true
}
function random(){
    let random = Math.floor(Math.random() * 13)
    return cards[random]
}

console.log(dealerhand)
console.log(playerhand)

   