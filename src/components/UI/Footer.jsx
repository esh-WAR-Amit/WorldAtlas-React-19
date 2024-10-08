/* eslint-disable no-undef */
// import footerContact from "../../api/footerApi.json";
// import { IoCallSharp } from "react-icons/io5";
// import { MdPlace } from "react-icons/md";
// import { TbMailPlus } from "react-icons/tb";

// import { NavLink } from "react-router-dom";

// export const Footers = () => {
//   const footerIcon = {
//     MdPlace: <MdPlace />,
//     IoCallSharp: <IoCallSharp />,
//     TbMailPlus: <TbMailPlus />,
//   };

//   return (
//     <footer className="footer-section">
//       <div className="container grid grid-three-cols">
//         {footerContact.map((curData, index) => {
//           const { icon, title, details } = curData;
//           return (
//             <div className="footer-contact" key={index}>
//               <div className="icon">{footerIcon[icon]}</div>
//               <div className="footer-contact-text">
//                 <p>{title}</p>
//                 <p>{details}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="copyright-area">
//         <div className="container">
//           <div className="grid grid-two-cols">
//             <div className="copyright-text">
//               <p>
//                 Copyright &copy; 2024, All Right Reserved
//                 <NavLink to="/" target="_blank">
//                   AmiteshwarKumar
//                 </NavLink>
//               </p>
//             </div>

//             <div className="footer-menu">
//               <ul>
//                 <li>
//                   <NavLink to="/">Home</NavLink>
//                 </li>

//                 <li>
//                   <NavLink
//                     to="https://www.linkedin.com/in/amiteshwar-kumar-ba8634270/"
//                     target="_blank"
//                   >
//                     Social
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="https://github.com/esh-WAR-Amit" target="_blank">
//                     Source Code
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact">Contact</NavLink>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

////adding own
/////////////////////////////////////////////////////////////////////////////
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

export const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    } else {
      // Add form submission logic here if the email is valid
      alert("Thank you for subscribing!");
    }
  };

  return (
    <footer>
      <div className="newsletter-signup">
        <h2>Signup for latest news and insights from WorldMap</h2>
        <p>
          Stay updated with the latest trends, news, and insights related to
          maps and geographical data.
        </p>
        <h3>Subscribe to our newsletter now!</h3>
        <div className="signup-form">
          <div>
            <input
              type="email"
              placeholder="Enter your valid email address"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state with input
            />
          </div>
          <div>
            <button type="button" onClick={handleSubscribe}>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-column">
          <h3>WorldMap</h3>
          <p>
            We provide international tour packages for brands and companies by
            using latest advanced technologies.
          </p>
          <div className="social-icons">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitterSquare />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Latest blog</h3>
          <a href="#">I think really important to plan tours...</a>
          <a href="#">Recognizing the need is the primary...</a>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="#">About company</a>
          <a href="#">Company services</a>
          <a href="#">Job opportunities</a>
          <a href="#">Creative people</a>
        </div>

        <div className="footer-column">
          <h3>Customer</h3>
          <a href="#">Client support</a>
          <a href="#">Latest news</a>
          <a href="#">Company story</a>
          <a href="#">Pricing packages</a>
        </div>

        <div className="footer-column">
          <h3>Contact Info</h3>
          <p>Email: WorldMap@gmail.com</p>
          <p>Phone: +91 979 888 4565</p>
          <p>Address: Floor No.127, Mohali Tower, Chandigarh</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 WorldMap</p>
        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Legal notice</a>
          <a href="#">Terms of service</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};
