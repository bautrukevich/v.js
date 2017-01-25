import chai from 'chai';
import { url } from '../src/url';

chai.expect();
const expect = chai.expect;

describe('Testing url(value)', function () {
  describe('http://www.site.com', function () {
    it('should return true', () => {
      expect(url('http://www.site.com')).to.be.true;
    });
  });
  describe('https://www.site.com', function () {
    it('should return true', () => {
      expect(url('https://www.site.com')).to.be.true;
    });
  });
  describe('http://site.com', function () {
    it('should return true', () => {
      expect(url('http://site.com')).to.be.true;
    });
  });
  describe('https://site.com', function () {
    it('should return true', () => {
      expect(url('https://site.com')).to.be.true;
    });
  });
  describe('ftp://www.site.com', function () {
    it('should return true', () => {
      expect(url('http://www.site.com')).to.be.true;
    });
  });
});
