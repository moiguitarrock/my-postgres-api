const fs = require('fs');
const path = require('path');
const basename = path.basename(module.filename);

module.exports = app => {
  fs.readdirSync(__dirname)
    .filter(file => {
      return file.split('.')[1] === 'js' && file !== basename;
    })
    .forEach(file => {
      app.use(`/`, require(`./${file}`));
    });
};
