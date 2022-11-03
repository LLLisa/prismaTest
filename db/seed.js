const conn = require('./conn');
const { Message } = require('./models');

const syncAndSeed = async () => {
  try {
    await conn.authenticate();
    await conn.sync({ force: true });
    await Message.create({ text: 'Hello World again' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { syncAndSeed };
