import { generateUniqueId } from './idHelper';

describe('ID helper', () => {
  describe('#generateUniqueId', () => {
    it('should generate a unique ID', () => {
      const id1 = generateUniqueId();
      const id2 = generateUniqueId();

      expect(id1).not.toEqual(id2);
    });

    it('should generate IDs with the correct format', () => {
      const id = generateUniqueId();
      const regex = /^\d{13}-\d{4}$/;

      expect(id).toMatch(regex);
    });

    it('should include a timestamp component in the generated ID', () => {
      const id = generateUniqueId();
      const timestamp = id.split('-')[0];
      const currentTimestamp = new Date().getTime();

      expect(Math.abs(currentTimestamp - parseInt(timestamp))).toBeLessThan(1000);
    });

    it('should include a random component in the generated ID', () => {
      const id = generateUniqueId();
      const random = id.split('-')[1];
      const randomValue = parseInt(random);

      expect(Number.isInteger(randomValue)).toBe(true);
      expect(randomValue).toBeGreaterThanOrEqual(0);
      expect(randomValue).toBeLessThan(10000);
    });
  });
});
