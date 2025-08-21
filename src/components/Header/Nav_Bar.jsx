import { useState } from "react";
import "../../style/main.css";
import Logo from "./Logo";
import Navtabs from "./Navtabs";
import ToggleMenu from "./ToggleMenu";
function Nav_Bar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="Navbar-Container">
      <div className="content">
        <div className="logoContainer">
          <Logo />
        </div>

        <button
          className="custom-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <ToggleMenu />
        </button>
        <div className={`menu-container ${menuOpen ? "open" : ""}`}>
          <Navtabs />
        </div>
      </div>
    </div>
  );
}

export default Nav_Bar;
