import React from "react";

// GraphQL
import { gql, useQuery } from '@apollo/client';

// Hooks
import usePagination from "../hooks/usePagination";

// Components
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import Mission from "../components/Mission";

const MISSIONS_QUERY = gql`
  query MissionsQuery($limit: Int!, $offset: Int!) {
    missions(limit: $limit, offset: $offset) {
        records {
            mission_name
            mission_id
            manufacturers
            wikipedia
            website
            twitter
        }
        count
    }
  }
`;

const Missions = () => {
  const [offset, setOffset] = usePagination();
  const { loading, error, data } = useQuery(MISSIONS_QUERY, { variables: { limit: 6, offset } });

  if (loading) return <Loader />
  if (error) return <div>Error!</div>

  const { records, count } = data.missions;

  return (
    <div>
      {records.map(item => (
        <Mission item={item} />
      ))}
      <Pagination currentPage={Math.ceil((offset + 1) / 6)} setOffset={setOffset} totalPages={Math.ceil(count / 6)} />
    </div>
)}

export default Missions;