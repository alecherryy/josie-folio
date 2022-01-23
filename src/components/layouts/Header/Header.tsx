import React, { useEffect, useState } from "react";
import { Link } from "../../../interfaces";
import { Logo } from "../../core/Logo/Logo";
import { Menu } from "../../core/Menu/Menu";
import { MobileMenu } from "../../core/MobileMenu/MobileMenu";
import './styles.scss';

/**
 * Header layout
 */
const MENU_ITEMS: Link[] = [
  {
    text: 'blog',
    path: '/blog'
  },
  {
    text: 'projects',
    path: '/projects'
  },
  {
    text: 'about',
    path: '/about'
  },
  {
    text: 'contact',
    path: '/contact'
  },
]
const currentScreen = window.innerWidth < 640;
export const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(currentScreen);


  useEffect(() => {
    console.log(window.innerWidth)
    checkIfMobile();
    window.addEventListener('resize', () => {
      setTimeout(() => {
        checkIfMobile();
      }, 200)
    })
  })
  const checkIfMobile = () => {
    const screenSize = window.innerWidth;

    if (screenSize < 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  return (
    <header className="l-header">
      <Logo />
      {isMobile ? (
        <MobileMenu items={MENU_ITEMS} />
      ) : (
        <Menu items={MENU_ITEMS} />
      )}
    </header>
  )
}