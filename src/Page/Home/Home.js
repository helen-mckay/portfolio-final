import React from 'react';
import {Link} from 'react-router-dom';

import github from '../../Style/Images/github.png';
import codepen from '../../Style/Images/codepen.png';
import linkedin from '../../Style/Images/linkedin.png';
import email from '../../Style/Images/email.png';

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
                        <li>&#9745; living in Houston, TX.</li>
                        <li>&#9744; part of <span className="work-span">your team.</span></li>
                    </ul>
                    <div id="hero-buttons">
                        <Link to="/portfolio" className="hero-button" id="work-link">My Work</Link>
                        <Link to="/bio" className="hero-button" id="story-link">My Story</Link>
                    </div>
                </div>
            </div>
            <div id="joy">
                <h3>I infuse <span className="life-span">joy</span> into everything I make.</h3>
                <p>Especially websites. And I'm a firm believer that the user's experience should be fun and joyous, too.</p>
                <p>My design and development philosophy:</p>
                <ul>
                    <li>Understand the project as a fusion of art and code.</li>
                    <li>Design it mobile-first, build it responsive.</li>
                    <li>Fun to build, fun to use.</li>
                </ul>
            </div>
            <div id="making">
                <h3>I've made all kinds of things.</h3>
                <p>I've got a special focus on building responsive user-focused single-page web applications with React and Firebase.</p>
                <p>Top skills:</p>
                <ul>
                    <li>React</li>
                    <li>Vanilla JavaScript (ES6+)</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Firebase</li>
                </ul>
                <p>Check out my portfolio projects. Explore my GitHub repositories. Play with my CodePens.</p>
            </div>
            <div>
                <h3>I want to be part of your team.</h3>
                <p>I'm looking for full-time web development work in Houston, TX.</p>
                <p>Connect with me on LinkedIn. Send me an email.</p>
            </div>
        </div>
    );
}

export default Home;