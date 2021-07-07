/*let string = 'ola mundo'
let codigo = '';
let split = string.split('');
for(let index in split){
  if(split[index] === 'a'){
    split.splice(index,1,1)
  }
 else if(split[index] === 'e'){
    split.splice(index,1,2)
  }
  else if(split[index] === 'i'){
    split.splice(index,1,3)
  }
  else if(split[index] === 'o'){
    split.splice(index,1,4)
  }
  else if(split[index] === 'u'){
    split.splice(index,1,5)
  }
  codigo += (split[index]);
}
console.log(codigo); */
/*let array = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let name = 'lucas';
if(array.length == 0){
    return "Vazio!"
  }
array.sort();
console.log(array);
let split = array
let novaArray = [];
for(let palavra of array){
  let objeto = {
      tech: palavra,
      name: name, 
    };
    novaArray.push(objeto);
}
console.log(novaArray); 
return array.splice(5,0,'-').split(''); */

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
let ddd = '('+ array[0] + array[1] + ') ';
array.splice(6, 0,'-');
array.splice(0,2)
  array = array.join('');
  console.log(array); 
  console.log(ddd) ;
