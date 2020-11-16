import React from 'react';
import firebase from '../../firebase';

import { useCollection } from 'react-firebase-hooks/firestore';

import HomeCard from './HomeCard/HomeCard';

const Home = () => {

    const [snapshot, snapshot_loading, snapshot_error] = useCollection(
        firebase.firestore().collection('projects').where("publicToggle", "==", true)
    );

    return(
        <div>
            {snapshot_loading && <p>Loading...</p>}
            {snapshot && snapshot.docs.map((doc) => (
                <HomeCard
                    key={doc.id}
                    doc_id={doc.id}
                    data={doc.data()}
                />
            ))}
        </div>
    );
}

export default Home;