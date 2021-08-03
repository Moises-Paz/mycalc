describe('Testabdo a funcionalidade subtracao', function(){
    var myCalc = require('../../src/js/myCalc.js');
    it('Deve subtrair dois numeros inteiros', function(){
        expect(myCalc.subtrair(5,3)).toEqual(2);
    });

    it('Deve subtrair dois numeros reias, 2.5 - 1.5, e retornar 1', function(){
        expect(myCalc.subtrair(2.5, 1.5)).toEqual(1);
    });

    it('Deve subtrair dois valores passados com strings, "2" - "1", e retornar 1', function(){
        expect(myCalc.subtrair('2','1')).toEqual(1);
    });

    it('Deve subtrair numeros reias', function(){
        expect(myCalc.subtrair(5.55, 3.45)).toEqual(2.10);
    });
});