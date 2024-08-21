function addCaracter(caracter){
    const valorInput=document.querySelector('.display').value 

    document.querySelector('.display').value = valorInput + caracter
}


function limparTela(){
    document.querySelector('.display').value= ''
}


function calcular(){
    const valorInput = document.querySelector('.display').value;
    const valorCalculado = valorInput.replace(/x/g, '*').replace(/÷/g, '/');
    document.querySelector('.display').value = eval(valorCalculado);
}

function inverte(){
    const valorInput=document.querySelector('.display').value  
    document.querySelector('.display').value= valorInput * -1

}

function apagarUltimo(){
    const display = document.querySelector('.display');
    display.value = display.value.slice(0, -1);
}
