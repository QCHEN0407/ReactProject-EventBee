import { csrfFetch } from './csrf';

const LOAD_BOOKMARKS = 'user/loadBookmarks';
const ADD_BOOKMARK = 'user/addBookmarks';
const DELETE_BOOKMARK = 'user/deleteBookmarks';

const loadBookmarks = (bookmarks) => {
    return {
        type: LOAD_BOOKMARKS,
        payload: bookmarks
    }
};

const addBookmarkAction = (bookmark) => {
    return {
        type: ADD_BOOKMARK,
        payload:bookmark
    }
};

const deleteBookmarkAction = (user_id, event_id) => {
    return {
        type: DELETE_BOOKMARK,
        payload:{user_id, event_id}
    }
};

export const addBookmark = (userId, eventId) => async dispatch => {
    const response = await csrfFetch(`/api/bookmarks/create`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id: userId, event_id: eventId})
    });

    if (response.ok) {
        const bookmark = await response.json();
        dispatch(addBookmarkAction(bookmark));
    }
}

export const deleteBookmark = (userId, eventId) => async dispatch => {
    const response = await csrfFetch(`/api/bookmarks/delete`, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id: userId, event_id: eventId})
    });

    if (response.ok) {
        const bookmark = await response.json();
        dispatch(deleteBookmarkAction(bookmark.user_id, bookmark.event_id));
    }
}

export const getBookmarksByUserId = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/bookmarkedEvents`);

    if (response.ok) {
        const bookmarks = await response.json();
        dispatch(loadBookmarks(bookmarks));
    }
}

const initialState = {bookmarks: []};

const userReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case LOAD_BOOKMARKS:
        newState = Object.assign({}, state);
        newState.bookmarks = action.payload;
        return newState;
      case ADD_BOOKMARK:
        newState = Object.assign({}, state);
        newState.bookmarks = [...state.bookmarks, action.payload];
        return newState;
      case DELETE_BOOKMARK:
        newState = Object.assign({}, state);
        newState.bookmarks = state.bookmarks.filter(bookmark => {
            return !((bookmark.user_id === action.payload.user_id) && (bookmark.event_id === action.payload.event_id))
        });
        return newState;
      default:
        return state;
    }
};

export default userReducer
