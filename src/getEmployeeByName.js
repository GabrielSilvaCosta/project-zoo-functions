const data = require('../data/zoo_data');

const getEmployeeByName = (nome) => { // parametro de entrada
  if (!nome) {
    return {};
  }
  const namess = data.employees.find(
    (employee) =>
      employee.firstName === nome || employee.lastName === nome, // o firstName tem que ser igual a nome
    // quando for passar o nome no console tem que ser Nigel;
  );
  return namess || {};
};

module.exports = getEmployeeByName;
