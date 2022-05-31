import Image from "next/image";
import React, { useState } from "react";
import sidelogoimg from "../../../public/images/Group 19397.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import styles from "../../../styles/memberuserDesktop/onboarding.module.scss";
import {
  Avatar,
  IconButton,
  Input,
  InputBase,
  Paper,
  Radio,
  TextField,
} from "@mui/material";
import minilogo from "../../../public/images/Group 19035.png";
import { Close } from "@mui/icons-material";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { questions } from "./questions";

const Educationstatus = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/QuestionsPage");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/Employmentstatus">
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
          <p
            className={styles.heading1}
            style={{ width: "460px", height: "82px" }}
          >
            What is your highest education achived?
          </p>
          <p className={styles.msg}>
            This information will help us when we evaluate the program.
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Grades 1 through 11
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            12th grade—no diploma
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Regular high school diploma
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            GED or alternative credential
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Some college credit, but less than 1 year of college
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            1 or more years of college credit, no degree
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Associates degree (for example: AA, AS)
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Bachelor’s degree (for example: BA. BS)
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Master’s degree (for example: MA, MS, MEng, MEd, MSW, MBA)
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Professional degree beyond bachelor’s degree (for example: MD, DDS,
            DVM, LLB, JD)
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            Doctorate degree (for example, PhD, EdD)
          </p>
        </div>
        <div className={styles.papercontainer}></div>
      </div>
    </div>
  );
};

export default Educationstatus;
