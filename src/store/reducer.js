import { GET_FILM_LIST_FULFILLED } from './action';
import { initialState } from "./initialState";

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_FILM_LIST_FULFILLED: {
            return {
                ...state,
                filmList: action.films,
            };
        }
        default:
            return state;
    }
};
