import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import styles from "@/styles/Navbar.module.css";
import avatar from "@/assets/image-avatar.jpg";
import Sun from "@/assets/icon-sun.svg";
import Moon from "@/assets/icon-moon.svg";
import { useTheme } from "@/context/ThemeContextProvider";

function Navbar() {
  const { isDarkMode, setIsDarkMode } = useTheme();
  const themeIcon = isDarkMode ? Moon : Sun;

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src={Logo} alt="logo" />
          <div className={styles.mask}></div>
        </div>
        <div className={styles.bottomContainer}>
          <Image
            className={styles.theme}
            src={themeIcon}
            alt={isDarkMode ? "Moon" : "Sun"}
            onClick={() => setIsDarkMode(!isDarkMode)}
          />
          <span className={styles.break}></span>
          <Image className={styles.avatar} src={avatar} alt="user avatar" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
