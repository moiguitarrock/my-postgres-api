const { assert } = require('sinon');

const listingsRepository = require('./listings');

describe('Listings Repository', () => {
  beforeEach(() => {
    global.knexStubs();
  });

  afterEach(() => {
    global.restoreKnexStubs();
  });

  describe('getListingsByUserId', () => {
    it('excecute correctly the query', () => {
      const [userId, limit] = [372, 3];

      listingsRepository.getListingsByUserId(userId, limit);
      assert.calledWithExactly(
        selectStub,
        'listings.id',
        'listings.created_at as createdAt',
        'listings.name',
        'listings.description'
      );
      assert.calledWithExactly(fromStub, 'listings');
      assert.calledWithExactly(whereStub, 'listings.created_by', userId);
      assert.calledWithExactly(limitStub, limit);
    });
  });
});
