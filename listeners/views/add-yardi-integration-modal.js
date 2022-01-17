const { DateTime } = require('luxon');

const { modals } = require('../../user-interface');

const addYardiIntegrationModalCallback = async ({ ack, view, body, client }) => {
  const providedValues = view.state.values;
  console.log('form values:', providedValues);

  const wsdl = providedValues.yardiWsdl.yardiWsdl.value;
  console.log('wsdl',wsdl );
  const soapUrl = providedValues.yardiSoap.yardiSoap.value;
  const username = providedValues.yardiUserName.yardiUserName.value;
  const password = providedValues.yardiPassword.yardiPassword.value;
  const alias = providedValues.yardiAlias.yardiAlias.value;

  const activationDate = providedValues.yardiActivationDate.yardiActivationDate.selected_date;
  const activationTime = providedValues.yardiActivationTime.yardiActivationTime.selected_time;

  if (activationDate) {
    if (!activationTime) {
      await ack({
        response_action: 'errors',
        errors: {
          yardiActivationDate: "Please set a time for the date you've chosen",
        },
      });
      return;
    }
    const taskDueDate = DateTime.fromISO(`${activationDate}T${activationTime}`);
    const diffInDays = taskDueDate.diffNow('days').toObject().days;
    // Task due date is in the past, so reject
    if (diffInDays < 0) {
      await ack({
        response_action: 'errors',
        errors: {
          yardiActivationDate: 'Please select a due date in the future',
          yardiActivationTime: 'Please select a time in the future',
        },
      });
      return;
    }
  }

  // TODO: Save form values to DB
  try {
    await ack({
      response_action: 'update',
      view: modals.taskCreated(providedValues),
    });
  } catch (error) {
    await ack({
      response_action: 'update',
      view: modals.taskCreationError(taskTitle),
    });
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = { addYardiIntegrationModalCallback };
