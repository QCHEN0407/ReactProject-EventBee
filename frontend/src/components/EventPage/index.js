import React, { useEffect, useState } from 'react';
import './EventPage.css';
import Navigation from "../Navigation";
import { useDispatch, useSelector } from 'react-redux';
import { getEventById, getEvents, getTicketsByEventId } from '../../store/event'
import GlobalFooter from "../Footer"
import { useHistory, useParams } from "react-router-dom";
import { Modal } from '../../context/Modal';
import TicketPageModal from '../TicketPageModal';
import { getBookmarksByUserId, deleteBookmark, addBookmark } from '../../store/user';

function EventPage() {
    const dispatch = useDispatch();
    const {eventId} = useParams();
    const event = useSelector(state => state.event.currentEvent);
    const events = useSelector(state => state.event.events);
    const tickets = useSelector(state => state.event.tickets);
    const bookmarks = useSelector(state => state.user.bookmarks);
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const [showModal, setShowModal] = useState(false);

    let likeButton;

    useEffect(() => {
        dispatch(getEventById(eventId));
        dispatch(getEvents());
        dispatch(getTicketsByEventId(eventId));
        dispatch(getBookmarksByUserId(sessionUser.id));
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
        window.scroll(0,0);
    }

    const displayModalAndSetTicketState = () => {
        setShowModal(true);
        dispatch(getTicketsByEventId(eventId));
    }

    const LikeOrUnlike = () => {
        if (bookmarks.map(e=>e.event_id).includes(Number(eventId))) {
            dispatch(deleteBookmark(sessionUser.id, Number(eventId)));
        } else {
            dispatch(addBookmark(sessionUser.id, Number(eventId)));
        }
        document.querySelector(".fas").classList.toggle("fa-color");
    }

    if (!event || !bookmarks) {
        return null;
    }

    if (bookmarks.map(e=>e.event_id).includes(Number(eventId))) {
       likeButton = (
        <>
            <i class="fas fa-heart fa-2x fa-color" onClick={LikeOrUnlike}></i>
        </>
        );
    } else {
        likeButton = (
        <>
            <i class="fas fa-heart fa-2x fa-color-default" onClick={LikeOrUnlike}></i>
        </>
        );
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
                    {likeButton}

                    <p className="heartMessage">Bookmark this Event</p>

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
