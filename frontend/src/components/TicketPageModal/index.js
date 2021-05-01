import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Redirect } from "react-router-dom";
import './TicketPageModal.css';


function TicketPageModal() {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.event.tickets);
    const event = useSelector(state => state.event.currentEvent);
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (!sessionUser) {
            history.push('/login');
            return;
        }

        const elements = document.querySelectorAll(".selectQuantityButton");
        elements.forEach(e => {
            console.log(typeof Number(e.id));
            console.log(typeof sessionUser.id);
            console.log(typeof Number(e.value));
        })
        history.push('/');
        
    };

    return (
      <div className='ticketContainer'>
        <div className="leftTicketContainer">
          <div className='eventTitle'>
            {event.title}
          </div>

          <form className='ticketpagemodal_form' onSubmit={handleSubmit}>
            {tickets?.map(ticket => {return (
                <div className="ticketItem">
                  <div>
                    <div>{ticket.title}</div>
                    <div>${ticket.price}</div>
                    <div>{ticket.description}</div>
                  </div>
                  <select id={ticket.id} className="selectQuantityButton">
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
            )})}

            <button className="checkoutBtn" type="submit">Checkout</button>
          </form>


        </div>
        <div className="rightTicketContainer">
          <div className="ticket-img">
            <img className="actual-img" src={event.event_img} alt=""/>
          </div>
          <div className="shopCart"></div>
        </div>

      </div>
    );
}

export default TicketPageModal;
