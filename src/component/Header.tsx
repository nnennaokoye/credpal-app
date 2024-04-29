import credPalLogo from "../assets/credPalLogo.svg";
import "./HeaderStyle.tsx";
import HeaderStyle from "./HeaderStyle.tsx";
import { Link } from "react-router-dom";

export default function Header() {
  
  
  return (
    <>
      
      <HeaderStyle>
        <div className="header-inner">
          <div className="left-header-wrapper">
            <div className="logo-wrapper-inner">
              <Link to={"/"}>
                <img
                  src={credPalLogo}
                  alt="credpal-logo"
                  className="credpal-logo"
                />
              </Link>
            </div>
            <Link to={"/"}>Personal</Link>
            <Link to={"/"}>Retail</Link>
            <Link to={"/"}>Busines</Link>
          </div>
          <div className="header-right-btn-wrapper">
            <Link to={"/"}>FAQs</Link>
            <Link to={"/"}>Sign in</Link>
            <Link className="get-app" to={"/"}>
              Get App
            </Link>
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
