import { assert } from 'chai';

describe('Basic responses', () => {
    it('should answer by an HTTP code 200', function* () {
        const { statusCode } = yield request({ body: {} });

        assert.equal(statusCode, 200);
    });

    it('should return an error message for an empty request', function* () {
        const { body, statusCode } = yield request({ body: {} });

        assert.equal(statusCode, 200);
        assert.deepEqual(body, {
            success: false,
            reason: 'No fix found',
        });
    });
});
