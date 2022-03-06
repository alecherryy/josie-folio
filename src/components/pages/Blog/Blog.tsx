import { blogPosts } from "../../../assets/blog-posts"
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
        right={<Posts posts={blogPosts} />}
      />
    </div>
  )
}