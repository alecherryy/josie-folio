import OrangeCircle from "../../../images/shape-circle-orange.svg";
import GreyCircle from "../../../images/shape-circle-grey.svg";
import WavesCircle from "../../../images/shape-circle-waves.svg";
import Dots from "../../../images/shape-dots.svg";
import HalfCircle from "../../../images/shape-half-circle.svg";
import './styles.scss';
import { Fade } from "react-awesome-reveal";

/**
 * Composite image component
 */
export const CompositeImage = () => {
  return (
    <Fade delay={500}>
      <div className="c-composite-image">
        <img className="c-composite-image__circle-orange" src={OrangeCircle} alt="orange circle shape" />
        <img className="c-composite-image__circle-waves" src={WavesCircle} alt="waves circle shape" />
        <img className="c-composite-image__dots" src={Dots} alt="dots shape" />
        <img className="c-composite-image__half-circle" src={HalfCircle} alt="half circle shape" />
        <img className="c-composite-image__circle-grey" src={GreyCircle} alt="half circle shape" />
      </div>
    </Fade>
  )
}