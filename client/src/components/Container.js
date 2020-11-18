import React from "react";

// GraphQL
import { useQuery } from '@apollo/client';

// Hooks
import usePagination from "../hooks/usePagination";

// Components
import Pagination from "./Pagination";
import Loader from "./Loader";

const Container = ({ query, array, col, component: Item }) => {
   const [offset, setOffset] = usePagination();
   const { loading, error, data } = useQuery(
      query, 
      { variables: { limit: 6, offset } }
   );

   if (loading) return <Loader />
   if (error) return <div>Error!</div>

   const { records, count } = data[array];

   return (
      <div>
         <div className="responsiveContainer">
            {records.map(item => (
               <div className={`responsiveItem ${col}`} key={Math.random()}>
                  <Item item={item} />
               </div>
            ))}
         </div>
         <Pagination 
            currentPage={Math.ceil((offset + 1) / 6)} 
            totalPages={Math.ceil(count / 6)} 
            setOffset={setOffset} 
         />
      </div>
   )
}

export default Container;