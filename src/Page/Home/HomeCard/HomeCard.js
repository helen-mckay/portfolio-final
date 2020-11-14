import React, { useState, useEffect } from 'react';

import firebase from '../../../firebase';

import { useDownloadURL } from 'react-firebase-hooks/storage';

const HomeCardImageFetcher = (props) => {
    const [downloadURL, URL_loading, URL_error] = useDownloadURL(
        firebase.storage().ref(`projects/${props.doc_id}/${props.doc_id}.jpg`)
    );

    return(
        <div>
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
    let linkKeyCounter = 0;

    return(
        <div>
            {hasImage && <HomeCardImageFetcher doc_id={doc_id}/>}
            <h3>{data.title}</h3>
            <ul>
                {data.tech.map((t, index) => (
                    <li key={techKeyCounter++}>{t}</li>
                ))}
            </ul>
            <ul>
                {data.links.map((l, index) => (
                    <li key={linkKeyCounter++}>{l}</li>
                ))}
            </ul>
            <p>{data.description}</p>
        </div>
    );
}

export default HomeCard;