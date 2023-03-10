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
  });
});
