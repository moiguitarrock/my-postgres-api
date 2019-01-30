const { assert } = require('sinon');

const companiesRepository = require('./companies');

describe('Companies Repository', () => {
  beforeEach(() => {
    global.knexStubs();
  });

  afterEach(() => {
    global.restoreKnexStubs();
  });

  describe('getApplicationsByUserId', () => {
    it('excecute correctly the query', () => {
      const [userId, limit] = [372, 3];

      companiesRepository.getCompaniesByUserId(userId, limit);
      assert.calledWithExactly(
        selectStub,
        'companies.id',
        'companies.name',
        'companies.created_at as createdAt',
        'teams.contact_user as isContact'
      );
      assert.calledWithExactly(fromStub, 'companies');
      assert.calledWithExactly(
        innerJoinStub,
        'teams',
        'teams.company_id',
        'companies.id'
      );
      assert.calledWithExactly(whereStub, 'teams.user_id', userId);
      assert.calledWithExactly(limitStub, limit);
    });
  });
});
