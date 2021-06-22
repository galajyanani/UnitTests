const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculatorAdd', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'addNumbers');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 6 when we give 2, 1 and 3 numbers', function() {
        expect(calculator.addNumbers(2, 1, 3)).to.be.eql(6);
    });

    it('should return 0 when we give 362880, 1 and -362881 numbers', function() {
        expect(calculator.addNumbers(2, 1, -3)).to.be.equal(0);
    });

    it('should return 0 when we give -2, -1 and -3 numbers', function() {
        expect(calculator.addNumbers(-2, -1, -3)).to.be.equal(-6);
    });

    it('should throw an error if provided with a non number', function() {
        let callWithError = () => calculator.addNumbers(-1, 2, "n");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`There is a parameter that is not a number!`);
    });

    it('should return 0 when provided 0, 0, 0', function() {
        expect(calculator.addNumbers(0, 0, 0)).to.be.equal(0);
    });

});