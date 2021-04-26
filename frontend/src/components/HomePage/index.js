import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';
import Navigation from "../Navigation";

function HomePage({isLoaded}) {
 return(
    <div>
        <Navigation isLoaded={isLoaded}/>
        <div className='adsBanner'>
            <h1>The event for event creators is here</h1>
            <p>Introducing RECONVENE, a free, two-day virtual networking and skillsharing summit about the future of events. Register now to explore where the industry is heading — and where you’d like to take it.</p>
        </div>
        <div classname="bestOnline">
            <div className="greySquare"></div>
            <h1 className="orangeText">Discover the best</h1>
            <h1 className="blackText">online events</h1>
            <button className="getTicketsBtn" >Get tickets</button>

        </div>
    </div>

 )
}



export default HomePage;
