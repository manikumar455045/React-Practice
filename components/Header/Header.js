import React from "react";
import "./Header.css";
import logo from "../../Assets/Mani.png";

const Header = () => {
  const links = [
    {
      name: "Services",
      link: "/",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <>
      <header>
        <div class="nav">
          <div className="image-wrapper">
            <img src={logo} />
          </div>

          <ul className="nav-wrapper">
            {links.map((link) => {
              return (
                <li>
                  <a className="nav-links" href={link.link}>
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button className="btn-login">
            Login
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
