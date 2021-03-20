import "./style.css";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';


function Menu() {
return(
        <Nav className="Industries-Services flex-column">
              <Link
                to="/industries"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/industries"
                    ? "Industries-Services text-style-1"
                    : "Industries-Services"
                }
              >
                Industries
              </Link>
              <Link
                to="/services"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/services"
                  ? "Industries-Services text-style-1"
                  : "Industries-Services"
                }
              >
                  Services
              </Link>
              <Link
                to="/about"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                  ? "Industries-Services text-style-1"
                  : "Industries-Services"
                }
              >
                About Us
              </Link>
              </Nav>

);



};

export default Menu;