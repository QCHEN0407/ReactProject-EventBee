import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useHistory } from "react-router-dom";
import LoginFormPage from "../LoginFormPage";

function Navigation({ isLoaded }){
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  const toLogin = () => { 
    history.push('/login')
  }

  return (
    <div className='navbar'>
      <div className='nav_content'>
        <div className='navbar_left'>
          <h1>eventbee</h1>
          <img className='navbar_logo' src='/imgs/300.jpeg' alt=""/>
          <input className='navbar_search' type='search' laceholder="Search your Event" />
        </div>
        <div className='navbar_right'>
          <div className='navbar_btn'>
            <button className='navbar_btn_login'> Host an event </button>
            <button className='navbar_btn_login'> Help </button>
            <button className='navbar_btn_login' onClick={toLogin}> Log In </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
