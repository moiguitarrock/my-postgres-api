const knex = require('../db/knexConection');

const getCompaniesByUserId = async (userId, limit = 5) => {
  return knex
    .select(
      'companies.id',
      'companies.name',
      'companies.created_at as "createdAt"',
      'teams.contact_user as "isContact"'
    )
    .from('companies')
    .innerJoin('teams', 'teams.company_id', 'companies.id')
    .where('teams.user_id', userId)
    .limit(limit);
};

module.exports = { getCompaniesByUserId };
