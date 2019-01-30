const up = knex => {
  console.log('HERE');
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.dateTime('created_at');
    table.string('name');
  });
};

const down = knex => knex.schema.dropTable('users');

module.exports = {
  up,
  down
};
