import React from 'react';
import cx from 'classnames';
import { HashRouter as Router } from 'react-router-dom';

import css from './App.scss';

import AppHeader from 'components/AppHeader';
import AppContent from './AppContent';
import AppNavigation from './AppNavigation';

const App = () => {
    // the menu is hidden on mobile via CSS, and we force-open it when menu icon is clicked
    const [menuVisible, setMenuVisible] = React.useState(false);
    const showMenu = () => setMenuVisible(true);
    const hideMenu = () => setMenuVisible(false);

    return (
        <Router basename={process.env.REACT_APP_BASENAME}>
            <div className={cx('App', css.App, { menuVisible })}>
                <AppHeader onShowMenu={showMenu} />
                <div className="App--body">
                    <AppNavigation
                        onHideMenu={hideMenu}
                        menuVisible={menuVisible}
                    />
                    <AppContent />
                </div>
            </div>
        </Router>
    );
};

export default App;
