const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    cats: [Cat]
  }

  type Cat {
    _id: ID
    state: String
    name: String
    age: Int
    breed: String
    colour: String
    personality: String
    bioText: String
    imgFilename: String
    adopted: Boolean
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    allCats: [Cat]
    availableCats: [Cat]
    adoptedCats: [Cat]
    availableCatsByAge(age: Int!): [Cat]
    availableCatsByLocation(state: String!): [Cat]
    availableCatsByColour(colour: String!): [Cat]
    availableCatsByAgeLocationColour(age: Int!, state: String!, colour: String!): [Cat]
  }
`;

module.exports = typeDefs;