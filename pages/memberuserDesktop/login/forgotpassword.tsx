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
  email: string;
}

const ForgotPassword = () => {
  const [values, setValues] = React.useState<State>({
    email: "",
  });

  const navigate = useRouter();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(values);
    };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (values.email) {
      navigate.push({
        pathname: "/memberuserDesktop/login/emailsent",
        query: { value: values.email },
      });
    }
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
            <p className={styles.heading1} style={{ fontSize: "38px" }}>
              Forgot your Password
            </p>
            <Typography className={styles.subheading1}>
              Enter your email address, and we’ll send you an email with all the
              instructions.
            </Typography>
            <InputLabel sx={{ mt: 1, mb: 2, fontSize: "12px" }} htmlFor="email">
              Email Address
            </InputLabel>
            <TextField
              required
              id="email"
              onChange={handleChange("email")}
              variant="standard"
              fullWidth
            />
          </div>

          <Button
            variant="contained"
            className={styles.submitbutton}
            onClick={handleSubmit}
          >
            Send me instructions
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

export default ForgotPassword;
