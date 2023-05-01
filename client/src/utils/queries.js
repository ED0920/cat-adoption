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