// test

var expect = require('chai').expect;
var index = require('../index.js');

describe('Calculate area of rectangle', function() {
	it('should return a number', function() {
		var output = index.calculateArea(2,5);

		expect(output).to.be.a('number');
	});
	it('should return product of two numbers', function	() {
		var output = index.calculateArea(2,5);

		expect(output).to.equal(10);
	});
});