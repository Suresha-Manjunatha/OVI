import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import logo from "../../../public/images/logo.png";
import HomesearchEvents from "../../../components/memberuserDesktop/home/searchEvents";
import RequestEvent from "../../../components/memberuserDesktop/home/requestevent";
import Stories from "../../../components/memberuserDesktop/home/Stories";
import Footer from "../../../components/memberuserDesktop/home/Footer";
import Firstlook from "../../../components/memberuserDesktop/home/Firstlook";
import Header from "../../../components/memberuserDesktop/home/Header";

const HomePage = () => {
  return (
    <div className={styles.homecontainer}>
      <Header />
      <Firstlook />
      <HomesearchEvents />

      <div style={{ height: "180px", background: "white" }}></div>

      <RequestEvent />

      <Stories />

      <Footer />
    </div>
  );
};

export default HomePage;
