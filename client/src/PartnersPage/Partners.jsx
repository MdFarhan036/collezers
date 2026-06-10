import React, { useState } from "react";
// import { Partnersdata } from '../../assets/'
import { PartnersCard } from "./PartnersCard";
import { Link } from "react-router-dom";
import image1 from "../assets/partner/LPUONLINE.png";
import image2 from "../assets/partner/onlinemanipal.png";
import image3 from "../assets/partner/gla-logo-12-b.png";
import image4 from "../assets/partner/JAIN_Online_Logo_2.jpg";
import image5 from "../assets/partner/amity_logo_5ee70d67b4_f4e929fb4a.svg";
import image6 from "../assets/partner/DPU-COL Logo png.png";
import image7 from "../assets/partner/SGVUONLINE.png";
import image8 from "../assets/partner/SMUONLINE.webp";
import image9 from "../assets/partner/CUONLINE.webp";
import image10 from "../assets/partner/ONLINEVGU.png";
import image11 from "../assets/partner/parullogo.png";
import image12 from "../assets/partner/maharishi.png";
import image13 from "../assets/partner/jnu-logo1.png";
import image14 from "../assets/partner/jecrc--university1.png";
import image15 from "../assets/partner/uttaranchal-logo.png";
import image16 from "../assets/partner/geetauniv.png";
import image17 from "../assets/partner/future-logo-new.jpg";

export const Partners = () => {
  // const [partnerDetail, setPartnerDetail] = useState(Partnersdata)
  return (
    <div className="partners">
      <h2 className="partner-title">
        Accredited with NAAC A A+ A++ Online/Distance Education Universities
      </h2>
      <div className="partner-container">
        {/* {partnerDetail.map((item) => { */}
        <div className="partner-box">
          <Link to="./lpu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image1} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>LPU Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./manipal" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image2} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Manipal University Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./gla" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image3} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>GLA Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./jain" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image4} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Jain Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./amity" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image5} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Amity Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./dypu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image6} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Dy Patil online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./sgvu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image7} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>SGVU</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./smu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image8} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>SMU Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./cu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image9} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>CU Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./vgu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image10} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>VGU Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./parul" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image11} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>parul Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./maharishi" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image12} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Maharishi Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./jnu" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image13} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>JNU Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./jecrc" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image14} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>jecrc Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./uttranchal" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image15} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>uttranchal Online</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./geeta" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image16} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Geeta</p>
            </div>
          </Link>
        </div>
        <div className="partner-box">
          <Link to="./future" className="blogItem-link">
            <div className="card-banner img-holder">
              <img src={image17} alt="partnersimg1" className="partnersimg" />
            </div>
            <div className="partners-content">
              <p>Future</p>
            </div>
          </Link>
        </div>
     
        {/* })} */}
      </div>
    </div>
  );
};
