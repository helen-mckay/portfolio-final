import React, { useEffect, useState } from 'react';
import firebase from '../../../firebase';
import { useDownloadURL } from 'react-firebase-hooks/storage';

import './AdminCard.css';

//next, will create timestamps for each card so that cards can be queried by when they were created

// will receive props!
    //receives 
        //doc_id=doc.id and 
        //data=doc.data()
        //updateCard=updateCard(id, newValues)
        //deleteCard=deleteCard(id)

const AdminCardImageFetcher = (props) => {
    const [downloadURL, URL_loading, URL_error] = useDownloadURL(
        firebase.storage().ref(`projects/${props.doc_id}/${props.doc_id}.jpg`)
    );

    return(
        <div className="pic_container">
            {URL_loading ?
            <p>Loading image...</p>
            :<img src={downloadURL} alt=""/>}
        </div>
    )
}

const AdminCard = ({doc_id, data, updateCard, deleteCard}) => {
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

    const [title, setTitle] = useState(data.title);
    const [tech, setTech] = useState([...data.tech]);
    const [links, setLinks] = useState([...data.links]);
    const [description, setDescription] = useState(data.description);
    const [publicToggle, setPublicToggle] = useState(data.publicToggle);

    const [newImage, setNewImage] = useState(null);

    const metaData = {
        contentType: 'image/jpeg'
    }

    const discardChanges = () => {
        setTitle(data.title);
        setTech([...data.tech]);
        setLinks([...data.links]);
        setDescription(data.description);
        setNewImage(null);
        setPublicToggle(data.publicToggle);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //there is a new image to be uploaded
        if (newImage)
        {
            console.log("adding a new image");

            //there is already an image for this post
            if (hasImage)
            {
                //delete it and replace it

                console.log("there is already an image");

                firebase.storage().ref(`projects/${doc_id}/${doc_id}.jpg`).delete().catch(error => {
                    console.log(error);
                }).then(
                    firebase.storage().ref(`projects/${doc_id}/${doc_id}.jpg`).put(newImage, metaData).then(() => {
                        setNewImage(null);
                    })
                )
            }
            else
            {
                //there is not already an image for this post
                //so, put the image there

                console.log("there is no current image");

                firebase.storage().ref(`projects/${doc_id}/${doc_id}.jpg`).put(newImage, metaData).catch(error => {
                    console.log("something went wrong");
                }).then(() => {
                    setNewImage(null);
                });
            }
        }

        updateCard(doc_id, {
            title: title,
            tech: tech,
            links: links,
            description: description,
            date: data.date,
            publicToggle: publicToggle
        });
    }

    const deleteCurrentImage = () => {
        if (hasImage)
        {
            firebase.storage().ref(`projects/${doc_id}/${doc_id}.jpg`).delete().catch(error => {
                console.log(error);
            })
        }
    }

    const handleDelete = () => {      
        deleteCurrentImage();
        deleteCard(doc_id);
    }
    
    const handleTechChange = (e, index) => {
        let newArr = [...tech];
        newArr[index] = e.target.value;

        setTech(newArr);
    }

    const deleteTech = (index) => {
        let newArr = [...tech];
        if (newArr.length === 1)
        {
            newArr = [];
        }
        else
        {
            newArr.splice(index, 1);
        }
        setTech(newArr);
    }

    const addTech = () => {
        let newArr = [...tech, ""];
        setTech([...newArr]);
    }

    const handleLinkChange = (e, index) => {
        let newArr = [...links];
        newArr[index] = e.target.value;

        setLinks(newArr);
    }

    const deleteLink = (index) => {
        let newArr = [...links];
        if (newArr.length === 1)
        {
            newArr = [];
        }
        else
        {
            newArr.splice(index, 1);
        }
        setLinks(newArr);
    }

    const addLink = () => {
        let newArr = [...links, ""];
        
        setLinks(newArr);
    }

    const handleUploadChange = (e) => {
        setNewImage(e.target.files[0]);

        e.target.value = null;
    }

    const handlePublicToggle = () => {
        setPublicToggle(!publicToggle);
    }

    //creates unique keys for these mapped elements upon render!
        //this way, it's not dependent on index or value (which can cause the app to break)

    let techKeyCount = 0;
    let linkKeyCount = 0;

    return(
        <div className="adminCard">
            {publicToggle ? <p>This card is public</p> : <p>This card is private</p>}
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>toggle public/private</label>
                    <input type="checkbox" checked={publicToggle} onChange={handlePublicToggle}/>
                </div>
                
                <p>Original image:</p>
                {hasImage && <AdminCardImageFetcher doc_id={doc_id}/>}
                <p>New image:</p>
                <div className="pic_container"> 
                    {newImage && <img src={URL.createObjectURL(newImage)} alt=""/>}
                </div>
                <div>
                    <label>Upload new image</label>
                    <input 
                        accept=".jpg, .jpeg" 
                        type="file" 
                        onClick={e => (e.target.value = null)} 
                        onChange={e => handleUploadChange(e)}/>
                </div>
                <button onClick={() => deleteCurrentImage()}>Delete Current Image</button>
                <div>
                    <label>Title</label>
                    <input 
                        type="text"
                        value={title} 
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    {tech && tech.map((t, index) => (
                        <div key={techKeyCount++}>
                            <label>tech {index}</label>
                            <input 
                                type="text" 
                                value={tech[index]} 
                                onChange={e => handleTechChange(e, index)}
                            />
                            <button onClick={() => deleteTech(index)}>Delete</button>
                        </div>
                    ))}
                    <button onClick={addTech}>Add tech</button>
                </div>
                <div>
                    {links && links.map((l, index) => (
                        <div key={linkKeyCount++}>
                            <label>link {index}</label>
                            <input 
                                type="text" 
                                value={links[index]} 
                                onChange={e => handleLinkChange(e, index)}
                            />
                            <button onClick={() => deleteLink(index)}>Delete</button>
                        </div>
                    ))}
                    <button onClick={addLink}>Add link</button>
                </div>
                <div>
                    <textarea 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <input type="submit"/>
            </form>
            <button onClick={discardChanges}>Discard Changes</button>
            <button onClick={deleteCurrentImage}>Delete Current Image</button>
            <button onClick={handleDelete}>Delete This Project</button>
        </div>
    );
}

export default AdminCard;