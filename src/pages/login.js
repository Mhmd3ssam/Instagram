import { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom"
//import FirebaseContext from '../context/firebase'
import * as ROUTES from './../constants/routes';
import  {firebase , FieldValue} from '../lib/firebase'

export default function Login(){
    const history = useHistory();
    //const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');
    const isInvalid = password === "" || emailAddress === "";

    const handleLogin = async (event) => {
        event.preventDefault();
    
        try {
          await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
          history.push(ROUTES.DASHBOARD);
        } catch (error) {
          setEmailAddress('');
          setPassword('');
          setError(error.message);
        }
      };
    

    useEffect(()=>{
        document.title = "Logein - Instagram "
        
    },[])


    return(
        <div className="container 
        flex 
        mx-auto 
        mx-w-screen-md 
        items-center 
        h-screen ">
            <div className="flex w-3/5">
                <img src="/images/iphone-with-profile.jpg" alt="iphone with Instgram" />
            </div>

            <div className="flex flex-col w-2/5 ">

                <div className="flex flex-col bg-white p-4 border border-gray-primary mb-4 rounded">
                
                    <h1 className="flex justify-center w-full">
                        <img src="images/logo.png" alt="Instgram" className="mt-2 w-6/12" />
                    </h1>

                    {error && <p className="mb04 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleLogin} method="POST">
                            <input 
                                type="text" 
                                aria-label="Enter your email address"
                                placeholder="Email address"
                                className="text-sm
                                text-gray-base
                                w-full
                                mr-3
                                py-5
                                px-4
                                h-2
                                border
                                border-gray-primary
                                rounded
                                mb-2"
                                onChange={({target})=> setEmailAddress(target.value)} 
                                
                            />

                            <input 
                                type="password" 
                                aria-label="Enter your email password"
                                placeholder="Password"
                                className="text-sm
                                text-gray-base
                                w-full
                                mr-3
                                py-5
                                px-4
                                h-2
                                border
                                border-gray-primary
                                rounded
                                mb-2"
                                onChange={({target})=> setPassword(target.value)} 
                            />

                            <button
                                disabled={isInvalid}
                                type="submit"
                                className={`
                                bg-blue-medium
                                text-white
                                rounded
                                h-8
                                font-Bold
                                w-full
                                ${isInvalid && `opacity-50` }
                            `}>
                                Log In

                            </button>
                        </form>

                    </div>  

                    <div 
                        className="flex
                        justify-cente
                        items-center
                        flex-col
                        w-full
                        bg-white
                        p-4
                        border  
                        border-gray-primary
                        rounded"
                    >

                        <p className="text-sm">Don't have an account? {``} 
                            <Link to="/signup" className="font-bold text-blue-medium">
                                Sign up
                            </Link>
                        </p>

                    </div>
            </div>
        </div>
    )
}


