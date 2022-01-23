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
export const Menu = ({ modifierClasses = '', items}: Props) => {
  return (
    <nav className={[
      'c-menu',
      modifierClasses
    ].join(' ').trim()}>
      <ul className="c-menu__menu">
        {items.map((item: Link) => (
          <li className="c-menu__item">
            <NavLink className="c-menu__link" to={item.path}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}