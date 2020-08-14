import axios from 'axios';
import {GET_JOKES, ADD_JOKE, DELETE_JOKE, JOKES_LOADING} from './types';

export const getJokes = () => dispatch => {
/*     return {
        type: GET_JOKES
    }; */
    dispatch(setJokesLoading());
    axios
        .get('../api/jokes')
        .then(res => 
            dispatch({
                type: GET_JOKES,
                payload: res.data
            }))
};

export const deleteJoke = (id) => dispatch => {
/*     return {
        type: DELETE_JOKE,
        payload: id
    }; */
    axios
        .delete(`../api/jokes/${id}`)
        .then(res => dispatch({
            type: DELETE_JOKE,
            payload: id
        }))
}

export const addJoke = (joke) => dispatch =>{
/*     return {
        type: ADD_JOKE,
        payload: joke
    }; */
    axios
        .post('../api/jokes', joke)
        .then(res => dispatch({
            type: ADD_JOKE,
            payload: res.data
        }))
}

export const setJokesLoading = () => {
    return {
        type: JOKES_LOADING
    }
}