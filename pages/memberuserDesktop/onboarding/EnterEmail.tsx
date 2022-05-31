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

const EnterEmail = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    setValue(e.target.innerText);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/EnterPhoneNumber");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/SelectGender2">
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
          <p className={styles.heading1}>Please enter email</p>
          <p className={styles.msg}>
            Use an email address that we can use to communicate important
            information so that you can stay plugged into resources and events.
          </p>
          <form action="">
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <br />
            <input className={styles.input} required id="email" type="email" />
          </form>
          <button className={styles.nextbutton} onClick={handleSubmit}>
            Next
          </button>
        </div>
        <div className={styles.papercontainer}></div>
      </div>
    </div>
  );
};

export default EnterEmail;
