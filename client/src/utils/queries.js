import { gql } from '@apollo/client';

export const QUERY_AVAILABLE_CATS = gql`
  query AvailableCats($state: [String]!, $sex: [String]!) {
    availableCats(state: $state, sex: $sex) {
      _id
      adopted
      age
      bioText
      breed
      colour
      createdAt
      imgFilename
      name
      personality
      sex
      state
    }
  }
`;

export const QUERY_GET_CAT = gql`
  query Cat($catId: ID!) {
    cat(catId: $catId) {
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
`;