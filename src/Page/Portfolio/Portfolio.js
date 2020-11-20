import React from 'react';
import firebase from '../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

import PortfolioCard from './PortfolioCard/PortfolioCard';

import './Portfolio.css';

const Portfolio = () => {
    const [snapshot, snapshot_loading, snapshot_error] = useCollection(
        firebase.firestore().collection('projects').where("publicToggle", "==", true)
    );

    return(
        <div id="Portfolio">
            {snapshot_loading && <p>Loading...</p>}
            {snapshot && snapshot.docs.map((doc) => (
                <PortfolioCard
                    key={doc.id}
                    doc_id={doc.id}
                    data={doc.data()}
                />
            ))}
        </div>
    );
}

export default Portfolio;