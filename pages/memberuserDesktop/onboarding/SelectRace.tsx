import Image from "next/image";
import React, { useState } from "react";
import sidelogoimg from "../../../public/images/Group 19397.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import styles from "../../../styles/memberuserDesktop/onboarding.module.scss";
import {
  Avatar,
  IconButton,
  Input,
  InputBase,
  Paper,
  Radio,
  TextField,
} from "@mui/material";
import minilogo from "../../../public/images/Group 19035.png";
import { Close } from "@mui/icons-material";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SelectRace = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    setValue(e.target.innerText);
    router.push("/memberuserDesktop/onboarding/Ethnicity");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/Dateofbirth">
              <span className={styles.backbutton}>
                <ArrowBackIosIcon />
                <sup style={{ fontSize: "14px" }}>Back</sup>
              </span>
            </Link>
          </div>
          <div className={styles.logocontain}>
            <p className={styles.logo}>
              <Image src={minilogo} />
            </p>
            <p className={styles.logohead}>Join OVI network</p>
          </div>
          <div className={styles.close}>
            <Close onClick={() => router.push("/memberuserDesktop")} />
          </div>
        </div>
        <div>
          {Array.from(Array(10)).map((item, idx) => {
            return <Radio key={idx} className={styles.radio} />;
          })}
        </div>
        <div className={styles.content}>
          <p className={styles.heading1}>Please enter race</p>
          <p className={styles.msg}>
            We would like to know how you would describe yourself using the
            options below. This will help us when we evaluate the program.
          </p>
          <form action="">
            <Paper className={styles.searchpaper} elevation={0}>
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <SearchOutlinedIcon sx={{ opacity: "50%" }} />
              </IconButton>
              <InputBase
                sx={{ width: "390px" }}
                placeholder="Search..."
                onFocus={(e) => (e.target.placeholder = "")}
                onBlur={(e) => (e.target.placeholder = "Search...")}
              />
            </Paper>
          </form>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Child Welfare Professional"
                  ? styles.raceclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Child Welfare Professional
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={value === "Asian" ? styles.raceclick : styles.race}
              onClick={handleClick}
            >
              Asian
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Black or African American"
                  ? styles.raceclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Black or African American
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Native Hawaiian or Other Pacific Islander"
                  ? styles.raceclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Native Hawaiian or Other Pacific Islander
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={value === "White" ? styles.raceclick : styles.race}
              onClick={handleClick}
            >
              White
            </p>
          </Paper>
        </div>
        <div className={styles.papercontainer}></div>
      </div>
    </div>
  );
};

export default SelectRace;
