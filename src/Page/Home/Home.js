import React from 'react';
import {Link} from 'react-router-dom';

import githubw from '../../Style/Images/github-w.png';
import codepenw from '../../Style/Images/codepen-w.png';
import linkedinw from '../../Style/Images/linkedin-w.png';
import emailw from '../../Style/Images/email-w.png';

import reactlogo from '../../Style/Images/reactlogo.png';
import javascriptlogo from '../../Style/Images/javascriptlogo.png';
import html5logo from '../../Style/Images/html5logo.png';
import css3logo from '../../Style/Images/css3logo.png';
import firebaselogo from '../../Style/Images/firebaselogo.png';

import './Home.css';

import resume from '../../HelenMcKay_Resume.pdf';

const Home = () => {
    return(
        <div id="Home">
            <div id="hero">
                <div id="hero-content">
                    <h2>I'm Helen McKay.</h2>
                    <ul>
                        <li>&#9745; designer.</li>
                        <li>&#9745; developer.</li>
                        <li>&#9745; Houston, TX.</li>
                        <li>&#9744; part of <span className="accent-3-span">your team.</span></li>
                    </ul>
                    <div id="hero-buttons">
                        <Link to="/portfolio" className="hero-button" id="work-link">My Work</Link>
                        <Link to="/bio" className="hero-button" id="story-link">My Story</Link>
                        <Link to={resume} target="_blank" noopener noreferrer className="hero-button" id="hero-resume-link">My Resume</Link>
                    </div>
                </div>
            </div>
            <section className="white-section" id="white-1">
                <h3>I infuse joy into everything I make.</h3>
                <p>Especially websites. I'm a firm believer that the user's experience should be a smooth and joyous one.</p>
            </section>
            <div id="triangle-1"></div>
            <section className="color-1">
                <div id="color-1-content">
                    <h3>My design and development philosophy:</h3>
                    <ul>
                        <li>Understand the project as a fusion of art and code.</li>
                        <li>
                            <ul>
                                <li>I studied Software Engineering and Visual Arts at UT Dallas.<br/>I wear the hats of both engineer and artist with every application I build. </li>
                            </ul>
                        </li>
                        <li>Design it mobile-first, build it responsive.</li>
                        <li>
                            <ul>
                                <li>Strong user experience begins with a design that supports all users.</li>
                            </ul>
                        </li>
                        <li>Fun to build, fun to use.</li>
                        <li>
                            <ul>
                                <li>Joy makes a user experience memorable&mdash;an essential quality for companies that need users returning to their application again and again and again.</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
            <div id="triangle-2"></div>
            <section className="white-section" id="white-2">
                <h3>I make all kinds of things.</h3>
                <p>But I've got a special focus on single-page web applications.</p>
                <h4>Top Skills:</h4>
                <ul>
                    <li><img src={reactlogo} alt="React"/></li>
                    <li><img src={javascriptlogo} alt="JavaScript"/></li>
                    <li><img src={html5logo} alt="HTML5"/></li>
                    <li><img src={css3logo} alt="CSS3"/></li>
                    <li><img src={firebaselogo} alt="Firebase"/></li>
                </ul>
            </section>
            <div id="triangle-3"></div>
            <section className="color-2">
                <div id="color-2-content">
                    <h3>Explore my projects.</h3>
                    <p>Check out the live applications in my portfolio.</p>
                    <Link to="/portfolio">My Portfolio</Link>
                    <p>Check out my code on GitHub and CodePen:</p>
                    <ul>
                        <li><a href="https://github.com/helen-mckay" target="_blank" noopener noreferrer><img src={githubw} alt="GitHub"/></a></li>
                        <li><a href="https://codepen.io/helen-mckay" target="_blank" noopener noreferrer><img src={codepenw} alt="CodePen"/></a></li>
                    </ul>
                </div>
            </section>
            <div id="triangle-4"></div>
            <section className="white-section">
                <h3>I want to be on your team.</h3>
                <p>I'm looking for full-time web development work in Houston, TX. (Remote work preferred due to the ongoing pandemic).</p> 
            </section>
            <div id="triangle-5"></div>
            <section className="color-3">
                <div id="color-3-content">
                    <h3>Let's get connected.</h3>
                    <p>Connect with me on LinkedIn and/or send me an email:</p>
                    <ul>
                        <li><a href="https://linkedin.com/in/helen-mckay-htx" target="_blank" noopener noreferrer><img src={linkedinw} alt="LinkedIn"/></a></li>
                        <li><a href="mailto:helen.mckay@comcast.net" target="_blank" noopener noreferrer><img src={emailw} alt="Email"/></a></li>
                    </ul>
                </div>
            </section>
            <div id="triangle-6"></div>
        </div>
    );
}

export default Home;