import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase'

function Login() {
    const signIn = () =>{
        //sign in
        auth.signInWithPopup(provider)
        .then(results=>{
            console.log(results)
        })
        .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_lgo_%282019%29.svg.png" alt=""/>
                
            </div>
            <Button type="submit" onClick={signIn}>Sign in</Button>
        </div>
    )
}

export default Login
