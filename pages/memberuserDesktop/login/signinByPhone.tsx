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

const SigninUsingPhoneNo = () => {
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
    navigate.push("/memberuserDesktop/login/enterOTP");
  };
  return (
    <div style={{ width: "100vw", display: "flex", height: "100vh" }}>
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
            <p className={styles.heading1}>Enter your mobile number</p>
            <Typography className={styles.subheading1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
            <InputLabel
              sx={{ mt: 1, mb: 2, fontSize: "12px" }}
              htmlFor="phoneNo"
            >
              Mobile Number
            </InputLabel>
            <TextField
              required
              id="phoneNo"
              onChange={handleChange("phoneNo")}
              variant="standard"
              type="number"
              fullWidth
            />
          </div>

          <Button
            variant="contained"
            className={styles.submitbutton}
            onClick={handleSubmit}
          >
            GEt OTP
          </Button>

          <Link href="/memberuserDesktop/login">
            <a className={styles.button2}>Cancel</a>
          </Link>
        </div>
      </div>

      <div className={styles.rightlogo}>
        <Image src={sidelogoimg} />
      </div>
    </div>
  );
};

export default SigninUsingPhoneNo;
