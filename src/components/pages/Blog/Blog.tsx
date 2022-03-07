import { BLOG_POSTS } from "../../../utils/constants"
import { Split } from "../../layouts/Split/Split"
import { Content } from "./components/Content/Content"
import { Posts } from "./components/Posts/Posts"

/**
 * Blog page
 */
export const Blog = () => {
  return (
    <div className="p-blog">
      <Split
        left={<Content />}
        right={<Posts posts={BLOG_POSTS} />}
      />
    </div>
  )
}