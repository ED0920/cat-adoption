const { AuthenticationError } = require('apollo-server-express');
const { User, Cat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('cats');
    },
    allCats: async () => {
      return Cat.find({})
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
};

module.exports = resolvers;
