import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {

  // return the value(current state) and a function to set the value again
  // using a type to useState function
  const[activities, setActivities] = useState<Activity[]>([]);


  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])


  return (
    <Fragment>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
       <ActivityDashboard activities={activities} />
      </Container>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
    </Fragment>
  );
}

export default App;
