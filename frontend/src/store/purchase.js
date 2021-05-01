import { csrfFetch } from './csrf';

const LOAD_PURCHASES = 'purchase/loadPurchases';

const loadPurchasesAction = (purchases) => {
    return {
        type: LOAD_PURCHASES,
        payload: purchases
    }
};

export const getPurchasesByUser = (user) => async dispatch => {

    const response = await csrfFetch(`/api/users/${user.id}/purchasedTickets`);

    if (response.ok) {
        const purchases = await response.json();
        dispatch(loadPurchasesAction(purchases));
    }
}

export const addPurchase = (user, ticketId, quantity) => async dispatch => {
    const response = await csrfFetch(`/api/purchases/create`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id: user.id, ticket_id: ticketId, quantity:quantity})
    });

    const response1 = await csrfFetch(`/api/users/${user.id}/purchasedTickets`);

    if (response1.ok) {
        const purchases = await response1.json();
        dispatch(loadPurchasesAction(purchases));
    }
}

const initialState = {purchases: []};

const purchaseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case LOAD_PURCHASES:
        newState = Object.assign({}, state);
        newState.purchases = action.payload;
        return newState;
      default:
        return state;
    }
};

export default purchaseReducer;
