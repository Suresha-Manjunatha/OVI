import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import pic1 from "../../../public/images/profile pic.png";

import picevent from "../../../public/images/Group 19169 (2).png";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import HomesearchEvents from "../home/searchEvents";
import RequestEvent from "../home/requestevent";
import ReportProfile from "./report";
import Footer from "../home/Footer";

const ProfileHome = () => {
  const router = useRouter();
  return (
    <div className={styles.signcontainer}>
      <div className={styles.profilecontainersign}>
        <div className={styles.profileview}>
          <div className={styles.left}>
            <Image src={pic1} />
          </div>
          <div className={styles.right}>
            <div className={styles.heading}>Event Name</div>
            <div className={styles.type}>Youth or young adult</div>

            <div style={{ display: "flex" }}>
              <div className={styles.eventatended}>
                <div className={styles.count}>11</div>
                <div className={styles.counttype}>Event Attended</div>
              </div>

              <div className={styles.eventatended}>
                <div className={styles.count}>11</div>
                <div className={styles.counttype}>Event Attended</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.italicheader}>
        You are invited for following Event
      </div>

      <div className={styles.invitedEvent}>
        <div className={styles.left}>
          <h1 className={styles.meet}>Meet & Learn</h1>

          <p className={styles.paraDescription}>
            Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>

          <div className={styles.table}>
            <div className={styles.tHead}>
              <p>Type</p>
              <p>Visibility</p>
            </div>
            <div className={styles.tContent}>
              <p>Online</p>
              <p>Public</p>
            </div>

            <div className={styles.tHead}>
              <p>Link</p>
              <p>Date</p>
            </div>
            <div className={styles.tContent}>
              <p>//fdkldkldklf</p>
              <p>02/02/2023</p>
            </div>

            <div className={styles.tHead}>
              <p>Free Gift</p>
              <p>Time</p>
            </div>
            <div className={styles.tContent}>
              <p>Free Tshirt</p>
              <p>9:00 am ~ 5:00 pm EST</p>
            </div>
          </div>
          <button className={styles.detailsBtn} onClick={() => router.push("")}>
            accept
          </button>
        </div>
        <div className={styles.right}>
          <Image src={picevent} />
        </div>
      </div>

      {/* //search evets0 */}

      <HomesearchEvents />
      <div style={{ height: "150px" }}></div>
      <RequestEvent />
      <div style={{ height: "100px" }}></div>

      <ReportProfile />
      <Footer />
    </div>
  );
};

export default ProfileHome;
