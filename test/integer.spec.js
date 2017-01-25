import chai from 'chai';
import { integer } from '../src/integer';

chai.expect();
const expect = chai.expect;

describe('Testing integer(value)', function () {
  describe('123', function () {
    it('should return true', () => {
      expect(integer(123)).to.be.true;
    });
  });
});
