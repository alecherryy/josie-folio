import "./styles.scss";
import { Button } from "../../../../core/Button/Button"
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";
import { Slide, Fade } from "react-awesome-reveal";

/**
 * Callout component
 */
type Props = {
  children?: ReactNode
}
export const Callout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <Slide direction="right" delay={700} cascade>
      <div className="c-callout">
        <Fade direction="up" cascade>
          <div className="c-callout__inner">
            {children}
          </div>
          <Button text="Latest projects" onClick={() => navigate('/projects')} />
        </Fade>
      </div>
    </Slide>
  )
}