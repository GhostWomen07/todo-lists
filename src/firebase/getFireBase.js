import { initializeApp } from "firebase/app";

export const setFireBase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBy7jKkMA8QHiQklXN4wzdVdPu3ZxZMThA",
        authDomain: "authentication-439b6.firebaseapp.com",
        projectId: "authentication-439b6",
        storageBucket: "authentication-439b6.appspot.com",
        messagingSenderId: "803169194468",
        appId: "1:803169194468:web:435b5c1364d986c116b7f1",
        measurementId: "G-9025FCVWHL"
    };
    initializeApp(firebaseConfig)
}
