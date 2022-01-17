const { messageNewTaskCallback } = require('./message-new-task');
const { globalYardi } = require('./global-yardi');

module.exports.register = (app) => {
  app.shortcut('message_new_task', messageNewTaskCallback);
  app.shortcut('global_new_task', globalYardi);
};