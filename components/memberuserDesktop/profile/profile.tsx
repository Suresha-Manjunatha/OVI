import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import pic1 from "../../../public/images/pexels-hakan-hu-2480554.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.profilecontainer}>
        <div className={styles.profileview}>
          <div className={styles.left}>
            <Image src={pic1} style={{ borderRadius: "10px" }} />
          </div>
          <div className={styles.right}>
            <div className={styles.heading}>Event Name</div>
            <div className={styles.type}>Youth or young adult</div>

            <div style={{ display: "flex" }}>
              <div className={styles.eventatended}>
                <div className={styles.count}>11</div>
                <div className={styles.counttype}>Event Attended</div>
              </div>

              <div className={styles.eventatended}>
                <div className={styles.count}>11</div>
                <div className={styles.counttype}>Event Attended</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.profiledetails}>
        <div className={styles.left}>
          <h4 className={styles.heading}>Profile Details</h4>

          <div className={styles.titles}>Email</div>
          <div className={styles.content}>Email of the admin@gamil.com</div>

          <div className={styles.titles}>Phone</div>
          <div className={styles.content}>9458416544</div>

          <div className={styles.titles}>Mailing Address</div>
          <div className={styles.content}>
            5433, Ontario Common, Fremont CA 94555
          </div>

          <div className={styles.titles}>County</div>
          <div className={styles.content}>Los Angeles County</div>

          <div className={styles.titles}>CBC/Agency</div>
          <div className={styles.content}>Agency name</div>

          <div className={styles.titles}>Youth Council Name</div>
          <div className={styles.content}>Youth Council Name</div>

          <div className={styles.titles}>Shirt Size</div>
          <div className={styles.content}>XL</div>

          <div className={styles.titles}>Date of Birth</div>
          <div className={styles.content}>06/06/1999</div>

          <div className={styles.titles}>Race</div>
          <div className={styles.content}>Asian</div>

          <div className={styles.titles}>Ethnicity</div>
          <div className={styles.content}>Asian</div>

          <div className={styles.titles}>Gender Identity</div>
          <div className={styles.content}>Male</div>

          <div className={styles.titles}>Group</div>
          <div className={styles.content}>Male Below 16</div>

          <div className={styles.titles}>Project</div>
          <div className={styles.content}>Project Name</div>

          <div className={styles.titles}>Role</div>
          <div className={styles.content}>Youth or Young adult</div>

          <div className={styles.titles}>Joined on</div>
          <div className={styles.content}>June 23, 2022</div>

          <div className={styles.titles}>ZIP Code</div>
          <div className={styles.content}>5146859</div>

          <div className={styles.titles}>
            Are you employed (either part or full time)?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            {" "}
            What is your highest education achieved?{" "}
          </div>
          <div className={styles.content}>12th grade—no diploma</div>

          <div className={styles.titles}>
            Do you have at least one adult in your life, other than the person
            assigned to your foster care or IL case, that you can go to for
            advice or emotional support?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            Have you been homeless at least once in the past two years?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            In the past two years have you participated in an alcohol or drug
            abuse assessment/counseling?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            Have you ever been in a jail, prison, correctional facility, or
            juvenile or community detention facility at least once in the past
            two years?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            Have you given birth to a child OR I am a father to a child that has
            been born in the last two years?{" "}
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            Do you have a Medicaid plan or some other health insurance coverage?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            Do you feel confident in your abilities to live independently,
            without outside financial assistance?
          </div>
          <div className={styles.content}>Yes</div>

          <div className={styles.titles}>
            Are you participating in one of the following independent living
            programs: Extended Foster Care (EFC), Postsecondary Education
            Services and Support (PESS), or Aftercare Services?
          </div>
          <div className={styles.content}>Yes</div>

          <button
            className={styles.editbtn}
            onClick={() => router.push("/memberuserDesktop/profile/edit")}
          >
            EDIT PROFILE
          </button>
        </div>

        {/*event tracker*/}

        <div className={styles.right}>
          <h4 className={styles.heading}>Events tracker</h4>
          <div className={styles.eventsort}>
            Invited <b>(5)</b>&nbsp; Accepted <b>(5)</b>&nbsp; Registered{" "}
            <b>(5)</b>&nbsp; Attended <b>(5)</b>&nbsp;
          </div>
          <div className={styles.eventslist}>
            <div className={styles.eventname}>
              OVI Dale Carnegie Training Class{" "}
            </div>
            <div className={styles.eventdate}>June 23,2022 . Fremont CA </div>
            <div className={styles.eventstatus}>Attended </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
