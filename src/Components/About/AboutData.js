import { Image } from "react-bootstrap";
import AboutStyle from "../About/About.module.css";
import quote from "../../Assets/AllViews/quote.svg";

const goldText = AboutStyle.goldText;
const quotation = AboutStyle.quotation;
const quotationMark = AboutStyle.quotationMark;
const quoteWrapper = AboutStyle.quoteWrapper;
const purpleText = AboutStyle.purpleText;

const AboutData = [
  {
    id: 1,
    body: (
      <>
        <br />
        <h1>
          About <span className={purpleText}>G.L.O.</span>
        </h1>
      </>
    ),
  },
  {
    id: 2,
    body: (
      <p>
        <span className={goldText}>GLOBAL LEADERS OUTREACH (G.L.O)</span> is a
        ministry organization lead by the Holy Spirit and pastered by Dr. Teresa
        Bryant. We assist indigent populations, providing them with information
        and referrals, support services, advocacy and educational services for
        the sole purpose of leading the community to the Lord teaching them the
        Gospel. <br />
        <br />
        We believe in discipleship and walking in the spirit of excellence,
        rasing leaders to preach the Gospel to the nations. Its is G.L.O's hope
        that we can touch the community and create positive change leading
        people to the throne of Jesus Christ, creating the fruit of change,
        setting the foundation the word for generations to come.
        <br />
        <br />
      </p>
    ),
  },
  //   {
  //     id: 3,
  //     body: <Image src={quote} className={quotationMark} />,
  //   },
  {
    id: 4,
    body: (
      <div className={quoteWrapper}>
        <em className={quotation}>
          Let your light so shine before men, that they may see your good works,
          and glorify your Father which is in heaven
        </em>
      </div>
    ),
  },
];

export default AboutData;
