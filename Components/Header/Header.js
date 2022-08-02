import React, { useEffect, useState } from "react";
import Image from "next/image";
import style from "./head.module.css";

const Header = ({ activePage, setActivePage }) => {
  const [activeBar, setActiveBar] = useState(false);
  useEffect(() => {
    const resize = () => {
      window.innerWidth > 1020 && setActiveBar(true);
    };
    resize();
    window.addEventListener("resize", resize);
  }, []);
  const handleNavigation = (e) => {
    setActivePage(e.target.innerText);
    if (window.innerWidth > 1020 === false) {
      handleSideBar();
    }
  };
  const handleSideBar = () => {
    !activeBar ? setActiveBar(true) : setActiveBar(false);
  };
  return (
    <div>
      <div className={style.headContainer}>
        <div className={style.company}>
          <div className={style.companyInfo}>
            <Image
              src="/icon.png"
              alt="Compnay Logo"
              width="110px"
              height="65px"
            />
            <span>Web Expert Agency</span>
          </div>
          <div className={style.expandIcon}>
            <Image
              src="/assets/menuIcon.png"
              alt="expandIcon"
              width={"35px"}
              height="35px"
              onClick={handleSideBar}
            />
          </div>
        </div>
        <div
          className={style.navMenu}
          style={{ maxWidth: !activeBar ? "0px" : "100%" }}
        >
          <ul>
            <li
              className={`${style.menu} ${
                activePage === "Home" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              Home
            </li>
            <li
              className={`${style.menu} ${
                activePage === "Services" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              Services
            </li>
            <li
              className={`${style.menu} ${
                activePage === "AboutUs" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              AboutUs
            </li>
            <li
              className={`${style.menu} ${
                activePage === "ContactUs" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              ContactUs
            </li>
            <li
              className={`${style.menu} ${
                activePage === "Pricing" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              Pricing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
