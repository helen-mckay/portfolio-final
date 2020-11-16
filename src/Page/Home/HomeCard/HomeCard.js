import React, { useState, useEffect } from 'react';

import firebase from '../../../firebase';

import { useDownloadURL } from 'react-firebase-hooks/storage';

import './HomeCard.css';

const HomeCardImageFetcher = (props) => {
    const [downloadURL, URL_loading, URL_error] = useDownloadURL(
        firebase.storage().ref(`projects/${props.doc_id}/${props.doc_id}.jpg`)
    );

    return(
        <div className="homeCardImage">
            {URL_loading ?
            <p>Loading image...</p>
            :<img src={downloadURL} alt=""/>
            }
        </div>
    )
} 

const HomeCard = ({doc_id, data}) => {
    const [hasImage, setHasImage] = useState(false);

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
        <div className="homeCard">
            {hasImage && <HomeCardImageFetcher doc_id={doc_id}/>}
            <h3>{data.title}</h3>
            <ul className="tech">
                {data.tech.map((t, index) => (
                    <li key={techKeyCounter++}>{t}</li>
                ))}
            </ul>
            <ul className="links">
                {(data.github !== "") && <li><a className="site-link" href={data.github} target="_blank" noopener noreferrer>GitHub</a></li>}
                {(data.codepen !== "") && <li><a className="site-link" href={data.codepen} target="_blank" noopener noreferrer>CodePen</a></li>}
                {(data.live !== "") && <li><a className="live-site" href={data.live} target="_blank" noopener noreferrer>Live Site</a></li>}
            </ul>
            <p className="description">{data.description}</p>
        </div>
    );
}

export default HomeCard;