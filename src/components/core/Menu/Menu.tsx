import { Slide } from "react-awesome-reveal";
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
  const getActiveClass = (navData: any, index: number) => {
    return navData.isActive ? 'c-menu__link is-active' : 'c-menu__link';
  }

  return (
    <Slide direction="right">
      <nav className={[
        'c-menu',
        modifierClasses
      ].join(' ').trim()}>
        <ul className="c-menu__menu">
          {items.map((item: Link, index: number) => (
            <li className="c-menu__item" key={index}>
              <NavLink
                className={(navData: any) => getActiveClass(navData, index)}
                to={item.path}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Slide>
  )
}