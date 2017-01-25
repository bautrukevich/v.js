import chai from 'chai';
import * as v from '../src/v';

chai.expect();
const expect = chai.expect;

describe('Testing v.email(value)', function () {
  describe('mail@mail.com', function () {
    it('should return true', () => {
      expect(v.email('mail@mail.com')).to.be.true;
    });
  });
  describe('mail@@mail.com', function () {
    it('should return false', () => {
      expect(v.email('mail@@mail.com')).not.to.be.true;
    });
  });
});

describe('Testing v.number(value)', function () {
  describe('123', function () {
    it('should return true', () => {
      expect(v.number(123)).to.be.true;
    });
  });
});

describe('Testing v.integer(value)', function () {
  describe('123', function () {
    it('should return true', () => {
      expect(v.integer(123)).to.be.true;
    });
  });
});

describe('Testing v.digits(value)', function () {
  describe('123', function () {
    it('should return true', () => {
      expect(v.digits(123)).to.be.true;
    });
  });
  describe('123string', function () {
    it('should return false', () => {
      expect(v.digits('123string')).not.to.be.true;
    });
  });
});

describe('Testing v.alphanumeric(value)', function () {
  describe('123string321', function () {
    it('should return true', () => {
      expect(v.alphanumeric('123string321')).to.be.true;
    });
  });
  describe('@123string321', function () {
    it('should return false', () => {
      expect(v.alphanumeric('@123string321')).not.to.be.true;
    });
  });
});

describe('Testing v.url(value)', function () {
  describe('http://www.site.com', function () {
    it('should return true', () => {
      expect(v.url('http://www.site.com')).to.be.true;
    });
  });
  describe('https://www.site.com', function () {
    it('should return true', () => {
      expect(v.url('https://www.site.com')).to.be.true;
    });
  });
  describe('http://site.com', function () {
    it('should return true', () => {
      expect(v.url('http://site.com')).to.be.true;
    });
  });
  describe('https://site.com', function () {
    it('should return true', () => {
      expect(v.url('https://site.com')).to.be.true;
    });
  });
  describe('ftp://www.site.com', function () {
    it('should return true', () => {
      expect(v.url('http://www.site.com')).to.be.true;
    });
  });
});

describe('Testing v.pattern(value, regExp)', function () {
  describe('[a-z]+', function () {
    it('should return true', () => {
      expect(v.pattern('[a-z]+')('a')).to.be.true;
      expect(v.pattern('/[a-z]+/')('a')).to.be.true;
      expect(v.pattern('/[a-z]+/i')('a')).to.be.true;
      expect(v.pattern('/[a-z]+/i')('A')).to.be.true;
    });
    it('should return false', () => {
      expect(v.pattern('[a-z]+')('A')).not.to.be.true;
      expect(v.pattern('/[a-z]+/')('A')).not.to.be.true;
    });
  });
});

describe('Testing v.compose([func, func2])', function () {
  describe('[func, func2]', function () {
    it('should return true', () => {
      const square = x => x * x;
      const increment = x => x + 1;
      const compose = v.compose([square, increment]);

      expect(compose).to.be.a('function');
      expect(compose(5)).to.equal(26);
    });
  });
});
