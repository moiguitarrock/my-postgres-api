const { assert, stub } = require('sinon');

const userRepository = require('./users');
const knex = require('../db/knexConection');

describe('Users Repository', () => {
  beforeEach(() => {
    global.knexStubs();
  });

  afterEach(() => {
    global.restoreKnexStubs();
  });
  describe('getUserById', () => {
    it('excecute correctly the query', () => {
      const userId = 372;
      userRepository.getUserById(userId);
      assert.calledWithExactly(
        selectStub,
        'users.id',
        'users.name',
        'users.created_at as createdAt'
      );
      assert.calledWithExactly(fromStub, 'users');
      assert.calledWithExactly(whereStub, 'id', userId);
    });
  });
  describe('getTopActiveUsers', () => {
    it('excecute correctly the query', () => {
      const [offset, limit] = [1, 2];
      userRepository.getTopActiveUsers(offset, limit);
      assert.calledWithExactly(
        selectStub,
        rawStub(`usr.id id`),
        rawStub(`MIN(usr.name) as name`),
        rawStub(`MIN(usr.created_at) as "createdAt"`),
        rawStub(`usr.user_count count`),
        rawStub(
          `CASE WHEN count(l) = 0 THEN '[]' ELSE json_agg(l.name) END listings`
        )
      );
      assert.calledWithExactly(
        fromStub,
        rawStub(
          `(SELECT u.id, u.name, u.created_at, count(a) AS user_count FROM users u LEFT JOIN (SELECT * FROM applications WHERE created_at > now()::DATE - 7) a ON u.id = a.user_id GROUP BY u.id ORDER BY user_count DESC LIMIT ${limit} OFFSET  ${offset}) usr`
        )
      );
      assert.calledWithExactly(
        leftJoinStub,
        rawStub(
          `(SELECT * FROM (SELECT ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS latest_app, * FROM applications) apli WHERE apli.latest_app <= 3) a ON a.user_id = usr.id`
        )
      );
      assert.calledWithExactly(
        leftJoinStub,
        rawStub(`listings l ON l.id = a.listing_id`)
      );
      assert.calledWithExactly(groupByStub, rawStub(`usr.id, usr.user_count`));
      assert.calledWithExactly(orderByStub, rawStub(`usr.user_count`), 'desc');
    });
  });
});
