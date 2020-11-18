import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Mission from "../components/Mission";
import Container from "../components/Container";

const MISSIONS_QUERY = gql`
  query MissionsQuery($limit: Int!, $offset: Int!) {
   missions(limit: $limit, offset: $offset) {
      records {
         mission_name
         mission_id
         manufacturers
         wikipedia
         website
         twitter
      }
      count
   }
  }
`;

const Missions = () => (
   <Container
      array="missions"
      col="col-12"
      component={Mission}
      query={MISSIONS_QUERY}
   />
);

export default Missions;