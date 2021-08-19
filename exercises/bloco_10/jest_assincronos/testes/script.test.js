const {asyncSum, helloWord, uppercase} =  require('../script.js');

test('Testando asyncSum, soma 5 mais 10', (done) => {
  asyncSum(5, 10, (result) => {
    try {
      expect(result).toBe(15);
      done();
    } catch (error) {
      done(error);
    }
  });
});

test('Testando HelloWord', () => {
  expect(helloWord()).toBe('hello word');
})

test('Testando uppercase, Deixa texto em maiusculo', (done) => {
  uppercase('olá', (result) => {
    try {
      expect(result).toBe('OLÁ');
      done();
    } catch (erro) {
      done(erro);
    }
  });
});