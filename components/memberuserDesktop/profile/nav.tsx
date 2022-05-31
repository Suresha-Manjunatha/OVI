import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import logo from "../../../public/images/logo.png";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectNavigation,
  setNavigation,
} from "../../../features/counter/counterSlice";

const NavProfile = () => {
  const dispatch = useAppDispatch();
  const nav = useAppSelector(selectNavigation);

  return (
    <div className={styles.homecontainer}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Image src={logo} />
          </div>
        </div>

        <div className={styles.right}>
          <button
            className={nav === "events" ? styles.listclicked : styles.list}
            onClick={() => dispatch(setNavigation("events"))}
          >
            EVENTS
          </button>

          <button
            className={nav === "myreport" ? styles.listclicked : styles.list}
            onClick={() => dispatch(setNavigation("myreport"))}
          >
            My Report
          </button>

          <button
            className={nav === "profile" ? styles.listclicked : styles.list}
            onClick={() => dispatch(setNavigation("profile"))}
          >
            profile
          </button>
          <button
            className={
              nav !== "notification" ? styles.list : styles.listclicked
            }
            onClick={() => dispatch(setNavigation("notification"))}
          >
            NoTIFICATIONS
          </button>
          <button
            className={nav === "logout" ? styles.listclicked : styles.list}
            onClick={() => dispatch(setNavigation("logout"))}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
