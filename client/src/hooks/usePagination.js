import { useState, useEffect } from "react";

import { useLocation, useHistory } from "react-router-dom";

import queryString from "query-string";

const usePagination = () => {
    const history = useHistory();
    const location = useLocation();
    const parsedQuery = queryString.parse(location.search);
    const [offset, setOffset] = useState(parseInt(parsedQuery.offset) || 0);

    useEffect(() => {
        if (!parsedQuery.offset) setOffset(0);
        return () => { }
    }, [location.search])

    useEffect(() => {
        history.replace(`${location.pathname}?offset=${offset}`);
        return () => { }
    }, [offset]);

    return [offset, setOffset];
}

export default usePagination;