document.getElementById("price-1").style.display = "none"
document.getElementById("price").style.display = "none"

function calculateDinner(){
    var totalConta = document.getElementById("bill-total").value;
    var taxaServico = document.getElementById("select-tip").value;
    var numeroPessoas = document.getElementById("people").value;

    if(totalConta === "" || taxaServico == 0 || isNaN(totalConta) || isNaN(numeroPessoas)){
        alert("Please, enter a valid value!");
        return;
    }
}

console.log(calculateDinner);