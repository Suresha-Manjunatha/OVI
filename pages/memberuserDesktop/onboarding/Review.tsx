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

const ReviewandSubmit = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");
  const [Qnum, setQnum] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/Congrats");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/QuestionsPage">
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
          <p className={styles.heading1}>Please review and submit</p>
          <p className={styles.msg} style={{ width: "597px" }}>
            Once submitted, you can always login at a later date and revise your
            responses. Please feel free to update your profile as you experience
            any changes. Thanks!.
          </p>

          {questions.map((item: any, idx: any) => {
            return (
              <div key={idx} className={styles.reviewcard}>
                <div style={{ display: "flex" }}>
                  <p className={styles.title}>{item.que}</p>
                  <div className={styles.edit}>
                    <Image src={editicon} />
                  </div>
                </div>

                <div className={styles.paper}>
                  <p className={styles.label}>yes</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.termscontain}>
          <input type="checkbox" />
          <p className={styles.terms}>
            By signing up you agree to OVI
            <Link href="">
              <span className={styles.linkto}>Terms of service</span>
            </Link>
            and
            <Link href="">
              <span className={styles.linkto}>Privacy policy.</span>
            </Link>
          </p>
        </div>
        <button className={styles.nextbutton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewandSubmit;
