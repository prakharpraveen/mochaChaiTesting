const assert = require('chai').assert;
const {sayHello, addNumber} = require('../app');

sayHelloResult = sayHello();
addNumberResult = addNumber(5,5);

describe('App', function() {
  describe('sayHello()', function() {
    it('sayHello should return hello', function() {
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function() {
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumber()', function() {
    it('addNumber should be above 5', function() {
      assert.isAbove(addNumberResult, 5)
    });

    it('addNumber should return type number', function() {
      assert.typeOf(addNumberResult, 'number');
    });
  })
});
