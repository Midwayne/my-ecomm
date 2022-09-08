import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const {displayName, email, password, confirmPassword} = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPassword(email,password);

    } catch(error) {

    }

  }

  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormFields({...formFields, [name]: value});
  };

  return (
    <>
      <div>
        <h1>Sign up with your email and password</h1>
        <form>
          <label>Display Name</label>
          <input type="text" required onChange={handleChange} name="displayName" value={displayName} />

          <label>Email</label>
          <input type="email" required onChange={handleChange} name="email" value={email}/>

          <label>Password</label>
          <input type="password" required onChange={handleChange} name="password" value={password}/>

          <label>Confirm Password</label>
          <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

          <button type="submit" onSubmit={handleSubmit}>Submit</button>

        </form>
      </div>
    </>
  );
}

export default SignUpForm;














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
