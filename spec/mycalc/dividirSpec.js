describe('Testando a funcionalidade divisao', function(){
    var myCalc = require('../../src/js/myCalc.js');
    it('Nao deve efetuar divisao por zero', function(){
        expect(myCalc.dividir(3, 0)).toEqual('ERRO');
    });

    it('Deve dividir numeros inteiros, 10 / 2', function(){
        expect(myCalc.dividir(10,2)).toEqual(5);
    });

    it('Deve dividir numeros reais, 2.25 / 1.23, e retornar 1.80', function(){
        expect(myCalc.dividir(2.25, 1.23)).toEqual(1.829268);
    });

    it('Deve dividir por numeros negativos, 10/-2, e retornar -5', function(){
        expect(myCalc.dividir(10,-2)).toEqual(-5);
    });

    it('Com numeros negativos', function(){
        expect(myCalc.dividir(-10, -5)).toEqual(2);
    });

    it('Deve dividir dois numeros aparir de uma entrada em string, "5"/"2", e retornar 2.5', function(){
        expect(myCalc.dividir('5','2')).toEqual(2.5);
    });
});