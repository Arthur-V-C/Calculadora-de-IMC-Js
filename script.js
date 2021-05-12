function t() {
    var t1 = document.getElementById("nome").value;
    var t2 = document.getElementById('peso').value;
    var t3 = document.getElementById('altura').value;
    var t4 = t2/(t3*t3);
    var t5;
    var t6 = document.getElementById("resultado");    

    if(t4 <= 18.5){
        t5 = "Peso Baixo";
    }

    if(t4 >= 18.5 & t4 <= 24.9  ){
        t5 = "Peso Normal";
    };
    if(t4 >= 24.9 & t4 <= 29.9){
        t5 = "Sobrepeso";
    };
    if(t4 >= 29.9 & t4<= 34.9){
        t5 = "Obesidade de 1º Grau";
    };
    if(t4 >= 34.9 & t4 <= 39.9){
        t5 = "Obesidade de 2º Grau";
    };
    if(t4 >= 39.9){
        t5 = "Obesidade de 3º Grau";
    };    
    t6.value = "Olá " + t1 + ", seu IMC é de " + t4.toFixed(2)+ ", logo você está com " + t5;
    console.log(t1);
};
