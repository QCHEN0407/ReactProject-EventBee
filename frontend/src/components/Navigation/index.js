import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { useHistory } from "react-router-dom";
import LoginFormPage from "../LoginFormPage";
import { searchEvents } from '../../store/event';
import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }){
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.event.events);

  const toLogin = () => {
    history.push('/login');
  }
  const toHomepage = () => {
    history.push('/');
  }

  const toMyEvents = () => {
    history.push('/myEvents');
  }

  const removeUser = () => {
    return dispatch(sessionActions.logout())
      .catch(async (res) => {
      });
  }

  const startSearch = () => {
    const searchbar = document.querySelector('.navbar_search')
    dispatch(searchEvents(searchbar.value));
    window.scroll({
      top:625,
      left:0,
      behavior: 'smooth'
  });
  }

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <button className='navbar_btn_login' onClick={toMyEvents} style={{cursor: 'pointer'}}> My Events </button>
        <button className='navbar_btn_login' style={{cursor: 'pointer'}} onClick={removeUser}> Log Out </button>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <button className='navbar_btn_login' style={{cursor: 'pointer'}}> Host an event </button>
        <button className='navbar_btn_login' style={{cursor: 'pointer'}}> Help </button>
        <button className='navbar_btn_login' style={{cursor: 'pointer'}} onClick={toLogin}> Log In </button>
      </>
    );
  }



  return (
    <div className='navbar'>
      <div className='nav_content'>
        <div className='navbar_left'>
          <h1 onClick={toHomepage} style={{cursor: 'pointer'}} >eventbee</h1>
          <img className='navbar_logo' src='/imgs/300.jpeg' alt=""/>
          <div className='search_bar'>
            <input className='navbar_search' type='search' placeholder="Search your event..." />
            <img className='amplifier' style={{cursor: 'pointer'}} onClick = {startSearch} src='../imgs/search3.png'></img>
          </div>

        </div>
        <div className='navbar_right'>
          <div className='navbar_btn'>
            {/* <button className='navbar_btn_login' style={{cursor: 'pointer'}}> Host an event </button>
            <button className='navbar_btn_login' style={{cursor: 'pointer'}}> Help </button> */}
            {/* <button className='navbar_btn_login' style={{cursor: 'pointer'}} onClick={toLogin}> Log In </button> */}
            {sessionLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
