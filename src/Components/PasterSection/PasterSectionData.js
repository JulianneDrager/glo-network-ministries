import { Image } from "react-bootstrap";
import PasterImg from "../../Assets/profile.png";

const PasterSectionData = [
  {
    id: 1,
    pasterInfo: (
      <div>
        <h1>ABOUT PASTOR TERESA J. BRYANT </h1>
        <Image
          src={PasterImg}
          style={{ width: "100%", height: "auto" }}
          alt="Paster Teresa Bryant"
        />
        <p>
          Dr. Teresa Jeanette Bryant is a prominent author, empowerment speaker,
          and award-winning life and career coach. She serves as the Chairwoman
          of the Islip Town Women’s NAACP, CEO of Global Leaders Outreach
          Network, and Executive Editor of Seasons Lifestyle Magazine. A former
          nurse and graduate of Central Islip High School, she has been married
          for over 38 years and is a mother and grandmother. Dr. Bryant’s early
          career included roles at Stonybrook University Hospital, where she was
          recognized for her leadership as a Patient Care Coordinator and Charge
          Nurse.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    pasterInfo: (
      <p>
        She later transitioned to local schools, serving as a nurse and
        community advocate, creating programs to celebrate diversity and
        supporting various community initiatives. As a community leader, Dr.
        Bryant was instrumental in several firsts, including initiating the
        Black History Program and Breast Cancer Awareness Campaigns in local
        schools, and serving as the first Chairwoman of the NAACP Islip Town
        Branch (WIN) Committee.{" "}
        <hr style={{ margin: ".4rem", border: "none" }} />
        She also played a key role in the revitalization of local areas and
        created a scholarship fund through the Rotary Club International. Dr.
        Bryant’s international ministry work includes building schools and
        medical facilities in Haiti and Ghana, and ministering in various
        countries. She also oversees community outreach programs through her
        church and supports local initiatives like the Islip Town NAACP Back to
        School event and Women of Influence Awards. Dr. Bryant’s educational
        achievements include degrees in Nursing, Law, Biblical Studies, and
        Christian Counseling. She has received numerous accolades for her
        community leadership and service, including awards from US Senators,
        international organizations, and local authorities.
      </p>
    ),
  },
];

export default PasterSectionData;
