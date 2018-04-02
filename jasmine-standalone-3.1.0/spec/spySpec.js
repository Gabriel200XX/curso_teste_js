describe("Testes do objeto Spy", function() {
  var Calculadora = {
    somar: function(n1, n2) {
      return n1 + n2;
    },
    subtrair: function(n1, n2) {
      return n1 - n2;
    }
  };

  beforeAll(function() {
    //*spyOn(Calculadora, "somar").and.callThrough();
    //**spyOn(Calculadora, "somar").and.returnValue(10);
    //***spyOn(Calculadora, "somar").and.returnValues(1, 5);
    /****spyOn(Calculadora, "somar").and.callFake(function(n1, n2) {
      return n1 - n2;
    });*/
    //*****spyOn(Calculadora, "somar").and.throwError("erro");
    spyOn(Calculadora, "somar").and.returnValue(10);
    spyOn(Calculadora, "subtrair");
  });

  /*it("Deve possuir o método somar como não definido", function() {
    expect(Calculadora.somar(1, 1)).toBeUndefined();
  });

  it("Deve chamar o método somar ao menos uma vez", function() {
    expect(Calculadora.somar).not.toHaveBeenCalled();
    Calculadora.somar(1, 1);
    expect(Calculadora.somar).toHaveBeenCalled();
  });

  it("Deve chamar o método somar duas vezes", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(1, 2);
    expect(Calculadora.somar).toHaveBeenCalledTimes(2);
  });

  it("Deve chamar o método somar com os parâmetros válidos", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(1, 2);
    expect(Calculadora.somar).toHaveBeenCalledWith(1, 1);
    expect(Calculadora.somar).toHaveBeenCalledWith(1, 2);
  });

  *it("Deve executar o método somar original", function() {
    expect(Calculadora.somar(1, 1)).toEqual(2);
    expect(Calculadora.subtrair(2, 1)).toBeUndefined();
  })

  **it("Deve retornar 10 para o método somar", function() {
    expect(Calculadora.somar(1, 2)).toEqual(10);
  });

  ***it("Deve retornar valores distintos para o método somar", function() {
    expect(Calculadora.somar(3, 4)).toEqual(1);
    expect(Calculadora.somar(1, 2)).toEqual(5);
    expect(Calculadora.somar(4, 4)).toBeUndefined();
  });

  ****it("Deve transformar o método somar em subtração", function() {
    expect(Calculadora.somar(5, 2)).toEqual(3);
  });

  *****it("Deve lançar um erro ao somar", function() {
    expect(function() {
      Calculadora.somar(1, 1);
    }).toThrowError("erro");
  });

  it("Deve demonstrar o uso do calls.any", function() {
    Calculadora.somar(1, 1);
    expect(Calculadora.somar.calls.any()).toBeTruthy();
  });

  it("Deve demonstrar o uso do calls.count", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);
    expect(Calculadora.somar.calls.count()).toEqual(2);
  });

  it("Deve demonstrar o uso do calls.argsFor", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);
    expect(Calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
    expect(Calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);
  });

  it("Deve demonstrar o uso do calls.allArgs", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);
    expect(Calculadora.somar.calls.allArgs()).toEqual([[1, 1], [2, 2]]);
  });

  it("Deve demonstrar o uso do calls.all", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);

    var retorno = Calculadora.somar.calls.all();

    expect(retorno[1].object).toEqual(Calculadora);
    expect(retorno[1].args).toEqual([2, 2]);
    expect(retorno[1].returnValue).toEqual(10);
  });

  it("Deve demonstrar o uso do calls.mostRecent", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);

    var retorno = Calculadora.somar.calls.mostRecent();

    expect(retorno.object).toEqual(Calculadora);
    expect(retorno.args).toEqual([2, 2]);
    expect(retorno.returnValue).toEqual(10);
  });

  it("Deve demonstrar o uso do calls.first", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);

    var retorno = Calculadora.somar.calls.first();

    expect(retorno.object).toEqual(Calculadora);
    expect(retorno.args).toEqual([1, 1]);
    expect(retorno.returnValue).toEqual(10);
  });*/

  it("Deve demonstrar o uso do calls.reset", function() {
    Calculadora.somar(1, 1);
    Calculadora.somar(2, 2);

    expect(Calculadora.somar.calls.any()).toBeTruthy();

    Calculadora.somar.calls.reset();
    
    expect(Calculadora.somar.calls.any()).toBeFalsy();
  });
});
