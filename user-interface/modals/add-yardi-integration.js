const { Modal, Blocks, Elements } = require('slack-block-builder');

module.exports = (prefilledTitle, currentUser) => {
  return Modal({ title: 'Add a new yardi integration', submit: 'Create', callbackId: 'add-yardi-integration' })
    .blocks(
      Blocks.Input({ label: 'WSDL Url', blockId: 'yardiWsdl' }).element(
        Elements.TextInput()
      ),
      Blocks.Input({ label: 'Soap endpoint', blockId: 'yardiSoap' }).element(
        Elements.TextInput()
      ),
      Blocks.Input({ label: 'Username', blockId: 'yardiUserName' }).element(
        Elements.TextInput()
      ),
      Blocks.Input({ label: 'Password', blockId: 'yardiPassword' }).element(
        Elements.TextInput()
      ),
      Blocks.Input({ label: 'Alias', blockId: 'yardiAlias' }).element(
        Elements.TextInput()
      ),
      Blocks.Input({ label: 'Due date', blockId: 'taskDueDate', optional: true }).element(
        Elements.DatePicker({
          actionId: 'taskDueDate',
        }),
      ),
      Blocks.Input({ label: 'Time', blockId: 'taskDueTime', optional: true }).element(
        Elements.TimePicker({
          actionId: 'taskDueTime',
        }),
      ),
    ).buildToJSON();
};
