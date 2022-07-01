import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase-config';

const SignUp = () => {

  const [signupEmail, setsignupEmail] = useState<string>("");
  const [signupPassword, setsignupPassword] = useState<string>("");

  const signupWithEmail = async () => {
    await createUserWithEmailAndPassword(auth, signupEmail as string, signupPassword as string)
      .catch(function(error) {
        console.log(error.code); 
        console.log(error.message);
      });

  }

  return (
    <>
        <h1 className="title"> Sign up </h1>
        <input
          name="registerEmail"
          placeholder="Email..."
          onChange={(event) => {setsignupEmail(event.target.value)}}
        />
        <input
          type='password'
          name="registerPassword"
          placeholder="Password..."
          onChange={(event) => {setsignupPassword(event.target.value)}}
        />
        <button onClick={signupWithEmail}>Sign up with Email</button>
    </>
  )
}

export default SignUp