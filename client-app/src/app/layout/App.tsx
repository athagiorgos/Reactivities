import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from '../models/activity';

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
    <div>
      <Header as='h2' icon='users' content='Reactivities' />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <List>
          {activities.map(activity => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
    </div>
  );
}

export default App;
