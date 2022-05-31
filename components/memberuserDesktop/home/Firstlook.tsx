import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/landingpage.module.scss";
import pic1 from "../../../public/images/pexels-fauxels-3184398.png";

const Firstlook = () => {
  return (
    <div>
      <div className={styles.front}>
        <p className={styles.heading}>About Us</p>
        <p className={styles.description}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className={styles.buttons}>
          <button className={styles.joinbtn}>Join OVI network</button>
          <button className={styles.loginbtn}>Login</button>
        </div>
      </div>

      <div className={styles.join_ovi}>
        <div className={styles.pic_section}>
          <div className={styles.pic1}>
            <Image src={pic1} className={styles.pic1} />
          </div>

          <div className={styles.pic2}>
            <Image src={pic1} className={styles.pic2} />
          </div>
        </div>

        <div className={styles.content_section}>
          <h1 className={styles.heading}>Lorem Ipsum</h1>
          <p className={styles.para}>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries,
          </p>
          <button className={styles.btn1}>Join OVI network</button>
        </div>
      </div>
    </div>
  );
};

export default Firstlook;
