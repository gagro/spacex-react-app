import React from "react";
import { useParams } from "react-router-dom";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Components
import Loader from "../components/Loader";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: String!) {
    launch(flight_number: $flight_number) {
        mission_name
    }
  }
`;

const Launch = () => {
    const { flight_number } = useParams();
    const { loading, error, data } = useQuery(LAUNCH_QUERY, { variables: { flight_number } });

    if (loading) return <Loader />
    if (error) return <div>Error!</div>

    const { mission_name } = data.launch;

    return (
        <div>{mission_name}</div>
    )
}

export default Launch;