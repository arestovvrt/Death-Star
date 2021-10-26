import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import Home from './Components/Home';
import People from './Components/People';

function App() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPeople() {
            let res = await fetch('http https://swapi.dev/api/people/?format=json')
            let data = await res.json()
            setPeople(data.results);
            setLoading(false);
        }

        fetchPeople();
    }, [])
    return (
        <>
            <Router>
                <Navbar />
                <Container>
                    {loading ? (
                        <Dimmer active inverted>
                            <Loader inverted>Loading</Loader>
                        </Dimmer>
                    ) : (
                        <Switch>
                            <Route exact path='/'>
                                <Home />
                            </Route>
                            <Route exact path='/people'>
                                <People data={people}/>
                            </Route>
                        </Switch>
                    )}
                </Container>
            </Router>
        </>
    )
}

export default App;