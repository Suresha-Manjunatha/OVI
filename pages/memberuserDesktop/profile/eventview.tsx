import React, { useState } from "react";
import { useAppSelector } from "../../../app/hooks";
import EventsProfile from "../../../components/memberuserDesktop/profile/events";
import NavProfile from "../../../components/memberuserDesktop/profile/nav";
import Notification from "../../../components/memberuserDesktop/profile/notification";
import { selectNavigation } from "../../../features/counter/counterSlice";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import ViweventDetails from "../../../components/memberuserDesktop/profile/ViweventDetails";

const Profile = () => {
  const nav = useAppSelector(selectNavigation);
  return (
    <>
      <div className={styles.homecontainer}>
        <div className={styles.header}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
          </div>
        </div>
      </div>

      {/* //event */}
      <ViweventDetails />
    </>
  );
};

export default Profile;
