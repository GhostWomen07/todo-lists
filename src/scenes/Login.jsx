import React, { useState } from 'react'
import LoginForm from '../components/Loginform/index';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import {useHistory} from "react-router-dom"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history=useHistory();
    
    const login = async (event) => {
        event.preventDefault()
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            history.push("/")
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div>
            <LoginForm
                login={login}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    )
}

export default Login;