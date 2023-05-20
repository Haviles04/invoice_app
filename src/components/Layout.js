import React from "react";
import Navbar from "./Navbar";
import { useTheme } from "@/context/ThemeContextProvider";
import styles from "@/styles/Layout.module.css";

function Layout({ children }) {
  const { isDarkMode } = useTheme();
  return (
    <div className={isDarkMode ? `${styles.dark}` : `${styles.light}`}>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
