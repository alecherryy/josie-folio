import { useEffect, useRef } from 'react';
import { fadeOut } from '../../../utils/utils';
import { Fade } from "react-awesome-reveal";
import './styles.scss';

/**
 * Splash component
 */
type Props = {
  title: string,
}
export const Splash = ({ title }: Props) => {
  const elRef = useRef(null);

  useEffect(() => {
    if (elRef.current) {
      setTimeout(() => {
        fadeOut(elRef.current);
      }, 2000)
    }
    sessionStorage.setItem('isFirstVisit', 'true');
  }, []);

  return (
    <div className="c-intermezzo" ref={elRef} style={{display: 'flex', opacity: '1'}}>
      <div className="c-intermezzo__inner">
        <Fade delay={500} direction="up" cascade>
          <h5>{title}</h5>
          <p className="u-txt-sm">bitcoing core developer</p>
        </Fade>
      </div>
    </div>
  )
}