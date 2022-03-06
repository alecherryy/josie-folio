import "./styles.scss";
import { Fade } from "react-awesome-reveal";
import { Callout } from "../../../../core/Callout/Callout";

/**
 * Content component
 */
export const Content = () => {
  return (
    <div className="c-content">
      <Fade delay={200} direction="up" cascade className="c-content__text">
        <h1>blog
        </h1>
        <p className="u-mb-6">latest articles and news</p>
      </Fade>
      <Callout modifierClasses="c-callout--plain" direction="left" action={() => {}} buttonText="Read more">
          <span className="u-txt-eyebrow">Featured Post</span>
          <h4>Ancillae euripidis laboramus ea has, at indoctum repudiandae nec.</h4>
          February 28, 20222
      </Callout>
    </div>
  )
}