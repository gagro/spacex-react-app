import React from "react";

// GraphQL
import { useQuery } from '@apollo/client';

// Hooks
import usePagination from "../hooks/usePagination";

// Components
import Pagination from "./Pagination";
import Title from "./Title";
import Loader from "./Loader";

const Container = ({ query, title, array, component: ItemList }) => {
    const [offset, setOffset] = usePagination();
    const { loading, error, data } = useQuery(query, { variables: { limit: 10, offset } });

    if (loading) return <Loader />
    if (error) return <div>Error!</div>

    return (
        <>
            <ItemList items={data[array].records} />
            <Pagination currentPage={Math.ceil((offset + 1) / 10)} setOffset={setOffset} totalPages={Math.ceil(data[array].count / 10)} />
        </>
    )
}

export default Container;