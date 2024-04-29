import Header from "../../component/Header";
import landingPageImage from "../../assets/landingPage.png";
import firstImage from "../../assets/first.png";
import secondImage from "../../assets/second.png";
import thirdImage from "../../assets/third.png";
import forthImage from "../../assets/forth.png";
import phone from "../../assets/phone.png";
import card from "../../assets/card.png";

import { LandingPageMainWrapper } from "./LandingPageStyle";
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

export default function LandingPage() {
  return (
    <>
      <Header />

      <LandingPageMainWrapper className="landing-page-main-body-wrapper">
        <div className="landing-page-inner-body-wrapper">
          <div className="landing-page-first-section-wrapper">
            <div className="landing-page-left-wrapper">
              <h1>
                <span>Enjoy</span> High Yield <br />
                Fixed Deposit
                <br /> Investment
              </h1>
              <Link to="/">Enjoy 18% Investement returns</Link>
            </div>
            <div className="landing-page-right-wrapper">
              <img src={landingPageImage} alt="traidr-buying-and-selling" />
            </div>
          </div>
          <div className="landing-page-second-section-wrapper">
            <h1>Why Our Fixed Deposit Investment?</h1>

            <p className="">
              Let your money work for you. Fix your money for specific periods
              and get high interest rates with our secure fixed deposits.
            </p>

            <div className="second-section-card-wrapper">
              <div className="card-wrapper-inner">
                <div className="each-card">
                  <div className="card-image">
                    <img src={firstImage} alt="" />
                  </div>
                  <p className="">18% Hight Interest Rate</p>
                </div>
                <div className="each-card">
                  <div className="card-image">
                    <img src={secondImage} alt="" />
                  </div>
                  <p className="">Regulated by CBN</p>
                </div>
                <div className="each-card">
                  <div className="card-image">
                    <img src={thirdImage} alt="" />
                  </div>
                  <p className="">Insured by the NDIC</p>
                </div>
                <div className="each-card">
                  <div className="card-image">
                    <img src={forthImage} alt="" />
                  </div>
                  <p className="">Instant Withdrawal</p>
                </div>
              </div>
              <Link to="/">Enjoy 18% Investement returns</Link>
            </div>
          </div>
          <div className="forth-section-wrapper">
            <p className="">
              CredPal financial services are offered by Bishopgate microfinance
              bank fully license and regulated by Central bank of Nigeria .This
              APY is effective as of 07/14/2022 and may change at any time
              before or after your investement placement. Please ensure you’ve
              updated rates. account opening. Affirm savings accounts are held
              with Bishopgate Micofinance bank, Member NDIC.{" "}
            </p>
          </div>
          <div className="download-app-wrapper">
            <div className="left-download-wrapper">
              <h1>
                Download the <br /> CredPal app to <br /> get Started
              </h1>
              <p className="">
                Join millions of satisfied customers who are already use CredPal
                to access credit, make payments , invest & many more!
              </p>
            </div>
            <div className="right-download-image-wrapper">
              <div className="phone-image">
                <img src={phone} alt="traidr-buying-and-selling" />
              </div>
              <div className="card-img">
                <img src={card} alt="traidr-buying-and-selling" />
              </div>
            </div>
          </div>
        </div>
      </LandingPageMainWrapper>
      <Footer />
    </>
  );
}