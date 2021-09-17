import React, {useEffect} from "react";
import {GridColumn} from "semantic-ui-react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";
import {useStore} from "../../app/stores/store";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default observer(function ProfilePage() {
    const {username} = useParams<{ username: string }>();
    const {profileStore} = useStore();
    const {loadingProfile, loadProfile, profile} = profileStore;

    useEffect(() => {
        loadProfile(username)
    }, [loadProfile, username])

    if (loadingProfile) return <LoadingComponent content='Loading profile ...'/>

    return (
        <GridColumn width={10}>
            {profile &&
            <>
                <ProfileHeader profile={profile}/>
                <ProfileContent profile={profile}/>
            </>}
        </GridColumn>
    )
})