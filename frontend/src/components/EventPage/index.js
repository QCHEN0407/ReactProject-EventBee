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
        dispatch(getBookmarksByUserId(sessionUser));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getBookmarksByUserId(sessionUser));
    }, [sessionUser]);

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

    useEffect(() => {
        const google_map_script = document.createElement('script');
        google_map_script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCs8UCbtHYbl_NDL842oH0jEiV_k3ATOCo";
        google_map_script.async = true;
        google_map_script.crossorigin="anonymous";
        window.document.body.appendChild(google_map_script);
        google_map_script.addEventListener('load', () => {
            const myLatLng = { lat: 40.730610, lng: -73.935242 };
            if(event && event.lat && event.long) {
                myLatLng.lat = Number(event.lat);
                myLatLng.lng = Number(event.long);
            }

            let map = new window.google.maps.Map(document.getElementById("map"), {
                center: myLatLng,
                zoom: 10,
                disableDefaultUI: true,
            });

            new window.google.maps.Marker({
                position:myLatLng,
                map,
                title: "Hello World!",
              });
        });
    }, [event])

    const toEventPage = (id) => {
        dispatch(getEventById(id));
        history.push(`/event/${id}`);
        window.scroll({
            top:0,
            left:0,
            behavior: 'smooth'
        });
    }

    const displayModalAndSetTicketState = () => {
        setShowModal(true);
        dispatch(getTicketsByEventId(eventId));
    }

    const LikeOrUnlike = () => {
        if (!sessionUser) {
            history.push('/login');
            return;
        }
        if (bookmarks.map(e=>e.event_id).includes(Number(eventId))) {
            dispatch(deleteBookmark(sessionUser.id, Number(eventId)));
        } else {
            dispatch(addBookmark(sessionUser, Number(eventId)));
        }
        document.querySelector(".fas").classList.toggle("fa-color");
    }

    const parseDateString = (dateString) => {
        const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        let newDate = new Date(dateString);
        console.log(newDate);
        return `${monthNames[newDate.getMonth()]} ${newDate.getDay()+1} ${newDate.getFullYear()}`
    }

    if (!event || !bookmarks) {
        return null;
    }

    if (bookmarks.map(e=>e.event_id).includes(Number(eventId))) {
       likeButton = (
        <>
            <i className="fas fa-heart fa-2x fa-color" onClick={LikeOrUnlike}></i>
        </>
        );
    } else {
        likeButton = (
        <>
            <i className="fas fa-heart fa-2x fa-color-default" onClick={LikeOrUnlike}></i>
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
                        <div className="ticketArea_date">{parseDateString(event.event_date)}</div>
                        <div className="ticketArea_title">{event.title}</div>
                        <div id="map" className="google_map"></div>
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
