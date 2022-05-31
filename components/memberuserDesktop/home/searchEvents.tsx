import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import pic1 from "../../../public/images/pexels-fauxels-3184398.png";
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

const HomesearchEvents = () => {
  return (
    <div className={styles.search_events}>
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
            onBlur={(e) => (e.target.placeholder = "Search by place, content")}
          />
        </Paper>

        <button className={styles.search_btn}>Search</button>
      </div>

      <div className={styles.events}>
        <p className={styles.event_count}>12</p>
        <h1 className={styles.event_heading}>
          Upcoming Events <sup>_______</sup>
        </h1>
        <div className={styles.card_container}>
          {Array.from(Array(6)).map((item, idx) => {
            return (
              <>
                <Card key={idx} className={styles.card}>
                  <div className={styles.card_head}>
                    <Image
                      src={pic1}
                      layout={"responsive"}
                      width="319px"
                      height="240px"
                    />
                  </div>

                  <div className={styles.card_content}>
                    <div className={styles.date}>
                      <p className={styles.month}>month</p>
                      <p className={styles.day}>30</p>
                    </div>

                    <div className={styles.foot_content}>
                      <p className={styles.content}>
                        Wonder Girls 2010 Wonder Girls World Tour San Francisco
                      </p>

                      <p className={styles.description}>
                        Directly seated and inside for you to enjoy the show.
                      </p>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </div>
      <button className={styles.load_btn}>Load More</button>
    </div>
  );
};

export default HomesearchEvents;
