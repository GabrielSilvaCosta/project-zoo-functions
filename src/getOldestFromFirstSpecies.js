const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const cola = data.employees.find((element) => element.id === id);
  const firstSpeciesId = cola.responsibleFor[0];
  const animals = data.species.find((specie) => specie.id === firstSpeciesId).residents;
  const sortedAnimals = animals.sort((a, b) => b.age - a.age);
  const oldestAnimal = sortedAnimals[0];
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
