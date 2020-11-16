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
            <section className="white-section">
                <h3>I infuse joy into everything I make.</h3>
                <p>Especially websites. I'm a firm believer that the user's experience should be a smooth and joyous one.</p>
            </section>
            <div id="triangle-1"></div>
            <section className="color-1">
                <h3>My design and development philosophy:</h3>
                <ul>
                    <li>Understand the project as a fusion of art and code</li>
                    <li>Design it mobile-first, build it responsive.</li>
                    <li>Fun to build, fun to use.</li>
                </ul>
            </section>
            <div id="triangle-2"></div>
            <section className="white-section">
                <h3>I make all kinds of things.</h3>
            </section>
            <div id="triangle-3"></div>
            <section className="color-2">
                <h3>Explore my projects.</h3>
            </section>
            <div id="triangle-4"></div>
            <section className="white-section">
                <h3>I want to be on your team.</h3>
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