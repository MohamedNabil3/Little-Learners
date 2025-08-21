import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "../../style/main.css";
function Navtabs() {
  return (
    <Nav className="NavContainer" as="ul">
      <Nav.Item as="li">
        <NavLink
          id="NavLink"
          to="/"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
          end
        >
          Home
        </NavLink>
      </Nav.Item>

      <Nav.Item as="li">
        <NavLink
          id="NavLink"
          to="/about"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          About Us
        </NavLink>
      </Nav.Item>

      <Nav.Item as="li">
        <NavLink
          id="NavLink"
          to="/academies"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Academic
        </NavLink>
      </Nav.Item>

      <Nav.Item as="li">
        <NavLink
          id="NavLink"
          to="/admissions"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Admissions
        </NavLink>
      </Nav.Item>

      <Nav.Item as="li">
        <NavLink
          id="NavLink"
          to="/student"
          className={({ isActive }) =>
            isActive ? "active nav-link" : "nav-link"
          }
        >
          Student life
        </NavLink>
      </Nav.Item>

      <Nav.Item as="li">
        <NavLink
          id="contactLink"
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active nav-link ContactBtn" : "nav-link ContactBtn"
          }
        >
          Contact
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Navtabs;
