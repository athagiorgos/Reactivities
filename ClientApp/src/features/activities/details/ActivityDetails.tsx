import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Grid, GridColumn } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSidebar from "./ActivityDetailedSidebar";
import ActivityDetailHeader from "./ActivityDetailHeader";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loadingInitial || !activity) return <LoadingComponent />;
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailedInfo activity={activity} />
        <ActivityDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <ActivityDetailedSidebar attendees={activity.attendees!}/>
      </GridColumn>
    </Grid>
  );
});
