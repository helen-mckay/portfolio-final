import React from 'react';
import {Link} from 'react-router-dom';

import githubw from '../../Style/Images/github-w.png';
import codepenw from '../../Style/Images/codepen-w.png';

import './Home.css';

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
                        <Link to="" className="hero-button" id="hero-resume-link">My Resume</Link>
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
                                <li>Strong user experience begins with support for all users on all browsers on all devices. </li>
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
            <section className="white-section">
                <h3>I make all kinds of things.</h3>
                <p>But I've got a special focus on single-page web applications.</p>
                <p>Top skills:</p>
                <ul>
                    <li>React</li>
                    <li>Vanilla JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Firebase</li>
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
                <p>I'm looking for full-time web development work in Houston, TX.</p> 
                <p>I want to be part of team delivering solutions for businesses and users. Create applic</p>
                <p>(Remote work is preferred due to the ongoing pandemic).</p>
            </section>
            <div id="triangle-5"></div>
            <section className="color-3">
                <h3>Let's get connected.</h3>
            </section>
            <div id="triangle-6"></div>
        </div>
    );
}

export default Home;