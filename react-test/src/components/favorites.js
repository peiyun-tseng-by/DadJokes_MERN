import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch} from 'react-redux';
import { addJoke } from '../actions/jokeActions';
//import Saved from './saved';


function Favorites(props) {
    
    const jokes = useSelector(state => state.joke)
    const dispatch = useDispatch();

/*     console.log(props);
    const tableRecord = [];
    props.stateInfo.forEach((state) => {
        const tr =(
        <tr>
          <th>{state.stateInfo}</th>
        </tr>);
        tableRecord.push(tr);
    }); */

    /* {props.text.map(jar => <h3>{jar.joker}</h3>)} */

/*       const [saved, setSaved] = useState ([
      {
          id: 0,
          joke:  "joke 1",
      },
      {   id: 1,
          joke: "joke 2",
      },
      {   id: 2,
          joke: "joke 3",
      }, 
  ]
)  */

/*    function addJokes(name) {
      setSaved([...saved, {id: name.idvalue, joke: name.joke}]);
  } */
    

    return (
        <div>
                {/*Displays the joke from api using properties from app.js*/}
           <h1>{props.text.joke}</h1> 

                {/*Refresh Button using function from app.js*/}
            <Button variant="outlined" onClick={() =>{props.getJoke()}}> More Jokes without Refresh!</Button> <br/> <br/>

                {/*When clicking this button, it will add the data to a list*/}
           <Button variant="outlined" onClick={() => { 
               if(!jokes.jokes.find(joke => joke.id === props.text.id)) {
               {dispatch(addJoke(props.text))}
               }
/*                 const name = props.text.joke;
                const id =  props.text.id;
                {props.addJoke(id, name)} */
            }}
            >What a Hit!</Button>

               {/*Button when clicked will pop up an alert*/}
            <Button variant="outlined" onClick={() => { alert("Add this to jokes I don't like") }}>Booooo!</Button>

               {/*Button when clicked will pop up an alert*/}
            <Button variant="outlined" onClick={() => { alert("Add this to jokes I don't understand") }}>Please Explain!</Button>
               
        </div>
    );
}
export default Favorites;
