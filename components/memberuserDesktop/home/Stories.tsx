import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import pic1 from "../../../public/images/pexels-fauxels-3184398.png";
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

const Stories = () => {
  return (
    <div className={styles.storeis}>
      <h1 className={styles.heading}>Our Stories</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className={styles.card_container}>
        {Array.from(Array(3)).map((item, idx) => {
          return (
            <>
              <Card key={idx} className={styles.card} elevation={0}>
                <div className={styles.card_head}>
                  <Image
                    src={pic1}
                    layout={"responsive"}
                    width="343px"
                    height="210px"
                  />
                </div>

                <p className={styles.content}>
                  6 Strategies to Find Your Conference Keynote and Other
                  Speakers
                </p>

                <p className={styles.description}>
                  Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama
                  Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.
                </p>
                <p className={styles.date}>12 Mar - Jhon Doe</p>
              </Card>
            </>
          );
        })}
      </div>

      <button className={styles.jbtn}>Join OVI network</button>
    </div>
  );
};

export default Stories;
