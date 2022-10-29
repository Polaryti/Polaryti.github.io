import React, { useState } from "react";
import styles from "./topnavbar.module.css";
import TopNavBarItem from "./topnavbaritem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Test", href: "/test" },
];

const TopNavBar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <div onClick={() => setNavActive(!navActive)} className={styles.topnav}>
      {MENU_LIST.map((menu, idx) => (
        <div
          onClick={() => {
            setActiveIdx(idx);
            setNavActive(false);
          }}
          key={menu.text}
        >
          <TopNavBarItem active={activeIdx === idx} {...menu} />
        </div>
      ))}
    </div>

  );
};

export default TopNavBar;

