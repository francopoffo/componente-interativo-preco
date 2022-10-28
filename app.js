let checkbox = document.querySelector("#checkbox");
let duracao = document.querySelector("#duracao");
let preco = document.querySelector("#preco");
let switcher = document.querySelector("#switch");
let slider = document.querySelector("#slider");
let views = document.querySelector("#views");


slider.addEventListener('click', (e) =>{
    atualizaPreco();
});

slider.addEventListener('blur', (e) =>{
    atualizaPreco();
});
slider.addEventListener('touchstart', (e) =>{
    atualizaPreco();
});
slider.addEventListener('touchleave', (e) =>{
    atualizaPreco();
});
slider.addEventListener('touchend', (e) =>{
    atualizaPreco();
});


switcher.onclick = function(){

    if(checkbox.checked == true){

        let intPreco = parseInt(preco.textContent);
        preco.textContent = `${(intPreco * 0.75) * 12}`;

        duracao.textContent = `/ano`;
    }
    else{
        atualizaPreco();
        duracao.textContent = `/mês`;
    }
}

function atualizaPreco(){

    if(slider.value == 1){
        if(checkbox.checked == true){
            preco.textContent = `${(8 * 0.75) * 12}`;
        }
        else{
            preco.textContent = 8;
        }
        views.textContent = "10K ";
    }

    if(slider.value == 2){
        if(checkbox.checked == true){
            preco.textContent = `${(12 * 0.75) * 12}`;
        }
        else{
            preco.textContent = 12;
        }
        views.textContent = "50K ";
    }

    if(slider.value == 3){
        if(checkbox.checked == true){
            preco.textContent = `${(16 * 0.75) * 12}`;
        }
        else{
            preco.textContent = 16;
        }
        views.textContent = "100K ";
    }

    if(slider.value == 4){
        if(checkbox.checked == true){
            preco.textContent = `${(24 * 0.75) * 12}`;
        }
        else{
            preco.textContent = 24;
        }
        views.textContent = "500K ";
    }

    if(slider.value == 5){
        if(checkbox.checked == true){
            preco.textContent = `${(36 * 0.75) * 12}`;
        }
        else{
            preco.textContent = 36;
        }
        views.textContent = "1M ";
    }
}