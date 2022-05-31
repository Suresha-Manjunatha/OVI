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
  NativeSelect,
  Paper,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import minilogo from "../../../public/images/Group 19035.png";
import { Close } from "@mui/icons-material";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import uploadicon from "../../../public/images/uploadphoto.png";

const Profilepic = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    setValue(e.target.innerText);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/SelectEvent");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/ShirtSize">
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
          <p className={styles.heading1}>Please upload profile picture</p>
          <p className={styles.msg} style={{ width: "454px" }}>
            Give us your best shot! We'd like to see a headshot picture of you
            wearing an OVI shirt or something more business like.
          </p>
          <div className={styles.profilepic}>
            <div className={styles.preview}>
              {value ? <Image src={value} /> : "A"}
            </div>
            <div className={styles.icon}>
              <Image src={uploadicon} />
            </div>
          </div>
          <form action="">
            <input type="file" style={{ display: "none" }} />
          </form>
        </div>
        <button className={styles.nextbutton}>Next</button>
        <Link href="/memberuserDesktop/onboarding/SelectEvent">
          <p className={styles.skip}>Skip for now, I’ll do this later</p>
        </Link>
      </div>
    </div>
  );
};

export default Profilepic;
