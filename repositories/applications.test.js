const { assert } = require('sinon');

const applicationsRepository = require('./applications');

describe('Application Repository', () => {
  beforeEach(() => {
    global.knexStubs();
  });

  afterEach(() => {
    global.restoreKnexStubs();
  });

  describe('getApplicationsByUserId', () => {
    it('excecute correctly the query', () => {
      const [userId, limit] = [372, 2];

      applicationsRepository.getApplicationsByUserId(userId, limit);
      assert.calledWithExactly(
        selectStub,
        'applications.id',
        'applications.created_at as "createdAt"',
        'applications.cover_letter as "coverLetter"',
        rawStub(
          'to_json((SELECT data FROM (SELECT listings.id, listings.name, listings.description) data)) AS listing'
        )
      );
      assert.calledWithExactly(fromStub, 'applications');
      assert.calledWithExactly(
        innerJoinStub,
        'listings',
        'listings.id',
        'applications.listing_id'
      );
      assert.calledWithExactly(whereStub, 'applications.user_id', userId);
      assert.calledWithExactly(groupByStub, 'applications.id', 'listings.id');
      assert.calledWithExactly(limitStub, limit);
    });
  });
});
