import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom"
import FirebaseContext from '../context/firebase'

export default function Login(){
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, seteEmailAddress] = useState('');
    const [password, setePassword] = useState('');

    const [error, seteError] = useState('');
    const isInvalid = password === "" || emailAddress === "";

    const handleLogin = ()=>{};

    useEffect(()=>{
        document.title = "Logein - Instagram "
    },[])


    return(
    <p>I am the login page</p>
    )
}

