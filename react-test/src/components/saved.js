import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import {v4 as uuidv4} from 'uuid';
/* import { connect } from 'react-redux'; */
import { useSelector, useDispatch } from 'react-redux';
import { getJokes, deleteJoke } from '../actions/jokeActions';
import JokeModal from './jokeModal';
/* import PropTypes from 'prop-types'; */

function Saved () {

    const jokes = useSelector(state => state.joke);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJokes())
    }, []);

    console.log(jokes);
    return (
        <div>
             <h1>Hi! Here are your saved favorites!</h1>
{/*                 <button onClick={() => dispatch(getJokes())}>push</button> */}
                  
                    {/*displays each joke in a list*/}
                    {jokes.jokes.map((joke) => (
                    <div key = {joke._id}>
                        <Button onClick= {() => {
                        {dispatch(deleteJoke(joke._id))}
                        }}>x</Button>
                        {joke.joke}
                    </div>
                    ))}
                    <JokeModal/>

{/*                 {props.saved.map(({ id, joke }) => (
                    <h3 key = {id}>

                    <Button onClick={() => {
                        props.delete(id, joke)
                    }}
                    >x</Button>
                    {joke} </h3>
                ))} */}



{/*         <Button variant="outlined" onClick={() => {
            const name = prompt("Enter your joke")
            const id = uuidv4();
                if (name) {
                     props.addJoke(id, name);
                }
        }}>Add your own Favorite</Button> */}

        </div>
    ) 
}

/*  Saved.propTypes = {
    getJokes: PropTypes.func.isRequired,
    joke: PropTypes.object.isRequired
} */


/* const mapStateToProps = (state) => ({
    joke: state.joke
}); 

export default connect(mapStateToProps, { getJokes, deleteJokes }) (Saved); */

export default Saved;
