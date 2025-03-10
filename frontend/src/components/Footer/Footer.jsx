import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            at sint, qui inventore temporibus molestias corrupti soluta dolores
            minus voluptatibus quidem, dolor, unde officia! Id corrupti
            molestias illo enim non.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook icon" />
            <img src={assets.twitter_icon} alt="twitter icon" />
            <img src={assets.linkedin_icon} alt="linkedin icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick = {() => navigate('/')}>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>
              <a href="tel:+380988888833">+380988888833</a>
            </li>
            <li>
              <a href="mailto:likeyou@tomato.com">likeyou@tomato.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 Tomato.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
