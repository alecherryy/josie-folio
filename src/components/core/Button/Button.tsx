import React from "react";
import './styles.scss';

/**
 * Button component
 */
type ButtonProps = React.HTMLProps<HTMLButtonElement>;
type RequiredProps = Required<Pick<ButtonProps, 'onClick'>>;
type Props = RequiredProps & {
  text: string,
  modifierClasses?: string
}
export const Button = ({ modifierClasses = '', text, onClick}: Props) => {
  return (
    <button className={[
      'c-button',
      modifierClasses
    ].join(' ').trim()} onClick={onClick}>{text}</button>
  )
}