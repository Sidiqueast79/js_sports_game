
let teamoneShootButton = document.querySelector("#teamone-shoot-button")
let teamoneNumshots = document.querySelector("#teamone-numshots")
let teamoneNumgoals= document.querySelector("#teamone-numgoals")
teamoneShootButton.addEventListener("click", function () {
   let newShottotal = Number(teamoneNumshots.innerHTML) + 1;
   teamoneNumshots.innerHTML = newShottotal;
   if(Math.random() < 0.5) {
      let newgoals = Number(teamoneNumgoals.innerHTML) + 1;
      teamoneNumgoals.innerHTML = newgoals;
      }
})
let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button")
let teamtwoNumshots = document.querySelector("#teamtwo-numshots")
let teamtwoNumgoals= document.querySelector("#teamtwo-numgoals")
teamtwoShootButton.addEventListener("click", function () {
   let newShottotal = Number(teamtwoNumshots.innerHTML) + 1;
   teamtwoNumshots.innerHTML = newShottotal;
   if(Math.random() < 0.5) {
      let newgoals = Number(teamtwoNumgoals.innerHTML) + 1;
      teamtwoNumgoals.innerHTML = newgoals;
   }
})
let numResets = document.querySelector("#num-resets")
let resetButton = document.querySelector("#reset-Button")
resetButton.addEventListener("click", function () {
teamoneNumshots.innerHTML = 0;
teamoneNumgoals.innerHTML = 0;
teamtwoNumshots.innerHTML = 0;
teamtwoNumgoals.innerHTML = 0;
let newresetNum = Number(numResets.innerHTML) + 1;
numResets.innerHTML = newresetNum;
})
