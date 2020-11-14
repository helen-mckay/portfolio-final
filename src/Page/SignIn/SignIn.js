import React, {useState} from 'react';

import firebase from '../../firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ((email !== "") && (password !== ""))
        {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
                console.log(error);
                setError(error);
            }).then(() => {
                setEmail("");
                setPassword("");
            })
        }
    }

    return(
        <div>
            <h2>This is the signin page</h2>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label>email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <input type="submit"/>
            </form>
            {error && <p>{error.code}</p>}
        </div>
    );
}

export default SignIn;