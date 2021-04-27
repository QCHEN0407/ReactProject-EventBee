import { csrfFetch } from './csrf';

const LOAD_EVENTS = 'event/loadEvents';
const BROWSE_EVENT = 'event/browseEvent';

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
      default:
        return state;
    }
  };

  export default eventReducer;