import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Container from "../components/Container";
import LaunchesList from "../components/LaunchesList";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
        records {
            mission_name
        }
        count
    }
  }
`;

const Launches = () => (
    <Container
        title="Launches"
        array="launches"
        component={LaunchesList}
        query={LAUNCHES_QUERY}
    />
)

export default Launches;