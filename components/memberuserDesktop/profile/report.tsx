import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import pic1 from "../../../public/images/pexels-hakan-hu-2480554.png";
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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import { BarGraphProfile } from "./Bargraph";
import Footer from "../home/Footer";

const ReportProfile = () => {
  const router = useRouter();
  return (
    <div className={styles.report}>
      <div className={styles.left}>
        <div className={styles.card}>
          <div className={styles.cardhead}>
            Your Report<sup>______</sup>
          </div>
          <div className={styles.cardcontent}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.des}>
          <div className={styles.deshead}>Event Attended (43)</div>
          <div className={styles.desvalue}>
            <span></span>No of events attended
          </div>
        </div>
        <div className={styles.graph}>
          <BarGraphProfile />
        </div>
      </div>
    </div>
  );
};

export default ReportProfile;
