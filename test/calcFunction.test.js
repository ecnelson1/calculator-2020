// IMPORT MODULES under test here:
import {getSum,difference,multiply,divide} from '../utils.js'
// import { example } from '../example.js';

const test = QUnit.test;

test('it should return 10 when provided 10 and 5', (expect) => {
    const expected = 15;
    const actual = getSum(10,5);
    expect.equal(actual, expected);
});

test('it should return 5 when provided 10 and 5', (expect) => {
    const expected = 5;
    const actual = difference(10,5);
    expect.equal(actual, expected);
});

test('it should return 50 when provided 5 and 10', (expect) => {
    const expected = 50;
    const actual = multiply(5,10);
    expect.equal(actual, expected);
});

test('it should return 2 when provided 10 and 5', (expect) => {
    const expected = 2;
    const actual = divide(10,5);
    expect.equal(actual, expected);
});



