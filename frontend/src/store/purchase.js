import { csrfFetch } from './csrf';

const LOAD_PURCHASES = 'purchase/loadPurchases';
const ADD_PURCHASE = 'purchase/addPurchase';

const loadPurchasesAction = (purchases) => {
    return {
        type: LOAD_PURCHASES,
        payload: purchases
    }
};

// const addPurchaseAction = (purchase) => {
//     return {
//         type: ADD_PURCHASE,
//         payload:purchase
//     }
// };

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

    if (response.ok) {
        getPurchasesByUser(user);
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
