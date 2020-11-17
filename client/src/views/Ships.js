import React from "react";

// GraphQL
import { gql } from '@apollo/client';

// Components
import Container from "../components/Container";
import Ship from "../components/Ship";

const SHIPS_QUERY = gql`
  query ShipsQuery($limit: Int!, $offset: Int!) {
    ships(limit: $limit, offset: $offset) {
        records {
            ship_name
            ship_type
            roles
            weight_kg
            year_built
            active
            url
            image
            missions
        }
        count
    }
  }
`;

const Ships = () => (
  <Container
    title="Ships"
    array="ships"
    component={Ship}
    query={SHIPS_QUERY}
  />
)

export default Ships;