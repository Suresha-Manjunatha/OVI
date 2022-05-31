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
  NativeSelect,
  Paper,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import minilogo from "../../../public/images/Group 19035.png";
import { Close } from "@mui/icons-material";
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useRouter } from "next/router";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const EnterShirtSize = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    setValue(e.target.innerText);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/ShirtSize");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/YouthCouncilname">
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
            <p className={styles.logohead}>Tell us about you</p>
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
          <p className={styles.heading1}>Please enter shirt size</p>
          <p className={styles.msg} style={{ width: "345px" }}>
            We'd like to know your size for ordering swag (promotional
            products), like t-shirts and polos.
          </p>
          <form action="">
            <label htmlFor="name" className={styles.label}>
              Shirt size
            </label>
            <br />
            <NativeSelect
              id="name"
              className={styles.input}
              placeholder="Enter YouthCouncile Name"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XS">XS</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
              <option value="I have already received my shirt from OSI">
                I have already received my shirt from OSI
              </option>
              <option value="Other">Other</option>
            </NativeSelect>
          </form>
        </div>
        <Link href="/memberuserDesktop/onboarding/Profilepic">
          <p className={styles.skip}>Skip</p>
        </Link>
      </div>
    </div>
  );
};

export default EnterShirtSize;
