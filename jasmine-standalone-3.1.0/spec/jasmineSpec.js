/*describe("Testes do objeto jasmine.any", function() {

  var dobro;

  beforeAll(function() {
    dobro = jasmine.createSpy("dobro");
  });

  it("Deve demonstrar o uso do jasmine.any", function() {
    dobro(10);

    expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
  });

});*/

/*describe("Testes do objeto jasmine.anything", function() {

  var dobro;

  beforeAll(function() {
    dobro = jasmine.createSpy("dobro");
  });

  it("Deve demonstrar o uso do jasmine.anything", function() {
    dobro(10);

    expect(dobro).toHaveBeenCalledWith(jasmine.anything());

    expect({}).toEqual(jasmine.anything());
  });

});*/

/*describe("Testes do objeto jasmine.objectContaining", function() {

  var carro;

  beforeAll(function() {
    carro = {
      "ano": 2017
    };
  });

  it("Deve demonstrar o uso do jasmine.objectContaining", function() {
    expect(carro).toEqual(jasmine.objectContaining({'ano': 2017}));
    expect(carro).not.toEqual(jasmine.objectContaining({'ano': 2016}));
  });

});*/

/*describe("Testes do objeto jasmine.arrayContaining", function() {

  var numeros;

  beforeAll(function() {
    numeros = [1, 2, 3, 4, 5];
  });

  it("Deve demonstrar o uso do jasmine.arrayContaining", function() {
    expect(numeros).toEqual(jasmine.arrayContaining([3]));
    expect(numeros).toEqual(jasmine.arrayContaining([2, 4]));
    expect(numeros).not.toEqual(jasmine.arrayContaining([6]));
  });

});*/

/*describe("Testes do objeto jasmine.stringMatching", function() {

  var exibirTexto;

  beforeAll(function() {
    exibirTexto = jasmine.createSpy("exibirTexto");
  });

  it("Deve demonstrar o uso do jasmine.stringMatching", function() {
    exibirTexto("Curso de Jasmine");

    expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching("Jasmine"));
    expect(exibirTexto).toHaveBeenCalledWith(jasmine.stringMatching(/jasmine/i));
    expect("Curso de JavaScript").toEqual(jasmine.stringMatching("JavaScript"));
  });

});*/

describe("Testes do objeto jasmine.clock", function() {

  beforeEach(function() {
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  var dobro;

  beforeAll(function() {
    dobro = jasmine.createSpy("dobro");
  });

  it("Deve demonstrar o uso com o setTimeout", function() {
    setTimeout(function() { dobro(10); }, 1000);
    jasmine.clock().tick(1000);
    expect(dobro).toHaveBeenCalled();
  });

  it("Deve demonstrar o uso com o setInterval", function() {
    setInterval(function() { dobro(10); }, 500);
    jasmine.clock().tick(500);
    expect(dobro).toHaveBeenCalled();
  });

});
