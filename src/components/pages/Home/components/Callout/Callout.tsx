import "./styles.scss";
import { Button } from "../../../../core/Button/Button"
import { useNavigate } from "react-router-dom";
import { ReactNode } from "react";

/**
 * Callout component
 */
type Props = {
  children?: ReactNode
}
export const Callout = ({ children }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="c-callout">
      <div className="c-callout__inner">
        {children}
      </div>
      <Button text="Latest projects" onClick={() => navigate('/projects')} />
    </div>
  )
}