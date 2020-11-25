import React from 'react';
import {NavLink} from 'react-router-dom';

import githubsmall from '../Images/github-small.png';
import codepensmall from '../Images/codepen-small.png';
import linkedinsmall from '../Images/linkedin-small.png';
import emailsmall from '../Images/email-small.png';

import './Header.css';

import resume from '../../HelenMcKay_Resume.pdf';

const MediaLink = (props) => {
    return(
        <a href={props.link} className="mediaLink" target="_blank" rel="noopener noreferrer">
            <img src={props.image} alt={props.name}/>
        </a>
    );
}

const Header = () => {
    return(
        <header>
            <h1>Helen McKay</h1>
            <ul id="media">
                <li><MediaLink name="GitHub" image={githubsmall} link="https://github.com/helen-mckay"/></li>
                <li><MediaLink name="CodePen" image={codepensmall} link="https://codepen.io/helen-mckay"/></li>
                <li><MediaLink name="LinkedIn" image={linkedinsmall} link="https://linkedin.com/in/helen-mckay-htx"/></li>
                <li id="email-media-li"><a className="mediaLink" id="email-media" href="mailto:helen@helenmckay.dev"><img src={emailsmall} alt="Email"/></a></li>
            </ul>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName="activeNavLink">Home</NavLink></li>
                    <li><NavLink to="/portfolio" exact activeClassName="activeNavLink">Portfolio</NavLink></li>
                    <li><NavLink to="/bio" exact activeClassName="activeNavLink">About Me</NavLink></li>
                    <li id="resmue-link-li"><a href={resume} id="resume-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;