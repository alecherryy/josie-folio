import { ReactNode } from "react";
import './styles.scss';

/**
 * Split layout
 */
type Props = {
  left: ReactNode,
  right: ReactNode,
}
export const Split = ({ left, right}: Props) => {
  return (
    <div className="l-split">
      <div className="l-split__left">
        {left}
      </div>
      <div className="l-split__right">
        {right}
      </div>
    </div>
  )
}