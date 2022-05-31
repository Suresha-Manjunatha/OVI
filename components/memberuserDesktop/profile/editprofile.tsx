import Image from "next/image";
import React from "react";
import styles from "../../../styles/memberuserDesktop/profile.module.scss";
import pic1 from "../../../public/images/pexels-hakan-hu-2480554.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Link from "next/link";
import { useRouter } from "next/router";
import { NativeSelect } from "@mui/material";

const EditUserProfile = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.profilecontainer}>
        <Link href="/memberuserDesktop/profile">
          <span className={styles.backbtn}>
            <ArrowBackIosIcon /> <sup>Back </sup>
          </span>
        </Link>

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

          <input className={styles.editinput} id="email" defaultValue="email" />

          <div className={styles.titles}>Phone</div>
          <input className={styles.editinput} id="phno" defaultValue="548415" />

          <div className={styles.titles}>Mailing Address</div>
          <input
            className={styles.editinput}
            id="mailaddress"
            defaultValue="email"
          />

          <div className={styles.titles}>CBC/Agency</div>
          <NativeSelect
            className={styles.nativeselect}
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>agency name</option>
            <option value={20}>superviser</option>
            <option value={30}>Select</option>
          </NativeSelect>
          <div className={styles.titles}>Youth Council Name</div>
          <input
            className={styles.editinput}
            id="councile"
            defaultValue="youth councile name"
          />

          <div className={styles.titles}>Shirt Size</div>
          <NativeSelect
            className={styles.nativeselect}
            id="name"
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

          <div className={styles.titles}>Date of Birth</div>
          <input
            className={styles.editinput}
            id="dob"
            defaultValue="ydob"
            type="date"
          />

          <div className={styles.titles}>Race</div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="">Select</option>
            <option value="American Indian or Alaska Native">
              American Indian or Alaska Native
            </option>
            <option value="Asian">Asian</option>
            <option value="Black or African American">
              Black or African American
            </option>
            <option value="Native Hawaiian or Other Pacific Islander">
              Native Hawaiian or Other Pacific Islander
            </option>
            <option value="White">White</option>
          </NativeSelect>

          <div className={styles.titles}>Ethnicity</div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="">Select</option>
            <option value="American Indian or Alaska Native">
              American Indian and Alaska Native alone, non-Hispanic
            </option>
            <option value="Asian">Asian</option>
            <option value="Asian alone, non-Hispanic">
              Asian alone, non-Hispanic
            </option>
            <option value="Black or African American alone, non-Hispanic">
              Black or African American alone, non-Hispanic
            </option>
            <option value="Hispanic">Hispanic</option>
            <option value="Multiracial, non-Hispanic">
              Multiracial, non-Hispanic
            </option>
            <option value="Native Hawaiian and Other Pacific Islander alone, non-Hispanic">
              Native Hawaiian and Other Pacific Islander alone, non-Hispanic
            </option>
            <option value="Some Other Race alone, non-Hispanic">
              Some Other Race alone, non-Hispanic
            </option>
            <option value="White alone, non-Hispanic">
              White alone, non-Hispanic
            </option>
          </NativeSelect>

          <div className={styles.titles}>Gender Identity</div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non binary">None Binary</option>
            <option value="Others">Others</option>
          </NativeSelect>

          <div className={styles.titles}>Group</div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non binary">None Binary</option>
            <option value="Others">Others</option>
          </NativeSelect>

          <div className={styles.titles}>Project</div>
          <input className={styles.editinput} id="dob" defaultValue="ydob" />

          <div className={styles.titles}>Role</div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Non binary">None Binary</option>
            <option value="Others">Others</option>
          </NativeSelect>

          <div className={styles.titles}>Joined on</div>
          <input
            className={styles.editinput}
            id="dob"
            defaultValue="ydob"
            type="date"
          />

          <div className={styles.titles}>ZIP Code</div>
          <input className={styles.editinput} id="dob" defaultValue="ydob" />

          <div className={styles.titles}>
            Are you employed (either part or full time)?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>
          <div className={styles.titles}>
            What is your highest education achieved?{" "}
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            className={styles.nativeselect}
          >
            <option value="PG">PG</option>
            <option value="UG">UG</option>
            <option value="Secondary">Secondary</option>
            <option value="Below Secondary">Bellow Secondary</option>
          </NativeSelect>

          <div className={styles.titles}>
            Do you have at least one adult in your life, other than the person
            assigned to your foster care or IL case, that you can go to for
            advice or emotional support?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <div className={styles.titles}>
            Have you been homeless at least once in the past two years?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>
          <div className={styles.titles}>
            In the past two years have you participated in an alcohol or drug
            abuse assessment/counseling?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <div className={styles.titles}>
            Have you ever been in a jail, prison, correctional facility, or
            juvenile or community detention facility at least once in the past
            two years?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <div className={styles.titles}>
            Have you given birth to a child OR I am a father to a child that has
            been born in the last two years?{" "}
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <div className={styles.titles}>
            Do you have a Medicaid plan or some other health insurance coverage?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <div className={styles.titles}>
            Do you feel confident in your abilities to live independently,
            without outside financial assistance?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <div className={styles.titles}>
            Are you participating in one of the following independent living
            programs: Extended Foster Care (EFC), Postsecondary Education
            Services and Support (PESS), or Aftercare Services?
          </div>
          <NativeSelect
            inputProps={{
              name: "age",
              id: "uncontrolled-native",
            }}
            placeholder="Select"
            className={styles.nativeselect}
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </NativeSelect>

          <button className={styles.editbtn} onClick={() => router.push("")}>
            Save
          </button>
          <button className={styles.cancelbtn} onClick={() => router.push("")}>
            cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EditUserProfile;
