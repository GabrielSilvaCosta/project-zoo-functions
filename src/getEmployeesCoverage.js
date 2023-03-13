const data = require('../data/zoo_data');

function getSpeciesName(specieIDs) {
  return data.species.find((specie) => specie.id === specieIDs).name;
}

function getEmployeesInfo() {
  return data.employees.map(({ id, firstName, lastName, responsibleFor }) => ({
    id: `${id}`,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.map(getSpeciesName),
    locations: responsibleFor.map((speciesID) =>
      data.species.find((specie) => specie.id === speciesID).location),
  }));
}

const info = getEmployeesInfo();
const getEmployeesCoverage = (objeto) => {
  if (!objeto) {
    return info;
  }
  const result = info.find((employee) => (objeto.name && employee.fullName
    .includes(objeto.name)) || (objeto.id && employee.id === objeto.id));
  if (!result) {
    throw new Error('Informações inválidas');
  }
  return result;
};

module.exports = getEmployeesCoverage;
