import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $email: String!, $phonenumber: String!, $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, email: $email, phonenumber: $phonenumber, password: $password) {
      token
      user {
        _id
        firstname
        lastname
      }
    }
  }
`;

export const ADOPT_A_CAT = gql`
  mutation AdoptACat($userId: ID!, $catId: ID!) {
    adoptACat(userId: $userId, catId: $catId) {
      _id
      email
      firstname
      lastname
      password
      phonenumber
      cats {
        _id
        adopted
        age
        bioText
        breed
        colour
        imgFilename
        name
        personality
        sex
        state
      }
    }
  }
`;