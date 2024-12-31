import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setISLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setISLoading(true)
            await callback()
        } catch (e) {
            setError(e.message)
        } finally {
            setISLoading(false)
        }
    }

    return [fetching, isLoading, error];
}