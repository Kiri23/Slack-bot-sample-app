const { addYardiIntegrationModalCallback } = require('./add-yardi-integration-modal');

module.exports.register = (app) => {
  app.view('add-yardi-integration', addYardiIntegrationModalCallback);
};
