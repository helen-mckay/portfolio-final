import React, {useState} from 'react';

import firebase from '../../firebase';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ((email !== "") && (password !== ""))
        {
            firebase.auth().signInWithEmailAndPassword(email, password);
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
        </div>
    );
}

export default SignIn;