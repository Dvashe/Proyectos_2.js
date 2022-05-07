const Spiderman = require(`./../App/spiderverse`)
describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 2
      expect(resultOfSomething).toBe(3);
    });
  })

  describe("Prueba para clase ´spiderman´", () => {
      test(`Caso 1`, () => {
          const AndrewGarfield = new Spiderman("Peter Parker", "Andrew Garfield", 31, 3, "Sony")
      
      expect(AndrewGarfield.name).toBe("Peter Parker")
      expect(AndrewGarfield.actor).toBe("Andrew Garfield")
      expect(AndrewGarfield.edad).toBe(31)
      expect(AndrewGarfield.peliculas).toBe(3)
      expect(AndrewGarfield.estudio).toBe("Sony")
    })
  })