let checkbox = document.querySelector("#checkbox");
let duracao = document.querySelector("#duracao");
let preco = document.querySelector("#preco");
let switcher = document.querySelector("#switch");
let slider = document.querySelector("#slider");


switcher.onclick = function(){

    if(checkbox.checked == true){

        let intPreco = parseInt(preco.textContent);
        preco.textContent = `${(intPreco * 0.75) * 12}`;

        duracao.textContent = `/ano`
    }
    else{
        duracao.textContent = `/mês`
    }
}

function atualizaPreco(){
    
}