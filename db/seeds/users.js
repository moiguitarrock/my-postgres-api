const data = [
  {
    id: 1003,
    created_at: Date.now(),
    name: 'Test'
  }
];

const seed = async knex => {
  await knex('users').del();
  return await knex('users').insert(data);
};

module.exports = {
  seed,
  data
};
