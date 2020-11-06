import helloWorld from '../src/hello-world';

describe('my first test suite', () => {

    test('hello world!', () => {
        const actualResult = helloWorld();
        const expectedResult = 'hello world!';
        expect(actualResult).toEqual(expectedResult);
    });
});
