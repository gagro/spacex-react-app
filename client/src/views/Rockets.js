import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Container from "../components/Container";
import RocketsList from "../components/RocketsList";

const ROCKETS_QUERY = gql`
  query RocketsQuery($limit: Int!, $offset: Int!) {
    rockets(limit: $limit, offset: $offset) {
        records {
            rocket_id
            rocket_name
            cost_per_launch
        }
        count
    }
  }
`;

const Rockets = () => (
    <Container
        title="Rockets"
        array="rockets"
        component={RocketsList}
        query={ROCKETS_QUERY}
    />
)

export default Rockets;