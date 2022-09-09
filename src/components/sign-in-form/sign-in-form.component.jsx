import { useState } from "react";

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import FormInput from "../form-input/form-input.component";

import './sign-in-form.styles.scss';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};


const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {email, password} = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
} 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();

    } catch(error) {

      switch(error.code) {
        case 'auth/wrong-password':
          alert('Wrong Password');
          break;
        case 'auth/user-not-found':
          alert('Account does not exist');
          break;
        default:
          console.log(error);
      }
    }

  }

  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <>
      <div className='sign-up-container'>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form>
          
          <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email}/>

          <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password}/>

          <div className="buttons-container">
            <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
            <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google Sign In</Button>

          </div>
          
        </form>
      </div>
    </>
  );
}

export default SignInForm;














/*import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;

*/
