import {v4 as uuidv4} from 'uuid';
import {GET_JOKES, ADD_JOKE, DELETE_JOKE, JOKES_LOADING} from '../actions/types'

const initialState = {
    jokes: [],
    loading: false 
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_JOKES:
            return {
                ...state,
                jokes: action.payload,
                loading: false
            }
        case DELETE_JOKE:
            return {
               ...state,
               jokes: state.jokes.filter(joke => joke._id !== action.payload) 
            };

        case ADD_JOKE:
            return {
                ...state,
                jokes:
                    [action.payload, ...state.jokes]
                
            };

        case JOKES_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}