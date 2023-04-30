const db = require('../config/connection');
const { User, Cat } = require('../models');
const userSeeds = require('./userSeeds.json');
const catSeeds = require('./catSeeds.json');

// Seed the 'cat-adoption' database

// Connect to the database
db.once('open', async () => {
  try {

    // Delete existing Cat and User documents
    await Cat.deleteMany({});
    await User.deleteMany({});

    // Create users and cats using the defined seed data
    // All cats at this point will be available for adoption
    const users = await User.create(userSeeds);
    const cats = await Cat.create(catSeeds);

    // Iterate through the users and randomly decide if
    // they will adopt a cat
    for (let i = 0; i < users.length; i++ ) {

      // Decide if they should adopt a cat
      if ( adoptACat() ) {
      
        // Add cat[i] to user[i]
        const user = await User.findOneAndUpdate(
          { username: users[i].username },
          {
            $addToSet: {
              cats: cats[i]._id,
            },
          },
          {
            new: true,
          }
        );
    
        // Update cat[i]'s adopted flag to true
        const cat = await Cat.findOneAndUpdate(
          { _id: cats[i]._id },
          {
            $set: {
              adopted: true
            }
          },
          {
            new: true,
          }
        );

      }
  
    }

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});

// A function to randomly decide if someone should adopt
// a cat. On average, there is a 60% chance it will return true.
const adoptACat = () => {
  return (Math.random() < 0.60);
}