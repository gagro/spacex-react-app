import React from "react";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Components
import Loader from "../components/Loader";

const DASHBOARD_QUERY = gql`
  query Latest {
    latest {
        launch {
            mission_name
        }
        rocket {
            rocket_name
        }
    }
  }
`;


const Dashboard = () => {
    const { loading, data, error } = useQuery(DASHBOARD_QUERY);

    if (loading) return <Loader />
    if (error) return <div>Error !</div>
    return (
        <div>hahahah</div>
    )
}

export default Dashboard;