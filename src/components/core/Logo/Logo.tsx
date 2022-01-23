import { Slide } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import Image from "../../../images/logo.svg";
import './styles.scss';

/**
 * Logo component
 */
export const Logo = () => {
  return (
    <Slide direction="left">
      <NavLink className="c-logo" to="/">
        <img src={Image} alt="josie logo" />
      </NavLink>
    </Slide>
  )
}