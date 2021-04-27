import React, { useEffect } from 'react';
import './EventPage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEventById } from '../../store/event'
import GlobalFooter from "../Footer"
import { useHistory, useParams } from "react-router-dom";

function EventPage() {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state => state.event.currentEvent);
    
    useEffect(() => {
        dispatch(getEventById(eventId));
    }, [dispatch]);

    if (!event) {
        return null;
    }
    

    return (
        <div>
            <img className='eventImage' src={event.event_img} alt=""/>
            <div className='eventTitle'>
                {event.title}
            </div>
            <div className='eventDescription'>
                {event.description}
            </div>
        </div>
    ); 
}


export default EventPage;