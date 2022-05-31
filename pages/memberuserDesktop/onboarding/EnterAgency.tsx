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

const EnterAgency = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    setValue(e.target.innerText);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/YouthCouncilname");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/Congrats">
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
            <p className={styles.logohead}>Tell us about you</p>
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
          <p className={styles.heading1}>Please enter your agency</p>
          <p className={styles.msg} style={{ width: "356px" }}>
            Select the agency or organization that oversees your foster care or
            independent living case.
          </p>

          <div className={styles.buttonhold}>
            <button className={styles.agency}>Select Agency</button>
            <div>or</div>
            <button className={styles.county}>Select County</button>
          </div>
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
              Lorem ipsum
            </p>
          </Paper>
        </div>
        <Link href="/memberuserDesktop/onboarding/YouthCouncilname">
          <p className={styles.skip}>Skip</p>
        </Link>
      </div>
    </div>
  );
};

export default EnterAgency;
