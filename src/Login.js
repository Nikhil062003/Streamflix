import React, { useState } from 'react'
import './Login.css';
import SignupScreen from './SignupScreen';
function Login() {
    const[signIn, SetSignIn]=useState(false);
  return (
    <div className='loginScreen'>
     <div className='loginScreen__background'>
        <img className='loginScreen__logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png' 
        alt='image'
        />
        <button onClick={()=>SetSignIn(true)} 
        className='loginScreen__button'>Sign In
        </button>
        <div className='loginScreen__gradient'></div>
       <div className='loginScreen__body'>
        {signIn? (
            <SignupScreen/> 
        ):(
            <>
            <h1>Unlimited films,TV Programmers and more.</h1>
             <h2>Watch anywhere. Cancel at any time.</h2>
             <h3>Ready to watch? Enter your email to create or restart your membership </h3>
             <div className='loginScreen__input'>
                 <form>
                     <input type='email' placeholder='Email Address'/>
                     <button className='loginScreen__getStarted'
                     onClick={()=>SetSignIn(true)}>
                      GET STARTED
                     </button>
                 </form>
             </div>
         </>
        )}
      
       </div>
     </div>
      </div>
  )
}

export default Login