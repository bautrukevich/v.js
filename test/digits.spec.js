import chai from 'chai';
import { digits } from '../src/digits';

chai.expect();
const expect = chai.expect;

describe('Testing digits(value)', function () {
  describe('123', function () {
    it('should return true', () => {
      expect(digits(123)).to.be.true;
    });
  });
  describe('123string', function () {
    it('should return false', () => {
      expect(digits('123string')).not.to.be.true;
    });
  });
});
