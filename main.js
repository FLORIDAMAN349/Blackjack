

let dealerdisplay = document.getElementById("dealer")
let playerdisplay = document.getElementById("player")
let hit = document.getElementById("hit")
let stand = document.getElementById("stand")
hit.addEventListener("click", clickhit)
stand.addEventListener("click",clickstand)
let j = 10
let q = 10
let k = 10
let a = 1
let cards = [a,2,3,4,5,6,7,8,9,10,j,q,k]
let dealerhand = []
let playerhand = []
let stophit = false
let stopstand = false
let playerhandnum = 0
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
        alert("Can't Press this again")
        return
    }
    if (stophit){
        alert("Bust! Dealer Wins")
        return
    }
    checknum()
    playerhand.push(random())
    if (checknum() > 21){
            alert("Bust! Dealer Wins")
            playerdisplay.innerHTML = playerhand 
            stophit = true
            stopstand = true
            return
        
    }
    
    playerdisplay.innerHTML = playerhand 

}
function checknum(){
    for (x = 0;x < playerhand.length;x++){
        playerhandnum += playerhand[x]
    }
    return playerhandnum
}
function clickstand(){
    if (stopstand){
        return
    }
    if (stophit){
        alert("Bust! Dealer Wins")
        return
    }
    dealerhandnum = 0
    for (x = 0;x<dealerhand.length;x++){
        dealerhandnum += dealerhand[x]
        add(dealerhandnum)
    }
    console.log(dealerhandnum)
    console.log(playerhandnum)
      
    if (dealerhandnum > 21){
        alert("Bust! Player wins")
        dealerdisplay.innerHTML = dealerhand
        return
    }   else if (dealerhandnum > 15){
        dealerdisplay.innerHTML = dealerhand
        return
    }  
    if (dealerhandnum > playerhandnum){
        alert("Dealer Wins!")
    }   else if (playerhandnum === dealerhandnum){
        alert("draw")
    }   else {
        alert("Player Wins!")
    }
    dealerdisplay.innerHTML = dealerhand
    stopstand = true
    stophit = true
}
function add(number){
    if (number <= 15){
        dealerhand.push(random())
    }
}
function random(){
    let random = Math.floor(Math.random() * 13)
    return cards[random]
}
function winner (w,e){
    
}
console.log(dealerhand)
console.log(playerhand)

