import React, { useState } from "react";
import styles from "./topnavbar.module.css";
import TopNavBarItem from "./topnavbaritem";
import { useTranslation } from 'next-i18next';

const TopNavBar = () => {
  const { t } = useTranslation('common')
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const MENU_LIST = [
    { text: t('pages_home'), href: "/" },
    { text: t('pages_projects'), href: "/projects" },
    { text: t('pages_ilustrations'), href: "/ilustrations" },
    { text: t('pages_about'), href: "/about" },
  ];

  const handleMenuClick = (idx) => {
    setActiveIdx(idx);
    setNavActive(false);
  }

  return (
    <div onClick={() => setNavActive(!navActive)} className={styles.topnav}>
      {MENU_LIST.map((menu, idx) => (
        <div
          onClick={() => handleMenuClick(idx)}
          key={menu.text}
          className={activeIdx === idx ? 'active' : ''}
        >
          <TopNavBarItem {...menu} />
        </div>
      ))}
    </div>

  );
};

export default TopNavBar;