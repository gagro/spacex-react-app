import React from "react";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Components
import Loader from "../components/Loader";
import Launch from "../components/Launch";

const DASHBOARD_QUERY = gql`
  query Latest {
    latest {
        launch {
            mission_name
            launch_date_unix
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

    const { launch, rocket } = data.latest;

    return (
        <div>
            <Launch item={launch} />
        </div>
    )
}

export default Dashboard;