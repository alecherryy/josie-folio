import { HTMLAttributes } from "react";
import './styles.scss';

/**
 * Button component
 */
type ButtonProps = HTMLAttributes<HTMLButtonElement>;
type RequiredProps = Required<Pick<ButtonProps, 'onClick'>>;
type Props = RequiredProps & {
  text: string,
  modifierClasses?: string
}
export const Button = ({ modifierClasses = '', text, ...rest}: Props) => {
  return (
    <button {...rest} className={[
      'c-button',
      modifierClasses
    ].join(' ').trim()}>{text}</button>
  )
}