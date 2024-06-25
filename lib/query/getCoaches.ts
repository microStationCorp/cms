import { gql } from "@apollo/client";

export const GET_COACHES = gql`
  query getCoaches {
    coachDetails(orderBy: publishedAt_DESC) {
      base
      coachNumber
      coachType
      id
      stage
    }
  }
`;
