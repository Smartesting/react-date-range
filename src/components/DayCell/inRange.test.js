import { inRange } from './inRange';

describe('inRange', () => {
  const startDate = new Date(2024, 1, 1);
  const endDate = new Date(2024, 2, 1);

  describe('when no range is defined', () => {
    const startDate = undefined;
    const endDate = undefined;
    const day = new Date();

    describe('when highlightAllOnEmptySelection is set to true', () => {
      const highlightAllOnEmptySelection = true;

      test('it returns true', () => {
        expect(inRange(day, startDate, endDate, highlightAllOnEmptySelection)).toEqual(true);
      });
    });

    describe('when highlightAllOnEmptySelection is set to false', () => {
      const highlightAllOnEmptySelection = false;

      test('it returns false', () => {
        expect(inRange(day, startDate, endDate, highlightAllOnEmptySelection)).toEqual(false);
      });
    });
  });

  describe('when only a startDate is defined', () => {
    const endDate = undefined;

    test('it returns false if the day is before the startDate', () => {
      const day = new Date(2023, 12, 31);

      expect(inRange(day, startDate, endDate, false)).toEqual(false);
      expect(inRange(day, startDate, endDate, true)).toEqual(false);
    });

    test('it returns true if the day is after the startDate', () => {
      const day = new Date(2024, 12, 31);

      expect(inRange(day, startDate, endDate, false)).toEqual(true);
      expect(inRange(day, startDate, endDate, true)).toEqual(true);
    });
  });

  describe('when only an endDate is defined', () => {
    const startDate = undefined;

    test('it returns true if the day is before the startDate', () => {
      const day = new Date(2023, 12, 31);

      expect(inRange(day, startDate, endDate, false)).toEqual(true);
      expect(inRange(day, startDate, endDate, true)).toEqual(true);
    });

    test('it returns false if the day is after the startDate', () => {
      const day = new Date(2024, 12, 31);

      expect(inRange(day, startDate, endDate, false)).toEqual(false);
      expect(inRange(day, startDate, endDate, true)).toEqual(false);
    });
  });

  describe('when a range is defined', () => {
    test('it returns false if the day is before the range', () => {
      const day = new Date(2023, 1, 15);

      expect(inRange(day, startDate, endDate, false)).toEqual(false);
      expect(inRange(day, startDate, endDate, true)).toEqual(false);
    });

    test('it returns true if the day is after the range', () => {
      const day = new Date(2024, 1, 15);

      expect(inRange(day, startDate, endDate, false)).toEqual(true);
      expect(inRange(day, startDate, endDate, true)).toEqual(true);
    });

    test('it returns false if the day is after the range', () => {
      const day = new Date(2025, 1, 15);

      expect(inRange(day, startDate, endDate, false)).toEqual(false);
      expect(inRange(day, startDate, endDate, true)).toEqual(false);
    });
  });
});
