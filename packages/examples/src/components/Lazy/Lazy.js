import React, { Suspense } from 'react';

const defaultLoading = <div>Loading...</div>;

const Lazy = (Component, Loading = defaultLoading) => {
    return props => (
        <Suspense fallback={Loading}>
            <Component {...props} />
        </Suspense>
    );
};

export default Lazy;
