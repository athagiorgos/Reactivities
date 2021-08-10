import React from 'react';
import { Grid, GridColumn } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

// This gives us type safety
// destructuring the properties that we pass down from the activity dashboard
interface Props {
    activities: Activity[];
}


export default function ActivityDashboard({activities}: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} />
            </Grid.Column>
            <GridColumn width='6'>
                {/* if the activity exists */}
                {activities[0] &&
                <ActivityDetails activity={activities[0]} />}
                <ActivityForm />
            </GridColumn>
        </Grid>
    )
}