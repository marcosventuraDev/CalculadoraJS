
function calcular( tipo, valor){

    //primeiro eu listei por meio de regex, que futuramente, no curso,
    //iremos aprender como funciona,  os tipos de ações soma, subtração, multiplicação
    //divisão e o ponto, estes eu desejo que não se repita quando selecionado novamente
    //antes que um número seja colocado antes de sua inserção
    const regex = new RegExp(/[\+\-\*\/\.]$/); 

    //atribuir a estrutura DOM que busca o ID resultado em uma constante
    //para facilitar o uso e reduzir a quantidade de código
    const resultado = document.getElementById('resultado')

    //recuperei e atribuí o valor do resultado que irá constar no ID resultado
    //em uma constante
    const acaoRealizada = regex.test(resultado.value)
     
    //Inseri todas a ações em um array  para facilitar a busca delas
    const val = [ '+', '-', '*',  '/', '.' ]
    
    // criei outra constante retornar a posição da primeira ocorrencia
    //da acão que no caso é a que está sendo chamada no momento 
    const i = val.indexOf(valor)

    //essa constante é para buscar os valores do arrey identificadas 
    //por regex que fará o teste se existe ou não a ação
    const acaoDigitado = regex.test(val)

    //essas constantes é apenas para reduzir a quantidade de código
    const acao = tipo === 'acao'
    const valores = tipo === 'valor'
    
    if(acao){
        if(valor === 'c'){
            resultado.value = "";
        }

    //aqui eu faço uma verificação se a ação ainda não foi realizada
    // ou se não digitei a ação forem verdadeiras  o sistema faz 
    //a busca das ações  e retorna o valor da ação
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