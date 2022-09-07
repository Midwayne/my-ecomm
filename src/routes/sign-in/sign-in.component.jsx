import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
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