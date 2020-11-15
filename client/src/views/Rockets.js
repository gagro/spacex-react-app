import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Container from "../components/Container";
import Rocket from "../components/Rocket";

const ROCKETS_QUERY = gql`
  query RocketsQuery($limit: Int!, $offset: Int!) {
    rockets(limit: $limit, offset: $offset) {
        records {
            rocket_name
            rocket_type
            first_flight
            cost_per_launch
            success_rate_pct
            active
            company
            height
            mass
            diameter
            wikipedia
        }
        count
    }
  }
`;

const Rockets = () => (
  <Container
    title="Rockets"
    array="rockets"
    component={Rocket}
    query={ROCKETS_QUERY}
  />
)

export default Rockets;