const {asyncSum, helloWord, uppercase, findUserById, getUserName,} =  require('../script.js');

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

describe('Fazendo testes dos itens relacionados a função findUserById', () => {
  test('Testando se findUserById retorna corretamente ao se dar o id correto', (done) => {
    findUserById(1).then((result) => {
      try {
        expect(result).toEqual({id: 1, name: 'Mark'});
        done();
      } catch (erro) {
        done(erro);
      }
    });
  });
  test('Testar Se o user Retorna corretamente a um erro caso o usario não seja encontrado', () => {
    findUserById(1).then((result) => {
      try {
        expect(result).toEqual('Erro ! Não deveria funcionar');
        done(result);
      } catch(erro) {
        done(erro);
      }
    });
  })
});