
function calcular( tipo, valor){

    const regex = new RegExp(/[\+\-\*\/\.]$/);
    const resultado = document.getElementById('resultado')
    const acaoRealizada = regex.test(resultado.value)
    const val = [ '+', '-', '*',  '/', '.' ]
    const i = val.indexOf(valor)
    const acaoDigitado = regex.test(val)
    const acao = tipo === 'acao'
    const valores = tipo === 'valor'
    
    if(acao){
        if(valor === 'c'){
            resultado.value = "";
        }
       if(!acaoRealizada || !acaoDigitado){ 
         if(valor === val[i]){
            resultado.value += valor;
         }
        }
        if(valor === '='){
           let campo = eval(resultado.value);
           resultado.value = campo;
        }

    }else if(valores){
        resultado.value += valor;
    }
}