import chai from 'chai';
import { phone } from '../src/phone';

chai.expect();
const expect = chai.expect;

describe('Testing phone(value)', function () {
  describe('+375297777777', function () {
    it('should return true', () => {
      console.log(phone('+375297777777'));
      expect(phone('+375297777777')).to.be.true;
    });
  });
  describe('+37529777777', function () {
    it('should return false', () => {
      console.log(phone('+37529777777'));
      expect(phone('+37529777777')).not.to.be.true;
    });
  });
});
