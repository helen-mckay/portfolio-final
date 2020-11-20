import React from 'react';
import { Link } from 'react-router-dom';

import './Error.css';

const Error = () => {
    return(
        <div id="Error">
            <h2>Error: Page not found.</h2>
            <Link to="/" id="error-link">Return to home page</Link>
        </div>
    );
}

export default Error;