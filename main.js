

let dealerdisplay = document.getElementById("dealer")
let playerdisplay = document.getElementById("player")
let hit = document.getElementById("hit")
let stand = document.getElementById("stand")
let deal = document.getElementById("deal")
let play = document.getElementById("play")
hit.addEventListener("click", clickhit)
stand.addEventListener("click",clickstand)

// let s1, h1, c1, d1 = 1
// let s2, h2, c2, d2 = 2 
// let s3, h3, c3, d3 = 3 
// let s4, h4, c4, d4 = 4 
// let s5, h5, c5, d5 = 5 
// let s6, h6, c6, d6 = 6 
// let s7, h7, c7, d7 = 7 
// let s8, h8, c8, d8 = 8 
// let s9, h9, c9, d9 = 9 
// let s10, h10, c10, d10 = 10 
// let sj, hj, cj, dj = 10 
// let sq, hq, cq, dq = 10 
// let sk, hk, ck, dk = 10 


let cards = [
    1,2,3,4,5,6,7,8,9,10,10,10,10
    // s1, h1, c1, d1, 
    // s2, h2, c2, d2, 
    // s3, h3, c3, d3, 
    // s4, h4, c4, d4,
    // s5, h5, c5, d5,
    // s6, h6, c6, d6,
    // s7, h7, c7, d7,
    // s8, h8, c8, d8,
    // s9, h9, c9, d9,
    // s10, h10, c10,d10,
    // sj, hj, cj, dj,
    // sq, hq, cq, dq,
    // sk, hk, ck, dk  
]
let dealerhand = []
let playerhand = []
var stophit = false
var stopstand = false
let playerhandnum = 0
let dealerhandnum = 0
// pick cards from 1-13
for (let x=0;x < 2; x++){
    
    dealerhand.push(random())
    console.log(dealerhand)
    dealerdisplay.innerHTML = `?, ${dealerhand[1]} `
}
for (let x=0;x < 2; x++){
    playerhand.push(random())
    cardsthing()
    play.innerHTML = playerhand[0] + playerhand[1]
}

checknum()
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
            return
        
    }
    
    playerdisplay.innerHTML = playerhand

}
function checknum(){
    playerhandnum = 0
    for (let x = 0;x < playerhand.length;x++){
        playerhandnum += playerhand[x]
        play.innerHTML = playerhandnum
        if  (playerhandnum > 21){
            for (let x = 0;x < playerhand.length;x++){
                if (playerhand[x] === 11){
                    playerhand[x] = 1
                    playerhandnum -= 10
                    playerdisplay.innerHTML = playerhand
                    play.innerHTML = playerhandnum

                    
                }
            }
        }
    }
    console.log(playerhandnum)
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
    for (let x = 0;x<dealerhand.length;x++){
        dealerhandnum += dealerhand[x]
        
    }
    add()
    console.log(dealerhandnum)
    console.log(playerhandnum)
      
    if (dealerhandnum > 21){
        alert("Bust! Player wins")
        deal.innerHTML = dealerhandnum

        dealerdisplay.innerHTML = dealerhand
        return
    } 
    if (dealerhandnum < playerhandnum){
      
        alert("Player Wins!")
    }   else if (playerhandnum === dealerhandnum){
        alert("Push")
    }   else {
        alert("Dealer Wins!")
    }
    deal.innerHTML = dealerhandnum
    dealerdisplay.innerHTML = dealerhand
    stopstand = true
}
function add(){
    while (dealerhandnum <= 15){
        let bob = random()
        dealerhand.push(bob)
        dealerhandnum += bob
        if  (dealerhandnum > 21){
            for (let x = 0;x < dealerhand.length;x++){
                if (dealerhand[x] === 11){
                    dealerhand[x] = 1
                    dealerhandnum -= 10
                    dealerdisplay.innerHTML = dealerhand
                    deal.innerHTML = dealerhandnum

                }
            }
        }
    }   
}
function random(){
    let random = Math.floor(Math.random() * 13)
    if (random === 0){
        if  (playerhandnum < 11){
            return 11 
        }   else if (playerhandnum > 11){
            return 1 
        }   
        if  (dealerhandnum < 11){
            return 11
        }   else if (dealerhandnum > 11){
            return 1
        }
    }   else {
        return cards[random]
    }
    
}
function cardsthing(){
    let randomthing = Math.floor(Math.random() * (4-1) + 1)
    console.log(randomthing)
    playerdisplay.innerHTML = ""
    for (let x = 0;x < playerhand.length;x++){
        let thing = playerhand[x].value += 1
        if (randomthing == 1){
            
        }
        playerdisplay.innerHTML += `${playerhand[x]},`

    }
    
    
}

console.log(dealerhand)
console.log(playerhand)

