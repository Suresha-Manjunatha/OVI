import React from "react";
import sidelogoimg from "../../../public/images/sideimg.png";
import logo from "../../../public/images/logo.png";
import { Avatar, Grid, Typography, Button, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../../styles/memberuserDesktop/loginpages.module.scss";

const LoginAgain = () => {
  const navigate = useRouter();
  return (
    <div style={{ width: "100vw", display: "flex", height: "100vh" }}>
      <Link href="/login/resetpassword">
        <span className={styles.backbutton}>
          <ArrowBackIosIcon /> <sup style={{ fontSize: "14px" }}>Back</sup>
        </span>
      </Link>
      <div className={styles.leftcontent}>
        <div className={styles.mainlogo}>
          <Avatar className={styles.logo}>
            <Image src={logo} />
          </Avatar>
          <Typography className={styles.ovi}>ONE VOICE IMPACT</Typography>
          <Typography className={styles.ovititle}>
            Powered By Selfless Love foundation
          </Typography>

          <div className={styles.inputscontainer}>
            <Typography
              className={styles.heading1}
              sx={{ fontSize: "38px", mb: 3 }}
            >
              Password reset
            </Typography>
            <Typography className={styles.subheading1}>
              Your password has been successfully reset. Click below to log in
              magically
            </Typography>

            <Button
              variant="contained"
              className={styles.submitbutton}
              onClick={() => navigate.push("/memberuserDesktop")}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.rightlogo}>
        <Image src={sidelogoimg} />
      </div>
    </div>
  );
};

export default LoginAgain;
