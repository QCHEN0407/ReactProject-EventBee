import React, { useEffect } from 'react';
import './HomePage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEventById, getEvents } from '../../store/event'
import { useHistory } from "react-router-dom";

function HomePage({isLoaded}) {

    const dispatch = useDispatch();
    const events = useSelector(state => state.event.events);
    const history = useHistory();

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    const toEventPage = (id) => {
        history.push(`/event/${id}`)
    }

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
            <button style={{cursor: 'pointer'}} className="getTicketsBtn" >Get tickets</button>
            <img className="homepageImg" src="../imgs/HomepagePic.png"></img>
        <div className="secondNavbar">
            <div className="searchfield">
            <h1>Popular in</h1>
            <input className='second_search' type='search' placeholder="Online Events" />
            </div>
            <div className='tagMenu'>
                <button className='tagMenu_btn' style={{cursor: 'pointer'}}> All Events </button>
                <button className='tagMenu_btn' style={{cursor: 'pointer'}}> Free </button>
                <button className='tagMenu_btn' style={{cursor: 'pointer'}}> Food & Drinks </button>
                <button className='tagMenu_btn' style={{cursor: 'pointer'}}> Music </button>
                <button className='tagMenu_btn' style={{cursor: 'pointer'}}> Mother's Day </button>


            </div>

        </div>
        </div>

        <div className='popularEvents'>
            {
                events?.map(e =>  { return (
                    <div style={{cursor: 'pointer'}} className="card" onClick={()=>{toEventPage(e.id)}}>
                        <img className='image' src={e.event_img} alt="picture" />
                        <div className="container">
                            {e.title}
                        </div>
                    </div>
                    )
                })
            }

        </div>

        <footer className="homepageFooter"></footer>

    </div>

 )
}



export default HomePage;
