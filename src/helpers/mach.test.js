import { sum, arraySum, reverse, getEven } from './mach';
import { mulStr } from './hello';

describe('math functionality', () => {
    test('check if sum 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3)
    });
    test('MulSTR', () => {
        expect(mulStr('hello', 4)).toBe('Hellohellohellohellohello')
    });
    test('arraySum', () => {
        expect(arraySum([3, 2, 5, 6])).toBe(16)
    });
    test('reverse', () => {
        expect(reverse([3, 2, 5, 6])).toEqual([6, 5, 2, 3]);
    });
    test('getEven', () => {
        expect(getEven([3, 2, 5, 6])).toEqual([2, 6]);
    });
})