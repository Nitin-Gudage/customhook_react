import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(url);
            setData(response.data);
            setError(null);
        } catch (err) {
            if (err.response) {
                setError(`Error: ${err.response.statusText}`);
            } else if (err.request) {
                setError('No Network...');
            } else {
                setError('An unexpected error occurred...');
            }
        } finally {
            setLoading(false);
        }
    }, [url]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return { data, loading, error };
};

export default useFetch;
