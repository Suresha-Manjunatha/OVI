import Image from "next/image";
import React, { useState } from "react";
import sidelogoimg from "../../../public/images/Group 19397.png";

import editicon from "../../../public/images/editicon.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import styles from "../../../styles/memberuserDesktop/onboarding.module.scss";
import { Radio } from "@mui/material";
import minilogo from "../../../public/images/Group 19035.png";
import { Close } from "@mui/icons-material";
import { useRouter } from "next/router";

import { questions } from "./questions";
import { width } from "@mui/system";

const Congrats = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");
  const [Qnum, setQnum] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/EnterAgency");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/review">
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
          <p className={styles.heading1}>Congrats! Your account is ready</p>
          <p className={styles.link}>
            This is your registration ID <span>james@ovi.com</span>
          </p>
          <div className={styles.continue}>
            <p className={styles.text}>Tell us a little more about you !</p>
            <button
              className={styles.nextbutton}
              style={{ marginTop: "0px" }}
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
        <Link href="">
          <p className={styles.gohome}>Go to home</p>
        </Link>
      </div>
    </div>
  );
};

export default Congrats;
