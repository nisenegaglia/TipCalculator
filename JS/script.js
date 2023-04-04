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

    if(numeroPessoas === "" || numeroPessoas <= 1){
        numeroPessoas = 1;
        document.getElementById("people").style.display = "none"
    } else{
        document.getElementById("people").style.display = "block"
    }

    var totalTaxaServico = (totalConta * taxaServico) / numeroPessoas;
    var total = totalTaxaServico + (totalConta / numeroPessoas);

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    document.getElementById("price").style.display = "block";
    document.getElementById("price-1").style.display = "block";
}

document.getElementById("calculation").onclick = function(){
    calculateDinner();
}