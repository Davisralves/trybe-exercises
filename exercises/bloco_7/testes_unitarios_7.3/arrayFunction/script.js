const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const expected = myRemove([1, 2, 3, 4], 3);
array = [1,2,4];
//assert.deepEqual(expected, array, 'Valor esperado [1,2,4]');
//assert.notDeepEqual(expected, [1,2,3,4], 'Valor não pode ser [1,2,3,4]' );
assert.notDeepStrictEqual(myRemove(x = [1, 2, 3, 4], 3), x,'Valor de saida não pode ser igual ao de entrada'); 
assert.deepStrictEqual(myRemove([1,2,3,4,5], 5), [1,2,3,4], 'Valor esperado: [1,2,3,4]');