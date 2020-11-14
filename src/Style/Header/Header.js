import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <h1>this is the header</h1>
            <Link to="/">Go Home</Link>
        </div>
    );
}

export default Header;