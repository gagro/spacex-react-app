import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Container from "../components/Container";
import MissionsList from "../components/MissionsList";

const MISSIONS_QUERY = gql`
  query MissionsQuery($limit: Int!, $offset: Int!) {
    missions(limit: $limit, offset: $offset) {
        records {
            mission_id
            mission_name
        }
        count
    }
  }
`;

const Missions = () => (
    <Container
        title="Missions"
        array="missions"
        component={MissionsList}
        query={MISSIONS_QUERY}
    />
)

export default Missions;