import chai from 'chai';
import { pattern } from '../src/pattern';

chai.expect();
const expect = chai.expect;

describe('Testing pattern(value, regExp)', function () {
  describe('[a-z]+', function () {
    it('should return true', () => {
      expect(pattern('[a-z]+')('a')).to.be.true;
      expect(pattern('/[a-z]+/')('a')).to.be.true;
      expect(pattern('/[a-z]+/i')('a')).to.be.true;
      expect(pattern('/[a-z]+/i')('A')).to.be.true;
    });
    it('should return false', () => {
      expect(pattern('[a-z]+')('A')).not.to.be.true;
      expect(pattern('/[a-z]+/')('A')).not.to.be.true;
    });
  });
});
