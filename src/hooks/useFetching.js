import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setISLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setISLoading(true)
            await callback(...args)
        } catch (e) {
            setError(e.message)
        } finally {
            setISLoading(false)
        }
    }

    return [fetching, isLoading, error];
}