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
      <div className='ticketContainer'>
        <div className="leftTicketContainer">
          <div className='eventTitle'>
            {event.title}
          </div>
          <div className="ticketList">
            <form className='ticketpagemodal_form' onSubmit={handleSubmit}>
              {tickets?.map(ticket => {return (
                  <div className="ticketItem">
                    <div>
                      <div>{ticket.title}</div>
                      <div>${ticket.price}</div>
                      <div>{ticket.description}</div>
                    </div>
                    <button id={`button_ticket_${ticket.id}`} className="selectQuantityButton">
                        select quantity
                    </button>
                  </div>
              )})}

              <button className="checkoutBtn" type="submit">Checkout</button>
            </form>

          </div>
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
