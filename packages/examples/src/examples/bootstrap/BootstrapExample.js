import React from 'react';

import Info from './Info';
import Buttons from './Buttons';

export default () => (
    <>
        <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
            integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
            crossOrigin="anonymous"
        />
        <div className="BootstrapExample">
            <Info />
            <Buttons />
        </div>
    </>
);
