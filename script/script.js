
function calcular(tipo, valor){

    const regex = new RegExp(/[\+\-\*\/\.]$/);
    const resultado = document.getElementById('resultado')
    const acaoRealizada = regex.test(resultado.value)
    const val = [ '+', '-', '*',  '/', '.' ]
    const i = val.indexOf(valor)
    const acaoDigitado = regex.test(val)
    const acao = tipo === 'acao'
    const valores = tipo === 'valor'
    const resulteRegex = !acaoRealizada || !acaoDigitado
   
    
    if(acao){
        if(valor === 'c'){
            resultado.value = "";
        }
       if(resultado.value == ""){
        val[3]= val.indexOf("") 
        val[2]=val.indexOf("") 
        
          }
       if(resulteRegex){ 
      
            if(valor === val[i]){
                        resultado.value += valor;
                    }

        }
        if(valor === '='){
            if(resulteRegex){
                    let campo = eval(resultado.value);
           resultado.value = campo;
            }
       
        }

    }else if(valores){
        resultado.value += valor;
    }
}
