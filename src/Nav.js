import React,{useState,useEffect} from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

function Nav() {
  const [show,handleshow]=useState(false);
  // const history=useHistory();
  useEffect(()=>{
    const a=window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        handleshow(true);
        }else handleshow(false);
});

 return()=>{
    window.removeEventListener("scroll",a);
 }
    },[]);




  return (
    <div className={`nav ${show && "nav__black"}`}>
      <Link to='/'>
        <img className='nav__logo' 
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png' 
        alt='netflix-Logo'/>

        </Link>
      <Link to='/profile'>
        <img
       
        className='nav__avatar'
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt='Netflix-avatar'
        />
        </Link>

    </div>
  )
}

export default Nav