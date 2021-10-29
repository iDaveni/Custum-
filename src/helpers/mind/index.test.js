import { convert } from './index';
describe('convert test', () => {

    test('One to 15', () => {
        expect(convert(15)).toBe('101.25 Chinese Yuan')
    });

    test('two to 465', () => {
        expect(convert(465)).toBe('3138.75 Chinese Yuan')
    });
})