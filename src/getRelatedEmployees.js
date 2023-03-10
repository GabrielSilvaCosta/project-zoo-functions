const data = require('../data/zoo_data');

const Ids = ['9e7d4524-363c-416a-8759-8aa7e50c0992',
  'fdb2543b-5662-46a7-badc-93d960fdc0a8',
  '0e7b460e-acf4-4e17-bcb3-ee472265db83'];

function isManager(id) {
  return Ids.includes(id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const funcionario = data.employees
    .filter((element) => element.managers.includes(managerId))
    .map((element) => `${element.firstName} ${element.lastName}`);

  return funcionario;
}

module.exports = { isManager, getRelatedEmployees };
