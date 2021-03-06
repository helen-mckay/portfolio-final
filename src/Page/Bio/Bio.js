import React from 'react';
import {Link} from 'react-router-dom';

import './Bio.css';

import resume from '../../HelenMcKay_Resume.pdf';

const Bio = () => {
    return(
        <div id="Bio">
            <div id="Bio-hero">
                <h2>My Story</h2>
            </div>
            <h3>How I got started:</h3>
            <p>When I was 13 years old, I started hacking and editing Tumblr themes because I was never satisfied with  the styling. I was soon addicted to hunting down new themes to explore how their code worked and make little tweaks to suit my style needs.</p> 
            <p>Not long after, I developed a deep passion for webcomics. How incredible it is to build a story, business, and community, all on one website! As my reading list grew from a handful of webcomics to several dozen, I started noting how varied and unique each website was for each comic—from styling to features, I noted what I felt worked and what didn’t. Soon, I had a dream. I wanted to be like my favorite webcomic artists, some day. But I wanted to go one step further: I wanted to build the website <em>myself.</em></p>
            <p>I was a teenager teaching myself HTML and CSS for fun when I had the epiphany I could make websites as a job, too. Everything clicked into place for me then. In fact, I almost felt like I was cheating! Web development was pure fun for me—and you’re telling me I could make a career out of it?</p> 
            <p>I don’t read many webcomics, these days, but I’ve never lost my fascination for them.  And I’ve never forgotten what I’ve learned from them, either: how to design a website that simultaneously supports a story, brand, business, and community.</p>
            <h3>Where I am now:</h3>
            <p>I attended UT Dallas from fall 2017 to fall 2019. I majored in Software Engineering and minored in Visual Arts. I wanted to be trained as both designer and developer so I could become the best web develper I could be.</p> 
            <p>In fall 2019, life events interrupted my education&mdash;which was then further interrupted by the COVID-19 pandemic.</p>
            <p>Then, once things finally settled down some, I had another web development-related epiphany: nothing’s stopping me from making websites!</p>
            <p>So, I’m back to making websites&mdash;and now I’m backed by my training as software engineer and visual artist.</p>
            <h3>What I'm looking for:</h3>
            <p>I want to work together with a team, making web applications that help businesses succeed.</p>
            <p>I’m looking for full-time development work in Houston, TX. (Remote work is preferred due to the ongoing pandemic).</p>
            <p>Please feel free to download <a href={resume} target="_blank" rel="noopener noreferrer">my resume</a> and explore my projects on my <Link to="/portfolio">portfolio</Link>, <a href="https://github.com/helen-mckay" target="_blank" rel="noopener noreferrer">Github</a> repositories, and <a href="https://codepen.io/helen-mckay" target="_blank" rel="noopener noreferrer">CodePens</a>. I also invite you to connect with me on <a href="https://linkedin.com/helen-mckay-htx" target="_blank" rel="noopener noreferrer">LinkedIn</a> or send me an <a href="mailto:helen@helenmckay.dev">email</a>.</p>
            <h3>Other things I do:</h3>
            <p>When I’m not working on websites, I can be found baking homemade bread, crocheting, creating digital art, and watching hilariously terrible movies with my friends over Discord (every Thursday at 7 p.m.&mdash;I call it Trash Movie Thursdays. I'm very proud of it).</p>
        </div>
    );
}

export default Bio;