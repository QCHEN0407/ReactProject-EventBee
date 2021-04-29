import React, { useEffect, useState } from 'react';
import './EventPage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEventById, getEvents, getTicketsByEventId } from '../../store/event'
import GlobalFooter from "../Footer"
import { useHistory, useParams } from "react-router-dom";
import { Modal } from '../../context/Modal';
import TicketPageModal from '../TicketPageModal';

function EventPage() {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state => state.event.currentEvent);
    const events = useSelector(state => state.event.events);
    const tickets = useSelector(state => state.event.tickets);
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        dispatch(getEventById(eventId));
        dispatch(getEvents());
        dispatch(getTicketsByEventId(eventId));
    }, [dispatch]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/d6e97cbe72.js";
        script.crossorigin="anonymous";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    const toEventPage = (id) => {
        dispatch(getEventById(id));
        history.push(`/event/${id}`);
    }

    const displayModalAndSetTicketState = () => {
        setShowModal(true);
        dispatch(getTicketsByEventId(eventId));
    }

    const LikeOrUnlike = () => {
        document.querySelector(".fas").classList.toggle("fa-color");
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


                    <button className="ticketbtn" style={{cursor: 'pointer'}} onClick={displayModalAndSetTicketState}>Tickets</button>
                    {
                        showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                            <TicketPageModal />
                        </Modal>
                    )}
                </div>

                <div className='eventDescription'>
                    <h1>About this Event</h1>
                    {event.description}
                </div>

                <i class="fas fa-heart fa-3x fa-color" onClick={LikeOrUnlike}></i>

            </div>
            <div className="scroll">

                    {
                        events?.map(e => { return (
                            <div key={e.id} style={{cursor: 'pointer'}} className="scroll_card" onClick={()=>{toEventPage(e.id)}} >
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
