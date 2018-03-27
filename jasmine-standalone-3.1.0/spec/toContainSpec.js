describe("Teste do toContain", function() {
  it("Deve demonstrar o uso do toContain", function() {
    var texto = "Meu nome é Gabriel";
    var frutas = ["laranja", "banana", "pera"];

    expect(texto).toContain("Gabriel");
    expect(texto).not.toContain("gabriel");

    expect(frutas).toContain("laranja");
    expect(frutas).not.toContain("uva");
  });
});
