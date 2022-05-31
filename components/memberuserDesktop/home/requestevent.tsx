import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import pic1 from "../../../public/images/Group 19231.png";
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

const RequestEvent = () => {
  return (
    <div className={styles.request_events}>
      <div className={styles.left}>
        <div className={styles.photo}>
          <Image
            src={pic1}
            width="597px"
            height="387px"
            layout={"responsive"}
          />
        </div>
      </div>
      <div className={styles.right_section}>
        <h1 className={styles.heading}>Request for Event </h1>
        <p className={styles.para}>
          Through a partnership with Children’s Harbor, Selfless Love Foundation
          formed Brown’s Harbor, a supportive housing community. Brown’s Harbor
          offers on-site staff, training, and support services for former foster
          youth ages 18-23, helping to bridge the gap from dependence to
          independence.
        </p>
        <button className={styles.btn1}>Join OVI network</button>
      </div>
    </div>
  );
};

export default RequestEvent;
