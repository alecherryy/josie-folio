import { Link } from "react-router-dom";
import { Post } from "../../../interfaces";
import './styles.scss';

/**
 * Logo component
 */
type Props = {
  post: Post
}
export const Teaser = ({ post }: Props) => {
  const path = post.title.toLowerCase().replaceAll(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').replaceAll(' ', '-');
  const date = (new Date(post.date)).toLocaleString('en-US', {year: 'numeric', month: 'long', day: 'numeric'});
  return (
    <div className="c-teaser">
      <h5>{post.title}</h5>
      <p className="u-txt-xs u-txt-grey-3">{date}</p>
      <Link className="c-button c-button--text-small" to={`/blog/${path}`}>Read more</Link>
    </div>
  )
}