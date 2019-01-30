const knex = require('../db/knexConection');

const getTopActiveUsers = async (offset, limit) => {
  return knex
    .select(
      knex.raw(`usr.id id`),
      knex.raw(`MIN(usr.name) as name`),
      knex.raw(`MIN(usr.created_at) as "createdAt"`),
      knex.raw(`usr.user_count count`),
      knex.raw(
        `CASE WHEN count(l) = 0 THEN '[]' ELSE json_agg(l.name) END listings`
      )
    )
    .from(
      knex.raw(
        `(SELECT u.id, u.name, u.created_at, count(a) AS user_count FROM users u LEFT JOIN (SELECT * FROM applications WHERE created_at > now()::DATE - 7) a ON u.id = a.user_id GROUP BY u.id ORDER BY user_count DESC LIMIT ${limit} OFFSET  ${offset}) usr`
      )
    )
    .leftJoin(
      knex.raw(
        `(SELECT * FROM (SELECT ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at DESC) AS latest_app, * FROM applications) apli WHERE apli.latest_app <= 3) a ON a.user_id = usr.id`
      )
    )
    .leftJoin(knex.raw(`listings l ON l.id = a.listing_id`))
    .groupBy(knex.raw(`usr.id, usr.user_count`))
    .orderBy(knex.raw(`usr.user_count`), 'desc');
};

const getUserById = async userId => {
  return knex
    .select('users.id', 'users.name', 'users.created_at as "createdAt"')
    .from('users')
    .where('id', userId);
};

module.exports = { getTopActiveUsers, getUserById };
