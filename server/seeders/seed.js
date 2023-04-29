const db = require('../config/connection');
const { User, Cat } = require('../models');
const userSeeds = require('./userSeeds.json');
const catSeeds = require('./catSeeds.json');

db.once('open', async () => {
  try {
    await Cat.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);
    await Cat.create(catSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
