import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import logo from "../../../public/images/logo.png";

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

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Image src={logo} />
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.list}>EVENTS</button>

        <button className={styles.list}>OVI Reports</button>

        <button className={styles.list}>Login</button>

        <button className={styles.signup}>Signup</button>
      </div>
    </div>
  );
};

export default Header;
