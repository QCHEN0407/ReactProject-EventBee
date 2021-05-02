import { csrfFetch } from './csrf';

const LOAD_EVENTS = 'event/loadEvents';
const BROWSE_EVENT = 'event/browseEvent';
const GET_TICKETS = 'event/getTickets';
const FILTER_EVENTS = 'event/filterEvents';

const loadEvents = (list) => {
    return {
      type: LOAD_EVENTS,
      payload: list,
    };
};

const browseEvent = (event) => {
  return {
    type: BROWSE_EVENT,
    payload: event,
  };
}

const getTickets = (tickets) => {
  return {
    type: GET_TICKETS,
    payload:tickets
  }
}

const filterEventsAction = (events) => {
  return {
    type: FILTER_EVENTS,
    payload: events,
  };
}

export const getEvents = () => async dispatch => {
    const response = await csrfFetch(`/api/events`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(loadEvents(list));
    }
};

export const getEventById = (id) => async dispatch => {
  const response = await csrfFetch(`/api/events/${id}`);

  if (response.ok) {
    const event = await response.json();
    dispatch(browseEvent(event));
  }
};

export const getTicketsByEventId = (id) => async dispatch => {
  const response = await csrfFetch(`/api/events/${id}/tickets`);

  if (response.ok) {
    const tickets = await response.json();
    dispatch(getTickets(tickets));
  }
};


export const filterEventsByCategoryId = (categoryId) => async dispatch => {
  const response = await csrfFetch(`/api/events/category/${categoryId}`);

  if (response.ok) {
    const events = await response.json();
    dispatch(filterEventsAction(events));
  }
};


export const searchEvents = (searchString) => async dispatch => {
  const response = await csrfFetch(`/api/events/search/${searchString}`);

  if (response.ok) {
    const events = await response.json();
    dispatch(filterEventsAction(events));
  }
};

const initialState = { events: [] };

const eventReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case LOAD_EVENTS:
        newState = Object.assign({}, state);
        newState.events = action.payload;
        return newState;
      case BROWSE_EVENT:
        newState = Object.assign({}, state);
        newState.currentEvent = action.payload;
        return newState;
      case GET_TICKETS:
        newState = Object.assign({}, state);
        newState.tickets = action.payload;
        return newState;
      case FILTER_EVENTS:
        newState = Object.assign({}, state);
        newState.events = action.payload;
        return newState;
      default:
        return state;
    }
  };

  export default eventReducer;