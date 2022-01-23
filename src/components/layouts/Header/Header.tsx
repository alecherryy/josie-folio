import React from "react";
import { Link } from "../../../interfaces";
import { Menu } from "../../core/Menu/Menu";
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
export const Header = () => {
  return (
    <header className="l-header">
      <Menu items={MENU_ITEMS} />
    </header>
  )
}