import React from "react";
import { useParams } from "react-router-dom";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Components
import Loader from "../components/Loader";

const MISSION_QUERY = gql`
  query MissionQuery($mission_id: String!) {
    mission(mission_id: $mission_id) {
        mission_name
    }
  }
`;

const Mission = () => {
    const { mission_id } = useParams();
    const { loading, error, data } = useQuery(MISSION_QUERY, { variables: { mission_id } });

    if (loading) return <Loader />
    if (error) return <div>Error!</div>

    const { mission_name } = data.mission;

    return (
        <div>{mission_name}</div>
    )
}

export default Mission;