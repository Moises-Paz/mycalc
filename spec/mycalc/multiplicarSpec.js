describe('Tentando a funcionalidade multiplicacao', function(){
    var myCalc = require("../../src/js/myCalc");
    it('Deve multiplicar dois numeros dados aparti de strings, "5"*"2", e retornar 10', function(){
        expect(myCalc.multiplicar('5', '2')).toEqual(10);
    });

    it('Deve multiplicar dois numeros inteiros,  5 * 2, e retornar 10', function(){
        expect(myCalc.multiplicar(5,2)).toEqual(10);
    });

    it('Deve multiplicar numeros reais, 2.25 * 2.23', function(){
        expect(myCalc.multiplicar(2.25, 2.23)).toEqual(5.0175)
    });

    it('Deve multiplicar numeros negativos, "-5" * "-2", e retornar 10', function(){
        expect(myCalc.multiplicar(-10, -2)).toEqual(20)
    });
});