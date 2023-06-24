import React, { useEffect } from 'react'
import './App.css';
import HomeScreen from './Homescreen';
import Login from './Login';
import ProfileScreen from './ProfileScreen';
import {Route,Routes} from  'react-router-dom'
import { auth } from './firebase';
import {useDispatch, useSelector} from 'react-redux'; 
import {login, logout, selectUser } from './features/userSlice';



function App() {
  const user=useSelector(selectUser)
  const dispatch=useDispatch();

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //Log In
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      //  console.log(userAuth);
      }else{
        //Logged out 
        dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);
 



  return (
    <div className="App">
    <Routes>
        {!user ? (
          <Route path="/" element={<Login />} />
        ) : (
          <>
          <Route path="/" element={<HomeScreen />} />
          <Route path='/profile' element={<ProfileScreen/>}/>
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
