import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const abortCont = new AbortController();

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(res => {
                console.log(res)
                if (!res.ok) {
                    throw Error('could not fetch for that resource')
                }
                return res.json();
            }).then((data) => {
                setData(data)
                setIsPending(false)
                setError(null)
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('fetch aboted')
                }
                else {
                    setIsPending(false)
                    setError(err.message)
                }
            })
        }, 1000);

        return () => abortCont.abort();

    }, [url])
    //here we return an object
    return { data, isPending, error }
}

export default useFetch;