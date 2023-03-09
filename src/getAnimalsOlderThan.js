const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((element) => element.name === animal);
  if (!animals) {
    return false;
  }
  return animals.residents.every((element) => element.age >= age);
};

module.exports = getAnimalsOlderThan;
