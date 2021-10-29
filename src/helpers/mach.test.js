import { sum } from './mach';
import { mulStr } from './hello';

describe('math functionality', () => {
    test('check if sum 1 + 2 = 3', () => {
        expect(sum(1, 2)).toBe(3)
    });
    test('MulSTR', () => {
        expect(mulStr('hello', 4)).toBe('Hellohellohellohellohello')
    });

});