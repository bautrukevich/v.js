import chai from 'chai';
import { alphanumeric } from '../src/alphanumeric';

chai.expect();
const expect = chai.expect;

describe('Testing alphanumeric(value)', function () {
  describe('123string321', function () {
    it('should return true', () => {
      expect(alphanumeric('123string321')).to.be.true;
    });
  });
  describe('@123string321', function () {
    it('should return false', () => {
      expect(alphanumeric('@123string321')).not.to.be.true;
    });
  });
});
