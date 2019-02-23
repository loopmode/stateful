import { useEffect } from 'react';

export default function useWillUnmount(func) {
    useEffect(() => func, []);
}
