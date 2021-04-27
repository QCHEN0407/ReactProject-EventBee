import React, { useEffect } from 'react';
import './HomePage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEvents } from '../../store/event' 

function HomePage({isLoaded}) {

    const dispatch = useDispatch();
    const events = useSelector(state => state.event.events);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

 return(
    <div>
        <Navigation isLoaded={isLoaded}/>
        <div className='adsBanner'>
            <h1>The event for event creators is here</h1>
            <p>Introducing RECONVENE, a free, two-day virtual networking and skillsharing summit about the future of events. Register now to explore where the industry is heading — and where you’d like to take it.</p>
        </div>
        <div className="bestOnline">
            <div className="greySquare"></div>
            <h1 className="orangeText">Discover the best</h1>
            <h1 className="blackText">online events</h1>
            <button className="getTicketsBtn" >Get tickets</button>
            <img className="homepageImg" src="../imgs/HomepagePic.png"></img>
        </div>

        <div className='popularEvents'>
            {
                events?.map(e =>  { return (
                    <div className="card">
                        <img className='image' src={e.event_img} alt="picture" />
                        <div className="container">
                            {e.title}
                        </div>
                    </div>
                    )
                })
            }

        </div>
    </div>

 )
}



export default HomePage;
