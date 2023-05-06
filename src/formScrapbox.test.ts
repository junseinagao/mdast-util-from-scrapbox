import { describe, test, it, expect } from 'vitest';
import { fromScrapbox } from './formScrapbox.js';

test('fromScrapbox', () => {
  describe('get an empty array', () => {
    it('return root', () => {
      expect(fromScrapbox([])).toEqual({});
    });
  });
});
