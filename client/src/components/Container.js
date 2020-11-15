import React from "react";

// GraphQL
import { useQuery } from '@apollo/client';

// Hooks
import usePagination from "../hooks/usePagination";

// Components
import Pagination from "./Pagination";
import Loader from "./Loader";

const Container = ({ query, array, component: Item }) => {
    const [offset, setOffset] = usePagination();
    const { loading, error, data } = useQuery(query, { variables: { limit: 6, offset } });

    if (loading) return <Loader />
    if (error) return <div>Error!</div>

    return (
        <div>
            <div className="responsiveContainer">
                {data[array].records.map(item => (
                    <div className="responsiveItem" key={Math.random()}>
                        <Item item={item} />
                    </div>
                ))}
            </div>
            <Pagination currentPage={Math.ceil((offset + 1) / 6)} setOffset={setOffset} totalPages={Math.ceil(data[array].count / 6)} />
        </div>
    )
}

export default Container;