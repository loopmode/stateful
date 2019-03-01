import React from 'react';
import loadDependencies from './loadDependencies';

export default function usePrism(ref) {
    const applyPrism = async () => {
        const { Prism } = await loadDependencies();
        if (!ref) {
            Prism.highlightAll();
        } else if (ref.current) {
            Prism.highlightAllUnder(ref.current);
        }
    };
    React.useEffect(() => {
        applyPrism();
    });
}
