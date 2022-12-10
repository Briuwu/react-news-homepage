import React, { useEffect, useState } from "react";
import menuOpen from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import Logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("open");
    } else {
      document.body.classList.remove("open");
    }
  }, [menu]);

  const handleMenu = () => setMenu(!menu);

  return (
    <nav className="menu container">
      <img src={Logo} alt="logo" />
      <button className="menu-btn" onClick={handleMenu}>
        <img src={menu ? menuClose : menuOpen} alt="menu" />
      </button>
      <div className={`menu-all ${menu ? "open" : ""}`}>
        <ul className="menu-items">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
