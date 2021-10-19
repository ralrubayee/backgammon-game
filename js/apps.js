/*-------------------------------- Constants --------------------------------*/

const diceSound = new Audio('./audio/roll-dice.mp3');

/*---------------------------- Variables (state) ----------------------------*/
let movingchip 
let WhiteChipsPlace =[]
let diceArray = []
let dice1 =0
let dice2 =0
let currenetChecker 
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

  WhiteChipsPlace = [c1,c1,c12,c12,c12,c12,c12,c17,c17,c17,c19,c19,c19,c19,c19]
}

function play(){
 white.forEach((w, idx)=>{
   w.addEventListener("click",move=>{
      w.remove()
      currenetChecker = w
      highlightcolumn(idx)
    })
  })
}
function highlightcolumn (idx){
  let diceArray =[dice1,dice2]
for(i=0; i < columns.length ; i++){
  if (columns[i]=== WhiteChipsPlace[idx]){
    diceArray.forEach(dice =>{
        columns[i+dice].classList.add("high-light")
        addToNewColumn(columns[i+dice])
        
        })
        
   }
 }
}
function addToNewColumn(newC){
  newC.addEventListener("click",add=>{
    newC.appendChild(currenetChecker)
  return
  })
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

  //choosing two random numbers bitween 1-6
   dice1 =  Math.floor(Math.random() * 6 + 1)
   dice2 = Math.floor(Math.random() * 6 + 1);

// show the dice on the board based on the random numbers
if (dice1 === dice2){
  if(dice1=== 1){d1.hidden = false}
  else if(dice1=== 2){d2.hidden = false}
  else if(dice1=== 3){d3.hidden = false}
  else if(dice1=== 4){d4.hidden = false}
  else if(dice1=== 5){d5.hidden = false}
  else if(dice1=== 6){d6.hidden = false}
  } else {
  if(dice1=== 1){d1.hidden = false}
  else if(dice1=== 2){d2.hidden = false}
  else if(dice1=== 3){d3.hidden = false}
  else if(dice1=== 4){d4.hidden = false}
  else if(dice1=== 5){d5.hidden = false}
  else if(dice1=== 6){d6.hidden = false}
  if(dice2=== 1){d1.hidden = false}
  else if(dice2=== 2){d2.hidden = false}
  else if(dice2=== 3){d3.hidden = false}
  else if(dice2=== 4){d4.hidden = false}
  else if(dice2=== 5){d5.hidden = false}
  else if(dice2=== 6){d6.hidden = false}
}
next.hidden=false
rollBtn.hidden = true
play()
}