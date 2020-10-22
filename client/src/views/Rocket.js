import React from "react";
import { useParams } from "react-router-dom";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Components
import Loader from "../components/Loader";

const ROCKER_QUERY = gql`
  query RocketQuery($rocket_id: String!) {
    rocket(rocket_id: $rocket_id) {
        rocket_name
    }
  }
`;

const Rocket = () => {
    const { rocket_id } = useParams();
    const { loading, error, data } = useQuery(ROCKER_QUERY, { variables: { rocket_id } });

    if (loading) return <Loader />
    if (error) return <div>Error!</div>

    const { rocket_name } = data.rocket;

    return (
        <div>{rocket_name}</div>
    )
}

export default Rocket;