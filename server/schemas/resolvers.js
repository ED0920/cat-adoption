const { AuthenticationError } = require('apollo-server-express');
const { User, Cat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  // Queries
  Query: {
    users: async () => {
      return User.find().populate('cats');
    },
    allCats: async () => {
      return Cat.find({})
    },
    cat: async (parent, { catId }) => {
      return Cat.findOne({_id: catId})
    },
    availableCats: async () => {
      return Cat.find({ adopted: false })
    },
    adoptedCats: async () => {
      return Cat.find({ adopted: true })
    },
    availableCatsByAge: async (parent, { age }) => {
      return Cat.find({ age: {$lte: age} })
    },
    availableCatsByLocation: async (parent, { state }) => {
      return Cat.find({ state: state })
    },
    availableCatsByColour: async (parent, { colour }) => {
      return Cat.find({ colour: colour })
    },
    availableCatsByAgeLocationColour: async (parent, { age, state, colour }) => {
      return Cat.find({ age: {$lte: age}, state: state, colour: colour })
    },
  },

  // Mutations
  Mutation: {
    addUser: async (parent, { firstname, lastname, email, phonenumber, password }) => {
      const user = await User.create({ firstname, lastname, email, phonenumber, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    adoptACat: async (parent, { userId, catId }) => {
      // Add the chosen cat to the users cat list
      const user = await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: {
            cats: catId,
          },
        },
        {
          new: true,
        }
      ).populate('cats');

      // Update cat's adoption flag to true
      await Cat.findOneAndUpdate(
        { _id: catId },
        {
          $set: {
            adopted: true
          }
        },
      );

      return user;
    },
  }
};

module.exports = resolvers;
