import chai from 'chai';
import { compose } from '../src/compose';

chai.expect();
const expect = chai.expect;

describe('Testing compose([func, func2])', function () {
  describe('[func, func2]', function () {
    it('should be a function', () => {
      const square = x => x * x;
      const increment = x => x + 1;
      const composition = compose([square, increment]);

      expect(composition).to.be.a('function');
    });
    it('should return true', () => {
      const square = x => x * x;
      const increment = x => x + 1;
      const composition = compose([square, increment]);

      expect(composition(5)).to.equal(26);
    });
  });
});
