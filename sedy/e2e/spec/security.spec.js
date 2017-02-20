import { assert } from 'chai';
import uuid from 'uuid';

const buildRequest = () => ({
    headers: {
        'x-github-event': 'pull_request_review',
    },
    body: {
        action: 'submitted',
        pull_request: {
            number: 42,
        },
        head: { ref: 'master' },
        repository: {
            name: 'sedy',
            owner: { login: 'marmelab' },
        },
        review: {
            id: uuid.v4(),
            user: { login: 'reviewer' },
        },
    },
});

describe('Security', () => {
    it('should not allow a random request', function* () {
        const { body } = yield request(buildRequest());

        assert.deepEqual(body, {
            success: false,
            reason: 'No fix found',
        });
    });
});
