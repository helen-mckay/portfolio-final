import React, { useState, useEffect } from 'react';

import firebase from '../../../firebase';

import { useDownloadURL } from 'react-firebase-hooks/storage';

import githubw from '../../../Style/Images/github-w.png';
import codepenw from '../../../Style/Images/codepen-w.png';
import websitew from '../../../Style/Images/website-w.png';

import './PortfolioCard.css';

// concept: make the background-color decided randomly!

const PortfolioCardImageFetcher = (props) => {
    const [downloadURL, URL_loading, URL_error] = useDownloadURL(
        firebase.storage().ref(`projects/${props.doc_id}/${props.doc_id}.jpg`)
    );

    return(
        <div className="PortfolioCardImage">
            {URL_loading ?
            <p>Loading image...</p>
            :<img src={downloadURL} alt=""/>
            }
        </div>
    );
} 

const PortfolioCard = ({doc_id, data}) => {
    const [hasImage, setHasImage] = useState(false);
    const [randomColor, setRandomColor] = useState(Math.floor(Math.random() * 3));

    useEffect(() => {
        async function checkForImage(){
            const result = await firebase.storage().ref(`projects/${doc_id}`).listAll();

            if (result.items.length > 0)
            {
                setHasImage(true);
            }
        };

        checkForImage();
    }, [doc_id])

    let techKeyCounter = 0;

    return(
        <div className={"PortfolioCard" + randomColor}>
            <div className="PortfolioCard-content">
                {hasImage && <PortfolioCardImageFetcher doc_id={doc_id}/>}
                <h3>{data.title}</h3>
                <ul className="tech">
                    {data.tech.map((t, index) => (
                        <li key={techKeyCounter++}>{t}</li>
                    ))}
                </ul>
                <ul className="links">
                    {(data.github !== "") && <li><a className="site-link" href={data.github} target="_blank" noopener noreferrer><img src={githubw}/><p>GitHub</p></a></li>}
                    {(data.codepen !== "") && <li><a className="site-link" href={data.codepen} target="_blank" noopener noreferrer><img src={codepenw}/><p>CodePen</p></a></li>}
                    {(data.live !== "") && <li><a className="live-site" href={data.live} target="_blank" noopener noreferrer><img src={websitew}/><p>Live Site</p></a></li>}
                </ul>
                <p className="description">{data.description}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;