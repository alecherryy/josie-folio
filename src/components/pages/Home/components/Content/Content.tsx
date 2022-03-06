import "./styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { Social } from "../../../../core/Social/Social";
import { Fade } from "react-awesome-reveal";
import { Callout } from "../../../../core/Callout/Callout";

/**
 * Content component
 */
export const Content = () => {
  const navigate = useNavigate();
  return (
    <div className="c-content">
      <Fade delay={500} direction="up" cascade>
        <h1>hello,<br />
          i'm josie
        </h1>
        <p className="u-mb-6">bitcoin core developer</p>
      </Fade>
      <Callout direction="right" action={() => navigate('/projects')} buttonText="Latest Projects">
        <p className="u-mb-6">
          checkout my latest <Link to="/blog">articles
          </Link> and <a href="https://github.com/josibake" rel="noreferrer" target="_blank">github</a>.
        </p>
        <Social />
      </Callout>
    </div>
  )
}