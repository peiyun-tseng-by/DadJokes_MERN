import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { addJoke } from '../actions/jokeActions';
import TextField from '@material-ui/core/TextField';
/* import { v4 as uuidv4 } from 'uuid' */



function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

    root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function JokeModal() {

const jokes = useSelector(state => state.joke)
const dispatch = useDispatch();

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = useState(
      {name: ''}
  );

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
      setState({[e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
      e.preventDefault();
      const newJoke = {
/*         id: uuidv4(), */
        joke: state.name
      };
      
      // Add joke with addJoke
      dispatch(addJoke(newJoke));

      //Close modal
      handleClose();
  }


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add to Favorites</h2>
      <p id="simple-modal-description">
        ^.^
        </p>
        <form className={classes.root} noValidate autoComplete="off" onSubmit= {handleSubmit}>
            <TextField onChange={handleChange} name="name" size= "small" id="outlined-basic" label="Enter your Joke" variant="outlined" />
            <button type="submit">Submit</button>
        </form>
    </div>
  );


  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Your Own Joke!
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}