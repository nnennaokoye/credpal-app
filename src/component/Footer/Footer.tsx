import FooterStyle from "./FooterStyle";
import credpalLogo from "../../assets/credpalwhite.png";

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-inner">
        <div className="eachfooter-card">
          <img className="footer-logo" src={credpalLogo} alt="footer logo" />
          <p className="footer-text">
            CredPal is a revolutionary credit solution geared towards providing
            seamless credit access for businesses and individuals across
            developing economies.
          </p>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;