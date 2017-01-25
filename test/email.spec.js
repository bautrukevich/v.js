import chai from 'chai';
import { email } from '../src/email';

chai.expect();
const expect = chai.expect;

describe('Testing email(value)', function () {
  describe('mail@mail.com', function () {
    it('should return true', () => {
      expect(email('mail@mail.com')).to.be.true;
    });
  });
  describe('mail@@mail.com', function () {
    it('should return false', () => {
      expect(email('mail@@mail.com')).not.to.be.true;
    });
  });
});
