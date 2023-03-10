const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  describe('Testes da função HandlerElephants', () => {
    it('deve retornar o número inteiro 4 para o argumento "count"', () => {
      const result = handlerElephants('count');
      expect(result).toBe(4);
    });

    it('deve retornar um array de nomes  "Jefferson" para o argumento "names"', () => {
      const resultado = handlerElephants('names');
      expect(resultado).toContain('Jefferson');
    });

    it('deve retornar a média de idade dos elefantes para o argumento "averageAge"', () => {
      const average = handlerElephants('averageAge');
      expect(average).toBeCloseTo(10.5);
    });

    it('deve retornar uma string "nw" para o argumento "location" ', () => {
      const loc = handlerElephants('location');
      expect(loc).toBe('NW');
    });

    it('deve retornar numero igual ou maior que  "5" para o argumento "popularity" ', () => {
      const pop = handlerElephants('popularity');
      expect(pop).toBeGreaterThanOrEqual(5);
    });

    it('deve retornar um array de dia da semana que não contem  "monday" para o argumento "availability" ', () => {
      const week = handlerElephants('availability');
      expect(week).not.toContain('monday');
    });

    it('deve retornar "underfined" não passado argumento ', () => {
      expect(handlerElephants()).toBe(undefined);
    });

    it('deve retornar "Parâmetro inválido, é necessário uma string"  passado como argumento "{}" ', () => {
      expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
    });

    it('deve retornar  "null"  passado uma string não contempla uma funcionalidade ', () => {
      expect(handlerElephants('string')).toBe(null);
    });
  });
});
