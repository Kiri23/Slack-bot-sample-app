const { modals } = require('../../user-interface');

const globalYardi = async ({ shortcut, ack, client }) => {
  try {
    await ack();
    await client.views.open({
      trigger_id: shortcut.trigger_id,
      view: modals.addYardiIntegration(),
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = { globalYardi };
