import React, { useEffect } from 'react';
import './HomePage.css';
import Navigation from "../Navigation";
import { useState} from 'react';
import { csrfFetch } from '../../store/csrf';

function HomePage({isLoaded}) {


const [events, setEvents] = useState([]);

 useEffect(()=>{
    async function fetchEvents() {
        const response = await csrfFetch('/api/events'); 
        const json = await response.json();
        setEvents(json);
        console.log(json);
        console.log(events);
        return () => console.log('unmounting...');
    }
    fetchEvents();
 }, [])


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
            <image className="homepageImg" src="../imgs/HomepagePic.png"></image>
        </div>

        <div className='popularEvents'>
            {
                events.map(e => {
                    <div className="card">
                        <img className='image' src={e.event_img} alt="picture" />
                        <div className="container">
                            {e.title}
                        </div>
                    </div>
                })
            }
            
        </div>
    </div>

 )
}



export default HomePage;
