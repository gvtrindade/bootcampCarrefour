//1. Crie uma função getAdmins que recebe um Map
//2. Crie um Map e popule-o com nomes e usuários e seus papéis no sistema.
//3. Dentro de getAdmins, utilize um loop for ...of para retornar uma listar com os nomes dos usuários que são administradores. 

const map = new Map();
map.set('Luiz', 'Admin');
map.set('Joane', 'Admin');
map.set('José', 'User')

function getAdmins(map){
  let adminArray = [];
  for ([key, value] of map){
    if(value === 'Admin'){
      adminArray.push(key);
    }
  }
  return adminArray
}

console.log(getAdmins(map));

//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos
const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

function populateSet(array){
  let set = new Set(array);
  return [...set];
}

console.log(populateSet(array));