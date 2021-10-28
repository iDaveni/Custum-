import { split } from './index';
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