import React from 'react';
import {NavLink} from 'react-router-dom';

import github from '../Images/github.png';
import codepen from '../Images/codepen.png';
import linkedin from '../Images/linkedin.png';
import email from '../Images/email.png';

import './Header.css';

const MediaLink = (props) => {
    return(
        <a href={props.link} className="mediaLink">
            <img src={props.image}/>
        </a>
    );
}

const Header = () => {
    return(
        <header>
            <h1>Helen McKay</h1>
            <ul id="media">
                <li><MediaLink image={github} link="https://github.com/helen-mckay"/></li>
                <li><MediaLink image={codepen} link="https://codepen.io/helen-mckay"/></li>
                <li><MediaLink image={linkedin} link=""/></li>
                <li><MediaLink image={email} link="mailto:helen.mckay@comcast.net"/></li>
            </ul>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName="activeNavLink">Portfolio</NavLink></li>
                    <li><NavLink to="/bio" exact activeClassName="activeNavLink">About Me</NavLink></li>
                    <li><a href="" id="resume-link">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;