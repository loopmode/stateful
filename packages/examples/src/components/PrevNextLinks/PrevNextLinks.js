import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import css from './PrevNextLinks.scss';
import cx from 'classnames';

const PrevNextLinks = props => {
    const navLinks = document.querySelectorAll('.AppMenu a');
    const { prevLink, nextLink } = getPrevNextLinks(
        navLinks,
        props.location.pathname
    );
    return (
        <footer className={cx('PrevNextLinks', css.PrevNextLinks)}>
            {prevLink && <Link {...prevLink} onClick={scrollToTop} />}
            <span className="spacer" />
            {nextLink && <Link {...nextLink} onClick={scrollToTop} />}
        </footer>
    );
};
PrevNextLinks.propTypes = {
    location: PropTypes.object.isRequired
};
export default withRouter(PrevNextLinks);

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}

function getPrevNextLinks(navLinks, pathname) {
    const currentIndex = [...navLinks].findIndex(
        a => a.hash.replace('#', '') === pathname
    );
    const prevAnchor = navLinks[currentIndex - 1];
    const prevLink = prevAnchor && {
        to: prevAnchor.hash.replace('#', ''),
        children: `◀ ${prevAnchor.innerHTML}`
    };
    const nextAnchor = navLinks[currentIndex + 1];
    const nextLink = nextAnchor && {
        to: nextAnchor.hash.replace('#', ''),
        children: `${nextAnchor.innerHTML} ▶`
    };
    return {
        prevLink,
        nextLink
    };
}
