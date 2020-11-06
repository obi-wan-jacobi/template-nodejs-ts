import RESTAPIRequest from './mocks/RESTAPIRequest';
import RESTAPIResponse from './mocks/RESTAPIResponse';
import process from '../src/rsc_agg_poc';

describe('my first test suite', () => {

    test('hello world!', () => {
        const expectedData = {
            myFieldName1: 'myValue1',
            myFieldName2: 'myValue2',
            myFieldName3: 'myValue3',
        };
        const request = new RESTAPIRequest(expectedData);
        const expectedResponse = {
            result: {
                data: expectedData,
                internalHello: 'hello in here!',
                exportedHello: 'hello out there!',
                importedHello: 'hello world!',
            },
        };
        const actualResponse = new RESTAPIResponse();
        process(request, actualResponse);
        expect(actualResponse.toResult()).toEqual(expectedResponse);
    });
});
