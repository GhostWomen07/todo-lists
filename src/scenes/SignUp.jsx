import React, { useState } from 'react'
import SignUpForm from '../components/SignUpForm/index';
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import { useHistory } from "react-router-dom"

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            await createUserWithEmailAndPassword(getAuth(), email, password);
            history.push("/")
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div>
            <SignUpForm
                register={handleSignUp}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
        </div>
    )
}

export default SignUp;