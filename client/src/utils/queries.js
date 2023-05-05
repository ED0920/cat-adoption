import { gql } from '@apollo/client';

export const QUERY_AVAILABLE_CATS = gql`
  query getAvailableCats {
    availableCats {
      _id
      name
      state
      sex
      age
      breed
      colour
      personality
      imgFilename
      bioText
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