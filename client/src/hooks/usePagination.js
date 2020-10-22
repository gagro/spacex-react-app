import { useState, useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";

import queryString from "query-string";

const usePagination = () => {
    const history = useHistory();
    const location = useLocation();
    const parsedQuery = queryString.parse(location.search);
    const [offset, setOffset] = useState(parseInt(parsedQuery.offset) || 0);

    useEffect(() => {
        history.push(`${location.pathname}?limit=10&offset=${offset}`);
        return () => { }
    }, [offset, location.search]);

    return [offset, setOffset];
}

export default usePagination;