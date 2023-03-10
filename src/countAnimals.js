const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const valorInicial = {};

  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, valorInicial);
  }

  const specie = data.species.find((element) => element.name === animal.species);
  const sexFilter = animal.sex ? (resident) => resident.sex === animal.sex : () => true;
  const sexResidents = specie.residents.filter(sexFilter);

  return sexResidents.length;
};

module.exports = countAnimals;
