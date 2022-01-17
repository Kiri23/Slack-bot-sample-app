// Expose callback function for testing
const knockCallback = async ({ message, say }) => {
  console.log('message', message);
  try {
    await say(`_Who's there?_`);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

module.exports = { knockCallback };
