import { Split } from "../../layouts/Split/Split"
import { Content } from "./components/Content/Content"
import Shapes from "../../../images/shape-groups.svg";

/**
 * Home page
 */
export const Home = () => {
  return (
    <Split left={<div className="u-pl-9"><img src={Shapes} alt="shape cluster" /></div>} right={<Content />} />
  )
}