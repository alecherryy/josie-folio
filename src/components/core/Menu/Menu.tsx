import e from "express";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "../../../interfaces";
import './styles.scss';

/**
 * Button component
 */
type Props = {
  modifierClasses?: string
  items: Link[],
}
export const Menu = ({ modifierClasses = '', items }: Props) => {
  const [active, setActive] = useState<number>();

  console.log(active);
  const getActiveClass = (navData: any, index: number) => {
    // setActive(index);
    return navData.isActive ? 'c-menu__link is-active' : 'c-menu__link';
  }
  return (
    <nav className={[
      'c-menu',
      modifierClasses
    ].join(' ').trim()}>
      <ul className="c-menu__menu">
        {items.map((item: Link, index: number) => (
          <li className="c-menu__item" key={index} onClick={(e: any) => setActive(index)}>
            <NavLink
              className={(navData: any) => getActiveClass(navData, index)}
              to={item.path}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
        {/* <li className="c-menu__hover" ></li> */}
      </ul>
    </nav>
  )
}