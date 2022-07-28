import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* icons */}
        <div className="icons-container">
          <p>Connect with us</p>
          <div className="icons">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        {/* copyright */}
        <div className="copyright">&copy; Groupii</div>
        {/* Company info */}
        <div className="company-info">
          <div>Company</div>
          <div>About us</div>
          <div>Contact Us</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
