import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Container from "../components/Container";
import Launch from "../components/Launch";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery($limit: Int!, $offset: Int!) {
   launches(limit: $limit, offset: $offset) {
      records {
         mission_name
         launch_date_local
         launch_success
         rocket {
            rocket_name
            rocket_type
         }
         launch_site {
            site_name
         }
         links {
            wikipedia
            video_link
            mission_patch_small
         }
      }
      count
   }
  }
`;

const Launches = () => (
  <Container
      array="launches"
      col="col-3"
      component={Launch}
      query={LAUNCHES_QUERY}
  />
)

export default Launches;