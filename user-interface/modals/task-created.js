const { Modal, Blocks } = require('slack-block-builder');

module.exports = (formValues) => Modal({ title: 'Task created', callbackId: 'task-created-modal' })
  .blocks(
    Blocks.Section({
      text: `Form values: ${JSON.stringify(formValues)}`,
    }),
  ).buildToJSON();
