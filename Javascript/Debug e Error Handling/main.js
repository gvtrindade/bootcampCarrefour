//1. Crie uma função que recebe um array e um número
//2. Realize as validações:
//2.1. Se os parâmetros não foram enviados, lance um erro ReferenceError
//2.2. Se o array não for do tipo object, lance um erro TypeError
//2.3. Se o número não for do tipo number, lance um erro TypeError
//2.4. Se o tamanho do array for diferente do número enviado como parâmetro, lance um erro RangeError
//3. Utilize a declaração try ...catch
//4. Filtre as chamadas de catch por cada tipo de o operador instanceOf

function arrayAndNumber(array, number){
  if(!array || !number) throw new ReferenceError('Existem parametros faltando');
  if(typeof array !== 'object') throw new TypeError('Insira um array válido');
  if(typeof number !== 'number') throw new TypeError('Insira um número válido');
  if(array.length !== number) throw new RangeError('O número de elementos no array deve ser igual ao número inserido');
  return array;
}

function runFunction(){
  try{
    arrayAndNumber([1], 1);
  }
  catch(e){
    if(e instanceof ReferenceError){console.log('Este erro é do tipo ReferenceError')}
    else if(e instanceof TypeError){console.log('Este erro é do tipo TypeError')}
    else if(e instanceof RangeError){console.log('Este erro é do tipo RangeError')}
    else {console.log('Tipo de erro desconhecido')}
  }
}