import React from 'react';

import firebase from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

import AdminCard from './AdminCard/AdminCard';

const Admin = () => {

    const [snapshot, snapshot_loading, snapshot_error] = useCollection(
        firebase.firestore().collection('projects')
    );

    const doSignOut = () => {
        firebase.auth().signOut();
    }

    const addNewCard = () => {
        firebase.firestore().collection('projects').add({
            title: "new title",
            tech: ["technology 1", "technology 2"],
            links: ["some link"],
            description: "LOREM IPSUM",
            date: Date.now()
        });
    }

    const updateCard = (id, newValues) => {
        firebase.firestore().collection('projects').doc(id).update(newValues);
    }

    const deleteCard = (id) => {
        firebase.firestore().collection('projects').doc(id).delete().catch(error => {
            console.log(error);
        });
    }

    return(
        <div>
            <h2>This is the admin page</h2>
            <button onClick={doSignOut}>log out</button>
            {snapshot && snapshot.docs.map((doc) => (
                <AdminCard
                    key={doc.id}
                    doc_id={doc.id}
                    data={doc.data()}
                    updateCard={updateCard}
                    deleteCard={deleteCard}
                />
            ))}
            <button onClick={addNewCard}>Add New Card</button>
        </div>
    );
}

export default Admin;