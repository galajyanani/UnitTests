const Calculator = require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai');
chai.use(spies);

describe('calculatorMultiplyNumbers', function() {
    let calculator, spy;

    beforeEach(() => {
        calculator = new Calculator();
        spy = chai.spy.on(calculator, 'multiplyNumbers');
    });

    afterEach(() => {
        calculator = null;
    });

    it('should return 6 when we give 2, 1 and 3 numbers', function() {
        expect(calculator.multiplyNumbers(2, 1, 3)).to.be.eql(6);
    });

    it('should return -131681894400 when we give 362880, 1 and -362880 numbers', function() {
        expect(calculator.multiplyNumbers(362880, 1, -362880)).to.be.equal(-131681894400);
    });

    it('should return 0 when we give -2, -1 and -3 numbers', function() {
        expect(calculator.multiplyNumbers(-2, -1, -3)).to.be.equal(-6);
    });

    it('should throw an error if provided with a non number', function() {
        let callWithError = () => calculator.multiplyNumbers(-1, 2, "n");
        expect(spy).to.be.a.spy;
        expect(callWithError).to.throw(`There is a parameter that is not a number!`);
    });

    it('should return 0 when provided -362880, 0 and 362880', function() {
        expect(calculator.multiplyNumbers(-362880, 0, 362880)).to.be.equal(0);
    });

});