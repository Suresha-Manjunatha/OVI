import { profile } from "console";
import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import RequestEvent from "../../../components/memberuserDesktop/home/requestevent";
import EventsProfile from "../../../components/memberuserDesktop/profile/events";
import NavProfile from "../../../components/memberuserDesktop/profile/nav";
import Notification from "../../../components/memberuserDesktop/profile/notification";
import UserProfile from "../../../components/memberuserDesktop/profile/profile";
import ProfileHome from "../../../components/memberuserDesktop/profile/profilehome";
import { selectNavigation } from "../../../features/counter/counterSlice";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";

const Profile = () => {
  const nav = useAppSelector(selectNavigation);
  return (
    <>
      <div className={styles.homecontainer}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <NavProfile />
        </div>
        {nav === "events" ? (
          <EventsProfile />
        ) : nav === "profile" ? (
          <UserProfile />
        ) : nav === "myreport" ? (
          <ProfileHome />
        ) : (
          <ProfileHome />
        )}
      </div>
      {nav === "notification" ? <Notification /> : null}
    </>
  );
};

export default Profile;
