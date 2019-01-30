const knex = require('../db/knexConection');

const getListingsByUserId = async (userId, limit = 5) => {
  return knex
    .select(
      'listings.id',
      'listings.created_at as "createdAt"',
      'listings.name',
      'listings.description'
    )
    .from('listings')
    .where('listings.created_by', userId)
    .limit(limit);
};

module.exports = { getListingsByUserId };
