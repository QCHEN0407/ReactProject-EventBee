import { csrfFetch } from './csrf';

const LOAD_EVENTS = 'event/loadEvents';

const loadEvents = (list) => {
    return {
      type: LOAD_EVENTS,
      payload: list,
    };
};

export const getEvents = () => async dispatch => {
    const response = await csrfFetch(`/api/events`);
  
    if (response.ok) {
      const list = await response.json();
      dispatch(loadEvents(list));
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
      default:
        return state;
    }
  };

  export default eventReducer;