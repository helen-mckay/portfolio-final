import React from 'react';
import {NavLink} from 'react-router-dom';

import github from '../Images/github.png';
import codepen from '../Images/codepen.png';
import linkedin from '../Images/linkedin.png';
import email from '../Images/email.png';

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
                <li><MediaLink name="GitHub" image={github} link="https://github.com/helen-mckay"/></li>
                <li><MediaLink name="CodePen" image={codepen} link="https://codepen.io/helen-mckay"/></li>
                <li><MediaLink name="LinkedIn" image={linkedin} link="https://linkedin.com/in/helen-mckay-htx"/></li>
                <li><MediaLink name="Email" image={email} link="mailto:helen@helenmckay.dev"/></li>
            </ul>
            <nav>
                <ul>
                    <li><NavLink to="/" exact activeClassName="activeNavLink">Home</NavLink></li>
                    <li><NavLink to="/portfolio" exact activeClassName="activeNavLink">Portfolio</NavLink></li>
                    <li><NavLink to="/bio" exact activeClassName="activeNavLink">About Me</NavLink></li>
                    <li><a href={resume} id="resume-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;