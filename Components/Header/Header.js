import React, { useEffect } from "react";
import { observer } from "mobx-react";
import Image from "next/image";
import style from "./head.module.css";
import globalStore from "../../Store/globalStore";

const Header = observer(() => {
  useEffect(() => {
    const resize = () => {
      window.innerWidth > 1020 && globalStore.setActiveBar(true);
    };
    resize();
    window.addEventListener("resize", resize);
  }, []);
  const handleNavigation = (e) => {
    globalStore.setActivePage(e.target.innerText);
    if (window.innerWidth > 1020 === false) {
      handleSideBar();
    }
  };
  const handleSideBar = () => {
    !globalStore.activeBar
      ? globalStore.setActiveBar(true)
      : globalStore.setActiveBar(false);
  };
  return (
    <div>
      <div className={style.headContainer}>
        <div className={style.company}>
          <div className={style.companyInfo}>
            <Image
              src="/image2.png"
              alt="Compnay Logo"
              width="288px"
              height="80px"
            />
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
          style={{ maxWidth: !globalStore.activeBar ? "0px" : "100%" }}
        >
          <ul>
            <li
              className={`${style.menu} ${
                globalStore.activePage === "Home" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              Home
            </li>
            <li
              className={`${style.menu} ${
                globalStore.activePage === "Services" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              Services
            </li>
            <li
              className={`${style.menu} ${
                globalStore.activePage === "AboutUs" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              AboutUs
            </li>
            <li
              className={`${style.menu} ${
                globalStore.activePage === "ContactUs" ? style.active : ""
              }`}
              onClick={handleNavigation}
            >
              ContactUs
            </li>
            <li
              className={`${style.menu} ${
                globalStore.activePage === "Pricing" ? style.active : ""
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
});

export default Header;
