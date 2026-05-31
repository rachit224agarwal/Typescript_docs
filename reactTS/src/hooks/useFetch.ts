import { useState, useEffect } from "react";

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export function useFetch<T>(url: string): FetchState<T> {

    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json() as Promise<T>;
            })
            .then(data => setState({ data, loading: false, error: null }))
            .catch(error => setState({ data: null, loading: false, error: error.message }));
    }, [url]);


    return state;

}