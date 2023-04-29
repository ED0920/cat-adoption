const { AuthenticationError } = require('apollo-server-express');
const { User, Cat } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('cats');
    },
    cats: async () => {
      return Cat.find({})
    },
  },
};

module.exports = resolvers;
