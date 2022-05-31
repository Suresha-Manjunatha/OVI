import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import logo from "../../../public/images/logo.png";

const Notification = () => {
  return (
    <div className={styles.notification}>
      <h1 className={styles.heading}>234 Notifications</h1>
      {Array.from(Array(10)).map((item, idx) => {
        return (
          <div key={idx} className={styles.card}>
            <div className={styles.logo}>
              <Image src={logo} />
            </div>
            <div className={styles.content}>
              <h3>Imperila Agency</h3>
              <p>Notification body text description</p>
            </div>
            <button className={styles.view}>View</button>
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
