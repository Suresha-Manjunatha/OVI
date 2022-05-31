import Image from "next/image";
import React from "react";
import sidelogoimg from "../../../public/images/sideimg.png";
import logo from "../../../public/images/logo.png";
import {
  Avatar,
  Typography,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Stack,
  TextField,
  FormHelperText,
  Button,
  Grid,
} from "@mui/material";
import styles from "../../../styles/memberuserDesktop/loginpages.module.scss";
import { useRouter } from "next/router";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";

interface State {
  phoneNo: string;
}

const EnterOTP = () => {
  const [values, setValues] = React.useState<State>({
    phoneNo: "",
  });
  const navigate = useRouter();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values);
    };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate.push("/myProfile");
  };
  return (
    <div style={{ width: "100%", display: "flex", height: "100vh" }}>
      <div className={styles.leftcontent}>
        <div className={styles.mainlogo}>
          <Avatar className={styles.logo}>
            <Image src={logo} />
          </Avatar>
          <Typography className={styles.ovi}>ONE VOICE IMPACT</Typography>
          <Typography className={styles.ovititle}>
            Powered By Selfless Love foundation
          </Typography>

          <div className={styles.inputscontainer}>
            <p className={styles.heading1} style={{ fontSize: "32px" }}>
              Enter code sent to your phone
            </p>
            <Typography className={styles.subheading1}>
              An OTP has been sent to +X XXX XXX 456, Please enter the 6-digit
              OTP
            </Typography>

            <form action="" style={{ display: "flex" }}>
              <input id="digit1" type="number" className={styles.otpinput1} />
              <input id="digit2" type="number" className={styles.otpinput} />
              <input id="digit3" type="number" className={styles.otpinput} />
              <input id="digit4" type="number" className={styles.otpinput} />
              <input id="digit5" type="number" className={styles.otpinput} />
              <input id="digit6" type="number" className={styles.otpinput} />
            </form>

            <Button
              variant="contained"
              className={styles.submitbutton}
              onClick={handleSubmit}
            >
              Log in
            </Button>
          </div>
          <p style={{ fontSize: "18px" }}>Haven’t received OTP yet? </p>
          <Link href="">
            <a className={styles.resend}>Resend OTP</a>
          </Link>
        </div>
      </div>

      <div className={styles.rightlogo}>
        <Image src={sidelogoimg} />
      </div>
    </div>
  );
};

export default EnterOTP;
