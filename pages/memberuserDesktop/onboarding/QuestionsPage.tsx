import Image from "next/image";
import React, { useState } from "react";
import sidelogoimg from "../../../public/images/Group 19397.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import styles from "../../../styles/memberuserDesktop/onboarding.module.scss";
import {
  Avatar,
  Button,
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

// import { questions } from "./questions";

const questions = [
  {
    que: "Do you have at least one adult in your life, other  than the person assigned to your foster care or  IL case, that you can go to for advice or emotional support?",
  },
  {
    que: "Have you been homeless at least once in the past two years?",
  },
  {
    que: "In the past two years have you participated in an  alcohol or drug abuse assessment/counseling?",
  },
  {
    que: "Have you ever been in a jail, prison, correctional facility, or juvenile or community detention facility at least once in the past two years?",
  },
  {
    que: "Have you given birth to a child OR I am a father to a  child that has been born in the last two years?",
  },
  {
    que: "Do you have a Medicaid plan or some other  health insurance coverage?",
  },
  {
    que: "Do you feel confident in your abilities to live    independently, without outside financial    assistance?",
  },
  {
    que: "Are you participating in one of the following  independent living programs: Extended Foster  Care (EFC), Postsecondary Education Services  and Support (PESS), or Aftercare Services?",
  },
];

const Questions = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");
  const [Qnum, setQnum] = useState(0);

  const handleClick = () => {
    if (Qnum < 7) {
      setQnum((prev: any) => prev + 1);
    }
    if (Qnum === 7) {
      router.push("/memberuserDesktop/onboarding/Review");
    }
  };
  const back = () => {
    if (Qnum > 0) {
      setQnum((prev: any) => prev - 1);
    } else {
      router.push("/memberuserDesktop/onboarding/Education");
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Button onClick={back}>
              <span className={styles.backbutton}>
                <ArrowBackIosIcon />
                <sup style={{ fontSize: "14px" }}>Back</sup>
              </span>
            </Button>
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
          <p className={styles.heading1} style={{ width: "700px" }}>
            {questions[Qnum].que}
          </p>
          <p className={styles.msg}>
            This information will help us when we evaluate the program.
          </p>
          <p className={styles.card} onClick={handleClick}>
            Yes
          </p>
          <p className={styles.card} onClick={handleSubmit}>
            No
          </p>
        </div>
        <div className={styles.papercontainer}></div>
      </div>
    </div>
  );
};

export default Questions;
