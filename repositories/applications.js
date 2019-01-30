const knex = require('../db/knexConection');

const getApplicationsByUserId = async (userId, limit = 5) => {
  return knex
    .select(
      'applications.id',
      'applications.created_at as createdAt',
      'applications.cover_letter as coverLetter',
      knex.raw(
        'to_json((SELECT data FROM (SELECT listings.id, listings.name, listings.description) data)) AS listing'
      )
    )
    .from('applications')
    .innerJoin('listings', 'listings.id', 'applications.listing_id')
    .where('applications.user_id', userId)
    .groupBy('applications.id', 'listings.id')
    .limit(limit);
};

module.exports = { getApplicationsByUserId };
