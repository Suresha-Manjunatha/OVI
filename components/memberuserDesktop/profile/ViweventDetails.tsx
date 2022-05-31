import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import pic1 from "../../../public/images/pexels-hakan-hu-2480554.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";

const ViweventDetails = () => {
  return (
    <>
      <div className={styles.viewcontainer}>
        <Link href="/memberuserDesktop/profile">
          <span className={styles.backbtn}>
            <ArrowBackIosIcon /> <sup>Back to Home</sup>
          </span>
        </Link>

        <div className={styles.eventview}>
          <div className={styles.left}>
            <Image src={pic1} style={{ borderRadius: "10px" }} />
          </div>
          <div className={styles.right}>
            <div className={styles.heading}>Event Name</div>
            <div className={styles.date}>June 23, 2020</div>
            <p className={styles.paraDescription}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters. It is a long established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters.
            </p>

            <button className={styles.detailsBtn}>register</button>
          </div>
        </div>
      </div>
      <div className={styles.vieweventdetails}>
        <div className={styles.left}>
          <h4 className={styles.heading}>details of event</h4>
          <div className={styles.label}>Type</div>
          <div className={styles.ans}>Online</div>

          <div className={styles.label}>Visibility</div>
          <div className={styles.ans}>Public</div>

          <div className={styles.label}>Link</div>
          <div className={styles.ans}>link url</div>

          <div className={styles.label}>Date</div>
          <div className={styles.ans}>02/11/2022</div>

          <div className={styles.label}>Time</div>
          <div className={styles.ans}>9:00 am ~ 5:00 pm EST</div>

          <div className={styles.label}>Gift for Youth</div>
          <div className={styles.ans}>free Tshit</div>

          <div className={styles.label}>Project Owner</div>
          <div className={styles.ans}>Marvin McKinney</div>
        </div>
        <div className={styles.left}>
          <h4 className={styles.heading}>Participant restrictions</h4>
          <div className={styles.label}>Youth of Age</div>
          <div className={styles.ans}>14 to 16 Years</div>

          <div className={styles.label}>From</div>
          <div className={styles.ans}>New York County</div>
        </div>
      </div>
    </>
  );
};

export default ViweventDetails;
