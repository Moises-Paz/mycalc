var myCalc = {
    somar: function(n1, n2){
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        resultado = n1+n2
        return Math.round(resultado * 100) /100;
    },

    subtrair: function(n1, n2){
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        resultado = n1 - n2
        return Math.round(resultado * 100) /100;
    },
    dividir: function(n1, n2){
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        if(n2 == 0){
            return 'ERRO'
        }
        resultado = n1 /n2
        return parseFloat(resultado.toFixed(6))
    },
    multiplicar: function(n1, n2){
        n1 = parseFloat(n1)
        n2 = parseFloat(n2)
        resultado = n1 * n2
        return resultado
    }
}








if(typeof module !== 'underfined' && typeof module.exports !=='underfined') {
    module.exports = myCalc;
}