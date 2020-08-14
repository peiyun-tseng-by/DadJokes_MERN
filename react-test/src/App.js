import React, { useState, useEffect } from 'react';
//import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Favorites from './components/favorites';
import Hello from './components/hello';
import Welcome from './components/welcome';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import NavBar from './components/navBar';
import Saved from './components/saved';
import { Provider } from 'react-redux';
import store from './store';



//const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;


function App() {

    const [jokes, setJokes] = useState([
    ]);


/*     const [saved, setSaved] = useState ([
        {
            id: "0",
            joke:  "joke 1",
        },
        {   id: "1",
            joke: "joke 2",
        },
        {   id: "2",
            joke: "joke 3",
        }, 
    ]);  */

/*     const addJokes = (id, joke) => {
        if(!saved.find(joke => joke.id === id)){
        setSaved([...saved, {id: id, joke: joke}]);
        }
    } */

    /*          saved.push({id: id, joke: joke});
        setSaved(saved); */

/*     const deleteJokes = (id) => {
        setSaved(saved.filter(saved => saved.id !== id))
    } */

          /*    _.pullAllWith(saved, [{id: id, joke: joke}], _.isEqual);
        console.log('delete joke --- ', saved) 
        setSaved(saved); */


/*     const deleteAllJokes = () => {
        setSaved([]);
    } */

    const fetchJokes = async () => {
        const jokes = await axios.get('https://icanhazdadjoke.com', {
            headers: {
                'Accept' : 'application/json'
            }});
        setJokes(jokes.data);
    }


    //const [joke, setJoke] = useState(false);
    //const [stateInfo, setStateInfo] = useState(false);
    //Get request for Covid data in a day
    // axios.get('https://covidtracking.com/api/v1/states/current.json').then((res) => {
    //     console.log(res.data);
    //     setStateInfo(res.data);
    // });
/*     useEffect(() => {
        axios.get('https://covidtracking.com/api/v1/states/current.json').then((res) => {
            console.log(res.data);
            setStateInfo(res.data);
        });
    }, []); */

    //GET Dad Joke 

    useEffect(() => {
/*     axios.get('https://icanhazdadjoke.com', {
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then((res) => {
        setJokes(res.data);
    }); */
        fetchJokes();
    }, []);

    return (
        <Provider store={store}>
        <Router>
            <Container>
                <div className='App'>
                    <NavBar />
                    <Container maxWidth="sm">
{/*                                  <Saved 
                                    save = {saved}
                                    delete = {deleteJokes}/>

                                    <button onClick={()=>{deleteAllJokes()}}>Delete All</button>
 */}
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/home" />
                            </Route>

                            <Route exact path="/home">
                                <Favorites 
                                    text = {jokes} 
                                    getJoke={fetchJokes} 
                                    /* addJoke={addJokes} */
                                    />
                            </Route>

                            <Route exact path="/favorites">
                                <Saved 
                                    /* save = {saved} */
                                    /* delete = {deleteJokes} */
                                    /* addJoke = {addJokes} */
                                    />
                            </Route>

                            <Route path="/dislike">
                                <Hello />
                            </Route>

                            <Route path="/confused">
                                <Welcome />
                            </Route>
                        </Switch>

                    </Container>
                </div>
            </Container>
        </Router>
        </Provider>
    
    );
}

export default App;
