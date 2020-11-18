import React from "react";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Icons
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

// Components
import Loader from "../components/Loader";
import Launch from "../components/Launch";
import SeeAll from "../components/SeeAll";
import Rocket from "../components/Rocket";
import IconLink from "../components/IconLink";

const DASHBOARD_QUERY = gql`
  query Latest {
   latest {
      launch {
         mission_name
         launch_date_local
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
      <div className="dashboardContainer">
        <div className="dashboardContent">
         <SeeAll link="/launches" text="Latest launch" />
         <Launch item={launch} />
        </div>
        <div className="dashboardContent">
         <SeeAll link="/rockets" text="Highest success rate %" />
         <Rocket item={rocket} />
        </div>
      </div>
      <div className="dashboardLinks">
        <IconLink
         image={githubIcon} 
         link="https://github.com/gagro"
        />
        <IconLink
         image={linkedinIcon} 
         link="https://www.linkedin.com/in/toni-gagro-7611b118b/"
        />
      </div>
    </div>
  )
}

export default Dashboard;