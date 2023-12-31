import React, { useRef } from 'react'
import { auth } from './firebase';

import './SignupScreen.css'

function SignupScreen() {
   const emailRef=useRef(null);
   const passRef=useRef(null);



   const register=(e)=>{

    e.preventDefault();
    auth
       .createUserWithEmailAndPassword(
        emailRef.current.value,
        passRef.current.value
    ) .then((authUser )=>{
        console.log(authUser);
    }).catch(error=>{
        alert(error.message);
    }
    );

   }
   const signIn=(e)=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(
     emailRef.current.value,
     passRef.current.value
 ) .then((authUser )=>{
     console.log(authUser);
 }).catch(error=>{
     alert(error.message);
 }
 );

   }



  return (
    <div className='signupScreen'>
        <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email'/>
        <input  ref={passRef} placeholder='Password' type='password'/>
        <button type='submit'onClick={signIn}>Sign In</button>

        <h4>
            <span className='signupScreen__grey'> New to Netflix? </span>
             <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
            
            </h4>
        </form>


    </div>
  )
}

export default SignupScreen