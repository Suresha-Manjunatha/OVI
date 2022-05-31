import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import youtub from "../../../public/images/youtub.png";

import insta from "../../../public/images/insta.png";
import facebook from "../../../public/images/facebook.png";
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
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.upper}>
        <p className={styles.copy}>&#169; 2021, OVI</p>
        <div className={styles.right}>
          <div className={styles.icon}>
            <Image src={youtub} />
          </div>
          <div className={styles.icon}>
            <Image className={styles.icon} src={facebook} />
          </div>
          <div className={styles.icon}>
            <Image className={styles.icon} src={insta} />
          </div>
        </div>
      </div>

      <div className={styles.lower}>
        <p className={styles.text}>
          OVI uses cookies to personalize content and offer you a tailored
          experience.
        </p>
        <div className={styles.right}>
          <button className={styles.btn}>Accept all cookies</button>
          <button className={styles.upload}> &uarr;</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
