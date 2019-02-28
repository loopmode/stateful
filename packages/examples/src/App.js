import React from 'react';
import cx from 'classnames';
import { HashRouter as Router } from 'react-router-dom';

import css from './App.scss';

const AppHeader = React.lazy(() =>
    import(/* webpackChunkName: 'components/AppHeader' */ 'components/AppHeader')
);
const AppMenu = React.lazy(() =>
    import(/* webpackChunkName: 'components/AppMenu' */ 'components/AppMenu')
);
const AppContent = React.lazy(() =>
    import(/* webpackChunkName: 'components/AppContent' */ 'components/AppContent')
);

const App = () => {
    // the menu is hidden on mobile via CSS, and we force-open it when menu icon is clicked
    const [menuVisible, setMenuVisible] = React.useState(false);
    const showMenu = () => setMenuVisible(true);
    const hideMenu = () => setMenuVisible(false);

    return (
        <React.Suspense
            fallback={<div style={{ padding: 10 }}>Loading...</div>}
        >
            <Router basename={process.env.REACT_APP_BASENAME}>
                <div className={cx('App', css.App, { menuVisible })}>
                    <AppHeader onShowMenu={showMenu} />
                    <div className="App--body">
                        <AppMenu
                            onHideMenu={hideMenu}
                            menuVisible={menuVisible}
                        />
                        <AppContent />
                    </div>
                </div>
            </Router>
        </React.Suspense>
    );
};

export default App;
