const { Modal, Blocks, Elements } = require('slack-block-builder');

module.exports = () => {
  return Modal({ title: 'Create yardi integration', submit: 'Create', callbackId: 'add-yardi-integration' })
    .blocks(
      Blocks.Input({ label: 'WSDL Url', blockId: 'yardiWsdl' }).element(
        Elements.TextInput({actionId:'yardiWsdl'})
      ),
      Blocks.Input({ label: 'Soap endpoint', blockId: 'yardiSoap' }).element(
        Elements.TextInput({actionId:'yardiSoap'})
      ),
      Blocks.Input({ label: 'Username', blockId: 'yardiUserName' }).element(
        Elements.TextInput({actionId:'yardiUserName'})
      ),
      Blocks.Input({ label: 'Password', blockId: 'yardiPassword' }).element(
        Elements.TextInput({actionId:'yardiPassword'})
      ),
      Blocks.Input({ label: 'Alias', blockId: 'yardiAlias' }).element(
        Elements.TextInput({actionId:'yardiAlias'})
      ),
      Blocks.Input({ label: 'Due date', blockId: 'yardiActivationDate', optional: true }).element(
        Elements.DatePicker({
          actionId: 'yardiActivationDate',
        }),
      ),
      Blocks.Input({ label: 'Time', blockId: 'yardiActivationTime', optional: true }).element(
        Elements.TimePicker({
          actionId: 'yardiActivationTime',
        }),
      ),
    ).buildToJSON();
};
