import "./styles.scss";
import { Fade } from "react-awesome-reveal";
import { Post } from "../../../../../interfaces";
import { Teaser } from "../../../../core/Teaser/Teaser";

/**
 * Posts component
 */
type Props = {
  posts: Post[],
}
export const Posts = ({ posts }: Props) => {
  return (
    <ul className="c-posts">
      {posts.map((post: Post, index: number) => {
        return (
          <li key={index} className="c-posts__item">
            <Fade direction="up" cascade delay={100 * index} triggerOnce>
              <Teaser post={post} />
            </Fade>
          </li>
        )
      })}
    </ul>
  )
}