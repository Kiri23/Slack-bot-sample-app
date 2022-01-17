const { DateTime } = require('luxon');

const { modals } = require('../../user-interface');

const addYardiIntegrationModalCallback = async ({ ack, view, body, client }) => {
  const providedValues = view.state.values;
  console.log('form values:', providedValues);

  const soapUrl = providedValues.yardiSoap.yardiSoap.value;
  console.log('soap url',soapUrl );
  const selectedDate = providedValues.taskDueDate.taskDueDate.selected_date;
  const selectedTime = providedValues.taskDueTime.taskDueTime.selected_time;

  if (selectedDate) {
    if (!selectedTime) {
      await ack({
        response_action: 'errors',
        errors: {
          taskDueTime: "Please set a time for the date you've chosen",
        },
      });
      return;
    }
    const taskDueDate = DateTime.fromISO(`${selectedDate}T${selectedTime}`);
    const diffInDays = taskDueDate.diffNow('days').toObject().days;
    // Task due date is in the past, so reject
    if (diffInDays < 0) {
      await ack({
        response_action: 'errors',
        errors: {
          taskDueDate: 'Please select a due date in the future',
          taskDueTime: 'Please select a time in the future',
        },
      });
      return;
    }
    task.dueDate = taskDueDate;
  }

  try {
    await ack({
      response_action: 'update',
      view: modals.taskCreated('my titutlo espeecifico'),
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
