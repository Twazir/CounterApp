//document.getElementById("count-el").innerText = 10;

//pass a variable
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saveEl")

//pass an argument
console.log(countEl)
//variable
    let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}
//call the save function for "count" and write the Nummber along by saving.

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
// set the counter to Zero after every Save...
    count = 0
    countEl.innerText = 0
    count.innerText = count
    console.log(count)
}





