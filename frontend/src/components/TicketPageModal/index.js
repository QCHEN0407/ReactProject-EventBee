import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './TicketPageModal.css';

function TicketPageModal() {
    const dispatch = useDispatch();
    const tickets = useSelector(state => state.event.tickets);


    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    return (
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
    );
}

export default TicketPageModal;