import React, { useEffect, useState } from 'react';
import './MyEventsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { getEventById, getEvents, getTicketsByEventId } from '../../store/event'
import GlobalFooter from "../Footer"
import { useHistory, useParams, Redirect } from "react-router-dom";
import { Modal } from '../../context/Modal';
import TicketPageModal from '../TicketPageModal';

function MyEventsPage() {

    const sessionUser = useSelector(state => state.session.user);
    
    if(!sessionUser) return (
        <Redirect to="/login" />
    )

    return (
        <div>
            Welcome to My Event Page! {sessionUser.username}
            <div class="purchased_tickets">
                Purchased Tickets
            </div>
            <div class="bookmarked_events">
                Bookmarked Events
            </div>
        </div>
    );
}

export default MyEventsPage;