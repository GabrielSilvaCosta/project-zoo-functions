const data = require('../data/zoo_data');

const getEmployeeByName = (nome) => {
  if (!nome) {
    return {};
  }
  const namess = data.employees.find(
    (employee) =>
      employee.firstName === nome || employee.lastName === nome,
  );
  return namess || {};
};

module.exports = getEmployeeByName;
