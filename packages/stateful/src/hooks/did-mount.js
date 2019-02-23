import { useEffect } from 'react';

export default function useDidMount(func) {
    useEffect(() => typeof func === 'function' && func(), []);
}
