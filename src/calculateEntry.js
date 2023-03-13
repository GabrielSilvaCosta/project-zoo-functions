const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const count = { child: 0, adult: 0, senior: 0 };
  entrants.forEach(({ age }) => {
    if (age < 18) {
      count.child += 1;
    } else if (age >= 18 && age < 50) {
      count.adult += 1;
    } else {
      count.senior += 1;
    }
  });
  return count;
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }
  const prices = {
    adult: 49.99,
    child: 20.99,
    senior: 24.99,
  };
  const count = countEntrants(entrants);
  let total = 0;
  total += count.child * prices.child;
  total += count.adult * prices.adult;
  total += count.senior * prices.senior;
  return parseFloat(total.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
