import Image from "next/image";
import React from "react";
import sidelogoimg from "../../../public/images/Group 19397.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import styles from "../../../styles/memberuserDesktop/onboarding.module.scss";
import { Avatar, Paper } from "@mui/material";
import minilogo from "../../../public/images/Group 19035.png";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop">
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
          <p className={styles.heading}>Please choose your role</p>
        </div>
        <div className={styles.papercontainer}>
          <Paper
            elevation={4}
            className={styles.paper}
            onClick={() =>
              router.push("/memberuserDesktop/onboarding/entername")
            }
          >
            <p className={styles.papercontent}>Youth or Young Adult</p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p className={styles.papercontent}>Child Welfare Professional</p>
          </Paper>
          <Paper elevation={4} className={styles.paper}>
            <p className={styles.papercontent}>Supportive Adults</p>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Index;
