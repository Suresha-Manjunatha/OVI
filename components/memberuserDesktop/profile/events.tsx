import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import pic1 from "../../../public/images/pexels-hakan-hu-2480554.png";
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

const EventsProfile = () => {
  const router = useRouter();
  return (
    <div className={styles.search_events}>
      <Link href="/memberuserDesktop/onboarding/entername">
        <span className={styles.backbutton}>
          <ArrowBackIosIcon />
          <sup style={{ fontSize: "14px" }}>Back To Home</sup>
        </span>
      </Link>
      <div className={styles.event_container}>
        <h1 className={styles.heading}>Search Events</h1>
        <div className={styles.search_bar}>
          <Paper
            component="form"
            elevation={0}
            className={styles.search_bar_paper}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu">
              <SearchOutlinedIcon sx={{ opacity: "50%" }} />
            </IconButton>
            <InputBase
              sx={{ width: "390px" }}
              placeholder="Search by place, content"
              onFocus={(e) => (e.target.placeholder = "")}
              onBlur={(e) =>
                (e.target.placeholder = "Search by place, content")
              }
            />
          </Paper>

          <button className={styles.search_btn}>Search</button>
        </div>

        <div className={styles.events}>
          <h1 className={styles.event_headingEvent}>
            Your Upcoming Events
            <sup className={styles.event_heading}> _______</sup>
          </h1>
          <div className={styles.upcommingEvents}>
            <div className={styles.left}>
              <h1 className={styles.meet}>Meet & Learn</h1>

              <p className={styles.paraDescription}>
                Amet minim mollit non deserunt ullamco aliqua dolor do amet
                sint. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
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
              <button
                className={styles.detailsBtn}
                onClick={() =>
                  router.push("/memberuserDesktop/profile/eventview")
                }
              >
                VIEW DETAILS
              </button>
            </div>

            <div className={styles.right}>
              <Image src={pic1} />
            </div>
          </div>

          {/* select your nextevent */}
          <h1 className={styles.event_headingEvent}>
            select your next event
            <sup className={styles.event_heading}> _______</sup>
          </h1>
          <div className={styles.nextEvent}>
            <div className={styles.right}>
              <Image src={pic1} />
            </div>
            <div className={styles.left}>
              <h1 className={styles.meet}>Meet & Learn</h1>

              <p className={styles.paraDescription}>
                Amet minim mollit non deserunt ullamco aliqua dolor do amet
                sint. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
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
              <button
                className={styles.detailsBtn}
                onClick={() =>
                  router.push("/memberuserDesktop/profile/eventview")
                }
              >
                register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsProfile;
