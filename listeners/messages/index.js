const { globalYardi } = require('./knock_knock');

module.exports.register = (app) => {
  app.message('knock knock', knockCallback);
};