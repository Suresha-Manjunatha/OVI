import React from "react";
import sidelogoimg from "../../../public/images/sideimg.png";
import logo from "../../../public/images/logo.png";
import {
  Avatar,
  Grid,
  Typography,
  Input,
  InputLabel,
  InputAdornment,
  IconButton,
  Stack,
  FormHelperText,
  Button,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/memberuserDesktop/loginpages.module.scss";

interface State {
  newpassword: string;
  confirmpassword: string;
  shownewPassword: boolean;
  showconfirmPassword: boolean;
}

const ResetPassword = () => {
  const [values, setValues] = React.useState<State>({
    newpassword: "",
    confirmpassword: "",
    shownewPassword: false,
    showconfirmPassword: false,
  });

  const navigate = useRouter();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values);
    };

  const handleClickShownewPassword = () => {
    setValues({
      ...values,
      shownewPassword: !values.shownewPassword,
    });
  };

  const handleClickShowconfirmPassword = () => {
    setValues({
      ...values,
      showconfirmPassword: !values.showconfirmPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      values.newpassword === values.confirmpassword &&
      values.confirmpassword !== ""
    ) {
      navigate.push("/memberuserDesktop/login/loginagain");
    }
  };

  return (
    <div style={{ width: "100vw", display: "flex", height: "100vh" }}>
      <Link href="/login/forgotpassword">
        <span className={styles.backbutton}>
          <ArrowBackIosIcon /> <sup style={{ fontSize: "14px" }}>Back</sup>
        </span>
      </Link>
      <div className={styles.leftcontent} style={{ marginTop: "140px" }}>
        <div className={styles.mainlogo}>
          <Avatar className={styles.logo}>
            <Image src={logo} />
          </Avatar>
          <Typography className={styles.ovi}>ONE VOICE IMPACT</Typography>
          <Typography className={styles.ovititle}>
            Powered By Selfless Love foundation
          </Typography>

          <div className={styles.inputscontainer}>
            <Typography
              className={styles.heading1}
              sx={{ fontSize: "38px", mb: 3 }}
            >
              Set new password
            </Typography>
            <Typography className={styles.subheading1}>
              Your new password must be different from previous used passwords.
            </Typography>

            <InputLabel
              sx={{ mt: "40px", mb: 2, fontSize: "12px" }}
              htmlFor="newpassword"
            >
              Password
            </InputLabel>
            <Input
              id="newpassword"
              type={values.shownewPassword ? "text" : "password"}
              value={values.newpassword}
              onChange={handleChange("newpassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShownewPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.shownewPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="standard-weight-helper-text">
              Minimum 8 characters with at least 1 number
            </FormHelperText>

            <InputLabel
              sx={{ mt: 5, mb: 2, fontSize: "12px" }}
              htmlFor="confirmpassword"
            >
              Password
            </InputLabel>
            <Input
              id="confirmpassword"
              type={values.showconfirmPassword ? "text" : "password"}
              value={values.confirmpassword}
              onChange={handleChange("confirmpassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowconfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showconfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="standard-weight-helper-text">
              Both password must match.
            </FormHelperText>
          </div>

          <Button
            variant="contained"
            className={styles.submitbutton}
            onClick={handleSubmit}
          >
            Reset Password
          </Button>

          <Link href="/login">
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

export default ResetPassword;
