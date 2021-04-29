import React, { useEffect } from 'react';
import './EventPage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEventById, getEvents } from '../../store/event'
import GlobalFooter from "../Footer"
import { useHistory, useParams } from "react-router-dom";

function EventPage() {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state => state.event.currentEvent);
    const events = useSelector(state => state.event.events);
    const history = useHistory();

    useEffect(() => {
        dispatch(getEventById(eventId));
        dispatch(getEvents())
    }, [dispatch]);

    const toEventPage = (id) => {
        dispatch(getEventById(id));
        history.push(`/event/${id}`);
    }

    if (!event) {
        return null;
    }

    return (
        <div>
            <div>
            <Navigation />
            </div>
            <img className='blur-img' src={event.event_img} alt=""/>
            <div className="eventDetail">
                <img className='eventImage' src={event.event_img} alt=""/>
                <div className="ticketArea">
                    <h1>
                        {event.title}
                    </h1>
                </div>
                <div className="buttonArea">
                    <button className="ticketbtn" style={{cursor: 'pointer'}} type="submit">Tickets</button>
                </div>

                <div className='eventDescription'>
                    <h1>About this Event</h1>
                    {event.description}
                </div>
            </div>
            <div className="scroll">

                    {
                        events?.map(e => { return (
                            <div style={{cursor: 'pointer'}} className="scroll_card" onClick={()=>{toEventPage(e.id)}} >
                                <img className='cardImg' src={e.event_img} />
                                <div className="cardTitle">
                                    {e.title}
                                </div>
                            </div>
                            )
                        })
                    }

            </div>
            <div>
            <GlobalFooter />

            </div>
        </div>
    );
}


export default EventPage;
