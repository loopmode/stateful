import React from 'react';
import { Route } from 'react-router-dom';

import cx from 'classnames';
import css from './AppContent.scss';

import LoadingOverlay from 'components/LoadingOverlay';

const MemoContent = React.memo(Content, hasRouteChanged);

function hasRouteChanged(prevProps, nextProps) {
    return prevProps.location === nextProps.location;
}

function lazyRoute(importer) {
    const LazyComponent = React.lazy(importer);
    return props => (
        <React.Suspense fallback={<LoadingOverlay />}>
            <LazyComponent {...props} />
        </React.Suspense>
    );
}

/**
 * Renders the route components lazily, only re-renders when the location has changed.
 */
export default function AppContent() {
    return <Route render={props => <MemoContent {...props} />} />;
}

export function Content() {
    return (
        <div className={cx('AppContent', css.AppContent)}>
            <Route
                exact
                path="/"
                component={lazyRoute(() =>
                    import(/* webpackChunkName: "Readme" */ 'markdown/Readme')
                )}
            />
            <Route
                path="/vanilla"
                component={lazyRoute(() =>
                    import(/* webpackChunkName: "examples/Vanilla" */ 'examples/vanilla')
                )}
            />
            <Route
                path="/semantic-ui"
                component={lazyRoute(() =>
                    import(/* webpackChunkName: "examples/SemanticUI" */ 'examples/semantic-ui')
                )}
            />
            <Route
                path="/antd"
                component={lazyRoute(() =>
                    import(/* webpackChunkName: "examples/AntD" */ 'examples/antd')
                )}
            />
            <Route
                path="/bootstrap"
                component={lazyRoute(() =>
                    import(/* webpackChunkName: "examples/Bootstrap" */ 'examples/bootstrap')
                )}
            />
            <Route
                path="/material-ui"
                component={lazyRoute(() =>
                    import(/* webpackChunkName: "examples/MaterialUI" */ 'examples/material-ui')
                )}
            />
        </div>
    );
}