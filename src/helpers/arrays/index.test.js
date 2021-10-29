import { split, arraySum, reverse, getEven } from './index';
describe('Split test', () => {
    test('One', () => {
        expect(split('Robin Singh')).toEqual(['Robin', 'Singh'])
    });
    test('Two', () => {
        expect(split('I love arrays they are my favorite')).toEqual([
            'I',
            'love',
            'arrays',
            'they',
            'are',
            'my',
            'favorite',
        ]);
    });
});

describe('array function', () => {
    let array;
    beforeEach(() => {
        array = [3, 2, 5, 6];
    });
    test('arraySum', () => {
        expect(arraySum(array)).toBe(16)
    });
    test('reverse', () => {
        expect(reverse(array)).toEqual([6, 5, 2, 3]);
    });
    test('getEven', () => {
        expect(getEven(array)).toEqual([2, 6]);
    });
})