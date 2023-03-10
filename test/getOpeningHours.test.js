const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('deve retornar a String  "The zoo is closed" para o argumento "Monday e 09:00-AM"', () => {
    const horas = getOpeningHours('Monday', '8:30-AM');
    expect(horas).toBe('The zoo is closed');
  });

  it('deve retornar a String  "The zoo is open" para o argumento "Tuesday e 09:00-AM"', () => {
    const time = getOpeningHours('Tuesday', '09:00-AM');
    expect(time).toBe('The zoo is open');
  });

  it('deve retornar a String  "The zoo is closed" para o argumento "Wednesday e 09:00-PM"', () => {
    const tempo = getOpeningHours('Wednesday', '09:00-PM');
    expect(tempo).toBe('The zoo is closed');
  });

  it('deve lançar uma exceção com a mensagem  "he day must be valid. Example: Monday" para o argumento "Sunday e 09:c0-AM"', () => {
    expect(() => {
      getOpeningHours('Thue', '09:00-AM');
    }).toThrow('The day must be valid. Example: Monday');
  });

  it('deve lançar uma exceção com a mensagem  "The abbreviation must be \'AM\' or \'PM\'" para o argumento "Friday e 09:00-ZM"', () => {
    expect(() => {
      getOpeningHours('Friday', '09:00-ZM');
    }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('deve lançar uma exceção com a mensagem  "The hour should represent a number" para o argumento "Saturday e C9:00-AM"', () => {
    expect(() => {
      getOpeningHours('Saturday', 'C9:00-AM');
    }).toThrow('The hour should represent a number');
  });

  it('deve lançar uma exceção com a mensagem  "The minutes should represent a number" para o argumento "Sunday e 09:c0-AM"', () => {
    expect(() => {
      getOpeningHours('Sunday', '09:c0-AM');
    }).toThrow('The minutes should represent a number');
  });

  it('deve lançar uma exceção com a mensagem  "The hour must be between 0 and 12" para o argumento "Monday e 13:00-AM"', () => {
    expect(() => {
      getOpeningHours('Monday', '13:00-AM');
    }).toThrow('The hour must be between 0 and 12');
  });

  it('deve lançar uma exceção com a mensagem  "The minutes must be between 0 and 59" para o argumento "Tuesday e 09:60-AM"', () => {
    expect(() => {
      getOpeningHours('Tuesday', '9:60-AM');
    }).toThrow('The minutes must be between 0 and 59');
  });
});
