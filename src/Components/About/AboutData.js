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
        body: <h1>About <span className={purpleText}>G.L.O.</span></h1>
    },
    {
        id: 2,
        body: <p>We believe creating platforms to display the importance of the performing arts and collaborating feeding programs are some of the most effective ways to improving human conditions and community outreach.{' '}
            <span className={goldText}>GLOBAL LEADERS OUTREACH</span> helps impulse arts & culture in an intercultural exchange project to bridge social good programs.
        </p>
    },
    {
        id: 3,
        body: <Image src={quote} className={quotationMark} />
    },
    {
        id: 4,
        body: <div className={quoteWrapper}>
            <em className={quotation}>Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven</em>
        </div>
    }
];

export default AboutData;