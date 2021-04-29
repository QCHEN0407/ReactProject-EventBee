import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './TicketPageModal.css';


function TicketPageModal() {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.event.tickets);
    const event = useSelector(state => state.event.currentEvent);

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    return (
      <div>
      <div className="eventTitle">Event Title</div>
      <div className="ticket_right">
        <img className="ticket-img" src={event.event_img} alt=""/>
        <div className="shopCart">Shop Cart</div>
      </div>
      <div className="ticketList">
        <form className='ticketpagemodal_form' onSubmit={handleSubmit}>
          {tickets?.map(ticket => {return (
              <div>
                  {ticket.title}
                  {ticket.price}
                  {ticket.description}
              </div>
          )})}
          <button type="submit">Checkout</button>
        </form>
      </div>
      </div>
    );
}

export default TicketPageModal;
