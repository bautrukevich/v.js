import chai from 'chai';
import { number } from '../src/number';

chai.expect();
const expect = chai.expect;

describe('Testing number(value)', function () {
  describe('123', function () {
    it('should return true', () => {
      expect(number(123)).to.be.true;
    });
  });
});
