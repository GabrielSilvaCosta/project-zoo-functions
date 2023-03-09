const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const animais = ids.map((id) => data.species.find((names) => names.id === id));
  return animais.filter((names) => names);
};
module.exports = getSpeciesByIds;
