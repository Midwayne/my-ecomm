import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'


const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        createUserDocumentFromAuth(response)
    } 

    return (
        <>
            <div>
                <button onClick={logGoogleUser}>Sign In with Google</button>
            </div>
        </>
    );
}

export default SignIn;