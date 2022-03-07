import "./styles.scss";
import { Button } from "../Button/Button"
import { ReactNode } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import { flattenClassNames } from "../../../utils/utils";

/**
 * Callout component
 */
type Props = {
  modifierClasses?: string,
  direction: 'left' | 'right',
  children?: ReactNode,
  action?: () => void,
  buttonText?: string,
}
export const Callout = ({ modifierClasses = '', direction, children, action, buttonText = '' }: Props) => {
  const classes = `c-callout--${direction} ${modifierClasses}`;
  return (
    <Slide direction={direction} delay={700} cascade triggerOnce>
      <div className={flattenClassNames('c-callout', classes)}>
        <Fade direction="up" cascade triggerOnce>
          <div className="c-callout__inner">
            {children}
          </div>
          { action && (
            <Button text={buttonText} onClick={action} modifierClasses="c-callout__btn" />
          )}
        </Fade>
      </div>
    </Slide>
  )
}