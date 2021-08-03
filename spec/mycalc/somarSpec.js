describe('Testando a funcionalidade soma',function(){
    var myCalc = require('../../src/js/myCalc.js');
    it('Deve somar dois numeros negativos, -2 +(-2), e retornar -4', function(){
        expect(myCalc.somar(-2,-2)).toEqual(-4);
    });

    it('Deve somar dois numeros interios positivos, 2+3, e retornar 5', function(){
        expect(myCalc.somar(2,3)).toEqual(5);
    });

    it('Deve somar duas string, "12" + "12", e retornar 24', function(){
        expect(myCalc.somar('5', '-9')).toEqual(-4);
    });

    it('Deve somar dois numeros Reias, 2.5 + 1.4, e retornar 3.9', function(){
        expect(myCalc.somar(2.5,1.4)).toEqual(3.9);
    })

    it('Deve somar numeros com duas casas decimais, 25.36 + 1.68, e retornar 27,04', function(){
        expect(myCalc.somar(25.48, 1.68)).toEqual(27.16);
    });

    it('Deve somar um numero com uma casa decimal com outro de duas casas decimais, 1.5 + 3.56, e retornar 5.06', function(){
        expect(myCalc.somar(1.5, 3.56)).toEqual(5.06);
    });

});