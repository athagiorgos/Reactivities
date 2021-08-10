import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
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
        </Grid>
    )
}