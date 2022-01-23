import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "../../../interfaces";
import { fadeIn, fadeOut } from "../../../utils/utils";
import './styles.scss';

/**
 * Button component
 */
type Props = {
  modifierClasses?: string
  items: Link[],
}
export const MobileMenu = ({ modifierClasses = '', items }: Props) => {
  const [open, setOpen] = useState(false);

  const getActiveClass = (navData: any) => {
    return navData.isActive ? 'c-mobile-menu__link is-active' : 'c-mobile-menu__link';
  }

  const closeMenu = (e: any) => {
    const menu = e.target.parentNode.parentNode;

    fadeOut(menu);
    setOpen(false);
  }

  const toggleMenuDisplay = (e: any) => {
    const menu = e.target.nextElementSibling;
    if (open) {
      fadeOut(menu);
    } else {
      fadeIn(menu);
    }
    setOpen(!open);
  }
  return (
    <nav className={[
      'c-mobile-menu',
      modifierClasses
    ].join(' ').trim()}>
      <button onClick={(e: any) => toggleMenuDisplay(e)} className="c-mobile-menu__btn">{open ? 'Close' : 'Menu'}</button>
      <ul className="c-mobile-menu__menu" style={{display: 'none', opacity: '0'}}>
        {items.map((item: Link, index: number) => (
          <li className="c-mobile-menu__item" key={index}>
            <NavLink
              onClick={(e: any) => closeMenu(e)}
              className={(navData: any) => getActiveClass(navData)}
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}