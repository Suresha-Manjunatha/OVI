import React from "react";
import sidelogoimg from "../../../public/images/sideimg.png";
import logo from "../../../public/images/logo.png";
import {
  Avatar,
  Grid,
  Typography,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Stack,
  FormHelperText,
  Button,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/memberuserDesktop/loginpages.module.scss";

interface State {
  newpassword: string;
  confirmpassword: string;
  shownewPassword: boolean;
  showconfirmPassword: boolean;
}

const EmailSent = () => {
  const email = useRouter().query.value as string;

  return (
    <div style={{ width: "100vw", display: "flex", height: "100vh" }}>
      <Link href="/memberuserDesktop/login/forgotpassword">
        <span className={styles.backbutton}>
          <ArrowBackIosIcon /> <sup style={{ fontSize: "14px" }}>Back</sup>
        </span>
      </Link>
      <div className={styles.leftcontent}>
        <div className={styles.mainlogo}>
          <div className={styles.mainlogo1}>
            <Avatar className={styles.logo}>
              <Image src={logo} />
            </Avatar>
            <Typography className={styles.ovi}>ONE VOICE IMPACT</Typography>
            <Typography className={styles.ovititle}>
              Powered By Selfless Love foundation
            </Typography>
          </div>
          <div className={styles.inputscontainer}>
            <p className={styles.heading1} style={{ fontSize: "38px" }}>
              Check your email
            </p>
            <span className={styles.subheading1}>
              We sent a password reset link to
              <b style={{ width: "10%", marginLeft: "10px" }}>{email}</b>
            </span>
            <p style={{ fontSize: "14px" }}>
              Didn’t receive the email?
              <Link href={""}>
                <a className={styles.linktext}>Click to resend</a>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.rightlogo}>
        <Image src={sidelogoimg} />
      </div>
    </div>
  );
};

export default EmailSent;
