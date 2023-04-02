// Seleção de Elementos

const bill = document.querySelector("#bill") //form
const peoplenumber = document.querySelector("#people-number") //form
const billtotal = document.querySelector("#bill-total") //input
const people = document.querySelector("#people") // input

// Funções
let billvalue = 0
let peoplenumbervalue = 0
let customvalur = 0

billtotal.addEventListener('input', function(){
    biil = parseFloat (this.value)
    makeCalculations()
})

custom.addEventListener('input', function(){
    custom = parseFloat (this.value)
    makeCalculations()
})

people.addEventListener('input', function(){
    people = parseInt (this.value)
    makeCalculations()
})

function reset (){
    location.reload('reset')
}