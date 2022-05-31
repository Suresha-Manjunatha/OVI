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
  password: string;
  email: string;
  showPassword: boolean;
}

const Loginpage = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    email: "",
    showPassword: false,
  });
  const navigate = useRouter();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values);
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate.push("/myProfile");
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
          <p className={styles.welcomeheading}>Welcome to OVI</p>
          <Typography className={styles.subheading}>
            "Together we are building leaders.“
          </Typography>
          <div className={styles.inputscontainer}>
            <InputLabel sx={{ mt: 1, mb: 2, fontSize: "12px" }} htmlFor="email">
              Work email
            </InputLabel>
            <TextField
              required
              id="email"
              onChange={handleChange("email")}
              variant="standard"
              fullWidth
            />
            <InputLabel
              sx={{ mt: 4, mb: 2, fontSize: "12px" }}
              htmlFor="password"
            >
              Password
            </InputLabel>
            <Input
              id="password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              fullWidth
            />
            <div style={{ display: "flex" }}>
              <FormHelperText
                id="standard-weight-helper-text"
                sx={{ width: "70%" }}
              >
                Minimum 8 characters with at least 1 number
              </FormHelperText>
              <Link href="/memberuserDesktop/login/forgotpassword">
                <a className={styles.linktext}>Forgot Password?</a>
              </Link>
            </div>
          </div>

          <Button
            variant="contained"
            className={styles.submitbutton}
            onClick={handleSubmit}
          >
            Log in
          </Button>
          <Typography align="center" sx={{ fontSize: "14px" }}>
            By signing up you agree to OVI
            <Link href="">
              <a className={styles.linktext}>Terms of service</a>
            </Link>
            and
            <Link href="">
              <a className={styles.linktext}>Privacy policy.</a>
            </Link>
          </Typography>
          <Link href="/memberuserDesktop/login/signinByPhone">
            <a className={styles.button2}>
              Log in with
              <span className={styles.linktext}>Phone number</span>
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.rightlogo}>
        <Image src={sidelogoimg} layout={"fixed"} />
      </div>
    </div>
  );
};

export default Loginpage;
