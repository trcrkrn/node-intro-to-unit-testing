const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

    it('should return fizz-buzz if num is divisible by 3 and 5', function() {
        const normalCases = [15, 30, -45];
        normalCases.forEach(function(num) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal('fizz-buzz');
        });
    });

    it('should return buzz if num is divisible by 5 only', function() {
        const normalCases = [5, 10, -20];
        normalCases.forEach(function(num) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal('buzz');
        });
    });

    it('should return fizz if num is divisible by 3 only', function() {
        const normalCases = [3, 6, -9];
        normalCases.forEach(function(num) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal('fizz');
        });
    });

    it('should return num if num is not divisible by 3 or 5', function() {
        const normalCases = [1, 17, -4];
        normalCases.forEach(function(num) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal(num);
        });
    });

    it('should raise error if args not numbers', function() {
        const badInputs = ['hello', true ];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0],input[1])
            }).to.throw(Error);
        });
    });
})
