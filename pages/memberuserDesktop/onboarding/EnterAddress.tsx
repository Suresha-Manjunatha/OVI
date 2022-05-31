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

const EnterAddress = () => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const handleClick = (e: any) => {
    setValue(e.target.innerText);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/memberuserDesktop/onboarding/Employmentstatus");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className={styles.sidelogo}>
        <Image src={sidelogoimg} />
      </div>
      <div className={styles.rightcontainer}>
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "20%", marginTop: "20px" }}>
            <Link href="/memberuserDesktop/onboarding/EnterZipcode">
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
          <p className={styles.heading1}>Please confirm your address</p>
          <p className={styles.msg}>
            Use a mailing address that we can send you relevant information,
            educational materials, and other cool stuff.
          </p>
          <form action="">
            <div>
              <label htmlFor="street" className={styles.label}>
                Building no, Building
              </label>
              <br />
              <input
                className={styles.input}
                required
                id="street"
                type="text"
              />
            </div>
            <div style={{ marginTop: "40px" }}>
              <label htmlFor="city" className={styles.label}>
                Area/City
              </label>
              <br />
              <input className={styles.input} required id="city" type="text" />
            </div>
            <div style={{ marginTop: "40px" }}>
              <label htmlFor="state" className={styles.label}>
                State
              </label>
              <br />
              <input className={styles.input} required id="state" type="text" />
            </div>
            <div style={{ marginTop: "40px" }}>
              <label htmlFor="country" className={styles.label}>
                Country
              </label>
              <br />
              <input className={styles.input} required id="city" type="text" />
            </div>
            <div style={{ marginTop: "40px" }}>
              <label htmlFor="zip" className={styles.label}>
                ZIP Code
              </label>
              <br />
              <input className={styles.input} required id="zip" type="text" />
            </div>
          </form>
          <button className={styles.nextbutton} onClick={handleSubmit}>
            Confirm Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterAddress;
