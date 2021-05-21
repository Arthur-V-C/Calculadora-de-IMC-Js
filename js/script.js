function calcular() {
    var nome = document.getElementById("nome").value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso/(altura*altura);
    var classificacao;
    var resultado = document.getElementById("resultado");    
    var erro1 = document.querySelector("div[class='erro1']");
    var erro2 = document.querySelector("div[class='erro2']");
    var erro3 = document.querySelector("div[class='erro3']");


    if(imc <= 18.5){
        classificacao = "Peso Baixo";
    }

    if(imc >= 18.5 & imc <= 24.9  ){
        classificacao = "Peso Normal";
    };
    if(imc >= 24.9 & imc <= 29.9){
        classificacao = "Sobrepeso";
    };
    if(imc >= 29.9 & imc<= 34.9){
        classificacao = "Obesidade de 1º Grau";
    };
    if(imc >= 34.9 & imc <= 39.9){
        classificacao = "Obesidade de 2º Grau";
    };
    if(imc >= 39.9){
        classificacao = "Obesidade de 3º Grau";
    };    
    if(nome == ""){
        resultado.value = "Preencha todos os campos corretamente";
        erro1.style.display = 'block';
    }
    if(nome != ""){
        erro1.style.display = 'none';
    }
    
    if(peso == ""){
        resultado.value = "Preencha todos os campos corretamente";
        erro2.style.display = 'block';
    }
    if(peso != ""){
        erro2.style.display = 'none';
    }

    if(altura == ""){
        resultado.value = "Preencha todos os campos corretamente";
        erro3.style.display = 'block';
    }
    if(altura != ""){
        erro3.style.display = 'none';
    }
    if(altura != "" & peso != "" & nome != ""){
        resultado.value = "Olá " + nome + ", seu IMC é de " + imc.toFixed(2)+ ", logo você está com " + classificacao;
    }
}
;
