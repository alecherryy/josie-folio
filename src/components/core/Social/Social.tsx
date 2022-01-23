import { Link } from "../../../interfaces";
import './styles.scss';

/**
 * Social menu component
 */
const ITEMS: Link[] = [
  {
    text: 'twitter',
    path: 'https://twitter.com/josibake'
  },
  {
    text: 'github',
    path: 'https://github.com/josibake'
  },
]
export const Social = () => {
  return (
    <ul className="c-social">
      {ITEMS.map((item: Link) => (
        <li className="c-social__item" key={item.text}>
          <a className={`c-social__link c-social__link--${item.text}`} href={item.path} rel="noreferrer" target="_blank">{item.text}</a>
        </li>
      ))}
    </ul>
  )
}