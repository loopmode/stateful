import { useState, useEffect } from 'react';

export default function useTimeout(func, delay = 0) {
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        if (isPending) {
            const timeoutID = window.setTimeout(func, delay);
            return () => {
                window.clearTimeout(timeoutID);
            };
        }
    }, [isPending]);

    return {
        clear: () => setPending(false),
        start: () => setPending(true)
    };
}
