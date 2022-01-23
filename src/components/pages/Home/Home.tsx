import { Split } from "../../layouts/Split/Split"
import { Content } from "./components/Content/Content"
import { CompositeImage } from "../../core/CompositeImage/CompositeImage";

/**
 * Home page
 */
export const Home = () => {

  return (
    <div className="p-home">
      <Split
        left={<CompositeImage />}
        right={<Content />}
      />
    </div>
  )
}