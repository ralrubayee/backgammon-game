/*-------------------------------- Constants --------------------------------*/

const diceSound = new Audio('./audio/roll-dice.mp3');

/*---------------------------- Variables (state) ----------------------------*/
let WhiteChipsPlace =[]
let brownChipsPlace = []
let dice1 =0
let dice2 =0
let currenetChecker 
let turn = 0
/*------------------------ Cached Element References ------------------------*/

//buttons
let rollBtn = document.querySelector("#roll-btn")
let next =document.querySelector("#next")

//cash all the columns
let c1 = document.querySelector("c1")
let c2 = document.querySelector("c2")
let c3 = document.querySelector("c3")
let c4 = document.querySelector("c4")
let c5 = document.querySelector("c5")
let c6 = document.querySelector("c6")
let c7 = document.querySelector("c7")
let c8 = document.querySelector("c8")
let c9 = document.querySelector("c9")
let c10 = document.querySelector("c10")
let c11 = document.querySelector("c11")
let c12 = document.querySelector("c12")
let c13 = document.querySelector("c13")
let c14 = document.querySelector("c14")
let c15 = document.querySelector("c15")
let c16 = document.querySelector("c16")
let c17 = document.querySelector("c17")
let c18 = document.querySelector("c18")
let c19 = document.querySelector("c19")
let c20 = document.querySelector("c20")
let c21 = document.querySelector("c21")
let c22 = document.querySelector("c22")
let c23 = document.querySelector("c23")
let c24 = document.querySelector("c24")

let columns = [c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20,c21,c22,c23,c24]

//cash all the checkers
let chips = document.querySelector(".chips")
let w1 =document.querySelector("#w1")
let w2 =document.querySelector("#w2")
let w3 =document.querySelector("#w3")
let w4 =document.querySelector("#w4")
let w5 =document.querySelector("#w5")
let w6 =document.querySelector("#w6")
let w7 =document.querySelector("#w7")
let w8 =document.querySelector("#w8")
let w9 =document.querySelector("#w9")
let w10 =document.querySelector("#w10")
let w11 =document.querySelector("#w11")
let w12 =document.querySelector("#w12")
let w13 =document.querySelector("#w13")
let w14 =document.querySelector("#w14")
let w15 =document.querySelector("#w15")

let w = document.querySelector("#white-chip")

let b1 =document.querySelector("#b1")
let b2 =document.querySelector("#b2")
let b3 =document.querySelector("#b3")
let b4 =document.querySelector("#b4")
let b5 =document.querySelector("#b5")
let b6 =document.querySelector("#b6")
let b7 =document.querySelector("#b7")
let b8 =document.querySelector("#b8")
let b9 =document.querySelector("#b9")
let b10 =document.querySelector("#b10")
let b11 =document.querySelector("#b11")
let b12 =document.querySelector("#b12")
let b13 =document.querySelector("#b13")
let b14 =document.querySelector("#b14")
let b15 =document.querySelector("#b15")

let white = [w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15]
let brown = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15]

// cash dice elements
let d1 = document.querySelector("#d1")
let d2 = document.querySelector("#d2")
let d3 = document.querySelector("#d3")
let d4 = document.querySelector("#d4")
let d5 = document.querySelector("#d5")
let d6 = document.querySelector("#d6")
let di1 = document.querySelector("#d-1")
let di2 = document.querySelector("#d-2")
let di3 = document.querySelector("#d-3")
let di4 = document.querySelector("#d-4")
let di5 = document.querySelector("#d-5")
let di6 = document.querySelector("#d-6")




/*----------------------------- Event Listeners -----------------------------*/

// add event listener to roll button
rollBtn.addEventListener("click",rollTheDice)



    //columns.forEach(c=>{
     // c.addEventListener("click",place=>{
        //c.appendChild(w)
     // })
    //})


/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  c1.appendChild(w1)
  c1.appendChild(w2)
  c12.appendChild(w3)
  c12.appendChild(w4)
  c12.appendChild(w5)
  c12.appendChild(w6)
  c12.appendChild(w7)
  c17.appendChild(w8)
  c17.appendChild(w9)
  c17.appendChild(w10)
  c19.appendChild(w11)
  c19.appendChild(w12)
  c19.appendChild(w13)
  c19.appendChild(w14)
  c19.appendChild(w15)

  c24.appendChild(b1)
  c24.appendChild(b2)
  c13.appendChild(b3)
  c13.appendChild(b4)
  c13.appendChild(b5)
  c13.appendChild(b6)
  c13.appendChild(b7)
  c8.appendChild(b8)
  c8.appendChild(b9)
  c8.appendChild(b10)
  c6.appendChild(b11)
  c6.appendChild(b12)
  c6.appendChild(b13)
  c6.appendChild(b14)
  c6.appendChild(b15)

  WhiteChipsPlace = [c1,c1,c12,c12,c12,c12,c12,c17,c17,c17,c19,c19,c19,c19,c19]
  brownChipsPlace = [c24,c24,c13,c13,c13,c13,c13,c8,c8,c8,c6,c6,c6,c6,c6]

  turn =1
}

function play(){

  if(turn === 2 ){
    brown.forEach((b,idx) =>{ 
      b.addEventListener("click",move=>{
        addBackbrown(b,idx)
      })
      b.removeEventListener("click",move=>{})
    })
    }

  if(turn === 1 ){
white.forEach((w,idx) =>{ 
  w.addEventListener("click",move=>{
    addBackwhite(w,idx)
  })
  w.removeEventListener("click",move=>{})
})
}
}

function addBackbrown(b,idx){
  if(turn === 2){
    for(i=0;i<columns.length; i++){
     if(columns[i]=== brownChipsPlace[idx]){
      //playing the first dice
      if(dice1>0 ){
        let c = columns[i-dice1]
      c.classList.add("high-light")
      c.addEventListener("click",add=>{
  
        c.appendChild(b)
        c.classList.remove("high-light")
        brownChipsPlace[idx] = c
      })
      dice1 = 0
      return
      } else if(dice1===0) {
        let c = columns[i-dice2]
      c.classList.add("high-light")
      c.addEventListener("click",add=>{
        c.appendChild(b)
        c.classList.remove("high-light")
        brownChipsPlace[idx] = c
        next.hidden=false
        next.addEventListener("click",nextPlayer)
      })
      dice2 = 0
      return
      }
     }
    }
  }
  }

function addBackwhite(w,idx){
  if(turn === 1){
  for(i=0;i<columns.length; i++){
   if(columns[i]=== WhiteChipsPlace[idx]){
    //playing the first dice
    if(dice1>0 ){
      let c = columns[i+dice1]
    c.classList.add("high-light")
    c.addEventListener("click",add=>{

      c.appendChild(w)
      c.classList.remove("high-light")
      WhiteChipsPlace[idx] = c
    })
    dice1 = 0
    return
    } else if(dice1===0) {
      let c = columns[i+dice2]
    c.classList.add("high-light")
    c.addEventListener("click",add=>{
      c.appendChild(w)
      c.classList.remove("high-light")
      WhiteChipsPlace[idx] = c
      next.hidden=false
      next.addEventListener("click",nextPlayer)
    })
    dice2 = 0
    return
    }
   }
  }
}
}

function nextPlayer(){
if (turn === 1){
  turn =2
} else if (turn === 2){
  turn =1
}
next.hidden = true
rollBtn.hidden = false
}

function rollTheDice(){
  //play sound when click roll
  diceSound.play()

  //set all dice options to hidden
  d1.hidden = true
  d2.hidden = true
  d3.hidden = true
  d4.hidden = true
  d5.hidden = true
  d6.hidden = true
  di1.hidden = true
  di2.hidden = true
  di3.hidden = true
  di4.hidden = true
  di5.hidden = true
  di6.hidden = true


  //choosing two random numbers bitween 1-6
   dice1 =  Math.floor(Math.random() * 6 + 1)
   dice2 = Math.floor(Math.random() * 6 + 1);

// show the dice on the board based on the random numbers
  if(dice1=== 1){d1.hidden = false}
  else if(dice1=== 2){d2.hidden = false}
  else if(dice1=== 3){d3.hidden = false}
  else if(dice1=== 4){d4.hidden = false}
  else if(dice1=== 5){d5.hidden = false}
  else if(dice1=== 6){d6.hidden = false}
  if(dice2=== 1){di1.hidden = false}
  else if(dice2=== 2){di2.hidden = false}
  else if(dice2=== 3){di3.hidden = false}
  else if(dice2=== 4){di4.hidden = false}
  else if(dice2=== 5){di5.hidden = false}
  else if(dice2=== 6){di6.hidden = false}

 
 rollBtn.hidden = true
play()
}