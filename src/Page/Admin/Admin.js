import React, {useEffect} from 'react';

import firebase from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

import AdminCard from './AdminCard/AdminCard';

import './Admin.css';

const Admin = () => {

    const [snapshot, snapshot_loading, snapshot_error] = useCollection(
        firebase.firestore().collection('projects').orderBy("date", "desc")
    );

    const doSignOut = () => {
        firebase.auth().signOut();
    }

    const addNewCard = () => {
        firebase.firestore().collection('projects').add({
            title: "new title",
            tech: ["technology 1", "technology 2"],
            github: "",
            codepen: "",
            live: "",
            description: "LOREM IPSUM",
            date: Date.now(),
            publicToggle: false
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

    useEffect(() => {
        document.title = "Helen McKay | Admin"
    }, [document.title]);

    return(
        <div id="Admin">
            <div id="Admin-buttons">
                <h2>Admin</h2>
                <button onClick={addNewCard}>Add New Card</button>
                <button onClick={doSignOut}>log out</button>
                {snapshot_error && console.log("something wrong on the adminpage" + snapshot_error)}
            </div>
            <div id="Admin-cards">
                {snapshot && snapshot.docs.map((doc) => (
                    <AdminCard
                        key={doc.id}
                        doc_id={doc.id}
                        data={doc.data()}
                        updateCard={updateCard}
                        deleteCard={deleteCard}
                    />
                ))}
            </div>           
        </div>
    );
}

export default Admin;