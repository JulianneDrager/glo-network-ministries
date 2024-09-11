import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";
import One from "../../Assets/Gallery/1m.jpg";
import Two from "../../Assets/Gallery/2m.jpg";
import Three from "../../Assets/Gallery/3m.jpg";
import Four from "../../Assets/Gallery/4m.jpg";
import Five from "../../Assets/Gallery/5m.jpg";
import Six from "../../Assets/Gallery/6m.jpg";
import Seven from "../../Assets/Gallery/7m.jpg";
import Eight from "../../Assets/Gallery/8m.jpg";
import Nine from "../../Assets/Gallery/9m.jpg";
import Ten from "../../Assets/Gallery/10m.jpg";
import Eleven from "../../Assets/Gallery/11m.jpg";
import Twelve from "../../Assets/Gallery/12m.jpg";

import lgOne from "../../Assets/Gallery/1l.jpg";
import lgTwo from "../../Assets/Gallery/2l.jpg";
import lgThree from "../../Assets/Gallery/3l.jpg";
import lgFour from "../../Assets/Gallery/4l.jpg";
import lgFive from "../../Assets/Gallery/5l.jpg";
import lgSix from "../../Assets/Gallery/6l.jpg";
import lgSixa from "../../Assets/Gallery/6la.jpg";
import lgSixb from "../../Assets/Gallery/6lb.jpg";
import lgSeven from "../../Assets/Gallery/7l.jpg";
import lgEight from "../../Assets/Gallery/8l.jpg";
import lgNine from "../../Assets/Gallery/9l.jpg";
import lgTen from "../../Assets/Gallery/10l.jpg";
import lgEleven from "../../Assets/Gallery/11l.jpg";
import lgTwelve from "../../Assets/Gallery/12l.jpg";

import { useMediaQuery } from "@mui/material";

const GalleryAbout = () => {
  const matchMobile = useMediaQuery("(min-width: 725px)");
  return !matchMobile ? (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="fade"
      transitionTime="500"
      interval={2000}
    >
      <div>
        <Image src={One} />
      </div>
      <div>
        <Image src={Two} />
      </div>
      <div>
        <Image src={Three} />
      </div>
      <div>
        <Image src={Four} />
      </div>
      <div>
        <Image src={Five} />
      </div>
      <div>
        <Image src={Six} />
      </div>
      <div>
        <Image src={Seven} />
      </div>
      <div>
        <Image src={Eight} />
      </div>
      <div>
        <Image src={Nine} />
      </div>
      <div>
        <Image src={Ten} />
      </div>
      <div>
        <Image src={Eleven} />
      </div>
      <div>
        <Image src={Twelve} />
      </div>
    </Carousel>
  ) : (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showArrows={true}
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      animationHandler="fade"
      transitionTime="500"
      interval={2000}
    >
      <div>
        <Image src={lgOne} />
      </div>
      <div>
        <Image src={lgTwo} />
      </div>
      <div>
        <Image src={lgThree} />
      </div>
      <div>
        <Image src={lgFour} />
      </div>
      <div>
        <Image src={lgFive} />
      </div>
      <div>
        <Image src={lgSix} />
      </div>
      <div>
        <Image src={lgSixa} />
      </div>
      <div>
        <Image src={lgSixb} />
      </div>
      <div>
        <Image src={lgSeven} />
      </div>
      <div>
        <Image src={lgEight} />
      </div>
      <div>
        <Image src={lgNine} />
      </div>
      <div>
        <Image src={lgTen} />
      </div>
      <div>
        <Image src={lgEleven} />
      </div>
      <div>
        <Image src={lgTwelve} />
      </div>
    </Carousel>
  );
};
export default GalleryAbout;
