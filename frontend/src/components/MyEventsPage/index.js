import React, { useEffect, useState } from 'react';
import './MyEventsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import GlobalFooter from "../Footer"
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Modal } from '../../context/Modal';
import TicketPageModal from '../TicketPageModal';
import Navigation from "../Navigation";
import {toEventPage} from "../HomePage/index";
import { getBookmarksByUserId, deleteBookmark, addBookmark } from '../../store/user';
import { getPurchasesByUser } from '../../store/purchase';

function MyEventsPage() {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const bookmarkedEvents = useSelector(state => state.user.bookmarks);
    const purchases = useSelector(state => state.purchase.purchases);
    const history = useHistory();

    useEffect(() => {
        dispatch(getBookmarksByUserId(sessionUser));
        dispatch(getPurchasesByUser(sessionUser));
    }, [dispatch]);

    const toEventPage = (id) => {
        history.push(`/event/${id}`)
    }

    return (
        <div>
            <Navigation />
            Welcome to My Event Page! {sessionUser.username}
            <div class="purchased_tickets">
                Purchased Tickets
            </div>
            <div class="bookmarked_events">
                {
                    purchases?.map(e =>  { return (
                        <div style={{cursor: 'pointer'}} className="card" onClick={()=>{toEventPage(e.Ticket.Event.id)}}>
                            <img className='image' src={e.Ticket.Event.event_img} alt="picture" />
                            <div className="container">
                                {e.Ticket.Event.title}
                            </div>
                        </div>
                        )
                    })

                }
            </div>
            <div class="purchased_tickets">
                Bookmarked Events
            </div>
            <div class="bookmarked_events">
                {
                    bookmarkedEvents?.map(e =>  { return (
                        <div style={{cursor: 'pointer'}} className="card" onClick={()=>{toEventPage(e.Event.id)}}>
                            <img className='image' src={e.Event.event_img} alt="picture" />
                            <div className="container">
                                {e.Event.title}
                            </div>
                        </div>
                        )
                    })

                }
            </div>
            <GlobalFooter />
        </div>
    );
}

export default MyEventsPage;
