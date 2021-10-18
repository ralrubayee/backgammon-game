/*-------------------------------- Constants --------------------------------*/

/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/

// cash dice elements
let rollBtn = document.querySelector("#roll-btn")
let d1 = document.querySelector("#d1")
let d2 = document.querySelector("#d2")
let d3 = document.querySelector("#d3")
let d4 = document.querySelector("#d4")
let d5 = document.querySelector("#d5")
let d6 = document.querySelector("#d6")




/*----------------------------- Event Listeners -----------------------------*/

// add event listener to roll button
rollBtn.addEventListener("click",rollTheDice)

/*-------------------------------- Functions --------------------------------*/
function rollTheDice(){
  d1.hidden = true
  d2.hidden = true
  d3.hidden = true
  d4.hidden = true
  d5.hidden = true
  d6.hidden = true

  let dice1 =  Math.floor(Math.random() * 6 + 1)
  let dice2 = Math.floor(Math.random() * 6 + 1);
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
}