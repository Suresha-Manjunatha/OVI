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

const Ethnicity = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    e.preventDefault();
    setValue(e.target.innerText);
    router.push("/memberuserDesktop/onboarding/SelectGender");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/SelectRace">
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
          <p className={styles.heading1}>Please enter ethnicity</p>
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
                value ===
                "American Indian and Alaska Native alone, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              American Indian and Alaska Native alone, non-Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Asian alone, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Asian alone, non-Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Black or African American alone, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Black or African American alone, non-Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Hispanic" ? styles.ethnicityclick : styles.race
              }
              onClick={handleClick}
            >
              Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Multiracial, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Multiracial, non-Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value ===
                "Native Hawaiian and Other Pacific Islander alone, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Native Hawaiian and Other Pacific Islander alone, non-Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "Some Other Race alone, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              Some Other Race alone, non-Hispanic
            </p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p
              className={
                value === "White alone, non-Hispanic"
                  ? styles.ethnicityclick
                  : styles.race
              }
              onClick={handleClick}
            >
              White alone, non-Hispanic
            </p>
          </Paper>
        </div>
        <div className={styles.papercontainer}></div>
      </div>
    </div>
  );
};

export default Ethnicity;
